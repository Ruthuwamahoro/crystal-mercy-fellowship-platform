import Image from 'next/image';

export function ResizableDemo({
  image,
  title,
  content,
  bibleVerse
}: {
  image: string;
  title: string;
  content: string;
  bibleVerse: string;
}) {
  return (
    <div
      data-aos="fade-up"
      className="w-[500px] p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
    >
      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <div className="relative w-24 h-24">
          <Image
            src={image}
            alt="Card image"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-md border-2 border-white"
          />
        </div>
      </div>

      {/* Content Section */}
      <h2 className="text-lg font-bold text-gray-800 text-center mb-2">{title}</h2>
      <p className="text-gray-600 text-center mb-4">{content}</p>
      <blockquote className="p-4 border-l-4 border-blue-300 bg-white/80 italic text-gray-700">
        {bibleVerse}
      </blockquote>
    </div>
  );
}
