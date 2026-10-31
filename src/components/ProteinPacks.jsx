
// import { useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   UsersRound,
// } from "lucide-react";

// import SectionTag from "./SectionTag";
// import {
//   PACK_CATEGORIES,
//   PACK_TYPES,
//   PROTEIN_PACKS,
// } from "../data/proteinPacksData";

// export default function ProteinPacks() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const packs = PROTEIN_PACKS[activeCategory] ?? PROTEIN_PACKS.all;

//   const handleViewPack = (pack) => {
//     // Scroll to the app download section by default.
//     if (pack.buttonLink === "#app-promo") {
//       document.getElementById("app-promo")?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       return;
//     }

//     window.location.href = pack.buttonLink;
//   };

//   return (
//     <section
//       id="protein-packs"
//       className="overflow-hidden bg-[#f7faf5] py-14 sm:py-16 lg:py-5"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading and category filter */}
//         <div className="mb-7 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
//           <div className="max-w-2xl">
//             <SectionTag>PROTEIN PACKS</SectionTag>

//             <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#102e2b] sm:text-3xl lg:text-4xl">
//               Daily. Weekly. Monthly Packs
//             </h2>

//             <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
//               Convenient protein packs for your lifestyle, goals and family.
//               Browse all packs and choose your favorites on the EatProtein app.
//             </p>
//           </div>

//           {/* Category filter */}
//           <div className="flex flex-wrap items-center gap-2">
//            {/* <UsersRound
//               size={21}
//               className="mr-1 text-[#168344]"
//             />*/}

//             {PACK_CATEGORIES.map((category) => {
//               const isActive = activeCategory === category.id;

//               return (
//                 <button
//                   key={category.id}
//                   type="button"
//                   onClick={() => setActiveCategory(category.id)}
//                   aria-pressed={isActive}
//                   className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
//                     isActive
//                       ? "border-[#087d3d] bg-[#087d3d] text-white shadow-sm"
//                       : "border-[#d6e5d8] bg-white text-[#28543b] hover:border-[#168344] hover:bg-green-50"
//                   }`}
//                 >
//                  {category.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Pack cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
//           {packs.map((pack, index) => {
//             const type = PACK_TYPES[index];
//             const Icon = type.icon;

//             return (
//               <article
//                 key={`${activeCategory}-${type.id}`}
//                 className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 ${
//                   index === 1
//                     ? "border-[#a5d9b0]"
//                     : "border-[#e7eee6]"
//                 }`}
//               >
//                 {/* Popular badge */}
//                {/* {type.badge && (
//                   <span className="absolute right-4 top-0 z-10 rounded-b-lg bg-[#087d3d] px-3 py-1.5 text-[10px] font-bold text-white sm:right-5">
//                     {type.badge}
//                   </span>
//                 )} */}

//                 {/* Card content */}
//                 <div className="flex flex-1 items-start gap-3">
//                   <div className="min-w-0 flex-1">
//                     <div
//                       className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${type.iconBg}`}
//                     >
//                       <Icon size={20} className={type.iconColor} />
//                     </div>

//                     <h3 className="text-base font-extrabold leading-snug text-[#102e2b] sm:text-lg">
//                       {pack.title}
//                     </h3>

//                     <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm">
//                       {pack.description}
//                     </p>

//                     {/* Features */}
//                     <ul className="mt-3 space-y-2">
//                       {pack.features.map((feature) => (
//                         <li
//                           key={feature}
//                           className="flex items-start gap-2 text-[10px] leading-4 text-gray-700 sm:text-xs"
//                         >
//                           <CheckCircle2
//                             size={14}
//                             className="mt-0.5 shrink-0 fill-[#168344] text-white"
//                             strokeWidth={2.5}
//                           />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Food image */}
//                   <div className="mt-2 w-[38%] shrink-0 sm:w-[40%]">
//                     <img
//                       src={pack.image}
//                       alt={pack.title}
//                       loading="lazy"
//                       className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-square"
//                     />
//                   </div>
//                 </div>

