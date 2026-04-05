import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Expertise></Expertise>
    </div>
  );
}
