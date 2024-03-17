import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import { ROUTE } from "./common/constants/route";
import Components from './pages/Components/index';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Navigation />} />
      <Route path={ROUTE.COMPONENT} element={<Components />} />
    </Routes>
  );
}

export default App;
