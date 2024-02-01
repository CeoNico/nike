"use client"
import Button from "@/components/Button";
import { arrowRight } from "../../public/assets/icons";
import { shoes, statistics } from "@/const";
import { bigShoe1 } from "../../public/assets/images";
import Image from "next/image";
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Desarollado por BackendExcellence</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] sm:leading-[82px] font-bold lg:py-2">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10  ">El Nuevo Producto</span>
          <br />
          <span className="text-coral-red inline-block mt-3 lg:py-6">Nike</span> Shoes
        </h1>
        <p className=" text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:ma-w-sm">Descubre cómo es tener las mejores zapatillas del planeta con los productos nike</p>
        <Button label="Comprar Ahora" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="text-4xl font-palanquin font-bold">{stat.label}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image src={bigShoeImg} alt="Shoe Collection" width={610} height={500} className="object-contain relative z-10"/>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgUrl={shoe} changeBigShoeImg={(shoe)=> 
              setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
