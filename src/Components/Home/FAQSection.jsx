import React, { memo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../UI/Accordion';
import { HelpCircle, Plus, Minus, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: 'What does Tej EduTech do?',
    answer: 'We provide end-to-end guidance for university admissions, from selecting the right branch to handling application paperwork and enrollment.',
  },
  {
    question: 'Is the consultation free?',
    answer: 'Yes! Our initial career counseling and admission guidance for partner universities are 100% free.',
  },
  {
    question: 'Can you guarantee admission?',
    answer: 'While admission depends on your marks, our tie-ups with universities like VIT and SRM allow us to fast-track your application.',
  },
  {
    question: 'Do you help with education loans?',
    answer: 'Absolutely. We connect you with major banks and assist with documentation to speed up your loan approval.',
  },
  {
    question: 'I have a low rank. Can you help?',
    answer: 'Yes. We specialize in finding excellent universities with management quotas or their own entrance exams that match your profile.',
  },
];

const FAQSection = memo(() => {
  return (
    <section className="relative py-14 bg-white overflow-hidden" id="faq">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      {/* Container: Reduced to max-w-2xl for a professional "Reading Mode" width */}
      <div className="max-w-2xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wide mb-3">
                <HelpCircle className="w-3 h-3" />
                <span>Support</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                Frequently Asked Questions
            </h2>
        </div>

        {/* SLIM FAQ LIST */}
        <div className="space-y-2">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-blue-300 hover:shadow-sm"
              >
                <AccordionTrigger
                  className="flex items-center justify-between w-full py-3 px-4 text-left hover:no-underline group"
                >
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
                    {faq.question}
                  </span>

                  {/* Animated Icon (Compact) */}
                  <div className="relative flex items-center justify-center w-5 h-5 ml-4">
                    <Plus className="w-4 h-4 text-gray-400 absolute transition-transform duration-200 rotate-0 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                    <Minus className="w-4 h-4 text-blue-600 absolute transition-transform duration-200 rotate-90 opacity-0 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100" />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-3 pt-0">
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Link */}
        <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
                Still have questions? 
                <a href="#contact" className="ml-1 font-bold text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                    Chat with us <MessageSquare className="w-3 h-3" />
                </a>
            </p>
        </div>

      </div>
    </section>
  );
});

export default FAQSection;