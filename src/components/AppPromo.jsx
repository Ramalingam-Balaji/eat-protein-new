// import { Apple, ArrowRight, Play } from "lucide-react";
// import SectionTag from "./SectionTag";
// import AnimatedHeading from "./AnimatedHeading";

// export default function AppPromo() {
//   return (
//     <section id="app-promo" className="scroll-mt-20 bg-[#f0fae9] px-5">
//       <div className="mx-auto grid max-w-[1400px] items-center overflow-hidden rounded-2xl lg:grid-cols-[48%_52%]">
//         <div className="px-1 py-5 lg:px-4">
//           <SectionTag>EatProtein App</SectionTag>
//           <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
//   <AnimatedHeading as="span" className="block">
//     Your Nutrition Companion
//   </AnimatedHeading>

//   <AnimatedHeading
//     as="span"
//     className="block text-protein-green"
//   >
//     Anywhere, Anytime
//   </AnimatedHeading>
// </h2>
//           <p className="mt-3 max-w-[520px] text-sm leading-5 text-slate-600">
//             Explore food options, track your nutrition, get personalized
//             recommendations and more — all in the EatProtein app.
//           </p>
//           <div className="mt-5 flex flex-wrap gap-3">
//             {/* App Store */}
//             <a
//               href="https://apps.apple.com/in/app/eat-protein/id6636532383"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900"
//             >
//               <Apple size={24} fill="white" />

//               <span>
//                 <small className="block text-[8px]">Download on the</small>

//                 <b className="text-sm">App Store</b>
//               </span>
//             </a>

//             {/* Google Play */}
//             <a
//               href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900"
//             >
//               <Play size={22} fill="white" />

//               <span>
//                 <small className="block text-[8px]">GET IT ON</small>

//                 <b className="text-sm">Google Play</b>
//               </span>
//             </a>
//           </div>
//         </div>
        
// <div className="relative mx-auto flex h-[300px] w-full items-end justify-center overflow-hidden sm:h-[380px] md:h-[430px] lg:h-[500px] xl:h-[540px]">
//   <img
//     src="/assets/mascut.webp"
//     alt="EatProtein mascot showcasing the mobile app"
//     loading="lazy"
//     className="
//       absolute
//       bottom-0
//       left-1/2
//       h-full
//       w-full
//       -translate-x-1/2
//       object-contain
//       object-bottom
//       animate-float
//       sm:w-[95%]
//       md:w-[90%]
//       lg:w-full
//       xl:w-[95%]
//     "
//   />
// </div>

//       </div>
//     </section>
//   );
// }



import { Apple, Play } from "lucide-react";
import SectionTag from "./SectionTag";
import AnimatedHeading from "./AnimatedHeading";

export default function AppPromo() {
  return (
    <section
      id="app-promo"
      className="w-full scroll-mt-20 overflow-hidden bg-[#f0fae9] py-6 sm:py-8 md:py-10 lg:py-12"
    >
      {/* Common section container */}
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center overflow-hidden px-3 sm:px-5 md:px-8 lg:grid-cols-[48%_52%] lg:px-10 xl:px-12 2xl:px-14">

        {/* LEFT CONTENT */}
        <div className="min-w-0 px-1 py-4 sm:px-2 sm:py-5 lg:px-4 lg:py-8">

          <SectionTag>EatProtein App</SectionTag>

          {/* Heading */}
          <h2 className="mt-3 text-[25px] font-extrabold leading-tight tracking-tight text-slate-900 min-[375px]:text-2xl sm:text-3xl lg:text-4xl xl:text-[42px]">

            <AnimatedHeading as="span" className="block">
              Your Nutrition Companion
            </AnimatedHeading>

            <AnimatedHeading
              as="span"
              className="block text-protein-green"
            >
              Anywhere, Anytime
            </AnimatedHeading>

          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[520px] text-xs leading-5 text-slate-600 min-[375px]:text-sm sm:leading-6">
            Explore food options, track your nutrition, get personalized
            recommendations and more — all in the EatProtein app.
          </p>

          {/* App Download Buttons */}
          <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">

            {/* App Store */}
            <a
              href="https://apps.apple.com/in/app/eat-protein/id6636532383"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download EatProtein on the App Store"
              className="flex min-h-[46px] items-center gap-2 rounded-lg bg-black px-3 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900 min-[375px]:px-4 sm:min-h-[50px]"
            >
              <Apple
                size={22}
                fill="white"
                className="shrink-0 sm:h-6 sm:w-6"
              />

              <span className="min-w-0">
                <small className="block text-[8px]">
                  Download on the
                </small>

                <b className="whitespace-nowrap text-xs sm:text-sm">
                  App Store
                </b>
              </span>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get EatProtein on Google Play"
              className="flex min-h-[46px] items-center gap-2 rounded-lg bg-black px-3 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900 min-[375px]:px-4 sm:min-h-[50px]"
            >
              <Play
                size={21}
                fill="white"
                className="shrink-0 sm:h-[22px] sm:w-[22px]"
              />

              <span className="min-w-0">
                <small className="block text-[8px]">
                  GET IT ON
                </small>

                <b className="whitespace-nowrap text-xs sm:text-sm">
                  Google Play
                </b>
              </span>
            </a>

          </div>
        </div>

        {/* RIGHT MASCOT IMAGE */}
        <div className="relative mx-auto flex h-[240px] w-full max-w-[440px] items-end justify-center overflow-hidden min-[375px]:h-[280px] sm:h-[350px] md:h-[420px] lg:h-[440px] lg:max-w-none xl:h-[500px] 2xl:h-[540px]">

          <img
            src="/assets/mascut.webp"
            alt="EatProtein mascot showcasing the mobile app"
            loading="lazy"
            className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 animate-float object-contain object-bottom sm:w-[95%] md:w-[90%] lg:w-full xl:w-[95%]"
          />

        </div>

      </div>
    </section>
  );
}
