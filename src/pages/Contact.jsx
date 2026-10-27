// import { useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   MessageCircle,
//   Headphones,
//   CheckCircle2,
//   ArrowUpRight,
// } from "lucide-react";

// const contactDetails = [
//   {
//     icon: Phone,
//     title: "Phone",
//     color: "green",
//     lines: ["+91 9440701380", "Mon-Fri 9:00 AM - 6:00 PM IST"],
//     href: "tel:+919440701380",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     color: "blue",
//     lines: ["support@eatprotein.in", "We'll respond within 24 hours"],
//     href: "mailto:support@eatprotein.in",
//   },
//   {
//     icon: MapPin,
//     title: "Address",
//     color: "orange",
//     lines: [
//       "Pallaki Enclave, 3rd Floor,",
//       "Plot no: 44 Municipal Plots, Udayagiri Rd,",
//       "Bapuji Nagar, Kavali,",
//       "Andhra Pradesh 524201",
//     ],
//     href: "https://maps.google.com/?q=Pallaki+Enclave+Kavali+Andhra+Pradesh",
//   },
//   {
//     icon: Clock,
//     title: "Business Hours",
//     color: "purple",
//     lines: [
//       "Monday - Friday: 9:00 AM - 6:00 PM",
//       "Saturday: 10:00 AM - 4:00 PM",
//       "Sunday: Closed",
//     ],
//   },
// ];

// const subjects = [
//   "Product Inquiry",
//   "Nutrition Advice",
//   "Order Support",
//   "Franchise Inquiry",
//   "Technical Support",
//   "Other",
// ];

// const faqs = [
//   {
//     icon: MessageCircle,
//     color: "green",
//     question: "What types of protein products do you offer?",
//     answer:
//       "We offer a wide range of protein-rich foods including nuts, seeds, protein bars, supplements, and healthy snacks carefully selected for quality and nutrition.",
//   },
//   {
//     icon: Headphones,
//     color: "blue",
//     question: "How can I track my order?",
//     answer:
//       "Once your order is shipped, you'll receive a tracking number via email. You can also check your order status in the Eat Protein mobile app.",
//   },
//   {
//     icon: MessageCircle,
//     color: "orange",
//     question: "Do you provide nutrition consultation?",
//     answer:
//       "Yes! Our qualified nutritionists are available for personalized consultation through our app and via phone appointments.",
//   },
//   {
//     icon: Headphones,
//     color: "purple",
//     question: "What is your return policy?",
//     answer:
//       "We offer a 30-day return policy for unopened products. If you're not satisfied, contact our support team for assistance with a refund or exchange.",
//   },
// ];

// const colorStyles = {
//   green: {
//     icon: "bg-emerald-50 text-emerald-600",
//     line: "bg-emerald-500",
//   },
//   blue: {
//     icon: "bg-blue-50 text-blue-600",
//     line: "bg-blue-500",
//   },
//   orange: {
//     icon: "bg-orange-50 text-orange-600",
//     line: "bg-orange-500",
//   },
//   purple: {
//     icon: "bg-purple-50 text-purple-600",
//     line: "bg-purple-500",
//   },
// };

// const inputClass =
//   "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setSubmitted(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const emailSubject = encodeURIComponent(
//       `${formData.subject} - Contact from ${formData.fullName}`,
//     );

//     const emailBody = encodeURIComponent(
//       `Full Name: ${formData.fullName}\n` +
//         `Phone Number: ${formData.phone || "Not provided"}\n` +
//         `Email: ${formData.email}\n` +
//         `Subject: ${formData.subject}\n\n` +
//         `Message:\n${formData.message}`,
//     );

//     window.location.href = `mailto:support@eatprotein.in?subject=${emailSubject}&body=${emailBody}`;

//     setSubmitted(true);
//   };

//   return (
//     <main className="min-h-screen bg-white text-slate-800">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-white px-5 py-10 sm:py-10 lg:py-12">
//         <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-lime-100/70 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm sm:text-sm">
//             <span className="h-2 w-2 rounded-full bg-emerald-500" />
//             We're here to help
//           </span>

//           <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//             Let's talk <span className="text-emerald-600">nutrition.</span>
//           </h1>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//             Have questions about our products or need nutrition advice? We'd
//             love to hear from you. Reach out to our friendly team.
//           </p>

//           <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
//             <span className="inline-flex items-center gap-2">
//               <CheckCircle2 size={17} className="text-emerald-600" />
//               Friendly support
//             </span>
//             <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
//             <span className="inline-flex items-center gap-2">
//               <CheckCircle2 size={17} className="text-emerald-600" />
//               Replies within 24 hours
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Contact details and form */}
//       <section className="px-5 py-14 sm:py-16 lg:py-15">
//         <div className="mx-auto grid max-w-6xl gap-15 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
//           {/* Left column */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
//               Contact information
//             </span>

//             <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//               Get in touch
//             </h2>

//             <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
//               We'd love to hear from you. Send us a message and we'll respond as
//               soon as possible.
//             </p>

//             <div className="mt-5 space-y-7">
//               {contactDetails.map((item) => {
//                 const Icon = item.icon;
//                 const styles = colorStyles[item.color];

//                 return (
//                   <div key={item.title} className="flex gap-4">
//                     <div
//                       className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
//                     >
//                       <Icon size={22} strokeWidth={1.9} />
//                     </div>

//                     <div className="min-w-0 flex-1 pt-0.5">
//                       <h3 className="font-bold text-slate-900">{item.title}</h3>

