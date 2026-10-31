// import { useState } from "react";
// import {
//   ArrowRight,
//   UsersRound,
//   ShoppingCart,
//   Megaphone,
//   Heart,
//   MapPin,
//   ChartNoAxesCombined,
//   ClipboardList,
//   Store,
//   GraduationCap,
//   Smartphone,
//   PackageCheck,
//   CheckCircle2,
//   FileText,
//   Boxes,
//   ShieldCheck,
//   Search,
//   LoaderCircle,
//   Leaf,
// } from "lucide-react";

// /* =========================================
//    STORE PARTNER PAGE DATA
// ========================================= */

// const benefits = [
//   {
//     icon: UsersRound,
//     title: "More Visibility",
//     description:
//       "Get discovered by customers in your local area through the EatProtein app.",
//     iconStyle: "bg-green-100 text-green-700",
//   },
//   {
//     icon: ShoppingCart,
//     title: "Increase Store Orders",
//     description:
//       "Receive online orders from nearby customers looking for healthy, high-protein foods.",
//     iconStyle: "bg-orange-100 text-orange-600",
//   },
//   {
//     icon: Megaphone,
//     title: "Marketing Support",
//     description:
//       "Get featured in the app, promotions and local marketing campaigns.",
//     iconStyle: "bg-blue-100 text-blue-700",
//   },
//   {
//     icon: Heart,
//     title: "Be Part of a Healthier Community",
//     description:
//       "Support people in making better food choices and build long-term customer trust.",
//     iconStyle: "bg-rose-100 text-rose-600",
//   },
// ];

// const onboardingSteps = [
//   {
//     number: "1",
//     icon: FileText,
//     title: "Register Your Store",
//     description:
//       "Fill out the store registration form with your basic details.",
//     color: "bg-green-700",
//   },
//   {
//     number: "2",
//     icon: Store,
//     title: "Verification & Setup",
//     description:
//       "Our team verifies your details and helps you set up your store on the platform.",
//     color: "bg-orange-500",
//   },
//   {
//     number: "3",
//     icon: GraduationCap,
//     title: "List Your Products",
//     description:
//       "Add your high-protein products with accurate information.",
//     color: "bg-blue-600",
//   },
//   {
//     number: "4",
//     icon: Smartphone,
//     title: "Start Receiving Orders",
//     description:
//       "Go live and start getting orders from nearby customers through the EatProtein app.",
//     color: "bg-green-700",
//   },
// ];

// const supportItems = [
//   "Store listing on EatProtein app",
//   "Guidance on product listing and nutrition information",
//   "Marketing and promotional support",
//   "Ongoing support from our team",
//   "Access to a community of health-conscious customers",
// ];

// const requirements = [
//   {
//     icon: Store,
//     text: "Local food stores, supermarkets, meat shops, organic stores, or healthy food retailers",
//   },
//   {
//     icon: MapPin,
//     text: "Must be in our serviceable area",
//   },
//   {
//     icon: FileText,
//     text: "Valid business registration (as per local norms)",
//   },
//   {
//     icon: Boxes,
//     text: "Ability to provide quality products and fulfill orders",
//   },
//   {
//     icon: Heart,
//     text: "Commitment to offer accurate product information",
//   },
// ];

// const communityBenefits = [
//   {
//     icon: UsersRound,
//     text: "More Customers",
//     color: "bg-green-100 text-green-700",
//   },
//   {
//     icon: ChartNoAxesCombined,
//     text: "Higher Order Volume",
//     color: "bg-green-100 text-green-700",
//   },
//   {
//     icon: UsersRound,
//     text: "Local Community Trust",
//     color: "bg-blue-100 text-blue-700",
//   },
//   {
//     icon: Heart,
//     text: "Be Part of a Bigger Mission",
//     color: "bg-rose-100 text-rose-600",
//   },
// ];

// /* =========================================
//    REUSABLE SECTION LABEL
// ========================================= */

// function SectionLabel({ children }) {
//   return (
//     <span className="inline-flex w-fit items-center rounded-full bg-green-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-green-800 sm:text-xs">
//       {children}
//     </span>
//   );
// }

// /* =========================================
//    REUSABLE SECTION HEADING
// ========================================= */

// function SectionHeading({ eyebrow, title, description }) {
//   return (
//     <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
//       {eyebrow && (
//         <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
//           {eyebrow}
//         </p>
//       )}

//       <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
//         {title}
//       </h2>

//       {description && (
//         <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// /* =========================================
//    REUSABLE CHECK ITEM
// ========================================= */

// function CheckItem({ children }) {
//   return (
//     <li className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
//       <CheckCircle2
//         size={19}
//         className="mt-0.5 shrink-0 fill-green-700 text-white"
//       />
//       <span>{children}</span>
//     </li>
//   );
// }

// /* =========================================
//    STORE PARTNER PAGE
// ========================================= */

// export default function StorePartner() {
//   const [formData, setFormData] = useState({
//     storeName: "",
//     ownerName: "",
//     phone: "",
//     email: "",
//     storeType: "",
//     message: "",
//   });

//   const [formStatus, setFormStatus] = useState({
//     type: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setFormStatus({ type: "", message: "" });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (isSubmitting) return;

//     setIsSubmitting(true);
//     setFormStatus({ type: "", message: "" });

//     try {
//       const response = await fetch("/api/store-partner-inquiry", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(
//           result.message ||
//             "Unable to submit your registration. Please try again."
//         );
//       }

//       setFormStatus({
//         type: "success",
//         message:
//           result.message ||
//           "Your store registration has been sent successfully. Our team will contact you.",
//       });

//       setFormData({
//         storeName: "",
//         ownerName: "",
//         phone: "",
//         email: "",
//         storeType: "",
//         message: "",
//       });
//     } catch (error) {
//       setFormStatus({
//         type: "error",
//         message:
//           error.message ||
//           "Something went wrong. Please try again later.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const scrollToRegistration = () => {
//     document.getElementById("store-registration")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   const scrollToBenefits = () => {
//     document.getElementById("store-benefits")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <main className="relative min-h-screen w-full overflow-x-clip bg-white font-sans text-slate-900">
//       {/* =====================================
//           1. HERO SECTION
//       ===================================== */}

//       <section
//         id="store-partner"
//         className="relative isolate overflow-hidden bg-[#f0faed]"
//       >
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f6fff3] via-[#f0faed] to-[#e5f4d9]" />

//         <div className="mx-auto grid max-w-[1400px] items-center gap-7 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-5 lg:px-10 lg:py-14">
//           {/* Hero content */}

//           <div className="relative z-20 order-1">
//             <SectionLabel>For Store Owners</SectionLabel>

//             <h1 className="mt-3 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#101e28] sm:text-5xl lg:text-[52px]">
//               Join EatProtein
//               <span className="block">
//                 as a{" "}
//                 <span className="text-green-700">Store Partner</span>
//               </span>
//             </h1>

//             <p className="mt-4 max-w-lg text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
//               List your store, reach more customers and grow your sales
//               with EatProtein.
//             </p>

//             <div className="mt-5 flex flex-wrap gap-3">
//               <button
//                 type="button"
//                 onClick={scrollToRegistration}
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4510b] px-5 py-3 text-xs font-extrabold text-white shadow-md shadow-orange-600/15 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:px-6 sm:text-sm"
//               >
//                 Register Your Store
//                 <ArrowRight size={16} />
//               </button>

//               <button
//                 type="button"
//                 onClick={scrollToBenefits}
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-green-700/50 bg-white/90 px-5 py-3 text-xs font-extrabold text-green-800 transition hover:bg-green-50 sm:px-6 sm:text-sm"
//               >
//                 View Benefits
//               </button>
//             </div>

//             {/* Four small hero benefits */}

//             <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
//               {[
//                 { icon: UsersRound, text: "Reach Nearby Customers" },
//                 { icon: ChartNoAxesCombined, text: "Increase Store Orders" },
//                 { icon: Megaphone, text: "Marketing Support" },
//                 { icon: Heart, text: "Be Part of a Healthier Community" },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.text}
//                     className="flex flex-col items-center text-center"
//                   >
//                     <div className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-green-800 shadow-sm sm:h-11 sm:w-11">
//                       <Icon size={22} strokeWidth={2.2} />
//                     </div>

//                     <p className="mt-2 max-w-28 text-[10px] font-bold leading-4 text-slate-800 sm:text-[11px]">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Hero artwork */}

//           <div className="relative order-2 min-w-0">
//             <div className="absolute inset-6 rounded-full bg-green-200/50 blur-3xl" />

//             <img
//               src="/assets/store-partner-hero.png"
//               alt="EatProtein store partner in a healthy food store"
//               fetchPriority="high"
//               className="relative z-10 mx-auto max-h-[420px] w-full rounded-2xl object-contain object-center sm:max-h-[470px] lg:max-h-[500px]"
//             />

//             {/* Decorative message cards */}

//             <div className="absolute right-0 top-3 z-20 hidden w-40 flex-col gap-2 sm:flex lg:-right-1 lg:top-5">
//               {[
//                 { icon: MapPin, text: "Get Discovered by Local Customers" },
//                 { icon: ShoppingCart, text: "Receive App Orders" },
//                 { icon: ChartNoAxesCombined, text: "Grow Your Business" },
//                 { icon: UsersRound, text: "Be Part of a Trusted Platform" },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.text}
//                     className="flex items-center gap-2 rounded-xl border border-green-50 bg-white/95 p-2 shadow-md"
//                   >
//                     <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-50 text-green-700">
//                       <Icon size={17} />
//                     </span>

//                     <p className="text-[9px] font-extrabold leading-3.5 text-slate-800">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="absolute bottom-3 left-3 z-20 rounded-xl bg-white/90 px-3 py-2 shadow-md sm:bottom-5 sm:left-4">
//               <p className="text-[10px] font-extrabold text-green-800 sm:text-xs">
//                 Healthy Food Choices
//               </p>
//               <p className="text-[10px] text-slate-600 sm:text-xs">
//                 Start Here!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           2. WHY PARTNER WITH EATPROTEIN
//       ===================================== */}

//       <section
//         id="store-benefits"
//         className="scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-10"
//       >
//         <div className="mx-auto max-w-[1400px]">
//           <SectionHeading
//             eyebrow="Partner with a purpose"
//             title={
//               <>
//                 Why Partner with{" "}
//                 <span className="text-green-700">EatProtein?</span>
//               </>
//             }
//             description="We work with local food stores to make healthy protein foods accessible to more people."
//           />

