import { Link } from 'react-router-dom';

const LinksSection: React.FC<{ title: string, links: string[] }> = ({ title, links }) => {
  const formatTitleForURL = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="sm:block hidden">
      <Link 
        to={`/${formatTitleForURL(title)}`} 
        className="mb-[16px] text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]"
      >
        {title}
      </Link>
      <ol className="list-none mt-[14px] flex flex-col gap-[16px] mb-[24px]">
        {links.map((link, index) => (
          <li key={index} className="text-[15px] md:text-[16px] text-[#52525B]">
            <Link to={`/${formatTitleForURL(link)}`} className="hover:underline">
              {link}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LinksSection;
