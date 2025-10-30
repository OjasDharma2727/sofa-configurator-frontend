import React from "react";
import Footer from "../Footer/Footer";

const ProductDetailsSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-6 bg-white mt-10">
        {}
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          Product details
        </h2>

        {/*  SPECIFICATIONS SECTION */}
        <div className="border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-lg">
            <div className="font-semibold text-gray-700">
              Dimensions W × H × D
            </div>
            <div className="text-gray-800">265 × 105 × 160 cm</div>

            <div className="font-semibold text-gray-700">Finish Color</div>
            <div className="text-gray-800">Olive Green</div>

            <div className="font-semibold text-gray-700">Weight</div>
            <div className="text-gray-800">65.50 kgs</div>

            <div className="font-semibold text-gray-700">Warranty</div>
            <div className="text-gray-800">1 Year Warranty</div>
          </div>
        </div>

        {/*  PRODUCT REVIEWS SECTION */}
        <div className="mt-20">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Product reviews
            </h2>

            <button className="bg-[#FF6754] text-white px-6 py-3 rounded-lg shadow-md text-sm font-medium hover:bg-[#e15849] transition">
              Write a review
            </button>
          </div>

          {/*  QUESTIONS SECTION */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">
              How can we help you?
            </h3>

            <div className="mt-4 text-gray-600 border-b pb-4">No Questions</div>

            <p className="mt-6 text-lg font-medium">
              Have a question? Ask us here.
            </p>

            {/*  Q&A FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="md:col-span-2 flex flex-col">
                <label className="font-semibold mb-1">Name: *</label>
                <input
                  type="text"
                  className="border-b border-gray-300 focus:border-black outline-none py-2"
                  required
                />
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="font-semibold mb-1">
                  Ask your question: *
                </label>
                <textarea
                  className="border-b border-gray-300 focus:border-black outline-none py-2"
                  rows="2"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="font-semibold mb-1">Email Address: *</label>
                <input
                  type="email"
                  className="border-b border-gray-300 focus:border-black outline-none py-2"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-12 py-3 rounded-xl shadow-md border bg-white text-gray-800 font-medium hover:shadow-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {}
      <Footer />
    </>
  );
};

export default ProductDetailsSection;
