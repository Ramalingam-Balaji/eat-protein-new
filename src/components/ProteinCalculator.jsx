// import {
//   ArrowRight,
//   BarChart3,
//   Heart,
//   Leaf,
// } from "lucide-react";

// import {
//   LuUserRound,
//   LuBaby,
// } from "react-icons/lu";

// import { GiWeightLiftingUp } from "react-icons/gi";
// import { MdPregnantWoman } from "react-icons/md";
// import { FaPersonBreastfeeding } from "react-icons/fa6";
// import {
//   FaChild,
//   FaFemale,
// } from "react-icons/fa";

// import { useState } from "react";

// import { ACTIVITY_LEVELS, PROFILES } from "../data/homeData";
// import SectionTag from "./SectionTag";

// // --------------------------------
// // PROFILE ICONS - REACT ICONS
// // --------------------------------
// const PROFILE_ICONS = {
//   Adult: LuUserRound,
//   Kid: LuBaby,
//   "Pregnant Woman": MdPregnantWoman,
//   "Feeding Mother": FaPersonBreastfeeding,
//   Bodybuilder: GiWeightLiftingUp,
// };

// // --------------------------------
// // KID GENDER ICONS - REACT ICONS
// // --------------------------------
// const GENDER_ICONS = {
//   Boy: FaChild,
//   Girl: FaFemale,
// };

// export default function ProteinCalculator() {
//   // --------------------------------
//   // FORM STATES
//   // --------------------------------
//   const [profile, setProfile] = useState("Adult");
//   const [age, setAge] = useState(25);

//   const [heightUnit, setHeightUnit] = useState("cm");
//   const [height, setHeight] = useState(170);

//   const [weightUnit, setWeightUnit] = useState("kg");
//   const [weight, setWeight] = useState(20);

//   const [gender, setGender] = useState("Boy");

//   const [activity] = useState(
//     ACTIVITY_LEVELS?.[2]?.label ||
//       ACTIVITY_LEVELS?.[0]?.label ||
//       ""
//   );

//   // --------------------------------
//   // RESULT STATE
//   // --------------------------------
//   const [result, setResult] = useState({
//     bmi: "--",
//     protein: "--",
//     status: "",
//     calculated: false,
//   });

//   // --------------------------------
//   // HELPERS
//   // --------------------------------
//   const showValidationMessage = (message) => {
//     alert(message);
//   };

//   const getProfileAgeMessage = (selectedProfile, ageValue) => {
//     const adultProfiles = [
//       "Adult",
//       "Pregnant Woman",
//       "Feeding Mother",
//       "Bodybuilder",
//     ];

//     if (adultProfiles.includes(selectedProfile) && ageValue < 20) {
//       return `For the ${selectedProfile} profile, age must be 20 years or above.`;
//     }

//     if (selectedProfile === "Kid" && ageValue > 19) {
//       return "For the Kid profile, age must be 19 years or below.";
//     }

//     return "";
//   };

//   const getHeightCm = () => {
//     const value = Number(height);

//     if (heightUnit === "cm") {
//       return value;
//     }

//     return value * 30.48;
//   };

//   const getWeightKg = () => {
//     const value = Number(weight);

//     if (weightUnit === "kg") {
//       return value;
//     }

//     return value * 0.45359237;
//   };

//   const validateForm = () => {
//     const ageValue = Number(age);
//     const heightValue = Number(height);
//     const weightValue = Number(weight);

//     if (
//       !Number.isFinite(ageValue) ||
//       ageValue < 0 ||
//       ageValue > 100
//     ) {
//       showValidationMessage("Please select a valid age.");
//       return false;
//     }

//     const ageMessage = getProfileAgeMessage(profile, ageValue);

//     if (ageMessage) {
//       showValidationMessage(ageMessage);
//       return false;
//     }

//     if (!Number.isFinite(heightValue) || heightValue <= 0) {
//       showValidationMessage("Please enter a valid height.");
//       return false;
//     }

//     if (
//       heightUnit === "cm" &&
//       (heightValue < 50 || heightValue > 249)
//     ) {
//       showValidationMessage("Height must be between 50 and 249 cm.");
//       return false;
//     }

//     if (
//       heightUnit === "ft" &&
//       (heightValue < 2 || heightValue > 11.9)
//     ) {
//       showValidationMessage("Height must be between 2 and 11.9 ft.");
//       return false;
//     }

//     if (!Number.isFinite(weightValue) || weightValue <= 0) {
//       showValidationMessage("Please enter a valid weight.");
//       return false;
//     }

//     if (
//       weightUnit === "kg" &&
//       (weightValue < 10 || weightValue > 209)
//     ) {
//       showValidationMessage("Weight must be between 10 and 209 kg.");
//       return false;
//     }

//     if (
//       weightUnit === "lb" &&
//       (weightValue < 20 || weightValue > 419)
//     ) {
//       showValidationMessage("Weight must be between 20 and 419 lb.");
//       return false;
//     }

//     return true;
//   };

//   // --------------------------------
//   // CALCULATE RESULTS
//   // --------------------------------
//   const handleCalculate = () => {
//     if (!validateForm()) return;

//     const heightCm = getHeightCm();
//     const weightKg = getWeightKg();

//     if (!heightCm || !weightKg) {
//       showValidationMessage("Please enter valid height and weight.");
//       return;
//     }

//     const heightM = heightCm / 100;
//     const bmi = weightKg / (heightM * heightM);

//     let status = "";

//     if (bmi < 18.5) {
//       status = "Underweight";
//     } else if (bmi < 25) {
//       status = "Normal";
//     } else if (bmi < 30) {
//       status = "Overweight";
//     } else {
//       status = "High";
//     }

//     const activityData = ACTIVITY_LEVELS?.find(
//       (item) => item.label === activity
//     );

//     const profileProteinFactors = {
//       Adult: 0.8,
//       Kid: 2,
//       "Pregnant Woman": 1.5,
//       "Feeding Mother": 1.5,
//       Bodybuilder: 1.7,
//     };

//     const profileFactor = profileProteinFactors[profile] ?? 1;

//     const protein = Math.max(
//       1,
//       Math.round(weightKg * profileFactor)
//     );

//     setResult({
//       bmi: bmi.toFixed(1),
//       protein,
//       status,
//       calculated: true,
//     });
//   };

//   // --------------------------------
//   // PROFILE CHANGE
//   // --------------------------------
//   const handleProfileChange = (item) => {
//     setProfile(item);

//     setResult({
//       bmi: "--",
//       protein: "--",
//       status: "",
//       calculated: false,
//     });
//   };

//   // --------------------------------
//   // HEIGHT UNIT CHANGE
//   // --------------------------------
//   const handleHeightUnitChange = () => {
//     if (heightUnit === "cm") {
//       const feetValue = Number(height) / 30.48;

