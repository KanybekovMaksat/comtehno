export const Internship: React.FC = () => {
  return (

    <div className='w-[349px] r-lg:w-full p-[16px] rounded-[16px] bg-[#F4F4F5]'>
      <h2 className='mb-[24px] text-[22px] sm:text-[28px] font-[400] leading-[27.5px] sm:leading-[35px] text-[#18181B]'>Стажировка</h2>
      <div className='flex'>
        <div className='flex flex-col pr-[24px] border-r border-[#E4E4E7]'>
          <p className='mb-[8px] text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]'>на 2 курсе</p>
          <p className='text-[15px] md:text-[22px] font-[400] leading-[27.75px] text-[#0F766E]'>2 месяца</p>
        </div>
        <div className='flex flex-col pl-[24px]'>
          <p className='mb-[8px] text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]'>на 3 курсе</p>
          <p className='text-[15px] md:text-[22px] font-[400] leading-[27.75px] text-[#0F766E]'>3 месяца</p>
        </div>
      </div>
    </div>
  );
};

export const TimeStudy: React.FC = () => {
  return (
      <div className='w-[457px] r-lg:w-full  p-[16px] rounded-[16px] bg-[#F4F4F5]'>
          <h2 className='mb-[24px] r-sm:text-[22px] text-[28px] font-[400] r-sm:leading-[27.5px] leading-[35px] text-[#18181B]'>Срок обучения</h2>
          <div className='flex flex-row r-sm:flex-col gap-[24px]'>
              <div className='flex flex-col'>
                  <p className='mb-[8px] text-[16px] sm:text-[19px] font-[400] leading-[20px] sm:leading-[23.75px] text-[#18181B]'>После 9 класса</p>
                  <p className='text-[19px] sm:text-[22px] font-[400] leading-[23.75px] sm:leading-[27.75px] text-[#0F766E]'>2 года 10 месяцев</p>
              </div>
               <div className='border-right-[1px] border-[1px] border-[#E4E4E7]'></div>
              <div className='flex flex-col'>
                  <p className='mb-[8px] text-[16px] sm:text-[19px] font-[400] leading-[20px] sm:leading-[23.75px] text-[#18181B]'>После 11 класса</p>
                  <p className='text-[19px] sm:text-[22px] font-[400] leading-[23.75px] sm:leading-[27.75px] text-[#0F766E]'>1 год 10 месяцев</p>
              </div>
          </div>
      </div>
  );
};