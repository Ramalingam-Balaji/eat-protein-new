// // import { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { Menu, X, Download } from "lucide-react";

// // import { navItems, appPromoItem } from "../data/navItems";
// // import eatProteinIcon from "../assets/icon.png";

// // export default function Navbar() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   const scrollToSection = (target) => {
// //     if (!target) return;

// //     const section = document.getElementById(target);

// //     if (section) {
// //       section.scrollIntoView({
// //         behavior: "smooth",
// //         block: "start",
// //       });
// //     }
// //   };

// //   const handleRouteClick = (path) => {
// //     if (!path) return;

// //     setMobileMenuOpen(false);
// //     navigate(path);

// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth",
// //     });
// //   };

// //   const handleSectionClick = (target) => {
// //     if (!target) return;

// //     setMobileMenuOpen(false);

// //     if (location.pathname !== "/") {
// //       navigate("/", {
// //         state: { scrollTo: target },
// //       });
// //       return;
// //     }

// //     scrollToSection(target);
// //   };

// //   const handleNavigation = (item) => {
// //     if (item.type === "route") {
// //       handleRouteClick(item.path);
// //     } else if (item.type === "section") {
// //       handleSectionClick(item.id);
// //     }
// //   };

// //   useEffect(() => {
// //     const target = location.state?.scrollTo;

// //     if (location.pathname !== "/" || !target) {
// //       return;
// //     }

// //     let frame;

// //     const timeout = window.setTimeout(() => {
// //       frame = window.requestAnimationFrame(() => {
// //         scrollToSection(target);

// //         navigate("/", {
// //           replace: true,
// //           state: {},
// //         });
// //       });
// //     }, 50);

// //     return () => {
// //       window.clearTimeout(timeout);

// //       if (frame) {
// //         window.cancelAnimationFrame(frame);
// //       }
// //     };
// //   }, [location.pathname, location.state, navigate]);

// //   // Close the mobile menu when the route changes.
// //   useEffect(() => {
// //     setMobileMenuOpen(false);
// //   }, [location.pathname]);

// //   const handleAppClick = () => {
// //     handleSectionClick(appPromoItem.id);
// //   };

// //   return (
// //     <header className="sticky top-0 z-50 m-0 block w-full border-0 border-b border-solid border-green-100/40 bg-white shadow-sm">
// //       <nav className="mx-auto m-0 flex min-h-[68px] w-full max-w-[1450px] items-center justify-between gap-3 bg-white px-4 py-3 sm:px-5 lg:px-6 xl:gap-3 2xl:px-8">
// //         {/* Logo */}
// //         <button
// //           type="button"
// //           onClick={() => handleSectionClick("home")}
// //           className="shrink-0"
// //           aria-label="Go to Home"
// //         >
// //           <img
// //             src={eatProteinIcon}
// //             alt="EatProtein"
// //             className="h-11 w-auto object-contain sm:h-16"
// //           />
// //         </button>

// //         {/* Desktop Navigation: wide screens only */}
// //         <div className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex">
// //           {navItems.map((item) => (
// //             <button
// //               key={item.label}
// //               type="button"
// //               onClick={() => handleNavigation(item)}
// //               className="whitespace-nowrap rounded-lg px-3 py-2 text-m font-semibold text-gray-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-700 2xl:px-3 2xl:text-sm"
// //             >
// //               {item.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Desktop Download App */}
// //         <button
// //           type="button"
// //           onClick={handleAppClick}
// //           className="hidden shrink-0 items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg xl:flex"
// //         >
// //           <Download size={17} />
// //           <span>{appPromoItem.label}</span>
// //         </button>

// //         {/* Mobile and tablet menu toggle */}
// //         <button
// //           type="button"
// //           onClick={() => setMobileMenuOpen((open) => !open)}
// //           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50 xl:hidden"
// //           aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
// //           aria-expanded={mobileMenuOpen}
// //         >
// //           {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
// //         </button>
// //       </nav>