//                 {/* Card action */}
//                 <div className="mt-4 flex justify-end border-t border-gray-100 pt-3">
//                   <button
//                     type="button"
//                     onClick={() => handleViewPack(pack)}
//                     className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-bold transition duration-200 sm:text-sm ${
//                       index === 1
//                         ? "border-[#91c7a2] bg-white text-[#087d3d] hover:bg-green-50"
//                         : "border-[#91c7a2] bg-white text-[#087d3d] hover:bg-green-50"
//                     }`}
//                   >
//                     {pack.buttonLabel}
//                     <ArrowRight size={15} />
//                   </button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* Supporting note */}
//         <p className="mt-5 text-center text-xs leading-5 text-gray-500">
//           Explore food options that fit your preferences and daily routine.
//         </p>
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react";
// import {
//   motion,
//   AnimatePresence,
// } from "framer-motion";

// import SectionTag from "./SectionTag";
// import {
//   PACK_CATEGORIES,
//   PACK_TYPES,
//   PROTEIN_PACKS,
// } from "../data/proteinPacksData";
// import AnimatedHeading from "./AnimatedHeading";

// // Heading animation
// const headingContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const headingWord = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//     filter: "blur(5px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// // Card animation
// const cardContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.18,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 55,
//     scale: 0.94,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     scale: 0.96,
//     transition: {
//       duration: 0.25,
//       ease: "easeIn",
//     },
//   },
// };

// export default function ProteinPacks() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const packs = PROTEIN_PACKS[activeCategory] ?? PROTEIN_PACKS.all;

//   const headingWords = "Daily. Weekly. Monthly Packs".split(" ");

//   const handleViewPack = (pack) => {
//     if (pack.buttonLink === "#app-promo") {
//       document.getElementById("app-promo")?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       return;
//     }

//     window.location.href = pack.buttonLink;
//   };

//   return (
//     <section
//       id="protein-packs"
//       className="overflow-hidden bg-[#f7faf5] py-14 sm:py-16 lg:py-5"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Heading and category filter */}
//         <div className="mb-7 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">

//           <div className="max-w-2xl">
//             {/* Section tag animation */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.6 }}
//             >
//               <SectionTag>PROTEIN PACKS</SectionTag>
//             </motion.div>

//             {/* Animated heading */}
//             <AnimatedHeading className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#102e2b] sm:text-3xl lg:text-4xl">
//   Daily. Weekly. Monthly Packs
// </AnimatedHeading>

//             {/* Description animation */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.7 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base"
//             >
//               Convenient protein packs for your lifestyle, goals and family.
//               Browse all packs and choose your favorites on the EatProtein app.
//             </motion.p>
//           </div>
//  {/* Category filter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap items-center gap-2"
//           >
//             {PACK_CATEGORIES.map((category, index) => {
//               const isActive = activeCategory === category.id;

//               return (
//                 <motion.button
//                   key={category.id}
//                   type="button"
//                   onClick={() => setActiveCategory(category.id)}
//                   aria-pressed={isActive}
//                   whileHover={{ y: -3, scale: 1.04 }}
//                   whileTap={{ scale: 0.96 }}
//                   transition={{ duration: 0.2 }}
//                   className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
//                     isActive
//                       ? "border-[#087d3d] bg-[#087d3d] text-white shadow-sm"
//                       : "border-[#d6e5d8] bg-white text-[#28543b] hover:border-[#168344] hover:bg-green-50"
//                   }`}
//                 >
//                   {category.label}
//                 </motion.button>
//               );
//             })}
//           </motion.div>
          
//         </div>
        
       
        

//         {/* Animated pack cards */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory}
//             variants={cardContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.12 }}
//             exit="exit"
//             className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
//           >
//             {packs.map((pack, index) => {
//               const type = PACK_TYPES[index];
//               const Icon = type.icon;

