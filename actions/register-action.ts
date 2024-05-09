"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import prisma from "@/lib/prisma";
import { getUserByEmail } from "@/helpers/user";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes.next";
import { signIn } from "@/auth";

/**
 * @desc The register action, this server action helps to register user
 * Also directly login user once they are registered
 * @returns error or success message
 */

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email, name, password, confirmPassword } = validateFields.data;

  if (password !== confirmPassword) {
    return {
      error: "ERROR: Confirm password not matched !",
    };
  }

  // password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  // check if user exists
  const existsUser = await getUserByEmail(email);
  if (existsUser) {
    return {
      error: "ERROR: Email already in use !",
    };
  }

  // create user
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  /**
   * Using the signIn method here too as I don't want user to login after they have registered.
   * This way once they are registered they will also be logged in
  and redirected to "DEFAULT_LOGIN_REDIRECT" path directly.
   * They don't have to register then switch to login page and complete log in to access the dashboard/app.
   */

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return {
      success: "SUCCESS: Registered successfully and logged in.",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "AccessDenied":
          return {
            error:
              "ERROR: Access denied! For some reason you cannot access the account.",
          };
        default:
          return {
            error: "ERROR: Something went wrong !",
          };
      }
    }
    throw error;
  }

  /**
   * If we are not using the login part we will use it throw just the register success message.
   */
  /*  return {
    success: "SUCCESS: Registered successfully !",
  }; */
};
