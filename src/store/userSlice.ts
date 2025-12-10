import { createSlice } from "@reduxjs/toolkit";
import type { UserSliceType } from "../types/user";

const initialState : UserSliceType = {
    user:{
        userId:0,
        userName:"mert",
        email:"mertdanis156@gmail.com",
        password:"1234",
        profileImg:"https://img.freepik.com/premium-vektor/arka-planda-izole-edilmis-erkek-avatar-profil-resmi-erkek-icin-avatar-profil-resmi_1293239-4841.jpg",
        Address:"istanbul/Üsküdar",
        phone:"+90 555 555 55 55",
        gender:"Erkek",
        IsLogin : true
    }
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        LogOut(state : UserSliceType){
            state.user = undefined;
        }
    }
});

export const {  } = userSlice.actions;

export default userSlice.reducer;