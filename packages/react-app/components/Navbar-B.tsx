import Link from "next/link";
import Image from "next/image";

function Navbar() {
    const menu = [
        { name: "Home", href: "/", icon: "/nav/home.png" },
        { name: "Category", href: "/category", icon: "/nav/category.png" },
        { name: "About", href: "/about", icon: "/nav/information-button.png" },
        { name: "Contact", href: "/contact", icon: "/nav/phone.png" },
    ]

    return (
        <div>
            <ul className="flex justify-around items-center">
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>
                            <img src={item.icon} />
                            <p>{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;