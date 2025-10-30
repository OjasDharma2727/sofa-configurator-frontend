import React, { useState } from "react";

const FiChevronRight = ({ onClick }) => (
  <svg
    onClick={onClick}
    className="cursor-pointer w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const FiChevronLeft = ({ onClick }) => (
  <svg
    onClick={onClick}
    className="cursor-pointer w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const slides = [
  {
    id: 1,
    title: "Recline how you feel",
    desc: "Our dual motors let you independently adjust the back up to 134 degrees as well as the footrest—because comfort isn't one-size-fits-all.",
    img: "/images/image1.webp",
    smallImg: "/images/image2.webp",
    caption: "We soften your day, your way",
  },
  {
    id: 2,
    title: "Leather that lasts",
    desc: "Premium leather that stays soft, crack-free and comfortable for years, even with daily use.",
    img: "/images/image10.webp",
    smallImg: "/images/sofa.webp",
    caption: "Premium comfort everyday",
  },
  {
    id: 3,
    title: "Ultimate seating comfort",
    desc: "Memory foam layered with high-resilience cushioning gives you the perfect support and sink-in feeling.",
    img: "/images/image9.webp",
    smallImg: "/images/image5.webp",
    caption: "Comfort designed right",
  },
];

const ProductWhyCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-white py-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] max-w-7xl mx-auto items-start gap-x-12">
        <img
          src={slides[index].img}
          alt=""
          className="rounded-lg w-full max-w-2xl shadow-md"
        />

        <div className="flex flex-col items-start text-left pt-10">
          <img
            src={slides[index].smallImg}
            className="w-36 h-24 object-cover rounded-lg shadow-lg mb-3"
            alt=""
          />
          <p className="text-[10px] text-gray-500 mb-5">
            {slides[index].caption}
          </p>

          <h2 className="text-3xl font-bold mb-4">{slides[index].title}</h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            {slides[index].desc}
          </p>

          <div className="flex items-center gap-6">
            <FiChevronLeft
              onClick={() =>
                setIndex((index - 1 + slides.length) % slides.length)
              }
            />
            <FiChevronRight
              onClick={() => setIndex((index + 1) % slides.length)}
            />

            <div className="flex gap-2 ml-6">
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === i ? "bg-[#E15E4A] w-6" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWhyCarousel;
