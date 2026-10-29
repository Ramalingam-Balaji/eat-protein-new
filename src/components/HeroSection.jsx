// import { ArrowRight, Heart, Leaf, ShieldCheck, Store } from "lucide-react";
// import { useEffect, useState } from "react";

// import { BENEFITS } from "../data/homeData";
// import BANNERS from "../data/bannerData";

// const icons = {
//   leaf: Leaf,
//   shield: ShieldCheck,
//   store: Store,
//   heart: Heart,
// };

// export default function HeroSection() {
//   // =========================================
//   // BANNER STATE
//   // =========================================

//   const [currentBanner, setCurrentBanner] = useState(0);

//   // =========================================
//   // AUTO BANNER CHANGE
//   // =========================================

//   useEffect(() => {
//     if (!BANNERS || BANNERS.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentBanner((prev) => {
//         return (prev + 1) % BANNERS.length;
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="
//         relative
//         scroll-mt-16
//         overflow-hidden
//         bg-[#f8f9f5]
//       "
//     >
//       {/* =====================================================
//           FULL BACKGROUND BANNER
//       ===================================================== */}

//       <div className="absolute inset-0 z-0">
//         {BANNERS.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`
//               absolute
//               inset-0
//               transition-opacity
//               duration-1000
//               ease-in-out
//               ${index === currentBanner ? "z-10 opacity-100" : "z-0 opacity-0"}
//             `}
//             style={{
//               backgroundImage: `url("${banner.image}")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//             aria-label={banner.alt}
//           />
//         ))}
//       </div>

//       {/* =====================================================
//           LEFT SIDE WHITE FOG / READABILITY
//           Keeps the text easy to read
//       ===================================================== */}

//       {/* =====================================================
//           VERY LIGHT OVERLAY
//           Helps the banner blend with your EatProtein theme
//       ===================================================== */}

//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           grid
//           min-h-[600px]
//           max-w-[1500px]
//           grid-cols-1
//           lg:grid-cols-[44%_56%]
//         "
//       >
//         {/* =====================================================
//             LEFT CONTENT
//         ===================================================== */}

//         <div
//           className="
//             relative
//             z-20
//             flex
//             flex-col
//             justify-center
//             px-6
//             py-12
//             lg:px-7
//           "
//         >
//           <h1
//             className="
//               max-w-[500px]
//               text-[42px]
//               font-black
//               leading-[0.98]
//               tracking-[-1.7px]
//               text-protein-dark
//               sm:text-[49px]
//             "
//           >
//             Healthy
//             <br />
//             Protein Choices
//             <br />
//             <span className="text-protein-green">for a Better You</span>
//           </h1>

//           <p
//             className="
//               mt-4
//               max-w-[465px]
//               text-[15px]
//               leading-6
//               text-slate-700
//             "
//           >
//             Discover high protein foods from local stores, make smarter choices
//             with nutrition intelligence and live a healthier, stronger life.
//           </p>

//           {/* =================================================
//               EXPLORE BUTTON
//           ================================================= */}

//           <div className="mt-5 flex flex-wrap items-center gap-3">
//             {/* Explore High Protein Foods */}
//             <button
//               onClick={() =>
//                 document.getElementById("foods")?.scrollIntoView({
//                   behavior: "smooth",
//                 })
//               }
//               className="
//       flex w-fit items-center gap-2
//       rounded-full
//       bg-gradient-to-r from-protein-orange to-orange-500
//       px-7 py-3
//       text-sm font-bold text-white
//       shadow-md
//       transition duration-300
//       hover:-translate-y-0.5
//     "
//             >
//               Explore High Protein Foods
//               <ArrowRight size={17} />
//             </button>

//             {/* Calculate Your Needs */}
//             <button
//               onClick={() =>
//                 document.getElementById("protein-calculator")?.scrollIntoView({
//                   behavior: "smooth",
//                 })
//               }
//               className="
//       flex w-fit items-center gap-2
//       rounded-full
//       border-2 border-green-700
//       bg-transparent
//       px-7 py-3
//       text-sm font-bold text-green-800
//       transition-all duration-300
//       hover:-translate-y-0.5
//       hover:bg-green-700
//       hover:text-white
//       hover:shadow-md
//     "
//             >
//               Calculate Your Needs
//               {/* <ArrowRight size={17} /> */}
//             </button>
//           </div>

//           {/* =================================================
//               BENEFITS
//           ================================================= */}

//           <div
//             className="
//               mt-5
//               grid
//               max-w-[480px]
//               grid-cols-4
//               gap-3
//             "
//           >
//             {BENEFITS.map((item) => {
//               const Icon = icons[item.icon];

//               return (
//                 <div key={item.title} className="text-center">
//                   <div
//                     className="
//                       mx-auto
//                       mb-2
//                       grid
//                       h-12
//                       w-12
//                       place-items-center
//                       rounded-full
//                       border
//                       border-green-100
//                       bg-white
//                       text-protein-green
//                       shadow-sm
//                     "
//                   >
//                     <Icon size={22} strokeWidth={1.8} />
//                   </div>

//                   <p
//                     className="
//                       text-[12px]
//                       font-semibold
//                       leading-3
//                       text-slate-800
//                     "
//                   >
//                     {item.title}
//                   </p>

//                   <p
//                     className="
//                       text-[12px]
//                       font-semibold
//                       leading-3
//                       text-slate-800
//                     "
//                   >
//                     {item.subtitle}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* =====================================================
//             RIGHT SIDE
//             Kept only to preserve the original layout width.
//             The banner is now behind the complete section.
//         ===================================================== */}

//         <div className="relative min-h-[420px]" />
//       </div>

//       {/* =====================================================
//           NUTRITION CONTAINER
//           YOUR COMMENTED CONTAINER IS KEPT
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           bottom-14
//           right-20
//           z-20
//           hidden
//           w-40
//           rounded-xl
//           bg-white
//           p-4
//           shadow-xl
//           sm:block
//         "
//       >
//         <p className="text-[11px] font-bold text-slate-800">High Protein</p>

//         <span
//           className="
//             mt-1
//             inline-block
//             rounded
//             bg-green-100
//             px-2
//             py-1
//             text-[10px]
//             font-bold
//             text-green-700
//           "
//         >
//           24g Protein
//         </span>

//         <p
//           className="
//             mt-3
//             text-[10px]
//             font-semibold
//             text-slate-700
//           "
//         >
//           🌿 Nutri Score <b className="text-green-700">A</b>
//         </p>

//         <p
//           className="
//             mt-2
//             text-[10px]
//             font-semibold
//             text-slate-700
//           "
//         >
//           🧡 Healthy Choice
//         </p>
//       </div>

