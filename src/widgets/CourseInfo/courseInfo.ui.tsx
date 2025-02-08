import { Container } from "@mui/material";
import { CourseInfoContact } from "~entities/courseInfoContact/courseInfoContact";

export const CourseInfo: React.FC = () => {
  return (
    <Container className="max-w-[1440px] mb-[150px]">
        <div className="flex w-full r-md:flex-col gap-6">
            <div className="r-md:w-full w-[60%] gap-6 flex flex-col">
                <div className="p-8 bg-[#0D9488] text-white rounded-2xl">
                    <h1 className="r-sm:text-xl r-lg:text-2xl text-4xl">
                        Стоимость обучения
                    </h1>
                    <h1 className="r-sm:text-lg r-lg:text-3xl text-[44px] font-bold">
                        40 000 сом в год
                    </h1>
                </div>
                <div className="flex r-md:flex-col w-full gap-6">
                    <div className="p-6 r-md:w-full w-[475px] bg-[#F4F4F5] rounded-2xl gap-6 flex flex-col">
                        <h1 className="r-lg:text-xl text-[28px]">
                            Срок обучения
                        </h1>
                        <div className="flex r-md:flex-col r-md:items-baseline items-center gap-4">
                            <div>
                                <p className="r-lg:text-base text-xl">После 9 класса:</p>
                                <span className="r-lg:text-base text-[21px] text-[#0D9488]">2 года 10 месяцев</span>
                            </div>
                            
                            <div className="r-md:hidden h-12 border-l-2 border-[#E4E4E7]"></div>
                            <div className="r-md:flex hidden w-full border-t-2 border-[#E4E4E7]"></div>

                            <div>
                                <p className="r-lg:text-base text-xl">После 11 класса:</p>
                                <span className="r-lg:text-base text-[21px] text-[#0D9488]">1 год 10 месяцев</span>
                            </div>
                        </div>

                    </div>

                    <div className="p-6 r-md:w-full w-[350px] bg-[#F4F4F5] rounded-2xl gap-6 flex flex-col">
                        <h1 className="r-lg:text-xl text-[28px]">
                            Стажировка
                        </h1>
                        <div className="flex items-center space-x-4">
                            <div>
                                <p className="r-lg:text-base text-xl">На 2 курсе:</p> 
                                <span className="r-lg:text-base text-[21px] text-[#0D9488] ">2 месяца</span>
                            </div>
                            <div className="h-12 border-l-2 border-[#E4E4E7]"></div>
                            <div>
                                <p className="r-lg:text-base text-xl">На 3 курсе: </p>
                                <span className="r-lg:text-base text-[21px] text-[#0D9488] ">3 месяца</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-[#F4F4F5] rounded-2xl div">
                    <h1 className="r-lg:text-xl text-[28px]">
                        Навыки
                    </h1>
                    <ul className="list-none mt-2 r-sm:text-sm r-lg:text-base text-xl">
                        <li>- Диплом о среднем профессиональном образовании</li>
                        <li>- Практика от наших компаний-партнеров</li>
                        <li>- Внеучебные активности</li>
                    </ul>
                </div>
            </div>
            <div className="r-md:w-full w-[40%] r-lg:p-4 p-6 bg-[#0D9488] rounded-2xl flex flex-col justify-between">
                <h1 className="text-white r-sm:text-2xl r-lg:text-3xl text-[44px]">
                    Хотите поступить? Свяжитесь с нами
                </h1>
                <CourseInfoContact />
            </div>
        </div>
    </Container>
  );
};