//           <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
//             {benefits.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.025)] transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-5"
//                 >
//                   <div
//                     className={`grid h-11 w-11 place-items-center rounded-xl ${item.iconStyle} transition group-hover:scale-105`}
//                   >
//                     <Icon size={24} />
//                   </div>

//                   <h3 className="mt-3 text-sm font-black leading-5 text-slate-900 sm:text-base">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
//                     {item.description}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           3. HOW IT WORKS
//       ===================================== */}

//       <section
//         id="store-how-it-works"
//         className="mx-3 rounded-2xl bg-[#eff9e9] px-4 py-7 sm:mx-5 sm:px-6 sm:py-9 lg:mx-6 lg:px-8"
//       >
//         <div className="mx-auto max-w-[1360px]">
//           <SectionLabel>Simple Onboarding</SectionLabel>

//           <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
//             How It Works
//           </h2>

//           <p className="mt-1 text-xs text-slate-600 sm:text-sm">
//             Get your store live on EatProtein in just a few easy steps.
//           </p>

//           <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
//             {onboardingSteps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <article
//                   key={step.number}
//                   className="relative flex gap-3 sm:flex-col sm:items-start"
//                 >
//                   <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row sm:gap-3">
//                     {/*<span
//                       className={`grid h-8 w-8 place-items-center rounded-full ${step.color} text-xs font-black text-white`}
//                     >
//                       {step.number}
//                     </span>*/}

//                     <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-green-800 shadow-sm sm:h-14 sm:w-14">
//                       <Icon size={24} />
//                     </span>
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-black text-slate-900 sm:mt-3 sm:text-base">
//                       {step.title}
//                     </h3>

//                     <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
//                       {step.description}
//                     </p>
//                   </div>

//                   {index < onboardingSteps.length - 1 && (
//                     <ArrowRight
//                       size={21}
//                       className="absolute -right-1 top-4 hidden text-slate-400 lg:block"
//                     />
//                   )}
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           4. SUPPORT AND REQUIREMENTS
//       ===================================== */}

//       <section
//         id="store-requirements"
//         className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
//       >
//         <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-12 lg:gap-6">
//           {/* What you get */}

//           <article className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 lg:col-span-5">
//             <SectionLabel>What You Get</SectionLabel>

//             <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
//               Our Support to Grow Your Store
//             </h2>

//             <ul className="mt-4 space-y-2">
//               {supportItems.map((item) => (
//                 <CheckItem key={item}>{item}</CheckItem>
//               ))}
//             </ul>
//           </article>

//           {/* App mockup */}

//           <div className="relative flex min-h-[240px] items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f2faed] to-[#e0f2d8] lg:col-span-3">
//             <img
//               src="/assets/eatprotein-app.png"
//               alt="EatProtein mobile application showing food categories"
//               loading="lazy"
//               className="max-h-[320px] w-full object-contain object-bottom"
//             />
//           </div>

//           {/* Who can join */}

//           <article className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 lg:col-span-4">
//             <SectionLabel>Who Can Join</SectionLabel>

//             <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
//               Store Partner Requirements
//             </h2>

//             <ul className="mt-4 space-y-3">
//               {requirements.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <li
//                     key={item.text}
//                     className="flex items-start gap-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6"
//                   >
//                     <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-green-50 text-green-800">
//                       <Icon size={18} />
//                     </span>

//                     <span>{item.text}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </article>
//         </div>
//       </section>

//       {/* =====================================
//           5. COMMUNITY BANNER
//       ===================================== */}

//       <section
//         id="store-community"
//         className="relative isolate overflow-hidden bg-[#164d28]"
//       >
//         <img
//           src="/assets/store-partner-community.png"
//           alt="Healthy food store and local store partner community"
//           loading="lazy"
//           className="absolute inset-0 -z-20 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 -z-10 bg-green-950/35" />

//         <div className="mx-auto grid max-w-[1400px] items-center gap-5 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_300px] lg:px-10">
//           {/* Banner message */}

//           <div className="max-w-xl rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl sm:p-6">
//             <SectionLabel>Together for a Healthier Tomorrow</SectionLabel>

//             <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl">
//               Grow Your Business.
//               <span className="block text-green-700">
//                 Support a Healthier Community.
//               </span>
//             </h2>

//             <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
//               Join EatProtein as a store partner and be a part of the
//               movement to make high-protein, nutritious foods easily
//               accessible to everyone.
//             </p>

//             <button
//               type="button"
//               onClick={scrollToRegistration}
//               className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#f4510b] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-orange-600 sm:text-sm"
//             >
//               Register Your Store
//               <ArrowRight size={16} />
//             </button>
//           </div>

//           {/* Community benefits */}

//           <div className="grid gap-2 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl sm:grid-cols-2 lg:grid-cols-1">
//             {communityBenefits.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.text}
//                   className="flex items-center gap-3 rounded-xl p-2"
//                 >
//                   <span
//                     className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${item.color}`}
//                   >
//                     <Icon size={19} />
//                   </span>

//                   <p className="text-xs font-extrabold text-slate-800 sm:text-sm">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           6. STORE REGISTRATION FORM
//       ===================================== */}

//       <section
//         id="store-registration"
//         className="scroll-mt-20 bg-white px-3 py-5 sm:px-5 sm:py-7 lg:px-6"
//       >
//         <div className="mx-auto grid max-w-[1400px] gap-6 rounded-2xl border border-green-100 bg-[#f0f9e9] p-4 sm:p-6 lg:grid-cols-[0.8fr_1.8fr] lg:gap-8 lg:p-7">
//           {/* Form introduction */}

//           <div className="flex flex-col items-start justify-center">
//             <SectionLabel>Get Started Today</SectionLabel>

//             <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl">
//               Register Your Store
//             </h2>

//             <p className="mt-3 max-w-sm text-xs leading-6 text-slate-600 sm:text-sm">
//               Share your details and our team will get in touch with you
//               to complete the onboarding process.
//             </p>

//             <div className="mt-5 hidden items-center gap-2 text-sm font-bold text-green-800 lg:flex">
//               <ShieldCheck size={21} />
//               Simple and secure registration
//             </div>
//           </div>

//           {/* Registration form */}

//           <div className="min-w-0 rounded-xl bg-white p-4 shadow-sm sm:p-5">
//             {formStatus.type === "success" ? (
//               <div
//                 role="status"
//                 aria-live="polite"
//                 className="flex min-h-[300px] flex-col items-center justify-center px-4 py-8 text-center"
//               >
//                 <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-700">
//                   <CheckCircle2 size={35} />
//                 </span>

//                 <h3 className="mt-4 text-xl font-black text-green-800">
//                   Registration Submitted!
//                 </h3>

//                 <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
//                   {formStatus.message}
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setFormStatus({ type: "", message: "" })
//                   }
//                   className="mt-5 rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
//                 >
//                   Register Another Store
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className="mb-4">
//                   <h3 className="text-lg font-black text-slate-900">
//                     Store Registration
//                   </h3>

//                   <p className="mt-1 text-xs text-slate-500">
//                     Fields marked with * are required.
//                   </p>
//                 </div>

//                 {formStatus.type === "error" && (
//                   <div
//                     role="alert"
//                     className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-xs leading-5 text-red-700 sm:text-sm"
//                   >
//                     {formStatus.message}
//                   </div>
//                 )}

//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-3.5"
//                 >
//                   <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
//                     {/* Store name */}

//                     <div>
//                       <label
//                         htmlFor="storeName"
//                         className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
//                       >
//                         Store Name <span className="text-red-600">*</span>
//                       </label>

//                       <input
//                         id="storeName"
//                         name="storeName"
//                         type="text"
//                         value={formData.storeName}
//                         onChange={handleChange}
//                         placeholder="Enter your store name"
//                         autoComplete="organization"
//                         maxLength={150}
//                         required
//                         className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
//                       />
//                     </div>

//                     {/* Owner name */}

//                     <div>
//                       <label
//                         htmlFor="ownerName"
//                         className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
//                       >
//                         Owner Name <span className="text-red-600">*</span>
//                       </label>

//                       <input
//                         id="ownerName"
//                         name="ownerName"
//                         type="text"
//                         value={formData.ownerName}
//                         onChange={handleChange}
//                         placeholder="Enter owner name"
//                         autoComplete="name"
//                         maxLength={100}
//                         required
//                         className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
//                       />
//                     </div>

//                     {/* Phone */}

//                     <div>
//                       <label
//                         htmlFor="phone"
//                         className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
//                       >
//                         Phone Number <span className="text-red-600">*</span>
//                       </label>

//                       <input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="10-digit mobile number"
//                         autoComplete="tel"
//                         inputMode="numeric"
//                         pattern="[6-9][0-9]{9}"
//                         title="Enter a valid 10-digit Indian mobile number"
//                         maxLength={10}
//                         required
//                         className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
//                       />
//                     </div>

//                     {/* Email */}

//                     <div className="sm:col-span-2 lg:col-span-2">
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
//                       >
//                         Email Address <span className="text-red-600">*</span>
//                       </label>

//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email address"
//                         autoComplete="email"
//                         maxLength={254}
//                         required
//                         className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
//                       />
//                     </div>

//                     {/* Store type */}

//                     <div>
//                       <label
//                         htmlFor="storeType"
//                         className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
//                       >
//                         Store Type <span className="text-red-600">*</span>
//                       </label>

//                       <select
//                         id="storeType"
//                         name="storeType"
//                         value={formData.storeType}
//                         onChange={handleChange}
//                         required
//                         className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs text-slate-700 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
//                       >
//                         <option value="" disabled>
//                           Select store type
//                         </option>
//                         <option value="Grocery Store">Grocery Store</option>
//                         <option value="Supermarket">Supermarket</option>
//                         <option value="Organic Food Store">
//                           Organic Food Store
//                         </option>
//                         <option value="Meat Shop">Meat Shop</option>
//                         <option value="Dairy Store">Dairy Store</option>
//                         <option value="Health Food Store">
//                           Health Food Store
//                         </option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Message */}

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
//                     >
//                       Message (Optional)
//                     </label>

//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about your store or products"
//                       rows={3}
//                       maxLength={1000}
//                       className="min-h-20 w-full resize-y rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
//                     />
//                   </div>

//                   {/* Submit */}

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-700 to-green-800 px-5 py-3 text-xs font-extrabold text-white shadow-sm transition hover:from-green-800 hover:to-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <LoaderCircle
//                           size={17}
//                           className="animate-spin"
//                         />
//                         Submitting Registration...
//                       </>
//                     ) : (
//                       <>
//                         Submit Registration
//                         <ArrowRight
//                           size={17}
//                           className="transition-transform group-hover:translate-x-1"
//                         />
//                       </>
//                     )}
//                   </button>

