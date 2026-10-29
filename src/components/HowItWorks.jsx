// import {
//   Search,
//   ClipboardCheck,
//   Calculator,
//   ShoppingCart,
//   ArrowRight,
//   ShieldCheck,
//   Heart,
//   UsersRound,
//   MapPin,
// } from "lucide-react";

// import AnimatedHeading from "./AnimatedHeading";

// const STEPS = [
//   {
//     icon: Search,
//     title: "Explore Foods",
//     text: "Browse high-protein\nfoods from local stores.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Check Nutrition",
//     text: "View protein content\nand nutrition score.",
//   },
//   {
//     icon: Calculator,
//     title: "Calculate Your Need",
//     text: "Know your BMI &\ndaily protein requirement.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "Order from Nearby Stores",
//     text: "Get healthy foods from\ntrusted local stores.",
//   },
// ];

// const FEATURES = [
//   {
//     icon: ShieldCheck,
//     title: "Verified Nutrition Information",
//     text: "Make informed choices\nwith nutrition intelligence.",
//     iconColor: "text-green-700",
//     iconBg: "bg-green-50",
//   },
//   {
//     icon: Heart,
//     title: "Wide Food Choices",
//     text: "From everyday foods to\nspecial diets.",
//     iconColor: "text-orange-600",
//     iconBg: "bg-orange-50",
//   },
//   {
//     icon: UsersRound,
//     title: "Supports Your Goals",
//     text: "Weight management,\nfitness, immunity and more.",
//     iconColor: "text-blue-600",
//     iconBg: "bg-blue-50",
//   },
//   {
//     icon: MapPin,
//     title: "Local Store Network",
//     text: "Access foods from\nyour nearby stores.",
//     iconColor: "text-orange-600",
//     iconBg: "bg-orange-50",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section
//       id="how-it-works"
//       className="scroll-mt-20 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
//     >
//       <div className="mx-auto max-w-[1400px]">

//         {/* HOW EATPROTEIN WORKS */}
//         <div>
//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//   <AnimatedHeading as="span" className="inline">
//     How EatProtein
//   </AnimatedHeading>{" "}
//   <AnimatedHeading
//     as="span"
//     className="inline text-protein-green"
//   >
//     Works
//   </AnimatedHeading>
// </h2>

//           <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
//             From discovery to delivery — a simple journey to better nutrition.
//           </p>

//           {/* Four-step process */}
//           <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0">
//             {STEPS.map(({ icon: Icon, title, text }, index) => (
//               <div
//                 key={title}
//                 className="relative flex min-w-0 items-center gap-3"
//               >
//                 {/* Icon */}
//                 <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-green-100 bg-green-50 sm:h-12 sm:w-12">
//                   <Icon
//                     size={22}
//                     strokeWidth={2}
//                     className="text-protein-green"
//                   />
//                 </div>

//                 {/* Step content */}
//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-xs font-extrabold leading-snug text-protein-dark sm:text-sm">
//                     {index + 1}. {title}
//                   </h3>

//                   <p className="mt-1 whitespace-pre-line text-[11px] leading-[1.5] text-slate-500 sm:text-xs">
//                     {text}
//                   </p>
//                 </div>

//                 {/* Connecting arrow */}
//                 {index < STEPS.length - 1 && (
//                   <ArrowRight
//                     size={16}
//                     strokeWidth={1.8}
//                     className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-slate-700 lg:block"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* WHY CHOOSE EATPROTEIN */}
//         <div className="mt-7 sm:mt-8">
//           <AnimatedHeading
//   className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
// >
//   Why Choose EatProtein
// </AnimatedHeading>

//           {/* Feature cards */}
//           <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//             {FEATURES.map(
//               (
//                 {
//                   icon: Icon,
//                   title,
//                   text,
//                   iconColor,
//                   iconBg,
//                 },
//                 index
//               ) => (
//                 <article
//                   key={title}
//                   className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-100 hover:shadow-md sm:px-4 sm:py-4"
//                 >
//                   {/* Feature icon */}
//                   <div
//                     className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${iconBg} sm:h-11 sm:w-11`}
//                   >
//                     <Icon
//                       size={21}
//                       strokeWidth={2}
//                       className={iconColor}
//                     />
//                   </div>

