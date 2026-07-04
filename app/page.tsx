import Hero from "@/components/sections/Hero";
import StatRow from "@/components/sections/StatRow";
import GoalCTAGrid from "@/components/sections/GoalCTAGrid";
import PageTeasers from "@/components/sections/PageTeasers";
import AIToolsStack from "@/components/sections/AIToolsStack";
import TestimonialStrip from "@/components/sections/TestimonialStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <StatRow />
      <PageTeasers />
      <AIToolsStack />
      <GoalCTAGrid />
      <TestimonialStrip />
    </>
  );
}
