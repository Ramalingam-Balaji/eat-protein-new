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



import { ArrowRight, Heart, Leaf, ShieldCheck, Store } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

import { BENEFITS } from "../data/homeData";
import BANNERS from "../data/bannerData";

const icons = {
  leaf: Leaf,
  shield: ShieldCheck,
  store: Store,
  heart: Heart,
};

export default function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Automatically change banners.
  useEffect(() => {
    if (!BANNERS || BANNERS.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to a Home section with the fixed navbar offset.
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      console.warn(`Section with ID "${sectionId}" was not found.`);
      return;
    }

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
      className="
        relative isolate scroll-mt-16 overflow-hidden
        bg-[#f8f9f5]
      "
    >
      {/* FULL-WIDTH RESPONSIVE BACKGROUND BANNERS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            role="img"
            aria-label={banner.alt}
            className={`
              absolute inset-0
              transition-opacity duration-1000 ease-in-out
              ${
                index === currentBanner
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
            style={{
              backgroundImage: `url("${banner.image}")`,
              backgroundSize: "cover",
              backgroundPosition:
                "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10 mx-auto grid
          min-h-[540px] max-w-[1500px]
          grid-cols-1
          sm:min-h-[580px]
          lg:min-h-[620px]
          lg:grid-cols-[44%_56%]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            relative z-10 flex flex-col justify-center
            px-5 py-12
            sm:px-8 sm:py-14
            lg:px-7 lg:py-12
          "
        >
          <h1
            className="
              max-w-[500px]
              text-[34px] font-black
              leading-[1.04] tracking-[-1.2px]
              text-protein-dark
              sm:text-[43px]
              md:text-[48px]
              lg:text-[49px]
            "
          >
            Healthy
            <br />
            Protein Choices
            <br />
            {/* <span className="text-protein-green">
              for a Better You
            </span> */}

            <span
  key={currentBanner}
  className="
    inline-block text-protein-green
    animate-fade-in
  "
>
  {BANNERS[currentBanner]?.headline || "for a Better You"}
</span>
          </h1>

          <p
            className="
              mt-4 max-w-[465px]
              text-sm leading-6 text-slate-700
              sm:text-[15px]
            "
          >
            Discover high protein foods from local stores, make smarter
            choices with nutrition intelligence and live a healthier,
            stronger life.
          </p>

          {/* ACTION BUTTONS */}
          <div
            className="
              mt-5 flex flex-wrap items-center gap-3
            "
          >
            <button
              type="button"
              onClick={() => scrollToSection("high-protein-foods")}
              className="
                flex w-fit items-center justify-center gap-2
                rounded-full
                bg-gradient-to-r from-[#D7201A] to-[#B91C1C]
                px-5 py-3 text-sm font-bold text-white shadow-md
                transition duration-300
                hover:-translate-y-0.5
                sm:px-7
              "
            >
              Explore High Protein Foods
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("protein-calculator")}
              className="
                flex w-fit items-center justify-center 
                rounded-full border-2 border-green-700
                bg-transparent px-5 py-3
                text-sm font-bold text-green-800
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-green-700
                hover:text-white hover:shadow-md
                sm:px-7
              "
            >
              Calculate Your Needs
            </button>
          </div>

          {/* BENEFITS */}
          <div
            className="
              mt-6 grid max-w-[480px]
              grid-cols-2 gap-x-4 gap-y-4
              sm:grid-cols-4 sm:gap-3
            "
          >
            {BENEFITS.map((item) => {
              const Icon = icons[item.icon];

              if (!Icon) return null;

              return (
                <div key={item.title} className="text-center">
                  <div
                    className="
                      mx-auto mb-2 grid h-11 w-11
                      place-items-center rounded-full
                      border border-green-100 bg-white
                      text-protein-green shadow-sm
                      sm:h-12 sm:w-12
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <p
                    className="
                      text-xs font-semibold
                      leading-4 text-slate-800
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      text-xs font-semibold
                      leading-4 text-slate-800
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE SPACE FOR THE BACKGROUND IMAGE */}
        <div className="hidden min-h-[420px] lg:block" />
      </div>

      {/* NUTRITION CARD */}
      <div
        className="
          absolute bottom-14 right-8 z-20
          hidden w-40 rounded-xl
          bg-white p-4 shadow-xl
          md:block lg:right-12 xl:right-20
        "
      >
        <p className="text-[11px] font-bold text-slate-800">
          High Protein
        </p>

        <span
          className="
            mt-1 inline-block rounded bg-green-100
            px-2 py-1 text-[10px] font-bold text-green-700
          "
        >
          24g Protein
        </span>

        <p className="mt-3 text-[10px] font-semibold text-slate-700">
          🌿 Nutri Score <b className="text-green-700">A</b>
        </p>

        <p className="mt-2 text-[10px] font-semibold text-slate-700">
          🧡 Healthy Choice
        </p>
      </div>

      {/* BANNER DOTS */}
      {BANNERS.length > 1 && (
        <div
          className="
            absolute bottom-4 left-1/2 z-30
            flex -translate-x-1/2
            items-center gap-1.5
          "
        >
          {BANNERS.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              onClick={() => setCurrentBanner(index)}
              aria-label={`Go to banner ${index + 1}`}
              aria-pressed={index === currentBanner}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  index === currentBanner
                    ? "w-6 bg-protein-green"
                    : "w-1.5 bg-white/80"
                }
              `}
            />
          ))}
        </div>
      )}
    </section>
  );
}
