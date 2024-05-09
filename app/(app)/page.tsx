import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";

export default async function HomePage() {
  const { name } = await useFetchLoggedInUserServer();

  return <div className="text-2xl">This is a homepage {name}</div>;
}
