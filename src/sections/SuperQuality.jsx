import Button from "@/components/Button";
import { shoe8 } from "../../public/assets/images";
import Image from "next/image";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Te proporcionamos <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Zapatos</span> de Calidad
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Garantizando la máxima comodidad y estilo, nuestro calzado
          meticulosamente elaborado es diseñador para elevar su experiencia y
          brindarle una experiencia inigualable Qulaity
        </p>
        <p className="info-text mt-6 lg:max-w-lg ">
        Nuestra dedicación a la creación asegura su satisfacción
        </p>
        <div className="mt-11">
          <Button label="Ver Detalles" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          className="object-contain"
          src={shoe8}
          alt="Shoe"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
