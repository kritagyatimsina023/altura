"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FooterData } from "../constants/data";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer className="bg-[#FEFBF5] relative z-30 text-[#2C2416] font-serif">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, #D4A84B 20%, #D4A84B 80%, transparent)",
        }}
      />

      <div className="mx-auto max-w-300  flex flex-col gap-12 px-6 pt-14 pb-8 md:flex-row md:justify-between md:gap-16 md:px-10 md:pt-18 lg:px-12 lg:pt-20">
        <div className="flex flex-col gap-6">
          <div className="opacity-[0.92] transition-opacity duration-300 hover:opacity-100">
            <Image
              src="/Logo/Asset 5.png"
              width={110}
              height={110}
              alt="Altura — Himalayan dog nutrition"
              priority
            />
          </div>

          <p className="max-w-[300px] text-[1.3em] leading-[1.75]  tracking-[0.01em] text-[#6B5E47]">
            Bringing the ancient, natural wisdom of the Himalayas to modern dog
            nutrition. Pure, healthy, and high-performance.
          </p>

          <div className="flex flex-col gap-2.5">
            <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-font-color">
              Join the journey
            </span>

            {submitted ? (
              <p className="text-[0.85rem] italic text-[#B8892A]">
                You&apos;re in. Welcome to the pack.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex max-w-[280px] items-center gap-2 border-b border-[rgba(44,36,22,0.20)] pb-2"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  required
                  className="flex-1 bg-transparent font-serif text-[0.85rem] text-[#2C2416] outline-none placeholder:text-[#A89880]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex cursor-pointer items-center border-none bg-transparent px-0.5 text-[#A89880] transition-[color,transform] duration-200 hover:translate-x-[3px] hover:text-[#B8892A]"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-10 gap-y-10 content-start lg:grid-cols-4"
        >
          {FooterData.map((col) => (
            <div key={col.name}>
              <h3 className="mb-3.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-font-color">
                {col.name}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      className="
                        relative inline-block text-[0.975rem] leading-[1.6]
                        text-[#6B5E47] no-underline cursor-pointer
                        transition-colors duration-200 hover:text-[#2C2416]
                        after:absolute after:bottom-[-1px] after:left-0
                        after:h-px after:w-0 after:bg-[#fb923c]
                        after:transition-[width] after:duration-[250ms] after:ease-in-out
                        hover:after:w-full
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div
        className="
        mx-auto w-full max-w-[1200px]
        border-t border-[rgba(44,36,22,0.12)]
        flex flex-col items-center gap-2 text-center
        px-6 pt-5 pb-8
        sm:flex-row sm:justify-between sm:text-left sm:px-10 sm:pt-6 sm:pb-10
        lg:px-12
      "
      >
        <span className="font-sans text-[0.75rem] tracking-[0.03em] text-[#A89880]">
          © {new Date().getFullYear()} Altura. All rights reserved.
        </span>
        <div className="-translate-y-10">
          <Image
            alt="Emotional Dog Img"
            width={720}
            height={720}
            src={"/Dog/FooterDog.webp"}
          />
        </div>
        <div className="flex items-center gap-2">
          {(["Privacy", "Terms", "Cookies"] as const).map((item, i, arr) => (
            <React.Fragment key={item}>
              <a
                href="#"
                className="font-sans text-[0.75rem] text-[#A89880] no-underline transition-colors duration-200 hover:text-[#6B5E47]"
              >
                {item}
              </a>
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-[0.75rem] text-[rgba(44,36,22,0.20)]"
                >
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
