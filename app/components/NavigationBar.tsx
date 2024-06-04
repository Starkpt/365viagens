// REACT
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";

import LogoHorizontal from "@/public/assets/logo-horizontal.png";

function NavigationBar() {
  return (
    <Navbar className="bg-white drop-shadow-md font-black" shouldHideOnScroll>
      <NavbarBrand>
        <Image src={LogoHorizontal} alt="365Viagens" />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="primary" href="#">
            FLIGHTS
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link color="primary" href="#" aria-current="page">
            ABOUT
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}

export default NavigationBar;
