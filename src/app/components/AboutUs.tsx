import * as React from "react";

export function AboutUs() {
  return (
    <section data-aos="fade-up" className="my-16 px-6 md:px-0 w-full mx-auto">
      <div className="bg-gray-200 rounded-lg py-12 px-6 text-black animate-fadeInSlow">
        <h2 className="text-5xl font-bold mb-8 text-center tracking-wide animate-slideInDown">
          Our Mission to Help
        </h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-center animate-fadeInSlow">
          Welcome to <span className="font-semibold">Crystal Mercy Fellowship</span>, where every child’s future is our priority, and every sermon spreads the light of hope. 
          We believe in empowering communities by supporting the next generation and spreading the teachings of compassion and faith.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-100 animate-slideInUp">
          <h3 className="text-3xl font-semibold mb-4 text-pink-500">Our Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            We are committed to improving the lives of children in need by providing education, resources, and love. 
            Our mission is deeply rooted in the belief that every child deserves the opportunity to grow, learn, and experience kindness.
          </p>
        </div>

        <div className="p-8 bg-gray-50 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-100 animate-slideInUp">
          <h3 className="text-3xl font-semibold mb-4 text-pink-500">Our Approach</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Through preaching and community support, we not only nourish the soul but also ensure children are nurtured and protected. 
            We provide spiritual guidance along with practical help for those in need.
          </p>
        </div>

        <div className="p-8 bg-gray-50 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-100 animate-slideInUp">
          <h3 className="text-3xl font-semibold mb-4 text-pink-500">Our Values</h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-900">
            <li><span className="font-semibold text-pink-500">Compassion</span>: We lead with love and empathy, ensuring no child is left behind.</li>
            <li><span className="font-semibold text-pink-500">Faith</span>: Through the power of faith, we spread hope and strength to all who need it.</li>
            <li><span className="font-semibold text-pink-500">Community</span>: We build strong communities where everyone has a place, and support is always available.</li>
          </ul>
        </div>

        <div className="p-8 bg-gray-50 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-100 animate-slideInUp">
          <h3 className="text-3xl font-semibold mb-4 text-pink-500">Why Support Us</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            By supporting <span className="font-semibold text-pink-500">Crystal Mercy Fellowship</span>, you are not only helping children in need but also spreading faith and hope to entire communities. 
            Together, we can make a profound impact in the lives of those who need it most.
          </p>
        </div>
      </div>
    </section>
  );
}
