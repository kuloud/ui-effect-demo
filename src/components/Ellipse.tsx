import { cn } from "@/lib/utils";

interface EllipseProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Ellipse({ className }: EllipseProps) {
  return (
    <div className={cn("size-3 rounded-full bg-[#F0F0F0]", className)}></div>
  );
}
