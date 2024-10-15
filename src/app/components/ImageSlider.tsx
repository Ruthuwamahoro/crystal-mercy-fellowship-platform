import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (plugin.current) {
      console.log("Autoplay plugin initialized");
    }
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className=""
    >
      <CarouselContent>
        {[
          "https://i.pinimg.com/originals/27/7d/b8/277db862272d857e336605fb44d4eb9e.jpg",
          "https://i.pinimg.com/564x/b8/30/a5/b830a56ac71b299ac5fcc0e721a3e30f.jpg",
          // "https://i.pinimg.com/564x/7d/77/2c/7d772c85e491e2ef4e89499dc90220ff.jpg",
        ].map((src, index) => (
          <CarouselItem key={index} className="relative">
            <div className="p-4 flex justify-center">
              <div className="w-full h-[400px] md:h-[600px]">
              <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded-lg shadow-xl object-cover transition-all duration-500 ease-in-out opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-2xl"
                  // style={{
                  //     clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 98% 100%, 50% 98%)',
                  // }}
              />

              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