// //       {/* Mobile and tablet navigation */}
// //       {mobileMenuOpen && (
// //         <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-green-100 bg-white px-4 py-4 shadow-lg sm:px-5 xl:hidden">
// //           <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-1">
// //             {navItems.map((item) => (
// //               <button
// //                 key={item.label}
// //                 type="button"
// //                 onClick={() => handleNavigation(item)}
// //                 className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
// //               >
// //                 {item.label}
// //               </button>
// //             ))}

// //             {/* Mobile Download App */}
// //             <button
// //               type="button"
// //               onClick={handleAppClick}
// //               className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
// //             >
// //               <Download size={17} />
// //               {appPromoItem.label}
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }



// // import { useEffect, useState, useCallback } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { Menu, X, Download } from "lucide-react";

// // import { navItems, appPromoItem } from "../data/navItems";
// // import eatProteinIcon from "../assets/icon.png";

// // export default function Navbar() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);




// // const scrollToSection = useCallback((target) => {
// //   if (!target) return;

// //   const section = document.getElementById(target);
// //   if (!section) return;

// //   const navbar = document.querySelector("header");
// //   const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

// //   const sectionTop =
// //     section.getBoundingClientRect().top +
// //     window.scrollY -
// //     navbarHeight;

// //   window.scrollTo({
// //     top: Math.max(0, sectionTop),
// //     behavior: "smooth",
// //   });
// // }, []);

// //   const handleRouteClick = (path) => {
// //     if (!path) return;

// //     setMobileMenuOpen(false);
// //     navigate(path);

// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth",
// //     });
// //   };

// //   const handleSectionClick = (target) => {
// //     if (!target) return;

// //     setMobileMenuOpen(false);

// //     if (location.pathname !== "/") {
// //       navigate("/", {
// //         state: { scrollTo: target },
// //       });
// //       return;
// //     }

// //     // Wait for the current page layout before scrolling.
// //     window.requestAnimationFrame(() => {
// //       scrollToSection(target);
// //     });
// //   };

// //   const handleNavigation = (item) => {
// //     if (item.type === "route") {
// //       handleRouteClick(item.path);
// //     } else if (item.type === "section") {
// //       handleSectionClick(item.id);
// //     }
// //   };

// //   // Handle navigation to a home section from another route.
// //   useEffect(() => {
// //     const target = location.state?.scrollTo;

// //     if (location.pathname !== "/" || !target) {
// //       return;
// //     }

// //     let frame1;
// //     let frame2;

// //     const timeout = window.setTimeout(() => {
// //       frame1 = window.requestAnimationFrame(() => {
// //         frame2 = window.requestAnimationFrame(() => {
// //           scrollToSection(target);

// //           navigate("/", {
// //             replace: true,
// //             state: {},
// //           });
// //         });
// //       });
// //     }, 100);

// //     return () => {
// //       window.clearTimeout(timeout);

// //       if (frame1) {
// //         window.cancelAnimationFrame(frame1);
// //       }

// //       if (frame2) {
// //         window.cancelAnimationFrame(frame2);
// //       }
// //     };
// //   }, [
// //     location.pathname,
// //     location.state,
// //     navigate,
// //     scrollToSection,
// //   ]);

// //   // Close the mobile menu when the route changes.
// //   useEffect(() => {
// //     setMobileMenuOpen(false);
// //   }, [location.pathname]);

// //   const handleAppClick = () => {
// //     handleSectionClick(appPromoItem.id);
// //   };

// //   return (
// //     <header className="sticky top-0 z-50 m-0 block w-full border-0 border-b border-solid border-green-100/40 bg-white shadow-sm">
// //       <nav className="mx-auto m-0 flex min-h-[68px] w-full max-w-[1450px] items-center justify-between gap-3 bg-white px-4 py-3 sm:px-5 lg:px-6 xl:gap-3 2xl:px-8">
// //         {/* Logo */}
// //         <button
// //           type="button"
// //           onClick={() => handleSectionClick("home")}
// //           className="shrink-0"
// //           aria-label="Go to Home"
// //         >
// //           <img
// //             src={eatProteinIcon}
// //             alt="EatProtein"
// //             className="h-11 w-auto object-contain sm:h-16"
// //           />
// //         </button>

