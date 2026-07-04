import Hero from "@/components/sections/Hero";
import GoalCTAGrid from "@/components/sections/GoalCTAGrid";
import PageTeasers from "@/components/sections/PageTeasers";
import AIToolsStack from "@/components/sections/AIToolsStack";
import TestimonialStrip from "@/components/sections/TestimonialStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <PageTeasers />
      <AIToolsStack />
      <GoalCTAGrid />
      <TestimonialStrip />
    </>
  );
}
