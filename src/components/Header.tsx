export const Header = () => {
  return (
    <header className="bg-slate-900/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2"></div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-green-400 transition-colors">
              Home
            </a>
            <a href="/casinos" className="text-white hover:text-green-400 transition-colors">
              Top Casinos
            </a>

            <a href="/bonuses" className="text-white hover:text-green-400 transition-colors">
              Latest Bonuses
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