// //         {/* Desktop Navigation */}
// //         <div className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex">
// //           {navItems.map((item) => (
// //             <button
// //               key={item.label}
// //               type="button"
// //               onClick={() => handleNavigation(item)}
// //               className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-700 2xl:px-3"
// //             >
// //               {item.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Desktop Download App */}
// //         <button
// //           type="button"
// //           onClick={handleAppClick}
// //           className="hidden shrink-0 items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg xl:flex"
// //         >
// //           <Download size={17} />
// //           <span>{appPromoItem.label}</span>
// //         </button>

// //         {/* Mobile and tablet menu toggle */}
// //         <button
// //           type="button"
// //           onClick={() => setMobileMenuOpen((open) => !open)}
// //           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50 xl:hidden"
// //           aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
// //           aria-expanded={mobileMenuOpen}
// //         >
// //           {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
// //         </button>
// //       </nav>

// //       {/* Mobile and tablet navigation */}
// //       {mobileMenuOpen && (
// //         <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-green-100 bg-white px-4 py-4 shadow-lg sm:px-5 xl:hidden">
// //           <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-1">
// //             {navItems.map((item) => (
// //               <button
// //                 key={item.label}
// //                 type="button"
// //                 onClick={() => handleNavigation(item)}
// //                 className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
// //               >
// //                 {item.label}
// //               </button>
// //             ))}

// //             {/* Mobile Download App */}
// //             <button
// //               type="button"
// //               onClick={handleAppClick}
// //               className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
// //             >
// //               <Download size={17} />
// //               {appPromoItem.label}
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }



// import { useCallback, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Menu, X, Download } from "lucide-react";

// import { navItems, appPromoItem } from "../data/navItems";
// import eatProteinIcon from "../assets/icon.png";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Scroll to a section while accounting for the sticky navbar.
//   const scrollToSection = useCallback((target) => {
//     if (!target) return;

//     const section = document.getElementById(target);

//     if (!section) {
//       console.warn(`Navbar: Section with id "${target}" was not found.`);
//       return;
//     }

//     const header = document.querySelector("header");
//     const headerHeight = header?.getBoundingClientRect().height ?? 0;

//     const sectionTop =
//       section.getBoundingClientRect().top +
//       window.scrollY -
//       headerHeight;

//     window.scrollTo({
//       top: Math.max(0, sectionTop),
//       behavior: "smooth",
//     });
//   }, []);

//   // Navigate to a separate page.
//   const handleRouteClick = useCallback(
//     (path) => {
//       if (!path) return;

//       setMobileMenuOpen(false);

//       if (location.pathname === path) {
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//         return;
//       }

//       navigate(path);
//       window.scrollTo({ top: 0, behavior: "instant" });
//     },
//     [location.pathname, navigate]
//   );

//   // Navigate to a Home page section.
  
// const handleSectionClick = useCallback(
//   (target) => {
//     if (!target) return;

//     setMobileMenuOpen(false);

//     if (location.pathname !== "/") {
//       navigate("/", {
//         state: { scrollTo: target },
//       });

//       return;
//     }

//     // Already on Home: scroll directly.
//     scrollToSection(target);
//   },
//   [location.pathname, navigate, scrollToSection]
// );


//   // Handle navigation items safely.
//   const handleNavigation = useCallback(
//     (item) => {
//       if (!item) return;

//       if (item.type === "route" && item.path) {
//         handleRouteClick(item.path);
//         return;
//       }

//       if (item.type === "section" && item.id) {
//         handleSectionClick(item.id);
//         return;
//       }

//       // Support Franchise even if its configuration still uses
//       // type="section" but has a franchise route path.
//       if (
//         item.label?.toLowerCase().includes("franchise") &&
//         item.path
//       ) {
//         handleRouteClick(
//           item.path.startsWith("/") ? item.path : `/${item.path}`
//         );
//       }
//     },
//     [handleRouteClick, handleSectionClick]
//   );

//   // Complete section navigation after returning to Home.
//   useEffect(() => {
//     const target = location.state?.scrollTo;

//     if (location.pathname !== "/" || !target) return;

//     let frame1;
//     let frame2;

//     const timeout = window.setTimeout(() => {
//       frame1 = requestAnimationFrame(() => {
//         frame2 = requestAnimationFrame(() => {
//           scrollToSection(target);

