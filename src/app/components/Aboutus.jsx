"use client";
import React, { useState } from "react";

const Aboutus = () => {
	const [activeTestimonial, setActiveTestimonial] = useState(1);

	const testimonials = {
		1: {
			quote: "Their attention to detail transformed our digital presence",
			metric: "Bookings increased by 65%",
			fullReview:
				"Working with 4D Devs transformed our hotel's digital presence. Their attention to detail and understanding of our brand resulted in a website that perfectly captures our essence. Our bookings have increased significantly since launch.",
			name: "Ranganath ",
			title: "CEO, Suraksha enterprises",
			icon: (
				<svg
					className="w-8 h-8 text-gray-300"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fillRule="evenodd"
						d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		2: {
			quote: "Exceptional e-commerce solution that doubled our online sales",
			metric: "Sales increased by 120%",
			fullReview:
				"4D Devs created an amazing e-commerce platform for our retail business. The user experience is seamless, and the backend management system is incredibly intuitive. Our online sales have more than doubled since the launch.",
			name: "Yatheesh B T",
			title: "Founder, Vigneshawara enterprises",
			icon: (
				<svg
					className="w-8 h-8 text-gray-300"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fillRule="evenodd"
						d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		3: {
			quote: "Revolutionary mobile app that streamlined our operations",
			metric: "Efficiency improved by 85%",
			fullReview:
				"The mobile application developed by 4D Devs revolutionized how we manage our restaurant operations. From inventory management to customer orders, everything is now seamless and efficient. Our staff productivity has increased dramatically.",
			name: "Arjun Patel",
			title: "Owner, Spice Garden Restaurant",
			icon: (
				<svg
					className="w-8 h-8 text-gray-300"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fillRule="evenodd"
						d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	};

	const currentTestimonial = testimonials[activeTestimonial];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 overflow-hidden relative">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header Section */}
				<div className="text-center mb-20">
					<h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
						About Us
					</h1>
					<p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
						Redefining Digital Innovation
					</p>

					<div className="max-w-5xl mx-auto mb-16 space-y-6">
						<p className="text-xl text-gray-300 leading-relaxed">
							We don't just build software—we craft immersive digital
							experiences that push boundaries, break limits, and shape the
							future. From AI-powered solutions to high-performance
							applications, we bring your boldest visions to life.
						</p>
						<p className="text-xl text-gray-300 leading-relaxed">
							At 4D Core, we believe in the transformative power of technology
							when wielded with expertise, creativity, and purpose. Our
							dedicated team of innovators thrives on challenges and lives to
							make "aha" moments where a complex problem yields to an elegant
							solution.
						</p>
					</div>

					{/* Stats Section with Glass Cards */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
						{[
							{ number: "50+", label: "Completed Projects" },
							{ number: "92%", label: "Client Retention" },
							{ number: "15+", label: "Industries Served" },
							{ number: "5", label: "Countries" },
						].map((stat, index) => (
							<div
								key={index}
								className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 shadow-2xl shadow-black/50 hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
							>
								<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
									{stat.number}
								</div>
								<div className="text-gray-300 text-sm">{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				{/* Combined Our Story & Process Section */}
				<div className="mb-20">
					<div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 shadow-2xl shadow-black/50 p-12">
						{/* Our Story */}
						<h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
							Our Story
						</h2>
						<div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-16">
							<p>
								Founded with a passion to redefine digital excellence, 4D Core
								has emerged as a powerhouse of innovation, engineering
								cutting-edge solutions that drive business growth. Our expertise
								spans across web, mobile, AI, and cloud technologies, delivering
								transformative solutions that inspire and empower our clients.
							</p>
							<p>
								What sets us apart is our commitment to understanding each
								client's unique vision and transforming it through a perfect
								symphony of technologies, strategies, and processes unified by a
								singular vision: to create digital experiences that make a
								difference.
							</p>
							<p>
								Through economic ups and downs, technological paradigm shifts,
								and evolving client needs, we've remained adaptable yet grounded
								in our commitment to excellence. Every challenge has been an
								opportunity to learn, grow, and refine our craft.
							</p>
						</div>

						{/* Our Process */}
						<h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
							Our Process
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									step: "1",
									title: "Discovery",
									description:
										"We dive deep into understanding your business, challenges, and objectives to create a strategic roadmap.",
								},
								{
									step: "2",
									title: "Design",
									description:
										"Crafting wireframes and prototypes that focus on user experience, aesthetics, and functionality.",
								},
								{
									step: "3",
									title: "Development",
									description:
										"Our engineers build your solution using clean, scalable code with the latest tech stack.",
								},
								{
									step: "4",
									title: "Delivery & Support",
									description:
										"We launch your project with comprehensive testing and ongoing support.",
								},
							].map((process, index) => (
								<div
									key={index}
									className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8 shadow-xl shadow-black/30 hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
								>
									<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-purple-500/25">
										{process.step}
									</div>
									<h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
										{process.title}
									</h3>
									<p className="text-gray-300 leading-relaxed">
										{process.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Our Approach Section */}
				<div className="mb-20">
					<h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
						Our Approach
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "Speed",
								description:
									"Rapid development without compromising quality. We leverage agile methodologies and cutting-edge tools to deliver solutions faster than market.",
								features: [
									"Agile development methodology",
									"Parallel development processes",
									"Automated testing and deployment",
								],
							},
							{
								title: "Intelligence",
								description:
									"Data-driven insights throughout the development process ensure we make informed decisions that align with your business goals.",
								features: [
									"Analytics-driven solutions",
									"User behavior patterns",
									"Continuous improvement cycles",
								],
							},
							{
								title: "Results",
								description:
									"Measurable impact on your business metrics. We deliver solutions that drive growth, efficiency, and real ROI.",
								features: [
									"ROI-focused development",
									"Performance optimization",
									"Scalable architecture",
								],
							},
						].map((approach, index) => (
							<div
								key={index}
								className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-8 shadow-2xl shadow-black/50 hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
							>
								<h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
									{approach.title}
								</h3>
								<p className="text-gray-300 mb-6 leading-relaxed">
									{approach.description}
								</p>
								<div className="space-y-3">
									{approach.features.map((feature, featureIndex) => (
										<div
											key={featureIndex}
											className="flex items-center space-x-3"
										>
											<div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
											<span className="text-gray-300">{feature}</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Client Testimonials Section */}
				<div className="mb-20">
					<div className="text-center mb-16">
						<h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
							Client Testimonials
						</h2>
						<p className="text-2xl text-gray-400 mb-12">Success Stories</p>
						<p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
							Don't just take our word for it — hear from the businesses we've
							helped transform with innovative digital solutions that drive real
							results
						</p>
					</div>

					{/* Testimonial Navigation */}
					<div className="flex justify-center space-x-4 mb-12">
						{[1, 2, 3].map((num) => (
							<button
								key={num}
								onClick={() => setActiveTestimonial(num)}
								className={`w-16 h-16 rounded-full border-2 text-xl font-bold transition-all duration-300 transform hover:scale-110 ${
									num === activeTestimonial
										? "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white shadow-lg shadow-purple-500/25"
										: "border-purple-500/50 text-purple-400 hover:border-purple-400 hover:text-purple-300"
								}`}
							>
								{num}
							</button>
						))}
					</div>

					{/* Testimonial Cards */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{/* Left Card - Highlighted */}
						<div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-8 shadow-2xl shadow-purple-500/20 transform transition-all duration-500 hover:scale-105">
							<blockquote className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 leading-relaxed">
								"{currentTestimonial.quote}"
							</blockquote>
							<div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
								{currentTestimonial.metric}
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
									{currentTestimonial.icon}
								</div>
								<div>
									<div className="text-xl font-bold text-white">
										{currentTestimonial.name}
									</div>
									<div className="text-gray-400">
										{currentTestimonial.title}
									</div>
									<div className="flex space-x-1 mt-2">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className="w-5 h-5 text-yellow-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Right Card */}
						<div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8 shadow-2xl shadow-black/50 flex flex-col justify-center transform transition-all duration-500 hover:scale-105">
							<blockquote className="text-xl text-gray-300 italic mb-8 leading-relaxed">
								"{currentTestimonial.fullReview}"
							</blockquote>
							<div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
						</div>
					</div>

					{/* Client Indicator */}
					<div className="text-center mt-8">
						<p className="text-gray-400">
							Showing testimonial {activeTestimonial} of 3
						</p>
					</div>
				</div>

				{/* CTA Section */}
				<div className="text-center">
					<div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 shadow-2xl shadow-black/50 p-12 max-w-2xl mx-auto">
						<h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
							Ready to Transform Your Vision?
						</h3>
						<p className="text-gray-300 text-lg mb-8 leading-relaxed">
							Let's collaborate to create something extraordinary that pushes
							the boundaries of what's possible.
						</p>
						<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
							Start Your Project
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
