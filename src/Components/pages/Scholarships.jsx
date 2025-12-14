import React, { useState } from "react";
import { Button } from "../../Components/UI/button";
import { Award, TrendingUp, Target, CheckCircle, ArrowRight, Zap, GraduationCap, DollarSign, Search, Instagram, Youtube, Linkedin, Facebook, Twitter } from "lucide-react";
import Container from "../../Components/common/Container";
import ContactModal from "../../Components/Forms/ContactModal";

export default function Scholarships() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const scholarshipTypes = [
		{ icon: Award, title: "Merit-Based Scholarships", description: "Awarded for exceptional academic achievement and excellent entrance exam scores.", color: "text-amber-600", accent: "bg-amber-100" },
		{ icon: Target, title: "Need-Based Scholarships", description: "Support for students from financially weaker backgrounds based on verified income criteria.", color: "text-blue-600", accent: "bg-blue-100" },
		{ icon: TrendingUp, title: "Sports & Talent Scholarships", description: "For outstanding performance in sports, arts, or extracurriculars at the state or national level.", color: "text-green-600", accent: "bg-green-100" },
		{ icon: CheckCircle, title: "Category-Based Scholarships", description: "Reserved scholarships for SC/ST/OBC and minority communities, simplifying access to funding.", color: "text-purple-600", accent: "bg-purple-100" },
	];

	return (
        // FIX: Reduced negative margin for safer header clearance
		<div className="bg-white font-sans text-slate-900 overflow-hidden min-h-screen -mt-16 md:-mt-20"> 
            
			{/* 1. HERO SECTION: Padding fixed to ensure content starts high */}
			<section className="relative bg-white text-slate-900 pt-0 pb-16 md:pt-0 md:pb-24 border-b border-gray-100">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/10 rounded-full blur-[100px] pointer-events-none"></div>

				<Container>
                    {/* FIX: Increased internal top padding to guarantee visibility below the fixed header */}
                    <div className="max-w-4xl relative z-10 pt-16 md:pt-24"> 
                        
                        {/* THE BADGE: FUNDING YOUR FUTURE */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
                            <GraduationCap className="w-4 h-4 text-blue-600" />
                            <span>FUNDING YOUR FUTURE</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            Elite Scholarship <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-amber-600">
                                Opportunities.
                            </span>
                        </h1>
                        <p className="mt-4 text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
                            Helping students secure <b>₹15+ Crores</b> in scholarships across various categories in India.
                        </p>
                        
                        <Button
                            onClick={() => setIsContactModalOpen(true)}
                            className="mt-8 bg-blue-700 text-white font-bold px-8 py-6 rounded-full shadow-xl shadow-blue-500/30 hover:bg-amber-600 transition-transform hover:-translate-y-1 text-lg group"
                        >
                            Start Free Assessment <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
				</Container>
			</section>

			{/* 2. INTRODUCTION & KEY STATS */}
			<section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
				<Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        
                        {/* Stat Box (Clean White Card) */}
                        <div className="lg:col-span-1 p-10 rounded-[2rem] bg-white border border-gray-200 shadow-2xl shadow-blue-50/50 text-center order-2 lg:order-1 transform hover:scale-[1.03] transition-transform duration-300">
                            <DollarSign className="w-12 h-12 mx-auto text-amber-500 mb-4" />
                            <h3 className="text-6xl font-extrabold text-blue-800 tracking-tighter">₹15 Cr+</h3>
                            <p className="text-xl mt-2 text-slate-600 font-medium">
                                Total Funds Secured
                            </p>
                        </div>
                        
                        <div className="lg:col-span-2 order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                                Maximize Your Funding Potential
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Scholarships are non-repayable grants designed to support students demonstrating academic excellence, specific talents, or financial need. Our goal is to simplify the complex application process and maximize your eligibility.
                            </p>
                            <div className="flex items-center gap-3 text-lg font-semibold text-blue-600">
                                <Search className="w-6 h-6 text-blue-500" />
                                <span>We match you to the right scheme and category for success.</span>
                            </div>
                        </div>
                    </div>
				</Container>
			</section>

			{/* 3. TYPES OF SCHOLARSHIPS */}
			<section className="py-20 md:py-28 bg-white border-t border-b border-gray-200">
				<Container>
                    <h2 className="text-3xl sm:text-4xl font-black text-center text-slate-900 mb-16">
                        Explore Scholarship Categories
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {scholarshipTypes.map((type, index) => {
                            const Icon = type.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-blue-100/50 transition transform hover:-translate-y-1 flex flex-col h-full border border-gray-200 hover:border-blue-500/50 group"
                                >
                                    <div className={`w-14 h-14 ${type.accent} ${type.color} flex items-center justify-center p-3 rounded-xl mb-6 shadow-md`}>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {type.title}
                                    </h3>
                                    <p className="text-slate-600 text-base leading-relaxed flex-1">
                                        {type.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
				</Container>
			</section>

			{/* 4. HOW WE HELP & FINAL CTA */}
			<section className="py-20 md:py-28 bg-gray-50 border-t border-gray-200">
				<Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        <div className="space-y-8">
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                                The Roadmap to Approval
                            </h2>
                            {[
                                "Shortlisting best-fit scholarships based on your eligibility",
                                "Providing comprehensive documentation & deadline guidance",
                                "Helping you craft strong, winning essays & statements",
                                "Application review and expert final submission",
                                "Interview preparation for selective schemes",
                                "Support until final approval and fund disbursement",
                            ].map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-md transition-all hover:bg-blue-50 hover:border-blue-400"
                                >
                                    <div className="w-8 h-8 bg-blue-700 text-white flex items-center justify-center rounded-full font-bold text-sm shrink-0 mt-0.5 shadow-md">
                                        {index + 1}
                                    </div>
                                    <p className="text-slate-700 text-base leading-relaxed">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-blue-700 to-slate-800 p-12 rounded-[2rem] text-white shadow-2xl shadow-blue-900/50 text-center">
                            <Zap className="w-10 h-10 mx-auto mb-4 text-white" />
                            <h3 className="text-3xl font-bold mb-3">
                                Ready to Maximize Your Funds?
                            </h3>
                            <p className="text-blue-100 text-lg mb-8">
                                Don't leave money on the table. Our experts handle the paperwork and strategy.
                            </p>
                            
                            <Button
                                onClick={() => setIsContactModalOpen(true)}
                                className="bg-amber-500 text-slate-900 font-bold px-8 py-6 rounded-full shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-transform hover:-translate-y-1 text-lg group"
                            >
                                Get Personalized Plan <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
				</Container>
			</section>

			{/* 5. SUCCESS STATS & SOCIALS (Footer) */}
			<section className="py-16 bg-blue-900 border-t border-slate-700 text-white">
				<Container>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center border-b border-blue-700 pb-10 mb-10">
                        <div>
                            <h3 className="text-4xl sm:text-5xl font-black text-amber-400">₹15 Cr+</h3>
                            <p className="text-slate-300 text-lg mt-2">Scholarships Secured</p>
                        </div>

                        <div>
                            <h3 className="text-4xl sm:text-5xl font-black text-white">150+</h3>
                            <p className="text-slate-300 text-lg mt-2">Students Benefited</p>
                        </div>

                        <div>
                            <h3 className="text-4xl sm:text-5xl font-black text-amber-400">95%</h3>
                            <p className="text-slate-300 text-lg mt-2">Success Rate</p>
                        </div>
                    </div>
                    
                    {/* Socials */}
                    <div className="flex justify-center gap-6 text-blue-400">
                        <a href="#" className="h-6 w-6 hover:text-amber-400 cursor-pointer transition-colors"><Instagram /></a>
                        <a href="#" className="h-6 w-6 hover:text-red-400 cursor-pointer transition-colors"><Youtube /></a>
                        <a href="#" className="h-6 w-6 hover:text-white cursor-pointer transition-colors"><Linkedin /></a>
                        <a href="#" className="h-6 w-6 hover:text-white cursor-pointer transition-colors"><Facebook /></a>
                        <a href="#" className="h-6 w-6 hover:text-amber-400 cursor-pointer transition-colors"><Twitter /></a>
                    </div>
				</Container>
			</section>

			{/* 6. Render ContactModal */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>
		</div>
	);
}