//           // Clear the pending scroll target without navigating again
//           // unnecessarily when the state has already been cleared.
//           navigate("/", {
//             replace: true,
//             state: {},
//           });
//         });
//       });
//     }, 100);

//     return () => {
//       window.clearTimeout(timeout);

//       if (frame1 !== undefined) {
//         cancelAnimationFrame(frame1);
//       }

//       if (frame2 !== undefined) {
//         cancelAnimationFrame(frame2);
//       }
//     };
//   }, [
//     location.pathname,
//     location.state,
//     navigate,
//     scrollToSection,
//   ]);

//   // Close the mobile menu after changing pages.
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [location.pathname]);

//   const handleAppClick = () => {
//     handleSectionClick(appPromoItem.id);
//   };

//   const handleLogoClick = () => {
//     handleSectionClick("home");
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-green-100/60 bg-white shadow-sm">
//       <nav className="mx-auto flex min-h-[68px] w-full max-w-[1450px] items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6 2xl:px-8">
//         {/* Logo */}
//         <button
//           type="button"
//           onClick={handleLogoClick}
//           className="shrink-0"
//           aria-label="Go to Home"
//         >
//           <img
//             src={eatProteinIcon}
//             alt="EatProtein"
//             className="h-11 w-auto object-contain sm:h-16"
//           />
//         </button>

//         {/* Desktop navigation */}
//         <div className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex">
//           {navItems.map((item) => (
//             <button
//               key={item.label}
//               type="button"
//               onClick={() => handleNavigation(item)}
//               className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-700"
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>

//         {/* Desktop Download App */}
//         <button
//           type="button"
//           onClick={handleAppClick}
//           className="hidden shrink-0 items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg xl:flex"
//         >
//           <Download size={17} />
//           <span>{appPromoItem.label}</span>
//         </button>

//         {/* Mobile and tablet menu toggle */}
//         <button
//           type="button"
//           onClick={() => setMobileMenuOpen((open) => !open)}
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50 xl:hidden"
//           aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileMenuOpen}
//         >
//           {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile and tablet navigation */}
//       {mobileMenuOpen && (
//         <div className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-green-100 bg-white px-4 py-4 shadow-lg sm:px-5 xl:hidden">
//           <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.label}
//                 type="button"
//                 onClick={() => handleNavigation(item)}
//                 className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
//               >
//                 {item.label}
//               </button>
//             ))}

//             {/* Mobile Download App */}
//             <button
//               type="button"
//               onClick={handleAppClick}
//               className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
//             >
//               <Download size={17} />
//               {appPromoItem.label}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }




// import { useCallback, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Menu, X, Download } from "lucide-react";

// import { navItems, appPromoItem } from "../data/navItems";
// import eatProteinIcon from "../assets/icon.png";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Scroll to a Home section, accounting for the sticky navbar.
//   const scrollToSection = useCallback((target) => {
//     if (!target) return;

//     const section = document.getElementById(target);

//     if (!section) {
//       console.warn(
//         `Navbar: Section with id "${target}" was not found.`
//       );
//       return;
//     }

//     const header = document.querySelector("header");
//     const headerHeight =
//       header?.getBoundingClientRect().height ?? 0;

//     const sectionTop =
//       window.scrollY +
//       section.getBoundingClientRect().top -
//       headerHeight;

//     window.scrollTo({
//       top: Math.max(0, sectionTop),
//       behavior: "smooth",
//     });
//   }, []);

//   // Navigate to a separate page.
//   // ScrollManager handles resetting the scroll position.
//   const handleRouteClick = useCallback(
//     (path) => {
//       if (!path) return;

//       setMobileMenuOpen(false);

//       const normalizedPath = path.startsWith("/")
//         ? path
//         : `/${path}`;

//       if (location.pathname === normalizedPath) {
//         window.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: "auto",
//         });
//         return;
//       }

//       navigate(normalizedPath);
//     },
//     [location.pathname, navigate]
//   );

//   // Navigate to a Home page section.
 
// const handleSectionClick = useCallback(
//   (target) => {
//     if (!target) return;

//     setMobileMenuOpen(false);

