import "./css/App.css";
import AppProvider from "./context/AppProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Kontakt from "./pages/Kontakt/Kontakt";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              {/*weitere Routen hier zwischen */}
              <Route path="kontakt" element={<Kontakt />} />
              {/*weitere Routen hier zwischen */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
