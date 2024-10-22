import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ImageCarousel } from '@/app/components/ImageSlider'
import { ButtonHover1, ButtonHover11 } from '@/app/components/Button'

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-white w-3/4">
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-8 flex flex-col">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
              Justice begins where inequality ends
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We&lsquo;re dedicated to creating a world where everyone has equal opportunities and rights.
            </p>
            <div className='flex'>
              {/* <Button variant="outline" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md flex hover:bg-gray-500 hover:text-white">
                          Donate now
              </Button> */}
              <ButtonHover1 />
              
              {/* <Button variant="outline" className="border-pink-500 text-pink-500 px-6 py-3 mx-6 rounded-full hover:scale-105 transition-transform shadow-md">
                  Get in touch
                  <FaArrowRight size={15} className="ml-2" />
              </Button> */}
              <ButtonHover11 />

            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[500px]">
              {/* Background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full"></div>
              
              {/* Overlapping image containers */}
              <div className="absolute top-10 left-10 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-lg animate-float">
                <Image 
                  src="https://i.pinimg.com/564x/ac/2b/9b/ac2b9b9afa498ecb45b9c2ebfc09e9ef.jpg" 
                  alt="People representing justice and equality" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bottom-10 left-60 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg">
                {/* <Image 
                  src="https://i.pinimg.com/564x/b8/30/a5/b830a56ac71b299ac5fcc0e721a3e30f.jpg" 
                  alt="People representing justice and equality" 
                  layout="fill"
                  objectFit="cover"
                /> */}
                <ImageCarousel />
              </div>
              
              {/* Decorative elements */}
              {/* <div className="absolute top-0 bottom-5 w-16 h-16 bg-green-400 rounded-full"></div> */}
              <div className="absolute top-5 w-10 h-10 bg-orange-400 rounded-full"></div>
              <div className="absolute bottom-5 right-20 w-6 h-6 bg-blue-400 rounded-full"></div>
              <div className="absolute top-1/2 right-0 w-16 h-16 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