//       setHeight(Number(feetValue.toFixed(1)));
//       setHeightUnit("ft");
//     } else {
//       const cmValue = Number(height) * 30.48;

//       setHeight(Math.round(cmValue));
//       setHeightUnit("cm");
//     }

//     setResult((prev) => ({
//       ...prev,
//       calculated: false,
//     }));
//   };

//   // --------------------------------
//   // WEIGHT UNIT CHANGE
//   // --------------------------------
//   const handleWeightUnitChange = () => {
//     if (weightUnit === "kg") {
//       const lbValue = Number(weight) / 0.45359237;

//       setWeight(Math.round(lbValue));
//       setWeightUnit("lb");
//     } else {
//       const kgValue = Number(weight) * 0.45359237;

//       setWeight(Math.round(kgValue));
//       setWeightUnit("kg");
//     }

//     setResult((prev) => ({
//       ...prev,
//       calculated: false,
//     }));
//   };

//   return (
//     <section
//       id="calculator"
//       className="scroll-mt-20 bg-white px-3 py-6 sm:px-5 sm:py-8"
//     >
//       <div
//         className="
//           mx-auto w-full max-w-[1450px] rounded-2xl
//           bg-gradient-to-r from-[#f0faea] to-[#edf9e9]
//           p-4 shadow-soft sm:p-6 lg:p-8
//         "
//       >
//         <div
//           className="
//             grid grid-cols-1 items-center gap-6
//             lg:grid-cols-[39%_61%] lg:gap-7
//           "
//         >
//           {/* LEFT CONTENT */}
//           <div className="min-w-0">
//             <SectionTag>
//               Personalized Nutrition Insights
//             </SectionTag>

//             <h2
//               className="
//                 mt-4 text-[27px] font-black leading-[1.08]
//                 tracking-tight text-protein-dark sm:text-[31px]
//               "
//             >
//               Know Your Protein Need
//               <br />
//               &amp; BMI in Seconds
//             </h2>

//             <p
//               className="
//                 mt-3 max-w-[430px] text-[15px]
//                 leading-5 text-slate-600 sm:text-sm
//               "
//             >
//               Get personalized results based on your age,
//               lifestyle and goals. One simple calculator
//               for everyone.
//             </p>

//             <div
//               className="
//                 mt-5 grid grid-cols-4 gap-1
//                 sm:mt-6 sm:gap-2
//               "
//             >
//               {[
//                 [LuUserRound, "Understand", "Your Body"],
//                 [Leaf, "Know Protein", "Requirement"],
//                 [BarChart3, "Get Your BMI", ""],
//                 [Heart, "Make Better", "Food Choices"],
//               ].map(([Icon, title, subtitle]) => (
//                 <div key={title} className="min-w-0 text-center">
//                   <div
//                     className="
//                       mx-auto grid h-9 w-9 place-items-center
//                       rounded-full bg-white text-protein-green
//                       shadow-sm sm:h-11 sm:w-11
//                     "
//                   >
//                     <Icon
//                       size={22}
//                       className="sm:h-[21px] sm:w-[21px]"
//                     />
//                   </div>

//                   <p
//                     className="
//                       mt-2 text-[12px] semibold
//                       leading-3 text-slate-700
//                     "
//                   >
//                     {title}
//                   </p>

//                   {subtitle && (
//                     <p
//                       className="
//                         text-[10px] semibold leading-3
//                         text-slate-700 sm:text-[12px]
//                       "
//                     >
//                       {subtitle}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CALCULATOR CARD */}
//           <div
//             className="
//               mx-auto w-full max-w-[560px]
//               rounded-2xl bg-white p-2.5
//               shadow-card sm:p-3
//             "
//           >
//             {/* PROFILE TABS */}
//             <div className="flex items-start justify-center gap-2 pb-3 sm:gap-3">
//               {PROFILES.map((item) => {
//                 const Icon = PROFILE_ICONS[item] || LuUserRound;
//                 const selected = profile === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => handleProfileChange(item)}
//                     aria-label={item}
//                     aria-pressed={selected}
//                     className="
//                       group flex min-w-0 flex-1
//                       flex-col items-center gap-1.5
//                     "
//                   >
//                     <span
//                       className={`
//                         grid h-11 w-11 place-items-center
//                         rounded-xl border transition-all duration-200
//                         sm:h-12 sm:w-12
//                         ${
//                           selected
//                             ? "border-protein-green bg-protein-green text-white shadow-md"
//                             : "border-slate-200 bg-white text-protein-green hover:border-protein-green hover:bg-green-50"
//                         }
//                       `}
//                     >
//                       <Icon size={23} />
//                     </span>

//                     <span
//                       className={`
//                         max-w-full text-center text-[9px]
//                         font-semibold leading-tight sm:text-[12px]
//                         ${
//                           selected
//                             ? "text-protein-dark"
//                             : "text-slate-600"
//                         }
//                       `}
//                     >
//                       {item}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* KID GENDER */}
//             {profile === "Kid" && (
//               <div className="mt-3">
//                 <p className="mb-3 text-sm font-bold text-slate-800">
//                   Select Gender
//                 </p>

//                 <div className="grid grid-cols-2 gap-3">
//                   {["Boy", "Girl"].map((item) => {
//                     const selected = gender === item;
//                     const Icon = GENDER_ICONS[item];

//                     return (
//                       <button
//                         key={item}
//                         type="button"
//                         onClick={() => {
//                           setGender(item);

//                           setResult((prev) => ({
//                             ...prev,
//                             calculated: false,
//                           }));
//                         }}
//                         aria-pressed={selected}
//                         className="
//                           flex flex-col items-center gap-2
//                           rounded-xl border border-slate-100
//                           bg-white p-3 transition-all
//                           hover:border-green-300 hover:bg-green-50
//                         "
//                       >
//                         <span
//                           className={`
//                             grid h-10 w-10 place-items-center
//                             rounded-full border transition-all duration-200
//                             ${
//                               selected
//                                 ? "border-protein-green bg-green-50 text-protein-green shadow-sm"
//                                 : "border-slate-200 bg-white text-protein-green"
//                             }
//                           `}
//                         >
//                           <Icon size={24} />
//                         </span>

//                         <span
//                           className={`
//                             text-sm font-bold
//                             ${
//                               selected
//                                 ? "text-protein-dark"
//                                 : "text-slate-600"
//                             }
//                           `}
//                         >
//                           {item}
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* AGE */}
//             <div className="mt-2 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
//               <label className="block text-xs font-medium text-slate-500">
//                 Age (YRS)

//                 <select
//                   value={age}
//                   onChange={(e) => {
//                     setAge(Number(e.target.value));