//                   {/* Feature details */}
//                   <div className="min-w-0">
//                     <h3 className="text-xs font-extrabold leading-snug text-protein-dark sm:text-sm">
//                       {FEATURES[index].title}
//                     </h3>

//                     <p className="mt-1 whitespace-pre-line text-[11px] leading-[1.5] text-slate-500 sm:text-xs">
//                       {text}
//                     </p>
//                   </div>
//                 </article>
//               )
//             )}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




// import {
//   Search,
//   ClipboardCheck,
//   Calculator,
//   ShoppingCart,
//   ArrowRight,
//   ShieldCheck,
//   Heart,
//   UsersRound,
//   MapPin,
//   CheckCircle2,
// } from "lucide-react";

// import AnimatedHeading from "./AnimatedHeading";
// import mascotImage from "../assets/mascut.webp";

// const STEPS = [
//   {
//     icon: Search,
//     title: "Explore Foods",
//     text: "Browse high-protein\nfoods from local stores.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Check Nutrition",
//     text: "View protein content\nand nutrition score.",
//   },
//   {
//     icon: Calculator,
//     title: "Calculate Your Need",
//     text: "Know your BMI &\ndaily protein requirement.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "Order from Nearby Stores",
//     text: "Get healthy foods from\ntrusted local stores.",
//   },
// ];

// const FEATURES = [
//   {
//     icon: ShieldCheck,
//     title: "Verified Nutrition Information",
//     text: "Make informed choices\nwith nutrition intelligence.",
//     iconColor: "text-green-700",
//     iconBg: "bg-green-50",
//   },
//   {
//     icon: Heart,
//     title: "Wide Food Choices",
//     text: "From everyday foods to\nspecial diets.",
//     iconColor: "text-orange-600",
//     iconBg: "bg-orange-50",
//   },
//   {
//     icon: UsersRound,
//     title: "Supports Your Goals",
//     text: "Weight management,\nfitness, immunity and more.",
//     iconColor: "text-blue-600",
//     iconBg: "bg-blue-50",
//   },
//   {
//     icon: MapPin,
//     title: "Local Store Network",
//     text: "Access foods from\nyour nearby stores.",
//     iconColor: "text-orange-600",
//     iconBg: "bg-orange-50",
//   },
// ];

// const BENEFITS = [
//   "Discover high-protein foods",
//   "Understand nutrition information",
//   "Calculate your daily protein needs",
//   "Find trusted nearby food stores",
// ];

// export default function HowItWorks() {
//   return (
//     <section
//       id="how-it-works"
//       className="scroll-mt-24 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
//     >
//       <div className="mx-auto max-w-[1440px]">
//         {/* MAIN PROMOTIONAL BANNER */}
//         <div className="relative overflow-hidden rounded-[24px] bg-[#E7F4E5] px-5 py-8 sm:rounded-[30px] sm:px-8 sm:py-10 lg:rounded-[36px] lg:px-12 lg:py-12 xl:px-14 xl:py-14">
//           <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
//             {/* LEFT CONTENT */}
//             <div className="relative z-10 min-w-0">
//               <p className="mb-1 text-base font-bold text-protein-dark sm:text-lg">
//                 Your Journey to
//               </p>

//               <h2 className="max-w-3xl text-[34px] font-black leading-[1.05] tracking-tight text-protein-dark sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
//                 Better Nutrition,
//                 <span className="block text-protein-green">
//                   Made Simple
//                 </span>
//               </h2>

//               <p className="mt-3 max-w-xl text-sm leading-6 text-slate-700 sm:text-base lg:text-lg">
//                 Discover nutritious foods, understand your protein needs,
//                 and make healthier choices every day with EatProtein.
//               </p>

