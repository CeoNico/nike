import PopularProductCard from "@/components/PopularProductCard";
import { products } from "@/const";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Nuestros <span className="text-coral-red">Productos</span> Destacados
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experimente la mejor calidad con nuestra codiciada colección</p>
      </div>

      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product) => (
          <PopularProductCard key={product.name} price={product.price} imgUrl={product.imgURL} name={product.name}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
