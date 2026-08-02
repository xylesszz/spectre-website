import { twMerge } from "tailwind-merge";

type Status = "active" | "beta" | "coming-soon";

const styles: Record<Status, string> = {
  active: "bg-success/10 text-success border-success/30",
  beta: "bg-accent/10 text-accent-hover border-accent/30",
  "coming-soon": "bg-text-secondary/10 text-text-secondary border-text-secondary/30",
};

interface BadgeProps {
  status: Status;
  label: string;
  className?: string;
}

export function Badge({ status, label, className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
        styles[status],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {label}
    </span>
  );
}