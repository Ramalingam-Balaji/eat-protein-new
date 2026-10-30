
// import { useEffect, useRef, useState } from "react";
// import { ArrowDown } from "lucide-react";

// import AnimatedHeading from "./AnimatedHeading";
// import { EATPROTEIN_JOURNEY } from "../data/eatProteinJourneyData";

// export default function EatProteinJourney() {
//   const sectionRef = useRef(null);
//   const itemRefs = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(-1);

//   useEffect(() => {
//     const items = itemRefs.current.filter(Boolean);

//     if (!items.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveIndex(Number(entry.target.dataset.index));
//           }
//         });
//       },
//       {
//         root: null,
//         // Activate a step when it reaches the middle of the viewport.
//         rootMargin: "-45% 0px -45% 0px",
//         threshold: 0,
//       }
//     );

//     items.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   const progress =
//     activeIndex < 0
//       ? 0
//       : ((activeIndex + 1) / EATPROTEIN_JOURNEY.length) * 100;

//   return (
//     <section
//       ref={sectionRef}
//       id="eatprotein-journey"
//       className="relative overflow-hidden bg-[#f8f9f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-15"
//     >
//       {/* Soft background decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-[#dff4df]/50 blur-3xl"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#eaf5c9]/40 blur-3xl"
//       />

//       <div className="relative mx-auto max-w-6xl">
//         {/* Heading: reuse the existing heading animation */}
//         <div className="mx-auto mb-5 max-w-3xl text-center">
//           <span className="inline-flex items-center rounded-full border border-[#d5ead5] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#178443] shadow-sm sm:text-sm">
//             The EatProtein Journey
//           </span>

//           <div className="mt-5">
//             <AnimatedHeading className="text-2xl font-black tracking-tight text-[#103B27] sm:text-3xl lg:text-4xl">
//               Your Journey to Better Nutrition
//             </AnimatedHeading>
//           </div>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//             From understanding your protein needs to discovering nutritious
//             foods, take one simple step at a time with EatProtein.
//           </p>

//           {/* <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-[#178443] sm:text-sm">
//             <ArrowDown size={16} className="animate-bounce" />
//             SCROLL TO EXPLORE
//           </div> */}
//         </div>

//         {/* Timeline */}
//         <div className="relative mx-auto mt-8 max-w-5xl sm:mt-10">
//           {/* Static ladder line */}
//           <div
//             aria-hidden="true"
//             className="absolute bottom-8 left-1/2 top-8 w-[2px] -translate-x-1/2 bg-[#d8ead9]"
//           />

//           {/* Animated progress line */}
//           <div
//             aria-hidden="true"
//             className="absolute left-1/2 top-8 w-[3px] -translate-x-1/2 rounded-full bg-[#178443] transition-[height] duration-700 ease-out"
//             style={{
//               height: `calc((100% - 4rem) * ${progress / 100})`,
//             }}
//           />

//           <div className="relative">
//             {EATPROTEIN_JOURNEY.map((item, index) => {
//               const Icon = item.icon;
//               const isActive = activeIndex === index;
//               const isPast = activeIndex > index;

//               // Automatically alternate the date and description sides.
//               const dateOnLeft = index % 2 === 0;

//               return (
//                 <div
//                   key={item.id}
//                   ref={(element) => {
//                     itemRefs.current[index] = element;
//                   }}
//                   data-index={index}
//                   className="relative grid min-h-[175px] grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] items-center gap-1 py-5 sm:min-h-[200px] sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] sm:gap-2 sm:py-6"
//                 >
//                   {/* LEFT SIDE */}
//                   <div className="flex min-w-0 items-center justify-end">
//                     {dateOnLeft ? (
//                       /* Date on the left */
//                       <div
//                         className={`w-full min-w-0 text-right transition-all duration-700 ease-out ${
//                           isActive
//                             ? "translate-x-0 opacity-100"
//                             : "pointer-events-none translate-x-8 opacity-0"
//                         }`}
//                       >
//                         {/* <TimelineDate
//                           date={item.date}
//                           isActive={isActive}
//                         /> */}
//                       </div>
//                     ) : (
//                       /* Description card on the left */
//                       <TimelineCard
//                         item={item}
//                         isActive={isActive}
//                         direction="left"
//                       />
//                     )}
//                   </div>