//               {/* BENEFITS */}
//               <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2 sm:gap-y-4 lg:mt-8 lg:gap-x-8">
//                 {BENEFITS.map((benefit) => (
//                   <div
//                     key={benefit}
//                     className="flex min-w-0 items-start gap-3"
//                   >
//                     <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green-600 text-white sm:h-8 sm:w-8">
//                       <CheckCircle2
//                         size={18}
//                         strokeWidth={2.5}
//                       />
//                     </span>

//                     <p className="pt-0.5 text-sm font-medium leading-6 text-slate-700 sm:text-base">
//                       {benefit}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT-SIDE ILLUSTRATION */}
//             <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center md:max-w-none">
//               <div className="absolute h-48 w-48 rounded-full bg-white/50 blur-3xl sm:h-64 sm:w-64 lg:h-80 lg:w-80" />

//               <img
//                 src={mascotImage}
//                 alt="EatProtein mascot showing nutrition information on a mobile app"
//                 loading="lazy"
//                 className="relative z-10 h-auto max-h-[360px] w-full object-contain sm:max-h-[420px] md:max-h-[360px] lg:max-h-[450px] xl:max-h-[490px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* HOW EATPROTEIN WORKS */}
//         <div className="mt-10 sm:mt-12 lg:mt-16">
//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             <AnimatedHeading as="span" className="inline">
//               How EatProtein
//             </AnimatedHeading>{" "}
//             <AnimatedHeading
//               as="span"
//               className="inline text-protein-green"
//             >
//               Works
//             </AnimatedHeading>
//           </h2>

//           <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
//             From discovery to delivery — a simple journey to better nutrition.
//           </p>

//           {/* FOUR STEPS */}
//           <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
//             {STEPS.map(({ icon: Icon, title, text }, index) => (
//               <div
//                 key={title}
//                 className="relative flex min-w-0 items-center gap-3 rounded-2xl border border-green-100 bg-[#F8FCF7] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md sm:p-4 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
//               >
//                 <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-green-100 bg-green-50 sm:h-14 sm:w-14">
//                   <Icon
//                     size={23}
//                     strokeWidth={2}
//                     className="text-protein-green"
//                   />
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-sm font-extrabold leading-snug text-protein-dark sm:text-base">
//                     {index + 1}. {title}
//                   </h3>

//                   <p className="mt-1 whitespace-pre-line text-xs leading-relaxed text-slate-500 sm:text-sm">
//                     {text}
//                   </p>
//                 </div>

//                 {index < STEPS.length - 1 && (
//                   <ArrowRight
//                     size={18}
//                     strokeWidth={1.8}
//                     className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-slate-500 lg:block"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* WHY CHOOSE EATPROTEIN */}
//         <div className="mt-10 sm:mt-12 lg:mt-14">
//           <AnimatedHeading
//             className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
//           >
//             Why Choose EatProtein
//           </AnimatedHeading>

//           {/* FEATURE CARDS */}
//           <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
//             {FEATURES.map(
//               ({ icon: Icon, title, text, iconColor, iconBg }) => (
//                 <article
//                   key={title}
//                   className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-md sm:px-5 sm:py-5"
//                 >
//                   <div
//                     className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${iconBg} sm:h-14 sm:w-14`}
//                   >
//                     <Icon
//                       size={23}
//                       strokeWidth={2}
//                       className={iconColor}
//                     />
//                   </div>

//                   <div className="min-w-0">
//                     <h3 className="text-sm font-extrabold leading-snug text-protein-dark sm:text-base">
//                       {title}
//                     </h3>

//                     <p className="mt-1 whitespace-pre-line text-xs leading-relaxed text-slate-500 sm:text-sm">
//                       {text}
//                     </p>
//                   </div>
//                 </article>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  Search,
  ClipboardCheck,
  Calculator,
  ShoppingCart,
  ShieldCheck,
  Heart,
  UsersRound,
  MapPin,
  Check,
} from "lucide-react";

import AnimatedHeading from "./AnimatedHeading";
import mascotImage from "../assets/mascut.webp";