//                       <div className="mt-2 space-y-1">
//                         {item.lines.map((line, index) => (
//                           <p
//                             key={line}
//                             className={`text-sm leading-6 ${
//                               index === 0 && item.href
//                                 ? "text-slate-700"
//                                 : "text-slate-500"
//                             }`}
//                           >
//                             {index === 0 && item.href ? (
//                               <a
//                                 href={item.href}
//                                 target={
//                                   item.href.startsWith("https")
//                                     ? "_blank"
//                                     : undefined
//                                 }
//                                 rel={
//                                   item.href.startsWith("https")
//                                     ? "noreferrer"
//                                     : undefined
//                                 }
//                                 className="break-words transition hover:text-emerald-600"
//                               >
//                                 {line}
//                               </a>
//                             ) : (
//                               line
//                             )}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/*<div className="mt-9 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 sm:p-6">
//               <div className="flex items-start gap-3">
//                <div className="rounded-xl bg-white p-2.5 text-emerald-600 shadow-sm">
//                   <Headphones size={22} />
//                 </div>

//                 <div>
//                   <h3 className="font-bold text-slate-900">
//                     Need a quick answer?
//                   </h3>
//                   <p className="mt-1 text-sm leading-6 text-slate-600">
//                     Our support team is ready to help with your product,
//                     order, and nutrition questions.
//                   </p>
//                   <a
//                     href="mailto:support@eatprotein.in"
//                     className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 transition hover:text-emerald-500"
//                   >
//                     Email our team <ArrowUpRight size={16} />
//                   </a>
//                 </div>
//               </div>
//             </div>*/}
//           </div>

//           {/* Right column: Form */}
//           <div className="rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-[0_12px_45px_-25px_rgba(15,23,42,0.22)] sm:p-8 lg:p-5">
//             <div className="mb-4">
//               <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
//                 Send an inquiry
//               </span>
//               <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
//                 Send us a message
//               </h2>
//               <p className="mt-2 text-sm leading-6 text-slate-500">
//                 Fill in the details below and tell us how we can help.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="text-sm font-semibold text-slate-700"
//                   >
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     autoComplete="name"
//                     required
//                     maxLength={100}
//                     placeholder="Your full name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="text-sm font-semibold text-slate-700"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     autoComplete="tel"
//                     maxLength={20}
//                     placeholder="Your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="text-sm font-semibold text-slate-700"
//                 >
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   maxLength={254}
//                   placeholder="your.email@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="text-sm font-semibold text-slate-700"
//                 >
//                   Subject <span className="text-red-500">*</span>
//                 </label>

//                 <div className="relative">
//                   <select
//                     id="subject"
//                     name="subject"
//                     required
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className={`${inputClass} cursor-pointer appearance-none pr-11`}
//                   >
//                     <option value="" disabled>
//                       Select a subject
//                     </option>
//                     {subjects.map((subject) => (
//                       <option key={subject} value={subject}>
//                         {subject}
//                       </option>
//                     ))}
//                   </select>

//                   <svg
//                     className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="m5 7 5 5 5-5"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="text-sm font-semibold text-slate-700"
//                 >
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   minLength={10}
//                   maxLength={3000}
//                   rows={5}
//                   placeholder="Tell us how we can help you..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={`${inputClass} min-h-36 resize-y`}
//                 />
//                 <p className="mt-1.5 text-right text-xs text-slate-400">
//                   {formData.message.length}/3000 characters
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0"
//               >
//                 <Send
//                   size={17}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//                 Send Message
//               </button>

//               {submitted && (
//                 <p role="status" className="text-sm leading-6 text-emerald-700">
//                   Your email application should open with your message prepared.
//                   Please send the email to complete your inquiry.
//                 </p>
//               )}

//               <p className="text-center text-xs leading-5 text-slate-500">
//                 Your information will be used to respond to your inquiry.
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Frequently Asked Questions */}
//       <section className="bg-slate-50 px-5 py-14 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-5xl">
//           <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
//             <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
//               Helpful information
//             </span>
//             <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//               Frequently Asked Questions
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
//               Quick answers to common questions about our products and services.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             {faqs.map((faq) => {
//               const Icon = faq.icon;
//               const styles = colorStyles[faq.color];

//               return (
//                 <article
//                   key={faq.question}
//                   className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg sm:p-6"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
//                     >
//                       <Icon size={19} />
//                     </div>

//                     <div>
//                       <h3 className="font-bold leading-6 text-slate-900">
//                         {faq.question}
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-slate-600">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="mt-8 text-center">
//             <p className="text-sm text-slate-600">
//               Still have questions?{" "}
//               <a
//                 href="mailto:support@eatprotein.in"
//                 className="font-bold text-emerald-700 transition hover:text-emerald-500"
//               >
//                 Contact our team
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   MessageCircle,
//   Headphones,
//   CheckCircle2,
// } from "lucide-react";

// const EMAILJS = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
// };

// const SUPPORT_EMAIL = "support@eatprotein.in";

// const contactDetails = [
//   {
//     icon: Phone,
//     title: "Phone",
//     color: "green",
//     lines: ["+91 9440701380", "Mon-Fri 9:00 AM - 6:00 PM IST"],
//     href: "tel:+919440701380",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     color: "blue",
//     lines: [SUPPORT_EMAIL, "We'll respond within 24 hours"],
//     href: `mailto:${SUPPORT_EMAIL}`,
//   },
//   {
//     icon: MapPin,
//     title: "Address",
//     color: "orange",
//     lines: [
//       "Pallaki Enclave, 3rd Floor,",
//       "Plot no: 44 Municipal Plots, Udayagiri Rd,",
//       "Bapuji Nagar, Kavali,",
//       "Andhra Pradesh 524201",
//     ],
//     href: "https://maps.google.com/?q=Pallaki+Enclave+Kavali+Andhra+Pradesh",
//   },
//   {
//     icon: Clock,
//     title: "Business Hours",
//     color: "purple",
//     lines: [
//       "Monday - Friday: 9:00 AM - 6:00 PM",
//       "Saturday: 10:00 AM - 4:00 PM",
//       "Sunday: Closed",
//     ],
//   },
// ];

