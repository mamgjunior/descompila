import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import HeaderPartial from "./Partials/HeaderPartial/HeaderPartial";
import MinhasPastasPage from "./pages/MinhasPastas/MinhasPastasPage";

import { AppContext } from "./store/AppContext";

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: [],
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;