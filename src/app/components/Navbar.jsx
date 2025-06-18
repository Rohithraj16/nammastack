"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={`
        flex justify-between items-center px-4 md:px-8 py-4 
        sticky top-0 z-50 backdrop-blur-md border-b border-white/10
        transition-all duration-300
        ${scrolled ? "bg-slate-900/95" : "bg-slate-900/90"}
      `}
		>
			{/* Logo */}
			<Link
				href="/"
				className="flex items-center gap-2 text-xl font-bold text-white hover:transform hover:-translate-y-0.5 transition-transform duration-300"
			>
				<div
					className="w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform duration-300"
					style={{ transform: "perspective(100px) rotateY(-15deg)" }}
				>
					<Image
						src="/FLDP.jpg"
						alt="Nammastack Logo"
						fill
						className="object-cover"
					/>
				</div>
				<span>Nammastack</span>
			</Link>

			{/* Desktop Navigation */}
			<ul className="hidden md:flex items-center gap-8">
				<li>
					<Link
						href="/services"
						className="text-white/80 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
					>
						<span className="relative z-10">Services</span>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
					</Link>
				</li>
				<li>
					<Link
						href="/projects"
						className="text-white/80 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
					>
						<span className="relative z-10">Projects</span>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="text-white/80 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
					>
						<span className="relative z-10">About Us</span>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className="text-white/80 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
					>
						<span className="relative z-10">Contact</span>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
					</Link>
				</li>
			</ul>

			{/* CTA Button */}
			<Link
				href="/get-started"
				className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
			>
				Get Started
				<span className="group-hover:translate-x-1 transition-transform duration-300">
					→
				</span>
			</Link>

			{/* Mobile Menu Toggle */}
			<button
				className="md:hidden text-white text-2xl p-2 hover:scale-110 transition-transform duration-300"
				onClick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				{isMobileMenuOpen ? "✕" : "☰"}
			</button>

			{/* Mobile Menu */}
			<div
				className={`
        md:hidden fixed left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-white/10 shadow-lg transition-all duration-300
        ${isMobileMenuOpen ? "top-[72px] opacity-100" : "top-full opacity-0"}
      `}
			>
				<ul className="flex flex-col p-6 gap-2">
					<li>
						<Link
							href="/services"
							onClick={closeMobileMenu}
							className="block text-white/80 hover:text-white font-medium px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300 text-center"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							onClick={closeMobileMenu}
							className="block text-white/80 hover:text-white font-medium px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300 text-center"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							onClick={closeMobileMenu}
							className="block text-white/80 hover:text-white font-medium px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300 text-center"
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							onClick={closeMobileMenu}
							className="block text-white/80 hover:text-white font-medium px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300 text-center"
						>
							Contact
						</Link>
					</li>
					<li className="mt-4">
						<Link
							href="/get-started"
							onClick={closeMobileMenu}
							className="block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
						>
							Get Started →
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