// const subjects = [
//   "Product Inquiry",
//   "Nutrition Advice",
//   "Order Support",
//   "Franchise Inquiry",
//   "Technical Support",
//   "Other",
// ];

// const faqs = [
//   {
//     icon: MessageCircle,
//     color: "green",
//     question: "What types of protein products do you offer?",
//     answer:
//       "We offer a wide range of protein-rich foods including nuts, seeds, protein bars, supplements, and healthy snacks carefully selected for quality and nutrition.",
//   },
//   {
//     icon: Headphones,
//     color: "blue",
//     question: "How can I track my order?",
//     answer:
//       "Once your order is shipped, you'll receive a tracking number via email. You can also check your order status in the Eat Protein mobile app.",
//   },
//   {
//     icon: MessageCircle,
//     color: "orange",
//     question: "Do you provide nutrition consultation?",
//     answer:
//       "Yes! Our qualified nutritionists are available for personalized consultation through our app and via phone appointments.",
//   },
//   {
//     icon: Headphones,
//     color: "purple",
//     question: "What is your return policy?",
//     answer:
//       "We offer a 30-day return policy for unopened products. If you're not satisfied, contact our support team for assistance with a refund or exchange.",
//   },
// ];

// const colorStyles = {
//   green: {
//     icon: "bg-emerald-50 text-emerald-600",
//     line: "bg-emerald-500",
//   },
//   blue: {
//     icon: "bg-blue-50 text-blue-600",
//     line: "bg-blue-500",
//   },
//   orange: {
//     icon: "bg-orange-50 text-orange-600",
//     line: "bg-orange-500",
//   },
//   purple: {
//     icon: "bg-purple-50 text-purple-600",
//     line: "bg-purple-500",
//   },
// };

// const inputClass =
//   "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";

// const emptyForm = {
//   fullName: "",
//   phone: "",
//   email: "",
//   subject: "",
//   message: "",
// };

// export default function Contact() {
//   const [formData, setFormData] = useState(emptyForm);
//   // idle | sending | success | error
//   const [status, setStatus] = useState("idle");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (status !== "sending") setStatus("idle");
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (status === "sending") return;

//     setStatus("sending");

//     const baseParams = {
//       from_name: formData.fullName.trim(),
//       from_phone: formData.phone.trim() || "Not provided",
//       from_email: formData.email.trim(),
//       subject: formData.subject,
//       message: formData.message.trim(),
//       time:
//         new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) +
//         " IST",
//     };

//     // Email 1: notification to the Eat Protein team
//     const teamParams = {
//       ...baseParams,
//       to_email: SUPPORT_EMAIL,
//       reply_to: baseParams.from_email,
//       email_subject: `New ${baseParams.subject} inquiry from ${baseParams.from_name}`,
//       header_title: "New website inquiry received",
//       intro_text:
//         "A customer has submitted the contact form. The details are below.",
//       cta_label: `Reply to ${baseParams.from_name}`,
//       cta_link: `mailto:${baseParams.from_email}?subject=${encodeURIComponent(
//         `Re: ${baseParams.subject}`,
//       )}`,
//       footer_note: "Sent from the Contact form at eatprotein.in",
//     };

//     // Email 2: auto-reply to the customer
//     const customerParams = {
//       ...baseParams,
//       to_email: baseParams.from_email,
//       reply_to: SUPPORT_EMAIL,
//       email_subject: `We received your message, ${baseParams.from_name}`,
//       header_title: "Thank you for reaching out!",
//       intro_text: `Hi ${baseParams.from_name}, thanks for contacting Eat Protein. We have received your inquiry and will get back to you within 24 hours. Here is a copy of what you sent us.`,
//       cta_label: "Visit Eat Protein",
//       cta_link: "https://eatprotein.in",
//       footer_note:
//         "This is an automatic confirmation. Reply to this email if you need to add details.",
//     };

//     const options = { publicKey: EMAILJS.publicKey };

//     try {
//       // The team notification must succeed
//       await emailjs.send(
//         EMAILJS.serviceId,
//         EMAILJS.templateId,
//         teamParams,
//         options,
//       );

//       // The auto-reply should never block the user if it fails
//       emailjs
//         .send(EMAILJS.serviceId, EMAILJS.templateId, customerParams, options)
//         .catch((error) => console.error("Auto-reply failed:", error));

//       setStatus("success");
//       setFormData(emptyForm);
//     } catch (error) {
//       console.error("EmailJS error:", error);
//       setStatus("error");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white text-slate-800">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-white px-5 py-10 sm:py-10 lg:py-12">
//         <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-lime-100/70 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm sm:text-sm">
//             <span className="h-2 w-2 rounded-full bg-emerald-500" />
//             We're here to help
//           </span>

//           <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//             Let's talk <span className="text-emerald-600">nutrition.</span>
//           </h1>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//             Have questions about our products or need nutrition advice? We'd
//             love to hear from you. Reach out to our friendly team.
//           </p>

//           <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
//             <span className="inline-flex items-center gap-2">
//               <CheckCircle2 size={17} className="text-emerald-600" />
//               Friendly support
//             </span>
//             <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
//             <span className="inline-flex items-center gap-2">
//               <CheckCircle2 size={17} className="text-emerald-600" />
//               Replies within 24 hours
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Contact details and form */}
//       <section className="px-5 py-14 sm:py-16 lg:py-15">
//         <div className="mx-auto grid max-w-6xl gap-15 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
//           {/* Left column */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
//               Contact information
//             </span>

//             <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//               Get in touch
//             </h2>

//             <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
//               We'd love to hear from you. Send us a message and we'll respond as
//               soon as possible.
//             </p>

//             <div className="mt-5 space-y-7">
//               {contactDetails.map((item) => {
//                 const Icon = item.icon;
//                 const styles = colorStyles[item.color];

