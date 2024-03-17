import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import { ROUTE } from "./common/constants/route";
import Components from './pages/Components/index';
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Navigation />} />
      <Route path={ROUTE.COMPONENT} element={<Components />} />
      <Route path={ROUTE.ABOUT} element={<About />} />
    </Routes>
  );
}

export default App;
