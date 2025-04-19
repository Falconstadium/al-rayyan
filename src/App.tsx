import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ProductDetail } from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path="/:lang/" Component={Home} />
        <Route path="/:lang/about" Component={About} />
        <Route path="/:lang/contact" Component={Contact} />
        <Route path="/:lang/:slug" Component={ProductDetail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
