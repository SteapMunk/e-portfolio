import Link from 'next/link'


export default function NavBar() {
    return (
        <div>
            <nav className='h-[56px] flex justify-center items-center bg-indigo-700 drop-shadow-lg'>
                <Link href="../">Home</Link>
                <Link href="../about/">About</Link>
            </nav>
        </div>
    )
}