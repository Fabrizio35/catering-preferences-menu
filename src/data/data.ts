import { Home, ShoppingCart } from "@mui/icons-material";

/* Data Test */

export const user = {
  username: "Username",
  photo:
    "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",
};

export const navList = [
  { label: "Home", icon: Home },
  { label: "Cart", icon: ShoppingCart },
];

export const argentineMenu = {
  id: 1,
  name: "Argentine Menu",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  dishes: [
    {
      id: 1,
      name: "Ensalada",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://imagenes.elpais.com/resizer/wulM6Eb2dk2qw2fLImykX6Xx_ts=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/3KWQUZHLQFGVRIWYQGO3A5WFD4.jpg",
      ingredients: [
        { id: 1, name: "Lechuga" },
        { id: 2, name: "Tomate" },
        { id: 3, name: "Cebolla" },
        { id: 4, name: "Cebolla morada" },
        { id: 5, name: "Choclo" },
        { id: 6, name: "Zanahoria" },
      ],
    },
    {
      id: 2,
      name: "Milanesa con papas fritas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://img-global.cpcdn.com/recipes/fe5f1314c9c8da7e/400x400cq70/photo.jpg",
      ingredients: [
        { id: 1, name: "Carne" },
        { id: 2, name: "Papas" },
        { id: 3, name: "Pan rallado" },
        { id: 4, name: "Aceite" },
        { id: 5, name: "Sal" },
      ],
    },
    {
      id: 3,
      name: "Helado",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg",
      ingredients: [
        { id: 1, name: "Helado de Vainilla" },
        { id: 2, name: "Helado de dulce de leche" },
        { id: 3, name: "Cucurucho" },
        { id: 4, name: "Crema" },
      ],
    },
  ],
};

export const dataFooter = [
  { id: 1, label: "Advertising policy" },
  { id: 2, label: "Terms and Conditions" },
  { id: 3, label: "Security" },
  { id: 4, label: "Home" },
  { id: 5, label: "Companies" },
  { id: 6, label: "Carts" },
];
