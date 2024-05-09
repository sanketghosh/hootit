import { auth } from "@/auth";

export const useFetchLoggedInUserServer = async () => {
  const session = await auth();

  return {
    user: session?.user,
    email: session?.user?.email,
    name: session?.user?.name,
    image: session?.user?.image,
    userId: session?.user?.id,
  };
};
