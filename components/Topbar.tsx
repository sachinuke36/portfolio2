"use client"
import { usePathname } from "next/navigation"
const Topbar = () => {
    const pathname = usePathname()
    console.log(pathname)

    const items = [{ label: '[ /home ]', href: '/' }, { label: '[ /projects ]', href: '/projects' },
    { label: '[ /contact ]', href: '/contact' }
    ]
    return (
        <div className="py-5">
            <div className="flex justify-between px-2">
                <div className="font-semibold">~/sachin.uke</div>
                <div className="text-sm flex items-center">
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
            </div>
            <hr className="border-gray-700 mt-3" />
        </div>
    )
}

export default Topbar
