import About from "@/components/About";
import Divider from "@/components/Divider";
import Expertise from "@/components/Expertise";
import FunFacts from "@/components/FunFacts";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import UserFeedbacks from "@/components/UserFeedbacks";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Expertise></Expertise>
      <Divider></Divider>
      <UserFeedbacks></UserFeedbacks>
      <FunFacts></FunFacts>
    </div>
  );
}
