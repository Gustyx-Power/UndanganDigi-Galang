import CoverSection from "@/src/components/sections/CoverSection";
import HeroSection from "@/src/components/sections/Hero"; // New Splash
import OpeningSection from "@/src/components/sections/HeroSection"; // Old Split Layout (Renamed)
import QuoteSection from "@/src/components/sections/QuoteSection";
import CoupleSection from "@/src/components/sections/Couple"; // New Card Layout
import CountdownSection from "@/src/components/sections/CountdownSection";
import LoveStorySection from "@/src/components/sections/LoveStory"; // New Timeline Layout
import EventDetails from "@/src/components/sections/EventDetails";
import GallerySection from "@/src/components/sections/GallerySection";
import FloatingControls from "@/src/components/ui/FloatingControls";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { to } = await searchParams;
  const guestName = (to as string) || "Tamu Undangan";

  return (
    <main className="min-h-screen w-full">
      {/* New Splash Screen */}
      <HeroSection guestName={guestName} />

      {/* Opening Section (Split Layout) */}
      <section id="opening">
        <OpeningSection />
      </section>
      <QuoteSection />
      <CoupleSection />
      <CountdownSection />
      <LoveStorySection />
      <EventDetails />
      <GallerySection />
      <FloatingControls />
    </main>
  );
}
