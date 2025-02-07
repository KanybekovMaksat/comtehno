import Marquee from "react-fast-marquee";

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
      <Marquee direction="left" speed={150} pauseOnHover className="mb-3 overflow-x-none">
        <div className="flex items-center gap-4 ml-4">
          {caruselist.map((carusel: ApiItem) => (
            <div
              key={carusel.id}
              className="w-[400px] h-[98px] bg-white/10 backdrop-blur-xl text-white font-geologica flex items-center justify-center rounded-2xl px-4"
            >
              <h3 className="w-[170px] text-[19px] font-normal">{carusel.banner}</h3>
              <img
                className="w-[146px] h-[82px] rounded-lg"
                src="https://s3-alpha-sig.figma.com/img/2e02/8952/1b5573a9f7c718850f076dce7766cd1b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4Ge8kthLPwXTGKuw-iPdTbPs90GpaxSiksDw9GNv9so-d2hhgqS1VO4wGalwwbKQeJcAWAjfrEjtnM5wI5ZQ6za8OHHuZyJTeRbDyGUaACJ2eGU3qdBHAme3EC1VHMpissRL6wJdML1GQRM1ie8hTFPhOhkbszj1HSdRItKyQLwqbijUuRyIL7Q5QOkSeAE-EHxxtWxnbdYPgfCe6qM0hCOh3yTa5P8fbFncy~deZvRAlP3TB2p~eTc1p~XEtO9WBSC0xuYFtdwLpFRdFbychT0u~Ur2YrJrHVV-fMo7QfG7lSSxe6PpdQ1PpPsl9zBk~XQjGp80MhrGVMK1z1I3g__"
                alt="Баннер"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carusel;