//                   {/* CENTER LADDER ICON */}
//                   <div className="relative z-10 flex items-center justify-center">
//                     <div
//                       className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[4px] transition-all duration-500 sm:h-[54px] sm:w-[54px] ${
//                         isActive
//                           ? "scale-110 border-white bg-[#178443] text-white shadow-[0_0_0_4px_rgba(23,132,67,0.15),0_6px_18px_rgba(23,132,67,0.20)]"
//                           : isPast
//                             ? "border-white bg-[#d9efdc] text-[#178443] shadow-[0_0_0_2px_#b7ddb9]"
//                             : "border-white bg-white text-[#178443] shadow-[0_0_0_2px_#d8ead9]"
//                       }`}
//                     >
//                       <Icon
//                         size={21}
//                         strokeWidth={2.2}
//                         className="transition-transform duration-500 sm:h-6 sm:w-6"
//                       />
//                     </div>
//                   </div>

//                   {/* RIGHT SIDE */}
//                   <div className="flex min-w-0 items-center justify-start">
//                     {dateOnLeft ? (
//                       /* Description card on the right */
//                       <TimelineCard
//                         item={item}
//                         isActive={isActive}
//                         direction="right"
//                       />
//                     ) : (
//                       /* Date on the right */
//                       <div
//                         className={`w-full min-w-0 text-left transition-all duration-700 ease-out ${
//                           isActive
//                             ? "translate-x-0 opacity-100"
//                             : "pointer-events-none -translate-x-8 opacity-0"
//                         }`}
//                       >
//                         {/* <TimelineDate
//                           date={item.date}
//                           isActive={isActive}
//                         /> */}
//                       </div>
//                     )}
//                   </div>

//                   {/* Step number near the ladder */}
//                   {/* <span
//                     aria-hidden="true"
//                     className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-[42px] text-[9px] font-black tracking-widest transition-colors duration-500 sm:-translate-y-[48px] sm:text-[10px] ${
//                       isActive ? "text-[#178443]" : "text-slate-400"
//                     }`}
//                   >
//                     {String(item.id).padStart(2, "0")}
//                   </span> */}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Closing message */}
//         {/* <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-[#d8ead9] bg-white/80 px-5 py-7 text-center shadow-sm sm:mt-12 sm:px-8 sm:py-9">
//           <p className="text-lg font-black text-[#123c26] sm:text-2xl">
//             Small Steps. Better Choices. Healthier You.
//           </p>
//           <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
//             Make your everyday nutrition journey simpler with EatProtein.
//           </p>
//         </div> */}
//       </div>
//     </section>
//   );
// }

// function TimelineDate({ date, isActive }) {
//   return (
//     <p
//       className={`break-words text-lg font-black leading-tight tracking-tight transition-colors duration-500 sm:text-2xl lg:text-4xl ${
//         isActive ? "text-black" : "text-[#103B27]"
//       }`}
//     >
//       {date}
//     </p>
//   );
// }

// function TimelineCard({ item, isActive, direction }) {
//   const slideFromLeft = direction === "left";

//   return (
//     <article
//       aria-hidden={!isActive}
//       className={`w-full min-w-0 rounded-xl border p-3 shadow-sm transition-all duration-700 ease-out sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6 ${
//         isActive
//           ? "translate-x-0 translate-y-0 border-[#e7eee7] bg-white opacity-100 shadow-[0_8px_24px_rgba(23,60,39,0.06)]"
//           : `pointer-events-none ${
//               slideFromLeft ? "translate-x-8" : "-translate-x-8"
//             } translate-y-2 border-transparent bg-white opacity-0`
//       }`}
//     >
//       <h3 className="text-xs font-extrabold leading-snug text-[#103B27] sm:text-base lg:text-xl">
//         {item.title}
//       </h3>

//       <p className="mt-2 text-[10px] leading-relaxed text-slate-600 sm:text-sm sm:leading-6 lg:mt-3 lg:text-base">
//         {item.description}
//       </p>
//     </article>
//   );
// }





import { useEffect, useRef, useState } from "react";

import AnimatedHeading from "./AnimatedHeading";
import { EATPROTEIN_JOURNEY } from "../data/eatProteinJourneyData";

