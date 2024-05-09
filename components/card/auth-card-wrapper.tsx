// COMPONENTS
import AuthCardHead from "@/components/auth/auth-card-head";
import AuthFormSwitcher from "@/components/auth/auth-form-switcher";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type AuthCardWrapperProps = {
  headerLabel?: string;
  children: React.ReactNode;
  backButtonLabel: string;
  backButtonHref: string;
};

export default function AuthCardWrapper({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
}: AuthCardWrapperProps) {
  return (
    <Card className="w-[340px] shadow-lg md:w-[400px] lg:w-[440px]">
      <CardHeader>
        <AuthCardHead headerLabel={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <AuthFormSwitcher
          backButtonLabel={backButtonLabel}
          backButtonHref={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
}
