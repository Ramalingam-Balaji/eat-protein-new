
import { useEffect, useRef, useState } from "react";

import {
  UserRound,
  Utensils,
  HeartPulse,
  Calculator,
  Leaf,
  LayoutGrid,
  ArrowUpRight,
  ChevronRight,
  Check,
} from "lucide-react";

import { APP_GUIDANCE_CARDS } from "../data/appGuidanceData";
import AnimatedHeading from "./AnimatedHeading";

const ICONS = {
  "user-round": UserRound,
  utensils: Utensils,
  "heart-pulse": HeartPulse,
  calculator: Calculator,
  leaf: Leaf,
  "layout-grid": LayoutGrid,
};

const FOOD_ITEMS = [
  { name: "Eggs", color: "bg-amber-100" },
  { name: "Lentils", color: "bg-orange-100" },
  { name: "Milk", color: "bg-sky-100" },
  { name: "Nuts", color: "bg-lime-100" },
];

const CATEGORIES = [
  { name: "Veg", color: "bg-green-100" },
  { name: "Dairy", color: "bg-sky-100" },
  { name: "Eggs", color: "bg-amber-100" },
  { name: "Fruits", color: "bg-rose-100" },
  { name: "Nuts", color: "bg-orange-100" },
  { name: "Grains", color: "bg-yellow-100" },
];