//       {/* =====================================================
//           BANNER DOTS
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           bottom-4
//           left-1/2
//           z-30
//           flex
//           -translate-x-1/2
//           items-center
//           gap-1.5
//         "
//       >
//         {BANNERS.map((banner, index) => (
//           <button
//             key={banner.id}
//             type="button"
//             onClick={() => setCurrentBanner(index)}
//             aria-label={`Go to banner ${index + 1}`}
//             className={`
//               h-1.5
//               rounded-full
//               transition-all
//               duration-300
//               ${
//                 index === currentBanner
//                   ? "w-6 bg-protein-green"
//                   : "w-1.5 bg-white/80"
//               }
//             `}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { ArrowRight, Heart, Leaf, ShieldCheck, Store } from "lucide-react";
// import { useEffect, useState, useCallback } from "react";

// import { BENEFITS } from "../data/homeData";
// import BANNERS from "../data/bannerData";

// const icons = {
//   leaf: Leaf,
//   shield: ShieldCheck,
//   store: Store,
//   heart: Heart,
// };

// export default function HeroSection() {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   // Automatically change banners.
//   useEffect(() => {
//     if (!BANNERS || BANNERS.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Scroll directly to the Protein Calculator section.
//   const scrollToCalculator = useCallback(() => {
//     const calculator = document.getElementById("protein-calculator");

//     if (!calculator) {
//       console.warn(
//         'Protein Calculator section not found. Check that its ID is "protein-calculator".'
//       );
//       return;
//     }

//     const navbar = document.querySelector("header");
//     const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

//     const targetPosition =
//       calculator.getBoundingClientRect().top +
//       window.scrollY -
//       navbarHeight;

//     window.scrollTo({
//       top: Math.max(0, targetPosition),
//       behavior: "smooth",
//     });
//   }, []);

//   // Scroll to the Protein Foods section.
//   const scrollToFoods = () => {
//     const foods = document.getElementById("foods");

//     if (!foods) return;

//     const navbar = document.querySelector("header");
//     const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

//     const targetPosition =
//       foods.getBoundingClientRect().top +
//       window.scrollY -
//       navbarHeight;

//     window.scrollTo({
//       top: Math.max(0, targetPosition),
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="home"
//       className="relative scroll-mt-16 overflow-hidden bg-[#f8f9f5]"
//     >
//       {/* FULL BACKGROUND BANNER */}
//       <div className="absolute inset-0 z-0">
//         {BANNERS.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`
//               absolute inset-0
//               transition-opacity duration-1000 ease-in-out
//               ${
//                 index === currentBanner
//                   ? "z-10 opacity-100"
//                   : "z-0 opacity-0"
//               }
//             `}
//             style={{
//               backgroundImage: `url("${banner.image}")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//             aria-label={banner.alt}
//           />
//         ))}
//       </div>

//       {/* MAIN CONTENT */}
//       <div
//         className="
//           relative z-10 mx-auto grid min-h-[600px]
//           max-w-[1500px] grid-cols-1 lg:grid-cols-[44%_56%]
//         "
//       >
//         {/* LEFT CONTENT */}
//         <div
//           className="
//             relative z-20 flex flex-col justify-center
//             px-6 py-12 lg:px-7
//           "
//         >
//           <h1
//             className="
//               max-w-[500px] text-[42px] font-black
//               leading-[0.98] tracking-[-1.7px]
//               text-protein-dark sm:text-[49px]
//             "
//           >
//             Healthy
//             <br />
//             Protein Choices
//             <br />
//             <span className="text-protein-green">
//               for a Better You
//             </span>
//           </h1>

//           <p
//             className="
//               mt-4 max-w-[465px] text-[15px]
//               leading-6 text-slate-700
//             "
//           >
//             Discover high protein foods from local stores, make smarter
//             choices with nutrition intelligence and live a healthier,
//             stronger life.
//           </p>

//           {/* ACTION BUTTONS */}
//           <div className="mt-5 flex flex-wrap items-center gap-3">
//             {/* Explore High Protein Foods */}
//             <button
//               type="button"
//               onClick={scrollToFoods}
//               className="
//                 flex w-fit items-center gap-2 rounded-full
//                 bg-gradient-to-r from-protein-orange to-orange-500
//                 px-7 py-3 text-sm font-bold text-white shadow-md
//                 transition duration-300 hover:-translate-y-0.5
//               "
//             >
//               Explore High Protein Foods
//               <ArrowRight size={17} />
//             </button>

//             {/* Calculate Your Needs */}
//             <button
//               type="button"
//               onClick={scrollToCalculator}
//               className="
//                 flex w-fit items-center gap-2 rounded-full
//                 border-2 border-green-700 bg-transparent
//                 px-7 py-3 text-sm font-bold text-green-800
//                 transition-all duration-300
//                 hover:-translate-y-0.5 hover:bg-green-700
//                 hover:text-white hover:shadow-md
//               "
//             >
//               Calculate Your Needs
//             </button>
//           </div>

//           {/* BENEFITS */}
//           <div
//             className="
//               mt-5 grid max-w-[480px]
//               grid-cols-4 gap-3
//             "
//           >
//             {BENEFITS.map((item) => {
//               const Icon = icons[item.icon];

//               if (!Icon) return null;

//               return (
//                 <div key={item.title} className="text-center">
//                   <div
//                     className="
//                       mx-auto mb-2 grid h-12 w-12
//                       place-items-center rounded-full
//                       border border-green-100 bg-white
//                       text-protein-green shadow-sm
//                     "
//                   >
//                     <Icon size={22} strokeWidth={1.8} />
//                   </div>

//                   <p
//                     className="
//                       text-[12px] font-semibold
//                       leading-3 text-slate-800
//                     "
//                   >
//                     {item.title}
//                   </p>

//                   <p
//                     className="
//                       text-[12px] font-semibold
//                       leading-3 text-slate-800
//                     "
//                   >
//                     {item.subtitle}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT SIDE: PRESERVE ORIGINAL LAYOUT */}
//         <div className="relative min-h-[420px]" />
//       </div>

//       {/* NUTRITION CARD */}
//       <div
//         className="
//           absolute bottom-14 right-20 z-20 hidden w-40
//           rounded-xl bg-white p-4 shadow-xl sm:block
//         "
//       >
//         <p className="text-[11px] font-bold text-slate-800">
//           High Protein
//         </p>

//         <span
//           className="
//             mt-1 inline-block rounded bg-green-100
//             px-2 py-1 text-[10px] font-bold text-green-700
//           "
//         >
//           24g Protein
//         </span>

//         <p className="mt-3 text-[10px] font-semibold text-slate-700">
//           🌿 Nutri Score <b className="text-green-700">A</b>
//         </p>

