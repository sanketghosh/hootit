import { auth } from "@/auth";

export const useFetchLoggedInUserServer = async () => {
  const session = await auth();

  return {
    user: session?.user,
    email: session?.user?.email,
    username: session?.user?.username,
    image: session?.user?.image,
    userId: session?.user?.id,
  };
};
