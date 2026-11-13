import { LuBriefcaseBusiness } from "react-icons/lu";

const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-black/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="text-3xl font-bold tracking-tight text-gray-900 flex items-center">
                    <LuBriefcaseBusiness className="text-red-700"/>
                    Naukar<span className="text-red-700">.</span>
                </a>

                {/* Right Side */}
                <div className="flex items-center gap-6">

                    {/* Recruiter */}
                    <button className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition">

                        <span className="font-medium">Recruiter</span>

                    </button>

                    {/* Login */}
                    <button className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition">
                        Login
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
