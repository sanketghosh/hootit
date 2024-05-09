import { cn } from "@/lib/utils";

// COMPONENTS
import { Button } from "@/components/ui/button";

type LoadingBtnProps = {
  isPending: boolean;
  btnLabel?: string;
} & React.ComponentPropsWithRef<"button">;

export default function LoadingBtn({
  isPending,
  btnLabel = "Button",
  className,
}: LoadingBtnProps) {
  return (
    <Button
      className={cn(
        "capitalize disabled:bg-opacity-95",
        isPending && "flex items-center justify-center gap-2",
        className,
      )}
      disabled={isPending}
    >
      {isPending && <span className="spinner"></span>}
      {btnLabel}
    </Button>
  );
}
