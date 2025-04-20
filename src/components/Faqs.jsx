import { useState } from 'react';
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const faqs = [
    {
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is an online streaming platform that lets you watch movies, TV shows, and exclusive content anytime, anywhere. Enjoy unlimited entertainment with just a few clicks.",
    },
    {
      question: "How much does StreamVibe cost?",
      answer:
        "StreamVibe offers flexible subscription plans starting from $7.99/month. We also offer a 7-day free trial for new users to explore our content library.",
    },
    {
      question: "What content is available on StreamVibe?",
      answer:
        "StreamVibe features a wide variety of content including blockbuster movies, trending TV shows, documentaries, anime, and original StreamVibe exclusives.",
    },
    {
      question: "How can I watch StreamVibe?",
      answer:
        "You can watch StreamVibe on your smartphone, tablet, laptop, smart TV, or any device with an internet connection. Just log in to your account and start streaming!",
    },
    {
      question: "How do I contact StreamVibe customer support?",
      answer:
        "You can reach our customer support team via the 'Contact Us' page on our website or by emailing support@streamvibe.com. We're available 24/7 to assist you.",
    },
    {
      question: "What are the StreamVibe payment methods?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and digital wallets. All transactions are secure and encrypted.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[#1a1a1a] rounded-md p-4">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#262626] rounded-md text-white text-base font-bold px-4 py-2">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-white font-[500]">{faq.question}</p>
            </div>
            <img
              src={openIndex === index ? minus : plus}
              alt="toggle"
              className="w-4 h-4 mt-1"
            />
          </div>

          {openIndex === index && (
            <div className="mt-3 text-gray-300 text-sm">
              <p>{faq.answer}</p>
              <div className="mt-3 h-[2px] bg-red-600 w-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