//                   <p className="text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
//                     By submitting, you agree to be contacted about your
//                     EatProtein store partnership registration.
//                   </p>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   ArrowRight,
//   UsersRound,
//   ShoppingCart,
//   Megaphone,
//   Heart,
//   MapPin,
//   ChartNoAxesCombined,
//   ClipboardList,
//   Store,
//   GraduationCap,
//   Smartphone,
//   PackageCheck,
//   CheckCircle2,
//   FileText,
//   Boxes,
//   ShieldCheck,
//   Search,
//   LoaderCircle,
//   Leaf,
//   Store as StoreIcon,
//   X,
//   Send,
//   Navigation,
//   Building2,
// } from "lucide-react";

// /* =========================================
//    STORE PARTNER PAGE DATA
// ========================================= */

// const CATEGORIES = [
//   "Veg",
//   "Non Veg",
//   "Restaurants",
//   "Eggs",
//   "Dairy Foods",
//   "Fruits & Vegetables",
//   "Bakery & Sweets",
//   "Home Foods",
//   "Diet",
// ];

// const benefits = [
//   {
//     icon: UsersRound,
//     title: "More Visibility",
//     description:
//       "Get discovered by customers in your local area through the EatProtein app.",
//     iconStyle: "bg-green-100 text-green-700",
//   },
//   {
//     icon: ShoppingCart,
//     title: "Increase Store Orders",
//     description:
//       "Receive online orders from nearby customers looking for healthy, high-protein foods.",
//     iconStyle: "bg-orange-100 text-orange-600",
//   },
//   {
//     icon: Megaphone,
//     title: "Marketing Support",
//     description:
//       "Get featured in the app, promotions and local marketing campaigns.",
//     iconStyle: "bg-blue-100 text-blue-700",
//   },
//   {
//     icon: Heart,
//     title: "Be Part of a Healthier Community",
//     description:
//       "Support people in making better food choices and build long-term customer trust.",
//     iconStyle: "bg-rose-100 text-rose-600",
//   },
// ];

// const onboardingSteps = [
//   {
//     number: "1",
//     icon: FileText,
//     title: "Register Your Store",
//     description:
//       "Fill out the store registration form with your basic details.",
//     color: "bg-green-700",
//   },
//   {
//     number: "2",
//     icon: Store,
//     title: "Verification & Setup",
//     description:
//       "Our team verifies your details and helps you set up your store on the platform.",
//     color: "bg-orange-500",
//   },
//   {
//     number: "3",
//     icon: GraduationCap,
//     title: "List Your Products",
//     description: "Add your high-protein products with accurate information.",
//     color: "bg-blue-600",
//   },
//   {
//     number: "4",
//     icon: Smartphone,
//     title: "Start Receiving Orders",
//     description:
//       "Go live and start getting orders from nearby customers through the EatProtein app.",
//     color: "bg-green-700",
//   },
// ];

// const supportItems = [
//   "Store listing on EatProtein app",
//   "Guidance on product listing and nutrition information",
//   "Marketing and promotional support",
//   "Ongoing support from our team",
//   "Access to a community of health-conscious customers",
// ];

// const requirements = [
//   {
//     icon: Store,
//     text: "Local food stores, supermarkets, meat shops, organic stores, or healthy food retailers",
//   },
//   {
//     icon: MapPin,
//     text: "Must be in our serviceable area",
//   },
//   {
//     icon: FileText,
//     text: "Valid business registration (as per local norms)",
//   },
//   {
//     icon: Boxes,
//     text: "Ability to provide quality products and fulfill orders",
//   },
//   {
//     icon: Heart,
//     text: "Commitment to offer accurate product information",
//   },
// ];

// const communityBenefits = [
//   {
//     icon: UsersRound,
//     text: "More Customers",
//     color: "bg-green-100 text-green-700",
//   },
//   {
//     icon: ChartNoAxesCombined,
//     text: "Higher Order Volume",
//     color: "bg-green-100 text-green-700",
//   },
//   {
//     icon: UsersRound,
//     text: "Local Community Trust",
//     color: "bg-blue-100 text-blue-700",
//   },
//   {
//     icon: Heart,
//     text: "Be Part of a Bigger Mission",
//     color: "bg-rose-100 text-rose-600",
//   },
// ];

// /* =========================================
//    REUSABLE SECTION LABEL
// ========================================= */

// function SectionLabel({ children }) {
//   return (
//     <span className="inline-flex w-fit items-center rounded-full bg-green-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-green-800 sm:text-xs">
//       {children}
//     </span>
//   );
// }

// /* =========================================
//    REUSABLE SECTION HEADING
// ========================================= */

// function SectionHeading({ eyebrow, title, description }) {
//   return (
//     <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
//       {eyebrow && (
//         <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
//           {eyebrow}
//         </p>
//       )}

//       <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
//         {title}
//       </h2>

//       {description && (
//         <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// /* =========================================
//    REUSABLE CHECK ITEM
// ========================================= */

// function CheckItem({ children }) {
//   return (
//     <li className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
//       <CheckCircle2
//         size={19}
//         className="mt-0.5 shrink-0 fill-green-700 text-white"
//       />
//       <span>{children}</span>
//     </li>
//   );
// }

// /* =========================================
//    STORE PARTNER PAGE
// ========================================= */

// export default function StorePartner() {
//   const [formData, setFormData] = useState({
//     storeName: "",
//     ownerName: "",
//     phone: "",
//     email: "",
//     storeType: "",
//     message: "",
//   });

//   const [formStatus, setFormStatus] = useState({
//     type: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setFormStatus({ type: "", message: "" });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (isSubmitting) return;

//     setIsSubmitting(true);
//     setFormStatus({ type: "", message: "" });

//     try {
//       const response = await fetch("/api/store-partner-inquiry", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json().catch(() => ({}));

//       if (!response.ok) {
//         throw new Error(
//           result.message ||
//             "Unable to submit your registration. Please try again.",
//         );
//       }

//       setFormStatus({
//         type: "success",
//         message:
//           result.message ||
//           "Your store registration has been sent successfully. Our team will contact you.",
//       });

//       setFormData({
//         storeName: "",
//         ownerName: "",
//         phone: "",
//         email: "",
//         storeType: "",
//         message: "",
//       });
//     } catch (error) {
//       setFormStatus({
//         type: "error",
//         message:
//           error.message || "Something went wrong. Please try again later.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const [showModal, setShowModal] = useState(false);
//   const [modalForm, setModalForm] = useState({
//     storeName: "",
//     ownerName: "",
//     email: "",
//     phone: "",
//     categories: [],
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     radius: "3",
//     franchiseOwner: "",
//     gst: "",
//     fssai: "",
//   });
//   const [location, setLocation] = useState("");
//   const [modalMessage, setModalMessage] = useState("");
//   const [locationLoading, setLocationLoading] = useState(false);
//   const [isModalSubmitting, setIsModalSubmitting] = useState(false);

//   const updateModalField = (event) => {
//     const { name, value } = event.target;
//     setModalForm((previous) => ({ ...previous, [name]: value }));
//     setModalMessage("");
//   };

//   // Allow only one category to be selected at a time.
//   const toggleCategory = (category) => {
//     setModalForm((previous) => ({
//       ...previous,
//       categories: previous.categories[0] === category ? [] : [category],
//     }));
//     setModalMessage("");
//   };

//   const useMyLocation = () => {
//     if (!navigator.geolocation) {
//       setModalMessage(
//         "Location is not supported by this browser. Please enter your address manually.",
//       );
//       return;
//     }

//     setLocationLoading(true);
//     setModalMessage("");
//     navigator.geolocation.getCurrentPosition(
//       async ({ coords }) => {
//         const coordinates = `${coords.latitude}, ${coords.longitude}`;
//         setLocation(coordinates);
//         try {
//           const response = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}&addressdetails=1`,
//             { headers: { Accept: "application/json" } },
//           );
//           if (!response.ok) throw new Error("Address lookup failed");
//           const result = await response.json();
//           const a = result.address || {};
//           const city =
//             a.city || a.town || a.village || a.suburb || a.county || "";
//           const state = a.state || "";
//           const pincode = a.postcode || "";
//           setModalForm((previous) => ({
//             ...previous,
//             address: result.display_name || previous.address,
//             city: city || previous.city,
//             state: state || previous.state,
//             pincode: pincode || previous.pincode,
//           }));
//           setModalMessage(
//             "Your location and address have been filled in. Please review the details.",
//           );
//         } catch {
//           setModalMessage(
//             "Coordinates captured, but the address could not be resolved. Please enter the address manually.",
//           );
//         } finally {
//           setLocationLoading(false);
//         }
//       },
//       (error) => {
//         setLocationLoading(false);
//         setModalMessage(
//           error.code === 1
//             ? "Location permission was denied. Allow location access in your browser or enter the address manually."
//             : "Unable to get your location. Please try again or enter the address manually.",
//         );
//       },
//       { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
//     );
//   };

//   const handleModalSubmit = async (event) => {
//     event.preventDefault();

//     if (isModalSubmitting) return;

//     if (!modalForm.categories.length) {
//       setModalMessage("Please select one store category.");
//       return;
//     }

//     setIsModalSubmitting(true);
//     setModalMessage("");

//     try {
//       const templateParams = {
//         store_name: modalForm.storeName,
//         owner_name: modalForm.ownerName,
//         email: modalForm.email,
//         phone: modalForm.phone,
//         store_category: modalForm.categories[0],
//         address: modalForm.address,
//         city: modalForm.city,
//         state: modalForm.state,
//         pincode: modalForm.pincode,
//         service_radius: `${modalForm.radius} km`,
//         franchise_owner: modalForm.franchiseOwner,
//         gst_number: modalForm.gst || "Not provided",
//         fssai_number: modalForm.fssai || "Not provided",
//         location_coordinates: location || "Not provided",
//         message: "New EatProtein store partnership application",
//       };

//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_STORE_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_STORE_TEMPLATE_ID,
//         templateParams,
//         import.meta.env.VITE_EMAILJS_STORE_PUBLIC_KEY
//       );

//       setModalForm({
//         storeName: "",
//         ownerName: "",
//         email: "",
//         phone: "",
//         categories: [],
//         address: "",
//         city: "",
//         state: "",
//         pincode: "",
//         radius: "3",
//         franchiseOwner: "",
//         gst: "",
//         fssai: "",
//       });

//       setLocation("");
//       setModalMessage(
//         "Thank you for registering with EatProtein! Your application has been submitted successfully. Our team will contact you soon."
//       );
//     } catch (error) {
//       console.error("EmailJS store registration error:", error);
//       setModalMessage(
//         "We couldn't submit your application. Please check your connection and try again."
//       );
//     } finally {
//       setIsModalSubmitting(false);
//     }
//   };

