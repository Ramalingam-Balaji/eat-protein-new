// import { ArrowUp, Play, Apple } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { navItems, appPromoItem } from "../data/navItems";
// import eatProteinIcon from "../assets/icon.png";
// import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// import appStore from "../assets/images/app-store.png";
// import googlePlay from "../assets/images/google-play.png";

// export default function Footer() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const goTo = (target) => {
//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: target } });
//       return;
//     }

//     document.getElementById(target)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <footer
//       className="scroll-mt-20 bg-[#023b21] px-5 py-9 text-white"
//     >
//       <div className="mx-auto grid max-w-[1450px] gap-7 md:grid-cols-[1.5fr_1fr_1fr]">
//         {/* Brand */}
//         <div>
//           <div className="flex items-center">
//             <img
//               src={eatProteinIcon}
//               alt="EatProtein"
//               className="h-16 w-auto object-contain"
//             />
//           </div>

//           <p className="ml-2 mt-3 max-w-md text-sm leading-5 text-green-100/70">
//             Healthy Food • Fit Life • Better You. Discover protein-rich foods
//             and make smarter nutrition choices every day.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-bold">Quick Links</h3>

//           <div className="mt-3 grid grid-cols-2 gap-2">
//             {navItems.map((item) => (
//               <div key={item.label}>
//                 {item.type === "route" ? (
//                   <Link
//                     to={item.path}
//                     className="text-sm text-green-100/70 transition-colors hover:text-white"
//                   >
//                     {item.label}
//                   </Link>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={() => goTo(item.id)}
//                     className="text-left text-sm text-green-100/70 transition-colors hover:text-white"
//                   >
//                     {item.label}
//                   </button>
//                 )}
//               </div>
//             ))}

//             {/* Download App */}
//             {/* <button
//               type="button"
//               onClick={() => goTo(appPromoItem.id)}
//               className="text-left text-sm text-green-100/70 transition-colors hover:text-white"
//             >
//               {appPromoItem.label}
//             </button> */}
//           </div>
//         </div>

//         {/* Download App */}
//         <div>
//           <h3 className="font-bold">Download Our App</h3>

//           <div className="mt-5">
//             {/* Download App Buttons */}
//             <div className="flex flex-wrap items-center gap-3">
//               {/* App Store */}
//               <a
//                 href="https://apps.apple.com/in/app/eat-protein/id6636532383"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Download EatProtein on the App Store"
//                 className="transition duration-200 hover:-translate-y-1"
//               >
//                 <img
//                   src={appStore}
//                   alt="Download on the App Store"
//                   className="h-12 w-auto object-contain rounded-lg"
//                 />
//               </a>

//               {/* Google Play */}
//               <a
//                 href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Get EatProtein on Google Play"
//                 className="transition duration-200 hover:-translate-y-1"
//               >
//                 <img
//                   src={googlePlay}
//                   alt="Get it on Google Play"
//                   className="h-12 w-auto object-contain rounded-lg"
//                 />
//               </a>
//             </div>

//             {/* Social Media Icons */}
//             <div className="mt-5">
//               <div className="flex items-center gap-3">
//                 {/* Instagram */}
//                 <a
//                   href="https://www.instagram.com/eatprotein_offl?igsh=cjJtZnVtdjlzcGpq"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   className="flex h-10 w-10 items-center justify-center rounded-full
//                  border border-green-100/20 text-green-100
//                  transition-all duration-300 hover:border-green-300
//                  hover:bg-green-100/10 hover:text-white"
//                 >
//                   <Instagram size={19} />
//                 </a>

//                 {/* Facebook */}
//                 <a
//                   href="https://www.facebook.com/profile.php?id=61560653348052&mibextid=LQQJ4d"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                   className="flex h-10 w-10 items-center justify-center rounded-full
//                  border border-green-100/20 text-green-100
//                  transition-all duration-300 hover:border-green-300
//                  hover:bg-green-100/10 hover:text-white"
//                 >
//                   <Facebook size={19} />
//                 </a>

