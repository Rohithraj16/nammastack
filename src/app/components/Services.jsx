"use client";
import React from "react";

const Services = () => {
	return (
		<div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen flex items-center">
			<div className="container mx-auto px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						{/* Tags */}
						<div className="flex flex-wrap gap-4">
							<span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
								✨ Innovate
							</span>
							<span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
								• Create
							</span>
							<span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
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
								<div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
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
							<button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
								▶ Start Your Journey
							</button>
							<button className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
								View Our Work
							</button>
						</div>
					</div>

					{/* Right Content - 3D Graphic */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative">
							{/* Background glow effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl scale-150"></div>

							{/* 3D-like geometric shape */}
							<div className="relative w-80 h-80 lg:w-96 lg:h-96">
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
									{/* Inner geometric shapes */}
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
										{/* Central shape cluster */}
										<div className="relative w-48 h-48">
											{/* Shape 1 */}
											<div className="absolute top-0 left-8 w-16 h-24 bg-gradient-to-br from-gray-300 to-gray-500 transform rotate-12 skew-y-12 shadow-lg"></div>

											{/* Shape 2 */}
											<div className="absolute top-8 right-4 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-400 transform -rotate-45 shadow-lg"></div>

											{/* Shape 3 */}
											<div className="absolute bottom-4 left-4 w-18 h-28 bg-gradient-to-br from-gray-400 to-gray-600 transform rotate-45 skew-x-12 shadow-lg"></div>

											{/* Shape 4 */}
											<div className="absolute bottom-0 right-8 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-300 transform -rotate-12 shadow-lg"></div>

											{/* Center connecting element */}
											<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
