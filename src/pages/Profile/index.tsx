import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Profile() {

    const userSession = useSelector((state: RootState) => state.user.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!userSession?.IsLogin){
            navigate("/");
        }
    })

    return (
        <div>
            {
                userSession != undefined && (
                    <div className="max-w-7xl mx-auto py-10">
                        <div className="flex items-center justify-center flex-wrap gap-x-5">
                            <div className="text-center">
                                <img className="w-40" src={userSession.profileImg} alt="userImg" />
                                <div className="font-bold text-2xl">{userSession.userName}</div>
                            </div>
                            <div>
                                <div><span className="font-bold">Email:</span> {userSession.email}</div>
                                <div><span className="font-bold">Phone:</span> {userSession.phone}</div>
                                <div><span className="font-bold">Address:</span> {userSession.Address}</div>
                                <div><span className="font-bold">Gender:</span> {userSession.gender}</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="button" className="bg-red-700 text-white px-3 py-2 rounded-2xl duration-150 hover:bg-red-900 cursor-pointer">
                                Çıkış Yap
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Profile;