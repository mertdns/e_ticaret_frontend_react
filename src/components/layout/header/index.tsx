import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { MdDelete } from "react-icons/md";
import Drawer from '@mui/material/Drawer';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { CalculateToTotalPrice, deleteProductInBasket } from "../../../store/productSlice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";



const Header = () => {
    const location = useLocation();
    const mobileMenu = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const [openModal, setOpenModal] = useState<boolean>(false);

    const [drawerPorducts, setDrawerPorducts] = useState<any>([]);

    const products = useSelector((state: RootState) => state.product.Products);
    const basket = useSelector((state: RootState) => state.product.BasketPorducts);
    const totalPrice = useSelector((state: RootState) => state.product.TotalPrice);

    const dispatch = useDispatch();

    const handleClickOpen = (id: number) => {
        setOpenModal(true);
        setSelectedProductId(id);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const toggle = () => {
        mobileMenu.current?.classList.toggle("hidden");
    }

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        mobileMenu.current?.classList.add("hidden");
        mobileMenu.current?.classList.remove("block");
    }, [location.pathname])

    useEffect(() => {
        const tempDrawerPorducts: any = [];
        let obj: any = null;
        basket.length > 0 && basket.map((product) => {
            const IsOnBasketProduct: any = products.find((item) => item.id === product.id);
            if (IsOnBasketProduct) {
                obj = { ...IsOnBasketProduct, count: product.count };
                tempDrawerPorducts.push(obj)
                console.log(tempDrawerPorducts)
            }
        })
        setDrawerPorducts(tempDrawerPorducts);
        dispatch(CalculateToTotalPrice(tempDrawerPorducts));
    }, [products, basket])

    return (
        <div>
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4"> {/* 1280px container */}
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* <!-- Website Logo --> */}
                                <Link to="/" className="flex items-center py-4 px-2">
                                    <span className="px-2 py-1 font-semibold text-gray-500 border-1 rounded-xl border-black md:border-0 text-xs md:text-2xl">Petek Triko</span>
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

                                <NavLink to="/products" className={({ isActive }) => {
                                    return classNames("py-2 px-2 font-semibold transition duration-300 rounded-xl", {
                                        "border-b-3 border-[#118a7e] text-[#118a7e]": isActive,
                                        "text-black border-0 hover:bg-[#118a7e] hover:text-white": !isActive
                                    })
                                }}>Ürünler</NavLink>

                            </div>
                        </div>
                        {/* <!-- Secondary Nav --> */}
                        <div className="flex items-center space-x-3">
                            <NavLink to="/search" className="py-2 px-2 text-gray-500 hover:bg-gray-600 hover:text-white transition duration-300">
                                <i className="fas fa-search"></i>
                            </NavLink>
                            <NavLink to="/profile" className="py-2 px-2 text-gray-500 hover:bg-gray-600 hover:text-white transition duration-300">
                                <i className="fas fa-user"></i>
                            </NavLink>
                            <NavLink onClick={toggleDrawer(true)} to="#" className="py-2 px-2 text-gray-500 hover:bg-gray-600 hover:text-white transition duration-300 relative">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="absolute -top-1 -right-1 bg-[#118a7e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{basket.length}</span>
                            </NavLink>

                            <div className="hidden md:block">
                                <NavLink to="/login" className={({ isActive }) => {
                                    return classNames("!border-1 outline-0 rounded-full duration-200 cursor-pointer px-1 py-2",
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
                                    return classNames("!border-1 outline-0 rounded-full duration-200 cursor-pointer px-1 py-2",
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

                        </div>
                        {/* <!-- Mobile menu button --> */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggle} className="outline-none mobile-menu-button cursor-pointer">
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

                        <li><NavLink to="/products" className={({ isActive }) => {
                            return classNames("block text-sm px-2 py-4 transition duration-300",
                                {
                                    "text-white bg-[#118a7e]": isActive,
                                    "text-black bg-white hover:bg-[#118a7e] hover:text-white": !isActive
                                }
                            )
                        }} > Ürünler</NavLink>
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

            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <div className="px-4 flex flex-col h-full justify-between py-4">
                    <div onClick={() => setOpen(false)} className="ml-auto font-bold text-3xl cursor-pointer">
                        <IoMdClose />
                    </div>
                    <div className="max-h-90/100 w-90/100 md:w-full overflow-y-auto flex-1">
                        {
                            drawerPorducts.length > 0 && drawerPorducts.map((item: any) => (
                                <section className="flex items-center justify-between my-3">
                                    <div className="flex items-center gap-x-4">
                                        <div>
                                            <img className="w-15 h-10 rounded-xl" src={item.productImageUrl} alt="product" />
                                        </div>
                                        <div>
                                            <h1>{item.title}</h1>
                                            <div className="flex gap-x-4 items-center">
                                                <strong>{item.price}</strong>
                                                <span>{item.count} Adet</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-red-700 font-bold text-xl cursor-pointer" onClick={() => handleClickOpen(item.id)}>
                                        <MdDelete />
                                    </div>
                                </section>
                            ))
                        }
                    </div>

                    <div className="flex justify-between items-center gap-x-2   ">
                        <button className="bg-green-700 text-white px-4 py-2 rounded-xl cursor-pointer" type="button">Sepet Onayla</button>
                        <div className="text-xl">Topalm Tutar: <strong>{totalPrice}$</strong></div>
                    </div>
                </div>
            </Drawer>

            {/* Delete Product Modal */}
            <Dialog
                open={openModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="bg-gray-900 text-white">
                    <DialogTitle id="alert-dialog-title">
                        {"Ürünü sepetten silmek istediğinize emin misiniz?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className="!text-red-700" id="alert-dialog-description">
                            Bu işlem geri alınamaz.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>İptal</Button>
                        <Button onClick={() => {
                            handleClose();
                            dispatch(deleteProductInBasket(selectedProductId));
                            setSelectedProductId(null);
                        }} autoFocus>
                            Onayla
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}

export default Header;