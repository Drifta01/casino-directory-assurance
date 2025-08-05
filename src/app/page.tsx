import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import CasinoCard, { Casino } from "../components/CasinoCard";

// SEO Metadata
export const metadata: Metadata = {
  title: "Best Online Casinos 2025 | Top Rated Casino Sites - Slots Drifta",
  description:
    "Discover the best online casinos for 2025. Expert reviews, verified bonuses, and trusted casino recommendations. Play safely at licensed casino sites with our comprehensive directory.",
  keywords: [
    "best online casinos",
    "top casino sites",
    "casino reviews",
    "online gambling",
    "casino bonuses",
    "licensed casinos",
    "casino directory",
    "trusted casinos",
  ],
  authors: [{ name: "Slots Drifta" }],
  creator: "Slots Drifta",
  publisher: "Slots Drifta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://slotsdrifta.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Online Casinos 2025 | Top Rated Casino Sites",
    description:
      "Discover the best online casinos for 2025. Expert reviews, verified bonuses, and trusted casino recommendations.",
    url: "https://slotsdrifta.com",
    siteName: "Slots Drifta",
    images: [
      {
        url: "/images/og-casino-directory.jpg",
        width: 1200,
        height: 630,
        alt: "Best Online Casinos Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Casinos 2025 | Top Rated Casino Sites",
    description:
      "Discover the best online casinos for 2025. Expert reviews, verified bonuses, and trusted casino recommendations.",
    images: ["/images/twitter-casino-directory.jpg"],
    creator: "@SlotsDrifta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Slots Drifta",
  url: "https://slotsdrifta.com",
  description: "Comprehensive directory of the best online casinos with expert reviews and verified bonuses",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://slotsdrifta.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Slots Direct",
    url: "https://slotsdrifta.com",
    logo: {
      "@type": "ImageObject",
      url: "https://slotsdrifta.com/logo.png",
    },
  },
};

const casinoListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Online Casinos 2025",
  description: "Top rated online casinos with verified licenses and bonuses",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Organization",
        name: "Top Casino 1",
        description: "Premium online casino with $1000 welcome bonus",
        url: "https://slotsdrifta.com/casino-1",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Organization",
        name: "Top Casino 2",
        description: "Trusted casino site with 100 free spins",
        url: "https://slotsdrifta.com/casino-2",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Organization",
        name: "Top Casino 3",
        description: "Licensed casino with live dealer games",
        url: "https://slotsdrifta.com/casino-3",
      },
    },
  ],
};

// Casino data matching the Casino interface
const casinoData: Casino = {
  id: "cristal-poker",
  name: "Cristal Poker",
  nameImage: `${"/CristalPoker-Logo-White.jpg"}`,

  rating: 4.5,
  trustScore: 9,
  bonus: "Up to $1,000 + 100 Free Spins",
  freeSpins: 100,
  wagering: "30x bonus amount",
  minDeposit: "$10",
  licenseCountry: "Curacao",

  features: ["Live Poker", "VIP Program", "Crypto Friendly"],
  paymentMethods: ["Visa", "MasterCard", "Bitcoin", "Skrill", "Neteller"],
  gameProviders: ["NetEnt", "Microgaming", "Evolution Gaming", "Pragmatic Play"],
  description:
    "Cristal Poker - Where the Action Never Stops! Experience premium online casino gaming with our extensive collection of slots, table games, and live dealer options.",
  affiliateLink: "https://cristalpoker.com",
  reviewLink: "https://slotsdrifta.com/reviews/cristal-poker",
  established: "2010",
  restrictions: ["United States", "United Kingdom"],
  liveChatAvailable: true,
  mobileOptimized: true,
  vipProgram: true,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(casinoListStructuredData) }}
      />
      <div className="min-h-screen bg-slate-900">
        <Image
          src="/slots-drifta-logo.png"
          alt="Slots Drifta Logo"
          width={200}
          height={50}
          className="border-solid border-2 border-slate-700 rounded-md float-left mt-8 ml-8"
        />
        <header className="relative py-20 px-4" role="banner">
          <div className="container  text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-green-400 mb-4">
              Best Online Casinos
            </h1>
          </div>
        </header>

        {/* Featured Casino Card Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <CasinoCard casino={casinoData} featured={true} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5 backdrop-blur-sm" aria-labelledby="cta-heading">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/casinos">
              <button className="bg-gradient-to-t from-black to-green-400 text-white px-32 py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all">
                View All Top Casinos
              </button>
            </Link>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-white/5 backdrop-blur-sm" aria-labelledby="trust-heading">
          <h2
            id="trust-heading"
            className="text-3xl font-bold text-transparent bg-clip-text bg-green-400 text-center mb-12"
          >
            Why Choose Our Casino Recommendations?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 bg-gradient-to-t from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4"
                role="img"
                aria-label="Verified and licensed icon"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Verified & Licensed</h3>
              <p className="text-gray-300">
                All casinos are verified for proper licensing and regulatory compliance from reputable gaming
                authorities.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 bg-gradient-to-t from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4"
                role="img"
                aria-label="Secure and safe icon"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Safe</h3>
              <p className="text-gray-300">
                SSL encryption, secure payment methods, and data protection guaranteed for safe online gambling.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 bg-gradient-to-t from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4"
                role="img"
                aria-label="Responsible gaming icon"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Responsible Gaming</h3>
              <p className="text-gray-300">
                Commitment to responsible gaming with resources and tools for safe gambling habits.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-white/5 backdrop-blur-sm" aria-labelledby="newsletter-heading">
          <div className="container mx-auto text-center">
            <h2 id="newsletter-heading" className="text-3xl font-bold text-transparent bg-clip-text bg-green-400 mb-4">
              Stay Updated with Latest Casino Bonuses
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest casino bonus offers, exclusive promotions, and new casino reviews delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" aria-label="Newsletter signup">
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/50"
                required
                aria-describedby="email-help"
              />
              <button
                type="submit"
                className="bg-gradient-to-t from-black to-green-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all"
              >
                Subscribe
              </button>
            </form>
            <p id="email-help" className="text-xs text-gray-400 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
