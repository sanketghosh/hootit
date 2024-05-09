import * as z from "zod";

/* LOGIN FORM SCHEMA */
export const LoginSchema = z.object({
  email: z.string().email({
    message: "A valid email is required.",
  }),

  password: z.string().min(6, {
    message: "Password of at least 6 characters needed.",
  }),
});

/* REGISTER FORM SCHEMA  */
export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    email: z.string().email({
      message: "A valid email is required.",
    }),
    password: z.string().min(6, {
      message: "Password of at least 6 characters needed.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match.",
    path: ["confirmPassword"],
  });
