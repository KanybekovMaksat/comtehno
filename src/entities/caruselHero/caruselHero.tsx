import { Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

interface ApiItem {
  id: number;
  banner: string;
  link: {
    title: string;
    to: string;
  };
}

const caruselist: ApiItem[] = [
  { id: 1, banner: "Новый сайт КОМТЕХНО", link: { title: "Посетить сайт", to: "/error" } },
  { id: 2, banner: "Новогоднее чудо в КОМТЕХНО", link: { title: "Какое чудо?", to: "/error" } },
  { id: 3, banner: "Молодежный форум разработчиков", link: { title: "Посетить форум", to: "/error" } },
  { id: 4, banner: "КОМТЕХНО развивает профессионализм", link: { title: "Стать профессионалом", to: "/error" } },
  { id: 5, banner: "День учителя", link: { title: "Посетить сайт", to: "/error" } },
  { id: 6, banner: "banner 6", link: { title: "Посетить сайт", to: "/error" } },
  { id: 7, banner: "banner 7", link: { title: "Посетить сайт", to: "/error" } },
];

const Carusel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee 
        direction="left" 
        speed={100} 
        className="mb-3 overflow-x-none">
        <div className="flex items-center gap-4 ml-4">
          {caruselist.map((carusel: ApiItem) => (
            <div
  key={carusel.id}
  className="relative flex justify-end w-[400px] h-[150px] bg-[url('https://i.pinimg.com/736x/8d/9d/41/8d9d4126465173e64f3f8745cc8cbb07.jpg')] bg-cover bg-center text-white font-geologica flex-col rounded-2xl p-4 transition "
>
  <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
  
  <div className="relative z-10">
    <Typography variant="h3" className="mb-2 text-[20px] font-normal">
      {carusel.banner}
    </Typography>
    <Link
      to={carusel.link.to}
      className=" bg-green  h-[50px] inline-flex items-center text-white text-sm px-3 py-1 rounded transition"
    >
      {carusel.link.title}
    </Link>
  </div>
</div>

          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carusel;