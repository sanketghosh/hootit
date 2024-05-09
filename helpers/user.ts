import prisma from "@/lib/prisma";

/**
 * @desc Get a single user by EMAIL
 */

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch {
    return null;
  }
};

/**
 * @desc Get a single user by ID
 */

export const getUserID = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  } catch {
    return null;
  }
};