//         <p className="mt-2 text-[10px] font-semibold text-slate-700">
//           🧡 Healthy Choice
//         </p>
//       </div>

//       {/* BANNER DOTS */}
//       <div
//         className="
//           absolute bottom-4 left-1/2 z-30
//           flex -translate-x-1/2 items-center gap-1.5
//         "
//       >
//         {BANNERS.map((banner, index) => (
//           <button
//             key={banner.id}
//             type="button"
//             onClick={() => setCurrentBanner(index)}
//             aria-label={`Go to banner ${index + 1}`}
//             aria-pressed={index === currentBanner}
//             className={`
//               h-1.5 rounded-full transition-all duration-300
//               ${
//                 index === currentBanner
//                   ? "w-6 bg-protein-green"
//                   : "w-1.5 bg-white/80"
//               }
//             `}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }



// import { ArrowRight, Heart, Leaf, ShieldCheck, Store } from "lucide-react";
// import { useEffect, useState, useCallback } from "react";

// import { BENEFITS } from "../data/homeData";
// import BANNERS from "../data/bannerData";

// const icons = {
//   leaf: Leaf,
//   shield: ShieldCheck,
//   store: Store,
//   heart: Heart,
// };

// export default function HeroSection() {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   // Automatically change banners.
//   useEffect(() => {
//     if (!BANNERS || BANNERS.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Scroll to a Home section with the fixed navbar offset.
//   const scrollToSection = useCallback((sectionId) => {
//     const section = document.getElementById(sectionId);

//     if (!section) {
//       console.warn(`Section with ID "${sectionId}" was not found.`);
//       return;
//     }

//     const navbar = document.querySelector("header");
//     const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

//     const targetPosition =
//       section.getBoundingClientRect().top +
//       window.scrollY -
//       navbarHeight -
//       8;

//     window.scrollTo({
//       top: Math.max(0, targetPosition),
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       className="
//         relative isolate scroll-mt-16 overflow-hidden
//         bg-[#f8f9f5]
//       "
//     >
//       {/* FULL-WIDTH RESPONSIVE BACKGROUND BANNERS */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {BANNERS.map((banner, index) => (
//           <div
//             key={banner.id}
//             role="img"
//             aria-label={banner.alt}
//             className={`
//               absolute inset-0
//               transition-opacity duration-1000 ease-in-out
//               ${
//                 index === currentBanner
//                   ? "opacity-100"
//                   : "pointer-events-none opacity-0"
//               }
//             `}
//             style={{
//               backgroundImage: `url("${banner.image}")`,
//               backgroundSize: "cover",
//               backgroundPosition:
//                 "center center",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//         ))}
//       </div>

//       {/* MAIN CONTENT */}
//       <div
//         className="
//           relative z-10 mx-auto grid
//           min-h-[540px] max-w-[1500px]
//           grid-cols-1
//           sm:min-h-[580px]
//           lg:min-h-[620px]
//           lg:grid-cols-[44%_56%]
//         "
//       >
//         {/* LEFT CONTENT */}
//         <div
//           className="
//             relative z-10 flex flex-col justify-center
//             px-5 py-12
//             sm:px-8 sm:py-14
//             lg:px-7 lg:py-12
//           "
//         >
//           <h1
//             className="
//               max-w-[500px]
//               text-[34px] font-black
//               leading-[1.04] tracking-[-1.2px]
//               text-protein-dark
//               sm:text-[43px]
//               md:text-[48px]
//               lg:text-[49px]
//             "
//           >
//             Healthy
//             <br />
//             Protein Choices
//             <br />
//             {/* <span className="text-protein-green">
//               for a Better You
//             </span> */}

//             <span
//   key={currentBanner}
//   className="
//     inline-block text-protein-green
//     animate-fade-in
//   "
// >
//   {BANNERS[currentBanner]?.headline || "for a Better You"}
// </span>
//           </h1>

//           <p
//             className="
//               mt-4 max-w-[465px]
//               text-sm leading-6 text-slate-700
//               sm:text-[15px]
//             "
//           >
//             Discover high protein foods from local stores, make smarter
//             choices with nutrition intelligence and live a healthier,
//             stronger life.
//           </p>

//           {/* ACTION BUTTONS */}
//           <div
//             className="
//               mt-5 flex flex-wrap items-center gap-3
//             "
//           >
//             <button
//               type="button"
//               onClick={() => scrollToSection("high-protein-foods")}
//               className="
//                 flex w-fit items-center justify-center gap-2
//                 rounded-full
//                 bg-gradient-to-r from-[#D7201A] to-[#B91C1C]
//                 px-5 py-3 text-sm font-bold text-white shadow-md
//                 transition duration-300
//                 hover:-translate-y-0.5
//                 sm:px-7
//               "
//             >
//               Explore High Protein Foods
//               <ArrowRight size={17} />
//             </button>

//             <button
//               type="button"
//               onClick={() => scrollToSection("protein-calculator")}
//               className="
//                 flex w-fit items-center justify-center 
//                 rounded-full border-2 border-green-700
//                 bg-transparent px-5 py-3
//                 text-sm font-bold text-green-800
//                 transition-all duration-300
//                 hover:-translate-y-0.5 hover:bg-green-700
//                 hover:text-white hover:shadow-md
//                 sm:px-7
//               "
//             >
//               Calculate Your Needs
//             </button>
//           </div>

//           {/* BENEFITS */}
//           <div
//             className="
//               mt-6 grid max-w-[480px]
//               grid-cols-2 gap-x-4 gap-y-4
//               sm:grid-cols-4 sm:gap-3
//             "
//           >
//             {BENEFITS.map((item) => {
//               const Icon = icons[item.icon];

//               if (!Icon) return null;

//               return (
//                 <div key={item.title} className="text-center">
//                   <div
//                     className="
//                       mx-auto mb-2 grid h-11 w-11
//                       place-items-center rounded-full
//                       border border-green-100 bg-white
//                       text-protein-green shadow-sm
//                       sm:h-12 sm:w-12
//                     "
//                   >
//                     <Icon size={22} strokeWidth={1.8} />
//                   </div>

//                   <p
//                     className="
//                       text-xs font-semibold
//                       leading-4 text-slate-800
//                     "
//                   >
//                     {item.title}
//                   </p>

//                   <p
//                     className="
//                       text-xs font-semibold
//                       leading-4 text-slate-800
//                     "
//                   >
//                     {item.subtitle}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT SIDE SPACE FOR THE BACKGROUND IMAGE */}
//         <div className="hidden min-h-[420px] lg:block" />
//       </div>

