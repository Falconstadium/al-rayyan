import { Link } from 'react-router-dom';
import { products } from '../assets/data';

// type LanguageKey = keyof typeof homeResources; // Extract 'en' | 'fr' | 'ar' as the type

export const Home = () => {
  return (
    <section className="container place-content-center font-inter bg-neutral-100">
      <div className="md:max-w-3xl lg:max-w-5xl mx-auto py-16 grid md:grid-cols-3 gap-12 px-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded shadow pb-5 grid place-items-center gap-2 overflow-hidden bg-white">
            <img src={p.image} alt={p.image} className="w-full aspect-square" />
            <div className="grid gap-2 px-2 place-items-center">
              <h1 className="font-semibold text-lg capitalize">{p.title}</h1>
              <Link
                to={p.slug}
                className="font-medium bg-green-700 text-white px-3 py-1 rounded transition-colors duration-200 ease-in-out text-sm hover:bg-green-600">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
