export interface ProductType{
    id: number,
    title: string,
    category: string,
    description: string,
    price: string,
    discountPrice: string,
    starCount: number,
    discountRate: number,
    isFav: boolean,
    productImageUrl: string,
    bottomImagesUrl: Array<string>
}

export interface BasketProductType{
    id: number,
    count: number
}

export interface ProductSliceType{
    Products: Array<ProductType>,
    BasketPorducts: Array<BasketProductType>,
    activeProduct: ProductType | null,
    IsLoad: boolean,
    TotalPrice: number,
    FilteredProducts:Array<ProductType>
}