//                 {/* YouTube */}
//                 <a
//                   href="https://youtube.com/@eatprotein-offl?si=BFJs5bMrQZ6iZpy9"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="YouTube"
//                   className="flex h-10 w-10 items-center justify-center rounded-full
//                  border border-green-100/20 text-green-100
//                  transition-all duration-300 hover:border-green-300
//                  hover:bg-green-100/10 hover:text-white"
//                 >
//                   <Youtube size={19} />
//                 </a>

//                 {/* WhatsApp */}
//                 <a
//                   href="https://wa.me/9440701380"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="WhatsApp"
//                   className="flex h-10 w-10 items-center justify-center rounded-full
//              border border-green-100/20 text-green-100
//              transition-all duration-300 hover:border-green-300
//              hover:bg-green-100/10 hover:text-white"
//                 >
//                   <FaWhatsapp size={21} />
//                 </a>
//                 {/* <a
//                   href="https://wa.me/YOUR_PHONE_NUMBER"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="WhatsApp"
//                   className="flex h-10 w-10 items-center justify-center rounded-full
//                  border border-green-100/20 text-green-100
//                  transition-all duration-300 hover:border-green-300
//                  hover:bg-green-100/10 hover:text-white"
//                 >
//                   <MessageCircle size={19} />
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Bottom Bar */}
//       <div className="mx-auto mt-7 flex max-w-[1450px] flex-col gap-4 border-t border-white/10 pt-5 text-[12px] text-green-100/50 sm:flex-row sm:items-center sm:justify-between">
//         {/* Copyright */}
//         <span>
//           © {new Date().getFullYear()} EatProtein. All rights reserved.
//         </span>

//         {/* Policy Links */}
//         <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//           <Link to="/terms" className="transition-colors hover:text-white">
//             Terms & Conditions
//           </Link>

//           <Link to="/privacy" className="transition-colors hover:text-white">
//             Privacy Policy
//           </Link>

//           <Link to="/shipping" className="transition-colors hover:text-white">
//             Shipping Policy
//           </Link>
//         </div>

//         {/* Back to Top */}
//         <button
//           type="button"
//           onClick={() =>
//             window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//             })
//           }
//           className="flex items-center gap-1 transition-colors hover:text-white"
//         >
//           Back to top <ArrowUp size={12} />
//         </button>
//       </div>
//     </footer>
//   );
// }



import { ArrowUp, Instagram, Facebook, Youtube } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../data/navItems";
import eatProteinIcon from "../assets/icon.png";
import { FaWhatsapp } from "react-icons/fa";

import appStore from "../assets/images/app-store.png";
import googlePlay from "../assets/images/google-play.png";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to the exact beginning of a section below the sticky navbar.
  const scrollToSection = (target) => {
    if (!target) return;

    const section = document.getElementById(target);

    if (!section) {
      console.warn(`Section with ID "${target}" was not found.`);
      return;
    }

    const navbar = document.querySelector("header");
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

    const targetPosition =
      window.scrollY +
      section.getBoundingClientRect().top -
      navbarHeight;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  // Handle links from the footer on the home page or another route.
  
const goTo = (target) => {
  if (!target) return;

  if (location.pathname !== "/") {
    navigate("/", {
      state: { scrollTo: target },
    });

    return;
  }

  const section = document.getElementById(target);

  if (!section) {
    console.warn(`Footer: Section "${target}" was not found.`);
    return;
  }

  const navbar = document.querySelector("header");
  const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

  const sectionTop =
    window.scrollY +
    section.getBoundingClientRect().top -
    navbarHeight;

  window.scrollTo({
    top: Math.max(0, sectionTop),
    behavior: "smooth",
  });
};


  return (
    <footer className="scroll-mt-0 bg-[#023b21] px-5 py-9 text-white">
      <div className="mx-auto grid max-w-[1450px] gap-7 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center">
            <img
              src={eatProteinIcon}
              alt="EatProtein"
              className="h-16 w-auto object-contain"
            />
          </div>

          <p className="ml-2 mt-3 max-w-md text-sm leading-5 #ffffff">
            Your trusted partner for premium protein-rich foods and healthy nutrition solutions. Join thousands of satisfied customers on their wellness journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold">Quick Links</h3>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.type === "route" ? (
                  <Link
                    to={item.path}
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "instant",
                      });
                    }}
                    className="text-left text-sm text-white transition-colors hover:text-green-100/70"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    className="text-left text-sm text-white transition-colors hover:text-green-100/70"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-bold">Download Our App</h3>

          
