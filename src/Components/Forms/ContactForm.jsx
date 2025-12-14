import React, { useState } from "react";
import { Button } from "../../Components/UI/button";
import { Input } from "../../Components/UI/input";
import { Label } from "../../Components/UI/label";
import { useToast } from "../../hooks/use-toast";
import { Phone, Mail, MapPin, Send, Loader2, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    college: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    // Ideally, move this key to an environment variable in production
    form.append("access_key", "91064df5-0215-4840-9bda-70efd210f8f2"); 
    form.append("subject", "New Inquiry from Tech Landing Page");

    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        toast({
          title: "Inquiry Sent!",
          description: "Our admission experts will contact you within 2 hours.",
          className: "bg-green-50 border-green-200 text-green-800",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          college: "",
        });
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

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden" id="contact">
      
      {/* 1. MATCHING BACKGROUND: Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* 2. MATCHING GLOWS: Ambient background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Floating Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-gray-100">
          
          {/* LEFT COLUMN: Modern Dark Tech Panel */}
          <div className="lg:col-span-2 bg-slate-950 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Abstract Shapes/Glows on Dark BG */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                 style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-40"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-purple-500 rounded-full blur-[80px] opacity-40"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-200 text-xs font-medium mb-6">
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span>Priority Support</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Let's Shape Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future.</span>
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                Direct admission guidance for top-tier universities. Get your roadmap today.
              </p>

              {/* Contact Details with Glassmorphism */}
              <div className="space-y-5">
                {[
                    { icon: Phone, label: "Call Us", value: "+91 63625 20959" },
                    { icon: Mail, label: "Email Us", value: "admissions@tejedu.com" },
                    { icon: MapPin, label: "Visit HQ", value: "Ananthapur, Andhra Pradesh" }
                ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group cursor-default">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                            <item.icon className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
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

          {/* RIGHT COLUMN: Clean Modern Form */}
          <div className="lg:col-span-3 p-8 md:p-12 bg-white relative">
            <div className="mb-8">
               <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                 Get a Free Consultation <span className="text-blue-500">.</span>
               </h4>
               <p className="text-gray-500 text-sm mt-2">
                 Fill out the form below. We typically respond within <span className="font-semibold text-gray-900">2 hours</span>.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 text-xs font-bold uppercase tracking-wide">First Name</Label>
                  <Input
                    id="firstName" name="firstName" required
                    value={formData.firstName} onChange={handleChange}
                    className="h-12 bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all rounded-xl"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Last Name</Label>
                  <Input
                    id="lastName" name="lastName" required
                    value={formData.lastName} onChange={handleChange}
                    className="h-12 bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all rounded-xl"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Email</Label>
                    <Input
                        id="email" name="email" type="email" required
                        value={formData.email} onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all rounded-xl"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Phone</Label>
                    <Input
                        id="phone" name="phone" type="tel" required
                        value={formData.phone} onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all rounded-xl"
                        placeholder="+91 99999 99999"
                    />
                </div>
              </div>

              {/* Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div className="space-y-2">
                    <Label htmlFor="course" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Course</Label>
                    <Input
                        id="course" name="course"
                        value={formData.course} onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all rounded-xl"
                        placeholder="e.g. B.Tech CSE"
                    />
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="college" className="text-gray-700 text-xs font-bold uppercase tracking-wide">Preference</Label>
                    <Input
                        id="college" name="college"
                        value={formData.college} onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all rounded-xl"
                        placeholder="e.g. VIT / SRM"
                    />
                 </div>
              </div>

              {/* Modern Submit Button */}
              <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-gray-900 hover:bg-black text-white font-bold text-base rounded-xl shadow-lg shadow-gray-900/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
              </div>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
                 <MessageSquare className="w-3 h-3" />
                 <span>Your data is secure and confidential.</span>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;