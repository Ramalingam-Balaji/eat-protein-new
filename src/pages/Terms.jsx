import {
  FileText,
  CheckCircle2,
  UserCheck,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
  RotateCcw,
  Lock,
  Scale,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";

const termsSections = [
  {
    id: "acceptance-of-terms",
    icon: FileText,
    color: "green",
    number: "01",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing and using the Eat Protein website, mobile application, and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
      "These Terms of Service constitute a legally binding agreement made between you and Eat Protein regarding your use of our services. We encourage you to review them carefully before engaging with our platform.",
    ],
  },
  {
    id: "use-license",
    icon: ShieldCheck,
    color: "blue",
    number: "02",
    title: "Use License",
    paragraphs: [
      "Permission is granted to temporarily download one copy of Eat Protein materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
    ],
    list: [
      "Modify or copy the materials",
      "Use the materials for any commercial purpose or for any public display",
      "Attempt to reverse engineer any software contained on the website",
      "Remove any copyright or other proprietary notations from the materials",
    ],
    note: "This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.",
  },
  {
    id: "products-and-services",
    icon: Package,
    color: "orange",
    number: "03",
    title: "Products and Services",
    paragraphs: [
      "Eat Protein provides protein-rich food products, nutritional supplements, and related health and wellness services. All product descriptions, prices, and availability are subject to change without notice.",
    ],
    warning:
      "Our products are not intended to diagnose, treat, cure, or prevent any disease. Please consult with a healthcare professional before starting any nutrition program.",
  },
  {
    id: "user-accounts",
    icon: UserCheck,
    color: "purple",
    number: "04",
    title: "User Accounts",
    paragraphs: [
      "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.",
      "You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account. Notify us immediately of any unauthorized use of your account.",
    ],
  },
  {
    id: "orders-and-payment",
    icon: ShoppingCart,
    color: "green",
    number: "05",
    title: "Orders and Payment",
    paragraphs: [
      "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to:",
    ],
    list: [
      "Product or service availability",
      "Errors in the description or price of the product",
      "Error in your order or other reasons",
    ],
    note: "Payment must be received by us before we ship any product. We accept various forms of payment as displayed during checkout.",
  },
  {
    id: "shipping-and-delivery",
    icon: Truck,
    color: "blue",
    number: "06",
    title: "Shipping and Delivery",
    paragraphs: [
      "We will arrange for shipment of ordered products to you. Risk of loss and title for products pass to you upon delivery to the carrier. Shipping costs are calculated based on weight, dimensions, and destination.",
    ],
    note: "Delivery times are estimates and not guaranteed. We are not responsible for delays due to weather, holidays, or carrier issues.",
  },
  {
    id: "returns-and-refunds",
    icon: RotateCcw,
    color: "orange",
    number: "07",
    title: "Returns and Refunds",
    paragraphs: [
      "We offer a 30-day return policy for unopened products in their original packaging. Perishable items, personalized products, and opened supplement containers cannot be returned for health and safety reasons.",
    ],
    note: "Refunds will be processed to the original payment method within 5-7 business days after we receive the returned items.",
  },
  {
    id: "privacy-policy",
    icon: Lock,
    color: "purple",
    number: "08",
    title: "Privacy Policy",
    paragraphs: [
      "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices. We are committed to safeguarding your personal information and being transparent about how it is used.",
    ],
  },
  {
    id: "limitations",
    icon: AlertTriangle,
    color: "green",
    number: "09",
    title: "Limitations",
    paragraphs: [
      "In no event shall Eat Protein or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if we have been notified orally or in writing of the possibility of such damage. Your use of the services is at your sole risk.",
    ],
  },
  {
    id: "governing-law",
    icon: Scale,
    color: "blue",
    number: "10",
    title: "Governing Law",
    paragraphs: [
      "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location. Any disputes arising from these terms shall be resolved in accordance with applicable Indian law.",
    ],
  },
];

const colorStyles = {
  green: {
    icon: "bg-emerald-50 text-emerald-600",
    line: "bg-emerald-500",
    ring: "ring-emerald-100",
    text: "text-emerald-700",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  blue: {
    icon: "bg-blue-50 text-blue-600",
    line: "bg-blue-500",
    ring: "ring-blue-100",
    text: "text-blue-700",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    line: "bg-orange-500",
    ring: "ring-orange-100",
    text: "text-orange-700",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
  },
  purple: {
    icon: "bg-purple-50 text-purple-600",
    line: "bg-purple-500",
    ring: "ring-purple-100",
    text: "text-purple-700",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
  },
};

const contactInfo = [
  {
    icon: Mail,
    color: "blue",
    label: "Email",
    value: "legal@eatprotein.in",
    href: "mailto:legal@eatprotein.in",
  },
  {
    icon: Phone,
    color: "green",
    label: "Phone",
    value: "+91 9440701380",
    href: "tel:+919440701380",
  },
  {
    icon: MapPin,
    color: "orange",
    label: "Address",
    value: "123 Health Street, Nutrition City, NC 12345, India",
    href: "https://maps.google.com/?q=Nutrition+City+India",
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-white px-5 py-10 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-lime-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Legal agreement
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Terms & <span className="text-emerald-600">Conditions</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Please read these terms and conditions carefully before using our
            service. By accessing our platform, you agree to be bound by them.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-600" />
              Legally binding
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-600" />
              Last updated: December 2024
            </span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-b border-slate-100 bg-white px-5 py-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
            Quick navigation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {termsSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-12 sm:space-y-14">
          {termsSections.map((section) => {
            const Icon = section.icon;
            const styles = colorStyles[section.color];

            return (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-20"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
                  >
                    <Icon size={22} strokeWidth={1.9} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-7 items-center rounded-full border px-2.5 text-xs font-bold ${styles.badge}`}
                      >
                        {section.number}
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="mt-4 space-y-4">
                      {section.paragraphs?.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                        >
                          {para}
                        </p>
                      ))}

                      {section.list && (
                        <ul className="mt-2 space-y-2.5">
                          {section.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7"
                            >
                              <CheckCircle2
                                size={17}
                                className={`mt-1 shrink-0 ${styles.text}`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.warning && (
                        <div className="mt-4 flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50/70 p-4">
                          <AlertTriangle
                            size={20}
                            className="mt-0.5 shrink-0 text-orange-600"
                          />
                          <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                            <span className="font-bold text-orange-700">
                              Important:{" "}
                            </span>
                            {section.warning}
                          </p>
                        </div>
                      )}

                      {section.note && (
                        <div className="mt-4 rounded-xl border border-slate-100 bg-white p-4 text-sm leading-7 text-slate-600 shadow-sm sm:text-base sm:leading-8">
                          <span className={`font-bold ${styles.text}`}>
                            Note:{" "}
                          </span>
                          {section.note}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
