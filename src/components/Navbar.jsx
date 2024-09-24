import { useState, useRef } from "react";
import logo from "../assets/logoRestaurant.png";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef(null);

	const toggleMenu = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<nav className="flex justify-between items-center py-4 text-xl text-white z-10">
			<div className="flex items-center gap-x-4 text-3xl">
				<img src={logo} alt="Logo" className="w-16 rounded-lg" />
				<h1>Grill & Go</h1>
			</div>
			<ul
				ref={navRef}
				className={`flex justify-between items-center gap-x-4 max-[1039px]:absolute max-[1039px]:flex-col max-[1039px]:w-screen max-[1039px]:top-24 max-[1039px]:bg-slate-950 max-[1039px]:gap-y-10 transition-all duration-300 ${
					isNavOpen ? "max-[1039px]:right-0" : "max-[1039px]:right-full"}`}
				id="nav"
			>
				<li className="hover:bg-slate-800 p-2 rounded-xl">
					<a href="#Home">Home</a>
				</li>
				<li className="hover:bg-slate-800 p-2 rounded-xl">
					<a href="#About">About</a>
				</li>
				<li className="hover:bg-slate-800 p-2 rounded-xl">
					<a href="#Menu">Menu</a>
				</li>
				<li className="hover:bg-slate-800 p-2 rounded-xl">
					<a href="#Contact">Contact</a>
				</li>
			</ul>
			<div className="max-[1039px]:hidden">
				<span>
					<a className="hover:border-b-2" href="#">Log In </a> /
					<a className="hover:border-b-2" href="#"> Registration </a>
				</span>
				|
				<span>
					<a className="hover:border-b-2" href="#"> Order Now</a>
				</span>
			</div>
			<div className="hidden max-[1039px]:block">
				<button
					className="flex flex-col gap-y-2"
					id="burgerMenu"
					onClick={toggleMenu}
				>
					<div className="w-10 h-1 bg-white"></div>
					<div className="w-10 h-1 bg-white"></div>
					<div className="w-10 h-1 bg-white"></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