//     if (location.pathname !== "/") {
//       navigate("/", {
//         state: { scrollTo: target },
//       });
//       return;
//     }

//     scrollToSection(target);
//   },
//   [location.pathname, navigate, scrollToSection]
// );


//   // Handle configured navigation items.
//   const handleNavigation = useCallback(
//     (item) => {
//       if (!item) return;

//       if (item.type === "route" && item.path) {
//         handleRouteClick(item.path);
//         return;
//       }

//       if (item.type === "section" && item.id) {
//         handleSectionClick(item.id);
//         return;
//       }

//       // Fallback for Franchise configurations.
//       if (
//         item.label?.toLowerCase().includes("franchise") &&
//         item.path
//       ) {
//         handleRouteClick(item.path);
//       }
//     },
//     [handleRouteClick, handleSectionClick]
//   );

//   // Close the mobile menu after changing pages.
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [location.pathname]);

//   // Download App button navigates to its configured Home section.
//   const handleAppClick = useCallback(() => {
//     handleSectionClick(appPromoItem.id);
//   }, [handleSectionClick]);

//   // Clicking the logo navigates to the Home hero section.
//   const handleLogoClick = useCallback(() => {
//     handleSectionClick("home");
//   }, [handleSectionClick]);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-green-100/60 bg-white shadow-sm">
//       <nav className="mx-auto flex min-h-[68px] w-full max-w-[1450px] items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6 2xl:px-8">
//         {/* Logo */}
//         <button
//           type="button"
//           onClick={handleLogoClick}
//           className="shrink-0"
//           aria-label="Go to Home"
//         >
//           <img
//             src={eatProteinIcon}
//             alt="EatProtein"
//             className="h-11 w-auto object-contain sm:h-16"
//           />
//         </button>

//         {/* Desktop navigation */}
//         <div className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex">
//           {navItems.map((item) => (
//             <button
//               key={item.label}
//               type="button"
//               onClick={() => handleNavigation(item)}
//               className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
//                 (
//                   item.type === "route" &&
//                   item.path === location.pathname
//                 )
//                   ? "bg-green-50 text-green-700"
//                   : "text-gray-700 hover:bg-green-50 hover:text-green-700"
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>

//         {/* Desktop Download App */}
//         <button
//           type="button"
//           onClick={handleAppClick}
//           className="hidden shrink-0 items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg xl:flex"
//         >
//           <Download size={17} />
//           <span>{appPromoItem.label}</span>
//         </button>

//         {/* Mobile and tablet menu toggle */}
//         <button
//           type="button"
//           onClick={() => setMobileMenuOpen((open) => !open)}
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50 xl:hidden"
//           aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileMenuOpen}
//         >
//           {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile and tablet navigation */}
//       {mobileMenuOpen && (
//         <div className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-green-100 bg-white px-4 py-4 shadow-lg sm:px-5 xl:hidden">
//           <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.label}
//                 type="button"
//                 onClick={() => handleNavigation(item)}
//                 className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
//                   item.type === "route" &&
//                   item.path === location.pathname
//                     ? "bg-green-50 text-green-700"
//                     : "text-gray-700 hover:bg-green-50 hover:text-green-700"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}

//             {/* Mobile Download App */}
//             <button
//               type="button"
//               onClick={handleAppClick}
//               className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
//             >
//               <Download size={17} />
//               {appPromoItem.label}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }





import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

