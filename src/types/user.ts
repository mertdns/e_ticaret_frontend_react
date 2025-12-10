export interface UserType{
    userId:number,
    userName: string,
    email:string,
    password:string,
    profileImg:string,
    Address:string,
    phone:string,
    gender:string,
    IsLogin: boolean
}

export interface UserSliceType{
    user:UserType | undefined
}