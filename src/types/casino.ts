export interface Casino {
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
}
export interface CasinoCardProps {
  casino: Casino;
}
