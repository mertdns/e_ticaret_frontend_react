import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import type { BasketProductType, ProductType } from "../../types/product";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { addBasketProduct, getProductById } from "../../store/productSlice";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";

function ProductDetail() {
    // 1. ✅ Redux state'ini bileşenin en üst seviyesinde çekin
    const activeProduct: ProductType | null = useSelector((state: RootState) => state.product.activeProduct);
    const IsLoadProducts = useSelector((state: RootState) => state.product.IsLoad);
    const productFound = activeProduct !== null; // productFound state'i artık useSelector'dan türetilebilir.

    const [productCount, setProductCount] = useState<number>(1); // Sepet sayacını genellikle 1'den başlatmak daha mantıklıdır.
    const [open, setOpen] = useState<boolean>(false);

    const ImagesDiv = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const { id } = useParams();

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                Tamam
            </Button>
        </Fragment>
    );

    const addProductToBasket = () => {
        console.log(activeProduct);
        const obj: BasketProductType = {
            id: Number(activeProduct?.id),
            count: productCount
        }

        dispatch(addBasketProduct(obj));
        setOpen(true);
    }

    useEffect(() => {
        // ID değiştiğinde ürünü Redux store'a yükle.
        // Redux, activeProduct güncellendiğinde bu bileşenin otomatik olarak tekrar render edilmesini sağlayacaktır.
        if (id) {
            // Redux Thunk kullanıldığı varsayılarak
            IsLoadProducts && dispatch(getProductById(Number(id)));
        }
    }, [id, dispatch, IsLoadProducts]) // dispatch, useEffect bağımlılığı olarak eklenmelidir.

    // 3. ✅ activeProduct değiştiğinde resim opacity ayarını yapın.
    useEffect(() => {
        if (!ImagesDiv.current || !activeProduct) return;

        // activeProduct yüklenmişse (ki bu bir render sonrası olur) alt resimlerin opacity'sini ayarla.
        const images = ImagesDiv.current.getElementsByTagName("img");

        // İlk img ana resim, alt resimler 1. indeksten başlar.
        if (images.length > 1) {
            images[1].classList.add("opacity-100");
            images[1].classList.remove("opacity-60"); // Yeni eklenen: İlk alt resmin opacity-60'ı varsa kaldırılmalı.
        }

    }, [activeProduct]);


    /* Aktif resmi seç */
    const selectImg = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const images: HTMLCollectionOf<HTMLImageElement> | undefined = ImagesDiv.current?.getElementsByTagName("img");

        if (!images) return;

        for (let i = 1; i < images?.length!; i++) { // 0. indeksi (mainImage) atla
            images[i].classList.add("opacity-60");
            images[i].classList.remove("opacity-100");
        }

        e.currentTarget.classList.add("opacity-100");
        e.currentTarget.classList.remove("opacity-60");

        // Ana resmi (images[0]) seçilen resim ile güncelle
        images[0].src = e.currentTarget.src;
    }

    // ... (Diğer fonksiyonlar ve return bloğu aynı kalır)

    const getStars = () => {
        return activeProduct && Array.from({ length: activeProduct.starCount || 0 }, (_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="size-6 text-yellow-500">
                <path fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd" />
            </svg>
        ))
    };

    if (!productFound) {
        // Ürün yüklenirken (veya bulunamazsa) bir yükleme ekranı/mesajı gösterin.
        // Bu, activeProduct null iken JSX'in çalışmasını engeller.
        return (
            <div className="text-center py-20 text-xl font-semibold">
                {activeProduct === undefined ? "Ürün Yükleniyor..." : "Ürün Bulunamadı."}
            </div>
        );
    }

    // activeProduct'ın null olmadığı garanti edildiği için aşağıdaki kodlar daha temiz yazılabilir.
    const product = activeProduct as ProductType; // Type güvenliği için cast edilebilir

    return (

        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    {/* */}
                    <div className="w-full md:w-1/2 px-4 mb-8" ref={ImagesDiv}>
                        {/* activeProduct'ın varlığı artık if (!productFound) kontrolü ile garanti edildi. */}
                        <img alt="Product" src={product.productImageUrl}
                            className="w-full h-70 sm:h-80 md:h-100 lg:h-130 rounded-lg shadow-md mb-4" id="mainImage" />
                        <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                            {
                                product.bottomImagesUrl.map((image: string, index: number) => (
                                    <img key={index} src={image} alt={`Thumbnail ${index + 1}`}
                                        className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                        onClick={(e) => selectImg(e)} />
                                ))
                            }
                        </div>
                    </div>

                    {/* */}
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-4">{product.category}</p>
                        <div className="mb-4">
                            <span className="text-2xl font-bold mr-2">{product.discountPrice}</span>
                            <span className="text-gray-500 line-through">{product.price}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            {getStars()}
                            <span className="ml-2 text-gray-600">{product.starCount} Puan</span>
                        </div>
                        <p className="text-gray-700 mb-6">{product.description}</p>

                        <div className="mb-6">
                            {/* ... (Renkler kısmı aynı kalır) */}
                        </div>

                        <div className="mb-6 flex items-center gap-x-4">
                            <button onClick={() => setProductCount(productCount > 1 ? productCount - 1 : 1)} className="bg-red-500 text-white px-3 py-2 cursor-pointer">{<FiMinus />}</button>
                            <div className="font-bold text-2xl">{productCount}</div>
                            <button onClick={() => setProductCount(productCount + 1)} className="bg-red-500 text-white px-3 py-2 cursor-pointer">{<FaPlus />}</button>
                        </div>

                        <div className="flex space-x-4 mb-6">
                            <button
                                onClick={addProductToBasket}
                                className="bg-green-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                {/* ... (Sepete Ekle Butonu) */}
                                Sepete Ekle
                            </button>
                            {/* ... (Favorilere Ekle Butonu) */}
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Ürün sepete eklendi."
                action={action}
                anchorOrigin={{ vertical: 'top', horizontal : "center" }}
            />
        </div>
    )
}

export default ProductDetail;