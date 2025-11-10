import classNames from "classnames";
import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";


const Header = () => {
    const location = useLocation();
    const mobileMenu = useRef<HTMLDivElement>(null);

    const toggle = () => {
        mobileMenu.current?.classList.toggle("hidden");
    }

    useEffect(() => {
        mobileMenu.current?.classList.add("hidden");
        mobileMenu.current?.classList.remove("block");
    }, [location.pathname])

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4"> {/* 1280px container */}
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* <!-- Website Logo --> */}
                            <Link to="/" className="flex items-center py-4 px-2">
                                <span className="px-2 py-1 font-semibold text-gray-500 border-1 rounded-xl border-black md:border-0 text-2xl">Petek Triko</span>
                            </Link>
                        </div>
                        {/* <!-- Primary Nav --> */}
                        <div className="hidden md:flex items-center space-x-1">

                            <NavLink to="/" className={({ isActive }) => {
                                return classNames("py-2 px-2 font-semibold transition duration-300 rounded-xl", {
                                    "border-b-3 border-[#118a7e] text-[#118a7e]": isActive,
                                    "text-black border-0 hover:bg-[#118a7e] hover:text-white": !isActive
                                })
                            }}>Ana Sayfa</NavLink>

                            <NavLink to="/about" className={({ isActive }) => {
                                return classNames("py-2 px-2 font-semibold transition duration-300 rounded-xl", {
                                    "border-b-3 border-[#118a7e] text-[#118a7e]": isActive,
                                    "text-black border-0 hover:bg-[#118a7e] hover:text-white": !isActive
                                })
                            }}>Hakkımızda</NavLink>

                            <NavLink to="/contact" className={({ isActive }) => {
                                return classNames("py-2 px-2 font-semibold transition duration-300 rounded-xl", {
                                    "border-b-3 border-[#118a7e] text-[#118a7e]": isActive,
                                    "text-black border-0 hover:bg-[#118a7e] hover:text-white": !isActive
                                })
                            }}>İletişim</NavLink>

                        </div>
                    </div>
                    {/* <!-- Secondary Nav --> */}
                    <div className="hidden md:flex items-center space-x-3">
                        <NavLink to="#" className="py-2 px-2 text-gray-500 hover:bg-gray-600 hover:text-white transition duration-300">
                            <i className="fas fa-search"></i>
                        </NavLink>
                        <NavLink to="#" className="py-2 px-2 text-gray-500 hover:bg-gray-600 hover:text-white transition duration-300">
                            <i className="fas fa-user"></i>
                        </NavLink>
                        <NavLink to="#" className="py-2 px-2 text-gray-500 hover:bg-gray-600 hover:text-white transition duration-300 relative">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="absolute -top-1 -right-1 bg-[#118a7e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
                        </NavLink>

                        <NavLink to="/login" className={({ isActive }) => {
                            return classNames("!border-1 outline-0 rounded-full duration-200 cursor-pointer",
                                {
                                    "bg-gray-500 text-white border-white hover:bg-white hover:text-gray-500": isActive,
                                    "bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white": !isActive
                                }
                            )
                        }}>
                            <button>
                                <div className="px-4 py-2">
                                    <span className="text-xs">Giriş Yap</span>
                                </div>
                            </button>
                        </NavLink>

                        <NavLink to="/register" className={({ isActive }) => {
                            return classNames("!border-1 outline-0 rounded-full duration-200 cursor-pointer",
                                {
                                    "bg-gray-500 text-white border-white hover:bg-white hover:text-gray-500": isActive,
                                    "bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white": !isActive
                                }
                            )
                        }}>
                            <button>
                                <div className="px-4 py-2">
                                    <span className="text-xs">Kayıt Ol</span>
                                </div>
                            </button>
                        </NavLink>

                    </div>
                    {/* <!-- Mobile menu button --> */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggle} className="outline-none mobile-menu-button">
                            <i className="fas fa-bars text-gray-500 text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile menu --> */}
            <div className="block md:hidden mobile-menu" ref={mobileMenu}>
                <ul>

                    <li><NavLink to="/" className={({ isActive }) => {
                        return classNames("block text-sm px-2 py-4 transition duration-300",
                            {
                                "text-white bg-[#118a7e]": isActive,
                                "text-black bg-white hover:bg-[#118a7e] hover:text-white": !isActive
                            }
                        )
                    }} > Ana Sayfa</NavLink>
                    </li>

                    <li><NavLink to="/about" className={({ isActive }) => {
                        return classNames("block text-sm px-2 py-4 transition duration-300",
                            {
                                "text-white bg-[#118a7e]": isActive,
                                "text-black bg-white hover:bg-[#118a7e] hover:text-white": !isActive
                            }
                        )
                    }} > Hakkımızda</NavLink>
                    </li>

                    <li><NavLink to="/contact" className={({ isActive }) => {
                        return classNames("block text-sm px-2 py-4 transition duration-300",
                            {
                                "text-white bg-[#118a7e]": isActive,
                                "text-black bg-white hover:bg-[#118a7e] hover:text-white": !isActive
                            }
                        )
                    }} > İletişim</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" className={({ isActive }) => {
                            return classNames("!border-1 my-2 outline-0 rounded-full duration-200 cursor-pointer flex justify-center",
                                {
                                    "bg-gray-500 text-white border-white hover:bg-white hover:text-gray-500": isActive,
                                    "bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white": !isActive
                                }
                            )
                        }}>
                            <button>
                                <div className="px-4 py-2">
                                    <span className="text-xs">Giriş Yap</span>
                                </div>
                            </button>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/register" className={({ isActive }) => {
                            return classNames("!border-1 my-2 outline-0 rounded-full duration-200 cursor-pointer flex justify-center",
                                {
                                    "bg-gray-500 text-white border-white hover:bg-white hover:text-gray-500": isActive,
                                    "bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white": !isActive
                                }
                            )
                        }}>
                            <button>
                                <div className="px-4 py-2">
                                    <span className="text-xs">Kayıt Ol</span>
                                </div>
                            </button>
                        </NavLink>
                    </li>

                </ul>
            </div>

        </nav>

    )
}

export default Header;