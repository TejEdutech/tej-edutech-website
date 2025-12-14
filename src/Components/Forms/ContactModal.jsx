import React, { useState } from "react";
import { X, ArrowRight, User, Mail, Phone, Book, GraduationCap, Loader2, Sparkles, MapPin } from "lucide-react";

import { Button } from "../../Components/UI/button";
import { Input } from "../../Components/UI/input";
import { Label } from "../../Components/UI/label";
import { useToast } from "../../hooks/use-toast";

const ContactModal = ({ isOpen, onClose }) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		course: "",
		college: ""
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	// -------------------------------------------------
	// SUBMIT FORM USING WEB3FORMS (Logic remains unchanged)
	// -------------------------------------------------
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const form = new FormData();
		form.append("access_key", "91064df5-0215-4840-9bda-70efd210f8f2");
		form.append("subject", "Contact Form Submitted from Our Website");

		Object.keys(formData).forEach((key) => {
			form.append(key, formData[key]);
		});

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: form
			});

			const result = await response.json();
			setLoading(false);

			if (result.success) {
				toast({
					title: "Form submitted successfully!",
					description: "Our team will contact you shortly.",
					className: "bg-green-50 border-green-200 text-green-800",
				});

				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					course: "",
					college: ""
				});

				onClose();
			} else {
				throw new Error("Submission failed");
			}
		} catch (error) {
			setLoading(false);
			toast({
				title: "Connection Error",
				description: "Please check your internet or try again later.",
				variant: "destructive",
			});
		}
	};

	if (!isOpen) return null;

	return (
		// FIX 1: Modal Backdrop - Ensures scrolling works on the entire overlay
		<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center px-4 py-6 overflow-y-auto">

			{/* FIX 2: Card - Added max-h-full and ensured content within the grid scrolls */}
			<div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl shadow-blue-500/30 grid grid-cols-1 lg:grid-cols-7 border border-gray-100 animate-scaleIn max-h-full overflow-y-auto">

				{/* CLOSE BUTTON: High visibility and z-index */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-30 p-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full transition shadow-md"
					aria-label="Close modal"
				>
					<X className="w-6 h-6" />
				</button>
                
				{/* LEFT COLUMN: Dark Info Panel (3/7ths width on desktop) */}
				<div className="lg:col-span-3 bg-slate-950 p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden">
					
					{/* Abstract Shapes/Glows on Dark BG */}
					<div className="absolute top-[-50px] right-[-50px] w-36 h-36 bg-blue-500/80 rounded-full blur-[80px] opacity-40"></div>
					<div className="absolute bottom-[-50px] left-[-50px] w-36 h-36 bg-purple-500/80 rounded-full blur-[80px] opacity-40"></div>

					<div className="relative z-10">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-200 text-xs font-medium mb-6">
							<Sparkles className="w-4 h-4 text-yellow-400" />
							<span>Priority Consultation</span>
						</div>
						
						<h3 className="text-2xl font-bold mb-4 leading-tight">
							Ready to Start Your <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future?</span>
						</h3>
						
						<p className="text-slate-400 mb-8 leading-relaxed text-sm">
							Fill out the form to connect with our expert team and receive a personalized academic roadmap.
						</p>

						{/* Contact Details */}
						<div className="space-y-4 pt-4">
							{[
								{ icon: Phone, label: "Call Us", value: "+91 63625 20959" },
								{ icon: Mail, label: "Email Us", value: "admissions@tejedu.com" },
								{ icon: MapPin, label: "HQ", value: "Ananthapur, AP" }
							].map((item, index) => (
								<div key={index} className="flex items-center gap-4 group cursor-default">
									<div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
										<item.icon className="w-5 h-5 text-blue-300 group-hover:text-white" />
									</div>
									<div>
										<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
										<p className="font-medium text-slate-200 group-hover:text-white transition-colors">{item.value}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* RIGHT COLUMN: Clean Modern Form (4/7ths width on desktop) */}
				<div className="lg:col-span-4 p-6 md:p-8 bg-white relative">
					<div className="mb-6">
						<h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
							Admission Inquiry Form
						</h4>
						<p className="text-gray-500 text-sm mt-1">
							Fields marked with * are required.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						
						{/* Name Row - Responsive Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="space-y-1">
								<Label htmlFor="firstName" className="text-gray-700 text-xs font-bold uppercase tracking-wide">First Name *</Label>
								<Input
									id="firstName" name="firstName" required
									value={formData.firstName} onChange={handleChange}
									className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all rounded-lg"
									placeholder="John"
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="lastName" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Last Name *</Label>
								<Input
									id="lastName" name="lastName" required
									value={formData.lastName} onChange={handleChange}
									className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all rounded-lg"
									placeholder="Doe"
								/>
							</div>
						</div>

						{/* Contact Row - Responsive Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="space-y-1">
								<Label htmlFor="email" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Email *</Label>
								<Input
									id="email" name="email" type="email" required
									value={formData.email} onChange={handleChange}
									className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all rounded-lg"
									placeholder="john@example.com"
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="phone" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Phone *</Label>
								<Input
									id="phone" name="phone" type="tel" required
									value={formData.phone} onChange={handleChange}
									className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all rounded-lg"
									placeholder="+91 XXXXX XXXXX"
								/>
							</div>
						</div>

						{/* Details Row - Responsive Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="space-y-1">
								<Label htmlFor="course" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Course Interested</Label>
								<Input
									id="course" name="course"
									value={formData.course} onChange={handleChange}
									className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all rounded-lg"
									placeholder="e.g. B.Tech CSE"
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="college" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Preferred College</Label>
								<Input
									id="college" name="college"
									value={formData.college} onChange={handleChange}
									className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all rounded-lg"
									placeholder="e.g. VIT / SRM"
								/>
							</div>
						</div>

						{/* Modern Submit Button */}
						<div className="pt-4">
							<Button
								type="submit"
								disabled={loading}
								className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base rounded-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.005] flex items-center justify-center gap-2 group"
							>
								{loading ? (
									<Loader2 className="w-5 h-5 animate-spin" />
								) : (
									<>
										Submit Inquiry
										<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
									</>
								)}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;