//                 return (
//                   <div key={item.title} className="flex gap-4">
//                     <div
//                       className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
//                     >
//                       <Icon size={22} strokeWidth={1.9} />
//                     </div>

//                     <div className="min-w-0 flex-1 pt-0.5">
//                       <h3 className="font-bold text-slate-900">{item.title}</h3>

//                       <div className="mt-2 space-y-1">
//                         {item.lines.map((line, index) => (
//                           <p
//                             key={line}
//                             className={`text-sm leading-6 ${
//                               index === 0 && item.href
//                                 ? "text-slate-700"
//                                 : "text-slate-500"
//                             }`}
//                           >
//                             {index === 0 && item.href ? (
//                               <a
//                                 href={item.href}
//                                 target={
//                                   item.href.startsWith("https")
//                                     ? "_blank"
//                                     : undefined
//                                 }
//                                 rel={
//                                   item.href.startsWith("https")
//                                     ? "noreferrer"
//                                     : undefined
//                                 }
//                                 className="break-words transition hover:text-emerald-600"
//                               >
//                                 {line}
//                               </a>
//                             ) : (
//                               line
//                             )}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right column: Form */}
//           <div className="rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-[0_12px_45px_-25px_rgba(15,23,42,0.22)] sm:p-8 lg:p-5">
//             <div className="mb-4">
//               <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
//                 Send an inquiry
//               </span>
//               <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
//                 Send us a message
//               </h2>
//               <p className="mt-2 text-sm leading-6 text-slate-500">
//                 Fill in the details below and tell us how we can help.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="text-sm font-semibold text-slate-700"
//                   >
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     autoComplete="name"
//                     required
//                     maxLength={100}
//                     placeholder="Your full name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="text-sm font-semibold text-slate-700"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     autoComplete="tel"
//                     maxLength={20}
//                     placeholder="Your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="text-sm font-semibold text-slate-700"
//                 >
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   maxLength={254}
//                   placeholder="your.email@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="text-sm font-semibold text-slate-700"
//                 >
//                   Subject <span className="text-red-500">*</span>
//                 </label>

//                 <div className="relative">
//                   <select
//                     id="subject"
//                     name="subject"
//                     required
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className={`${inputClass} cursor-pointer appearance-none pr-11`}
//                   >
//                     <option value="" disabled>
//                       Select a subject
//                     </option>
//                     {subjects.map((subject) => (
//                       <option key={subject} value={subject}>
//                         {subject}
//                       </option>
//                     ))}
//                   </select>

//                   <svg
//                     className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="m5 7 5 5 5-5"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="text-sm font-semibold text-slate-700"
//                 >
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   minLength={10}
//                   maxLength={3000}
//                   rows={5}
//                   placeholder="Tell us how we can help you..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={`${inputClass} min-h-36 resize-y`}
//                 />
//                 <p className="mt-1.5 text-right text-xs text-slate-400">
//                   {formData.message.length}/3000 characters
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
//               >
//                 <Send
//                   size={17}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//                 {status === "sending" ? "Sending..." : "Send Message"}
//               </button>

//               {status === "success" && (
//                 <p
//                   role="status"
//                   className="rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-700"
//                 >
//                   Thank you! Your message has been sent. Please check your inbox
//                   for a confirmation email.
//                 </p>
//               )}

//               {status === "error" && (
//                 <p
//                   role="alert"
//                   className="rounded-xl bg-red-50 p-3 text-sm leading-6 text-red-600"
//                 >
//                   Something went wrong while sending your message. Please try
//                   again or email us at {SUPPORT_EMAIL}.
//                 </p>
//               )}

//               <p className="text-center text-xs leading-5 text-slate-500">
//                 Your information will be used to respond to your inquiry.
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Frequently Asked Questions */}
//       <section className="bg-slate-50 px-5 py-14 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-5xl">
//           <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
//             <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
//               Helpful information
//             </span>
//             <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//               Frequently Asked Questions
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
//               Quick answers to common questions about our products and services.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             {faqs.map((faq) => {
//               const Icon = faq.icon;
//               const styles = colorStyles[faq.color];

//               return (
//                 <article
//                   key={faq.question}
//                   className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg sm:p-6"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
//                     >
//                       <Icon size={19} />
//                     </div>

//                     <div>
//                       <h3 className="font-bold leading-6 text-slate-900">
//                         {faq.question}
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-slate-600">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="mt-8 text-center">
//             <p className="text-sm text-slate-600">
//               Still have questions?{" "}
//               <a
//                 href={`mailto:${SUPPORT_EMAIL}`}
//                 className="font-bold text-emerald-700 transition hover:text-emerald-500"
//               >
//                 Contact our team
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   MessageCircle,
//   Headphones,
//   CheckCircle2,
// } from "lucide-react";

// const EMAILJS = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
// };

// const SUPPORT_EMAIL = "support@eatprotein.in";

// const contactDetails = [
//   {
//     icon: Phone,
//     title: "Phone",
//     color: "green",
//     lines: ["+91 9440701380", "Mon-Fri 9:00 AM - 6:00 PM IST"],
//     href: "tel:+919440701380",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     color: "blue",
//     lines: [SUPPORT_EMAIL, "We'll respond within 24 hours"],
//     href: `mailto:${SUPPORT_EMAIL}`,
//   },
//   {
//     icon: MapPin,
//     title: "Address",
//     color: "orange",
//     lines: [
//       "Pallaki Enclave, 3rd Floor,",
//       "Plot no: 44 Municipal Plots, Udayagiri Rd,",
//       "Bapuji Nagar, Kavali,",
//       "Andhra Pradesh 524201",
//     ],
//     href: "https://maps.google.com/?q=Pallaki+Enclave+Kavali+Andhra+Pradesh",
//   },
//   {
//     icon: Clock,
//     title: "Business Hours",
//     color: "purple",
//     lines: [
//       "Monday - Friday: 9:00 AM - 6:00 PM",
//       "Saturday: 10:00 AM - 4:00 PM",
//       "Sunday: Closed",
//     ],
//   },
// ];

