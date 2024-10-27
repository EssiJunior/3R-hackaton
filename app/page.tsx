'use client'

// import { PinContainer } from "@/components/ui/3DPin";
import Contact from "@/containers/Contact";
import Hero from "@/containers/Hero";
import Info from "@/containers/Info";
import Services from "@/containers/Services";
import Sponsors from "@/components/Sponsors";

export default function Home() {  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Info />
        <Sponsors className="mt-20"/>
        <Services />
      </div>
    </main>
  );
}
