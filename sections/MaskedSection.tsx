// import React from "react";

// const MaskedSection = ({ item, index }) => {
//   const splitWords = (text) =>
//     text.split(" ").map((word, i) => (
//       <span key={i} className="inline-block overflow-hidden mr-4">
//         <span className="char inline-block">{word}</span>
//       </span>
//     ));

//   return (
//     <section
//       className="masked-layer absolute inset-0 w-full h-full flex items-center justify-center"
//       style={{ zIndex: index }}
//     >
//       {/* Masked Image Container */}
//       <div className="img-container absolute inset-0 w-full h-full overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${item.img})` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-8 max-w-5xl">
//         <p className="char block text-[10px] tracking-[0.8em] text-zinc-500 mb-8 uppercase font-bold">
//           {item.subtitle}
//         </p>
//         <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">
//           {splitWords(item.title)}
//         </h2>
//         <div className="h-[1px] w-12 bg-white/30 mx-auto mb-8 char" />
//         <p className="text-zinc-400 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
//           {splitWords(item.desc)}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default MaskedSection;
