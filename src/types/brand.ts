export interface WatchModel {
  id: string;
  name: string;
  tagline: string;
  image: string;
  priceUSD: number;
  priceEUR: number;
  priceRUB: number;
  limitedEdition?: string;
  specs: {
    case: string;
    caseDiameter: string;
    caseThickness: string;
    dial: string;
    hands: string;
    crystal: string;
    strap: string;
    movement: string;
    powerReserve: string;
    frequency: string;
    waterResistance: string;
    finishing: string;
  };
  features: string[];
  description: string;
  caseColor: string;
  dialColor: string;
  lumeColor: string;
}

export interface LaunchPhase {
  phase: string;
  title: string;
  timeline: string;
  objective: string;
  tactics: string[];
  kpis: string[];
}

export interface AdCampaign {
  id: string;
  title: string;
  slogan: string;
  theme: string;
  location: string;
  visualDirection: string;
  targetEmotion: string;
  copySample: string;
}

export interface SocialPost {
  id: string;
  type: 'image' | 'carousel' | 'reel';
  image: string;
  caption: string;
  engagement: string;
  category: string;
}