//               return (
//                 <motion.article
//                   key={`${activeCategory}-${type.id}`}
//                   variants={cardAnimation}
//                   whileHover={{
//                     y: -8,
//                     scale: 1.015,
//                     boxShadow: "0px 15px 30px rgba(8, 125, 61, 0.12)",
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeOut",
//                   }}
//                   className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white p-4 shadow-sm sm:p-5 ${
//                     index === 1
//                       ? "border-[#a5d9b0]"
//                       : "border-[#e7eee6]"
//                   }`}
//                 >
//                   {/* Card content */}
//                   <div className="flex flex-1 items-start gap-3">
//                     <div className="min-w-0 flex-1">

//                       {/* Icon animation */}
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
//                         whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.2,
//                           type: "spring",
//                           stiffness: 180,
//                         }}
//                         className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${type.iconBg}`}
//                       >
//                         <Icon size={20} className={type.iconColor} />
//                       </motion.div>

//                       <h3 className="text-base font-extrabold leading-snug text-[#102e2b] sm:text-lg">
//                         {pack.title}
//                       </h3>

//                       <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm">
//                         {pack.description}
//                       </p>

//                       {/* Features */}
//                       <ul className="mt-3 space-y-2">
//                         {pack.features.map((feature, featureIndex) => (
//                           <motion.li
//                             key={feature}
//                             initial={{ opacity: 0, x: -12 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{
//                               duration: 0.4,
//                               delay: 0.25 + featureIndex * 0.08,
//                             }}
//                             className="flex items-start gap-2 text-[10px] leading-4 text-gray-700 sm:text-xs"
//                           >
//                             <CheckCircle2
//                               size={14}
//                               className="mt-0.5 shrink-0 fill-[#168344] text-white"
//                               strokeWidth={2.5}
//                             />
//                             <span>{feature}</span>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Food image animation */}
//                     <motion.div
//                       whileHover={{ scale: 1.06 }}
//                       transition={{ duration: 0.35 }}
//                       className="mt-2 w-[38%] shrink-0 overflow-hidden rounded-xl sm:w-[40%]"
//                     >
//                       <img
//                         src={pack.image}
//                         alt={pack.title}
//                         loading="lazy"
//                         className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-square"
//                       />
//                     </motion.div>
//                   </div>

//                   {/* Card action */}
//                   <div className="mt-4 flex justify-end border-t border-gray-100 pt-3">
//                     <motion.button
//                       type="button"
//                       onClick={() => handleViewPack(pack)}
//                       whileHover={{ x: 4 }}
//                       whileTap={{ scale: 0.96 }}
//                       transition={{ duration: 0.2 }}
//                       className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#91c7a2] bg-white px-4 py-2 text-xs font-bold text-[#087d3d] transition-colors duration-200 hover:bg-green-50 sm:text-sm"
//                     >
//                       {pack.buttonLabel}
//                       <ArrowRight size={15} />
//                     </motion.button>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         </AnimatePresence>

//         {/* Supporting note */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-5 text-center text-xs leading-5 text-gray-500"
//         >
//           Explore food options that fit your preferences and daily routine.
//         </motion.p>
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react";

// import {
//   motion,
//   AnimatePresence,
// } from "framer-motion";

// import SectionTag from "./SectionTag";
// import AnimatedHeading from "./AnimatedHeading";

// import {
//   PACK_CATEGORIES,
//   PACK_TYPES,
//   PROTEIN_PACKS,
// } from "../data/proteinPacksData";

// // Card animation container
// const cardContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.18,
//       delayChildren: 0.1,
//     },
//   },
// };

// // Individual card animation
// const cardAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 55,
//     scale: 0.94,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },

//   exit: {
//     opacity: 0,
//     y: -20,
//     scale: 0.96,
//     transition: {
//       duration: 0.25,
//       ease: "easeIn",
//     },
//   },
// };

// export default function ProteinPacks() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const packs =
//     PROTEIN_PACKS[activeCategory] ?? PROTEIN_PACKS.all;

//   // Handle pack button click
//   const handleViewPack = (pack) => {
//     if (pack.buttonLink === "#app-promo") {
//       document.getElementById("app-promo")?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });

//       return;
//     }

//     window.location.href = pack.buttonLink;
//   };

