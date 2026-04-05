import About from "@/components/About";
import BlogInsights from "@/components/BlogInsights";
import Divider from "@/components/Divider";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import FunFacts from "@/components/FunFacts";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InfiniSlider from "@/components/InfiniSlider";
import LogoSection from "@/components/LogoSection";
import OurAvengers from "@/components/OurAvengers";
import Portfolio from "@/components/Portfolio";

import UserFeedbacks from "@/components/UserFeedbacks";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black max-w-full overflow-x-hidden">
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Expertise></Expertise>
      <Divider></Divider>
      <UserFeedbacks></UserFeedbacks>
      <FunFacts></FunFacts>
      <OurAvengers></OurAvengers>
      <InfiniSlider></InfiniSlider>
      <HowItWorks></HowItWorks>
      <GetInTouch></GetInTouch>
      <BlogInsights></BlogInsights>
      <LogoSection></LogoSection>
      <Footer></Footer>
    </div>
  );
}