function PhonePreview({ type }) {
  const miniCard =
    "rounded-lg border border-green-100 bg-white p-2 shadow-sm";

  const headings = {
    portion: "Your daily portions",
    food: "Explore protein foods",
    health: "Health overview",
    calculator: "Protein calculator",
    combination: "Balanced meals",
    grid: "Food categories",
  };

  return (
    <div className="relative mx-auto w-[142px] rounded-[25px] border-[5px] border-slate-800 bg-white p-1.5 shadow-xl sm:w-[158px]">
      {/* Phone speaker */}
      <div className="absolute left-1/2 top-0 z-10 h-3 w-12 -translate-x-1/2 rounded-b-xl bg-slate-800" />

      {/* Phone screen */}
      <div className="overflow-hidden rounded-[17px] bg-[#f7fbf4]">
        <div className="flex items-center justify-between bg-[#087c42] px-2 py-3 text-white">
          <div>
            <p className="text-[7px] text-green-100">Welcome to</p>
            <p className="text-[10px] font-extrabold">EatProtein</p>
          </div>

          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <Leaf size={12} />
          </div>
        </div>

        <div className="space-y-2 p-2">
          <div>
            <p className="text-[9px] font-bold text-slate-800">
              {headings[type]}
            </p>
            <p className="mt-0.5 text-[6px] text-slate-500">
              Your nutrition, simplified
            </p>
          </div>

          {type === "portion" && (
            <>
              <div className={`${miniCard} flex items-center gap-2`}>
                <div className="rounded-md bg-green-100 p-1.5 text-green-700">
                  <Utensils size={14} />
                </div>
                <div className="flex-1">
                  <div className="h-1.5 w-12 rounded bg-slate-200" />
                  <div className="mt-1 h-1 w-8 rounded bg-slate-100" />
                </div>
              </div>

              {["Protein", "Carbohydrates", "Vegetables"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-md bg-white p-2"
                  >
                    <span className="text-[7px] text-slate-600">
                      {item}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full ${
                        [
                          "bg-green-500",
                          "bg-amber-400",
                          "bg-lime-500",
                        ][index]
                      }`}
                    />
                  </div>
                )
              )}
            </>
          )}

          {type === "food" && (
            <div className="grid grid-cols-2 gap-1.5">
              {FOOD_ITEMS.map((item) => (
                <div key={item.name} className={miniCard}>
                  <div
                    className={`mb-1 flex h-9 items-center justify-center rounded-md ${item.color}`}
                  >
                    <Utensils
                      size={16}
                      className="text-green-800"
                    />
                  </div>
                  <p className="text-center text-[7px] font-semibold text-slate-700">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          )}

          {type === "health" && (
            <>
              <div className="rounded-lg bg-green-100 p-3">
                <HeartPulse
                  size={20}
                  className="text-green-700"
                />
                <p className="mt-2 text-[8px] font-bold text-green-900">
                  Daily wellness
                </p>
                <p className="mt-1 text-[7px] text-green-800">
                  Your goals, your pace
                </p>
              </div>

              {["Nutrition", "Activity", "Hydration"].map((item) => (
                <div
                  key={item}
                  className={`${miniCard} flex items-center gap-2`}
                >
                  <Check size={10} className="text-green-600" />
                  <span className="text-[7px] text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </>
          )}

          {type === "calculator" && (
            <div className={`${miniCard} space-y-2`}>
              {["Age", "Height", "Weight"].map((item) => (
                <div key={item}>
                  <p className="mb-1 text-[7px] text-slate-500">
                    {item}
                  </p>
                  <div className="h-5 rounded border border-slate-200 bg-slate-50" />
                </div>
              ))}

              <div className="rounded-md bg-green-700 py-1.5 text-center text-[7px] font-bold text-white">
                Calculate
              </div>
            </div>
          )}

          {type === "combination" && (
            <>
              <div className={`${miniCard} space-y-2`}>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                    <Utensils
                      size={14}
                      className="text-amber-700"
                    />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold text-slate-700">
                      Balanced meal
                    </p>
                    <p className="text-[6px] text-slate-500">
                      Food pairing ideas
                    </p>
                  </div>
                </div>

                <div className="h-1.5 rounded-full bg-green-100">
                  <div className="h-1.5 w-3/4 rounded-full bg-green-600" />
                </div>
              </div>

              <div className={`${miniCard} flex items-center gap-2`}>
                <Leaf size={14} className="text-green-700" />
                <p className="text-[7px] text-slate-600">
                  Nutrition insights
                </p>
              </div>
            </>
          )}

          {type === "grid" && (
            <div className="grid grid-cols-2 gap-1.5">
              {CATEGORIES.map((item) => (
                <div key={item.name} className={miniCard}>
                  <div
                    className={`mb-1 flex h-7 items-center justify-center rounded ${item.color}`}
                  >
                    <Leaf
                      size={13}
                      className="text-green-800"
                    />
                  </div>

                  <p className="text-center text-[7px] font-semibold text-slate-700">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between rounded-lg bg-green-700 px-2 py-2 text-white">
            <span className="text-[7px] font-semibold">
              Explore EatProtein
            </span>
            <ChevronRight size={11} />
          </div>
        </div>

        {/* Phone navigation */}
        <div className="flex justify-around border-t border-green-100 bg-white py-2">
          <div className="h-1 w-5 rounded-full bg-green-600" />
          <div className="h-1 w-5 rounded-full bg-slate-200" />
          <div className="h-1 w-5 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}


function GuidanceCard({ card }) {
  return (
    <article className="group w-[270px] shrink-0 overflow-hidden rounded-2xl border border-green-100 bg-white p-4 shadow-[0_8px_30px_rgba(21,75,43,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_38px_rgba(21,75,43,0.12)] sm:w-[310px] sm:rounded-3xl sm:p-5 lg:w-[430px]">
      <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
        {card.title}
      </h3>

      <p className="mt-2 min-h-[60px] text-sm leading-5 text-slate-500">
        {card.description}
      </p>

      {/* Card image */}
      
<div className="mt-5 flex h-[245px] items-center justify-center overflow-hidden rounded-2xl bg-[#eff9e9] sm:h-[325px]">
  <img
    src={card.image}
    alt={card.title}
    loading="lazy"
    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
  />
</div>

    </article>
  );
}


export default function AppGuidance() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [translateDistance, setTranslateDistance] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    let frameId = null;

    const updateTrackWidth = () => {
      const trackWidth = track.scrollWidth;

      setTranslateDistance(
        Math.max(0, trackWidth - window.innerWidth)
      );
    };

    const updateProgress = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;

        const rect = section.getBoundingClientRect();
        const scrollableDistance =
          section.offsetHeight - window.innerHeight;

        if (scrollableDistance <= 0) {
          setProgress(0);
          return;
        }

        const nextProgress = Math.min(
          1,
          Math.max(0, -rect.top / scrollableDistance)
        );

        setProgress(nextProgress);
      });
    };

    updateTrackWidth();
    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateTrackWidth);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateTrackWidth);
      window.removeEventListener("resize", updateProgress);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      id="app-guidance"
      ref={sectionRef}
      className="relative bg-[#f7faf4]"
      style={{ height: "240vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-6 sm:py-10">
        {/* Heading */}
        <div className="mx-auto mb-7 w-full max-w-7xl px-5 text-center sm:mb-10 sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-green-800 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            OUR EAT-PROTEIN APP GUIDE
          </span> 

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
  <AnimatedHeading as="span" className="inline">
    Personalised for
  </AnimatedHeading>{" "}
  <AnimatedHeading as="span" className="inline text-[#078442]">
    You
  </AnimatedHeading>
</h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Discover the tools that make healthier food choices
            simpler, smarter, and more personal.
          </p>
        </div>

        {/* Moving card track */}
        <div className="w-full">
          <div
            ref={trackRef}
            className="flex w-max gap-4 px-5 sm:gap-3 sm:px-8"
            style={{
              transform: `translate3d(-${
                progress * translateDistance
              }px, 0, 0)`,
              willChange: "transform",
            }}
          >
            {APP_GUIDANCE_CARDS.map((card) => (
              <GuidanceCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Scroll progress */}
        {/* <div className="mx-auto mt-7 flex w-full max-w-xs items-center gap-3 px-5 sm:mt-9">
          <span className="whitespace-nowrap text-[10px] font-semibold tracking-wide text-slate-500">
            SCROLL TO EXPLORE
          </span>

          <div className="h-1 flex-1 overflow-hidden rounded-full bg-green-100">
            <div
              className="h-full rounded-full bg-green-700"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <span className="text-[10px] font-bold tabular-nums text-green-800">
            {Math.round(progress * 100)}%
          </span>
        </div> */}
      </div>
    </section>
  );
}
