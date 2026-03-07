"use client"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const Topbar = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const items = [
        { label: '[ /home ]', href: '/' },
        { label: '[ /projects ]', href: '/projects' },
        { label: '[ /contact ]', href: '/contact' }
    ]

    return (
        <div className="py-5">
            <div className="flex justify-between items-center px-2 md:px-4">
                <div className="font-semibold text-sm md:text-base">~/sachin.uke</div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex text-sm items-center">
                    {
                        items.map((item) => (
                            <a key={item.href} href={item.href} className='mr-10 text-[#888] hover:text-white'>
                                <div>
                                    {pathname === item.href ? (
                                        <div className="px-2 py-1 rounded-sm bg-gray-900">
                                            {item.label}
                                        </div>
                                    ) : item.label}
                                </div>
                            </a>
                        ))
                    }
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-400 hover:text-white text-2xl p-2"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 px-2 pb-4 border-t border-gray-700 pt-4">
                    <div className="flex flex-col space-y-3">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className='text-sm text-[#888] hover:text-white'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div>
                                    {pathname === item.href ? (
                                        <div className="px-2 py-2 rounded-sm bg-gray-900">
                                            {item.label}
                                        </div>
                                    ) : (
                                        <div className="px-2 py-2">
                                            {item.label}
                                        </div>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <hr className="border-gray-700 mt-3" />
        </div>
    )
}

export default Topbar
