import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import MediaLogos from "@/components/sections/MediaLogos";
import GoalCTAGrid from "@/components/sections/GoalCTAGrid";
import PageTeasers from "@/components/sections/PageTeasers";
import AIToolsStack from "@/components/sections/AIToolsStack";
import TestimonialStrip from "@/components/sections/TestimonialStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <AIToolsStack />
      <PageTeasers />
      <GoalCTAGrid />
      <TestimonialStrip />
      <MediaLogos />
    </>
  );
}
