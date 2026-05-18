import React from "react";

interface SectionHeadingProps {
  /** Main heading text. Use an array to insert a <br /> between lines. */
  children: React.ReactNode;
  /** Optional extra Tailwind classes (e.g. custom max-width, color override) */
  className?: string;
  /** HTML heading level — defaults to h2 for semantic correctness in sections */
  as?: "h1" | "h2" | "h3";
}

const SectionHeading = ({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) => {
  return (
    <Tag
      style={{ fontFamily: "Neue Montreal, sans-serif" }}
      className={`
        font-bold leading-tight
        max-w-[100%] sm:max-w-2xl lg:max-w-4xl
text-[#050517]
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl
        ${className}
      `.trim()}
    >
      {children}
    </Tag>
  );
};

export default SectionHeading;
