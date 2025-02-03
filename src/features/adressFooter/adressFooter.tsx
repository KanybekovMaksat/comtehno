const AddressSection: React.FC = () => (
  <div className="address flex flex-col pr-[30px] mb-[16px]">
    <div>
      <h2 className="mb-[16px] text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]">Адрес</h2>
      <ol className="list-none flex flex-col gap-[4px] mb-[24px]">
        <li className="text-[15px] md:text-[16px] text-[#52525B]">Кыргызская Республика</li>
        <li className="text-[15px] md:text-[16px] text-[#52525B]">Город Бишкек</li>
        <li className="text-[15px] md:text-[16px] text-[#52525B]">Виноградная улица, 1/14</li>
      </ol>
    </div>
    <div>
      <h2 className="text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B] mb-[16px]">График работы</h2>
      <ol className="list-none flex flex-col gap-[4px]">
        <li className="text-[15px] md:text-[16px] text-[#52525B]">ПН – ПТ 07:30–17:00</li>
        <li className="text-[15px] md:text-[16px] text-[#52525B]">СБ – ВС Выходной</li>
      </ol>
    </div>
  </div>
);

export default AddressSection;