const BENEFITS = [
  "Explore Foods",
  "Check Nutrition",
  "Calculate Your Need",
  "Order from Nearby Stores",
  "Verified Nutrition Information",
  "Wide Food Choices",
  "Supports Your Goals",
  "Local Store Network",
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* PROMOTIONAL BANNER */}
        <div className="overflow-hidden rounded-[24px] bg-[#E7F4E5] px-5 py-7 sm:rounded-[30px] sm:px-8 sm:py-9 lg:rounded-[36px] lg:px-12 lg:py-12 xl:px-14 xl:py-14">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.25fr_0.75fr] md:gap-3 lg:grid-cols-[1.3fr_0.7fr] lg:gap-6">
            {/* LEFT CONTENT */}
            <div className="relative z-10 min-w-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            <AnimatedHeading as="span" className="inline">
              How EatProtein
            </AnimatedHeading>{" "}
            <AnimatedHeading
              as="span"
              className="inline text-protein-green"
            >
              Works
            </AnimatedHeading>
          </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg">
                From discovery to delivery — a simple journey to better
                nutrition.
              </p>

              {/* ALL 8 BENEFITS */}
              <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 lg:mt-8 lg:gap-x-8 lg:gap-y-5">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex min-w-0 items-center gap-3"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green-600 text-white sm:h-8 sm:w-8">
                      <Check size={18} strokeWidth={2.5} />
                    </span>

                    <p className="text-sm font-medium leading-snug text-slate-700 sm:text-base lg:text-[17px]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT-SIDE MASCOT IMAGE */}
            <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center md:max-w-none">
              <div className="absolute h-48 w-48 rounded-full bg-white/50 blur-3xl sm:h-60 sm:w-60 lg:h-72 lg:w-72" />

              <img
                src={mascotImage}
                alt="EatProtein mascot holding a nutrition app"
                loading="lazy"
                className="relative z-10 h-auto max-h-[320px] w-full object-contain sm:max-h-[380px] md:max-h-[340px] lg:max-h-[430px] xl:max-h-[490px]"
              />
            </div>
          </div>
        </div>

        {/* ORIGINAL HOW IT WORKS CONTENT */}
        {/* <div className="mt-10 sm:mt-12 lg:mt-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <AnimatedHeading as="span" className="inline">
              How EatProtein
            </AnimatedHeading>{" "}
            <AnimatedHeading
              as="span"
              className="inline text-protein-green"
            >
              Works
            </AnimatedHeading>
          </h2>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            From discovery to delivery — a simple journey to better nutrition.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                icon: Search,
                title: "Explore Foods",
                text: "Browse high-protein foods from local stores.",
              },
              {
                icon: ClipboardCheck,
                title: "Check Nutrition",
                text: "View protein content and nutrition score.",
              },
              {
                icon: Calculator,
                title: "Calculate Your Need",
                text: "Know your BMI and daily protein requirement.",
              },
              {
                icon: ShoppingCart,
                title: "Order from Nearby Stores",
                text: "Get healthy foods from trusted local stores.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-green-100 bg-[#F8FCF7] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-green-100 bg-green-50 sm:h-14 sm:w-14">
                  <Icon size={23} className="text-protein-green" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-protein-dark sm:text-base">
                    {index + 1}. {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div> */}

        {/* WHY CHOOSE EATPROTEIN */}
        {/* <div className="mt-10 sm:mt-12 lg:mt-14">
          <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Choose EatProtein
          </AnimatedHeading>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Nutrition Information",
                text: "Make informed choices with nutrition intelligence.",
                color: "text-green-700",
                bg: "bg-green-50",
              },
              {
                icon: Heart,
                title: "Wide Food Choices",
                text: "From everyday foods to special diets.",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                icon: UsersRound,
                title: "Supports Your Goals",
                text: "Weight management, fitness, immunity and more.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: MapPin,
                title: "Local Store Network",
                text: "Access foods from your nearby stores.",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
            ].map(({ icon: Icon, title, text, color, bg }) => (
              <article
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-md sm:px-5 sm:py-5"
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${bg} sm:h-14 sm:w-14`}
                >
                  <Icon size={23} className={color} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-protein-dark sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
