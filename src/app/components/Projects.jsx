"use client";
import React, { useState } from "react";

const Project = () => {
	const [activeTab, setActiveTab] = useState("Suraksha"); // Changed from "Viva" to "Suraksha"
	const [activeProjectTab, setActiveProjectTab] = useState("Overview");

	const projects = {
		Suraksha: {
			title: "Suraksha Water Filters",
			description:
				"Designed a clean, trust-building e-commerce and lead generation platform for Suraksha, enabling direct sales of advanced water purification systems to households and businesses while educating users on water quality and health benefits.",
			challenge:
				"The client needed to build digital trust for high-ticket water filter purchases while streamlining lead capture and direct sales to reduce reliance on offline distributors.",
			features: [
				"Product Comparison & Recommendation Engine",
				"Online Purchase & EMI Options",
				"Water Quality Education Center",
				"Live Chat & WhatsApp Integration",
				"Automated Lead Capture & CRM Integration",
				"Mobile-First Responsive Design",
				"SEO & Local Search Optimization",
				"Installation Appointment Scheduling",
			],
			results: [
				"Direct online sales increased by 200%",
				"Lead-to-sale conversion rate improved by 150%",
				"Average session duration increased by 180%",
				"Customer trust score: 4.8/5",
				"Page load speed optimized to 1.1 seconds",
				"Organic traffic growth of 250%",
			],
			videoUrl:
				"https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4",
		},

		Vigneshwara: {
			title: "Vigneshwara Industrial Supplies",
			description:
				"Developed a clean, scalable frontend platform for Vigneshwara, showcasing their wide range of industrial products and enabling customers to explore product categories efficiently with a seamless user experience.",
			challenge:
				"The client required a professional, easy-to-navigate frontend interface to present thousands of industrial products clearly while preparing for future backend integration and order management systems.",
			features: [
				"Responsive Product Catalog Pages",
				"Category & Filter-Based Navigation",
				"Product Detail Pages with Specs & Images",
				"Search Functionality",
				"Inquiry Form Integration",
				"Frontend Cart & Wishlist (UI Only)",
				"Mobile-First Responsive Design",
				"SEO Optimization for Product Listings",
			],
			results: [
				"Bounce rate reduced by 40%",
				"Average session duration increased by 120%",
				"Mobile usability score improved to 98%",
				"User engagement increased by 180%",
				"Organic traffic growth of 210%",
				"Positive client feedback on UI clarity and speed",
			],
			videoUrl:
				"https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_4mb.mp4",
		},

		EasyBites: {
			title: "EasyBites Food Delivery",
			description:
				"Built a seamless food delivery platform focused on local restaurants, offering dynamic menus, real-time delivery tracking, and loyalty rewards to enhance customer retention and operational efficiency for partners.",
			challenge:
				"Creating a scalable platform for food delivery in competitive urban areas while maintaining low delivery times and high customer satisfaction for small and medium restaurant partners.",
			features: [
				"Real-time Order Tracking",
				"Dynamic Menu & Availability Updates",
				"Loyalty & Referral Rewards System",
				"Integrated Payment Gateway",
				"Delivery Partner Tracking",
				"Restaurant Management Dashboard",
				"Mobile App for iOS & Android",
				"Push Notifications for Offers & Status",
			],
			results: [
				"Average delivery time reduced by 35%",
				"Customer retention improved by 75%",
				"Partner restaurant revenue increased by 140%",
				"App downloads: 100K+",
				"Customer satisfaction score: 4.7/5",
				"Order volume grew by 300% within 6 months",
			],
			videoUrl:
				"https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_6mb.mp4",
		},
	};

	const currentProject = projects[activeTab];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 overflow-hidden relative">
			<div className="max-w-7xl mx-auto text-white">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
						Our Portfolio
					</h1>
					<p className="text-xl text-gray-300 mb-2">Featured Projects</p>
					<p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Transforming bold ideas into cutting-edge digital solutions that
						deliver measurable impact and exceptional user experiences for
						forward-thinking businesses
					</p>
				</div>

				{/* Project Navigation */}
				<div className="flex justify-center mb-12">
					<div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
						{Object.keys(projects).map((project) => (
							<button
								key={project}
								onClick={() => setActiveTab(project)}
								className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
									activeTab === project
										? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
										: "text-gray-400 hover:text-white hover:bg-gray-700/50"
								}`}
							>
								{project}
							</button>
						))}
					</div>
				</div>

				{/* Content Layout */}
				<div className="grid lg:grid-cols-2 gap-8 items-start">
					{/* Left Side - Project Card */}
					<div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 shadow-2xl shadow-black/50">
						{/* Project Card Navigation */}
						<div className="p-6 border-b border-gray-700/30">
							<div className="flex space-x-1">
								{["Overview", "Features", "Results"].map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveProjectTab(tab)}
										className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
											activeProjectTab === tab
												? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
												: "text-gray-400 hover:text-gray-200 hover:bg-gray-700/30"
										}`}
									>
										{tab}
									</button>
								))}
							</div>
						</div>

						{/* Scrollable Content */}
						<div className="h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-black/30">
							<div className="p-6">
								<h2 className="text-2xl font-bold text-white mb-4">
									{activeProjectTab === "Overview" && "Project Overview"}
									{activeProjectTab === "Features" && "Key Features"}
									{activeProjectTab === "Results" && "Project Results"}
								</h2>

								{activeProjectTab === "Overview" && (
									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-semibold text-purple-300 mb-3">
												{currentProject.title}
											</h3>
											<p className="text-gray-300 leading-relaxed mb-6">
												{currentProject.description}
											</p>
										</div>

										<div>
											<h4 className="text-lg font-semibold text-pink-300 mb-3">
												Challenge
											</h4>
											<p className="text-gray-300 leading-relaxed">
												{currentProject.challenge}
											</p>
										</div>
									</div>
								)}

								{activeProjectTab === "Features" && (
									<div className="space-y-4">
										{currentProject.features.map((feature, index) => (
											<div key={index} className="flex items-start space-x-3">
												<div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
												<p className="text-gray-300 leading-relaxed">
													{feature}
												</p>
											</div>
										))}
									</div>
								)}

								{activeProjectTab === "Results" && (
									<div className="space-y-4">
										{currentProject.results.map((result, index) => (
											<div
												key={index}
												className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20"
											>
												<div className="flex items-center space-x-3">
													<div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex-shrink-0"></div>
													<p className="text-gray-200 font-medium">{result}</p>
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>

						{/* CTA Section */}
						<div className="p-6 border-t border-gray-700/30 bg-gradient-to-r from-gray-800/30 to-black/30">
							<div className="flex items-center justify-between">
								<p className="text-gray-400">Want to learn more?</p>
								<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
									Contact Us
								</button>
							</div>
						</div>
					</div>

					{/* Right Side - Video */}
					<div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/30 shadow-2xl shadow-black/50 overflow-hidden">
						<div className="p-6 border-b border-gray-700/30">
							<h3 className="text-xl font-semibold text-white">Project Demo</h3>
							<p className="text-gray-400 text-sm mt-1">
								Experience the {currentProject.title}
							</p>
						</div>

						<div className="aspect-video bg-black/50 flex items-center justify-center">
							<video
								key={currentProject.videoUrl}
								className="w-full h-full object-cover"
								controls
								poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23374151'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%239CA3AF' font-family='Arial, sans-serif' font-size='14'%3EVideo Preview%3C/text%3E%3C/svg%3E"
							>
								<source src={currentProject.videoUrl} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>

						<div className="p-4 bg-gray-800/20">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
									<span className="text-sm text-gray-400">Live Demo</span>
								</div>
								<button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
									View Full Case Study →
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Custom Scrollbar Styles */}
			<style jsx>{`
				.scrollbar-thin::-webkit-scrollbar {
					width: 6px;
				}
				.scrollbar-thin::-webkit-scrollbar-track {
					background: rgba(0, 0, 0, 0.3);
					border-radius: 3px;
				}
				.scrollbar-thin::-webkit-scrollbar-thumb {
					background: rgba(168, 85, 247, 0.2);
					border-radius: 3px;
				}
				.scrollbar-thin::-webkit-scrollbar-thumb:hover {
					background: rgba(168, 85, 247, 0.4);
				}
			`}</style>
		</div>
	);
};

export default Project;
