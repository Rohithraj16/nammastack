"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<nav
			className={`flex justify-between items-center px-4 md:px-8 py-4 sticky top-0 z-50 transition-all duration-300 backdrop-blur border-b border-white/10 ${
				scrolled ? "bg-black/80 shadow-md shadow-white/5" : "bg-black/70"
			}`}
		>
			{/* Logo */}
			<a
				href="/"
				className="flex items-center gap-2 text-xl font-bold text-white hover:transform hover:-translate-y-0.5 transition-transform duration-300 relative z-10"
			>
				<div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg hover:ring-2 hover:ring-white/20 transition-all duration-300">
					<img
						src="/FLDP.jpg"
						alt="Nammastack Logo"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<span>Nammastack</span>
			</a>

			{/* Desktop Navigation with Purple Underline on Hover */}
			<ul className="hidden md:flex items-center gap-8 relative z-10">
				{["services", "projects", "about", "contact"].map((item) => (
					<li key={item}>
						<a
							href={`/${item}`}
							className="group relative text-gray-300 hover:text-white font-medium px-2 py-2 transition-all duration-300"
						>
							<span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
							<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
						</a>
					</li>
				))}
			</ul>

			{/* CTA Button */}
			<a
				href="/get-started"
				className="hidden md:inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group relative z-10"
			>
				Get Started
				<span className="group-hover:translate-x-1 transition-transform duration-300">
					→
				</span>
			</a>

			{/* Mobile Menu Toggle */}
			<button
				className="md:hidden text-white text-2xl p-2 hover:scale-110 transition-transform duration-300 relative z-10"
				onClick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				{isMobileMenuOpen ? "✕" : "☰"}
			</button>

			{/* Mobile Menu */}
			<div
				className={`md:hidden fixed left-0 w-full transition-all duration-300 backdrop-blur-lg border-t border-white/10 shadow-lg ${
					isMobileMenuOpen ? "top-[72px] opacity-100" : "top-full opacity-0"
				} bg-black/90 z-40`}
			>
				<ul className="flex flex-col p-6 gap-2 relative z-10">
					{["services", "projects", "about", "contact"].map((item) => (
						<li key={item}>
							<a
								href={`/${item}`}
								onClick={closeMobileMenu}
								className="block text-gray-300 hover:text-white font-medium px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
							>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</a>
						</li>
					))}
					<a
						href="/get-started"
						className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 shadow hover:shadow-purple-500/40"
					>
						Get Started →
					</a>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
