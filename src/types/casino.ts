interface Casino {
  id: number;
  name: string;
  rating: number;
  welcomeBonus: string;
  license: string;
  gamesCount: number;
  logo: string;
  description: string;
  link: string;
  isRecommended: boolean;
  isNew: boolean;
  isPopular: boolean;
  isExclusive: boolean;
  casino: Casino;
}
interface CasinoCardProps {
  casino: Casino;
  featured?: boolean;
  isExpanded?: boolean;

}

export type { Casino, CasinoCardProps };