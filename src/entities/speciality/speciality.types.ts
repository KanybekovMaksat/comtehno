export interface specialCardProps {
  id: number;
  title: string;
  specialty: string;
  previewPhoto: string;
  category: {
    name: string;
    photo: string;
  };
  slug: string;
}
