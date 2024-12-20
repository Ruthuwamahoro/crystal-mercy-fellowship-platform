import * as React from "react";
import { useState, useEffect } from "react";
import { GoDot } from "react-icons/go";
import Image from "next/image";

const testimonials = [
  { name: "Aline Ikuzwe", image: "https://i.pinimg.com/564x/cb/c4/0a/cbc40a7e9a2c5afb2649621f523e18f4.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Ange Uwimana", image: "https://i.pinimg.com/enabled_lo/564x/81/58/04/815804fc1979d317a7a70686fdcc1f20.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Robert Kwizera", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Iradukunda Johnson", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Bizimana Charlie", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" },
  { name: "Uwase Diana", image: "https://i.pinimg.com/564x/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ad, amet voluptas praesentium suscipit debitis voluptatibus, iure eveniet cupiditate aperiam!" }
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const start = currentSlide * 2;
    return testimonials.slice(start % testimonials.length, start % testimonials.length + 2); // Cycle back after the last testimonials
  };

  return (
    <div className="text-center space-y-10 py-10 bg-gray-50">
      <h5 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h5>

      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-1000 ease-in-out transform`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/2 flex items-center justify-center px-6"
            >
              <div className="flex items-center space-x-8">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-blue-500"
                />
                <div className="text-left">
                  <h6 className="text-lg font-bold text-gray-800">{testimonial.name}</h6>
                  <hr className="w-20 border-gray-300 my-2" />
                  <blockquote className="text-gray-600 italic max-w-xs leading-relaxed">
                    “{testimonial.quote}”
                  </blockquote>
                  <strong className="block text-gray-800 mt-2">- {testimonial.name}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {[0, 1, 2].map((dotIndex) => (
          <GoDot
            key={dotIndex}
            size={30}
            className={`cursor-pointer ${
              currentSlide === dotIndex ? "text-pink-500" : "text-gray-400"
            }`}
            onClick={() => setCurrentSlide(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
}