//       {/* NUTRITION CARD */}
//       <div
//         className="
//           absolute bottom-14 right-8 z-20
//           hidden w-40 rounded-xl
//           bg-white p-4 shadow-xl
//           md:block lg:right-12 xl:right-20
//         "
//       >
//         <p className="text-[11px] font-bold text-slate-800">
//           High Protein
//         </p>

//         <span
//           className="
//             mt-1 inline-block rounded bg-green-100
//             px-2 py-1 text-[10px] font-bold text-green-700
//           "
//         >
//           24g Protein
//         </span>

//         <p className="mt-3 text-[10px] font-semibold text-slate-700">
//           🌿 Nutri Score <b className="text-green-700">A</b>
//         </p>

//         <p className="mt-2 text-[10px] font-semibold text-slate-700">
//           🧡 Healthy Choice
//         </p>
//       </div>

//       {/* BANNER DOTS */}
//       {BANNERS.length > 1 && (
//         <div
//           className="
//             absolute bottom-4 left-1/2 z-30
//             flex -translate-x-1/2
//             items-center gap-1.5
//           "
//         >
//           {BANNERS.map((banner, index) => (
//             <button
//               key={banner.id}
//               type="button"
//               onClick={() => setCurrentBanner(index)}
//               aria-label={`Go to banner ${index + 1}`}
//               aria-pressed={index === currentBanner}
//               className={`
//                 h-1.5 rounded-full transition-all duration-300
//                 ${
//                   index === currentBanner
//                     ? "w-6 bg-protein-green"
//                     : "w-1.5 bg-white/80"
//                 }
//               `}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }




// import {
//   ArrowRight,
//   Heart,
//   Leaf,
//   ShieldCheck,
//   Store,
// } from "lucide-react";
// import { useEffect, useState, useCallback } from "react";

// import { BENEFITS } from "../data/homeData";
// import BANNERS from "../data/bannerData";

// const icons = {
//   leaf: Leaf,
//   shield: ShieldCheck,
//   store: Store,
//   heart: Heart,
// };

// export default function HeroSection() {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   // Automatically rotate the banners.
//   useEffect(() => {
//     if (!BANNERS || BANNERS.length <= 1) return;

//     const interval = window.setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
//     }, 5000);

//     return () => window.clearInterval(interval);
//   }, []);

//   // Scroll to a section while accounting for the sticky navbar.
//   const scrollToSection = useCallback((sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (!section) return;

//     const navbar = document.querySelector("header");
//     const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

//     const targetPosition =
//       section.getBoundingClientRect().top +
//       window.scrollY -
//       navbarHeight -
//       8;

