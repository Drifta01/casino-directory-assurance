import Image from "next/image";

export default function TopCasinos() {
  const topCasinos = [
    {
      id: 1,
      rank: 1,
      name: "BetMGM Casino",
      logo: "🎰",
      rating: 4.9,
      trustScore: 98,
      welcomeBonus: "$1000",
      freeSpins: "200",
      minDeposit: "$10",
      payoutSpeed: "1-3 days",
      gameCount: "2500+",
      license: "New Jersey Gaming Commission",
      established: "2018",
      features: ["24/7 Support", "Mobile App", "Live Chat", "VIP Program"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "Bank Transfer", "Apple Pay"],
      popularGames: ["Blackjack", "Roulette", "Slots", "Poker", "Baccarat"],
      pros: ["Excellent game variety", "Fast withdrawal processing", "Strong mobile app", "Trusted brand name"],
      gameProviders: ["NetEnt", "Microgaming", "Evolution", "Pragmatic Play"],
      restrictions: "NJ, PA, MI, WV residents only",
      maxPayout: "$500,000",
      rtp: "96.5%",
      currencies: ["USD"],
      languages: ["English"],
      customerSupport: "24/7 Live Chat, Email, Phone",
    },
    {
      id: 2,
      rank: 2,
      name: "Caesars Palace Online",
      logo: "👑",
      rating: 4.8,
      trustScore: 99,
      welcomeBonus: "$2500",
      freeSpins: "0",
      minDeposit: "$20",
      payoutSpeed: "2-5 days",
      gameCount: "1800+",
      license: "Nevada Gaming Control Board",
      established: "2013",
      features: ["VIP Rewards", "Live Dealer", "Mobile Optimized", "Exclusive Games"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "Play+", "Bank Transfer"],
      popularGames: ["Baccarat", "Craps", "Video Poker", "Slots", "Roulette"],
      pros: [
        "Prestigious brand reputation",
        "Generous welcome package",
        "Exclusive VIP program",
        "High-quality live dealer games",
      ],
      gameProviders: ["IGT", "NetEnt", "Evolution", "Playtech"],
      restrictions: "NV, NJ, PA, MI residents only",
      maxPayout: "$1,000,000",
      rtp: "96.8%",
      currencies: ["USD"],
      languages: ["English"],
      customerSupport: "24/7 Live Chat, Email, Phone",
    },
    {
      id: 3,
      rank: 3,
      name: "DraftKings Casino",
      logo: "🏆",
      rating: 4.7,
      trustScore: 96,
      welcomeBonus: "$2000",
      freeSpins: "0",
      minDeposit: "$5",
      payoutSpeed: "1-2 days",
      gameCount: "1200+",
      license: "Pennsylvania Gaming Control Board",
      established: "2020",
      features: ["Sportsbook Integration", "Daily Promotions", "Mobile First", "Quick Deposits"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"],
      popularGames: ["Daily Fantasy", "Slots", "Blackjack", "Roulette", "Video Poker"],
      pros: ["Low minimum deposit", "Quick payouts", "Great mobile experience", "Integration with sportsbook"],
      gameProviders: ["NetEnt", "IGT", "SG Digital", "Evolution"],
      restrictions: "NJ, PA, MI, WV residents only",
      maxPayout: "$250,000",
      rtp: "96.2%",
      currencies: ["USD"],
      languages: ["English"],
      customerSupport: "24/7 Live Chat, Email",
    },
    {
      id: 4,
      rank: 4,
      name: "Golden Nugget Online",
      logo: "💰",
      rating: 4.6,
      trustScore: 95,
      welcomeBonus: "$1500",
      freeSpins: "200",
      minDeposit: "$10",
      payoutSpeed: "1-3 days",
      gameCount: "1500+",
      license: "New Jersey Division of Gaming Enforcement",
      established: "2013",
      features: ["Live Dealer", "Progressive Jackpots", "Mobile App", "Loyalty Program"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "Play+", "ACH"],
      popularGames: ["Slots", "Blackjack", "Roulette", "Baccarat", "Pai Gow"],
      pros: ["Strong game selection", "Reliable payments", "Good customer service", "Progressive jackpots"],
      gameProviders: ["NetEnt", "IGT", "Evolution", "Red Tiger"],
      restrictions: "NJ, PA, MI residents only",
      maxPayout: "$500,000",
      rtp: "96.3%",
      currencies: ["USD"],
      languages: ["English"],
      customerSupport: "24/7 Live Chat, Email, Phone",
    },
    {
      id: 5,
      rank: 5,
      name: "FanDuel Casino",
      logo: "🎲",
      rating: 4.5,
      trustScore: 94,
      welcomeBonus: "$1000",
      freeSpins: "0",
      minDeposit: "$10",
      payoutSpeed: "2-4 days",
      gameCount: "1000+",
      license: "Pennsylvania Gaming Control Board",
      established: "2019",
      features: ["Same Game Parlay", "Live Betting", "Cash Out", "Daily Promotions"],
      paymentMethods: ["Visa", "Mastercard", "PayPal", "FanDuel Play+", "Online Banking"],
      popularGames: ["Slots", "Blackjack", "Roulette", "Craps", "Video Poker"],
      pros: ["User-friendly interface", "Good promotional offers", "Reliable platform", "Sports betting integration"],
      gameProviders: ["NetEnt", "IGT", "Evolution", "WMS"],
      restrictions: "NJ, PA, MI, WV residents only",
      maxPayout: "$1,000,000",
      rtp: "96.1%",
      currencies: ["USD"],
      languages: ["English"],
      customerSupport: "24/7 Live Chat, Email",
    },
  ];

  const filterOptions = [
    "All Casinos",
    "Highest Rated",
    "Best Bonuses",
    "Fastest Payouts",
    "Mobile Friendly",
    "Live Dealer",
    "New Casinos",
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top Rated <span className="text-transparent bg-clip-text bg-green-400">Online Casinos</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our expert team has tested and ranked the best licensed online casinos. All sites featured are fully
            regulated, secure, and offer fair gaming.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container w-fi mx-auto">
          <div className="space-y-6">
            {topCasinos.map((casino) => (
              <div
                key={casino.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-green-400/50 transition-all overflow-hidden"
              >
                {/* Casino Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Rank Badge */}
                      <div className="w-12 h-12 bg-gradient-to-t from-black to-green-400 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">#{casino.rank}</span>
                      </div>

                      {/* Casino Info */}
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-2xl">
                          {casino.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{casino.name}</h3>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <div className="flex text-yellow-400">
                                {"★".repeat(Math.floor(casino.rating))}
                                {"☆".repeat(5 - Math.floor(casino.rating))}
                              </div>
                              <span className="text-gray-300 text-sm">{casino.rating}/5</span>
                            </div>
                            <div className="bg-green-400/20 px-2 py-1 rounded text-green-400 text-sm font-semibold">
                              {casino.trustScore}% Trust Score
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Welcome Bonus */}
                    <div className="mt-4 lg:mt-0 text-center lg:text-right">
                      <div className="text-sm text-gray-400 mb-1">Welcome Bonus</div>
                      <div className="text-2xl font-bold text-green-400">
                        ${casino.welcomeBonus}
                        {casino.freeSpins !== "0" && (
                          <span className="text-lg text-white"> + {casino.freeSpins} Spins</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-300">Min deposit: {casino.minDeposit}</div>
                    </div>
                  </div>
                </div>

                {/* Casino Details */}
                <div className="p-6">
                  {/* Quick Facts Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    <div className="bg-white/5 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Games</div>
                      <div className="text-white font-semibold">{casino.gameCount}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Payout Speed</div>
                      <div className="text-white font-semibold">{casino.payoutSpeed}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Min Deposit</div>
                      <div className="text-white font-semibold">{casino.minDeposit}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Max Payout</div>
                      <div className="text-white font-semibold">{casino.maxPayout}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-400">RTP</div>
                      <div className="text-white font-semibold">{casino.rtp}</div>
                    </div>
                  </div>

                  {/* Features and Games */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {casino.features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Popular Games</h4>
                      <div className="flex flex-wrap gap-2">
                        {casino.popularGames.map((game, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                            {game}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Payment Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {casino.paymentMethods.map((method, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pros */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <span className="text-green-400 mr-2">✓</span> Why We Recommend
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {casino.pros.map((pro, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <span className="text-green-400 mr-2">•</span>
                          {pro}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* License and Security */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6 p-4 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">Licensed By</div>
                      <div className="text-white font-semibold">{casino.license}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Established</div>
                      <div className="text-white font-semibold">{casino.established}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-gradient-to-t from-black to-green-400 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-gray-900 hover:to-green-500 transition-all">
                      PLAY NOW - Claim Bonus
                    </button>
                    <button className="border-2 border-green-400 text-green-400 py-4 px-6 rounded-xl font-semibold hover:bg-green-400 hover:text-black transition-all">
                      Read Full Review
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-400">
                      18+ | {casino.restrictions} | Terms & Conditions Apply | Play Responsibly
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Our Rankings */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-green-400 text-center mb-12">
            Why Trust Our Casino Rankings?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-t from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Licensed & Regulated</h4>
              <p className="text-gray-300">
                Every casino is verified to hold proper licensing from recognized gaming authorities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-t from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Real Money Testing</h4>
              <p className="text-gray-300">
                Our experts deposit real money and test every aspect from games to withdrawals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-t from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Updated Monthly</h4>
              <p className="text-gray-300">
                Rankings are updated monthly based on performance, new features, and player feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