// const subjects = [
//   "Product Inquiry",
//   "Nutrition Advice",
//   "Order Support",
//   "Franchise Inquiry",
//   "Technical Support",
//   "Other",
// ];

// const faqs = [
//   {
//     icon: MessageCircle,
//     color: "green",
//     question: "What types of protein products do you offer?",
//     answer:
//       "We offer a wide range of protein-rich foods including nuts, seeds, protein bars, supplements, and healthy snacks carefully selected for quality and nutrition.",
//   },
//   {
//     icon: Headphones,
//     color: "blue",
//     question: "How can I track my order?",
//     answer:
//       "Once your order is shipped, you'll receive a tracking number via email. You can also check your order status in the Eat Protein mobile app.",
//   },
//   {
//     icon: MessageCircle,
//     color: "orange",
//     question: "Do you provide nutrition consultation?",
//     answer:
//       "Yes! Our qualified nutritionists are available for personalized consultation through our app and via phone appointments.",
//   },
//   {
//     icon: Headphones,
//     color: "purple",
//     question: "What is your return policy?",
//     answer:
//       "We offer a 30-day return policy for unopened products. If you're not satisfied, contact our support team for assistance with a refund or exchange.",
//   },
// ];

// const colorStyles = {
//   green: {
//     icon: "bg-emerald-50 text-emerald-600",
//     line: "bg-emerald-500",
//   },
//   blue: {
//     icon: "bg-blue-50 text-blue-600",
//     line: "bg-blue-500",
//   },
//   orange: {
//     icon: "bg-orange-50 text-orange-600",
//     line: "bg-orange-500",
//   },
//   purple: {
//     icon: "bg-purple-50 text-purple-600",
//     line: "bg-purple-500",
//   },
// };

// const inputClass =
//   "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";

// const emptyForm = {
//   fullName: "",
//   phone: "",
//   email: "",
//   subject: "",
//   message: "",
// };

// export default function Contact() {
//   const [formData, setFormData] = useState(emptyForm);
//   // idle | sending | success | error
//   const [status, setStatus] = useState("idle");
//   const [submittedName, setSubmittedName] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (status !== "sending") setStatus("idle");
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (status === "sending") return;

//     setStatus("sending");

//     const params = {
//       from_name: formData.fullName.trim(),
//       from_phone: formData.phone.trim() || "Not provided",
//       from_email: formData.email.trim(),
//       subject: formData.subject,
//       message: formData.message.trim(),
//       time:
//         new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) +
//         " IST",
//     };

//     try {
//       await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, params, {
//         publicKey: EMAILJS.publicKey,
//       });

//       setSubmittedName(params.from_name.split(" ")[0]);
//       setFormData(emptyForm);
//       setStatus("success");
//     } catch (error) {
//       console.error("EmailJS error:", error?.status, error?.text || error);
//       setStatus("error");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white text-slate-800">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-white px-5 py-10 sm:py-10 lg:py-12">
//         <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-lime-100/70 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm sm:text-sm">
//             <span className="h-2 w-2 rounded-full bg-emerald-500" />
//             We're here to help
//           </span>

//           <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//             Let's talk <span className="text-emerald-600">nutrition.</span>
//           </h1>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//             Have questions about our products or need nutrition advice? We'd
//             love to hear from you. Reach out to our friendly team.
//           </p>

//           <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
//             <span className="inline-flex items-center gap-2">
//               <CheckCircle2 size={17} className="text-emerald-600" />
//               Friendly support
//             </span>
//             <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
//             <span className="inline-flex items-center gap-2">
//               <CheckCircle2 size={17} className="text-emerald-600" />
//               Replies within 24 hours
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Contact details and form */}
//       <section className="px-5 py-14 sm:py-16 lg:py-15">
//         <div className="mx-auto grid max-w-6xl gap-15 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
//           {/* Left column */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
//               Contact information
//             </span>

//             <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//               Get in touch
//             </h2>

//             <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
//               We'd love to hear from you. Send us a message and we'll respond as
//               soon as possible.
//             </p>

//             <div className="mt-5 space-y-7">
//               {contactDetails.map((item) => {
//                 const Icon = item.icon;
//                 const styles = colorStyles[item.color];

//                 return (
//                   <div key={item.title} className="flex gap-4">
//                     <div
//                       className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
//                     >
//                       <Icon size={22} strokeWidth={1.9} />
//                     </div>

//                     <div className="min-w-0 flex-1 pt-0.5">
//                       <h3 className="font-bold text-slate-900">{item.title}</h3>

//                       <div className="mt-2 space-y-1">
//                         {item.lines.map((line, index) => (
//                           <p
//                             key={line}
//                             className={`text-sm leading-6 ${
//                               index === 0 && item.href
//                                 ? "text-slate-700"
//                                 : "text-slate-500"
//                             }`}
//                           >
//                             {index === 0 && item.href ? (
//                               <a
//                                 href={item.href}
//                                 target={
//                                   item.href.startsWith("https")
//                                     ? "_blank"
//                                     : undefined
//                                 }
//                                 rel={
//                                   item.href.startsWith("https")
//                                     ? "noreferrer"
//                                     : undefined
//                                 }
//                                 className="break-words transition hover:text-emerald-600"
//                               >
//                                 {line}
//                               </a>
//                             ) : (
//                               line
//                             )}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right column: Form / Thank-you message */}
//           <div className="rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-[0_12px_45px_-25px_rgba(15,23,42,0.22)] sm:p-8 lg:p-5">
//             {status === "success" ? (
//               <div
//                 role="status"
//                 className="flex min-h-[28rem] flex-col items-center justify-center px-4 py-10 text-center"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
//                   <CheckCircle2 size={34} strokeWidth={1.8} />
//                 </div>