//                     setResult((prev) => ({
//                       ...prev,
//                       calculated: false,
//                     }));
//                   }}
//                   className="
//                     mt-1.5 h-9 w-full rounded-lg
//                     border-0 bg-slate-100 px-2.5
//                     text-sm font-medium text-slate-800
//                     outline-none focus:ring-2 focus:ring-green-400
//                   "
//                 >
//                   {Array.from({ length: 101 }, (_, index) => index).map(
//                     (value) => (
//                       <option key={value} value={value}>
//                         {value} years
//                       </option>
//                     )
//                   )}
//                 </select>
//               </label>
//             </div>

//             {/* HEIGHT, WEIGHT, BMI AND DAILY PROTEIN */}
//             <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
//               {/* HEIGHT */}
//               <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
//                 <div className="flex min-h-6 items-center">
//                   <span className="text-xs font-semibold text-slate-600">
//                     Height
//                   </span>
//                 </div>

//                 <input
//                   type="number"
//                   min={heightUnit === "cm" ? 50 : 2}
//                   max={heightUnit === "cm" ? 249 : 11.9}
//                   step={heightUnit === "cm" ? 1 : 0.1}
//                   value={height}
//                   onChange={(e) => {
//                     setHeight(e.target.value);

//                     setResult((prev) => ({
//                       ...prev,
//                       calculated: false,
//                     }));
//                   }}
//                   className="
//                     mt-1.5 h-9 w-full min-w-0 rounded-lg
//                     bg-slate-100 px-2 text-sm text-slate-800
//                     outline-none focus:ring-2 focus:ring-green-400
//                   "
//                 />

