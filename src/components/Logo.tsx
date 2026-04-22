import { GraduationCap } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md">
        <GraduationCap className="h-5 w-5" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <div className={`text-base font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          SCD <span className="text-primary">College</span>
        </div>
        <div className={`text-[10px] font-medium uppercase tracking-[0.15em] ${light ? "text-white/60" : "text-muted-foreground"}`}>
          Skills · Develop · Lead
        </div>
      </div>
    </div>
  );
}