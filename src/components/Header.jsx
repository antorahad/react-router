import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
const Header = () => {
    return (
        <div>
            <header className="w-[100%] bg-slate-900 flex items-center justify-between px-[20px] py-[25px]">
                <div className="text-[30px] font-[700] text-slate-300">
                    <Link to='/'>Logo</Link>
                </div>
                <nav className="text-[25px] font-[700] text-slate-300 flex items-center gap-[20px]">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;