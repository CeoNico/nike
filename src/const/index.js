import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../../public/assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../public/assets/images";

export const navLinks = [
    { href: "#home", label: "Principio" },
    { href: "#about-us", label: "Sobre Nosotros" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contacto" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marcas' },
    { value: '500+', label: 'Tiendas' },
    { value: '250k+', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Flexers 2",
        price: "$200.000",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Runners",
        price: "$150.000",
    },
    {
        imgURL: shoe6,
        name: "Nike Waffles SB",
        price: "$175.000",
    },
    {
        imgURL: shoe7,
        name: "Nike Rochis",
        price: "$200.000",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Envio Gratis",
        subtext: "Disfrute de compras sin problemas con nuestro servicio de envío de cortesía."
    },
    {
        imgURL: shieldTick,
        label: "Pagos Seguros",
        subtext: "Experimente transacciones sin preocupaciones con nuestras opciones de pago seguras."
    },
    {
        imgURL: support,
        label: "Nos Encanta Ayudarte",
        subtext: "Nuestro equipo dedicado está aquí para ayudarlo en cada paso del camino."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'John Doe',
        rating: 4.5,
        feedback: "La atención al detalle y la calidad del producto superaron mis expectativas. ¡Muy recomendable!"
    },
    {
        imgURL: customer2,
        customerName: 'Mary Jane',
        rating: 4.0,
        feedback: "El producto no solo cumplió sino que superó mis expectativas. ¡Definitivamente seré un cliente recurrente!"
    },
    {
        imgURL: customer1,
        customerName: 'John Doe',
        rating: 4.0,
        feedback: "El producto no solo cumplió sino que superó mis expectativas. ¡Definitivamente seré un cliente recurrente!"
    }
];


export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Sobre Nosotros", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Como Trabajamos", link: "/" },
            { name: "Política de privacidad", link: "/" },
            { name: "Política de pagos", link: "/" },
        ],
    },
    {
        title: "Póngase en contacto con nosotros",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];