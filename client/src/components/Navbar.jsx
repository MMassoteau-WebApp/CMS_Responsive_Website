import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

import logo from "../image/logo.png";

// const NavBarItem = ({ title, classprops }) => (
// 	<li
// 		className={`mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl hover:shadow-white ${classprops}`}
// 	>
// 		{title}
// 	</li>
// );

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = React.useState(false);

	return (
		<nav className="w-full flex md:justify-center justify-between items-center p-4 bg-zinc-800">
			<div className="md:flex-[0.87] flex-initial justify-center items-center">
				<Link to="/">
					<img src={logo} alt="logo" className="w-32 sm:ml-10 cursor-pointer" />
				</Link>
			</div>
			<ul className="text-white md:flex hidden list-none flex-row">
				<Link to="/">
					<li className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Home
					</li>
				</Link>
				<Link to="/kitties">
					<li className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Kitties
					</li>
				</Link>
				<Link to="/events">
					<li className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Events
					</li>
				</Link>
				<Link to="/about">
					<li className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						About
					</li>
				</Link>
			</ul>

			
			<div className="flex relative">
				{!toggleMenu && (
					<HiMenuAlt4
						fontSize={28}
						className="text-white md:hidden mr-10 cursor-pointer"
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<AiOutlineClose
						fontSize={28}
						className="text-white md:hidden cursor-pointer"
						onClick={() => setToggleMenu(false)}
					/>
				)}
				{toggleMenu && (
					<ul className="z-10 cursor-pointer fixed -top-0 -right-2 p-3 w-[45vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white duration-300">
						<li className="text-xl w-full my-2">
							<AiOutlineClose onClick={() => setToggleMenu(false)} />
						</li>
						<Link to="/">
							<li
								onClick={() => setToggleMenu(false)}
								className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-2 text-lg"
							>
								Home
							</li>
						</Link>
						<Link to="/kitties">
							<li
								onClick={() => setToggleMenu(false)}
								className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-2 text-lg"
							>
								Kitties
							</li>
						</Link>
						<Link to="/Events">
							<li
								onClick={() => setToggleMenu(false)}
								className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-2 text-lg"
							>
								Events
							</li>
						</Link>
						<Link to="/About">
							<li
								onClick={() => setToggleMenu(false)}
								className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-2 text-lg"
							>
								About
							</li>
						</Link>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
