import { Link } from "react-router";

function Register() {
    return (
        <div className="p-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm mx-auto my-20 border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-green-500"></div>
                <div className="absolute top-0 left-0 h-full w-1 bg-green-600"></div>
                <div className="absolute top-0 right-0 h-full w-1 bg-green-600"></div>
                <div className="absolute bottom-0 right-0 left-0 h-1.5 w-full bg-green-500"></div>
                <div className="flex flex-col items-center">
                    <img src="https://tailwindflex.com/images/logo.svg" alt="Profile Picture" className="w-14 h-14 rounded-full mt-4" />
                    <h2 className="text-xl font-semibold mt-2">Aramıza Katılın!</h2>
                    <p className="text-gray-500 text-sm">Kayıt Ol</p>
                </div>
                <form className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mt-4">Kullanıcı Adı</label>
                    <input type="email" placeholder="Kullanıcı Adı" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />

                    <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
                    <input type="email" placeholder="Email" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />

                    <label className="block text-sm font-medium text-gray-700 mt-4">Şifre</label>
                    <div className="relative">
                        <input type="password" placeholder="Şifre" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none" />
                        <span className="absolute right-3 top-3 cursor-pointer text-gray-500">👁</span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2 border-gray-300" /> Beni Hatırla
                        </label>
                    </div>
                    <button className="mt-6 w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-2 rounded-md text-center font-semibold cursor-pointer">Giriş Yap</button>
                    <div className="text-center mt-4">Hesabınız Var Mı? <Link className="font-bold text-green-600" to="/login">Giriş Yap</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Register;