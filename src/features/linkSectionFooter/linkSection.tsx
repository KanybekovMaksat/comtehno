import { Link } from "react-router-dom";

interface LinkItem {
  title: string;
  href: string;
}

interface LinksSectionProps {
  title: string;
  links: LinkItem[];
}

const LinksSection: React.FC<LinksSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <h4 className="text-[18px] font-semibold text-[#101828]">{title}</h4>
      <ul className="flex flex-col gap-[8px]">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-[16px] font-medium text-[#475467] hover:text-[#101828] transition duration-300"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSection;
