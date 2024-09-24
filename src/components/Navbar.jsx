import logo from "../assets/logoRestaurant.png"

const Navbar = () => {
	return (
		<nav
			className="flex justify-between items-center py-4 text-xl text-white z-10">
			<div className="flex items-center gap-x-4 text-3xl">
				<img
					src={logo}
					alt="Logo"
					className=" w-16 rounded-lg"
				/>
				<h1>Grill & Go</h1>
			</div>
			<ul
				className="flex justify-between items-center gap-x-4">
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
			<div>
				<span>
					<a className="hover:border-b-2" href="#">Log In </a> 
					/
					<a className="hover:border-b-2" href="#"> Registeration </a>
				</span>
				|
				<span>
					<a className="hover:border-b-2" href="#"> Order Now</a>
				</span>
			</div>
		</nav>
	)
}

export default Navbar