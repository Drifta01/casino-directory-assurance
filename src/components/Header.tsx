export const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-black to-green-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CDA</span>
            </div>
            <h1 className="text-xl font-bold text-white">Casino Directory Assurance</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-green-400 transition-colors">
              Home
            </a>
            <a href="/casinos" className="text-white hover:text-green-400 transition-colors">
              Top Casinos
            </a>
            <a href="/reviews" className="text-white hover:text-green-400 transition-colors">
              Reviews
            </a>
            <a href="/bonuses" className="text-white hover:text-green-400 transition-colors">
              Bonuses
            </a>
            <a href="#/responsible" className="text-white hover:text-green-400 transition-colors">
              Responsible Gaming
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
