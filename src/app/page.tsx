import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      {/* <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CDA</span>
              </div>
              <h1 className="text-xl font-bold text-white">Casino Directory Assurance</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#casinos" className="text-white hover:text-green-400 transition-colors">
                Top Casinos
              </a>
              <a href="#reviews" className="text-white hover:text-green-400 transition-colors">
                Reviews
              </a>
              <a href="#bonuses" className="text-white hover:text-green-400 transition-colors">
                Bonuses
              </a>
              <a href="#responsible" className="text-white hover:text-green-400 transition-colors">
                Responsible Gaming
              </a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400">
            Safe & Trusted
            <br />
            Online Casinos
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We review and rank only licensed, secure online casinos. Play responsibly with our verified recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-black to-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all">
              View Top Casinos
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Learn About Responsible Gaming
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-sm text-gray-300">Casinos Reviewed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-300">Licensed Operators</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-green-400">SSL</div>
              <div className="text-sm text-gray-300">Secure Encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Casinos Section */}
      <section id="casinos" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 text-center mb-12">
            Top Rated Casinos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-black to-green-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">#{index}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Casino Name {index}</h4>
                      <div className="flex text-yellow-400 text-sm">★★★★★</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Welcome Bonus</span>
                    <span className="text-green-400 font-semibold">$1000 + 100 Spins</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">License</span>
                    <span className="text-green-400">Malta Gaming Authority</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Games</span>
                    <span className="text-white">2000+</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-black to-green-400 text-white py-2 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all">
                  Play Now
                </button>
                <p className="text-xs text-gray-400 mt-2 text-center">18+ | Play Responsibly</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 text-center mb-12">
            Why Choose Our Recommendations?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
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
              <h4 className="text-xl font-semibold text-white mb-2">Verified & Licensed</h4>
              <p className="text-gray-300">All casinos are verified for proper licensing and regulatory compliance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Secure & Safe</h4>
              <p className="text-gray-300">SSL encryption, secure payment methods, and data protection guaranteed.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Responsible Gaming</h4>
              <p className="text-gray-300">
                We promote safe gambling practices and provide resources for responsible gaming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gaming Section */}
      <section id="responsible" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🛡️ Responsible Gaming Commitment</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Our Promise</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Only recommend licensed, regulated casinos</li>
                  <li>• Promote deposit limits and self-exclusion tools</li>
                  <li>• Provide addiction support resources</li>
                  <li>• Age verification (18+ only)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Get Help</h4>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>National Problem Gambling Helpline:</strong> 1-800-522-4700
                  </p>
                  <p>
                    <strong>GamCare:</strong> www.gamcare.org.uk
                  </p>
                  <p>
                    <strong>Gamblers Anonymous:</strong> www.gamblersanonymous.org
                  </p>
                </div>
                <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  Learn More About Safe Gaming
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 mb-4 text-center">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest casino reviews, bonus offers, and responsible gaming tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <button className="bg-gradient-to-r from-black to-green-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-green-500 transition-all">
              Subscribe
            </button>
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