<div className="mt-5 w-full">
  {/* App Store and Google Play — always side by side */}
  {/* <div className="flex w-full flex-row flex-nowrap items-center gap-2 sm:gap-3">
    <a
      href="https://apps.apple.com/in/app/eat-protein/id6636532383"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download EatProtein on the App Store"
      className="block min-w-0 flex-1 transition duration-200 hover:-translate-y-1"
    >
      <img
        src={appStore}
        alt="Download on the App Store"
        className="h-10 w-full rounded-lg object-contain sm:h-12"
      />
    </a>

    <a
      href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get EatProtein on Google Play"
      className="block min-w-0 flex-1 transition duration-200 hover:-translate-y-1"
    >
      <img
        src={googlePlay}
        alt="Get it on Google Play"
        className="h-10 w-full rounded-lg object-contain sm:h-12"
      />
    </a>
  </div> */}
  <div className="flex flex-nowrap items-center gap-3 ">
              {/* App Store */}
               <a
               
                 href="https://apps.apple.com/in/app/eat-protein/id6636532383"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Download EatProtein on the App Store"
                 className="transition duration-200 hover:-translate-y-1 "
               >
                 <img
                   src={appStore}
                   alt="Download on the App Store"
                   className="h-12 w-auto object-contain rounded-lg"
                 />
               </a>

               {/* Google Play */}
               <a
                 href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Get EatProtein on Google Play"
                 className="transition duration-200 hover:-translate-y-1"
               >
                 <img
                   src={googlePlay}
                   alt="Get it on Google Play"
                   className="h-12 w-auto object-contain rounded-lg"
                 />
               </a>
             </div>

              

  {/* Social Media — always in one horizontal row */}
  <div className="mt-5 flex w-full flex-row flex-nowrap items-center gap-2 sm:gap-3">
    <a
      href="https://www.instagram.com/eatprotein_offl?igsh=cjJtZnVtdjlzcGpq"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-100/20 text-green-100 transition-all duration-300 hover:border-green-300 hover:bg-green-100/10 hover:text-white sm:h-10 sm:w-10"
    >
      <Instagram size={19} />
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61560653348052&mibextid=LQQJ4d"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-100/20 text-green-100 transition-all duration-300 hover:border-green-300 hover:bg-green-100/10 hover:text-white sm:h-10 sm:w-10"
    >
      <Facebook size={19} />
    </a>

    <a
      href="https://youtube.com/@eatprotein-offl?si=BFJs5bMrQZ6iZpy9"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-100/20 text-green-100 transition-all duration-300 hover:border-green-300 hover:bg-green-100/10 hover:text-white sm:h-10 sm:w-10"
    >
      <Youtube size={19} />
    </a>

    <a
      href="https://wa.me/9440701380"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-100/20 text-green-100 transition-all duration-300 hover:border-green-300 hover:bg-green-100/10 hover:text-white sm:h-10 sm:w-10"
    >
      <FaWhatsapp size={21} />
    </a>
  </div>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-7 flex max-w-[1450px] flex-col gap-4 border-t border-white/10 pt-5 text-[12px] text-white sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright */}
        <span>
          © {new Date().getFullYear()} EatProtein. All rights reserved.
        </span>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link to="/terms" className="transition-colors hover:text-green-100/70">
            Terms &amp; Conditions
          </Link>

          <Link to="/privacy" className="transition-colors hover:text-green-100/70">
            Privacy Policy
          </Link>

          <Link to="/shipping" className="transition-colors hover:text-green-100/70">
            Shipping Policy
          </Link>
        </div>

        {/* Back to Top */}
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-1 transition-colors hover:text-green-100/70"
        >
          Back to top <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
