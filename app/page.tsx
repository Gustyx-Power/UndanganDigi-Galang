import CoverSection from "@/src/components/sections/CoverSection";
import HeroSection from "@/src/components/sections/HeroSection";
import QuoteSection from "@/src/components/sections/QuoteSection";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { to } = await searchParams;
  const guestName = (to as string) || "Tamu Undangan";

  return (
    <main className="min-h-screen w-full">
      <CoverSection guestName={guestName} />
      <HeroSection />
      <QuoteSection />
    </main>
  );
}
