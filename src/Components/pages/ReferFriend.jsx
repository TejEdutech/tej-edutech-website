import React, { useState } from "react";
import { Button } from "../../Components/UI/button";
import { Input } from "../../Components/UI/input";
import { Label } from "../../Components/UI/label";
import { toast } from "sonner";
import { Gift, Users, Award, DollarSign, ArrowRight, Loader2, Zap } from "lucide-react";

const ReferFriend = () => {
    const [formData, setFormData] = useState({
        yourName: "",
        yourEmail: "",
        yourPhone: "",
        friendName: "",
        friendEmail: "",
        friendPhone: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //----------------------------------------------
    // ⭐ SUBMIT USING WEB3FORMS API (Logic unchanged)
    //----------------------------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData();
        form.append("access_key", "91064df5-0215-4840-9bda-70efd210f8f2");
        form.append("subject", "New Referral Submission");

        Object.keys(formData).forEach((key) => {
            form.append(key, formData[key]);
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form
            });

            const result = await response.json();

            if (result.success) {
                toast.success(
                    "Referral submitted successfully! We will contact both of you soon."
                );

                setFormData({
                    yourName: "",
                    yourEmail: "",
                    yourPhone: "",
                    friendName: "",
                    friendEmail: "",
                    friendPhone: ""
                });
            } else {
                toast.error("Submission failed. Please try again!");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const benefits = [
        { 
            icon: Users, 
            title: "Support Friends", 
            description: "Share educational opportunities and support your friends in choosing the right career path.", 
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        { 
            icon: DollarSign, 
            title: "Exclusive Discount", 
            description: "Enjoy a flat ₹5,000 discount on Tej EduTech services when your referred friend successfully enrolls.", 
            color: "text-amber-600",
            bg: "bg-amber-50"
        },
        { 
            icon: Award, 
            title: "Premium Rewards", 
            description: "Earn coupon codes, special benefits, and access to premium features as a referral reward.", 
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
    ];

    return (
        <div className="bg-gray-50 font-sans text-slate-800">
            {/* HERO SECTION - Modern, High-Impact Header */}
            <section className="relative h-[300px] md:h-[360px] bg-gradient-to-r from-indigo-900 to-blue-950 flex items-center shadow-2xl">
                <div 
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-10"
                    style={{ backgroundPosition: '50% 60%' }} // Adjust background position for better focus
                ></div>
                <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for contrast */}

                <div className="relative w-full max-w-7xl mx-auto px-6 text-center z-10">
                    <Gift className="h-16 w-16 text-amber-400 mx-auto mb-3" />
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
                        Refer & <span className="text-amber-400">Earn</span>
                    </h1>
                    <p className="text-indigo-200 text-xl max-w-3xl mx-auto mt-2 font-light">
                        Share the gift of quality education and unlock exclusive rewards for yourself.
                    </p>
                </div>
            </section>

            {/* BENEFITS SECTION - Modern Card Layout */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
                        How You Both Benefit
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index} 
                                // Sleek card with colored light background and focus border
                                className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-blue-400/50 transform hover:-translate-y-1`}
                            >
                                <div className={`rounded-full p-4 w-fit mx-auto mb-5 shadow-lg ${benefit.bg} border-4 border-white`}>
                                    {React.cloneElement(<benefit.icon />, { className: `h-10 w-10 ${benefit.color}` })}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORM SECTION - High-Contrast Card */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-gray-300/50 p-8 md:p-12 border border-gray-100">
                        
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                                Submit Your Referral
                            </h2>
                            <p className="text-slate-600 text-center text-lg">
                                Complete the two sections below to submit your recommendation.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-10"
                        >
                            {/* Your Information */}
                            <div className="pb-6 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-blue-700 mb-6 flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-amber-500" /> Your Contact Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div className="space-y-1">
                                        <Label htmlFor="yourName" className="text-gray-700 text-sm font-semibold">Your Name *</Label>
                                        <Input
                                            id="yourName" name="yourName" required
                                            value={formData.yourName} onChange={handleChange}
                                            className="h-11 bg-gray-50 border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="yourEmail" className="text-gray-700 text-sm font-semibold">Your Email *</Label>
                                        <Input
                                            id="yourEmail" name="yourEmail" type="email" required
                                            value={formData.yourEmail} onChange={handleChange}
                                            className="h-11 bg-gray-50 border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="yourPhone" className="text-gray-700 text-sm font-semibold">Your Phone *</Label>
                                        <Input
                                            id="yourPhone" name="yourPhone" type="tel" required
                                            value={formData.yourPhone} onChange={handleChange}
                                            className="h-11 bg-gray-50 border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Friend Information */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-blue-700 mb-6 flex items-center gap-3">
                                    <Users className="w-5 h-5 text-amber-500" /> Friend's Information
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div className="space-y-1">
                                        <Label htmlFor="friendName" className="text-gray-700 text-sm font-semibold">Friend's Name *</Label>
                                        <Input
                                            id="friendName" name="friendName" required
                                            value={formData.friendName} onChange={handleChange}
                                            className="h-11 bg-gray-50 border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="friendEmail" className="text-gray-700 text-sm font-semibold">Friend's Email *</Label>
                                        <Input
                                            id="friendEmail" name="friendEmail" type="email" required
                                            value={formData.friendEmail} onChange={handleChange}
                                            className="h-11 bg-gray-50 border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                                            placeholder="friend@example.com"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="friendPhone" className="text-gray-700 text-sm font-semibold">Friend's Phone *</Label>
                                        <Input
                                            id="friendPhone" name="friendPhone" type="tel" required
                                            value={formData.friendPhone} onChange={handleChange}
                                            className="h-11 bg-gray-50 border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={loading}
                                // High-impact gradient CTA
                                className="w-full h-14 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/40 transition-all hover:scale-[1.005] flex items-center justify-center gap-2 group"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Referral
                                        <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReferFriend;