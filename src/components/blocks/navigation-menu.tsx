import Image from "next/image";
import Link from "next/link";

const NavgiationMenu = () => {
  return (
    <div className='absolute w-full p-8 items-center text-neutral-100 flex'>
      <div className="flex-1 flex items-center text-3xl">
        <Image
          src="/images/logo.png"
          alt="Navigation Menu Logo"
          className="mx-4 hover:rotate-12 transition-all duration-300 cursor-pointer"
          width={64}
          height={64}
        />
      </div>
      <ul
        className="flex mx-20 tracking-widest space-x-2 lg:space-x-24 md:space-x-12"
        style={{ fontFamily: "AdamBold" }}
      >
        <Link href="/" className="link">
          Accueil
        </Link>
        <Link href="/ateliers" className="link">
          Ateliers
        </Link>
        <Link href="/salles" className="link">
          Salles
        </Link>
        <Link href="/contact" className="link">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default NavgiationMenu;