//   const mapQuery = encodeURIComponent(
//     location || modalForm.address || modalForm.city || "India",
//   );

//   const scrollToRegistration = () => {
//     setModalMessage("");
//     setShowModal(true);
//   };

//   // const scrollToBenefits = () => {
//   //   document.getElementById("store-benefits")?.scrollIntoView({
//   //     behavior: "smooth",
//   //     block: "start",
//   //   });
//   // };

// const scrollToBenefits = () => {
//   const benefitsSection = document.getElementById("store-benefits");

//   if (!benefitsSection) return;

//   // Calculate the correct scroll position below the fixed navbar.
//   const navbar = document.querySelector("header");
//   const navbarHeight = navbar
//     ? navbar.getBoundingClientRect().height
//     : 95;

//   const sectionTop =
//     benefitsSection.getBoundingClientRect().top +
//     window.scrollY -
//     navbarHeight -
//     20;

//   window.scrollTo({
//     top: Math.max(0, sectionTop),
//     behavior: "smooth",
//   });
// };

//   return (
// <main className="relative m-0 min-h-screen w-full overflow-x-clip bg-white p-0 font-sans text-slate-900">      {/* =====================================
//           1. HERO SECTION
//       ===================================== */}

//      <section
//   id="store-partner"
// className="relative isolate m-0 block w-full overflow-hidden bg-gradient-to-r from-[#f6fff3] via-[#f0faed] to-[#e5f4d9] p-0">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f6fff3] via-[#f0faed] to-[#e5f4d9]" />

//         <div className="mx-auto grid max-w-[1400px] items-center gap-7 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-5 lg:px-10 lg:py-14">
//           {/* Hero content */}

//           <div className="relative z-20 order-1">
//             <SectionLabel>For Store Owners</SectionLabel>

//             <h1 className="mt-3 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#101e28] sm:text-5xl lg:text-[52px]">
//               Join EatProtein
//               <span className="block">
//                 as a <span className="text-green-700">Store Partner</span>
//               </span>
//             </h1>

//             <p className="mt-4 max-w-lg text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
//               List your store, reach more customers and grow your sales with
//               EatProtein.
//             </p>

//             <div className="mt-5 flex flex-wrap gap-3">
//               <button
//                 type="button"
//                 onClick={scrollToRegistration}
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4510b] px-5 py-3 text-xs font-extrabold text-white shadow-md shadow-orange-600/15 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:px-6 sm:text-sm"
//               >
//                 Register Your Store
//                 <ArrowRight size={16} />
//               </button>

//               <button
//                 type="button"
//                 onClick={scrollToBenefits}
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-green-700/50 bg-white/90 px-5 py-3 text-xs font-extrabold text-green-800 transition hover:bg-green-50 sm:px-6 sm:text-sm"
//               >
//                 View Benefits
//               </button>
//             </div>

//             {/* Four small hero benefits */}

//             <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
//               {[
//                 { icon: UsersRound, text: "Reach Nearby Customers" },
//                 { icon: ChartNoAxesCombined, text: "Increase Store Orders" },
//                 { icon: Megaphone, text: "Marketing Support" },
//                 { icon: Heart, text: "Be Part of a Healthier Community" },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.text}
//                     className="flex flex-col items-center text-center"
//                   >
//                     <div className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-green-800 shadow-sm sm:h-11 sm:w-11">
//                       <Icon size={22} strokeWidth={2.2} />
//                     </div>

//                     <p className="mt-2 max-w-28 text-[10px] font-bold leading-4 text-slate-800 sm:text-[11px]">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Hero artwork */}

//           <div className="relative order-2 min-w-0">
//             <div className="absolute inset-6 rounded-full bg-green-200/50 blur-3xl" />

//             <img
//               src="/assets/store-partner-hero.png"
//               alt="EatProtein store partner in a healthy food store"
//               fetchPriority="high"
//               className="relative z-10 mx-auto max-h-[420px] w-full rounded-2xl object-contain object-center sm:max-h-[470px] lg:max-h-[500px]"
//             />

//             {/* Decorative message cards */}

//             {/* <div className="absolute right-0 top-3 z-20 hidden w-40 flex-col gap-2 sm:flex lg:-right-1 lg:top-5">
//               {[
//                 { icon: MapPin, text: "Get Discovered by Local Customers" },
//                 { icon: ShoppingCart, text: "Receive App Orders" },
//                 { icon: ChartNoAxesCombined, text: "Grow Your Business" },
//                 { icon: UsersRound, text: "Be Part of a Trusted Platform" },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.text}
//                     className="flex items-center gap-2 rounded-xl border border-green-50 bg-white/95 p-2 shadow-md"
//                   >
//                     <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-50 text-green-700">
//                       <Icon size={17} />
//                     </span>

//                     <p className="text-[9px] font-extrabold leading-3.5 text-slate-800">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="absolute bottom-3 left-3 z-20 rounded-xl bg-white/90 px-3 py-2 shadow-md sm:bottom-5 sm:left-4">
//               <p className="text-[10px] font-extrabold text-green-800 sm:text-xs">
//                 Healthy Food Choices
//               </p>
//               <p className="text-[10px] text-slate-600 sm:text-xs">
//                 Start Here!
//               </p>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           2. WHY PARTNER WITH EATPROTEIN
//       ===================================== */}

//       <section
//         id="store-benefits"
//         className="scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-10"
//       >
//         <div className="mx-auto max-w-[1400px]">
//           <SectionHeading
//             eyebrow="Partner with a purpose"
//             title={
//               <>
//                 Why Partner with{" "}
//                 <span className="text-green-700">EatProtein?</span>
//               </>
//             }
//             description="We work with local food stores to make healthy protein foods accessible to more people."
//           />

//           <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
//             {benefits.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.025)] transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-5"
//                 >
//                   <div
//                     className={`grid h-11 w-11 place-items-center rounded-xl ${item.iconStyle} transition group-hover:scale-105`}
//                   >
//                     <Icon size={24} />
//                   </div>

//                   <h3 className="mt-3 text-sm font-black leading-5 text-slate-900 sm:text-base">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
//                     {item.description}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           3. HOW IT WORKS
//       ===================================== */}

//       <section
//         id="store-how-it-works"
//         className="mx-3 rounded-2xl bg-[#eff9e9] px-4 py-7 sm:mx-5 sm:px-6 sm:py-9 lg:mx-6 lg:px-8"
//       >
//         <div className="mx-auto max-w-[1360px]">
//           <SectionLabel>Simple Onboarding</SectionLabel>

//           <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
//             How It Works
//           </h2>

//           <p className="mt-1 text-xs text-slate-600 sm:text-sm">
//             Get your store live on EatProtein in just a few easy steps.
//           </p>

//           <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
//             {onboardingSteps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <article
//                   key={step.number}
//                   className="relative flex gap-3 sm:flex-col sm:items-start"
//                 >
//                   <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row sm:gap-3">
//                     {/*<span
//                       className={`grid h-8 w-8 place-items-center rounded-full ${step.color} text-xs font-black text-white`}
//                     >
//                       {step.number}
//                     </span>*/}

//                     <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-green-800 shadow-sm sm:h-14 sm:w-14">
//                       <Icon size={24} />
//                     </span>
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-black text-slate-900 sm:mt-3 sm:text-base">
//                       {step.title}
//                     </h3>

//                     <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
//                       {step.description}
//                     </p>
//                   </div>

//                   {index < onboardingSteps.length - 1 && (
//                     <ArrowRight
//                       size={21}
//                       className="absolute -right-1 top-4 hidden text-slate-400 lg:block"
//                     />
//                   )}
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           4. SUPPORT AND REQUIREMENTS
//       ===================================== */}

//       <section
//         id="store-requirements"
//         className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
//       >
//         <div className="mx-auto grid max-w-[1400px] items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-6">
//           {/* App mockup: first on mobile, centered and largest on desktop */}
//           <div className="relative order-first flex min-h-[380px] items-end justify-center overflow-hidden pt-6 sm:min-h-[460px] lg:order-none lg:min-h-[600px]">
//             {/* Glow behind the phone */}
//             <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/30 blur-3xl" />

//             <img
//               src="/assets/eatprotein-app.png"
//               alt="EatProtein mobile application showing food categories"
//               loading="lazy"
//               className="relative h-auto max-h-[440px] w-full object-contain object-bottom drop-shadow-2xl sm:max-h-[540px] lg:max-h-[550px]"
//             />
//           </div>

//           {/* What you get */}
//           <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5 lg:order-first">
//             <SectionLabel>What You Get</SectionLabel>

//             <h2 className="mt-2 text-lg font-black tracking-tight text-slate-900 sm:text-xl">
//               Our Support to Grow Your Store
//             </h2>

//             <ul className="mt-3 space-y-2">
//               {supportItems.map((item) => (
//                 <CheckItem key={item}>{item}</CheckItem>
//               ))}
//             </ul>
//           </article>

//           {/* Who can join */}
//           <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
//             <SectionLabel>Who Can Join</SectionLabel>

//             <h2 className="mt-2 text-lg font-black tracking-tight text-slate-900 sm:text-xl">
//               Store Partner Requirements
//             </h2>

//             <ul className="mt-3 space-y-2.5">
//               {requirements.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <li
//                     key={item.text}
//                     className="flex items-start gap-2.5 text-xs leading-5 text-slate-600"
//                   >
//                     <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-green-50 text-green-800">
//                       <Icon size={16} />
//                     </span>

//                     <span className="pt-0.5">{item.text}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </article>
//         </div>
//       </section>

//       {/* =====================================
//           5. COMMUNITY BANNER
//       ===================================== */}

//       <section
//         id="store-community"
//         className="relative isolate overflow-hidden bg-[#164d28]"
//       >
//         {/* Background banner image */}
//         <img
//           src="/assets/store-partner-community.png"
//           alt="Healthy food store and local store partner community"
//           loading="lazy"
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
//         />

//         {/* Readability gradient: bottom-up on mobile, left-to-right on desktop */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-950/95 via-green-950/60 to-transparent lg:bg-gradient-to-r lg:from-green-950/90 lg:via-green-950/55 lg:to-transparent" />

//         <div className="mx-auto flex min-h-[520px] max-w-[1400px] flex-col justify-end gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[480px] lg:justify-between lg:px-10 lg:py-12">
//           {/* Banner message (no card, so the image stays visible) */}
//           <div className="max-w-xl lg:my-auto">
//             <div className="inline-block rounded-full bg-white/95 px-3 py-1">
//               <SectionLabel>Together for a Healthier Tomorrow</SectionLabel>
//             </div>

