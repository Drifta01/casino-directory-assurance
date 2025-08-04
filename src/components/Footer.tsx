export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4"></div>
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
            © 2025 Slots Direct. All rights reserved. |
            <span className="text-orange-400 font-semibold"> 18+ Only | Gamble Responsibly</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This site contains affiliate links. We may receive compensation when you click on links to partner casinos.
          </p>
        </div>
      </div>
    </footer>
  );
};
