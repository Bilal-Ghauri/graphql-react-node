import { useState } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState(null); // This will track which FAQ item is open

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index); // Toggle between opening and closing
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Here are answers to some of the most common questions our users ask.
        </p>

        <div className="space-y-6">
          <div className="border-t border-b border-gray-200">
            <div
              className="cursor-pointer py-5 px-6 text-left flex justify-between rounded-2xl items-center "
              onClick={() => toggleAccordion(0)}
            >
              <h3 className="text-2xl font-semibold text-gray-800">How do I borrow a book?</h3>
              <span
                className={`transform transition-transform ${open === 0 ? 'rotate-180' : ''}`}
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </div>
            {open === 0 && (
              <div className="px-6 py-4 text-gray-600">
                You can borrow a book by signing up, browsing our collection, and selecting the books you want to borrow. It's that simple!
              </div>
            )}
          </div>

          <div className="border-t border-b border-gray-200">
            <div
              className="cursor-pointer py-5 px-6 text-left flex rounded-2xl justify-between items-center"
              onClick={() => toggleAccordion(1)}
            >
              <h3 className="text-2xl font-semibold text-gray-800">Is there a time limit for borrowing books?</h3>
              <span
                className={`transform transition-transform ${open === 1 ? 'rotate-180' : ''}`}
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </div>
            {open === 1 && (
              <div className="px-6 py-4 text-gray-600">
                Yes, each book can be borrowed for a duration of 14 days. You will receive a reminder email before the due date.
              </div>
            )}
          </div>

          <div className="border-t border-b border-gray-200">
            <div
              className="cursor-pointer py-5 px-6 text-left flex rounded-2xl justify-between items-center"
              onClick={() => toggleAccordion(2)}
            >
              <h3 className="text-2xl font-semibold text-gray-800">Do I need to pay to borrow books?</h3>
              <span
                className={`transform transition-transform ${open === 2 ? 'rotate-180' : ''}`}
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </div>
            {open === 2 && (
              <div className="px-6 py-4 text-gray-600">
                No, borrowing books from our platform is completely free. We aim to make books accessible to everyone.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
