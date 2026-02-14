import { useState } from 'react';
import { Plus, Minus, Sparkles, MessageCircle, Clock, Shield, Zap } from 'lucide-react';
import parcel21 from '../../assets/parcel21.jpeg';
import link12 from "../../assets/link12.jpeg";
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise clients. All payments are processed securely through industry-standard encryption.",
      icon: Shield
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping options are also available at checkout. International shipping times vary by location.",
      icon: Zap
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products. Items must be unused and in original packaging. Return shipping is free for defective items, and we'll process refunds within 5-7 business days of receiving your return.",
      icon: Clock
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Our support team is available 24/7 via live chat, email, and phone. We typically respond to inquiries within 2 hours during business days and 4 hours on weekends.",
      icon: MessageCircle
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <section
  className="relative py-24 px-4 overflow-hidden bg-center bg-cover"
  style={{
    backgroundImage:
      `url(${link12})`,
      backgroundPosition: 'top',
      backgroundSize: 'cover',
  }}
>
  {/* optional overlay */}
  <div className="absolute inset-0 bg-black/40" />

      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* Compact Header */}
        <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5
            rounded-full bg-primary text-white text-sm font-semibold">
            FAVOURITE CONSIGNMENT
             <Sparkles  size={16} />
            {/* <Star size={14} className="animate-spin" style={{ animationDuration: "6s" }} /> */}
          </div>
          {/* <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">FAQ</span>
          </div> */}
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            Quick answers to questions you may have
          </p>
        </div>

        {/* Single Column Layout */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'bg-gradient-to-r from-yellow-100 to-white shadow-md' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  style={{
                    borderRadius: '16px',
                    border: isOpen ? '2px solid #ffffff' : '2px solid transparent'
                  }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-yellow-500 shadow-lg' 
                          : 'bg-white shadow-sm group-hover:shadow-md'
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors ${
                          isOpen ? 'text-white' : 'text-gray-700'
                        }`} />
                      </div>

                      {/* Question */}
                      <span className={`text-xl font-semibold transition-colors ${
                        isOpen ? 'text-yellow-900' : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-yellow-500 rotate-180' 
                        : 'bg-white group-hover:bg-gray-200'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-700" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'max-h-48 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 pl-[88px]">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need More Help?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Our support team is ready to assist you anytime
            </p>
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-200 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}