//             <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
//               Grow Your Business.
//               <span className="block text-lime-300">
//                 Support a Healthier Community.
//               </span>
//             </h2>

//             <p className="mt-3 max-w-md text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
//               Join EatProtein as a store partner and be a part of the movement
//               to make high-protein, nutritious foods easily accessible to
//               everyone.
//             </p>

//             <button
//               type="button"
//               onClick={scrollToRegistration}
//               className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f4510b] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-orange-600"
//             >
//               Register Your Store
//               <ArrowRight size={16} />
//             </button>
//           </div>

//           {/* Community benefits: slim strip at the bottom */}
//           <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
//             {communityBenefits.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.text}
//                   className="flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2.5 shadow-md ring-1 ring-white/60 backdrop-blur-sm"
//                 >
//                   <span
//                     className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${item.color}`}
//                   >
//                     <Icon size={19} />
//                   </span>

//                   <p className="text-xs font-extrabold text-slate-800 sm:text-sm">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//       {/* Store registration opens in a responsive modal */}
//       {/* APPLICATION MODAL */}
//       {showModal && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               setShowModal(false);
//             }
//           }}
//         >
//           <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
//             {/* Modal header */}
//             <div className="flex shrink-0 items-center justify-between border-b border-green-100 bg-[#f5fbf2] px-5 py-4 sm:px-7">
//               <div>
//                 <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
//                   Join Our Network
//                 </p>
//                 <h2 className="mt-1 text-xl font-black text-[#173b27] sm:text-2xl">
//                   Store Partnership Application
//                 </h2>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 aria-label="Close application"
//                 className="rounded-xl p-2 text-slate-500 transition hover:bg-white hover:text-red-500"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             {/* Scrollable form */}
//             <form
//               onSubmit={handleModalSubmit}
//               className="overflow-y-auto p-5 sm:p-7"
//             >
//               <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
//                 {/* Left column */}
//                 <div>
//                   <h3 className="mb-5 flex items-center gap-2 font-extrabold text-[#173b27]">
//                     <StoreIcon size={19} className="text-green-600" />
//                     Store Information
//                   </h3>

//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <Field
//                       label="Store Name"
//                       name="storeName"
//                       value={modalForm.storeName}
//                       onChange={updateModalField}
//                       placeholder="Your store name"
//                       required
//                     />

//                     <Field
//                       label="Owner Name"
//                       name="ownerName"
//                       value={modalForm.ownerName}
//                       onChange={updateModalField}
//                       placeholder="Your full name"
//                       required
//                     />

//                     <Field
//                       label="Email Address"
//                       name="email"
//                       type="email"
//                       value={modalForm.email}
//                       onChange={updateModalField}
//                       placeholder="you@example.com"
//                       required
//                     />

//                     <Field
//                       label="Phone Number"
//                       name="phone"
//                       type="tel"
//                       value={modalForm.phone}
//                       onChange={updateModalField}
//                       placeholder="+91 XXXXX XXXXX"
//                       required
//                     />
//                   </div>

//                   <div className="mt-6">
//                     <label className="text-sm font-bold text-slate-700">
//                       Store Category *
//                     </label>

//                     <p className="mt-1 text-xs text-slate-500">
//                       Select one category for your store.
//                     </p>

//                     <div className="mt-3 flex flex-wrap gap-2">
//                       {CATEGORIES.map((category) => {
//                         const selected = modalForm.categories[0] === category;

//                         return (
//                           <button
//                             key={category}
//                             type="button"
//                             aria-pressed={selected}
//                             onClick={() => toggleCategory(category)}
//                             className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
//                               selected
//                                 ? "border-green-600 bg-green-600 text-white shadow-sm"
//                                 : "border-slate-200 bg-white text-slate-700 hover:border-green-400 hover:bg-green-50"
//                             }`}
//                           >
//                             {category}
//                             {selected && (
//                               <CheckCircle2
//                                 size={15}
//                                 className="ml-2 inline-block"
//                               />
//                             )}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <div className="mt-6">
//                     <label
//                       htmlFor="address"
//                       className="mb-2 block text-sm font-bold text-slate-700"
//                     >
//                       Store Address *
//                     </label>
//                     <textarea
//                       id="address"
//                       name="address"
//                       value={modalForm.address}
//                       onChange={updateModalField}
//                       placeholder="Complete store address"
//                       rows={3}
//                       required
//                       className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
//                     />
//                   </div>

//                   <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
//                     <Field
//                       label="City"
//                       name="city"
//                       value={modalForm.city}
//                       onChange={updateModalField}
//                       placeholder="City"
//                       required
//                     />

//                     <Field
//                       label="State"
//                       name="state"
//                       value={modalForm.state}
//                       onChange={updateModalField}
//                       placeholder="State"
//                       required
//                     />

//                     <Field
//                       label="Pincode"
//                       name="pincode"
//                       value={modalForm.pincode}
//                       onChange={updateModalField}
//                       placeholder="Pincode"
//                       required
//                     />
//                   </div>

//                   <div className="mt-4 grid gap-4 sm:grid-cols-2">
//                     <Field
//                       label="Service Radius (km)"
//                       name="radius"
//                       type="number"
//                       value={modalForm.radius}
//                       onChange={updateModalField}
//                       min="1"
//                       required
//                     />

//                     <div>
//                       <label
//                         htmlFor="franchiseOwner"
//                         className="mb-2 block text-sm font-bold text-slate-700"
//                       >
//                         Franchise Owner *
//                       </label>
//                       <select
//                         id="franchiseOwner"
//                         name="franchiseOwner"
//                         value={modalForm.franchiseOwner}
//                         onChange={updateModalField}
//                         required
//                         className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
//                       >
//                         <option value="">Select owner</option>
//                         <option value="Bhaskar Rao">Bhaskar Rao</option>
//                       </select>
//                     </div>

//                     <Field
//                       label="GST Number"
//                       name="gst"
//                       value={modalForm.gst}
//                       onChange={updateModalField}
//                       placeholder="GST number"
//                     />

//                     <Field
//                       label="FSSAI Number"
//                       name="fssai"
//                       value={modalForm.fssai}
//                       onChange={updateModalField}
//                       placeholder="FSSAI license number"
//                     />
//                   </div>
//                 </div>

//                 {/* Right column: location */}
//                 <div>
//                   <div className="flex flex-wrap items-center justify-between gap-3">
//                     <h3 className="flex items-center gap-2 font-extrabold text-[#173b27]">
//                       <MapPin size={19} className="text-green-600" />
//                       Your Location
//                     </h3>

//                     <button
//                       type="button"
//                       onClick={useMyLocation}
//                       disabled={locationLoading}
//                       className="inline-flex items-center gap-2 rounded-lg border border-green-200 px-3 py-2 text-xs font-bold text-green-800 transition hover:bg-green-50"
//                     >
//                       <Navigation size={15} />
//                       {locationLoading
//                         ? "Finding Location..."
//                         : "Use My Location"}
//                     </button>
//                   </div>

//                   <p className="mt-2 text-sm leading-6 text-slate-500">
//                     Enter your address or city to preview the area. Location
//                     access is optional.
//                   </p>

//                   <div className="mt-4 h-[260px] overflow-hidden rounded-2xl border border-green-100 bg-[#f2f7ec] sm:h-[320px]">
//                     <iframe
//                       key={mapQuery}
//                       title="Store location map"
//                       src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
//                       className="h-full w-full border-0"
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     />
//                   </div>

//                   <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-5">
//                     <h4 className="flex items-center gap-2 font-bold text-green-900">
//                       <MapPin size={18} />
//                       Location Details
//                     </h4>

//                     <p className="mt-3 break-words text-sm leading-6 text-green-800">
//                       {location
//                         ? `Coordinates: ${location}`
//                         : modalForm.city || modalForm.address
//                           ? `${modalForm.address ? `${modalForm.address}, ` : ""}${modalForm.city}${modalForm.state ? `, ${modalForm.state}` : ""}`
//                           : "Enter your store address and city to add location details."}
//                     </p>

//                     <p className="mt-2 text-xs leading-5 text-green-700">
//                       {location
//                         ? "Location coordinates captured by your browser."
//                         : "Map preview is for reference. Location has not been independently verified."}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {modalMessage && (
//                 <div
//                   role="status"
//                   aria-live="polite"
//                   className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${
//                     modalMessage.startsWith("Thank you")
//                       ? "border-green-200 bg-green-50 text-green-800"
//                       : "border-orange-200 bg-orange-50 text-orange-800"
//                   }`}
//                 >
//                   <div className="flex items-start gap-2">
//                     {modalMessage.startsWith("Thank you") && (
//                       <CheckCircle2
//                         size={20}
//                         className="mt-0.5 shrink-0"
//                       />
//                     )}
//                     <p>{modalMessage}</p>
//                   </div>
//                 </div>
//               )}

//               <div className="mt-7 flex flex-col-reverse justify-end gap-3 border-t border-slate-100 pt-5 sm:flex-row">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-600 transition hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={isModalSubmitting}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-700 to-green-600 px-7 py-3 font-bold text-white shadow-md transition hover:from-green-800 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {isModalSubmitting ? (
//                     <>
//                       <LoaderCircle size={17} className="animate-spin" />
//                       Sending Application...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={17} />
//                       Submit Application
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// function Field({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   required = false,
//   min,
// }) {
//   return (
//     <div>
//       <label
//         htmlFor={name}
//         className="mb-2 block text-sm font-bold text-slate-700"
//       >
//         {label}
//         {required && " *"}
//       </label>

//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         min={min}
//         className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
//       />
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  UsersRound,
  ShoppingCart,
  Megaphone,
  Heart,
  MapPin,
  ChartNoAxesCombined,
  FileText,
  Boxes,
  CheckCircle2,
  Store,
  GraduationCap,
  Smartphone,
  LoaderCircle,
  Store as StoreIcon,
  X,
  Send,
  Navigation,
} from "lucide-react";

import { getFranchiseOwners } from "../api/franchiseOwnerApi";

import AnimatedHeading from "../components/AnimatedHeading";

/* =========================================
   STORE PARTNER DATA
========================================= */

const CATEGORIES = [
  "Veg",
  "Non Veg",
  "Restaurants",
  "Eggs",
  "Dairy Foods",
  "Fruits & Vegetables",
  "Bakery & Sweets",
  "Home Foods",
  "Diet",
];

