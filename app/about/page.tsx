import AboutHero from "@/components/AboutHero";
import CounterSection from "@/components/CounterSection";
import FunFact from "@/components/FunFact";
import MissionSection from "@/components/MissionSection";
import Process from "@/components/Process";

    export default function About() {
      return (
        <>
          <AboutHero />
          <Process />
          <MissionSection/>
          <CounterSection/>
          <FunFact/>
        </>
      );
    }
    