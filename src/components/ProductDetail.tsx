import { useParams } from 'react-router-dom';
import { products } from '../assets/data';

export const ProductDetail = () => {
  const { slug } = useParams();
  const items = products.find((p) => p.slug === slug);
  return (
    <section className="relative mx-auto place-content-center py-7 md:max-w-xl">
      <div className="grid place-items-center gap-4 px-4">
        <img
          src={items?.image}
          alt={items?.image}
          loading="lazy"
          className="aspect-square w-40 rounded object-cover"
        />
        <h1 className="text-xl font-bold capitalize">{items?.title}</h1>
        <p className="text-justify text-sm font-medium">{items?.text}</p>
        <div>
          <h3 className="mb-3 font-semibold capitalize">
            {items?.benefit?.title}
          </h3>
          <div className="grid gap-1">
            <p className="text-justify text-sm font-medium">
              {items?.benefit?.detail1}
            </p>
            <p className="text-justify text-sm font-medium">
              {items?.benefit?.detail2}
            </p>
            <p className="text-justify text-sm font-medium">
              {items?.benefit?.detail3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
