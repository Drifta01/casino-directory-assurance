import Image from "next/image";

import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title: "Best Online Casinos 2025 | Top Rated Casino Sites - Slots Direct",
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
  authors: [{ name: "Slots Direct" }],
  creator: "Slots Direct",
  publisher: "Slots Direct",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://slotsdirect.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Online Casinos 2025 | Top Rated Casino Sites",
    description:
      "Discover the best online casinos for 2025. Expert reviews, verified bonuses, and trusted casino recommendations.",
    url: "https://slotsdirect.com",
    siteName: "Slots Direct",
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
    creator: "@SlotsDirect", // Twitter handle of the creator
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
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Slots Direct",
  url: "https://slotsdirect.com",
  description: "Comprehensive directory of the best online casinos with expert reviews and verified bonuses",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://slotsdirect.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Slots Direct",
    url: "https://slotsdirect.com",
    logo: {
      "@type": "ImageObject",
      url: "https://slotsdirect.com/logo.png",
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
        url: "https://slotsdirect.com/casino-1",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Organization",
        name: "Top Casino 2",
        description: "Trusted casino site with 100 free spins",
        url: "https://slotsdirect.com/casino-2",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Organization",
        name: "Top Casino 3",
        description: "Licensed casino with live dealer games",
        url: "https://slotsdirect.com/casino-3",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data Scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(casinoListStructuredData) }}
      />

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section with proper semantic HTML */}
        <header className="relative py-20 px-4" role="banner">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-green-400 mb-4">
              Best Online Casinos 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover top-rated online casinos with verified licenses, exclusive bonuses, and trusted gaming
              experiences. Our expert reviews help you find safe and reliable casino sites.
            </p>
          </div>
        </header>

        <main role="main">
          <section id="top-casinos" className="py-16 px-4" aria-labelledby="casino-heading">
            <div className="container mx-auto">
              <h2 id="casino-heading" className="text-3xl font-bold text-white text-center mb-8">
                Top Rated Casino Sites
              </h2>

              <div className="grid md:grid-cols-3 gap-6" role="list">
                {[
                  {
                    name: "Royal Vegas Casino",
                    bonus: "$1000 + 100 Spins",
                    rating: 4.8,
                    license: "Malta Gaming Authority",
                    established: "2010",
                  },
                  {
                    name: "Diamond Palace Casino",
                    bonus: "$500 + 200 Spins",
                    rating: 4.7,
                    license: "UK Gambling Commission",
                    established: "2015",
                  },
                  {
                    name: "Golden Crown Casino",
                    bonus: "$750 + 150 Spins",
                    rating: 4.6,
                    license: "Curacao eGaming",
                    established: "2018",
                  },
                ].map((casino, index) => (
                  <article
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all"
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <header className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white" itemProp="name">
                            {casino.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={i < Math.floor(casino.rating) ? "text-yellow-400" : "text-gray-600"}
                              >
                                ★
                              </span>
                            ))}
                            <span className="text-sm text-gray-300 ml-2">{casino.rating}/5</span>
                          </div>
                        </div>
                      </div>
                    </header>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Welcome Bonus</span>
                        <span className="text-green-400 font-semibold" itemProp="offers">
                          {casino.bonus}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`/casino/${casino.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block w-full bg-gradient-to-t from-black to-green-400 text-white py-2 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all text-center"
                      aria-label={`Play at ${casino.name} - Claims ${casino.bonus} welcome bonus`}
                    >
                      Play Now
                    </a>
                    <p className="text-xs text-gray-400 mt-2 text-center">
                      18+ |{" "}
                      <a href="/responsible-gaming" className="underline hover:text-white">
                        Play Responsibly
                      </a>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-white/5 backdrop-blur-sm" aria-labelledby="cta-heading">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/casinos">
                <button className="bg-gradient-to-t from-black to-green-400 text-white px-32 py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all">
                  View All Top Casinos
                </button>
              </a>
            </div>
          </section>

          <section className="py-16 px-4 bg-white/5 backdrop-blur-sm" aria-labelledby="trust-heading">
            <div className="container mx-auto">
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
                    We promote safe gambling practices and provide resources for responsible gaming and addiction
                    support.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <section id="responsible-gaming" className="py-16 px-4" aria-labelledby="responsible-heading">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-slate-500/20 to-slate-500/20 backdrop-blur-md rounded-2xl p-8 border border-slate-500/30">
              <h2 id="responsible-heading" className="text-2xl font-bold text-white mb-6 text-center">
                🛡️ Responsible Gaming Commitment
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Our Promise</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Only recommend licensed, regulated casinos</li>
                    <li>• Promote deposit limits and self-exclusion tools</li>
                    <li>• Provide addiction support resources</li>
                    <li>• Age verification (18+ only)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Get Help</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong>National Problem Gambling Helpline:</strong>{" "}
                      <a href="tel:1-800-522-4700" className="text-green-400 hover:underline">
                        1-800-522-4700
                      </a>
                    </p>
                    <p>
                      <strong>GamCare:</strong>{" "}
                      <a
                        href="https://www.gamcare.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        www.gamcare.org.uk
                      </a>
                    </p>
                    <p>
                      <strong>Gamblers Anonymous:</strong>{" "}
                      <a
                        href="https://www.gamblersanonymous.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        www.gamblersanonymous.org
                      </a>
                    </p>
                  </div>
                  <a href="/responsible-gaming">
                    <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Learn More About Safe Gaming
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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
