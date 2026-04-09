"use client";
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLoading } from "@/components/loading-context";
export function NavigationLoader() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { setNavigating } = useLoading();
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const updateRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const scheduleNavigatingUpdate = (loading: boolean) => {
        if (updateRef.current) {
            clearTimeout(updateRef.current);
        }
        updateRef.current = setTimeout(() => {
            setNavigating(loading);
            updateRef.current = null;
        }, 0);
    };
    useEffect(() => {
        scheduleNavigatingUpdate(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, [pathname, searchParams]);
    useEffect(() => {
        const startNavigation = () => {
            scheduleNavigatingUpdate(true);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                scheduleNavigatingUpdate(false);
            }, 8000);
        };
        const clickHandler = (event: MouseEvent) => {
            if (event.defaultPrevented)
                return;
            if (event.button !== 0)
                return;
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
            if (!anchor)
                return;
            if (anchor.target === "_blank")
                return;
            if (anchor.hasAttribute("download"))
                return;
            const href = anchor.getAttribute("href") ?? "";
            if (!href)
                return;
            if (href.startsWith("mailto:") || href.startsWith("tel:"))
                return;
            if (href.startsWith("javascript:"))
                return;
            let nextUrl: URL;
            let currentUrl: URL;
            try {
                nextUrl = new URL(anchor.href, window.location.href);
                currentUrl = new URL(window.location.href);
            }
            catch {
                return;
            }
            if (nextUrl.origin !== currentUrl.origin)
                return;
            if (nextUrl.pathname === currentUrl.pathname &&
                nextUrl.search === currentUrl.search &&
                nextUrl.hash === currentUrl.hash) {
                return;
            }
            startNavigation();
        };
        const originalPushState = window.history.pushState;
        const originalReplaceState = window.history.replaceState;
        window.history.pushState = function (...args) {
            startNavigation();
            return originalPushState.apply(this, args);
        };
        window.history.replaceState = function (...args) {
            startNavigation();
            return originalReplaceState.apply(this, args);
        };
        const popStateHandler = () => {
            startNavigation();
        };
        window.addEventListener("click", clickHandler, { capture: true });
        window.addEventListener("popstate", popStateHandler);
        return () => {
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener("click", clickHandler, { capture: true });
            window.removeEventListener("popstate", popStateHandler);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            if (updateRef.current) {
                clearTimeout(updateRef.current);
                updateRef.current = null;
            }
        };
    }, [setNavigating]);
    return null;
}