//                 <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (heightUnit !== "cm") {
//                         handleHeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         heightUnit === "cm"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     CM
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (heightUnit !== "ft") {
//                         handleHeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         heightUnit === "ft"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     FT
//                   </button>
//                 </div>
//               </div>

//               {/* WEIGHT */}
//               <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
//                 <div className="flex min-h-6 items-center">
//                   <span className="text-xs font-semibold text-slate-600">
//                     Weight
//                   </span>
//                 </div>

//                 <input
//                   type="number"
//                   min={weightUnit === "kg" ? 10 : 20}
//                   max={weightUnit === "kg" ? 209 : 419}
//                   step="1"
//                   value={weight}
//                   onChange={(e) => {
//                     setWeight(e.target.value);

//                     setResult((prev) => ({
//                       ...prev,
//                       calculated: false,
//                     }));
//                   }}
//                   className="
//                     mt-1.5 h-9 w-full min-w-0 rounded-lg
//                     bg-slate-100 px-2 text-sm text-slate-800
//                     outline-none focus:ring-2 focus:ring-green-400
//                   "
//                 />

//                 <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (weightUnit !== "kg") {
//                         handleWeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         weightUnit === "kg"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     KG
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (weightUnit !== "lb") {
//                         handleWeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         weightUnit === "lb"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     LB
//                   </button>
//                 </div>
//               </div>

//               {/* BMI */}
//               <div className="flex min-h-[125px] min-w-0 flex-col items-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
//                 <div className="flex min-h-6 items-center justify-center text-blue-500">
//                   <BarChart3 size={19} />
//                 </div>

//                 <p className="mt-1.5 text-xs font-semibold text-slate-600">
//                   Your BMI
//                 </p>

//                 <p className="mt-2 text-2xl font-black text-blue-600">
//                   {result.bmi}
//                 </p>

//                 <span
//                   className={`
//                     mt-1.5 rounded-full px-2 py-1 text-[10px] font-bold
//                     ${
//                       result.calculated
//                         ? "bg-blue-50 text-blue-600"
//                         : "bg-slate-100 text-slate-400"
//                     }
//                   `}
//                 >
//                   {result.calculated ? result.status : "--"}
//                 </span>
//               </div>

//               {/* DAILY PROTEIN */}
//               <div className="flex min-h-[125px] min-w-0 flex-col items-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
//                 <div className="flex min-h-6 items-center justify-center text-protein-green">
//                   <Heart size={19} />
//                 </div>

//                 <p className="mt-1.5 text-xs font-semibold text-slate-600">
//                   Daily Protein
//                 </p>

//                 <p className="mt-2 text-2xl font-black text-protein-green">
//                   {result.calculated ? `${result.protein}g` : "--"}
//                 </p>

//                 <p className="mt-1 text-[11px] leading-3 text-slate-400">
//                   Recommended daily need
//                 </p>
//               </div>
//             </div>

//             {/* CALCULATE BUTTON */}
//             <button
//               type="button"
//               onClick={handleCalculate}
//               className="
//                 mt-3 flex h-10 w-full items-center
//                 justify-center gap-2 rounded-xl
//                 bg-protein-green text-sm font-bold text-white
//                 shadow-sm transition-all duration-200
//                 hover:bg-green-800 hover:shadow-md
//                 active:scale-[0.99]
//               "
//             >
//               Calculate
//               <ArrowRight size={16} />
//             </button>

//             <p className="mt-1.5 text-center text-[12px] leading-3 text-slate-400">
//               Results are estimates. Consult a professional for medical advice.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import { ArrowRight, BarChart3, Heart, Leaf, UserRound } from "lucide-react";

// import { LuUserRound, LuBaby } from "react-icons/lu";

// import { GiWeightLiftingUp } from "react-icons/gi";
// //import { MdOutlinePregnantWoman } from "react-icons/md";
// import { FaPersonPregnant } from "react-icons/fa6";
// import { FaPersonBreastfeeding } from "react-icons/fa6";
// import { FaChild, FaFemale } from "react-icons/fa";

// import SectionTag from "./SectionTag";

// const PROFILES = [
//   "Adult",
//   "Kid",
//   "Pregnant Woman",
//   "Feeding Mother",
//   "Bodybuilder",
// ];

// const PROFILE_ICONS = {
//   Adult: LuUserRound,
//   Kid: LuBaby,
//   "Pregnant Woman": FaPersonPregnant,
//   "Feeding Mother": FaPersonBreastfeeding,
//   Bodybuilder: GiWeightLiftingUp,
// };

// const PROFILE_PROTEIN_FACTORS = {
//   Adult: 0.8,
//   Kid: 2,
//   "Pregnant Woman": 1.5,
//   "Feeding Mother": 1.5,
//   Bodybuilder: 1.7,
// };

// // Gender icons — Boy uses FaChild, Girl uses FaFemale (react-icons/fa)
// const GENDER_ICONS = {
//   Boy: FaChild,
//   Girl: FaFemale,
// };

// // Age ranges per profile
// // Kids: 1 to 19, all others: 20 to 100
// const getAgeRange = (selectedProfile) => {
//   if (selectedProfile === "Kid") {
//     return { min: 1, max: 17, defaultAge: 10 };
//   }
//   return { min: 18, max: 100, defaultAge: 25 };
// };

// const BENEFITS = [
//   { Icon: UserRound, title: "Understand", subtitle: "Your Body" },
//   { Icon: Leaf, title: "Know Protein", subtitle: "Requirement" },
//   { Icon: BarChart3, title: "Get Your BMI", subtitle: "" },
//   { Icon: Heart, title: "Make Better", subtitle: "Food Choices" },
// ];

// const initialResult = {
//   bmi: "--",
//   protein: "--",
//   status: "",
//   calculated: false,
// };

// export default function BMISection({ showToast }) {
//   const [profile, setProfile] = useState("Adult");
//   const [age, setAge] = useState(25);
//   const [heightUnit, setHeightUnit] = useState("cm");
//   const [height, setHeight] = useState(170);
//   const [weightUnit, setWeightUnit] = useState("kg");
//   const [weight, setWeight] = useState(70);
//   const [gender, setGender] = useState("Boy");
//   const [result, setResult] = useState(initialResult);

//   const notify = (message) => {
//     if (typeof showToast === "function") {
//       showToast(message);
//     } else {
//       window.alert(message);
//     }
//   };

//   const invalidateResult = () => {
//     setResult(initialResult);
//   };

//   const handleProfileChange = (nextProfile) => {
//     setProfile(nextProfile);

//     // Reset age to a valid value inside the new profile's age range
//     const { defaultAge } = getAgeRange(nextProfile);
//     setAge(defaultAge);

//     invalidateResult();
//   };

//   const getHeightCm = () => {
//     const value = Number(height);
//     return heightUnit === "cm" ? value : value * 30.48;
//   };

//   const getWeightKg = () => {
//     const value = Number(weight);
//     return weightUnit === "kg" ? value : value * 0.45359237;
//   };

//   const validateForm = () => {
//     const ageValue = Number(age);
//     const heightValue = Number(height);
//     const weightValue = Number(weight);

//     const { min: ageMin, max: ageMax } = getAgeRange(profile);

//     if (!Number.isFinite(ageValue) || ageValue < ageMin || ageValue > ageMax) {
//       notify(
//         `For the ${profile} profile, age must be between ${ageMin} and ${ageMax} years.`,
//       );
//       return false;
//     }

//     if (!Number.isFinite(heightValue) || heightValue <= 0) {
//       notify("Please enter a valid height.");
//       return false;
//     }

//     if (heightUnit === "cm" && (heightValue < 50 || heightValue > 249)) {
//       notify("Height must be between 50 and 249 cm.");
//       return false;
//     }

//     if (heightUnit === "ft" && (heightValue < 2 || heightValue > 11.9)) {
//       notify("Height must be between 2 and 11.9 ft.");
//       return false;
//     }

//     if (!Number.isFinite(weightValue) || weightValue <= 0) {
//       notify("Please enter a valid weight.");
//       return false;
//     }

//     if (weightUnit === "kg" && (weightValue < 10 || weightValue > 209)) {
//       notify("Weight must be between 10 and 209 kg.");
//       return false;
//     }

//     if (weightUnit === "lb" && (weightValue < 20 || weightValue > 419)) {
//       notify("Weight must be between 20 and 419 lb.");
//       return false;
//     }

//     return true;
//   };

//   const handleCalculate = () => {
//     if (!validateForm()) return;

//     const heightCm = getHeightCm();
//     const weightKg = getWeightKg();

//     if (
//       !Number.isFinite(heightCm) ||
//       !Number.isFinite(weightKg) ||
//       heightCm <= 0 ||
//       weightKg <= 0
//     ) {
//       notify("Please enter valid height and weight.");
//       return;
//     }

//     // BMI = weight in kg / (height in metres)^2
//     const heightM = heightCm / 100;
//     const bmi = weightKg / heightM ** 2;

//     let status = "";

//     if (bmi < 16) {
//       status = "Very severely underweight";
//     } else if (bmi < 17) {
//       status = "Severely underweight";
//     } else if (bmi < 18.5) {
//       status = "Underweight";
//     } else if (bmi < 25) {
//       status = "Normal";
//     } else if (bmi < 30) {
//       status = "Overweight";
//     }  else if (bmi < 35) {
//       status = "Obese Class I";
//     }  else if (bmi < 40) {
//       status = "Obese Class II";
//     } else {
//       status = "Obese Class III";
//     }

//     // Daily protein = weight in kg × profile protein factor
//     const profileFactor = PROFILE_PROTEIN_FACTORS[profile] ?? 1;
//     const protein = Math.max(1, Math.round(weightKg * profileFactor));

//     setResult({
//       bmi: bmi.toFixed(1),
//       protein,
//       status,
//       calculated: true,
//     });

//     // notify(
//     //   `BMI: ${bmi.toFixed(1)} | Recommended Goal: ${protein}g protein/day 🎯`,
//     // );
//   };

//   const handleHeightUnitChange = (nextUnit) => {
//     if (nextUnit === heightUnit) return;

//     const currentHeight = Number(height);

//     if (Number.isFinite(currentHeight) && currentHeight > 0) {
//       if (nextUnit === "ft") {
//         setHeight(Number((currentHeight / 30.48).toFixed(1)));
//       } else {
//         setHeight(Math.round(currentHeight * 30.48));
//       }
//     }

//     setHeightUnit(nextUnit);
//     invalidateResult();
//   };

//   const handleWeightUnitChange = (nextUnit) => {
//     if (nextUnit === weightUnit) return;

//     const currentWeight = Number(weight);

//     if (Number.isFinite(currentWeight) && currentWeight > 0) {
//       if (nextUnit === "lb") {
//         setWeight(Math.round(currentWeight / 0.45359237));
//       } else {
//         setWeight(Math.round(currentWeight * 0.45359237));
//       }
//     }

//     setWeightUnit(nextUnit);
//     invalidateResult();
//   };

//   const unitButtonClass = (selected) =>
//     `flex-1 rounded-md py-1.5 text-xs font-bold transition ${
//       selected
//         ? "bg-white text-[#006e2d] shadow-sm"
//         : "text-slate-500 hover:text-[#006e2d]"
//     }`;

//   // Build the age dropdown options dynamically based on the selected profile
//   const { min: ageMin, max: ageMax } = getAgeRange(profile);
//   const ageOptions = Array.from(
//     { length: ageMax - ageMin + 1 },
//     (_, index) => ageMin + index,
//   );

//   return (
//    <section
//   id="protein-calculator"
//   className="scroll-mt-0 bg-white px-3 py-8 sm:px-5 sm:py-12 lg:py-16"
// >
//       <div className="mx-auto w-full max-w-7xl rounded-2xl bg-gradient-to-r from-[#f0faea] to-[#edf9e9] p-4 shadow-lg shadow-green-900/5 sm:p-6 lg:p-8">
//         <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[45%_50%] lg:gap-7">
//           {/* LEFT CONTENT */}
//           <div className="min-w-0">
//             <SectionTag>Personalized Nutrition Insights</SectionTag>

//             <h2 className="mt-4 text-[27px] font-black leading-[1.08] tracking-tight text-[#123b25] sm:text-[31px]">
//               Know Your Protein Need
//               <br />
//               &amp; BMI in Seconds
//             </h2>

//             <p className="mt-3 max-w-[430px] text-[15px] leading-6 text-slate-600 sm:text-sm">
//               Get personalized results based on your age, lifestyle and goals.
//               One simple calculator for everyone.
//             </p>

//             <div className="mt-5 grid grid-cols-4 gap-1 sm:mt-6 sm:gap-2">
//               {BENEFITS.map(({ Icon, title, subtitle }) => (
//                 <div key={title} className="min-w-0 text-center">
//                   <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-white text-[#006e2d] shadow-sm sm:h-11 sm:w-11">
//                     <Icon
//                       size={19}
//                       strokeWidth={1.8}
//                       className="sm:h-[21px] sm:w-[21px]"
//                     />
//                   </div>

//                   <p className="mt-2 text-[10px] font-bold leading-3 text-slate-700 sm:text-xs">
//                     {title}
//                   </p>

//                   {subtitle && (
//                     <p className="text-[9px] font-bold leading-3 text-slate-600 sm:text-xs">
//                       {subtitle}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CALCULATOR CARD */}
//           <div className="mx-auto w-full max-w-[500px] min-w-0 rounded-2xl bg-white p-3 shadow-lg sm:p-4">
//             {/* PROFILE TABS */}
//             <div className="flex items-start justify-center gap-1.5 pb-3 sm:gap-3">
//               {PROFILES.map((item) => {
//                 const Icon = PROFILE_ICONS[item];
//                 const selected = profile === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => handleProfileChange(item)}
//                     aria-label={item}
//                     aria-pressed={selected}
//                     className="group flex min-w-0 flex-1 flex-col items-center gap-1.5"
//                   >
//                     <span
//                       className={`grid h-10 w-10 place-items-center rounded-xl border transition-all duration-200 sm:h-12 sm:w-12 ${
//                         selected
//                           ? "border-[#006e2d] bg-[#006e2d] text-white shadow-md"
//                           : "border-slate-200 bg-white text-[#006e2d] hover:border-[#006e2d] hover:bg-green-50"
//                       }`}
//                     >
//                       <Icon size={25} strokeWidth={1.8} />
//                     </span>

//                     <span
//                       className={`max-w-full text-center text-[9px] font-semibold leading-tight sm:text-[11px] ${
//                         selected ? "text-[#123b25]" : "text-slate-600"
//                       }`}
//                     >
//                       {item}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* KID GENDER */}
//             {profile === "Kid" && (
//               <div className="mt-2">
//                 <p className="mb-2 text-sm font-bold text-slate-800">
//                   Select Gender
//                 </p>

//                 <div className="grid grid-cols-2 gap-3">
//                   {["Boy", "Girl"].map((item) => {
//                     const selected = gender === item;
//                     const Icon = GENDER_ICONS[item];

//                     return (
//                       <button
//                         key={item}
//                         type="button"
//                         onClick={() => {
//                           setGender(item);
//                           invalidateResult();
//                         }}
//                         aria-pressed={selected}
//                         className={`flex items-center justify-center gap-2 rounded-xl border p-3 transition ${
//                           selected
//                             ? "border-[#006e2d] bg-green-50 text-[#006e2d]"
//                             : "border-slate-200 text-slate-600 hover:border-green-300"
//                         }`}
//                       >
//                         <Icon size={19} strokeWidth={1.8} />
//                         <span className="text-sm font-bold">{item}</span>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* AGE — dynamically limited based on selected profile */}

//             <div className="mt-2 rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
//               <label className="block text-xs font-medium text-slate-500">
//                 Age (YRS)
//               </label>

//               <div className="mt-1.5 flex h-10 items-center overflow-hidden rounded-lg bg-slate-100">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     const currentIndex = ageOptions.indexOf(Number(age));

//                     if (currentIndex > 0) {
//                       setAge(ageOptions[currentIndex - 1]);
//                       invalidateResult();
//                     }
//                   }}
//                   disabled={ageOptions.indexOf(Number(age)) <= 0}
//                   className="flex h-full w-11 shrink-0 items-center justify-center text-lg font-semibold text-slate-700 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-40"
//                   aria-label="Decrease age"
//                 >
//                   −
//                 </button>

//                 <div className="flex flex-1 items-center justify-center gap-1">
//                   <input
//                     type="number"
//                     min={ageOptions[0]}
//                     max={ageOptions[ageOptions.length - 1]}
//                     value={age}
//                     onChange={(event) => {
//                       const value = event.target.value;

//                       if (value === "") {
//                         setAge("");
//                         invalidateResult();
//                         return;
//                       }

//                       setAge(Number(value));
//                       invalidateResult();
//                     }}
//                     onBlur={() => {
//                       const minAge = ageOptions[0];
//                       const maxAge = ageOptions[ageOptions.length - 1];
//                       const value = Number(age);

//                       if (age === "" || !Number.isFinite(value)) {
//                         setAge(minAge);
//                       } else {
//                         const nearestAge = ageOptions.reduce(
//                           (previous, current) =>
//                             Math.abs(current - value) <
//                             Math.abs(previous - value)
//                               ? current
//                               : previous,
//                         );

//                         setAge(Math.min(maxAge, Math.max(minAge, nearestAge)));
//                       }
//                     }}
//                     className="w-16 appearance-none border-0 bg-transparent p-0 text-center text-sm font-semibold text-slate-800 outline-none focus:ring-0"
//                     aria-label="Enter age in years"
//                   />

//                   {/* <span className="text-xs font-medium text-slate-500">
//         years
//       </span> */}
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     const currentIndex = ageOptions.indexOf(Number(age));

//                     if (
//                       currentIndex >= 0 &&
//                       currentIndex < ageOptions.length - 1
//                     ) {
//                       setAge(ageOptions[currentIndex + 1]);
//                       invalidateResult();
//                     }
//                   }}
//                   disabled={
//                     ageOptions.indexOf(Number(age)) >= ageOptions.length - 1
//                   }
//                   className="flex h-full w-11 shrink-0 items-center justify-center text-lg font-semibold text-slate-700 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-40"
//                   aria-label="Increase age"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* HEIGHT, WEIGHT, BMI AND PROTEIN */}
//             <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
//               {/* HEIGHT */}
//               <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
//                 <label className="text-xs font-semibold text-slate-600">
//                   Height
//                 </label>

//                 <input
//                   type="number"
//                   min={heightUnit === "cm" ? 50 : 2}
//                   max={heightUnit === "cm" ? 249 : 11.9}
//                   step={heightUnit === "cm" ? 1 : 0.1}
//                   value={height}
//                   onChange={(event) => {
//                     setHeight(event.target.value);
//                     invalidateResult();
//                   }}
//                   aria-label={`Height in ${heightUnit}`}
//                   className="mt-2 h-10 w-full min-w-0 rounded-lg bg-slate-100 px-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-green-400"
//                 />

//                 <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
//                   <button
//                     type="button"
//                     onClick={() => handleHeightUnitChange("cm")}
//                     className={unitButtonClass(heightUnit === "cm")}
//                   >
//                     CM
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => handleHeightUnitChange("ft")}
//                     className={unitButtonClass(heightUnit === "ft")}
//                   >
//                     FT
//                   </button>
//                 </div>
//               </div>

//               {/* WEIGHT */}
//               <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
//                 <label className="text-xs font-semibold text-slate-600">
//                   Weight
//                 </label>

//                 <input
//                   type="number"
//                   min={weightUnit === "kg" ? 10 : 20}
//                   max={weightUnit === "kg" ? 209 : 419}
//                   step="1"
//                   value={weight}
//                   onChange={(event) => {
//                     setWeight(event.target.value);
//                     invalidateResult();
//                   }}
//                   aria-label={`Weight in ${weightUnit}`}
//                   className="mt-2 h-10 w-full min-w-0 rounded-lg bg-slate-100 px-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-green-400"
//                 />

//                 <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
//                   <button
//                     type="button"
//                     onClick={() => handleWeightUnitChange("kg")}
//                     className={unitButtonClass(weightUnit === "kg")}
//                   >
//                     KG
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => handleWeightUnitChange("lb")}
//                     className={unitButtonClass(weightUnit === "lb")}
//                   >
//                     LB
//                   </button>
//                 </div>
//               </div>