import { navItems, appPromoItem } from "../data/navItems";
import eatProteinIcon from "../assets/icon2.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to a section, accounting for the sticky navbar.
  const scrollToSection = useCallback((target) => {
    if (!target) return;

    const section = document.getElementById(target);

    if (!section) {
      console.warn(`Navbar: Section with id "${target}" was not found.`);
      return;
    }

    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height ?? 0;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      8;

    window.scrollTo({
      top: Math.max(0, sectionTop),
      behavior: "smooth",
    });
  }, []);

  // Navigate to another page.
  const handleRouteClick = useCallback(
    (path) => {
      if (!path) return;

      setMobileMenuOpen(false);

      if (location.pathname === path) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      navigate(path);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
    [location.pathname, navigate]
  );

  // Navigate to a Home page section.
  const handleSectionClick = useCallback(
    (target) => {
      if (!target) return;

      setMobileMenuOpen(false);

      if (location.pathname !== "/") {
        navigate("/", {
          state: { scrollTo: target },
        });
        return;
      }

      scrollToSection(target);
    },
    [location.pathname, navigate, scrollToSection]
  );

  // Handle navigation links.
  const handleNavigation = useCallback(
    (item) => {
      if (!item) return;

      if (item.type === "route" && item.path) {
        handleRouteClick(item.path);
        return;
      }

      if (item.type === "section" && item.id) {
        handleSectionClick(item.id);
        return;
      }

      if (item.path) {
        handleRouteClick(
          item.path.startsWith("/") ? item.path : `/${item.path}`
        );
      }
    },
    [handleRouteClick, handleSectionClick]
  );

  // Complete section navigation after returning to Home.
  useEffect(() => {
    const target = location.state?.scrollTo;

    if (location.pathname !== "/" || !target) return;

    let frame1;
    let frame2;

    const timeout = window.setTimeout(() => {
      frame1 = requestAnimationFrame(() => {
        frame2 = requestAnimationFrame(() => {
          scrollToSection(target);

          navigate("/", {
            replace: true,
            state: {},
          });
        });
      });
    }, 100);

    return () => {
      window.clearTimeout(timeout);

      if (frame1 !== undefined) {
        cancelAnimationFrame(frame1);
      }

      if (frame2 !== undefined) {
        cancelAnimationFrame(frame2);
      }
    };
  }, [
    location.pathname,
    location.state,
    navigate,
    scrollToSection,
  ]);

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Download App navigation.
  const handleAppClick = () => {
    handleSectionClick(appPromoItem.id);
  };

  // Logo navigation.
  const handleLogoClick = () => {
    handleSectionClick("home");
  };

  // Get the correct href for each navigation item.
  const getItemHref = (item) => {
    if (item.type === "route" && item.path) {
      return item.path.startsWith("/")
        ? item.path
        : `/${item.path}`;
    }

    if (item.type === "section" && item.id) {
      return location.pathname === "/"
        ? `#${item.id}`
        : `/#${item.id}`;
    }

    if (item.path) {
      return item.path.startsWith("/")
        ? item.path
        : `/${item.path}`;
    }

    return "#";
  };

  // Handle navigation using anchor elements.
  const handleAnchorNavigation = (event, item) => {
    // Preserve browser behavior for opening links in another tab.
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    handleNavigation(item);
  };

  // Shared focus styles: visible for keyboard users,
  // not persistently displayed after ordinary mouse clicks.
  const focusStyles =
    "outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-[#258440] shadow-md">
      <nav className="mx-auto flex min-h-[76px] w-full max-w-[1500px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <button
          type="button"
          onClick={handleLogoClick}
          className={`shrink-0 rounded-lg ${focusStyles}`}
          aria-label="Go to Home"
        >
          <img
            src={eatProteinIcon}
            alt="EatProtein"
            className="h-11 w-auto object-contain sm:h-16"
          />
        </button>

        {/* Desktop navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={getItemHref(item)}
              onClick={(event) => handleAnchorNavigation(event, item)}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-[16px] font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:text-white ${focusStyles}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Download App */}
        <button
          type="button"
          onClick={handleAppClick}
          className={`hidden shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1F7036] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EAF7EB] hover:shadow-lg xl:flex ${focusStyles}`}
        >
          <Download size={17} />
          <span>{appPromoItem.label}</span>
        </button>

        {/* Mobile and tablet menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/15 xl:hidden ${focusStyles}`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile and tablet navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/15 bg-[#1F7036] px-4 py-4 shadow-lg sm:px-6 xl:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-1">

            {/* Mobile navigation links */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={getItemHref(item)}
                onClick={(event) => handleAnchorNavigation(event, item)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-white transition-colors hover:bg-white/15 ${focusStyles}`}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Download App */}
            <button
              type="button"
              onClick={handleAppClick}
              className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1F7036] transition-colors hover:bg-[#EAF7EB] ${focusStyles}`}
            >
              <Download size={17} />
              {appPromoItem.label}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
