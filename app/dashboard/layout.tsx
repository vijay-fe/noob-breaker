"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface Ilink {
    name: string;
    href: string;
}

import clsx from "clsx";

const links = [
    {
        name: 'home',
        href: "/dashboard/home"
    },
    {
        name: 'invoices',
        href: "/dashboard/invoices"
    },
    {
        name: 'customers',
        href: "/dashboard/customers"
    },
]

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <main className="flex min-h-screen items-stretch  justify-between p-6">
            <div className="w-[30%] grow bg-transparent bg-slate-700 bordered p-10">
                {
                    links.map((link: Ilink) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex h-[48px] grow items-center my-2 justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-slate-600 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                    'bg-sky-100 text-blue-600': pathname === link.href
                                })}
                        >
                            {link.name}
                        </Link>
                    ))
                }
            </div>
            <div className="w-[70%] grow border-1">
                {children}
            </div>
        </main>
    );
}