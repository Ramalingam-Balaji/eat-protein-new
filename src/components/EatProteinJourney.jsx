
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

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
        // Activate a step when it reaches the middle of the viewport.
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
      className="relative overflow-hidden bg-[#f8f9f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-15"
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

      <div className="relative mx-auto max-w-6xl">
        {/* Heading: reuse the existing heading animation */}
        <div className="mx-auto mb-5 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#d5ead5] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#178443] shadow-sm sm:text-sm">
            The EatProtein Journey
          </span>

          <div className="mt-5">
            <AnimatedHeading className="text-2xl font-black tracking-tight text-[#103B27] sm:text-3xl lg:text-4xl">
              Your Journey to Better Nutrition
            </AnimatedHeading>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            From understanding your protein needs to discovering nutritious
            foods, take one simple step at a time with EatProtein.
          </p>

          {/* <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-[#178443] sm:text-sm">
            <ArrowDown size={16} className="animate-bounce" />
            SCROLL TO EXPLORE
          </div> */}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-8 max-w-5xl sm:mt-10">
          {/* Static ladder line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 top-8 w-[2px] -translate-x-1/2 bg-[#d8ead9]"
          />

          {/* Animated progress line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-8 w-[3px] -translate-x-1/2 rounded-full bg-[#178443] transition-[height] duration-700 ease-out"
            style={{
              height: `calc((100% - 4rem) * ${progress / 100})`,
            }}
          />

          <div className="relative">
            {EATPROTEIN_JOURNEY.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const isPast = activeIndex > index;

              // Automatically alternate the date and description sides.
              const dateOnLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-index={index}
                  className="relative grid min-h-[175px] grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] items-center gap-1 py-5 sm:min-h-[200px] sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] sm:gap-2 sm:py-6"
                >
                  {/* LEFT SIDE */}
                  <div className="flex min-w-0 items-center justify-end">
                    {dateOnLeft ? (
                      /* Date on the left */
                      <div
                        className={`w-full min-w-0 text-right transition-all duration-700 ease-out ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "pointer-events-none translate-x-8 opacity-0"
                        }`}
                      >
                        {/* <TimelineDate
                          date={item.date}
                          isActive={isActive}
                        /> */}
                      </div>
                    ) : (
                      /* Description card on the left */
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
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[4px] transition-all duration-500 sm:h-[54px] sm:w-[54px] ${
                        isActive
                          ? "scale-110 border-white bg-[#178443] text-white shadow-[0_0_0_4px_rgba(23,132,67,0.15),0_6px_18px_rgba(23,132,67,0.20)]"
                          : isPast
                            ? "border-white bg-[#d9efdc] text-[#178443] shadow-[0_0_0_2px_#b7ddb9]"
                            : "border-white bg-white text-[#178443] shadow-[0_0_0_2px_#d8ead9]"
                      }`}
                    >
                      <Icon
                        size={21}
                        strokeWidth={2.2}
                        className="transition-transform duration-500 sm:h-6 sm:w-6"
                      />
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex min-w-0 items-center justify-start">
                    {dateOnLeft ? (
                      /* Description card on the right */
                      <TimelineCard
                        item={item}
                        isActive={isActive}
                        direction="right"
                      />
                    ) : (
                      /* Date on the right */
                      <div
                        className={`w-full min-w-0 text-left transition-all duration-700 ease-out ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "pointer-events-none -translate-x-8 opacity-0"
                        }`}
                      >
                        {/* <TimelineDate
                          date={item.date}
                          isActive={isActive}
                        /> */}
                      </div>
                    )}
                  </div>

                  {/* Step number near the ladder */}
                  {/* <span
                    aria-hidden="true"
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-[42px] text-[9px] font-black tracking-widest transition-colors duration-500 sm:-translate-y-[48px] sm:text-[10px] ${
                      isActive ? "text-[#178443]" : "text-slate-400"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span> */}
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        {/* <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-[#d8ead9] bg-white/80 px-5 py-7 text-center shadow-sm sm:mt-12 sm:px-8 sm:py-9">
          <p className="text-lg font-black text-[#123c26] sm:text-2xl">
            Small Steps. Better Choices. Healthier You.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Make your everyday nutrition journey simpler with EatProtein.
          </p>
        </div> */}
      </div>
    </section>
  );
}

function TimelineDate({ date, isActive }) {
  return (
    <p
      className={`break-words text-lg font-black leading-tight tracking-tight transition-colors duration-500 sm:text-2xl lg:text-4xl ${
        isActive ? "text-black" : "text-[#103B27]"
      }`}
    >
      {date}
    </p>
  );
}

function TimelineCard({ item, isActive, direction }) {
  const slideFromLeft = direction === "left";

  return (
    <article
      aria-hidden={!isActive}
      className={`w-full min-w-0 rounded-xl border p-3 shadow-sm transition-all duration-700 ease-out sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6 ${
        isActive
          ? "translate-x-0 translate-y-0 border-[#e7eee7] bg-white opacity-100 shadow-[0_8px_24px_rgba(23,60,39,0.06)]"
          : `pointer-events-none ${
              slideFromLeft ? "translate-x-8" : "-translate-x-8"
            } translate-y-2 border-transparent bg-white opacity-0`
      }`}
    >
      <h3 className="text-xs font-extrabold leading-snug text-[#103B27] sm:text-base lg:text-xl">
        {item.title}
      </h3>

      <p className="mt-2 text-[10px] leading-relaxed text-slate-600 sm:text-sm sm:leading-6 lg:mt-3 lg:text-base">
        {item.description}
      </p>
    </article>
  );
}