//   return (
//     <section
//       id="protein-packs"
//       className="overflow-hidden bg-[#f7faf5] py-14 sm:py-16 lg:py-5"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Heading and description */}
//         <div className="mb-6 flex flex-col gap-5">

//           <div className="max-w-2xl">

//             {/* Section tag animation */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.6 }}
//             >
//               <SectionTag>PROTEIN PACKS</SectionTag>
//             </motion.div>

//             {/* Animated heading */}
//             <AnimatedHeading className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#102e2b] sm:text-3xl lg:text-4xl">
//               Daily. Weekly. Monthly Packs
//             </AnimatedHeading>

//             {/* Description animation */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.7 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base"
//             >
//               Convenient protein packs for your lifestyle, goals and family.
//               Browse all packs and choose your favorites on the EatProtein app.
//             </motion.p>

//           </div>

//           {/* Category filter below description */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap items-center gap-2"
//           >
//             {PACK_CATEGORIES.map((category) => {
//               const isActive = activeCategory === category.id;

//               return (
//                 <motion.button
//                   key={category.id}
//                   type="button"
//                   onClick={() => setActiveCategory(category.id)}
//                   aria-pressed={isActive}
//                   whileHover={{ y: -3, scale: 1.04 }}
//                   whileTap={{ scale: 0.96 }}
//                   transition={{ duration: 0.2 }}
//                   className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
//                     isActive
//                       ? "border-[#087d3d] bg-[#087d3d] text-white shadow-sm"
//                       : "border-[#d6e5d8] bg-white text-[#28543b] hover:border-[#168344] hover:bg-green-50"
//                   }`}
//                 >
//                   {category.label}
//                 </motion.button>
//               );
//             })}
//           </motion.div>

//         </div>

//         {/* Animated protein pack cards */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory}
//             variants={cardContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.12 }}
//             exit="exit"
//             className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
//           >
//             {packs.map((pack, index) => {
//               const type = PACK_TYPES[index];
//               const Icon = type.icon;

//               return (
//                 <motion.article
//                   key={`${activeCategory}-${type.id}`}
//                   variants={cardAnimation}
//                   whileHover={{
//                     y: -8,
//                     scale: 1.015,
//                     boxShadow:
//                       "0px 15px 30px rgba(8, 125, 61, 0.12)",
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeOut",
//                   }}
//                   className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white p-4 shadow-sm sm:p-5 ${
//                     index === 1
//                       ? "border-[#a5d9b0]"
//                       : "border-[#e7eee6]"
//                   }`}
//                 >

//                   {/* Card content */}
//                   <div className="flex flex-1 items-start gap-3">

//                     <div className="min-w-0 flex-1">

//                       {/* Icon animation */}
//                       {/* <motion.div
//                         initial={{
//                           opacity: 0,
//                           scale: 0.6,
//                           rotate: -15,
//                         }}
//                         whileInView={{
//                           opacity: 1,
//                           scale: 1,
//                           rotate: 0,
//                         }}
//                         viewport={{ once: true }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.2,
//                           type: "spring",
//                           stiffness: 180,
//                         }}
//                         className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${type.iconBg}`}
//                       >
//                         <Icon
//                           size={20}
//                           className={type.iconColor}
//                         />
//                       </motion.div> */}

//                       {/* Pack title */}
//                       <h3 className="text-base font-extrabold leading-snug text-[#102e2b] sm:text-lg">
//                         {pack.title}
//                       </h3>

//                       {/* Pack description */}
//                       <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm">
//                         {pack.description}
//                       </p>

//                       {/* Features */}
//                       <ul className="mt-3 space-y-2">
//                         {pack.features.map((feature, featureIndex) => (
//                           <motion.li
//                             key={feature}
//                             initial={{
//                               opacity: 0,
//                               x: -12,
//                             }}
//                             whileInView={{
//                               opacity: 1,
//                               x: 0,
//                             }}
//                             viewport={{ once: true }}
//                             transition={{
//                               duration: 0.4,
//                               delay: 0.25 + featureIndex * 0.08,
//                             }}
//                             className="flex items-start gap-2 text-[10px] leading-4 text-gray-700 sm:text-xs"
//                           >
//                             <CheckCircle2
//                               size={14}
//                               className="mt-0.5 shrink-0 fill-[#168344] text-white"
//                               strokeWidth={2.5}
//                             />

