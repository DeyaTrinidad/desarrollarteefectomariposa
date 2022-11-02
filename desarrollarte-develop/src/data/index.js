import { AiOutlineCar, AiOutlineTool } from "react-icons/ai";
import { BiCameraMovie, BiFace, BiTennisBall } from "react-icons/bi";
import { CgGames, CgMouse } from "react-icons/cg";
import { FiBookOpen, FiMusic, FiShoppingCart } from "react-icons/fi";
import { GiDiamondRing } from "react-icons/gi";
import { HiOutlineCog } from "react-icons/hi";
import {
  IoBasketballOutline,
  IoDiceOutline,
  IoFlowerOutline,
  IoWomanOutline,
} from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import {
  RiComputerLine,
  RiFootprintLine,
  RiHome3Line,
  RiMentalHealthLine,
} from "react-icons/ri";

export const categoriesIcons = [
  { name: "Automotive", icon: <AiOutlineCar /> },
  { name: "Baby", icon: <BiFace /> },
  { name: "Beauty", icon: <IoWomanOutline /> },
  { name: "Books", icon: <FiBookOpen /> },
  { name: "Computers", icon: <RiComputerLine /> },
  { name: "Electronics", icon: <CgMouse /> },
  { name: "Games", icon: <CgGames /> },
  { name: "Garden", icon: <IoFlowerOutline /> },
  { name: "Grocery", icon: <FiShoppingCart /> },
  { name: "Health", icon: <RiMentalHealthLine /> },
  { name: "Home", icon: <RiHome3Line /> },
  { name: "Industrial", icon: <HiOutlineCog /> },
  { name: "Jewelery", icon: <GiDiamondRing /> },
  { name: "Kids", icon: <MdChildCare /> },
  { name: "Movies", icon: <BiCameraMovie /> },
  { name: "Music", icon: <FiMusic /> },
  { name: "Outdoors", icon: <BiTennisBall /> },
  { name: "Shoes", icon: <RiFootprintLine /> },
  { name: "Sports", icon: <IoBasketballOutline /> },
  { name: "Tools", icon: <AiOutlineTool /> },
  { name: "Toys", icon: <IoDiceOutline /> },
];

export const country = [
  {
    name: "Argentina",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/ar.svg",
    currency: "ARS",
    symbol: "$",
  },
  {
    name: "Colombia",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/co.svg",
    currency: "COP",
    symbol: "$",
  },
  {
    name: "Costa Rica",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/cr.svg",
    currency: "CRC",
    symbol: "₡",
  },
  {
    name: "Dinamarca",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/dm.svg",
    currency: "DKK",
    symbol: "kr",
  },
  {
    name: "Ecuador",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/ec.svg",
    currency: "ECS",
    symbol: "S/",
  },
  {
    name: "El Salvador",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/sv.svg",
    currency: "USD",
    symbol: "$",
  },
  {
    name: "Estados Unidos",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/us.svg",
    currency: "USD",
    symbol: "$",
  },
  {
    name: "Guatemala",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/gu.svg",
    currency: "GQT",
    symbol: "Q",
  },
  {
    name: "México",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/mx.svg",
    currency: "MXN",
    symbol: "$",
  },
  {
    name: "Panamá",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/pn.svg",
    currency: "PAB",
    symbol: "B/.​",
  },
  {
    name: "Perú",
    flag:
      "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/flags/pu.svg",
    currency: "PEN",
    symbol: "S/​",
  },
];
export const popularCategories = [
  {
    id: "automotive",
    name: "Automotive",
    icon: <AiOutlineCar className="category-box__icon" />,
  },
  {
    id: "computers",
    name: "Computers",
    icon: <RiComputerLine className="category-box__icon" />,
  },
  {
    id: "games",
    name: "Games",
    icon: <CgGames className="category-box__icon" />,
  },
  {
    id: "grocery",
    name: "Grocery",
    icon: <FiShoppingCart className="category-box__icon" />,
  },
  {
    id: "home",
    name: "Home",
    icon: <RiHome3Line className="category-box__icon" />,
  },
  {
    id: "kids",
    name: "Kids",
    icon: <MdChildCare className="category-box__icon" />,
  },
  {
    id: "music",
    name: "Music",
    icon: <FiMusic className="category-box__icon" />,
  },

  {
    id: "tools",
    name: "Tools",
    icon: <AiOutlineTool className="category-box__icon" />,
  },
];
