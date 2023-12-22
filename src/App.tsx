import "./App.css";
import Sidebar from "./components/Sidebar";
import { Home, ShoppingCart } from "@mui/icons-material";

const listNav = [
  { label: "Home", icon: Home },
  { label: "Cart", icon: ShoppingCart },
];

function App() {
  return (
    <>
      <Sidebar listNav={listNav} />
    </>
  );
}

export default App;