//                 <h2 className="mt-6 text-2xl font-extrabold text-slate-900 sm:text-3xl">
//                   Thank you{submittedName ? `, ${submittedName}` : ""}!
//                 </h2>

//                 <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
//                   Your message has been received. Our team will review it and{" "}
//                   <span className="font-semibold text-slate-800">
//                     get back to you within 24 hours
//                   </span>
//                   .
//                 </p>

//                 <p className="mt-4 text-sm leading-6 text-slate-500">
//                   For urgent queries, call us on{" "}
//                   <a
//                     href="tel:+919440701380"
//                     className="font-semibold text-emerald-700 transition hover:text-emerald-500"
//                   >
//                     +91 9440701380
//                   </a>
//                   .
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setStatus("idle")}
//                   className="mt-7 rounded-xl border border-emerald-200 bg-white px-5 py-2.5 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-100"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className="mb-4">
//                   <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
//                     Send an inquiry
//                   </span>
//                   <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
//                     Send us a message
//                   </h2>
//                   <p className="mt-2 text-sm leading-6 text-slate-500">
//                     Fill in the details below and tell us how we can help.
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="grid gap-5 sm:grid-cols-2">
//                     <div>
//                       <label
//                         htmlFor="fullName"
//                         className="text-sm font-semibold text-slate-700"
//                       >
//                         Full Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="fullName"
//                         name="fullName"
//                         type="text"
//                         autoComplete="name"
//                         required
//                         maxLength={100}
//                         placeholder="Your full name"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         className={inputClass}
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="phone"
//                         className="text-sm font-semibold text-slate-700"
//                       >
//                         Phone Number
//                       </label>
//                       <input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         autoComplete="tel"
//                         maxLength={20}
//                         placeholder="Your phone number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className={inputClass}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="text-sm font-semibold text-slate-700"
//                     >
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       required
//                       maxLength={254}
//                       placeholder="your.email@example.com"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={inputClass}
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="subject"
//                       className="text-sm font-semibold text-slate-700"
//                     >
//                       Subject <span className="text-red-500">*</span>
//                     </label>

//                     <div className="relative">
//                       <select
//                         id="subject"
//                         name="subject"
//                         required
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className={`${inputClass} cursor-pointer appearance-none pr-11`}
//                       >
//                         <option value="" disabled>
//                           Select a subject
//                         </option>
//                         {subjects.map((subject) => (
//                           <option key={subject} value={subject}>
//                             {subject}
//                           </option>
//                         ))}
//                       </select>

//                       <svg
//                         className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         aria-hidden="true"
//                       >
//                         <path
//                           d="m5 7 5 5 5-5"
//                           stroke="currentColor"
//                           strokeWidth="1.8"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="text-sm font-semibold text-slate-700"
//                     >
//                       Message <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       minLength={10}
//                       maxLength={3000}
//                       rows={5}
//                       placeholder="Tell us how we can help you..."
//                       value={formData.message}
//                       onChange={handleChange}
//                       className={`${inputClass} min-h-36 resize-y`}
//                     />
//                     <p className="mt-1.5 text-right text-xs text-slate-400">
//                       {formData.message.length}/3000 characters
//                     </p>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={status === "sending"}
//                     className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
//                   >
//                     <Send
//                       size={17}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                     {status === "sending" ? "Sending..." : "Send Message"}
//                   </button>

//                   {status === "error" && (
//                     <p
//                       role="alert"
//                       className="rounded-xl bg-red-50 p-3 text-sm leading-6 text-red-600"
//                     >
//                       Something went wrong while sending your message. Please
//                       try again or email us at {SUPPORT_EMAIL}.
//                     </p>
//                   )}

//                   <p className="text-center text-xs leading-5 text-slate-500">
//                     Your information will be used to respond to your inquiry.
//                   </p>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Frequently Asked Questions */}
//       <section className="bg-slate-50 px-5 py-14 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-5xl">
//           <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
//             <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
//               Helpful information
//             </span>
//             <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//               Frequently Asked Questions
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
//               Quick answers to common questions about our products and services.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             {faqs.map((faq) => {
//               const Icon = faq.icon;
//               const styles = colorStyles[faq.color];

//               return (
//                 <article
//                   key={faq.question}
//                   className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg sm:p-6"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
//                     >
//                       <Icon size={19} />
//                     </div>

//                     <div>
//                       <h3 className="font-bold leading-6 text-slate-900">
//                         {faq.question}
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-slate-600">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="mt-8 text-center">
//             <p className="text-sm text-slate-600">
//               Still have questions?{" "}
//               <a
//                 href={`mailto:${SUPPORT_EMAIL}`}
//                 className="font-bold text-emerald-700 transition hover:text-emerald-500"
//               >
//                 Contact our team
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const SUPPORT_EMAIL = "support@eatprotein.in";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    color: "green",
    lines: ["+91 9440701380", "Mon-Fri 9:00 AM - 6:00 PM IST"],
    href: "tel:+919440701380",
  },
  {
    icon: Mail,
    title: "Email",
    color: "blue",
    lines: [SUPPORT_EMAIL, "We'll respond within 24 hours"],
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: MapPin,
    title: "Address",
    color: "orange",
    lines: [
      "Pallaki Enclave, 3rd Floor,",
      "Plot no: 44 Municipal Plots, Udayagiri Rd,",
      "Bapuji Nagar, Kavali,",
      "Andhra Pradesh 524201",
    ],
    href: "https://maps.google.com/?q=Pallaki+Enclave+Kavali+Andhra+Pradesh",
  },
  {
    icon: Clock,
    title: "Business Hours",
    color: "purple",
    lines: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
  },
];

