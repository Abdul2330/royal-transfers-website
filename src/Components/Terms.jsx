// Terms.jsx
import React, { useState } from "react";

const Terms = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "ACCEPTANCE OF TERMS",
      content: "By accessing and using the website, you agree to comply with all applicable laws and these Terms. If you are using the website on behalf of a company or organization, you represent that you have the authority to bind such entity to these Terms.",
    },
    {
      title: "SERVICES OFFERED",
      content: "We provide ride-hailing and transportation booking services through our platform.",
    },
    {
      title: "CANCELLATIONS AND REFUNDS",
      content: "Cancellations must be made 24 hours in advance to receive a full refund.",
    },
    {
      title: "REGISTRATION AND ACCOUNT SECURITY",
      content: "Users must ensure the accuracy and confidentiality of their account information.",
    },
    {
      title: "PAYMENT AND FEES",
      content: "All services are subject to payment before booking. Additional fees may apply.",
    },
    {
      title: "LIABILITY AND DISCLAIMERS",
      content: "We are not liable for indirect or incidental damages arising from the use of our services.",
    },
  ];

  return (
    <section
    id="Terms"
    className="py-16 px-4 font-times md:px-12 bg-white">
      <div className="ml-11 mb-10">
        <h2 className="text-4xl font-bold text-[#1c1536]">
          TERMS <span className="text-[#d9b66c]">& CONDITIONS</span>
        </h2>
        <p className=" text-gray-600 max-w-2xl mt-11">
          Terms and Conditions for the ride website outline user responsibilities and
          service limitations to ensure safe and fair usage. Please review and agree
          before booking rides.
        </p>
      </div>

      {/* Accordion Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <span className="font-semibold text-[#1c1536]">{item.title}</span>
              <span className="text-xl text-[#1c1536]">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="bg-white text-sm text-gray-700 px-4 py-2 rounded-lg shadow">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Terms;
