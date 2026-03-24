export function normalizeColorForPicker(value: string, fallback: string) {
  const trimmed = value.trim();

  const rgbaMatch =
    /^rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*(?:[01](?:\.\d+)?|0?\.\d+))?\s*\)$/i.exec(
      trimmed,
    );
  if (rgbaMatch) {
    const toChannel = (input: string) =>
      Math.min(255, Math.max(0, Number.parseInt(input, 10)));
    const toHex = (channel: number) => channel.toString(16).padStart(2, "0");
    const r = toChannel(rgbaMatch[1]);
    const g = toChannel(rgbaMatch[2]);
    const b = toChannel(rgbaMatch[3]);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  const hslMatch =
    /^hsla?\(\s*([0-9]+(?:\.[0-9]+)?)\s*,\s*([0-9]+(?:\.[0-9]+)?)%\s*,\s*([0-9]+(?:\.[0-9]+)?)%(?:\s*,\s*(?:[01](?:\.\d+)?|0?\.\d+))?\s*\)$/i.exec(
      trimmed,
    );
  if (hslMatch) {
    return hslComponentsToHex(
      `${hslMatch[1]} ${hslMatch[2]}% ${hslMatch[3]}%`,
      fallback,
    );
  }

  const shortHexMatch = /^#([0-9a-fA-F]{3})$/.exec(trimmed);
  if (shortHexMatch) {
    const [r, g, b] = shortHexMatch[1].split("");
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) return trimmed;
  return fallback;
}

export function hslComponentsToHex(value: string, fallback: string) {
  const parts = value
    .trim()
    .split(/\s+/)
    .map((p) => p.replace("%", ""));
  if (parts.length !== 3) return fallback;
  const h = Number(parts[0]);
  const s = Number(parts[1]) / 100;
  const l = Number(parts[2]) / 100;
  if (!Number.isFinite(h) || !Number.isFinite(s) || !Number.isFinite(l))
    return fallback;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hh = (((h % 360) + 360) % 360) / 60;
  const x = c * (1 - Math.abs((hh % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (hh >= 0 && hh < 1) {
    r = c;
    g = x;
  } else if (hh >= 1 && hh < 2) {
    r = x;
    g = c;
  } else if (hh >= 2 && hh < 3) {
    g = c;
    b = x;
  } else if (hh >= 3 && hh < 4) {
    g = x;
    b = c;
  } else if (hh >= 4 && hh < 5) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }
  const toHex = (ch: number) =>
    Math.round((ch + m) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function hexToHslComponents(hexColor: string) {
  const match = /^#([0-9a-fA-F]{6})$/.exec(hexColor);
  if (!match) return "0 0% 0%";
  const rgb = match[1];
  const r = parseInt(rgb.slice(0, 2), 16) / 255;
  const g = parseInt(rgb.slice(2, 4), 16) / 255;
  const b = parseInt(rgb.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const lightness = (max + min) / 2;
  let hue = 0;
  if (delta !== 0) {
    if (max === r) hue = ((g - b) / delta) % 6;
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
  }
  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;
  const saturation =
    delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
  return `${hue} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%`;
}
