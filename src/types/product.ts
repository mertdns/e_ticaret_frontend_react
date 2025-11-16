export interface ProductType{
    id: number,
    title : string,
    category : string,
    price : string,
    discountPrice : string,
    starCount : number,
    discountRate : number,
    isFav : boolean,
    productImageUrl:string,
    bottomImagesUrl: Array<string>
}