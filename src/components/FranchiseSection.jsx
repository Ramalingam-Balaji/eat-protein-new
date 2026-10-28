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
    <section id="franchise" className="scroll-mt-20 bg-[#fffaf2] px-10 py-9">
      <div className="mx-auto grid max-w-[1450px] items-center gap-6 lg:grid-cols-[48%_52%]">
        {/* Left side: Franchise details */}
        <div>
          <SectionTag orange>Business Opportunity</SectionTag>

    <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
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

          <p className="mt-3 max-w-[500px] text-sm leading-6 text-slate-700">
            Be a part of a growing movement towards healthier communities. Get
            exclusive area rights, support and earn with every order placed from
            stores in your area.
          </p>

          {/* Franchise features */}
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {FRANCHISE_FEATURES.map((item) => {
              const Icon = icons[item.icon];

              if (!Icon) return null;

              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-green-200 bg-white text-protein-green shadow-sm">
                    <Icon size={17} />
                  </div>

                  <p className="mt-2 text-xs font-bold text-slate-700">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[12px] text-slate-500">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigate to the Franchise page */}
          <button
            type="button"
            onClick={() => navigate("/franchise")}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D7201A] to-[#B91C1C] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Send Franchise Inquiry
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Right side: Franchise image */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src="/assets/franchise-store.png"
            alt="EatProtein franchise store"
            className="h-[240px] w-full object-cover md:h-[400px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