//               {/* BMI RESULT */}
//               <div className="flex min-h-[130px] min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
//                 <BarChart3 size={20} className="text-blue-500" />

//                 <p className="mt-2 text-xs font-semibold text-slate-600">
//                   Your BMI
//                 </p>

//                 <p className="mt-2 text-2xl font-black text-blue-600">
//                   {result.bmi}
//                 </p>

//                 <span
//                   className={`mt-1 rounded-full px-2 py-1 text-[9px] font-bold ${
//                     result.calculated
//                       ? "bg-blue-50 text-blue-600"
//                       : "bg-slate-100 text-slate-400"
//                   }`}
//                 >
//                   {result.calculated ? result.status : "--"}
//                 </span>
//               </div>

//               {/* DAILY PROTEIN RESULT */}
//               <div className="flex min-h-[130px] min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
//                 <Heart size={20} className="text-[#006e2d]" />

//                 <p className="mt-2 text-xs font-semibold text-slate-600">
//                   Daily Protein
//                 </p>

//                 <p className="mt-2 text-2xl font-black text-[#006e2d]">
//                   {result.calculated ? `${result.protein}g` : "--"}
//                 </p>

//                 <p className="mt-1 text-[9px] leading-3 text-slate-400">
//                   Recommended daily need
//                 </p>
//               </div>
//             </div>

