import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

function Layout() {
    return (
        <div>
            <Header />
            <main className="max-w-7xl mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;