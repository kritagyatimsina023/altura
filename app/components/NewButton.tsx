import { ArrowUpRight } from "lucide-react";
import React from "react";
interface buttonProps {
  children: React.ReactNode;
  className?: string;
}

const NewButton = ({ children, className }: buttonProps) => {
  return (
    <>
      <div className="overflow-hidden flex-shrink-0">
        <div
          className="group border-1 font-neue border-white rounded-full font-bold font-light duration-300 ease-in-out hover:scale-95
                         relative px-4 sm:px-6 py-3 sm:py-5 h-[40px] sm:h-[44px]
                         flex items-center justify-center"
        >
          <div className="overflow-hidden flex">
            <button
              className="flex uppercase items-center gap-1 text-xs sm:text-sm
                             transition-transform duration-200 ease-in-out
                             cursor-pointer group-hover:-translate-y-4"
            >
              {children}
              <span className="rounded-full p-0.5 ">
                <ArrowUpRight size={13} className="sm:hidden" />
                <ArrowUpRight size={15} className="hidden sm:block" />
              </span>
            </button>
            <button className="absolute uppercase flex items-center gap-1 text-xs sm:text-sm translate-y-8 transition-transform duration-200 ease-in-out group-hover:translate-y-0">
              {children}
              <span className="rounded-full p-0.5 ">
                <ArrowUpRight size={13} className="sm:hidden" />
                <ArrowUpRight size={15} className="hidden sm:block" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewButton;
