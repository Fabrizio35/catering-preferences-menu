import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Home, ShoppingCart } from "@mui/icons-material";

/* Sidebar Navbar Component List */
const navList = [
  { label: "Home", icon: Home },
  { label: "Cart", icon: ShoppingCart },
];

function App() {
  return (
    <>
      <Sidebar navList={navList} />
    </>
  );
}

export default App;