export default function EatProteinJourney() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);

    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const progress =
    activeIndex < 0
      ? 0
      : ((activeIndex + 1) / EATPROTEIN_JOURNEY.length) * 100;

  return (
    <section
      ref={sectionRef}
      id="eatprotein-journey"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#f8f9f5] py-9 sm:py-12 md:py-14 lg:py-14"
    >
      {/* Soft background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-[#dff4df]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#eaf5c9]/40 blur-3xl"
      />

      {/* Common section container */}
      <div className="relative mx-auto w-full max-w-[1500px] px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12 2xl:px-14">

        {/* Heading */}
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">

          <span className="inline-flex items-center rounded-full border border-[#d5ead5] bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#178443] shadow-sm min-[375px]:px-4 min-[375px]:py-2 sm:text-sm sm:tracking-[0.18em]">
            The EatProtein Journey
          </span>

          <div className="mt-4 sm:mt-5">
            <AnimatedHeading className="text-[23px] font-black leading-tight tracking-tight text-[#103B27] min-[375px]:text-[22px] sm:text-3xl lg:text-4xl">
              Your Journey to Better Nutrition
            </AnimatedHeading>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-600 min-[375px]:text-sm sm:mt-5 sm:text-base sm:leading-8">
            From understanding your protein needs to discovering nutritious
            foods, take one simple step at a time with EatProtein.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-6 w-full max-w-5xl sm:mt-10">

          {/* Static ladder line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-1/2 top-6 w-[2px] -translate-x-1/2 bg-[#d8ead9]"
          />

          {/* Animated progress line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-6 w-[3px] -translate-x-1/2 rounded-full bg-[#178443] transition-[height] duration-700 ease-out"
            style={{
              height: `calc((100% - 3rem) * ${progress / 100})`,
            }}
          />

          <div className="relative">

            {EATPROTEIN_JOURNEY.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const isPast = activeIndex > index;

              const dateOnLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-index={index}
                  className="relative grid min-h-[155px] grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] items-center gap-1 py-4 min-[375px]:min-h-[165px] min-[375px]:grid-cols-[minmax(0,1fr)_46px_minmax(0,1fr)] sm:min-h-[190px] sm:grid-cols-[minmax(0,1fr)_60px_minmax(0,1fr)] sm:gap-2 sm:py-6 lg:min-h-[210px] lg:grid-cols-[minmax(0,1fr)_70px_minmax(0,1fr)]"
                >

                  {/* LEFT SIDE */}
                  <div className="flex min-w-0 items-center justify-end">

                    {dateOnLeft ? (
                      <div
                        className={`w-full min-w-0 text-right transition-all duration-700 ease-out ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "pointer-events-none translate-x-8 opacity-0"
                        }`}
                      >
                        {/* Timeline date can be enabled here */}
                      </div>
                    ) : (
                      <TimelineCard
                        item={item}
                        isActive={isActive}
                        direction="left"
                      />
                    )}

                  </div>

                  {/* CENTER LADDER ICON */}
                  <div className="relative z-10 flex items-center justify-center">

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] transition-all duration-500 min-[375px]:h-10 min-[375px]:w-10 sm:h-[50px] sm:w-[50px] sm:border-[4px] lg:h-[54px] lg:w-[54px] ${
                        isActive
                          ? "scale-110 border-white bg-[#178443] text-white shadow-[0_0_0_4px_rgba(23,132,67,0.15),0_6px_18px_rgba(23,132,67,0.20)]"
                          : isPast
                            ? "border-white bg-[#d9efdc] text-[#178443] shadow-[0_0_0_2px_#b7ddb9]"
                            : "border-white bg-white text-[#178443] shadow-[0_0_0_2px_#d8ead9]"
                      }`}
                    >

                      <Icon
                        size={17}
                        strokeWidth={2.2}
                        className="transition-transform duration-500 min-[375px]:h-[19px] min-[375px]:w-[19px] sm:h-6 sm:w-6"
                      />

                    </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex min-w-0 items-center justify-start">

                    {dateOnLeft ? (
                      <TimelineCard
                        item={item}
                        isActive={isActive}
                        direction="right"
                      />
                    ) : (
                      <div
                        className={`w-full min-w-0 text-left transition-all duration-700 ease-out ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "pointer-events-none -translate-x-8 opacity-0"
                        }`}
                      >
                        {/* Timeline date can be enabled here */}
                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineCard({ item, isActive, direction }) {
  const slideFromLeft = direction === "left";

  return (
    <article
      aria-hidden={!isActive}
      className={`w-full min-w-0 rounded-lg border p-2 shadow-sm transition-all duration-700 ease-out min-[375px]:rounded-xl min-[375px]:p-2.5 sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6 ${
        isActive
          ? "translate-x-0 translate-y-0 border-[#e7eee7] bg-white opacity-100 shadow-[0_8px_24px_rgba(23,60,39,0.06)]"
          : `pointer-events-none ${
              slideFromLeft ? "translate-x-8" : "-translate-x-8"
            } translate-y-2 border-transparent bg-white opacity-0`
      }`}
    >

      <h3 className="break-words text-[10px] font-extrabold leading-snug text-[#103B27] min-[375px]:text-[11px] sm:text-base lg:text-xl">
        {item.title}
      </h3>

      <p className="mt-1.5 break-words text-[9px] leading-relaxed text-slate-600 min-[375px]:text-[10px] sm:mt-2 sm:text-sm sm:leading-6 lg:mt-3 lg:text-base">
        {item.description}
      </p>

    </article>
  );
}
