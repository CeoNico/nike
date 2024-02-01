import Image from "next/image";
import Link from "next/link";
import { footerLogo } from "../../public/assets/images";
import { footerLinks, socialMedia } from "@/const";
import { copyrightSign } from "../../public/assets/icons";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image src={footerLogo} width={150} height={46} />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Brindando excelente servicio desde 1950 y ahora
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Image className="te" src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul className="text-white">
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"><Link href={link.link}>{link.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Creado Por BackendExcellence</p>
      </div>
    </footer>
  );
};

export default Footer;
