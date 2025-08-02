import Image from "next/image";

export default function Reviews() {
  const casinoReviews = [
    {
      id: 1,
      name: "BetMGM Casino",
      logo: "🎰",
      rating: 4.8,
      bonusOffer: "$1000 + 200 Free Spins",
      license: "New Jersey Gaming Commission",
      minDeposit: "$10",
      payoutTime: "1-3 days",
      gameCount: "2500+",
      pros: ["Excellent game variety", "Fast withdrawal processing", "Strong mobile app", "24/7 customer support"],
      cons: ["Limited cryptocurrency options", "High wagering requirements on some bonuses"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "Bank Transfer"],
      topGames: ["Blackjack", "Roulette", "Slots", "Poker"],
      overallScore: 9.6,
      trustScore: 9.8,
      gameScore: 9.5,
      bonusScore: 9.2,
      supportScore: 9.7,
    },
    {
      id: 2,
      name: "Caesars Palace Online",
      logo: "👑",
      rating: 4.7,
      bonusOffer: "$2500 + 2500 Reward Credits",
      license: "Nevada Gaming Control Board",
      minDeposit: "$20",
      payoutTime: "2-5 days",
      gameCount: "1800+",
      pros: [
        "Prestigious brand reputation",
        "Generous welcome package",
        "Exclusive VIP program",
        "High-quality live dealer games",
      ],
      cons: ["Higher minimum deposit", "Limited availability in some states"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "Play+"],
      topGames: ["Baccarat", "Craps", "Video Poker", "Slots"],
      overallScore: 9.4,
      trustScore: 9.9,
      gameScore: 9.1,
      bonusScore: 9.5,
      supportScore: 9.0,
    },
    {
      id: 3,
      name: "DraftKings Casino",
      logo: "🏆",
      rating: 4.6,
      bonusOffer: "$2000 Deposit Match + $50 Casino Credits",
      license: "Pennsylvania Gaming Control Board",
      minDeposit: "$5",
      payoutTime: "1-2 days",
      gameCount: "1200+",
      pros: ["Low minimum deposit", "Quick payouts", "Great mobile experience", "Integration with sportsbook"],
      cons: ["Smaller game library", "Limited table game variety"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "Apple Pay"],
      topGames: ["Daily Fantasy", "Slots", "Blackjack", "Roulette"],
      overallScore: 9.2,
      trustScore: 9.5,
      gameScore: 8.8,
      bonusScore: 9.3,
      supportScore: 9.2,
    },
  ];

  const filterCategories = [
    "All Reviews",
    "Newly Reviewed",
    "Top Rated",
    "Best Bonuses",
    "Live Dealer",
    "Mobile Casinos",
    "Crypto Friendly",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expert{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-400">
              Casino Reviews
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            In-depth reviews of licensed online casinos. We test everything from game selection to customer support, so
            you can make informed decisions about where to play.
          </p>

          {/* Review Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">127</div>
              <div className="text-sm text-gray-300">Casinos Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">48hrs</div>
              <div className="text-sm text-gray-300">Testing Period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-sm text-gray-300">Review Criteria</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-300">Unbiased Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filterCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-gradient-to-r from-black to-green-400 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="space-y-8">
            {casinoReviews.map((casino) => (
              <div
                key={casino.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all"
              >
                {/* Casino Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-black to-green-400 rounded-xl flex items-center justify-center text-2xl">
                      {casino.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{casino.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {"★".repeat(Math.floor(casino.rating))}
                          {"☆".repeat(5 - Math.floor(casino.rating))}
                        </div>
                        <span className="text-gray-300">{casino.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">{casino.overallScore}/10</div>
                    <div className="text-sm text-gray-300">Overall Score</div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-400">Welcome Bonus</div>
                    <div className="text-white font-semibold">{casino.bonusOffer}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Min Deposit</div>
                    <div className="text-white font-semibold">{casino.minDeposit}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Payout Time</div>
                    <div className="text-white font-semibold">{casino.payoutTime}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Games</div>
                    <div className="text-white font-semibold">{casino.gameCount}</div>
                  </div>
                </div>

                {/* Detailed Scores */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{casino.trustScore}/10</div>
                    <div className="text-sm text-gray-300">Trust & Security</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{casino.gameScore}/10</div>
                    <div className="text-sm text-gray-300">Game Selection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{casino.bonusScore}/10</div>
                    <div className="text-sm text-gray-300">Bonuses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{casino.supportScore}/10</div>
                    <div className="text-sm text-gray-300">Customer Support</div>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="text-green-400 mr-2">✓</span> Pros
                    </h4>
                    <ul className="space-y-2">
                      {casino.pros.map((pro, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="text-red-400 mr-2">✗</span> Cons
                    </h4>
                    <ul className="space-y-2">
                      {casino.cons.map((con, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-red-400 mr-2 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Payment Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {casino.paymentMethods.map((method, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Popular Games</h4>
                    <div className="flex flex-wrap gap-2">
                      {casino.topGames.map((game, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">License</h4>
                    <span className="text-green-400 text-sm">{casino.license}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-black to-green-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all">
                    Visit Casino
                  </button>
                  <button className="border border-green-400 text-green-400 py-3 px-6 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-all">
                    Read Full Review
                  </button>
                </div>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  18+ | Terms & Conditions Apply | Play Responsibly
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Methodology */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-400 text-center mb-12">
            Our Review Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Comprehensive Testing</h4>
              <p className="text-gray-300">
                We test every aspect from registration to withdrawal, spending real money and time at each casino.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Verified Information</h4>
              <p className="text-gray-300">
                All casino information is verified through multiple sources and updated regularly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Unbiased Scoring</h4>
              <p className="text-gray-300">
                Our reviews are completely independent with no influence from casino operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CDA</span>
                </div>
                <span className="text-white font-bold">Casino Directory Assurance</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted source for safe, licensed online casino reviews and responsible gaming information.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Top Casinos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Casino Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bonus Offers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Game Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Responsible Gaming</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Problem Gambling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Self-Exclusion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Deposit Limits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Get Help
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Legal</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Affiliate Disclosure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Casino Directory Assurance. All rights reserved. |
              <span className="text-orange-400 font-semibold"> 18+ Only | Gamble Responsibly</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              This site contains affiliate links. We may receive compensation when you click on links to partner
              casinos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
