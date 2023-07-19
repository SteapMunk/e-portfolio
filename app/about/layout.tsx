import { Metadata } from 'next'
import About from "@/app/about/page";

export const metadata: Metadata = {
    title: 'About',
    description: 'About Sam Addison'
}

export default function AboutLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (

    <div>
        {children}
    </div>
    )
}