const benefits = [
  {
    icon: UsersRound,
    title: "More Visibility",
    description:
      "Get discovered by customers in your local area through the EatProtein app.",
    iconStyle: "bg-green-100 text-green-700",
  },
  {
    icon: ShoppingCart,
    title: "Increase Store Orders",
    description:
      "Receive online orders from nearby customers looking for healthy, high-protein foods.",
    iconStyle: "bg-orange-100 text-orange-600",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Get featured in the app, promotions and local marketing campaigns.",
    iconStyle: "bg-blue-100 text-blue-700",
  },
  {
    icon: Heart,
    title: "Be Part of a Healthier Community",
    description:
      "Support people in making better food choices and build long-term customer trust.",
    iconStyle: "bg-rose-100 text-rose-600",
  },
];

const onboardingSteps = [
  {
    icon: FileText,
    title: "Register Your Store",
    description: "Fill out the store registration form with your basic details.",
  },
  {
    icon: Store,
    title: "Verification & Setup",
    description:
      "Our team verifies your details and helps you set up your store on the platform.",
  },
  {
    icon: GraduationCap,
    title: "List Your Products",
    description: "Add your high-protein products with accurate information.",
  },
  {
    icon: Smartphone,
    title: "Start Receiving Orders",
    description:
      "Go live and start getting orders from nearby customers through the EatProtein app.",
  },
];

const supportItems = [
  "Store listing on EatProtein app",
  "Guidance on product listing and nutrition information",
  "Marketing and promotional support",
  "Ongoing support from our team",
  "Access to a community of health-conscious customers",
];

const requirements = [
  {
    icon: Store,
    text: "Local food stores, supermarkets, meat shops, organic stores, or healthy food retailers",
  },
  { icon: MapPin, text: "Must be in our serviceable area" },
  {
    icon: FileText,
    text: "Valid business registration (as per local norms)",
  },
  {
    icon: Boxes,
    text: "Ability to provide quality products and fulfill orders",
  },
  {
    icon: Heart,
    text: "Commitment to offer accurate product information",
  },
];

const communityBenefits = [
  { icon: UsersRound, text: "More Customers", color: "bg-green-100 text-green-700" },
  {
    icon: ChartNoAxesCombined,
    text: "Higher Order Volume",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: UsersRound,
    text: "Local Community Trust",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Heart,
    text: "Be Part of a Bigger Mission",
    color: "bg-rose-100 text-rose-600",
  },
];

/* =========================================
   VALIDATION HELPERS
========================================= */

// Accepts Indian 10-digit numbers, optionally prefixed with +91 or 91.
const validatePhone = (value) => {
  const digits = value.replace(/\D/g, "");

  if (!/^[\d+\s()-]+$/.test(value.trim())) return false;

  if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);

  if (digits.length === 12 && digits.startsWith("91")) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }

  return false;
};

const validateEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

const validatePincode = (value) => /^[1-9]\d{5}$/.test(value.trim());

// Standard Indian GSTIN structure.
const validateGST = (value) =>
  /^\d{2}[A-Z]{5}\d{4}[A-Z][A-Z0-9]Z[A-Z0-9]$/.test(
    value.trim().toUpperCase(),
  );

// FSSAI license/registration numbers are 14 digits.
const validateFSSAI = (value) => /^\d{14}$/.test(value.trim());

