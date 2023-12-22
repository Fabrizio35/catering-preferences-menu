import "./App.css";
import Sidebar from "./components/Sidebar";
import PreferencesMenu from "./views/PreferencesMenu/PreferencesMenu";
import TitleView from "./components/TitleView";
import { navList } from "./data/data";

/* Preferences Menu View */
function App() {
  return (
    <>
      <Sidebar navList={navList} />
      <TitleView title={"Preferences"} />
      <PreferencesMenu />
    </>
  );
}

export default App;
