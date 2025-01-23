import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export function Footer() {
  return (
    <Box component="footer" className="bg-violet text-white py-8 px-6 md:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <Link to="/" className="flex items-center mb-6 lg:mb-0">
          <Typography
            variant="h6"
            component="div"
            className="font-bold text-lg text-center lg:text-left"
          >
            Comtehno
          </Typography>
        </Link>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/about" className="text-gray-300 hover:text-white text-sm">
            О платформе
          </Link>
          <Link to="/catalog" className="text-gray-300 hover:text-white text-sm">
            Каталог
          </Link>
          <Link to="/loyalty" className="text-gray-300 hover:text-white text-sm">
            Программа лояльности
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white text-sm">
            Контакты
          </Link>
        </div>

        <div className="flex space-x-4 mt-6 lg:mt-0">
          <a
            href="https://t.me/yourTelegramLink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <TelegramIcon />
          </a>
          <a
            href="https://instagram.com/yourInstagramLink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://facebook.com/yourFacebookLink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4">
        <Typography
          variant="body2"
          className="text-gray-400 text-center text-sm"
        >
          &copy; {new Date().getFullYear()} Milcase. Все права защищены.
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-400 text-center text-sm mt-2"
        >
          Developed by OurEra Soft
        </Typography>
      </div>
    </Box>
  );
}