//                             <span>{feature}</span>
//                           </motion.li>
//                         ))}
//                       </ul>

//                     </div>

//                     {/* Food image animation */}
//                     <motion.div
//                       whileHover={{ scale: 1.06 }}
//                       transition={{ duration: 0.35 }}
//                       className="mt-2 w-[38%] shrink-0 overflow-hidden rounded-xl sm:w-[40%]"
//                     >
//                       <img
//                         src={pack.image}
//                         alt={pack.title}
//                         loading="lazy"
//                         className="aspect-[4/5]  w-full rounded-xl object-cover sm:aspect-square"
//                       />
//                     </motion.div>

//                   </div>

//                   {/* Card action */}
//                   <div className="mt-4 flex justify-end border-t border-gray-100 pt-3">

//                     <motion.button
//                       type="button"
//                       onClick={() => handleViewPack(pack)}
//                       whileHover={{ x: 4 }}
//                       whileTap={{ scale: 0.96 }}
//                       transition={{ duration: 0.2 }}
//                       className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#91c7a2] bg-white px-4 py-2 text-xs font-bold text-[#087d3d] transition-colors duration-200 hover:bg-green-50 sm:text-sm"
//                     >
//                       {pack.buttonLabel}

//                       <ArrowRight size={15} />
//                     </motion.button>

//                   </div>

//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         </AnimatePresence>

//         {/* Supporting note */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-5 text-center text-xs leading-5 text-gray-500"
//         >
//           Explore food options that fit your preferences and daily routine.
//         </motion.p>

//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react";

// import {
//   motion,
//   AnimatePresence,
// } from "framer-motion";

// import SectionTag from "./SectionTag";
// import AnimatedHeading from "./AnimatedHeading";

// import {
//   PACK_CATEGORIES,
//   PACK_TYPES,
//   PROTEIN_PACKS,
// } from "../data/proteinPacksData";

// // Card animation container
// const cardContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.18,
//       delayChildren: 0.1,
//     },
//   },
// };

// // Individual card animation
// const cardAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 55,
//     scale: 0.94,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },

//   exit: {
//     opacity: 0,
//     y: -20,
//     scale: 0.96,
//     transition: {
//       duration: 0.25,
//       ease: "easeIn",
//     },
//   },
// };

// export default function ProteinPacks() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const packs =
//     PROTEIN_PACKS[activeCategory] ?? PROTEIN_PACKS.all;

//   // Handle pack button click
//   const handleViewPack = (pack) => {
//     if (pack.buttonLink === "#app-promo") {
//       document.getElementById("app-promo")?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });

//       return;
//     }

//     window.location.href = pack.buttonLink;
//   };

//   return (
//     <section
//       id="protein-packs"
//       className="overflow-hidden bg-[#f7faf5] py-14 sm:py-16 lg:py-5"
//     >
//       <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

//         {/* Heading and description */}
//         <div className="mb-6 flex flex-col gap-5">

//           <div className="max-w-2xl">

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.6 }}
//             >
//               <SectionTag>PROTEIN PACKS</SectionTag>
//             </motion.div>

//             <AnimatedHeading className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#102e2b] sm:text-3xl lg:text-4xl">
//               Daily. Weekly. Monthly Packs
//             </AnimatedHeading>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.7 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base"
//             >
//               Convenient protein packs for your lifestyle, goals and family.
//               Browse all packs and choose your favorites on the EatProtein app.
//             </motion.p>

//           </div>

//           {/* Category filter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap items-center gap-2"
//           >
//             {PACK_CATEGORIES.map((category) => {
//               const isActive = activeCategory === category.id;

