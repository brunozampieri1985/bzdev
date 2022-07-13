import useDevice from "@hooks/useDevice"
import NavbarDesktop from "./NavbarDesktop"
import NavbarMobile from "./NavbarMobile"


const Navbar: React.FC = () => {
    const device = useDevice()
    return device > 768 ? <NavbarDesktop /> : <NavbarMobile />
}

export default Navbar