const subjects = [
  "Product Inquiry",
  "Nutrition Advice",
  "Order Support",
  "Franchise Inquiry",
  "Technical Support",
  "Other",
];

const faqs = [
  {
    icon: MessageCircle,
    color: "green",
    question: "What types of protein products do you offer?",
    answer:
      "We offer a wide range of protein-rich foods including nuts, seeds, protein bars, supplements, and healthy snacks carefully selected for quality and nutrition.",
  },
  {
    icon: Headphones,
    color: "blue",
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking number via email. You can also check your order status in the Eat Protein mobile app.",
  },
  {
    icon: MessageCircle,
    color: "orange",
    question: "Do you provide nutrition consultation?",
    answer:
      "Yes! Our qualified nutritionists are available for personalized consultation through our app and via phone appointments.",
  },
  {
    icon: Headphones,
    color: "purple",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unopened products. If you're not satisfied, contact our support team for assistance with a refund or exchange.",
  },
];

const colorStyles = {
  green: {
    icon: "bg-emerald-50 text-emerald-600",
    line: "bg-emerald-500",
  },
  blue: {
    icon: "bg-blue-50 text-blue-600",
    line: "bg-blue-500",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    line: "bg-orange-500",
  },
  purple: {
    icon: "bg-purple-50 text-purple-600",
    line: "bg-purple-500",
  },
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";

const emptyForm = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

// Validation rules
const validateField = (name, value) => {
  const trimmedValue = value.trim();

  switch (name) {
    case "fullName":
      if (!trimmedValue) return "Please enter your full name.";
      if (trimmedValue.length < 2)
        return "Name must contain at least 2 characters.";
      if (trimmedValue.length > 100)
        return "Name cannot exceed 100 characters.";
      if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u.test(trimmedValue))
        return "Use letters, spaces, apostrophes, periods, or hyphens only.";
      return "";

    case "phone": {
  if (!trimmedValue) {
    return "Please enter your phone number.";
  }

  // Allow digits, spaces, +, hyphens, and parentheses.
  if (!/^[+\d\s()-]+$/.test(trimmedValue)) {
    return "Please enter a valid phone number.";
  }

  const digits = trimmedValue.replace(/\D/g, "");

  // Accept 10-digit Indian mobile numbers or 91 + 10 digits.
  const validIndianMobile = /^[6-9]\d{9}$/.test(digits);
  const validWithCountryCode = /^91[6-9]\d{9}$/.test(digits);

  if (!validIndianMobile && !validWithCountryCode) {
    return "Enter a valid 10-digit Indian mobile number.";
  }

  return "";
}

    case "email":
      if (!trimmedValue) return "Please enter your email address.";
      if (trimmedValue.length > 254)
        return "Email address is too long.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedValue))
        return "Please enter a valid email address.";
      return "";

    case "subject":
      if (!trimmedValue) return "Please select a subject.";
      if (!subjects.includes(trimmedValue))
        return "Please select a valid subject.";
      return "";

    case "message":
      if (!trimmedValue) return "Please enter your message.";
      if (trimmedValue.length < 10)
        return "Message must contain at least 10 characters.";
      if (trimmedValue.length > 3000)
        return "Message cannot exceed 3,000 characters.";
      return "";

    default:
      return "";
  }
};

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [submittedName, setSubmittedName] = useState("");
  const [submitError, setSubmitError] = useState("");

  const thankYouRef = useRef(null);
  const formHeadingRef = useRef(null);

  // Move the thank-you message into view after successful submission.
  useEffect(() => {
    if (status === "success" && thankYouRef.current) {
      requestAnimationFrame(() => {
        thankYouRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Validate immediately after a field has been touched.
    if (touched[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, value),
      }));
    }

    if (status === "error") setStatus("idle");
    setSubmitError("");
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    // Validate every field before attempting to send.
    const nextErrors = {};

    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) nextErrors[name] = error;
    });

    setErrors(nextErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.values(nextErrors).some(Boolean)) {
      const firstInvalidField = Object.keys(nextErrors).find(
        (name) => nextErrors[name]
      );

      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    // Prevent a confusing failure if the .env configuration is missing.
    if (
      !EMAILJS.serviceId ||
      !EMAILJS.templateId ||
      !EMAILJS.publicKey
    ) {
      setStatus("error");
      setSubmitError(
        "Email service is not configured. Please contact support directly."
      );
      console.error(
        "EmailJS configuration is missing. Check your VITE_EMAILJS_* variables."
      );
      return;
    }

    setStatus("sending");
    setSubmitError("");

    const params = {
      from_name: formData.fullName.trim(),
      from_phone: formData.phone.trim() || "Not provided",
      from_email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
      time:
        new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }) + " IST",
    };

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        params,
        { publicKey: EMAILJS.publicKey }
      );

      setSubmittedName(params.from_name.split(/\s+/)[0]);
      setFormData({ ...emptyForm });
      setErrors({});
      setTouched({});
      setStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error?.status, error?.text || error);
      setStatus("error");
      setSubmitError(
        "We couldn't send your message right now. Please try again or email us directly."
      );
    }
  };

  const startAnotherMessage = () => {
    setFormData({ ...emptyForm });
    setErrors({});
    setTouched({});
    setSubmitError("");
    setStatus("idle");

    requestAnimationFrame(() => {
      formHeadingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const fieldError = (name) =>
    errors[name] && touched[name] ? errors[name] : "";

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-white px-5 py-10 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-lime-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            We're here to help
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let's talk <span className="text-emerald-600">nutrition.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have questions about our products or need nutrition advice? We'd
            love to hear from you. Reach out to our friendly team.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-600" />
              Friendly support
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-600" />
              Replies within 24 hours
            </span>
          </div>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="px-5 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Left column */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
              Contact information
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Get in touch
            </h2>

            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              We'd love to hear from you. Send us a message and we'll respond
              as soon as possible.
            </p>

            <div className="mt-8 space-y-7">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const styles = colorStyles[item.color];

                return (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
                    >
                      <Icon size={22} strokeWidth={1.9} />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <div className="mt-2 space-y-1">
                        {item.lines.map((line, index) => (
                          <p
                            key={line}
                            className={`text-sm leading-6 ${
                              index === 0 && item.href
                                ? "text-slate-700"
                                : "text-slate-500"
                            }`}
                          >
                            {index === 0 && item.href ? (
                              <a
                                href={item.href}
                                target={
                                  item.href.startsWith("https")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  item.href.startsWith("https")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="break-words transition hover:text-emerald-600"
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div
            ref={formHeadingRef}
            className="scroll-mt-6 rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-[0_12px_45px_-25px_rgba(15,23,42,0.22)] sm:p-8 lg:p-7"
          >
            {status === "success" ? (
              <div
                ref={thankYouRef}
                role="status"
                aria-live="polite"
                className="flex min-h-[28rem] scroll-mt-6 flex-col items-center justify-center px-3 py-10 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={34} strokeWidth={1.8} />
                </div>

                <span className="mt-5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Message sent successfully
                </span>

                <h2 className="mt-5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Thank you{submittedName ? `, ${submittedName}` : ""}!
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
                  Your message has been received. Our team will review it and
                  <span className="font-semibold text-slate-800">
                    {" "}get back to you within 24 hours
                  </span>
                  .
                </p>

                <div className="mt-5 rounded-xl border border-emerald-100 bg-white p-4 text-sm leading-6 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">
                      Need help urgently?
                    </span>
                  </p>
                  Call us at{" "}
                  <a
                    href="tel:+919440701380"
                    className="font-semibold text-emerald-700 hover:text-emerald-500"
                  >
                    +91 9440701380
                  </a>
                </div>

                <button
                  type="button"
                  onClick={startAnotherMessage}
                  className="mt-7 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                    Send an inquiry
                  </span>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fill in the details below and tell us how we can help.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="text-sm font-semibold text-slate-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(fieldError("fullName"))}
                        aria-describedby={
                          fieldError("fullName") ? "fullName-error" : undefined
                        }
                        className={`${inputClass} ${
                          fieldError("fullName")
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : ""
                        }`}
                      />
                      {fieldError("fullName") && (
                        <p
                          id="fullName-error"
                          className="mt-1.5 text-xs leading-5 text-red-600"
                        >
                          {fieldError("fullName")}
                        </p>
                      )}
                    </div>

                    
<div>
  <label
    htmlFor="phone"
    className="text-sm font-semibold text-slate-700"
  >
    Phone Number <span className="text-red-500">*</span>
  </label>

  <input
    id="phone"
    name="phone"
    type="tel"
    autoComplete="tel"
    required
    maxLength={20}
    placeholder="+91 9876543210"
    value={formData.phone}
    onChange={handleChange}
    onBlur={handleBlur}
    aria-invalid={Boolean(fieldError("phone"))}
    aria-describedby={
      fieldError("phone") ? "phone-error" : undefined
    }
    className={`${inputClass} ${
      fieldError("phone")
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : ""
    }`}
  />

  {fieldError("phone") && (
    <p
      id="phone-error"
      role="alert"
      className="mt-1.5 text-xs leading-5 text-red-600"
    >
      {fieldError("phone")}
    </p>
  )}
</div>

                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(fieldError("email"))}
                      aria-describedby={
                        fieldError("email") ? "email-error" : undefined
                      }
                      className={`${inputClass} ${
                        fieldError("email")
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : ""
                      }`}
                    />
                    {fieldError("email") && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs leading-5 text-red-600"
                      >
                        {fieldError("email")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(fieldError("subject"))}
                        aria-describedby={
                          fieldError("subject") ? "subject-error" : undefined
                        }
                        className={`${inputClass} cursor-pointer appearance-none pr-11 ${
                          fieldError("subject")
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : ""
                        }`}
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>

                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="m5 7 5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {fieldError("subject") && (
                      <p
                        id="subject-error"
                        className="mt-1.5 text-xs leading-5 text-red-600"
                      >
                        {fieldError("subject")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={3000}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(fieldError("message"))}
                      aria-describedby={
                        fieldError("message") ? "message-error" : undefined
                      }
                      className={`${inputClass} min-h-36 resize-y ${
                        fieldError("message")
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : ""
                      }`}
                    />
                    <div className="mt-1.5 flex items-start justify-between gap-3">
                      {fieldError("message") ? (
                        <p
                          id="message-error"
                          className="text-xs leading-5 text-red-600"
                        >
                          {fieldError("message")}
                        </p>
                      ) : (
                        <p className="text-xs text-slate-400">
                          Minimum 10 characters
                        </p>
                      )}
                      <p className="shrink-0 text-right text-xs text-slate-400">
                        {formData.message.length}/3000
                      </p>
                    </div>
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-3 text-sm leading-6 text-red-700"
                    >
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                      <p>
                        {submitError ||
                          `Something went wrong. Please try again or email ${SUPPORT_EMAIL}.`}
                        {submitError.includes("directly") && (
                          <>
                            {" "}
                            <a
                              href={`mailto:${SUPPORT_EMAIL}`}
                              className="font-bold underline"
                            >
                              {SUPPORT_EMAIL}
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    Your information will be used to respond to your inquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-slate-50 px-5 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
              Helpful information
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {faqs.map((faq) => {
              const Icon = faq.icon;
              const styles = colorStyles[faq.color];

              return (
                <article
                  key={faq.question}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="font-bold leading-6 text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Still have questions?{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-bold text-emerald-700 transition hover:text-emerald-500"
              >
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
