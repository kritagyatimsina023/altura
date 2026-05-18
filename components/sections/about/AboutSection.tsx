import Grainy from "@/components/Ui/Grainy";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 pb-16 overflow-hidden">
        <Grainy />
        <div className="relative z-20 flex justify-between items-start text-[10px] uppercase tracking-[0.25em] font-mono text-[#0D0F2B]/60">
          <span>Altura Dog Chew</span>
          <span>Est. Nepal — Himalayas</span>
        </div>
        <div className="relative z-20 mt-16 md:mt-0">
          <h1 className="font-serif leading-[0.88] tracking-tight">
            <span className="block text-[clamp(4rem,14vw,13rem)] font-normal">
              FROM
            </span>
            <span className="block text-[clamp(4rem,14vw,13rem)] font-normal italic pl-[8vw]">
              YAK
            </span>
            <span className="block text-[clamp(4rem,14vw,13rem)] font-normal">
              TO DOG.
            </span>
          </h1>
        </div>
        <div className="relative z-20 flex flex-col sm:flex-row justify-between items-end gap-6 mt-12">
          <p className="font-mono text-xs tracking-widest uppercase text-[#0D0F2B]/70 max-w-xs leading-relaxed">
            A long lasting yak milk chew
            <br />
            from the heart of the Himalayas
          </p>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0D0F2B]/50 text-right">
            <p>100% Natural</p>
            <p>No Chemicals</p>
            <p>No Fillers</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Image + Origin Story ── */}
      <section className="relative bg-[#1a1208] overflow-hidden">
        <Grainy />
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Left — full bleed image: yak in mountain highlands */}
          <div className="relative min-h-[60vw] md:min-h-screen">
            <Image
              src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&q=80"
              alt="Yak grazing in the Himalayas"
              fill
              className="object-cover opacity-80"
              unoptimized
            />
            <div className="absolute bottom-8 left-8 z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                Himalayan highlands — 4,000m+
              </span>
            </div>
          </div>

          {/* Right — story text */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-20 text-[#F2EDE0]">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#EE7C26] mb-10">
              001 — The Origin
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-8">
              A cheese made
              <br />
              for humans.
              <br />
              <span className="italic">
                Rediscovered
                <br />
                for dogs.
              </span>
            </h2>
            <div className="space-y-5 font-sans text-sm text-[#F2EDE0]/75 leading-relaxed max-w-sm">
              <p>
                High in the Himalayas, local communities have made Churpi — a
                dense yak milk cheese — for centuries. Hardened through
                traditional smoke drying, it was food for people who needed
                something that lasted.
              </p>
              <p>
                Someone noticed their dog wouldn't let go of a piece. That
                observation became an industry. And Altura was built to do it
                right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Pull Quote ── */}
      <section className="relative bg-[#F2EDE0] overflow-hidden py-32 px-6 sm:px-10 md:px-20">
        <Grainy />
        <div className="relative z-20 max-w-5xl mx-auto">
          <span className="font-mono text-[clamp(6rem,20vw,18rem)] font-normal leading-none text-[#EE7C26]/20 select-none block -mb-8 md:-mb-16">
            60
          </span>
          <p className="font-serif text-[clamp(1.6rem,4vw,3rem)] text-[#0D0F2B] leading-tight relative z-10">
            Years of dairy expertise through{" "}
            <span className="italic">Sujal Dairy</span> — part of Laxmi Group —
            now behind every Altura chew shipped worldwide.
          </p>
          <div className="mt-12 w-16 h-px bg-[#0D0F2B]/30" />
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-[#0D0F2B]/50">
            Tradition meets export-grade quality
          </p>
        </div>
      </section>

      {/* ── SECTION 4 — Process Editorial Grid ── */}
      <section className="relative bg-[#EE7C26] overflow-hidden py-24 px-6 sm:px-10 md:px-16">
        <Grainy />
        <div className="relative z-20">
          <div className="flex justify-between items-end mb-16 border-b border-[#0D0F2B]/20 pb-6">
            <h2 className="font-serif text-[clamp(2rem,6vw,5rem)] font-normal leading-none">
              How it's
              <br />
              <span className="italic">made.</span>
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0D0F2B]/60 text-right hidden sm:block">
              002 — Process
            </span>
          </div>
          <div className="space-y-0">
            {[
              {
                n: "01",
                title: "It starts with the yak",
                body: "Fresh yak milk and cow milk sourced from trusted Himalayan farms. No shortcuts. No substitutes.",
              },
              {
                n: "02",
                title: "Turned into cheese",
                body: "Salt and lime juice begin the cheese formation process — the same recipe used for centuries.",
              },
              {
                n: "03",
                title: "Compressed into form",
                body: "Slowly processed into a dense traditional cheese base using controlled heating.",
              },
              {
                n: "04",
                title: "Pressed and rested",
                body: "Cheese is pressed into solid blocks. Dense enough to last. Safe enough to trust.",
              },
              {
                n: "05",
                title: "Cut and smoke dried",
                body: "Naturally air dried for weeks. The result: a long lasting chew that keeps dogs engaged for hours.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="grid grid-cols-[auto_1fr_1fr] gap-8 md:gap-16 items-start py-8 border-b border-[#0D0F2B]/15"
              >
                <span className="font-mono text-xs text-[#0D0F2B]/40 pt-1">
                  {step.n}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-normal">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#0D0F2B]/70 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Full bleed image: wide himalayan valley ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <Grainy />
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80"
          alt="Himalayan mountain landscape"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F2B] via-[#0D0F2B]/40 to-transparent z-10" />
        <div className="relative z-20 px-6 sm:px-10 md:px-16 pb-20 w-full">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#EE7C26] mb-6 block">
              003 — Ingredients
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-white font-normal leading-tight mb-6">
              Four ingredients.
              <br />
              <span className="italic">Nothing else.</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {["Yak milk", "Cow milk", "Salt", "Lime juice"].map((ing) => (
                <div key={ing} className="border border-white/20 px-4 py-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                    {ing}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] mt-6">
              No chemicals. No preservatives. Just pure Himalayan simplicity.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — Closing Statement ── */}
      <section className="relative bg-[#0D0F2B] overflow-hidden py-32 px-6 sm:px-10 md:px-20">
        <Grainy />
        {/* Background image — cheese/dairy faint overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
            aria-hidden
          />
        </div>
        <div className="relative z-20 max-w-4xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#EE7C26] mb-10 block">
            004 — Why Altura
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] text-[#F2EDE0] font-normal leading-[0.92] mb-16">
            A better chew
            <br />
            starts with{" "}
            <span className="italic">
              better
              <br />
              origins.
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {[
              {
                label: "Authentic",
                body: "Traditional Himalayan dog chews made from natural yak milk, sourced and produced in Nepal.",
              },
              {
                label: "Experienced",
                body: "Over 50 years of dairy expertise delivering consistent quality in every chew.",
              },
              {
                label: "Export-Ready",
                body: "Safe, grain free chews with strict hygiene and quality control for global markets.",
              },
              {
                label: "Private Label",
                body: "Custom solutions for brands selling dog snacks, dental chews, and healthy dog treats.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#0D0F2B] px-8 py-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#EE7C26] mb-3">
                  {item.label}
                </p>
                <p className="font-sans text-sm text-[#F2EDE0]/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