//               return (
//                 <motion.button
//                   key={category.id}
//                   type="button"
//                   onClick={() => setActiveCategory(category.id)}
//                   aria-pressed={isActive}
//                   whileHover={{ y: -3, scale: 1.04 }}
//                   whileTap={{ scale: 0.96 }}
//                   transition={{ duration: 0.2 }}
//                   className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
//                     isActive
//                       ? "border-[#087d3d] bg-[#087d3d] text-white shadow-sm"
//                       : "border-[#d6e5d8] bg-white text-[#28543b] hover:border-[#168344] hover:bg-green-50"
//                   }`}
//                 >
//                   {category.label}
//                 </motion.button>
//               );
//             })}
//           </motion.div>

//         </div>

//         {/* Animated protein pack cards */}
//         <AnimatePresence mode="wait">

//           <motion.div
//             key={activeCategory}
//             variants={cardContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.12 }}
//             exit="exit"
//             className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3"
//           >

//             {packs.map((pack, index) => {

//               const type = PACK_TYPES[index];

//               const planLabel =
//                 pack.planLabel ||
//                 `${pack.title.split(" ")[0]} PLAN`;

//               return (
//                 <motion.article
//                   key={`${activeCategory}-${type?.id ?? index}`}
//                   variants={cardAnimation}
//                   whileHover={{
//                     y: -8,
//                     scale: 1.015,
//                     boxShadow:
//                       "0px 15px 30px rgba(8, 125, 61, 0.12)",
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeOut",
//                   }}
//                   className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-[#ffffff] p-4 shadow-sm sm:p-4 ${
//                     index === 1
//                       ? "border-[#a5d9b0]"
//                       : "border-[#d9eee0]"
//                   }`}
//                 >

//                   {/* Card content */}
//                   <div className="relative flex flex-1 items-stretch gap-2">

//                     {/* LEFT TEXT CONTENT */}
//                     <div className="relative z-10 flex min-w-0 w-[60%] flex-col items-start">

//                       {/* Plan badge */}
//                       {/* <span className="inline-flex max-w-full items-center rounded-full bg-[#c9efda] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#087d3d] sm:px-3 sm:text-[10px]">
//                         {planLabel}
//                       </span> */}

//                       {/* Pack title */}
//                       <h3 className="mt-2 text-base font-black leading-tight tracking-tight text-[#102e2b] sm:text-lg">
//                         {pack.title}
//                       </h3>

//                       {/* Description */}
//                       <p className="mt-1.5 text-[10px] leading-4 text-[#52665c] sm:text-xs sm:leading-5">
//                         {pack.description}
//                       </p>

//                       {/* Features */}
//                       <ul className="mt-3 space-y-2">

//                         {pack.features.map((feature, featureIndex) => (

//                           <motion.li
//                             key={feature}
//                             initial={{
//                               opacity: 0,
//                               x: -12,
//                             }}
//                             whileInView={{
//                               opacity: 1,
//                               x: 0,
//                             }}
//                             viewport={{ once: true }}
//                             transition={{
//                               duration: 0.4,
//                               delay: 0.25 + featureIndex * 0.08,
//                             }}
//                             className="flex items-start gap-1.5 text-[10px] leading-4 text-[#40594d] sm:gap-2 sm:text-xs"
//                           >

//                             <span className="mt-0.5 flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#168b57] sm:h-[19px] sm:w-[19px]">

//                               <CheckCircle2
//                                 size={12}
//                                 className="text-white"
//                                 strokeWidth={2.5}
//                               />

//                             </span>

//                             <span>{feature}</span>

//                           </motion.li>

//                         ))}

//                       </ul>

//                       {/* CTA Button - Below features */}
// <motion.button
//   type="button"
//   onClick={() => handleViewPack(pack)}
//   whileHover={{
//     scale: 1.04,
//     boxShadow: "0 6px 16px rgba(8,125,61,0.2)",
//   }}
//   whileTap={{ scale: 0.96 }}
//   transition={{ duration: 0.2 }}
//   className="mt-4 inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-[#07864d] px-5 py-2 text-[11px] font-bold text-white shadow-sm transition-colors duration-200 hover:bg-[#066c3d] sm:min-h-10 sm:px-6 sm:text-xs"
// >
//   {pack.buttonLabel || "View in App"}
//   <ArrowRight size={15} />
// </motion.button>

