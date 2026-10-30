// import {
//   ArrowRight,
//   BarChart3,
//   Headphones,
//   MapPin,
//   Store,
//   WalletCards,
// } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// import { FRANCHISE_FEATURES } from "../data/homeData";
// import SectionTag from "./SectionTag";
// import AnimatedHeading from "./AnimatedHeading";

// const icons = {
//   map: MapPin,
//   store: Store,
//   support: Headphones,
//   chart: BarChart3,
//   income: WalletCards,
// };

// export default function FranchiseSection() {
//   const navigate = useNavigate();

//   return (
//     <section id="franchise" className="scroll-mt-20 bg-[#fffaf2] px-10 py-9">
//       <div className="mx-auto grid max-w-[1450px] items-center gap-6 lg:grid-cols-[48%_52%]">
//         {/* Left side: Franchise details */}
//         <div>
//           <SectionTag orange>Business Opportunity</SectionTag>

//     <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
//   <AnimatedHeading as="span" className="block">
//     EatProtein
//   </AnimatedHeading>

//   <AnimatedHeading
//     as="span"
//     className="block text-protein-green"
//   >
//     Franchise Opportunity
//   </AnimatedHeading>
// </h2>

//           <p className="mt-3 max-w-[500px] text-sm leading-6 text-slate-700">
//             Be a part of a growing movement towards healthier communities. Get
//             exclusive area rights, support and earn with every order placed from
//             stores in your area.
//           </p>

//           {/* Franchise features */}
//           <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
//             {FRANCHISE_FEATURES.map((item) => {
//               const Icon = icons[item.icon];

//               if (!Icon) return null;

//               return (
//                 <div key={item.title} className="text-center">
//                   <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-green-200 bg-white text-protein-green shadow-sm">
//                     <Icon size={17} />
//                   </div>

//                   <p className="mt-2 text-xs font-bold text-slate-700">
//                     {item.title}
//                   </p>

//                   <p className="mt-1 text-[12px] text-slate-500">
//                     {item.subtitle}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Navigate to the Franchise page */}
//           <button
//             type="button"
//             onClick={() => navigate("/franchise")}
//             className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D7201A] to-[#B91C1C] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
//           >
//             Send Franchise Inquiry
//             <ArrowRight size={15} />
//           </button>
//         </div>

//         {/* Right side: Franchise image */}
//         <div className="overflow-hidden">
//           <img
//             src="/assets/eat_pro_01.png"
//             alt="EatProtein franchise store"
//             className="h-[240px] w-full object-cover md:h-[420px]"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }





import {
  ArrowRight,
  BarChart3,
  Headphones,
  MapPin,
  Store,
  WalletCards,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { FRANCHISE_FEATURES } from "../data/homeData";
import SectionTag from "./SectionTag";
import AnimatedHeading from "./AnimatedHeading";

const icons = {
  map: MapPin,
  store: Store,
  support: Headphones,
  chart: BarChart3,
  income: WalletCards,
};

export default function FranchiseSection() {
  const navigate = useNavigate();

  return (
    <section
      id="franchise"
      className="w-full scroll-mt-20 overflow-hidden bg-[#fffaf2] py-9 sm:py-11 md:py-12 lg:py-14"
    >
      {/* Common section container */}
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-6 px-3 sm:gap-8 sm:px-5 md:px-8 lg:grid-cols-[48%_52%] lg:gap-6 lg:px-10 xl:gap-8 xl:px-12 2xl:px-14">

        {/* LEFT SIDE: FRANCHISE DETAILS */}
        <div className="min-w-0">

          <SectionTag orange>Business Opportunity</SectionTag>

          {/* Heading */}
          <h2 className="mt-3 text-[25px] font-extrabold leading-tight tracking-tight text-slate-900 min-[375px]:text-2xl sm:text-3xl lg:text-4xl xl:text-[42px]">

            <AnimatedHeading as="span" className="block">
              EatProtein
            </AnimatedHeading>

            <AnimatedHeading
              as="span"
              className="block text-protein-green"
            >
              Franchise Opportunity
            </AnimatedHeading>

          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[520px] text-xs leading-5 text-slate-700 min-[375px]:text-sm sm:leading-6">
            Be a part of a growing movement towards healthier communities. Get
            exclusive area rights, support and earn with every order placed from
            stores in your area.
          </p>

          {/* Franchise Features */}
          <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-4 min-[430px]:grid-cols-3 sm:grid-cols-5 sm:gap-3">

            {FRANCHISE_FEATURES.map((item) => {
              const Icon = icons[item.icon];

              if (!Icon) return null;

              return (
                <div
                  key={item.title}
                  className="min-w-0 text-center"
                >

                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-green-200 bg-white text-protein-green shadow-sm sm:h-11 sm:w-11">
                    <Icon size={18} />
                  </div>

                  <p className="mt-2 break-words text-[11px] font-bold leading-tight text-slate-700 sm:text-xs">
                    {item.title}
                  </p>

                  <p className="mt-1 break-words text-[10px] leading-4 text-slate-500 sm:text-[11px] sm:leading-5">
                    {item.subtitle}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Navigate to Franchise Page */}
          <button
            type="button"
            onClick={() => navigate("/franchise")}
            className="mt-6 inline-flex min-h-10 max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D7201A] to-[#B91C1C] px-4 py-2.5 text-[11px] font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 min-[375px]:px-5 sm:px-6 sm:py-3 sm:text-xs"
          >
            Send Franchise Inquiry
            <ArrowRight size={15} className="shrink-0" />
          </button>

        </div>

        {/* RIGHT SIDE: FRANCHISE IMAGE */}
        <div className="relative mx-auto w-full min-w-0 overflow-hidden rounded-xl sm:rounded-2xl">

          <img
            src="/assets/eat_pro_01.png"
            alt="EatProtein franchise store"
            className="h-[210px] w-full object-cover min-[375px]:h-[240px] min-[430px]:h-[270px] sm:h-[340px] md:h-[400px] lg:h-[380px] xl:h-[440px] 2xl:h-[480px]"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}
