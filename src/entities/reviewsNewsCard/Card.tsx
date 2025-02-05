import { Card, CardContent } from "@mui/material";

interface CardProps {
  image: string;
  date: string;
  category: string;
  title: string;
}

export const CustomCard: React.FC<CardProps> = ({ image, date, category, title }) => {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
      <CardContent className="p-4">
        <p className="text-sm text-gray-500">{date} • {category}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardContent>
    </Card>
  );
};