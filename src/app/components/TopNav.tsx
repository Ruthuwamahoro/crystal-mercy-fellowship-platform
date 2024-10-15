import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import Image from 'next/image';

export function FirstTopNav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b' : ''}`}>
                        <div className={`flex flex-col md:flex-row items-center justify-between py-3 px-6 border-b bg-white transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                 <div className="flex items-center space-x-4">
                     <Image src="https://static.vecteezy.com/system/resources/thumbnails/005/520/837/small_2x/letter-x-logo-initial-with-circle-shape-swoosh-alphabet-logotype-simple-and-minimalist-free-vector.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
                     <p className="text-lg font-semibold text-gray-800">Crystal Mercy Fellowship</p>
                 </div>
                 <div className="flex items-center space-x-4 mt-3 md:mt-0">
                     <p className="flex items-center text-gray-600">
                         <MapPin size={18} />
                         <span className="ml-2">Kigali, Rwanda</span>
                     </p>
                     <div className="w-px h-6 bg-gray-300"></div>
                     <p className="flex items-center text-gray-600">
                         <Phone size={18} />
                         <span className="ml-2">0788888888</span>
                     </p>
                 </div>
             </div>

            {/* Main Navigation */}
            <div className={`flex items-center justify-between py-4 px-6 bg-white ${isScrolled ? 'py-2' : ''} transition-all duration-300`}>
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <div className='px-5'>
                        <p className={`text-lg font-semibold text-gray-800 ${isScrolled ? 'text-base' : ''}`}>CMF</p>
                        <p className={`text-sm text-gray-500 ${isScrolled ? 'hidden' : 'block'}`}>Making Disciples of Jesus Christ</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    {['Home', 'Our Focus', 'About Us', 'Services', 'Events', 'Contact Us'].map((item) => (
                        <a key={item} href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Call to Action / Donate */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block text-gray-700">
                        <p className={`text-lg font-semibold ${isScrolled ? 'text-base' : ''}`}>Join Us Today</p>
                        <p className="text-sm text-gray-500">Be a part of the mission</p>
                    </div>
                    <Button variant="outline" className="bg-pink-500 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition">
                        Donate
                    </Button>
                </div>
            </div>
        </div>
    );
}
// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin } from "lucide-react";
// import Image from 'next/image';

// export function FirstTopNav() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 100);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className={`w-full shadow-md transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white border-b' : ''}`}>
//             {/* Top Info Bar */}
//             <div className={`flex flex-col md:flex-row items-center justify-between py-3 px-6 border-b bg-white transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
//                 <div className="flex items-center space-x-4">
//                     <Image src="https://static.vecteezy.com/system/resources/thumbnails/005/520/837/small_2x/letter-x-logo-initial-with-circle-shape-swoosh-alphabet-logotype-simple-and-minimalist-free-vector.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
//                     <p className="text-lg font-semibold text-gray-800">Crystal Mercy Fellowship</p>
//                 </div>
//                 <div className="flex items-center space-x-4 mt-3 md:mt-0">
//                     <p className="flex items-center text-gray-600">
//                         <MapPin size={18} />
//                         <span className="ml-2">Kigali, Rwanda</span>
//                     </p>
//                     <div className="w-px h-6 bg-gray-300"></div>
//                     <p className="flex items-center text-gray-600">
//                         <Phone size={18} />
//                         <span className="ml-2">0788888888</span>
//                     </p>
//                 </div>
//             </div>

//             {/* Main Navigation */}
//             <div className="flex items-center justify-between py-4 px-6 bg-white">
//                 {/* Company Name */}
//                 <div className="text-lg font-semibold text-gray-800">
//                     CMF
//                     <p className="text-sm text-gray-500">Making Disciples of Jesus Christ</p>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className="hidden md:flex space-x-6">
//                     {['Home', 'Our Focus', 'About Us', 'Testimonials', 'Portfolio', 'Contact Us'].map((item) => (
//                         <a key={item} href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
//                             {item}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Donate Button */}
//                 <div className="flex items-center space-x-4">
//                     <div className="hidden md:block text-gray-700">
//                         <p className="text-lg font-semibold">Call to Action</p>
//                         <p className="text-sm text-gray-500">Subtitle here</p>
//                     </div>
//                     <Button variant="outline" className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition">
//                         Donate
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