//                     </div>

//                     {/* RIGHT CURVED FOOD IMAGE */}
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.4 }}
//                       className="relative mt-1 min-w-0 w-[38%] shrink-0 self-stretch overflow-hidden"
//                       style={{
//                         clipPath:
//                           "ellipse(95% 90% at 95% 50%)",
//                       }}
//                     >

//                       <img
//                         src={pack.image}
//                         alt={pack.title}
//                         loading="lazy"
//                         className="absolute inset-0 h-full w-full object-cover"
//                       />

//                     </motion.div>

//                   </div>

//                   {/* Card action */}
//                   {/* <div className="relative z-10 mt-4 flex justify-start border-t border-[#d4eadb] pt-3">

//                     <motion.button
//                       type="button"
//                       onClick={() => handleViewPack(pack)}
//                       whileHover={{
//                         scale: 1.04,
//                         boxShadow: "0 6px 16px rgba(8,125,61,0.2)",
//                       }}
//                       whileTap={{ scale: 0.96 }}
//                       transition={{ duration: 0.2 }}
//                       className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-[#07864d] px-5 py-2 text-[11px] font-bold text-white shadow-sm transition-colors duration-200 hover:bg-[#066c3d] sm:min-h-10 sm:px-6 sm:text-xs"
//                     >
//                       {pack.buttonLabel || "View in App"}

//                       <ArrowRight size={15} />

//                     </motion.button>

//                   </div> */}

//                 </motion.article>
//               );
//             })}

//           </motion.div>

//         </AnimatePresence>

//         {/* Supporting note */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-5 text-center text-xs leading-5 text-gray-500"
//         >
//           Explore food options that fit your preferences and daily routine.
//         </motion.p>

//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import SectionTag from "./SectionTag";
import AnimatedHeading from "./AnimatedHeading";

import {
  PACK_CATEGORIES,
  PACK_TYPES,
  PROTEIN_PACKS,
} from "../data/proteinPacksData";

// Card animation container
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

// Individual card animation
const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

