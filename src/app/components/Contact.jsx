"use client";
import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		projectDetails: "",
	});

	const [openFaq, setOpenFaq] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	const faqs = [
		{
			question: "How does your project process work?",
			answer:
				"Our project begins with a discovery phase to understand your needs,followed by planning, design, development,testing and deployment . We provide ongoing support and maintenance after launch. ",
		},
		{
			question: "What is your typical timeframe for projects?",
			answer:
				"Project timelines very based on complexity . Simple websiters may take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consulation.",
		},
		{
			question: "Do you provide ongoing support and maintenance?",
			answer:
				"Yes, we offer comprehensive support and maintenance packages to ensure your digital solution continues to perform optimally. This includes updates, security monitoring, and technical support.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 overflow-hidden relative">
			{/* Header Section */}
			<div className="max-w-6xl mx-auto text-center mb-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Get In Touch
					</span>
				</h1>
				<p className="text-gray-300 text-lg mb-8">
					Let's Build Something Amazing Together
				</p>
				<p className="text-gray-400 max-w-3xl mx-auto">
					Ready to transform your ideas into reality? Our expert team is here to
					create tailored digital solutions that drive growth and deliver
					exceptional results.
				</p>
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
				{/* Contact Form */}
				<div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
					<h2 className="text-2xl font-semibold mb-6 text-purple-400">
						Share Your Vision
					</h2>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-300 mb-2">
									Your Name
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder="John Doe"
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-300 mb-2">
									Email Address
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="johndoe@example.com"
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									required
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Phone Number (Optional)
							</label>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
								placeholder="+1 (234) 567-8900"
								className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Project Details
							</label>
							<textarea
								name="projectDetails"
								value={formData.projectDetails}
								onChange={handleInputChange}
								rows="5"
								placeholder="Tell us about your project goals, requirements, and any specific challenges..."
								className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
								required
							></textarea>
						</div>

						<button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
						>
							Start Your Project
						</button>
					</form>
				</div>

				{/* Contact Info */}
				<div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
					<h2 className="text-2xl font-semibold mb-6 text-purple-400">
						Connect With Us
					</h2>

					<div className="space-y-6">
						<div className="border-b border-gray-700 pb-6">
							<h3 className="text-lg font-medium text-purple-300 mb-4">
								Get In Touch
							</h3>

							<div className="flex items-center space-x-3 mb-4">
								<div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
									<svg
										className="w-5 h-5 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										></path>
									</svg>
								</div>
								<div>
									<p className="text-sm text-gray-400">Email Us</p>
									<p className="text-white">foundervs@gmail.com</p>
								</div>
							</div>

							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
									<svg
										className="w-5 h-5 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										></path>
									</svg>
								</div>
								<div>
									<p className="text-sm text-gray-400">Call Us</p>
									<p className="text-white">Phone</p>
									<p className="text-gray-300">+91 6361854131</p>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-medium text-purple-300 mb-4">
								Social Media
							</h3>

							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
										<svg
											className="w-4 h-4 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
										</svg>
									</div>
									<span className="text-gray-300">Twitter</span>
								</div>

								<div className="flex items-center space-x-3">
									<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
										<svg
											className="w-4 h-4 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</div>
									<span className="text-gray-300">LinkedIn</span>
								</div>

								<div className="flex items-center space-x-3">
									<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
										<svg
											className="w-4 h-4 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
										</svg>
									</div>
									<span className="text-gray-300">Instagram</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Frequently Asked Questions
						</span>
					</h2>
					<p className="text-gray-400">
						Have questions before reaching out? Find quick answers to common
						inquiries below
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
						>
							<button
								onClick={() => toggleFaq(index)}
								className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors duration-200"
							>
								<span className="text-lg font-medium text-white">
									{faq.question}
								</span>
								<svg
									className={`w-5 h-5 text-purple-400 transform transition-transform duration-200 ${
										openFaq === index ? "rotate-180" : ""
									}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{openFaq === index && (
								<div className="px-6 pb-4">
									<p className="text-gray-300 leading-relaxed">{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Contact;
