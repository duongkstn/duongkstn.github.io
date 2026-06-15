export interface LifePhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  date?: string;
}

export interface LifeData {
  categories: string[];
  photos: LifePhoto[];
}

export const lifeData: LifeData = {
  categories: ["Travel", "Family", "Moments", "Events"],
  photos: [
    // Photos will be added here later
  ]
};
