"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
const Services = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const stats = [
		{
			number: "10+",
			label: "Projects Delivered",
		},
		{
			number: "100%",
			label: "Client Satisfaction",
		},
		{
			number: "24/7",
			label: "Support Available",
		},
		{
			number: "100%",
			label: "Trusted Solutions",
		},
	];

	return (
		<div className="bg-black min-h-screen flex items-center relative overflow-hidden">
			{/* Subtle purple shadows/gradients */}
			<div className="absolute inset-0">
				{/* Top left subtle glow */}
				<div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
				{/* Bottom right subtle glow */}
				<div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-800/8 rounded-full blur-3xl"></div>
				{/* Center subtle accent */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-900/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						{/* Tags */}
						<div className="flex flex-wrap gap-4">
							<span className="bg-purple-950/30 border border-purple-800/40 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
								✨ Innovate
							</span>
							<span className="bg-purple-950/30 border border-purple-800/40 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
								• Create
							</span>
							<span className="bg-purple-950/30 border border-purple-800/40 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
								• Transform
							</span>
						</div>

						{/* Main Heading */}
						<div className="space-y-4">
							<h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
								<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
									Transform Ideas
								</span>
								<br />
								<span className="text-white">Into Reality</span>
								<div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 shadow-lg shadow-purple-500/30"></div>
							</h1>
						</div>

						{/* Description */}
						<p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
							Pushing the boundaries of digital innovation with cutting-edge
							solutions that captivate users and deliver extraordinary results
							for forward-thinking businesses.
						</p>

						{/* Specialization */}
						<div className="flex flex-wrap items-center gap-2 text-gray-300">
							<span>Specialized in</span>
							<span className="text-purple-400 font-semibold">
								Web Development
							</span>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
								▶ Start Your Journey
							</button>
							<button className="border-2 border-purple-700/60 text-purple-300 hover:bg-purple-900/20 hover:border-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
								View Our Work
							</button>
						</div>
					</div>

					{/* Right Content - 3D Graphic */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative">
							{/* Subtle background glow effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 to-purple-800/10 rounded-full blur-2xl scale-125"></div>

							{/* 3D-like geometric shape */}
							<div className="relative w-80 h-80 lg:w-96 lg:h-96">
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900/80 to-black border border-purple-900/20 shadow-2xl shadow-purple-900/20">
									{/* Inner geometric shapes */}
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
										{/* Central shape cluster */}
										<div className="relative w-48 h-48">
											{/* Shape 1 */}
											<div className="absolute top-0 left-8 w-16 h-24 bg-gradient-to-br from-gray-600 to-gray-800 transform rotate-12 skew-y-12 shadow-lg shadow-purple-900/20"></div>

											{/* Shape 2 */}
											<div className="absolute top-8 right-4 w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 transform -rotate-45 shadow-lg shadow-purple-900/20"></div>

											{/* Shape 3 */}
											<div className="absolute bottom-4 left-4 w-18 h-28 bg-gradient-to-br from-gray-700 to-gray-900 transform rotate-45 skew-x-12 shadow-lg shadow-purple-900/20"></div>

											{/* Shape 4 */}
											<div className="absolute bottom-0 right-8 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 transform -rotate-12 shadow-lg shadow-purple-900/20"></div>

											{/* Center connecting element */}
											<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/40"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
					{/* Background pattern */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_70%)]"></div>
						<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(120,119,198,0.05)_50%,transparent_70%)]"></div>
					</div>

					<div className="relative z-10 container mx-auto px-6 py-20">
						{/* Stats Section */}
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
							{stats.map((stat, index) => (
								<div
									key={index}
									className={`text-center transform transition-all duration-1000 ${
										isVisible
											? "translate-y-0 opacity-100"
											: "translate-y-10 opacity-0"
									}`}
									style={{ transitionDelay: `${index * 200}ms` }}
								>
									<div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
										{stat.number}
									</div>
									<div className="text-gray-300 text-sm lg:text-base font-medium tracking-wide">
										{stat.label}
									</div>
								</div>
							))}
						</div>

						{/* Services Section */}
						<div className="text-center max-w-4xl mx-auto">
							<h2
								className={`text-5xl lg:text-7xl font-bold mb-8 transform transition-all duration-1000 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
								style={{ transitionDelay: "800ms" }}
							>
								<span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
									Our Services
								</span>
							</h2>

							<h3
								className={`text-2xl lg:text-3xl text-gray-300 font-light mb-12 transform transition-all duration-1000 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
								style={{ transitionDelay: "1000ms" }}
							>
								Comprehensive Digital Solutions
							</h3>

							<p
								className={`text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
								style={{ transitionDelay: "1200ms" }}
							>
								Elevating businesses through innovative technology and
								exceptional craftsmanship, we deliver solutions that transform
								ideas into extraordinary digital experiences
							</p>
						</div>

						{/* Scroll indicator */}
						<div
							className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: "1400ms" }}
						>
							<div className="flex flex-col items-center text-gray-400 animate-bounce">
								<span className="text-sm mb-2 tracking-wide">
									Scroll to explore
								</span>
								<ChevronDown className="w-6 h-6" />
							</div>
						</div>
					</div>

					{/* Decorative elements */}
					<div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
					<div
						className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
						style={{ animationDelay: "1s" }}
					></div>
					<div
						className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"
						style={{ animationDelay: "2s" }}
					></div>
					<div
						className="absolute bottom-60 right-10 w-1 h-1 bg-purple-500 rounded-full animate-pulse"
						style={{ animationDelay: "0.5s" }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Services;
