import Link from 'next/link'


export default function NavBar() {
    return (
        <div>
            <nav className='h-[56px] flex justify-center items-center bg-indigo-700 drop-shadow-lg'>
                <div>
                    <Link href="../">Home</Link>
                    <Link href="../about/">About</Link>
                </div>
            </nav>
        </div>
    )
}