import {
  Shield,
  UserCog,
  Database,
  Send,
  Share2,
  Lock,
  CheckCircle2,
  Cookie,
  ExternalLink,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const privacySections = [
  {
    id: "introduction",
    icon: Shield,
    color: "green",
    number: "01",
    title: "Introduction",
    paragraphs: [
      'Eat Protein ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Eat Protein when you use our website, mobile application, and services.',
      "By using our services, you agree to the collection and use of information in accordance with this policy. We believe in transparency and want you to fully understand how your data is handled at every step of your journey with us.",
    ],
  },
  {
    id: "information-we-collect",
    icon: Database,
    color: "blue",
    number: "02",
    title: "Information We Collect",
    paragraphs: [
      "We collect information to provide and improve our services. The types of data we gather are categorized below to help you understand exactly what we collect and why.",
    ],
    subsections: [
      {
        heading: "2.1 Personal Information",
        body: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include:",
        list: [
          "Name, email address, and phone number",
          "Billing and shipping addresses",
          "Payment information (processed securely)",
          "Dietary preferences and health goals",
          "Customer service communications",
        ],
      },
      {
        heading: "2.2 Automatically Collected Information",
        body: "We automatically collect certain information when you use our services:",
        list: [
          "Device information and identifiers",
          "IP address and location data",
          "Usage patterns and preferences",
          "Cookies and similar tracking technologies",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Send,
    color: "orange",
    number: "03",
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information we collect to deliver a seamless, personalized experience and to operate our business responsibly. The data we gather helps us serve you better and keep our platform safe.",
    ],
    list: [
      "Process and fulfill your orders",
      "Provide customer support and respond to inquiries",
      "Personalize your experience and recommendations",
      "Send marketing communications (with your consent)",
      "Improve our products and services",
      "Detect and prevent fraud or security issues",
      "Comply with legal obligations",
    ],
    note: "Marketing Communications: You can opt out of marketing emails at any time by clicking the unsubscribe link or contacting us directly.",
  },
  {
    id: "information-sharing",
    icon: Share2,
    color: "purple",
    number: "04",
    title: "Information Sharing and Disclosure",
    paragraphs: [
      "We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances. We only share data when it is necessary to deliver our services or meet legal requirements.",
    ],
    list: [
      "Service Providers: We may share information with trusted third-party service providers who help us operate our business",
      "Legal Requirements: When required by law or to protect our rights and safety",
      "Business Transfers: In connection with a merger, acquisition, or sale of assets",
      "With Your Consent: When you explicitly agree to share information",
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    color: "green",
    number: "05",
    title: "Data Security",
    paragraphs: [
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your trust matters to us, and we treat data protection as a top priority.",
    ],
    list: [
      "SSL encryption for data transmission",
      "Secure data storage and access controls",
      "Regular security assessments and updates",
      "Employee training on data protection",
    ],
    note: "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: "your-rights",
    icon: UserCog,
    color: "blue",
    number: "06",
    title: "Your Rights and Choices",
    paragraphs: [
      "You have certain rights regarding your personal information. We are committed to helping you exercise these rights easily and transparently.",
    ],
    list: [
      "Access: Request access to your personal information",
      "Correction: Request correction of inaccurate information",
      "Deletion: Request deletion of your personal information",
      "Data Portability: Request a copy of your data in a portable format",
      "Opt-out: Unsubscribe from marketing communications",
    ],
    note: "To exercise these rights, please contact us using the information provided below.",
  },
  {
    id: "cookies",
    icon: Cookie,
    color: "orange",
    number: "07",
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings.",
      "Types of cookies we use include essential cookies, performance cookies, and marketing cookies. For more details, please see our Cookie Policy.",
    ],
  },
  {
    id: "third-party-links",
    icon: ExternalLink,
    color: "purple",
    number: "08",
    title: "Third-Party Links",
    paragraphs: [
      "Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.",
    ],
  },
  {
    id: "childrens-privacy",
    icon: Baby,
    color: "green",
    number: "09",
    title: "Children's Privacy",
    paragraphs: [
      "Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent and believe your child has provided us with personal information, please contact us.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    color: "blue",
    number: "10",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.',
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
    value: "privacy@eatprotein.in",
    href: "mailto:privacy@eatprotein.in",
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
    value: "123 Health Streets, Nutrition City, NC 12345, India",
    href: "https://maps.google.com/?q=Nutrition+City+India",
  },
];

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-white px-5 py-10 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-lime-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Your privacy matters
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Privacy <span className="text-emerald-600">Policy</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information when you use Eat Protein
            services.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-600" />
              Transparent practices
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
            {privacySections.map((section) => (
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
          {privacySections.map((section) => {
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

                      {section.subsections?.map((sub) => (
                        <div
                          key={sub.heading}
                          className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 sm:p-6"
                        >
                          <h3 className="font-bold text-slate-900">
                            {sub.heading}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            {sub.body}
                          </p>
                          <ul className="mt-3 space-y-2">
                            {sub.list.map((item) => (
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
                        </div>
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

                      {section.note && (
                        <div
                          className={`mt-4 rounded-xl border border-slate-100 bg-white p-4 text-sm leading-7 text-slate-600 shadow-sm sm:text-base sm:leading-8`}
                        >
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
