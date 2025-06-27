"use client";
import React, { useState, useEffect } from "react";
import {
	ChevronDown,
	ArrowRight,
	Play,
	Code,
	Smartphone,
	Brain,
	Settings,
} from "lucide-react";

const Services = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const stats = [
		{
			number: "50+",
			label: "Projects Delivered",
		},
		{
			number: "98%",
			label: "Client Satisfaction",
		},
		{
			number: "24/7",
			label: "Support Available",
		},
		{
			number: "5+",
			label: "Years Experience",
		},
	];

	const services = [
		{
			icon: <Code className="w-6 h-6" />,
			title: "Web Development",
			description: "Modern, responsive websites",
		},
		{
			icon: <Smartphone className="w-6 h-6" />,
			title: "Mobile Apps",
			description: "iOS & Android applications",
		},
		{
			icon: <Brain className="w-6 h-6" />,
			title: "AI Solutions",
			description: "Intelligent automation",
		},
		{
			icon: <Settings className="w-6 h-6" />,
			title: "Custom Software",
			description: "Tailored business solutions",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-900/5 rounded-full blur-3xl"></div>
			</div>

			{/* Subtle grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

			<div className="container mx-auto px-6 lg:px-8 relative z-10">
				{/* Hero Section */}
				<div className="min-h-screen flex items-center">
					<div className="grid lg:grid-cols-2 gap-12 items-center w-full">
						{/* Left Content */}
						<div className="space-y-8">
							{/* Professional Tags */}
							<div
								className={`flex flex-wrap gap-3 transition-all duration-1000 ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-10"
								}`}
							>
								<span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
									Enterprise Solutions
								</span>
								<span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
									Innovation Driven
								</span>
							</div>

							{/* Main Heading */}
							<div
								className={`space-y-6 transition-all duration-1000 delay-200 ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-10"
								}`}
							>
								<h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
									<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
										Digital Excellence
									</span>
									<br />
									<span className="text-white">Delivered</span>
								</h1>
								<div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
							</div>

							{/* Description */}
							<p
								className={`text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-10"
								}`}
							>
								Transforming businesses through innovative technology solutions.
								We craft exceptional digital experiences that drive growth and
								deliver measurable results for forward-thinking organizations.
							</p>

							{/* Specialization */}
							<div
								className={`flex flex-wrap items-center gap-2 text-gray-300 transition-all duration-1000 delay-500 ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-10"
								}`}
							>
								<span>Specializing in</span>
								<span className="text-purple-400 font-semibold">
									Full-Stack Development & AI Solutions
								</span>
							</div>

							{/* CTA Buttons */}
							<div
								className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 delay-700 ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-10"
								}`}
							>
								<button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center justify-center gap-2">
									<Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
									Start Your Project
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
								<button className="group border-2 border-purple-500/50 text-purple-300 hover:bg-purple-600/10 hover:border-purple-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
									View Portfolio
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</div>

						{/* Right Content - Enhanced 3D Visual */}
						<div className="flex justify-center lg:justify-end">
							<div
								className={`relative transition-all duration-1000 delay-300 ${
									isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
								}`}
							>
								{/* Enhanced background glow */}
								<div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/15 rounded-full blur-3xl scale-150 animate-pulse"></div>

								{/* Main container */}
								<div className="relative w-80 h-80 lg:w-96 lg:h-96">
									<div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-purple-500/20 shadow-2xl shadow-purple-900/30">
										{/* Floating service icons */}
										<div className="absolute inset-0">
											{services.map((service, index) => (
												<div
													key={index}
													className={`absolute w-16 h-16 bg-gradient-to-br from-purple-600/80 to-purple-800/80 backdrop-blur-sm border border-purple-400/30 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer group`}
													style={{
														top:
															index === 0
																? "20%"
																: index === 1
																? "70%"
																: index === 2
																? "15%"
																: "75%",
														left:
															index === 0
																? "15%"
																: index === 1
																? "20%"
																: index === 2
																? "70%"
																: "75%",
														animationDelay: `${index * 0.5}s`,
													}}
												>
													{service.icon}
													<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-purple-300 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
														{service.title}
													</div>
												</div>
											))}
										</div>

										{/* Center core */}
										<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
											<div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center animate-pulse">
												<div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
													<div className="w-4 h-4 bg-white rounded-full"></div>
												</div>
											</div>
										</div>

										{/* Connecting lines */}
										<svg className="absolute inset-0 w-full h-full">
											{services.map((_, index) => (
												<line
													key={index}
													x1="50%"
													y1="50%"
													x2={
														index === 0
															? "30%"
															: index === 1
															? "35%"
															: index === 2
															? "85%"
															: "90%"
													}
													y2={
														index === 0
															? "35%"
															: index === 1
															? "85%"
															: index === 2
															? "30%"
															: "90%"
													}
													stroke="rgba(147, 51, 234, 0.3)"
													strokeWidth="1"
													className="animate-pulse"
													style={{ animationDelay: `${index * 0.3}s` }}
												/>
											))}
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Stats and Services Preview Section */}
				<div className="py-20">
					{/* Stats Section */}
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{stats.map((stat, index) => (
							<div
								key={index}
								className={`text-center group cursor-pointer transition-all duration-1000 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
								style={{ transitionDelay: `${index * 200 + 1000}ms` }}
							>
								<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group-hover:scale-105">
									<div className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
										{stat.number}
									</div>
									<div className="text-gray-300 text-sm lg:text-base font-medium">
										{stat.label}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Services Preview */}
					<div className="text-center max-w-4xl mx-auto">
						<h2
							className={`text-4xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: "1400ms" }}
						>
							<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								Our Expertise
							</span>
						</h2>

						<p
							className={`text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 transition-all duration-1000 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: "1600ms" }}
						>
							Comprehensive digital solutions powered by cutting-edge technology
							and delivered with exceptional craftsmanship
						</p>

						{/* Services Grid Preview */}
						<div
							className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: "1800ms" }}
						>
							{services.map((service, index) => (
								<div
									key={index}
									className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
								>
									<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white">
										{service.icon}
									</div>
									<h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
										{service.title}
									</h3>
									<p className="text-gray-400 text-sm">{service.description}</p>
								</div>
							))}
						</div>

						{/* CTA */}
						<button
							className={`group bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 mx-auto ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: "2000ms" }}
						>
							Explore All Services
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</button>
					</div>

					{/* Scroll indicator */}
					<div
						className={`flex flex-col items-center text-gray-400 mt-20 transition-all duration-1000 ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-10 opacity-0"
						}`}
						style={{ transitionDelay: "2200ms" }}
					>
						<span className="text-sm mb-2 tracking-wide">
							Scroll to explore more
						</span>
						<ChevronDown className="w-6 h-6 animate-bounce" />
					</div>
				</div>
			</div>

			{/* Decorative floating elements */}
			<div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
			<div
				className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"
				style={{ animationDelay: "1s" }}
			></div>
			<div
				className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-60"
				style={{ animationDelay: "2s" }}
			></div>
			<div
				className="absolute bottom-60 right-10 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-60"
				style={{ animationDelay: "0.5s" }}
			></div>
		</div>
	);
};

export default Services;