//             {/* CALCULATE BUTTON */}
//             <button
//               type="button"
//               onClick={handleCalculate}
//               className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#006e2d] text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#005320] hover:shadow-md active:scale-[0.99]"
//             >
//               Calculate
//               <ArrowRight size={17} />
//             </button>

//             <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
//               Results are estimates. Consult a qualified healthcare professional
//               for personalized medical or nutrition advice.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





 
import { useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Heart,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { LuUserRound, LuBaby } from "react-icons/lu";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FaChild, FaFemale } from "react-icons/fa";

import { PROFILES } from "../data/homeData";

import AnimatedHeading from "./AnimatedHeading";

const PROFILE_ICONS = {
  Adult: LuUserRound,
  Kid: LuBaby,
  "Pregnant Woman": MdPregnantWoman,
  "Feeding Mother": FaPersonBreastfeeding,
  Bodybuilder: GiWeightLiftingUp,
};

const GENDER_ICONS = {
  Boy: FaChild,
  Girl: FaFemale,
};

const INITIAL_RESULT = {
  bmi: "--",
  protein: "--",
  status: "",
  calculated: false,
};

const AGE_OPTIONS = {
  Kid: { min: 0, max: 19 },
  Adult: { min: 20, max: 100 },
  "Pregnant Woman": { min: 20, max: 100 },
  "Feeding Mother": { min: 20, max: 100 },
  Bodybuilder: { min: 20, max: 100 },
};

