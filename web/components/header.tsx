import Link from "next/link";
import { useState } from "react";
import { User, Home, Search } from "lucide-react";

function Header() {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (item: React.SetStateAction<string>) => setActiveItem(item);

    return (
        <>
            <header className="w-full flex justify-between fixed top-0 py-2 bg-gray-100">
                <div className="flex flex-row space-x-20 items-center px-10">
                    <Link href="/home">
                        <div className="logo" onClick={() => handleItemClick('Home')}>
                            <img src='/icon.svg' className="w-14 cursor-pointer" />
                        </div>
                    </Link>
                    <nav className="flex flex-row space-x-12 items-center text-gray-600">
                        <Link className="flex space-x-2" href="/home">
                            <Home />
                            <span>home</span>
                        </Link>
                        <Link className="flex space-x-2" href="/search">
                            <Search />
                            <span>search</span>
                        </Link>
                        <Link className="flex text-red-400" href="/about">
                            <span>about us</span>
                        </Link>
                    </nav>
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-white bg-orange-600 rounded-full m-4 mr-10">
                    <Link href="/login">
                        <User />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;