export default function ProteinPacks() {
  const [activeCategory, setActiveCategory] = useState("all");

  const packs =
    PROTEIN_PACKS[activeCategory] ?? PROTEIN_PACKS.all;

  // Handle pack button click
  const handleViewPack = (pack) => {
    if (pack.buttonLink === "#app-promo") {
      document.getElementById("app-promo")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    window.location.href = pack.buttonLink;
  };

  return (
    <section
      id="protein-packs"
      className="w-full overflow-hidden bg-[#f7faf5] py-10 sm:py-12 md:py-14 lg:py-12 xl:py-14"
    >
      {/* Common section container */}
      <div className="mx-auto w-full max-w-[1500px] px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12 2xl:px-14">

        {/* Heading and description */}
        <div className="mb-6 flex flex-col gap-5 sm:mb-7 lg:mb-8">

          {/* Section heading */}
          <div className="max-w-2xl">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTag>PROTEIN PACKS</SectionTag>
            </motion.div>

            <AnimatedHeading className="mt-3 text-[23px] font-extrabold leading-tight tracking-tight text-[#102e2b] min-[375px]:text-2xl sm:text-3xl lg:text-4xl">
              Daily. Weekly. Monthly Packs
            </AnimatedHeading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-2 max-w-xl text-xs leading-5 text-gray-600 min-[375px]:text-sm sm:text-base sm:leading-6"
            >
              Convenient protein packs for your lifestyle, goals and family.
              Browse all packs and choose your favorites on the EatProtein app.
            </motion.p>

          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2"
          >
            {PACK_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className={`min-h-9 rounded-full border px-3 py-2 text-[11px] font-semibold transition-all duration-200 min-[375px]:px-4 min-[375px]:text-xs sm:min-h-10 sm:text-sm ${
                    isActive
                      ? "border-[#087d3d] bg-[#087d3d] text-white shadow-sm"
                      : "border-[#d6e5d8] bg-white text-[#28543b] hover:border-[#168344] hover:bg-green-50"
                  }`}
                >
                  {category.label}
                </motion.button>
              );
            })}
          </motion.div>

        </div>

        {/* Animated protein pack cards */}
        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            exit="exit"
            className="grid grid-cols-1 gap-3 min-[600px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4 xl:gap-5"
          >

            {packs.map((pack, index) => {

              const type = PACK_TYPES[index];

              const planLabel =
                pack.planLabel ||
                `${pack.title.split(" ")[0]} PLAN`;

              return (
                <motion.article
                  key={`${activeCategory}-${type?.id ?? index}`}
                  variants={cardAnimation}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    boxShadow:
                      "0px 15px 30px rgba(8, 125, 61, 0.12)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className={`relative flex min-w-0 flex-col overflow-hidden rounded-xl border bg-white p-3 shadow-sm min-[375px]:p-4 sm:rounded-2xl lg:p-3 xl:p-4 ${
                    index === 1
                      ? "border-[#a5d9b0]"
                      : "border-[#d9eee0]"
                  }`}
                >

                  {/* Card content */}
                  <div className="relative flex flex-1 items-stretch gap-1.5 min-[375px]:gap-2">

                    {/* LEFT TEXT CONTENT */}
                    <div className="relative z-10 flex w-[59%] min-w-0 flex-col items-start">

                      {/* Pack title */}
                      <h3 className="mt-2 break-words text-sm font-black leading-tight tracking-tight text-[#102e2b] min-[375px]:text-base sm:text-lg lg:text-base xl:text-lg">
                        {pack.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-[10px] leading-4 text-[#52665c] min-[375px]:text-[11px] sm:text-xs sm:leading-5">
                        {pack.description}
                      </p>

                      {/* Features */}
<ul className="mt-3 mb-5 w-full space-y-2">
  {pack.features.map((feature, featureIndex) => (
    <motion.li
      key={feature}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.25 + featureIndex * 0.08,
      }}
      className="flex min-w-0 items-start gap-1.5 text-[10px] leading-4 text-[#40594d] min-[375px]:gap-2 min-[375px]:text-[11px] sm:text-xs"
    >
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#168b57] sm:h-[19px] sm:w-[19px]">
        <CheckCircle2
          size={12}
          className="text-white"
          strokeWidth={2.5}
        />
      </span>

      <span className="min-w-0 break-words">{feature}</span>
    </motion.li>
  ))}
</ul>

{/* CTA Button */}
<motion.button
  type="button"
  onClick={() => handleViewPack(pack)}
  whileHover={{
    scale: 1.04,
    boxShadow: "0 6px 16px rgba(8,125,61,0.2)",
  }}
  whileTap={{ scale: 0.96 }}
  transition={{ duration: 0.2 }}
  className="mt-auto inline-flex min-h-8 max-w-full items-center justify-center gap-1.5 rounded-full bg-[#07864d] px-3 py-2 text-[10px] font-bold text-white shadow-sm transition-colors duration-200 hover:bg-[#066c3d] min-[375px]:gap-2 min-[375px]:px-4 min-[375px]:text-[11px] sm:min-h-10 sm:px-5 sm:text-xs"
>
  <span className="truncate">
    {pack.buttonLabel || "View in App"}
  </span>
  <ArrowRight size={14} className="shrink-0" />
</motion.button>
                    </div>

                    {/* RIGHT CURVED FOOD IMAGE */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative mt-1 min-w-0 w-[39%] shrink-0 self-stretch overflow-hidden"
                      style={{
                        clipPath: "ellipse(95% 90% at 95% 50%)",
                      }}
                    >

                      <img
                        src={pack.image}
                        alt={pack.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                    </motion.div>

                  </div>

                </motion.article>
              );
            })}

          </motion.div>

        </AnimatePresence>

        {/* Supporting note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-center text-[11px] leading-5 text-gray-500 sm:mt-6 sm:text-xs"
        >
          Explore food options that fit your preferences and daily routine.
        </motion.p>

      </div>
    </section>
  );
}