export default function ProteinCalculator() {
  const [profile, setProfile] = useState("Adult");
  const [age, setAge] = useState(25);
  const [heightUnit, setHeightUnit] = useState("cm");
  const [height, setHeight] = useState(170);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState("Boy");
  const [result, setResult] = useState(INITIAL_RESULT);

  // Scroll animation
  const panelRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start 90%", "end 10%"],
  });

  // STEP 1: Nutrition preview enters first.
  // It remains visible and exits first when scrolling down.
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.2, 0.68, 0.78, 1],
    [-100, -35, 0, 0, -70, -100]
  );

  const leftOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.2, 0.68, 0.78, 1],
    [0, 0.6, 1, 1, 0.35, 0]
  );

  // STEP 2: Calculator enters after the first preview.
  // It exits after the first preview.
  const centerX = useTransform(
    scrollYProgress,
    [0, 0.16, 0.27, 0.72, 0.84, 1],
    [-100, -100, 0, 0, -70, -100]
  );

  const centerOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.27, 0.72, 0.84, 1],
    [0, 0, 1, 1, 0.35, 0]
  );

  // STEP 3: Food preview enters last and exits last.
  const rightX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.41, 0.8, 0.9, 1],
    [-100, -100, 0, 0, -70, -100]
  );

  const rightOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.41, 0.8, 0.9, 1],
    [0, 0, 1, 1, 0.35, 0]
  );

  const invalidateResult = () => {
    setResult(INITIAL_RESULT);
  };

  const getHeightCm = () =>
    heightUnit === "cm"
      ? Number(height)
      : Number(height) * 30.48;

  const getWeightKg = () =>
    weightUnit === "kg"
      ? Number(weight)
      : Number(weight) * 0.45359237;

  const handleProfileChange = (nextProfile) => {
    setProfile(nextProfile);

    const limits = AGE_OPTIONS[nextProfile];

    if (
      Number(age) < limits.min ||
      Number(age) > limits.max
    ) {
      setAge(nextProfile === "Kid" ? 10 : 25);
    }

    invalidateResult();
  };

  const changeAge = (amount) => {
    const limits = AGE_OPTIONS[profile];

    setAge((previous) => {
      const current = Number(previous);
      const safeCurrent = Number.isFinite(current)
        ? current
        : limits.min;

      return Math.min(
        limits.max,
        Math.max(limits.min, safeCurrent + amount)
      );
    });

    invalidateResult();
  };

  const handleHeightUnitChange = (unit) => {
    if (unit === heightUnit) return;

    setHeight(
      unit === "ft"
        ? Number((Number(height) / 30.48).toFixed(1))
        : Math.round(Number(height) * 30.48)
    );

    setHeightUnit(unit);
    invalidateResult();
  };

  const handleWeightUnitChange = (unit) => {
    if (unit === weightUnit) return;

    setWeight(
      unit === "lb"
        ? Math.round(Number(weight) / 0.45359237)
        : Math.round(Number(weight) * 0.45359237)
    );

    setWeightUnit(unit);
    invalidateResult();
  };

  const validateForm = () => {
    const limits = AGE_OPTIONS[profile];
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (
      age === "" ||
      !Number.isFinite(ageValue) ||
      ageValue < limits.min ||
      ageValue > limits.max
    ) {
      window.alert(
        `Age for ${profile} must be between ${limits.min} and ${limits.max} years.`
      );
      return false;
    }

    if (
      height === "" ||
      !Number.isFinite(heightValue) ||
      (heightUnit === "cm"
        ? heightValue < 50 || heightValue > 249
        : heightValue < 2 || heightValue > 11.9)
    ) {
      window.alert(
        heightUnit === "cm"
          ? "Height must be between 50 and 249 cm."
          : "Height must be between 2 and 11.9 ft."
      );
      return false;
    }

    if (
      weight === "" ||
      !Number.isFinite(weightValue) ||
      (weightUnit === "kg"
        ? weightValue < 10 || weightValue > 209
        : weightValue < 20 || weightValue > 419)
    ) {
      window.alert(
        weightUnit === "kg"
          ? "Weight must be between 10 and 209 kg."
          : "Weight must be between 20 and 419 lb."
      );
      return false;
    }

    return true;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;

    const heightCm = getHeightCm();
    const weightKg = getWeightKg();

    if (!heightCm || !weightKg) {
      window.alert(
        "Please enter a valid height and weight."
      );
      return;
    }

    const bmi =
      weightKg / (heightCm / 100) ** 2;

    let status = "High";

    if (bmi < 16) status = "Severely Underweight";
    else if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";

    const proteinFactors = {
      Adult: 0.8,
      Kid: 2,
      "Pregnant Woman": 1.5,
      "Feeding Mother": 1.5,
      Bodybuilder: 1.7,
    };

    setResult({
      bmi: bmi.toFixed(1),
      protein: Math.max(
        1,
        Math.round(
          weightKg * (proteinFactors[profile] ?? 0.8)
        )
      ),
      status,
      calculated: true,
    });
  };

  const bmiColor = !result.calculated
    ? "text-blue-600"
    : result.status === "Normal"
      ? "text-[#258440]"
      : "text-[#E89B13]";

  const unitButtonClass = (selected) =>
    `flex-1 rounded-md py-1.5 text-xs font-bold transition ${
      selected
        ? "bg-white text-[#258440] shadow-sm"
        : "text-slate-500 hover:text-[#258440]"
    }`;


  return (
    <section
      id="protein-calculator"
      className="scroll-mt-24 overflow-x-clip bg-[#F0F8EF] px-3 py-8 sm:px-5 sm:py-12 lg:px-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* SECTION HEADING */}
        <div className="mb-7 text-center sm:mb-9">
     <AnimatedHeading className="text-3xl font-black tracking-tight text-[#103B27] sm:text-4xl lg:text-5xl">
  Know Your Protein Need & BMI
</AnimatedHeading>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#365344] sm:text-base sm:leading-7">
            Find your daily protein requirement and BMI with a
            personalized calculator designed for your nutrition goals.
          </p>
        </div>

        {/* MAIN ANIMATED PANEL */}
        <div
          ref={panelRef}
          className="rounded-3xl border border-[#DCEBDD] bg-[#E7F4E5] p-3 sm:p-5 lg:p-5"
        >
          <div className="grid items-center gap-5 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_500px_minmax(0,1fr)] xl:gap-8">

            {/* STEP 1: NUTRITION PREVIEW */}
            <motion.div
              style={{
                x: leftX,
                opacity: leftOpacity,
              }}
              className="order-1 flex min-w-0 flex-col items-center justify-center rounded-2xl border border-white bg-white p-2 shadow-sm xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none"
            >
              <p className="mb-2 text-center text-xs font-bold text-[#16452D] xl:hidden">
                Nutrition Guide
              </p>

              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet="/assets/Icon-you1.png"
                />

                <img
                  src="/assets/Icon-you.png"
                  alt="EatProtein nutrition guide mobile screen"
                  className="h-[220px] w-full max-w-[460px] object-contain sm:h-[300px] md:h-[360px] xl:h-[440px]"
                />
              </picture>
            </motion.div>

            {/* STEP 2: CALCULATOR */}
            <motion.div
              style={{
                x: centerX,
                opacity: centerOpacity,
              }}
              className="order-2 mx-auto flex w-full min-w-0 max-w-[500px] flex-col"
            >
              <div className="w-full min-w-0 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg sm:p-4">

                {/* PROFILE TABS */}
                <div className="flex items-start justify-center gap-1.5 pb-3 sm:gap-3">
                  {PROFILES.map((item) => {
                    const Icon =
                      PROFILE_ICONS[item] || LuUserRound;

                    const selected = profile === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          handleProfileChange(item)
                        }
                        aria-label={item}
                        aria-pressed={selected}
                        className="group flex min-w-0 flex-1 flex-col items-center gap-1.5"
                      >
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-xl border transition sm:h-12 sm:w-12 ${
                            selected
                              ? "border-[#006e2d] bg-[#006e2d] text-white shadow-md"
                              : "border-slate-200 bg-white text-[#006e2d] hover:border-[#006e2d] hover:bg-green-50"
                          }`}
                        >
                          <Icon size={23} />
                        </span>

                        <span
                          className={`max-w-full text-center text-[9px] font-semibold leading-tight sm:text-[11px] ${
                            selected
                              ? "text-[#123b25]"
                              : "text-slate-600"
                          }`}
                        >
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* KID GENDER */}
                {profile === "Kid" && (
                  <div className="mt-2">
                    <p className="mb-2 text-sm font-bold text-slate-800">
                      Select Gender
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {["Boy", "Girl"].map((item) => {
                        const Icon = GENDER_ICONS[item];
                        const selected = gender === item;

                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setGender(item);
                              invalidateResult();
                            }}
                            aria-pressed={selected}
                            className={`flex items-center justify-center gap-2 rounded-xl border p-3 transition ${
                              selected
                                ? "border-[#006e2d] bg-green-50 text-[#006e2d]"
                                : "border-slate-200 text-slate-600 hover:border-green-300"
                            }`}
                          >
                            <Icon size={19} />

                            <span className="text-sm font-bold">
                              {item}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* AGE */}
                <div className="mt-2 rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                  <label
                    htmlFor="protein-age"
                    className="block text-xs font-medium text-slate-500"
                  >
                    Age (YRS)
                  </label>

                  <div className="mt-1.5 flex h-10 items-center overflow-hidden rounded-lg bg-slate-100">
                    <button
                      type="button"
                      onClick={() => changeAge(-1)}
                      disabled={
                        Number(age) <= AGE_OPTIONS[profile].min
                      }
                      aria-label="Decrease age"
                      className="flex h-full w-11 shrink-0 items-center justify-center text-lg font-semibold text-slate-700 transition hover:bg-green-100 disabled:opacity-40"
                    >
                      −
                    </button>

                    <input
                      id="protein-age"
                      type="number"
                      min={AGE_OPTIONS[profile].min}
                      max={AGE_OPTIONS[profile].max}
                      value={age}
                      onChange={(event) => {
                        setAge(event.target.value);
                        invalidateResult();
                      }}
                      onBlur={() => {
                        const limits = AGE_OPTIONS[profile];
                        const value = Number(age);

                        if (
                          age === "" ||
                          !Number.isFinite(value)
                        ) {
                          setAge(limits.min);
                        } else {
                          setAge(
                            Math.min(
                              limits.max,
                              Math.max(limits.min, value)
                            )
                          );
                        }
                      }}
                      className="w-full min-w-0 bg-transparent text-center text-sm font-semibold text-slate-800 outline-none"
                      aria-label="Enter age in years"
                    />

                    <button
                      type="button"
                      onClick={() => changeAge(1)}
                      disabled={
                        Number(age) >= AGE_OPTIONS[profile].max
                      }
                      aria-label="Increase age"
                      className="flex h-full w-11 shrink-0 items-center justify-center text-lg font-semibold text-slate-700 transition hover:bg-green-100 disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* HEIGHT, WEIGHT, BMI AND DAILY PROTEIN */}
                <div className="mt-2 grid grid-cols-4 gap-2">

                  {/* HEIGHT */}
                  <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
                    <label
                      htmlFor="protein-height"
                      className="text-xs font-semibold text-slate-600"
                    >
                      Height
                    </label>

                    <input
                      id="protein-height"
                      type="number"
                      min={heightUnit === "cm" ? 50 : 2}
                      max={heightUnit === "cm" ? 249 : 11.9}
                      step={heightUnit === "cm" ? 1 : 0.1}
                      value={height}
                      onChange={(event) => {
                        setHeight(event.target.value);
                        invalidateResult();
                      }}
                      className="mt-2 h-9 w-full min-w-0 rounded-lg bg-slate-100 px-1.5 text-sm outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <div className="mt-2 flex rounded-lg bg-slate-100 p-0.5">
                      {["cm", "ft"].map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() =>
                            handleHeightUnitChange(unit)
                          }
                          className={unitButtonClass(
                            heightUnit === unit
                          )}
                        >
                          {unit.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* WEIGHT */}
                  <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
                    <label
                      htmlFor="protein-weight"
                      className="text-xs font-semibold text-slate-600"
                    >
                      Weight
                    </label>

                    <input
                      id="protein-weight"
                      type="number"
                      min={weightUnit === "kg" ? 10 : 20}
                      max={weightUnit === "kg" ? 209 : 419}
                      value={weight}
                      onChange={(event) => {
                        setWeight(event.target.value);
                        invalidateResult();
                      }}
                      className="mt-2 h-9 w-full min-w-0 rounded-lg bg-slate-100 px-1.5 text-sm outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <div className="mt-2 flex rounded-lg bg-slate-100 p-0.5">
                      {["kg", "lb"].map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() =>
                            handleWeightUnitChange(unit)
                          }
                          className={unitButtonClass(
                            weightUnit === unit
                          )}
                        >
                          {unit.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* BMI */}
                  <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
                    <BarChart3
                      size={18}
                      className="text-blue-500"
                    />

                    <p className="mt-2 text-xs font-semibold text-slate-600">
                      Your BMI
                    </p>

                    <p
                      className={`mt-2 text-xl font-black ${bmiColor}`}
                    >
                      {result.bmi}
                    </p>

                    <span
                      className={`mt-1 max-w-full truncate rounded-full px-1.5 py-1 text-[9px] font-bold ${
                        result.calculated
                          ? "bg-blue-50 text-blue-600"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {result.calculated ? result.status : "--"}
                    </span>
                  </div>

                  {/* DAILY PROTEIN */}
                  <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
                    <Heart
                      size={18}
                      className="text-[#006e2d]"
                    />

                    <p className="mt-2 text-xs font-semibold text-slate-600">
                      Daily Protein
                    </p>

                    <p className="mt-2 text-xl font-black text-[#006e2d]">
                      {result.calculated
                        ? `${result.protein}g`
                        : "--"}
                    </p>

                    <p className="mt-1 text-[9px] leading-3 text-slate-400">
                      Recommended daily need
                    </p>
                  </div>
                </div>

                {/* CALCULATE BUTTON */}
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#006e2d] text-sm font-bold text-white shadow-sm transition hover:bg-[#005320] hover:shadow-md active:scale-[0.99]"
                >
                  Calculate
                  <ArrowRight size={17} />
                </button>

                <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
                  Results are estimates. Consult a qualified healthcare
                  professional for personalized medical or nutrition advice.
                </p>
              </div>
            </motion.div>

            {/* STEP 3: FOOD RECOMMENDATIONS PREVIEW */}
            <motion.div
              style={{
                x: rightX,
                opacity: rightOpacity,
              }}
              className="order-3 flex min-w-0 flex-col items-center justify-center rounded-2xl border border-white bg-white p-2 shadow-sm xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none"
            >
              <p className="mb-2 text-center text-xs font-bold text-[#16452D] xl:hidden">
                Food Recommendations
              </p>

              <img
                src="/assets/protein-mobile-right1.png"
                alt="EatProtein food recommendations mobile screen"
                className="h-[220px] w-full max-w-[560px] object-contain sm:h-[300px] md:h-[360px] xl:h-[440px]"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
