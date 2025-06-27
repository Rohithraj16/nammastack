"use client";
import { useState, useEffect } from "react";

const Scroll = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const section = document.getElementById("services-section");
		if (section) {
			observer.observe(section);
		}

		return () => {
			if (section) {
				observer.unobserve(section);
			}
		};
	}, []);

	const technologies = {
		web: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		mobile: ["React Native", "Flutter", "Firebase", "Redux", "GraphQL"],
		ai: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI"],
		custom: ["Node.js", "Django", "PostgreSQL", "AWS", "Docker"],
	};

	return (
		<section
			id="services-section"
			className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 overflow-hidden relative"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
					<h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Our Services
					</h2>
					<p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						Comprehensive Digital Solutions
					</p>
					<div className="mt-8">
						<p className="text-gray-400 max-w-5xl mx-auto text-lg leading-relaxed">
							Elevating businesses through innovative technology and exceptional
							craftsmanship, we deliver solutions that transform ideas into
							extraordinary digital experiences
						</p>
					</div>
				</div>

				{/* Services Grid */}
				<div className="grid lg:grid-cols-2 gap-8">
					{/* Web Development Card */}
					<div
						className={`group transition-all duration-1000 delay-300 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-20"
						}`}
					>
						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]">
							{/* Icon */}
							<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									/>
								</svg>
							</div>

							<h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
								Web Development
							</h3>

							<p className="text-gray-400 mb-8 leading-relaxed">
								Crafting high-performance, scalable websites that captivate
								audiences and drive engagement. Our approach combines
								cutting-edge technology with intuitive design.
							</p>

							{/* Success Story */}
							<div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
								<div className="flex items-center mb-3">
									<div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
									<h4 className="text-purple-300 font-semibold">
										Success Story: E-commerce Platform Overhaul
									</h4>
								</div>
								<p className="text-gray-300 text-sm mb-3">
									Rebuilt legacy platform with modern stack, improving load
									times by 70%.
								</p>
								<div className="text-purple-400 font-bold text-lg">
									350% increase in conversion rate
								</div>
							</div>

							{/* Technologies */}
							<div>
								<h4 className="text-gray-300 font-semibold mb-4">
									TECHNOLOGIES
								</h4>
								<div className="flex flex-wrap gap-2">
									{technologies.web.map((tech, index) => (
										<span
											key={tech}
											className={`px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm hover:bg-purple-600/30transition-colors duration-300 cursor-default transform hover:scale-105 transition-transform`}
											style={{
												animationDelay: `${index * 100}ms`,
											}}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Mobile Applications Card */}
					<div
						className={`group transition-all duration-1000 delay-500 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-20"
						}`}
					>
						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] relative overflow-hidden">
							{/* Premium Badge */}
							<div className="absolute top-6 right-6">
								<span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xs font-semibold border border-purple-400/50">
									Premium Service
								</span>
							</div>

							{/* Icon */}
							<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
							</div>

							<h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
								Mobile Applications
							</h3>

							<p className="text-gray-400 mb-8 leading-relaxed">
								Building sleek, intuitive mobile apps that offer seamless user
								experiences on iOS & Android. From concept to launch to support,
								we deliver polished native-like experiences.
							</p>

							{/* Success Story */}
							<div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
								<div className="flex items-center mb-3">
									<div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
									<h4 className="text-purple-300 font-semibold">
										Success Story: Health & Fitness App
									</h4>
								</div>
								<p className="text-gray-300 text-sm mb-3">
									Created intuitive UI with seamless offline functionality and
									personalization.
								</p>
								<div className="text-purple-400 font-bold text-lg">
									1M+ downloads in first quarter
								</div>
							</div>

							{/* Technologies */}
							<div>
								<h4 className="text-gray-300 font-semibold mb-4">
									TECHNOLOGIES
								</h4>
								<div className="flex flex-wrap gap-2">
									{technologies.mobile.map((tech, index) => (
										<span
											key={tech}
											className={`px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm hover:bg-purple-600/30transition-colors duration-300 cursor-default transform hover:scale-105 transition-transform`}
											style={{
												animationDelay: `${index * 100}ms`,
											}}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* AI/ML Solutions Card */}
					<div
						className={`group transition-all duration-1000 delay-700 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-20"
						}`}
					>
						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]">
							{/* Icon */}
							<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
								AI/ML Solutions
							</h3>
							<p className="text-gray-400 mb-8 leading-relaxed">
								Leverage artificial intelligence and machine learning to
								automate, predict, and optimize business processes. We build
								intelligent systems tailored to your needs.
							</p>
							{/* Success Story */}
							<div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
								<div className="flex items-center mb-3">
									<div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
									<h4 className="text-purple-300 font-semibold">
										Success Story: Predictive Analytics Engine
									</h4>
								</div>
								<p className="text-gray-300 text-sm mb-3">
									Implemented ML models that reduced churn by 40% for a SaaS
									client.
								</p>
								<div className="text-purple-400 font-bold text-lg">
									$1M+ annual savings
								</div>
							</div>
							{/* Technologies */}
							<div>
								<h4 className="text-gray-300 font-semibold mb-4">
									TECHNOLOGIES
								</h4>
								<div className="flex flex-wrap gap-2">
									{technologies.ai.map((tech, index) => (
										<span
											key={tech}
											className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm hover:bg-purple-600/30transition-colors duration-300 cursor-default transform hover:scale-105 transition-transform"
											style={{ animationDelay: `${index * 100}ms` }}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Custom Software Card */}
					<div
						className={`group transition-all duration-1000 delay-900 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-20"
						}`}
					>
						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]">
							{/* Icon */}
							<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
									/>
								</svg>
							</div>
							<h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
								Custom Software
							</h3>
							<p className="text-gray-400 mb-8 leading-relaxed">
								We design and develop bespoke software solutions that solve
								unique business challenges, ensuring scalability, security, and
								seamless integration.
							</p>
							{/* Success Story */}
							<div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
								<div className="flex items-center mb-3">
									<div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
									<h4 className="text-purple-300 font-semibold">
										Success Story: ERP System Modernization
									</h4>
								</div>
								<p className="text-gray-300 text-sm mb-3">
									Delivered a custom ERP, streamlining operations and reducing
									manual work by 60%.
								</p>
								<div className="text-purple-400 font-bold text-lg">
									5x faster workflows
								</div>
							</div>
							{/* Technologies */}
							<div>
								<h4 className="text-gray-300 font-semibold mb-4">
									TECHNOLOGIES
								</h4>
								<div className="flex flex-wrap gap-2">
									{technologies.custom.map((tech, index) => (
										<span
											key={tech}
											className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm hover:bg-purple-600/30transition-colors duration-300 cursor-default transform hover:scale-105 transition-transform"
											style={{ animationDelay: `${index * 100}ms` }}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>
		</section>
	);
};

export default Scroll;
