import Image from "next/image";
import { offer } from "../../public/assets/images";
import Button from "@/components/Button";
import { arrowRight } from "../../public/assets/icons";

const SpecOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <Image
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Oferta</span> Especial
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embárcate en una juerga de compras con ofertas ilimitadas. De la
          selección premier A un ahorro increíble, ofrecemos un valor
          incomparable que nos distingue
        </p>
        <p className="info-text mt-6 lg:max-w-lg ">
          Navega por los reinos de las posibilidades diseñadas para cumplir con
          tu experiencia única deseos que superan las expectativas más elevadas
          de su viaje Nada menos que bello
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Comprar Ahroa" iconUrl={arrowRight} />
          <Button
            label="Aprende Mas"
            backgroundColor="bg-white"
            textColor="text-black"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecOffer;