const validateField = (name, value) => {
  const trimmed = String(value ?? "").trim();

  switch (name) {
    case "storeName":
      if (!trimmed) return "Please enter your store name.";
      if (trimmed.length < 2) return "Store name must contain at least 2 characters.";
      if (trimmed.length > 100) return "Store name cannot exceed 100 characters.";
      return "";

    case "ownerName":
      if (!trimmed) return "Please enter the owner's name.";
      if (!/^[\p{L}\p{M} .'-]+$/u.test(trimmed)) {
        return "Please enter a valid name.";
      }
      if (trimmed.length < 2 || trimmed.length > 80) {
        return "Name must contain 2–80 characters.";
      }
      return "";

    case "email":
      if (!trimmed) return "Please enter your email address.";
      if (!validateEmail(trimmed)) return "Please enter a valid email address.";
      if (trimmed.length > 254) return "Email address is too long.";
      return "";

    case "phone":
      if (!trimmed) return "Please enter your phone number.";
      if (!validatePhone(trimmed)) {
        return "Enter a valid Indian mobile number, e.g. 9876543210.";
      }
      return "";

    case "categories":
      if (!value || !value.length) return "Please select one store category.";
      return "";

    case "address":
      if (!trimmed) return "Please enter your complete store address.";
      if (trimmed.length < 8) return "Please enter a more complete address.";
      if (trimmed.length > 500) return "Address cannot exceed 500 characters.";
      return "";

    case "city":
      if (!trimmed) return "Please enter your city.";
      if (trimmed.length < 2 || trimmed.length > 80) {
        return "Enter a valid city name.";
      }
      return "";

    case "state":
      if (!trimmed) return "Please enter your state.";
      if (trimmed.length < 2 || trimmed.length > 80) {
        return "Enter a valid state name.";
      }
      return "";

    case "pincode":
      if (!trimmed) return "Please enter your PIN code.";
      if (!validatePincode(trimmed)) {
        return "Enter a valid 6-digit Indian PIN code.";
      }
      return "";

    case "radius": {
      const radius = Number(value);
      if (trimmed === "" || !Number.isFinite(radius)) {
        return "Please enter a service radius.";
      }
      if (radius < 1 || radius > 50) {
        return "Service radius must be between 1 and 50 km.";
      }
      return "";
    }

    case "franchiseOwner":
      if (!trimmed) return "Please select a franchise owner.";
      return "";

    case "gst":
      if (trimmed && !validateGST(trimmed)) {
        return "Enter a valid 15-character GSTIN or leave it blank.";
      }
      return "";

    case "fssai":
      if (trimmed && !validateFSSAI(trimmed)) {
        return "FSSAI number must contain exactly 14 digits.";
      }
      return "";

    default:
      return "";
  }
};

const validateForm = (data) => {
  const fields = [
    "storeName",
    "ownerName",
    "email",
    "phone",
    "categories",
    "address",
    "city",
    "state",
    "pincode",
    "radius",
    "franchiseOwner",
    "gst",
    "fssai",
  ];

  return fields.reduce((errors, field) => {
    const error = validateField(field, data[field]);
    if (error) errors[field] = error;
    return errors;
  }, {});
};

/* =========================================
   REUSABLE COMPONENTS
========================================= */

function SectionLabel({ children }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-green-800 sm:text-xs">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
      {eyebrow && (
        <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D7201A] sm:text-xs">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
      <CheckCircle2
        size={19}
        className="mt-0.5 shrink-0 fill-green-700 text-white"
      />
      <span>{children}</span>
    </li>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  min,
  max,
  maxLength,
  error,
  onBlur,
  inputMode,
}) {
  const errorId = `${name}-error`;

  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-700"
      >
        {label}
        {required && " *"}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        maxLength={maxLength}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-slate-200 focus:border-green-500 focus:ring-green-100"
        }`}
      />

      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

/* =========================================
   STORE PARTNER PAGE
========================================= */

export default function StorePartner() {
  const [showModal, setShowModal] = useState(false);

  const initialForm = {
    storeName: "",
    ownerName: "",
    email: "",
    phone: "",
    categories: [],
    address: "",
    city: "",
    state: "",
    pincode: "",
    radius: "3",
    franchiseOwner: "",
    gst: "",
    fssai: "",
  };

const [ownerDropdownOpen, setOwnerDropdownOpen] = useState(false);
const [hoveredOwner, setHoveredOwner] = useState(null);
const [franchiseOwners, setFranchiseOwners] = useState([]);
const [loadingOwners, setLoadingOwners] = useState(true);
const [ownerApiError, setOwnerApiError] = useState("");

useEffect(() => {
  const loadFranchiseOwners = async () => {
    try {
      setLoadingOwners(true);
      setOwnerApiError("");

      const owners = await getFranchiseOwners();
      setFranchiseOwners(owners);
    } catch (error) {
      setOwnerApiError("Unable to load franchise owners.");
    } finally {
      setLoadingOwners(false);
    }
  };

  loadFranchiseOwners();
}, []);



  const [modalForm, setModalForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [location, setLocation] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);

  const updateModalField = (event) => {
    const { name, value } = event.target;

    const nextForm = { ...modalForm, [name]: value };
    setModalForm(nextForm);
    setTouched((previous) => ({ ...previous, [name]: true }));

    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }));

    setModalMessage("");
    setMessageType("");
  };

  const handleFieldBlur = (event) => {
    const { name, value } = event.target;

    setTouched((previous) => ({ ...previous, [name]: true }));
    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }));
  };

  // Only one category can be selected at a time.
  const toggleCategory = (category) => {
    const nextCategories =
      modalForm.categories[0] === category ? [] : [category];

    const nextForm = { ...modalForm, categories: nextCategories };

    setModalForm(nextForm);
    setTouched((previous) => ({ ...previous, categories: true }));
    setErrors((previous) => ({
      ...previous,
      categories: validateField("categories", nextCategories),
    }));
    setModalMessage("");
    setMessageType("");
  };

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setModalMessage(
        "Location is not supported by this browser. Please enter your address manually.",
      );
      setMessageType("error");
      return;
    }

    setLocationLoading(true);
    setModalMessage("");
    setMessageType("");

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const coordinates = `${coords.latitude}, ${coords.longitude}`;
        setLocation(coordinates);

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}&addressdetails=1`,
            { headers: { Accept: "application/json" } },
          );

          if (!response.ok) throw new Error("Address lookup failed");

          const result = await response.json();
          const a = result.address || {};

          const city =
            a.city ||
            a.town ||
            a.village ||
            a.municipality ||
            a.suburb ||
            "";
          const state = a.state || "";
          const pincode = a.postcode || "";

          const nextForm = {
            ...modalForm,
            address: result.display_name || modalForm.address,
            city: city || modalForm.city,
            state: state || modalForm.state,
            pincode: pincode || modalForm.pincode,
          };

          setModalForm(nextForm);

          const nextErrors = { ...errors };
          ["address", "city", "state", "pincode"].forEach((field) => {
            nextErrors[field] = validateField(field, nextForm[field]);
          });
          setErrors(nextErrors);

          setModalMessage(
            "Location found. Please review the address and correct any details if needed.",
          );
          setMessageType("success");
        } catch {
          setModalMessage(
            "Your coordinates were captured, but the address could not be resolved. Please enter your address manually.",
          );
          setMessageType("error");
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        setLocationLoading(false);
        setModalMessage(
          error.code === 1
            ? "Location permission was denied. Allow location access in your browser or enter the address manually."
            : "Unable to get your location. Please try again or enter the address manually.",
        );
        setMessageType("error");
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
    );
  };

  const handleModalSubmit = async (event) => {
    event.preventDefault();

    if (isModalSubmitting) return;

    const nextErrors = validateForm(modalForm);
    setErrors(nextErrors);

    const allTouched = Object.keys(modalForm).reduce(
      (result, field) => ({ ...result, [field]: true }),
      {},
    );
    setTouched(allTouched);

    if (Object.values(nextErrors).some(Boolean)) {
      setModalMessage("Please correct the highlighted fields before submitting.");
      setMessageType("error");

      const firstInvalidField = Object.keys(nextErrors).find(
        (field) => nextErrors[field],
      );

      if (firstInvalidField) {
        document.getElementById(firstInvalidField)?.focus();
      }
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_STORE_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_STORE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_STORE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setModalMessage(
        "Email service configuration is missing. Please contact the website administrator.",
      );
      setMessageType("error");
      return;
    }

    setIsModalSubmitting(true);
    setModalMessage("");
    setMessageType("");

    try {
      const templateParams = {
        store_name: modalForm.storeName.trim(),
        owner_name: modalForm.ownerName.trim(),
        email: modalForm.email.trim(),
        phone: modalForm.phone.trim(),
        store_category: modalForm.categories[0],
        address: modalForm.address.trim(),
        city: modalForm.city.trim(),
        state: modalForm.state.trim(),
        pincode: modalForm.pincode.trim(),
        service_radius: `${modalForm.radius} km`,
        franchise_owner: modalForm.franchiseOwner,
        gst_number: modalForm.gst.trim().toUpperCase() || "Not provided",
        fssai_number: modalForm.fssai.trim() || "Not provided",
        location_coordinates: location || "Not provided",
        message: "New EatProtein store partnership application",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setModalForm(initialForm);
      setErrors({});
      setTouched({});
      setLocation("");
      setModalMessage(
        "Thank you for registering with EatProtein! Your application has been submitted successfully. Our team will contact you soon.",
      );
      setMessageType("success");
    } catch (error) {
      console.error("EmailJS store registration error:", error);
      setModalMessage(
        "We couldn't submit your application. Please check your internet connection and try again.",
      );
      setMessageType("error");
    } finally {
      setIsModalSubmitting(false);
    }
  };

  const mapQuery = encodeURIComponent(
    location || modalForm.address || modalForm.city || "India",
  );

  const scrollToRegistration = () => {
    setModalMessage("");
    setMessageType("");
    setShowModal(true);
  };

  const scrollToBenefits = () => {
    const section = document.getElementById("store-benefits");
    if (!section) return;

    const navbar = document.querySelector("header");
    const navbarHeight = navbar
      ? navbar.getBoundingClientRect().height
      : 95;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      20;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <main className="relative m-0 min-h-screen w-full overflow-x-clip bg-white p-0 font-sans text-slate-900">
      {/* HERO */}
      <section
        id="store-partner"
        className="relative isolate m-0 block w-full overflow-hidden bg-gradient-to-r from-[#f6fff3] via-[#f0faed] to-[#e5f4d9] p-0"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f6fff3] via-[#f0faed] to-[#e5f4d9]" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-7 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-5 lg:px-10 lg:py-14">
          <div className="relative z-20 order-1">
            <SectionLabel>For Store Owners</SectionLabel>

            <h1 className="mt-3 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#101e28] sm:text-5xl lg:text-[52px]">
              Join EatProtein
              <span className="block">
                as a <span className="text-green-700">Store Partner</span>
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              List your store, reach more customers and grow your sales with
              EatProtein.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToRegistration}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D7201A] px-5 py-3 text-xs font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#B91C1C] sm:px-6 sm:text-sm"
              >
                Register Your Store <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={scrollToBenefits}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-700/50 bg-white/90 px-5 py-3 text-xs font-extrabold text-green-800 transition hover:bg-green-50 sm:px-6 sm:text-sm"
              >
                View Benefits
              </button>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
              {[
                { icon: UsersRound, text: "Reach Nearby Customers" },
                { icon: ChartNoAxesCombined, text: "Increase Store Orders" },
                { icon: Megaphone, text: "Marketing Support" },
                { icon: Heart, text: "Be Part of a Healthier Community" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex flex-col items-center text-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-green-800 shadow-sm sm:h-11 sm:w-11">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <p className="mt-2 max-w-28 text-[10px] font-bold leading-4 text-slate-800 sm:text-[11px]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative order-2 min-w-0">
            <div className="absolute inset-6 rounded-full bg-green-200/50 blur-3xl" />
            <img
              src="/assets/store-partner-hero.png"
              alt="EatProtein store partner in a healthy food store"
              fetchPriority="high"
              className="relative z-10 mx-auto max-h-[420px] w-full rounded-2xl object-contain object-center sm:max-h-[470px] lg:max-h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        id="store-benefits"
        className="scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-10"
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Partner with a purpose"
            title={<>Why Partner with <span className="text-green-700">EatProtein?</span></>}
            description="We work with local food stores to make healthy protein foods accessible to more people."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-5"
                >
                  <div className={`grid h-11 w-11 place-items-center rounded-xl ${item.iconStyle}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-3 text-sm font-black leading-5 text-slate-900 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="store-how-it-works"
        className="mx-3 rounded-2xl bg-[#eff9e9] px-4 py-7 sm:mx-5 sm:px-6 sm:py-9 lg:mx-6 lg:px-8"
      >
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel>Simple Onboarding</SectionLabel>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Get your store live on EatProtein in just a few easy steps.
          </p>

          <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {onboardingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="relative flex gap-3 sm:flex-col sm:items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-green-800 shadow-sm sm:h-14 sm:w-14">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 sm:mt-3 sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                      {step.description}
                    </p>
                  </div>
                  {index < onboardingSteps.length - 1 && (
                    <ArrowRight
                      size={21}
                      className="absolute -right-1 top-4 hidden text-slate-400 lg:block"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUPPORT AND REQUIREMENTS */}
      <section id="store-requirements" className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1400px] items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-6">
          <div className="relative order-first flex min-h-[380px] items-end justify-center overflow-hidden pt-6 sm:min-h-[460px] lg:order-none lg:min-h-[600px]">
            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/30 blur-3xl" />
            <img
              src="/assets/eatprotein-app.png"
              alt="EatProtein mobile application showing food categories"
              loading="lazy"
              className="relative h-auto max-h-[440px] w-full object-contain object-bottom drop-shadow-2xl sm:max-h-[540px] lg:max-h-[550px]"
            />
          </div>

          <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5 lg:order-first">
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="mt-2 text-lg font-black tracking-tight text-slate-900 sm:text-xl">
              Our Support to Grow Your Store
            </h2>
            <ul className="mt-3 space-y-2">
              {supportItems.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
            <SectionLabel>Who Can Join</SectionLabel>
            <h2 className="mt-2 text-lg font-black tracking-tight text-slate-900 sm:text-xl">
              Store Partner Requirements
            </h2>
            <ul className="mt-3 space-y-2.5">
              {requirements.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-2.5 text-xs leading-5 text-slate-600">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-green-50 text-green-800">
                      <Icon size={16} />
                    </span>
                    <span className="pt-0.5">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>

      {/* COMMUNITY BANNER */}
      <section id="store-community" className="relative isolate overflow-hidden bg-[#164d28]">
        <img
          src="/assets/store-partner-community.png"
          alt="Healthy food store and local store partner community"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-950/95 via-green-950/60 to-transparent lg:bg-gradient-to-r lg:from-green-950/90 lg:via-green-950/55 lg:to-transparent" />

        <div className="mx-auto flex min-h-[520px] max-w-[1400px] flex-col justify-end gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[480px] lg:justify-between lg:px-10 lg:py-12">
          <div className="max-w-xl lg:my-auto">
            <div className="inline-block rounded-full bg-white/95 px-3 py-1">
              <SectionLabel>Together for a Healthier Tomorrow</SectionLabel>
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Grow Your Business.
              <span className="block text-lime-300">Support a Healthier Community.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              Join EatProtein as a store partner and help make high-protein,
              nutritious foods easily accessible to everyone.
            </p>
            <button
              type="button"
              onClick={scrollToRegistration}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D7201A] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#B91C1C]"
            >
              Register Your Store <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {communityBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2.5 shadow-md ring-1 ring-white/60 backdrop-blur-sm">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${item.color}`}>
                    <Icon size={19} />
                  </span>
                  <p className="text-xs font-extrabold text-slate-800 sm:text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGISTRATION MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !isModalSubmitting) {
              setShowModal(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-modal-title"
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-green-100 bg-[#f5fbf2] px-5 py-4 sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                  Join Our Network
                </p>
                <h2 id="store-modal-title" className="mt-1 text-xl font-black text-[#173b27] sm:text-2xl">
                  Store Partnership Application
                </h2>
              </div>
              <button
                type="button"
                onClick={() => !isModalSubmitting && setShowModal(false)}
                disabled={isModalSubmitting}
                aria-label="Close application"
                className="rounded-xl p-2 text-slate-500 transition hover:bg-white hover:text-red-500 disabled:opacity-50"
              >
                <X size={24} />
              </button>
            </div>

            <form noValidate onSubmit={handleModalSubmit} className="overflow-y-auto p-5 sm:p-7">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                {/* STORE INFORMATION */}
                <div>
                  <h3 className="mb-5 flex items-center gap-2 font-extrabold text-[#173b27]">
                    <StoreIcon size={19} className="text-green-600" />
                    Store Information
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Store Name"
                      name="storeName"
                      value={modalForm.storeName}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.storeName ? errors.storeName : ""}
                      placeholder="Your store name"
                      required
                      maxLength={100}
                    />
                    <Field
                      label="Owner Name"
                      name="ownerName"
                      value={modalForm.ownerName}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.ownerName ? errors.ownerName : ""}
                      placeholder="Your full name"
                      required
                      maxLength={80}
                    />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      value={modalForm.email}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.email ? errors.email : ""}
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                    />
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={modalForm.phone}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.phone ? errors.phone : ""}
                      placeholder="9876543210"
                      required
                      maxLength={16}
                    />
                  </div>

                  <div className="mt-6">
                    <label className="text-sm font-bold text-slate-700">
                      Store Category *
                    </label>
                    <p className="mt-1 text-xs text-slate-500">
                      Select one category for your store.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {CATEGORIES.map((category) => {
                        const selected = modalForm.categories[0] === category;
                        return (
                          <button
                            key={category}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleCategory(category)}
                            className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                              selected
                                ? "border-green-600 bg-green-600 text-white shadow-sm"
                                : "border-slate-200 bg-white text-slate-700 hover:border-green-400 hover:bg-green-50"
                            }`}
                          >
                            {category}
                            {selected && <CheckCircle2 size={15} className="ml-2 inline-block" />}
                          </button>
                        );
                      })}
                    </div>
                    {touched.categories && errors.categories && (
                      <p role="alert" className="mt-2 text-xs text-red-600">
                        {errors.categories}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="address" className="mb-2 block text-sm font-bold text-slate-700">
                      Store Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={modalForm.address}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      placeholder="Complete store address"
                      rows={3}
                      maxLength={500}
                      aria-invalid={Boolean(touched.address && errors.address)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                        touched.address && errors.address
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-green-500 focus:ring-green-100"
                      }`}
                    />
                    {touched.address && errors.address && (
                      <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.address}</p>
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <Field
                      label="City"
                      name="city"
                      value={modalForm.city}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.city ? errors.city : ""}
                      placeholder="City"
                      required
                      maxLength={80}
                    />
                    <Field
                      label="State"
                      name="state"
                      value={modalForm.state}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.state ? errors.state : ""}
                      placeholder="State"
                      required
                      maxLength={80}
                    />
                    <Field
                      label="Pincode"
                      name="pincode"
                      value={modalForm.pincode}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.pincode ? errors.pincode : ""}
                      placeholder="6-digit PIN"
                      required
                      inputMode="numeric"
                      maxLength={6}
                    />
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Service Radius (km)"
                      name="radius"
                      type="number"
                      value={modalForm.radius}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.radius ? errors.radius : ""}
                      placeholder="3"
                      min="1"
                      max="50"
                      required
                    />

                    {/* <div>
                      <label htmlFor="franchiseOwner" className="mb-2 block text-sm font-bold text-slate-700">
                        Franchise Owner *
                      </label>
                      <select
                        id="franchiseOwner"
                        name="franchiseOwner"
                        value={modalForm.franchiseOwner}
                        onChange={updateModalField}
                        onBlur={handleFieldBlur}
                        required
                        aria-invalid={Boolean(touched.franchiseOwner && errors.franchiseOwner)}
                        className={`w-full rounded-xl border bg-white px-3 py-3 text-sm outline-none focus:ring-4 ${
                          touched.franchiseOwner && errors.franchiseOwner
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-200 focus:border-green-500 focus:ring-green-100"
                        }`}
                      >
                        <option value="">Select owner</option>
                        <option value="Bhaskar Rao">Bhaskar Rao</option>
                      </select>
                      {touched.franchiseOwner && errors.franchiseOwner && (
                        <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.franchiseOwner}</p>
                      )}
                    </div> */}

                    

