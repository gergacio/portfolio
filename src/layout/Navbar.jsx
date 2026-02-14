const navLinks = [
    { href: "♯hero", label: "Hero" },
    { href: "♯about", label: "About" },
    { href: "♯projects", label: "Projects" },
    { href: "♯experience", label: "Experience" },
    { href: "♯testimonials", label: "Testimonials" },
    { href: "♯contact", label: "Contact" },

]

export const Navbar = () => { 
    return (
        <header>
            <nav>
                <a>
                    GG<span>.</span>
                </a>

                <div>
                    <div>
                        {navLinks.map(link => (
                            <a key={link.label} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                </div>
            </nav>
        </header>
    )
}