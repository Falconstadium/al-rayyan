import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { getLang } from './lib';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ProductDetail } from './components/ProductDetail';

type LanguageKey = 'en' | 'fr' | 'ar';

function App() {
  const lang: any = getLang();
  const validatedLang: LanguageKey = ['en', 'fr', 'ar'].includes(lang)
    ? (lang as LanguageKey)
    : 'en';

  return (
    <BrowserRouter>
      <Navbar langName={validatedLang} />
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
