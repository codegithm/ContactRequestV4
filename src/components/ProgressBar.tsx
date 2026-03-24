interface ProgressBarProps {
  progress: number; // 0 to 100
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div
      className="progress-bar"
      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};

export default ProgressBar;