{/* <div className="relative">
  <label
    htmlFor="franchiseOwner"
    className="mb-2 block text-sm font-bold text-slate-700"
  >
    Franchise Owner *
  </label>

  <select
    id="franchiseOwner"
    name="franchiseOwner"
    value={modalForm.franchiseOwner}
    onChange={updateModalField}
    onBlur={handleFieldBlur}
    required
    disabled={loadingOwners}
    size={1}
    aria-invalid={Boolean(
      touched.franchiseOwner && errors.franchiseOwner
    )}
    className={`w-full rounded-xl border bg-white px-3 py-3 text-sm outline-none focus:ring-4 ${
      touched.franchiseOwner && errors.franchiseOwner
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-slate-200 focus:border-green-500 focus:ring-green-100"
    }`}
  >
    <option value="">
      {loadingOwners ? "Loading owners..." : "Select owner"}
    </option>

    {franchiseOwners.map((owner) => (
      <option key={owner.id} value={owner.name}>
        {owner.name} ({owner.city})
      </option>
    ))}
  </select>

  {touched.franchiseOwner && errors.franchiseOwner && (
    <p role="alert" className="mt-1.5 text-xs text-red-600">
      {errors.franchiseOwner}
    </p>
  )}

  {ownerApiError && (
    <p role="alert" className="mt-1.5 text-xs text-red-600">
      {ownerApiError}
    </p>
  )}
</div> */}



<div className="relative">
  <label
    htmlFor="franchiseOwner"
    className="mb-2 block text-sm font-bold text-slate-700"
  >
    Franchise Owner *
  </label>

  {/* Selected owner */}
  <button
    type="button"
    id="franchiseOwner"
    disabled={loadingOwners}
    onClick={() => setOwnerDropdownOpen((open) => !open)}
    onBlur={() => {
      setTouched((prev) => ({
        ...prev,
        franchiseOwner: true,
      }));

      // Validate using the currently selected owner
      setErrors((prev) => ({
        ...prev,
        franchiseOwner: validateField(
          "franchiseOwner",
          modalForm.franchiseOwner
        ),
      }));
    }}
    aria-expanded={ownerDropdownOpen}
    aria-haspopup="listbox"
    aria-invalid={Boolean(
      touched.franchiseOwner && errors.franchiseOwner
    )}
    className={`flex w-full items-center justify-between rounded-xl border bg-white px-3 py-3 text-left text-sm outline-none focus:ring-4 disabled:bg-slate-50 ${
      touched.franchiseOwner && errors.franchiseOwner
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-slate-200 focus:border-green-500 focus:ring-green-100"
    }`}
  >
    <span className="truncate">
      {loadingOwners
        ? "Loading owners..."
        : franchiseOwners.find(
            (owner) => owner.name === modalForm.franchiseOwner
          )?.name || "Select owner"}
    </span>

    <span className="ml-2 text-slate-500">▾</span>
  </button>

  {/* Scrollable owner list */}
  {ownerDropdownOpen && !loadingOwners && (
    <ul
      role="listbox"
      aria-label="Franchise owners"
      className="absolute left-0 right-0 z-50 mt-1 max-h-48 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
    >
      {franchiseOwners.map((owner) => (
        <li
          key={owner.id}
          role="option"
          aria-selected={modalForm.franchiseOwner === owner.name}
          className="relative"
          onMouseEnter={() => setHoveredOwner(owner.id)}
          onMouseLeave={() => setHoveredOwner(null)}
        >
          <button
            type="button"
            onClick={() => {
              // Update the selected owner and clear its error
              setModalForm((prev) => ({
                ...prev,
                franchiseOwner: owner.name,
              }));

              setTouched((prev) => ({
                ...prev,
                franchiseOwner: true,
              }));

              setErrors((prev) => ({
                ...prev,
                franchiseOwner: validateField(
                  "franchiseOwner",
                  owner.name
                ),
              }));

              // Close dropdown and clear hover state
              setOwnerDropdownOpen(false);
              setHoveredOwner(null);

              setModalMessage("");
              setMessageType("");
            }}
            className={`w-full px-3 py-3 text-left text-sm transition hover:bg-green-50 ${
              modalForm.franchiseOwner === owner.name
                ? "bg-green-50 font-semibold text-green-800"
                : "text-slate-700"
            }`}
          >
            {owner.name}
          </button>

          {/* Show city only when hovering over an owner */}
          {hoveredOwner === owner.id && owner.city && (
            <div className="pointer-events-none absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-md bg-slate-800 px-2 py-1 text-xs text-white shadow-md">
              {owner.city}
            </div>
          )}
        </li>
      ))}

      {franchiseOwners.length === 0 && (
        <li className="px-3 py-3 text-sm text-slate-500">
          No franchise owners available
        </li>
      )}
    </ul>
  )}

  {/* Validation error */}
  {touched.franchiseOwner && errors.franchiseOwner && (
    <p role="alert" className="mt-1.5 text-xs text-red-600">
      {errors.franchiseOwner}
    </p>
  )}

  {/* API error */}
  {ownerApiError && (
    <p role="alert" className="mt-1.5 text-xs text-red-600">
      {ownerApiError}
    </p>
  )}
</div>




                    <Field
                      label="GST Number (Optional)"
                      name="gst"
                      value={modalForm.gst}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.gst ? errors.gst : ""}
                      placeholder="15-character GSTIN"
                      maxLength={15}
                    />
                    <Field
                      label="FSSAI Number (Optional)"
                      name="fssai"
                      value={modalForm.fssai}
                      onChange={updateModalField}
                      onBlur={handleFieldBlur}
                      error={touched.fssai ? errors.fssai : ""}
                      placeholder="14-digit license number"
                      inputMode="numeric"
                      maxLength={14}
                    />
                  </div>
                </div>

                {/* LOCATION AND MAP */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="flex items-center gap-2 font-extrabold text-[#173b27]">
                      <MapPin size={19} className="text-green-600" />
                      Your Location
                    </h3>
                    <button
                      type="button"
                      onClick={useMyLocation}
                      disabled={locationLoading || isModalSubmitting}
                      className="inline-flex items-center gap-2 rounded-lg border border-green-200 px-3 py-2 text-xs font-bold text-green-800 transition hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {locationLoading ? (
                        <LoaderCircle size={15} className="animate-spin" />
                      ) : (
                        <Navigation size={15} />
                      )}
                      {locationLoading ? "Finding Location..." : "Use My Location"}
                    </button>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Enter your address or use your device location to fill in
                    the available address fields. Location access is optional.
                  </p>

                  <div className="mt-4 h-[260px] overflow-hidden rounded-2xl border border-green-100 bg-[#f2f7ec] sm:h-[320px]">
                    <iframe
                      key={mapQuery}
                      title="Store location map"
                      src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-5">
                    <h4 className="flex items-center gap-2 font-bold text-green-900">
                      <MapPin size={18} /> Location Details
                    </h4>
                    <p className="mt-3 break-words text-sm leading-6 text-green-800">
                      {location
                        ? `Coordinates: ${location}`
                        : [modalForm.address, modalForm.city, modalForm.state]
                            .filter(Boolean)
                            .join(", ") ||
                          "Enter your store address and city to add location details."}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-green-700">
                      {location
                        ? "Coordinates were captured by your browser. Please confirm the address is correct."
                        : "Map preview is for reference. Location has not been independently verified."}
                    </p>
                  </div>
                </div>
              </div>

              {modalMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${
                    messageType === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {messageType === "success" && (
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                    )}
                    <p>{modalMessage}</p>
                  </div>
                </div>
              )}

              <div className="mt-7 flex flex-col-reverse justify-end gap-3 border-t border-slate-100 pt-5 sm:flex-row">
                <button
                  type="button"
                  onClick={() => !isModalSubmitting && setShowModal(false)}
                  disabled={isModalSubmitting}
                  className="rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isModalSubmitting || locationLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-700 to-green-600 px-7 py-3 font-bold text-white shadow-md transition hover:from-green-800 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isModalSubmitting ? (
                    <>
                      <LoaderCircle size={17} className="animate-spin" />
                      Sending Application...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
