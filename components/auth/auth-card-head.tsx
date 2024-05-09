import Link from "next/link";

type AuthCardHeadProps = {
  headerLabel?: string;
};

export default function AuthCardHead({ headerLabel }: AuthCardHeadProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Link href={"/"}>
        <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
          Hootit
        </h1>
      </Link>
      <p className="text-center leading-tight tracking-tight text-muted-foreground">
        {headerLabel}
      </p>
    </div>
  );
}
