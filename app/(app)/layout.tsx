import Navbar from "@/components/navbar/navbar";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="">
        <div className="mx-auto max-w-[113rem] px-4 py-4">{children}</div>
      </main>
    </div>
  );
}
