"use client";
import Image from "next/image";
import Link from "next/link";
import {
	Mail,
	Phone,
	Twitter,
	Linkedin,
	Github,
	Instagram,
} from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900/95 backdrop-blur-md border-t border-white/10 mt-auto">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div
								className="w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30"
								style={{ transform: "perspective(100px) rotateY(-15deg)" }}
							>
								<Image
									src="/FLDP.jpg"
									alt="Nammastack Logo"
									fill
									className="object-cover"
								/>
							</div>
							<span className="text-xl font-bold text-white">Nammastack</span>
						</div>
						<p className="text-gray-400 leading-relaxed max-w-sm">
							Crafting exceptional digital experiences that transform businesses
							and delight users.
						</p>

						{/* Social Links */}
						<div className="flex gap-4 pt-2">
							<Link
								href="https://twitter.com"
								className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
								aria-label="Twitter"
							>
								<Twitter size={20} />
							</Link>
							<Link
								href="https://linkedin.com"
								className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
								aria-label="LinkedIn"
							>
								<Linkedin size={20} />
							</Link>
							<Link
								href="https://github.com"
								className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
								aria-label="GitHub"
							>
								<Github size={20} />
							</Link>
							<Link
								href="https://instagram.com"
								className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
								aria-label="Instagram"
							>
								<Instagram size={20} />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/services"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Services</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/services/web-development"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									Web Development
								</Link>
							</li>
							<li>
								<Link
									href="/services/mobile-apps"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									Mobile Applications
								</Link>
							</li>
							<li>
								<Link
									href="/services/ai-ml"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									AI/ML Solutions
								</Link>
							</li>
							<li>
								<Link
									href="/services/custom-software"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									Custom Software
								</Link>
							</li>
							<li>
								<Link
									href="/services/ui-ux"
									className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
								>
									UI/UX Design
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Contact Us</h3>
						<div className="space-y-3">
							<Link
								href="mailto:fourdevs@gmail.com"
								className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
							>
								<Mail
									size={18}
									className="group-hover:scale-110 transition-transform duration-300"
								/>
								<span>thenammastack@gmail.com</span>
							</Link>
							<Link
								href="tel:+918951494769"
								className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
							>
								<Phone
									size={18}
									className="group-hover:scale-110 transition-transform duration-300"
								/>
								<span>+91 8951494769</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10 bg-slate-900/60">
				<div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-500 text-sm">
							© {currentYear} 4D Devs. All rights reserved.
						</p>
						<div className="flex gap-6 text-sm">
							<Link
								href="/privacy-policy"
								className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms-of-service"
								className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
							>
								Terms of Service
							</Link>
							<Link
								href="/cookie-policy"
								className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
