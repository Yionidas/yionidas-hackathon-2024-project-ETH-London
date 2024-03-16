import Link from "next/link";

function Navbar() {
    const menu = [
        { name: "Home", href: "/", icon: "home.png" },
        { name: "Category", href: "/category", icon: "category.png" },
        { name: "About", href: "/about", icon: "about.png" },
        { name: "Contact", href: "/contact", icon: "contact.png" },
    ]

    return (
        <div>
            <ul className="flex justify-around items-center">
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>
                            <p>{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;