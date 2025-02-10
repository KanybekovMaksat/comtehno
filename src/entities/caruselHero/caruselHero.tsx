import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

interface ApiItem {
  id: number;
  banner: string;
}

const caruselist: ApiItem[] = [
  { id: 1, banner: "Новый сайт КОМТЕХНО" },
  { id: 2, banner: "Новогоднее чудо в КОМТЕХНО" },
  { id: 3, banner: "Молодежный форум разработчиков" },
  { id: 4, banner: "КОМТЕХНО развивает профессионализм" },
  { id: 5, banner: "День учителя" },
  { id: 6, banner: "banner 6" },
  { id: 7, banner: "banner 7" },
];

const Carusel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden my-10">
      <Marquee 
        direction="left" 
        speed={100} 
        className="mb-3 overflow-x-none">
        <div className="flex items-center gap-4 ml-4">
          {caruselist.map((carusel: ApiItem) => (
            <div
              key={carusel.id}
              className="w-[400px] pt-[40px] h-[150px] bg-[url('https://i.pinimg.com/736x/8d/9d/41/8d9d4126465173e64f3f8745cc8cbb07.jpg')] bg-cover text-white font-geologica flex flex-col rounded-2xl px-4"
            >
              <h3 className="w-[90%] text-[19px] font-normal">{carusel.banner}</h3>
              <Link className="border" to="/mission">Миссия</Link>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carusel;