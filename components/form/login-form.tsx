"use client";

// PACKAGES
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login-action";
import { useState, useTransition } from "react";
import { toast } from "sonner";

// COMPONENTS
import AuthCardWrapper from "@/components/card/auth-card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingBtn from "@/components/custom/loading-btn";

export default function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onFormSubmitHandler = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        setSuccess(data?.success);
        setError(data?.error);

        if (data?.success) {
          toast.success(success);
        }
        if (data?.error) {
          toast.error(error);
        }
      });
    });
  };

  return (
    <div className="p-4">
      <AuthCardWrapper
        backButtonHref="/register"
        backButtonLabel="Don't have an account ? Register"
        headerLabel="Good to see you back. Login to continue your journey."
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFormSubmitHandler)}
            className="space-y-4"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="johndoe@mail.com"
                        // disabled={""}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="UaSAJGRlerM5"
                        disabled={false}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <FormError message={error} />
            <FormSuccess message={success} /> */}
            <LoadingBtn
              isPending={isPending}
              className="w-full"
              btnLabel="Login"
            />
          </form>
        </Form>
      </AuthCardWrapper>
    </div>
  );
}
