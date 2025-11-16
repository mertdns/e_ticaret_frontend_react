import { Link } from "react-router";
import productsData from "../../data/productData.json";
import type { ProductType } from "../../types/product";

export default function Products() {

    const data: Array<ProductType> = productsData;

    console.log(data);

    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-24">Ürünler</h1>
            <div className="flex items-center gap-5 justify-center max-w-7xl mx-auto flex-wrap mb-24">
                {
                    data && data.map((data: ProductType) => (
                        <div key={data.id} className="w-full mx-5 md:mx-0 md:max-w-80 border border-green-400 rounded-lg shadow-md">
                            {/* <!-- Discount Badge --> */}
                            <div className="relative">
                                <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    -{data.discountRate}%
                                </span>
                                {/* <!-- Wishlist Icon --> */}
                                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>
                                {/* <!-- Product Image --> */}
                                <div>
                                    <img src={data.productImageUrl}
                                        className="object-cover w-full h-[270px]" />
                                </div>
                            </div>

                            {/* <!-- Product Details --> */}
                            <div className="mt-4 p-4">
                                <h3 className="text-gray-800 font-medium text-base">
                                    {data.title}
                                </h3>
                                <p className="uppercase text-green-600 text-xs font-medium">
                                    {data.category}
                                </p>
                                {/* <!-- Ratings --> */}
                                <div className="flex space-x-1 text-orange-500 text-sm mt-1">
                                    {
                                        Array.from({ length: data.starCount} ).map(() => (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                                            </svg>
                                        ))
                                    }

                                </div>
                                {/* <!-- Pricing --> */}
                                <div className="flex items-end justify-between">
                                    <div className="flex items-baseline space-x-2 mt-2">
                                        <span className="text-blue-600 text-xl font-semibold">{data.discountPrice}</span>
                                        <span className="text-gray-400 text-sm line-through">{data.price}</span>
                                    </div>
                                    <Link to={`/product/${data.id}`}>
                                        <button
                                            className="rounded-full bg-green-600 px-3 py-1 flex cursor-pointer items-center justify-center shadow text-white">
                                            Görüntüle
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}