//     window.scrollTo({
//       top: Math.max(0, targetPosition),
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative isolate scroll-mt-20 overflow-hidden bg-[#258440]"
//     >
//       {/* Rotating banner images on the right */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {BANNERS.map((banner, index) => (
//           <div
//             key={banner.id}
//             role="img"
//             aria-label={banner.alt || "Healthy high-protein foods"}
//             aria-hidden={index !== currentBanner}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentBanner
//                 ? "opacity-100"
//                 : "pointer-events-none opacity-0"
//             }`}
//             style={{
//               backgroundImage: `url("${banner.image}")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center right",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//         ))}
//       </div>

//       {/* Green overlay: solid on the left, transparent on the right */}
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#258440] from-0% via-[#258440]/95 via-35% via-[#258440]/80 via-48% to-transparent to-75%"
//         aria-hidden="true"
//       />

//       {/* Main content */}
//       <div className="relative z-10 mx-auto grid min-h-[560px] max-w-[1500px] grid-cols-1 sm:min-h-[600px] lg:min-h-[650px] lg:grid-cols-[46%_54%]">
//         {/* LEFT SIDE — GREEN BACKGROUND */}
//         <div className="relative z-10 flex flex-col justify-center bg-[#258440] px-5 py-12 sm:px-8 sm:py-14 lg:bg-transparent lg:px-10 lg:py-14">
//           <h1 className="max-w-[550px] text-[35px] font-black leading-[1.08] tracking-[-1.1px] text-white sm:text-[44px] md:text-[49px] lg:text-[52px] xl:text-[58px]">
//             Healthy
//             <br />
//             Protein Choices
//             <br />
//             <span
//               key={currentBanner}
//               className="inline-block animate-fade-in text-[#8cae97]"
//             >
//               {BANNERS[currentBanner]?.headline || "for a Better You"}
//             </span>
//           </h1>

//           <p className="mt-5 max-w-[475px] text-sm leading-7 text-white/90 sm:text-base">
//             Discover high protein foods from local stores, make smarter
//             choices with nutrition intelligence and live a healthier,
//             stronger life.
//           </p>

//           {/* Action buttons */}
//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             <button
//               type="button"
//               onClick={() => scrollToSection("high-protein-foods")}
//               className="flex w-fit items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#1F7036] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7EB] hover:shadow-lg sm:px-7"
//             >
//               Explore High Protein Foods
//               <ArrowRight size={18} />
//             </button>

//             <button
//               type="button"
//               onClick={() => scrollToSection("protein-calculator")}
//               className="flex w-fit items-center justify-center rounded-full border-2 border-white bg-transparent px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1F7036] hover:shadow-md sm:px-7"
//             >
//               Calculate Your Needs
//             </button>
//           </div>

//           {/* Benefits */}
//           <div className="mt-7 grid max-w-[500px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
//             {BENEFITS.map((item) => {
//               const Icon = icons[item.icon];
//               if (!Icon) return null;

//               return (
//                 <div key={item.title} className="text-center">
//                   <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/10 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-md sm:h-13 sm:w-13">
//                     <Icon size={22} strokeWidth={1.8} />
//                   </div>

//                   <p className="text-xs font-bold leading-4 text-white">
//                     {item.title}
//                   </p>

//                   <p className="text-xs font-medium leading-4 text-white/80">
//                     {item.subtitle}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right-side space for the banner image */}
//         <div className="hidden min-h-[420px] lg:block" />
//       </div>

//       {/* Nutrition information card */}
//       <div className="absolute bottom-16 right-6 z-20 hidden w-44 rounded-2xl border border-[#E1EEE1] bg-white p-4 shadow-xl md:block lg:right-10 xl:right-16">
//         <p className="text-xs font-bold text-[#16452D]">
//           High Protein
//         </p>

//         <span className="mt-2 inline-block rounded-md bg-[#E0F3E3] px-2 py-1 text-[11px] font-bold text-[#1F7036]">
//           24g Protein
//         </span>

//         <p className="mt-3 text-[11px] font-semibold text-[#365344]">
//           🌿 Nutri Score <b className="text-[#258440]">A</b>
//         </p>

//         <p className="mt-2 text-[11px] font-semibold text-[#365344]">
//           ❤️ Healthy Choice
//         </p>
//       </div>

//       {/* Banner indicators */}
//       {BANNERS.length > 1 && (
//         <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
//           {BANNERS.map((banner, index) => (
//             <button
//               key={banner.id}
//               type="button"
//               onClick={() => setCurrentBanner(index)}
//               aria-label={`Go to banner ${index + 1}`}
//               aria-pressed={index === currentBanner}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentBanner
//                   ? "w-7 bg-[#258440]"
//                   : "w-2 bg-white shadow-sm"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }



// import {
//   ArrowRight,
//   Heart,
//   Leaf,
//   ShieldCheck,
//   Store,
// } from "lucide-react";
// import { useEffect, useState, useCallback } from "react";

// import { BENEFITS } from "../data/homeData";
// import BANNERS from "../data/bannerData";

// import AnimatedHeading from "./AnimatedHeading";

// const icons = {
//   leaf: Leaf,
//   shield: ShieldCheck,
//   store: Store,
//   heart: Heart,
// };

// export default function HeroSection() {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   // Automatically rotate banners every 5 seconds.
//   useEffect(() => {
//     if (!BANNERS || BANNERS.length <= 1) return;

//     const interval = window.setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
//     }, 5000);

//     return () => window.clearInterval(interval);
//   }, []);

//   // Scroll to a section while accounting for the sticky navbar.
//   const scrollToSection = useCallback((sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (!section) return;

//     const navbar = document.querySelector("header");
//     const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

//     const targetPosition =
//       section.getBoundingClientRect().top +
//       window.scrollY -
//       navbarHeight -
//       8;

//     window.scrollTo({
//       top: Math.max(0, targetPosition),
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative isolate scroll-mt-20 overflow-hidden bg-[#258440]"
//     >
//       {/* Rotating banner images — visible on every screen */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {BANNERS.map((banner, index) => (
//           <div
//             key={banner.id}
//             role="img"
//             aria-label={banner.alt || "Healthy high-protein foods"}
//             aria-hidden={index !== currentBanner}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentBanner
//                 ? "opacity-100"
//                 : "pointer-events-none opacity-0"
//             }`}
//             style={{
//               backgroundImage: `url("${banner.image}")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center right",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//         ))}
//       </div>

//       {/* Green gradient: stronger behind text, lighter over food */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 z-[1]
//           bg-gradient-to-r
//           from-[#258440]/80
//           via-[#258440]/45
//           to-[#258440]/10
//           sm:from-[#258440]/85
//           sm:via-[#258440]/35
//           sm:to-transparent
//           lg:from-[#258440]
//           lg:via-[#258440]/90
//           lg:via-35%
//           lg:via-[#258440]/40
//           lg:via-55%
//           lg:to-transparent
//           lg:to-75%
//         "
//         aria-hidden="true"
//       />

//       {/* Main content */}
//       <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1500px] grid-cols-1 sm:min-h-[680px] md:min-h-[700px] lg:min-h-[650px] lg:grid-cols-[46%_54%]">
//         {/* LEFT SIDE — TEXT AND BUTTONS */}
//         <div className="relative z-10 flex flex-col justify-center bg-transparent px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-14">
//      <h1 className="max-w-[550px] text-[35px] font-black leading-[1.08] tracking-[-1.1px] text-white sm:text-[44px] md:text-[49px] lg:text-[52px] xl:text-[58px]">
//   <AnimatedHeading as="span" className="block">
//     Healthy
//   </AnimatedHeading>

//   <AnimatedHeading as="span" className="block">
//     Protein Choices
//   </AnimatedHeading>

//   {/* Animated banner headline */}
//   <span
//     key={currentBanner}
//     aria-label={BANNERS[currentBanner]?.headline || "for a Better You"}
//     className="block text-[#C5E4CA]"
//   >
//     {(BANNERS[currentBanner]?.headline || "for a Better You")
//       .split("")
//       .map((letter, index) => (
//         <span
//           key={`${currentBanner}-${index}`}
//           aria-hidden="true"
//           className="inline-block animate-fade-in"
//           style={{
//             animationDelay: `${index * 45}ms`,
//             animationFillMode: "both",
//           }}
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </span>
//       ))}
//   </span>
// </h1>

//           <p className="mt-5 max-w-[475px] text-sm leading-7 text-white sm:text-base">
//             Discover high protein foods from local stores, make smarter
//             choices with nutrition intelligence and live a healthier,
//             stronger life.
//           </p>

//           {/* Action buttons */}
//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             <button
//               type="button"
//               onClick={() => scrollToSection("high-protein-foods")}
//               className="flex w-fit items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#1F7036] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7EB] hover:shadow-lg sm:px-7"
//             >
//               Explore High Protein Foods
//               <ArrowRight size={18} />
//             </button>

//             <button
//               type="button"
//               onClick={() => scrollToSection("protein-calculator")}
//               className="flex w-fit items-center justify-center rounded-full border-2 border-white bg-transparent px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1F7036] hover:shadow-md sm:px-7"
//             >
//               Calculate Your Needs
//             </button>
//           </div>

//           {/* Benefits */}
//           <div className="mt-7 grid max-w-[500px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
//             {BENEFITS.map((item) => {
//               const Icon = icons[item.icon];

//               if (!Icon) return null;

//               return (
//                 <div key={item.title} className="text-center">
//                   <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/10 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-md sm:h-13 sm:w-13">
//                     <Icon size={22} strokeWidth={1.8} />
//                   </div>

//                   <p className="text-xs font-bold leading-4 text-white">
//                     {item.title}
//                   </p>

//                   <p className="text-xs font-medium leading-4 text-white/90">
//                     {item.subtitle}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Space for the banner image on desktop */}
//         <div className="hidden min-h-[420px] lg:block" />
//       </div>

//       {/* Nutrition information card */}
//       <div className="absolute bottom-16 right-6 z-20 hidden w-44 rounded-2xl border border-[#E1EEE1] bg-white p-4 shadow-xl md:block lg:right-10 xl:right-16">
//         <p className="text-xs font-bold text-[#16452D]">
//           High Protein
//         </p>

//         <span className="mt-2 inline-block rounded-md bg-[#E0F3E3] px-2 py-1 text-[11px] font-bold text-[#1F7036]">
//           24g Protein
//         </span>

//         <p className="mt-3 text-[11px] font-semibold text-[#365344]">
//           🌿 Nutri Score <b className="text-[#258440]">A</b>
//         </p>

//         <p className="mt-2 text-[11px] font-semibold text-[#365344]">
//           ❤️ Healthy Choice
//         </p>
//       </div>

//       {/* Banner indicators */}
//       {BANNERS.length > 1 && (
//         <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
//           {BANNERS.map((banner, index) => (
//             <button
//               key={banner.id}
//               type="button"
//               onClick={() => setCurrentBanner(index)}
//               aria-label={`Go to banner ${index + 1}`}
//               aria-pressed={index === currentBanner}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentBanner
//                   ? "w-7 bg-white"
//                   : "w-2 bg-white/60"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }





import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  Store,
} from "lucide-react";
import { useCallback } from "react";

import { BENEFITS } from "../data/homeData";
import BANNERS from "../data/bannerData";
import AnimatedHeading from "./AnimatedHeading";

// Replace this import with the actual mobile mockup image path.
import mobileAppImage from "../assets/mobile-app.png";

const icons = {
  leaf: Leaf,
  shield: ShieldCheck,
  store: Store,
  heart: Heart,
};

export default function HeroSection() {
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbar = document.querySelector("header");
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      8;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#17632F] via-[#258440] to-[#0DAA78] text-white"
    >
      {/* Full-width background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl"
      />

      {/* Main hero: equal 50/50 columns on desktop */}
      <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-12 xl:px-16">

        {/* LEFT: Existing content */}
        <div className="relative z-10 flex min-w-0 flex-col justify-center">
          <div className="mb-6 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm sm:text-sm">
            <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
            EatProtein · Your Daily Nutrition Companion
          </div>

          <h1 className="max-w-[650px] text-3xl font-black leading-[1.08] tracking-[-1.2px] text-white sm:text-5xl md:text-6xl xl:text-[68px]">
            <AnimatedHeading as="span" className="block">
              Healthy
            </AnimatedHeading>

            <AnimatedHeading as="span" className="block">
              Protein Choices
            </AnimatedHeading>

            <span className="block text-[#C5E4CA]">
              {"for a Better You".split("").map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="inline-block animate-fade-in"
                  style={{
                    animationDelay: `${index * 45}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-6 max-w-[540px] text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
            Discover high protein foods from local stores, make smarter
            choices with nutrition intelligence and live a healthier,
            stronger life.
          </p>

          {/* Existing action buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("high-protein-foods")}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#086346] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#EAF7EB] hover:shadow-xl sm:px-8"
            >
              Explore High Protein Foods
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("protein-calculator")}
              className="flex items-center justify-center rounded-full border border-white/60 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white/15 sm:px-8"
            >
              Calculate Your Needs
            </button>
          </div>

          {/* Existing benefits */}
          <div className="mt-9 grid max-w-[560px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
            {BENEFITS.map((item) => {
              const Icon = icons[item.icon];

              if (!Icon) return null;

              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:h-[52px] sm:w-[52px]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <p className="text-xs font-bold leading-4 text-white">
                    {item.title}
                  </p>

                  <p className="text-xs leading-4 text-white/80">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Mobile app image */}
            <div className="relative flex min-w-0 items-center justify-center py-5 lg:min-h-[600px] lg:py-0">          <div
           aria-hidden="true"
             className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/15 blur-3xl sm:h-[430px] sm:w-[430px] lg:h-[480px] lg:w-[480px]"
           />

           <video
   src="/videos/f1.mp4"
   autoPlay
   muted
   loop
   playsInline
   preload="metadata"
   aria-label="EatProtein mobile app preview"
   className="relative z-10 h-auto max-h-[580px] w-full max-w-[260px] object-contain drop-shadow-2xl sm:max-w-[310px] lg:max-h-[620px] lg:max-w-[340px] xl:max-w-[370px]"
 />

           {/* Floating badge */}
           <div className="absolute right-0 top-10 z-20 hidden rounded-2xl border border-white/40 bg-white px-3 py-3 text-[#103B27] shadow-xl sm:block lg:right-0 xl:right-4">
             <p className="text-xl font-black text-[#0DAA78]">
               Eat Healthy
             </p>
             <p className="mt-1 text-xs font-bold">
               Smart Protein Choices
             </p>
           </div>

           {/* Floating nutrition badge */}
           <div className="absolute bottom-10 left-0 z-20 hidden rounded-2xl border border-white/40 bg-white px-3 py-3 text-[#103B27] shadow-xl sm:block lg:left-0 xl:left-4">
             <p className="text-lg font-black text-amber-500">
               Daily Nutrition
             </p>
             <p className="mt-1 text-xs font-bold">
               Build Healthier Habits
             </p>
           </div>
         </div>
       </div>
    </section>
  );
}











{/*Three designs*/} 

// import {
//   ArrowRight,
//   Heart,
//   Leaf,
//   ShieldCheck,
//   Store,
// } from "lucide-react";
// import { useCallback, useEffect, useState } from "react";

// import { BENEFITS } from "../data/homeData";
// import BANNERS from "../data/bannerData";
// import AnimatedHeading from "./AnimatedHeading";
// import mobileAppImage from "../assets/mobile-app.png";

// const icons = {
//   leaf: Leaf,
//   shield: ShieldCheck,
//   store: Store,
//   heart: Heart,
// };

// export default function HeroSection() {
//   // 0 = Light design, 1 = Green design, 2 = Mobile app design
//   const [designIndex, setDesignIndex] = useState(0);
//   const [currentBanner, setCurrentBanner] = useState(0);

//   // Change the displayed design using the keyboard.
//   const changeDesign = useCallback((direction) => {
//     setDesignIndex((previous) => {
//       return (previous + direction + 3) % 3;
//     });
//   }, []);

//   // Left and Right arrow keyboard navigation.
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       // Do not interfere with typing or other interactive controls.
//       const target = event.target;
//       const tagName = target?.tagName?.toLowerCase();

//       if (
//         ["input", "textarea", "select"].includes(tagName) ||
//         target?.isContentEditable
//       ) {
//         return;
//       }

//       if (event.key === "ArrowRight") {
//         event.preventDefault();
//         changeDesign(1);
//       }

//       if (event.key === "ArrowLeft") {
//         event.preventDefault();
//         changeDesign(-1);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [changeDesign]);

//   // Automatically rotate banner images in designs 1 and 2.
//   useEffect(() => {
//     if (!BANNERS || BANNERS.length <= 1 || designIndex === 2) {
//       return;
//     }

//     const interval = window.setInterval(() => {
//       setCurrentBanner((previous) => (previous + 1) % BANNERS.length);
//     }, 5000);

//     return () => window.clearInterval(interval);
//   }, [designIndex]);

//   // Scroll to a section while accounting for the sticky navbar.
//   const scrollToSection = useCallback((sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (!section) return;

//     const navbar = document.querySelector("header");
//     const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

//     const targetPosition =
//       section.getBoundingClientRect().top +
//       window.scrollY -
//       navbarHeight -
//       8;

//     window.scrollTo({
//       top: Math.max(0, targetPosition),
//       behavior: "smooth",
//     });
//   }, []);

//   const renderBenefits = (light = false) => (
//     <div
//       className={`mt-7 grid max-w-[560px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3 ${
//         light ? "text-slate-800" : "text-white"
//       }`}
//     >
//       {BENEFITS.map((item) => {
//         const Icon = icons[item.icon];

//         if (!Icon) return null;

//         return (
//           <div key={item.title} className="text-center">
//             <div
//               className={`mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full border shadow-sm transition duration-300 hover:-translate-y-1 sm:h-[52px] sm:w-[52px] ${
//                 light
//                   ? "border-green-100 bg-white text-protein-green"
//                   : "border-white/30 bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               <Icon size={22} strokeWidth={1.8} />
//             </div>

//             <p
//               className={`text-xs font-bold leading-4 ${
//                 light ? "text-slate-800" : "text-white"
//               }`}
//             >
//               {item.title}
//             </p>

//             <p
//               className={`text-xs leading-4 ${
//                 light ? "text-slate-700" : "text-white/80"
//               }`}
//             >
//               {item.subtitle}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );

//   // =========================================================
//   // DESIGN 1: LIGHT BACKGROUND + BANNER IMAGE
//   // =========================================================
//   if (designIndex === 0) {
//     return (
//       <section
//         id="home"
//         className="relative isolate w-full scroll-mt-16 overflow-hidden bg-[#f8f9f5]"
//       >
//         {/* Banner backgrounds */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           {BANNERS.map((banner, index) => (
//             <div
//               key={banner.id}
//               role="img"
//               aria-label={banner.alt || "Healthy high-protein foods"}
//               aria-hidden={index !== currentBanner}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentBanner
//                   ? "opacity-100"
//                   : "pointer-events-none opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `url("${banner.image}")`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 mx-auto grid min-h-[540px] max-w-[1500px] grid-cols-1 sm:min-h-[580px] lg:min-h-[620px] lg:grid-cols-[44%_56%]">
//           {/* Left content */}
//           <div className="relative z-10 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-12">
//             <h1 className="max-w-[500px] text-[34px] font-black leading-[1.04] tracking-[-1.2px] text-protein-dark sm:text-[43px] md:text-[48px] lg:text-[49px]">
//               Healthy
//               <br />
//               Protein Choices
//               <br />
//               <span
//                 key={currentBanner}
//                 className="inline-block animate-fade-in text-protein-green"
//               >
//                 {BANNERS[currentBanner]?.headline || "for a Better You"}
//               </span>
//             </h1>

//             <p className="mt-4 max-w-[465px] text-sm leading-6 text-slate-700 sm:text-[15px]">
//               Discover high protein foods from local stores, make smarter
//               choices with nutrition intelligence and live a healthier,
//               stronger life.
//             </p>

//             <div className="mt-5 flex flex-wrap items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => scrollToSection("high-protein-foods")}
//                 className="flex w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D7201A] to-[#B91C1C] px-5 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 sm:px-7"
//               >
//                 Explore High Protein Foods
//                 <ArrowRight size={17} />
//               </button>

//               <button
//                 type="button"
//                 onClick={() => scrollToSection("protein-calculator")}
//                 className="flex w-fit items-center justify-center rounded-full border-2 border-green-700 bg-transparent px-5 py-3 text-sm font-bold text-green-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:text-white sm:px-7"
//               >
//                 Calculate Your Needs
//               </button>
//             </div>

//             {renderBenefits(true)}
//           </div>

//           {/* Right side reserved for the banner */}
//           <div className="hidden min-h-[420px] lg:block" />
//         </div>

//         {/* Nutrition information card */}
//         <div className="absolute bottom-14 right-8 z-20 hidden w-40 rounded-xl bg-white p-4 shadow-xl md:block lg:right-12 xl:right-20">
//           <p className="text-[11px] font-bold text-slate-800">
//             High Protein
//           </p>
//           <span className="mt-1 inline-block rounded bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">
//             24g Protein
//           </span>
//           <p className="mt-3 text-[10px] font-semibold text-slate-700">
//             🌿 Nutri Score <b className="text-green-700">A</b>
//           </p>
//           <p className="mt-2 text-[10px] font-semibold text-slate-700">
//             🧡 Healthy Choice
//           </p>
//         </div>

//         {/* Banner indicators */}
//         {BANNERS.length > 1 && (
//           <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
//             {BANNERS.map((banner, index) => (
//               <button
//                 key={banner.id}
//                 type="button"
//                 onClick={() => setCurrentBanner(index)}
//                 aria-label={`Go to banner ${index + 1}`}
//                 aria-pressed={index === currentBanner}
//                 className={`h-1.5 rounded-full transition-all ${
//                   index === currentBanner
//                     ? "w-6 bg-protein-green"
//                     : "w-1.5 bg-white/80"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     );
//   }

//   // =========================================================
//   // DESIGN 2: FULL GREEN BACKGROUND + BANNER IMAGE
//   // =========================================================
//   if (designIndex === 1) {
//     return (
//       <section
//         id="home"
//         className="relative isolate w-full scroll-mt-20 overflow-hidden bg-[#258440]"
//       >
//         {/* Rotating banner images */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           {BANNERS.map((banner, index) => (
//             <div
//               key={banner.id}
//               role="img"
//               aria-label={banner.alt || "Healthy high-protein foods"}
//               aria-hidden={index !== currentBanner}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                 index === currentBanner
//                   ? "opacity-100"
//                   : "pointer-events-none opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `url("${banner.image}")`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center right",
//                 backgroundRepeat: "no-repeat",
//               }}
//             />
//           ))}
//         </div>

//         {/* Green gradient overlay */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#258440]/90 via-[#258440]/65 to-[#258440]/20 lg:from-[#258440] lg:via-[#258440]/80 lg:to-transparent"
//         />

//         <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1500px] grid-cols-1 sm:min-h-[680px] md:min-h-[700px] lg:min-h-[650px] lg:grid-cols-2">
//           {/* Left content */}
//           <div className="relative z-10 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-14">
//             <h1 className="max-w-[550px] text-[35px] font-black leading-[1.08] tracking-[-1.1px] text-white sm:text-[44px] md:text-[49px] lg:text-[52px] xl:text-[58px]">
//               <AnimatedHeading as="span" className="block">
//                 Healthy
//               </AnimatedHeading>

//               <AnimatedHeading as="span" className="block">
//                 Protein Choices
//               </AnimatedHeading>

//               <span
//                 key={currentBanner}
//                 aria-label={
//                   BANNERS[currentBanner]?.headline || "for a Better You"
//                 }
//                 className="block text-[#C5E4CA]"
//               >
//                 {(BANNERS[currentBanner]?.headline || "for a Better You")
//                   .split("")
//                   .map((letter, index) => (
//                     <span
//                       key={`${currentBanner}-${index}`}
//                       aria-hidden="true"
//                       className="inline-block animate-fade-in"
//                       style={{
//                         animationDelay: `${index * 45}ms`,
//                         animationFillMode: "both",
//                       }}
//                     >
//                       {letter === " " ? "\u00A0" : letter}
//                     </span>
//                   ))}
//               </span>
//             </h1>

//             <p className="mt-5 max-w-[475px] text-sm leading-7 text-white sm:text-base">
//               Discover high protein foods from local stores, make smarter
//               choices with nutrition intelligence and live a healthier,
//               stronger life.
//             </p>

//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => scrollToSection("high-protein-foods")}
//                 className="flex w-fit items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#1F7036] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7EB] sm:px-7"
//               >
//                 Explore High Protein Foods
//                 <ArrowRight size={18} />
//               </button>

//               <button
//                 type="button"
//                 onClick={() => scrollToSection("protein-calculator")}
//                 className="flex w-fit items-center justify-center rounded-full border-2 border-white bg-transparent px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1F7036] sm:px-7"
//               >
//                 Calculate Your Needs
//               </button>
//             </div>

//             {renderBenefits(false)}
//           </div>

//           {/* Space for background banner image */}
//           <div className="hidden min-h-[420px] lg:block" />
//         </div>

//         {/* Nutrition card */}
//         <div className="absolute bottom-16 right-6 z-20 hidden w-44 rounded-2xl border border-[#E1EEE1] bg-white p-4 shadow-xl md:block lg:right-10 xl:right-16">
//           <p className="text-xs font-bold text-[#16452D]">High Protein</p>
//           <span className="mt-2 inline-block rounded-md bg-[#E0F3E3] px-2 py-1 text-[11px] font-bold text-[#1F7036]">
//             24g Protein
//           </span>
//           <p className="mt-3 text-[11px] font-semibold text-[#365344]">
//             🌿 Nutri Score <b className="text-[#258440]">A</b>
//           </p>
//           <p className="mt-2 text-[11px] font-semibold text-[#365344]">
//             ❤️ Healthy Choice
//           </p>
//         </div>

//         {/* Banner indicators */}
//         {BANNERS.length > 1 && (
//           <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
//             {BANNERS.map((banner, index) => (
//               <button
//                 key={banner.id}
//                 type="button"
//                 onClick={() => setCurrentBanner(index)}
//                 aria-label={`Go to banner ${index + 1}`}
//                 aria-pressed={index === currentBanner}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   index === currentBanner
//                     ? "w-7 bg-white"
//                     : "w-2 bg-white/60"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     );
//   }

//   // =========================================================
//   // DESIGN 3: GREEN GRADIENT + MOBILE APP IMAGE ON THE RIGHT
//   // =========================================================
//   return (
//     <section
//       id="home"
//       className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#17632F] via-[#258440] to-[#0DAA78] text-white"
//     >
//       {/* Background decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl"
//       />

//       {/* Equal 50/50 layout on desktop */}
//       <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-10 xl:px-16">
//         {/* Left content */}
//         <div className="relative z-10 flex min-w-0 flex-col justify-center">
//           <div className="mb-6 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm sm:text-sm">
//             <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
//             EatProtein · Your Daily Nutrition Companion
//           </div>

//           <h1 className="max-w-[650px] text-[36px] font-black leading-[1.08] tracking-[-1.2px] text-white sm:text-5xl md:text-6xl xl:text-[68px]">
//             <AnimatedHeading as="span" className="block">
//               Healthy
//             </AnimatedHeading>

//             <AnimatedHeading as="span" className="block">
//               Protein Choices
//             </AnimatedHeading>

//             <span className="block text-[#C5E4CA]">
//               {"for a Better You".split("").map((letter, index) => (
//                 <span
//                   key={`${letter}-${index}`}
//                   className="inline-block animate-fade-in"
//                   style={{
//                     animationDelay: `${index * 45}ms`,
//                     animationFillMode: "both",
//                   }}
//                 >
//                   {letter === " " ? "\u00A0" : letter}
//                 </span>
//               ))}
//             </span>
//           </h1>

//           <p className="mt-6 max-w-[540px] text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
//             Discover high protein foods from local stores, make smarter
//             choices with nutrition intelligence and live a healthier,
//             stronger life.
//           </p>

//           <div className="mt-7 flex flex-wrap items-center gap-4">
//             <button
//               type="button"
//               onClick={() => scrollToSection("high-protein-foods")}
//               className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#086346] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#EAF7EB] sm:px-8"
//             >
//               Explore High Protein Foods
//               <ArrowRight size={18} />
//             </button>

//             <button
//               type="button"
//               onClick={() => scrollToSection("protein-calculator")}
//               className="flex items-center justify-center rounded-full border border-white/60 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white/15 sm:px-8"
//             >
//               Calculate Your Needs
//             </button>
//           </div>

//           {renderBenefits(false)}
//         </div>

//         {/* Right content: mobile app image */}
//         <div className="relative flex min-w-0 items-center justify-center py-5 lg:min-h-[600px] lg:py-0">
//           <div
//             aria-hidden="true"
//             className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/15 blur-3xl sm:h-[430px] sm:w-[430px] lg:h-[480px] lg:w-[480px]"
//           />

//           <video
//   src="/videos/eatprotein-app1.webm"
//   autoPlay
//   muted
//   loop
//   playsInline
//   preload="metadata"
//   aria-label="EatProtein mobile app preview"
//   className="relative z-10 h-auto max-h-[580px] w-full max-w-[260px] object-contain drop-shadow-2xl sm:max-w-[310px] lg:max-h-[620px] lg:max-w-[340px] xl:max-w-[370px]"
// />

//           {/* Floating badge */}
//           <div className="absolute right-0 top-10 z-20 hidden rounded-2xl border border-white/40 bg-white px-3 py-3 text-[#103B27] shadow-xl sm:block lg:right-0 xl:right-4">
//             <p className="text-xl font-black text-[#0DAA78]">
//               Eat Healthy
//             </p>
//             <p className="mt-1 text-xs font-bold">
//               Smart Protein Choices
//             </p>
//           </div>

//           {/* Floating nutrition badge */}
//           <div className="absolute bottom-10 left-0 z-20 hidden rounded-2xl border border-white/40 bg-white px-3 py-3 text-[#103B27] shadow-xl sm:block lg:left-0 xl:left-4">
//             <p className="text-lg font-black text-amber-500">
//               Daily Nutrition
//             </p>
//             <p className="mt-1 text-xs font-bold">
//               Build Healthier Habits
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
