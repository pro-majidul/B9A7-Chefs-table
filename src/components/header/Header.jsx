
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 py-3">
                <div className="navbar-start">
                    <a className=" md:text-3xl text-lg font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3">
                        <li className="ml-3 font-medium text-gray-500"><a>Home </a></li>
                        <li className="ml-3 font-medium text-gray-500"><a>Recipes</a></li>
                        <li className="ml-3 font-medium text-gray-500"><a>About</a></li>
                        <li className="ml-3 font-medium text-gray-500"><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>

                        <div className="dropdown dropdown-end">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full p-2 bg-[#0BE58A]">
                                   <img src="https://img.icons8.com/?size=80&id=ckaioC1qqwCu&format=png" alt="" />
                                </div>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between ml-3 font-bold text-gray-500">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li className="ml-3 font-bold text-gray-500"><a>Home </a></li>
                                <li className="ml-3 font-bold text-gray-500"><a>Recipes</a></li>
                                <li className="ml-3 font-bold text-gray-500"><a>About</a></li>
                                <li className="ml-3 font-bold text-gray-500"><a>Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;