"use client";
import { FirstTopNav } from "./components/TopNav";
import { FocusDescription } from "@/app/components/FocusDescription";
import { Testimonials } from "./components/Testimonials";
import { LandingPage } from "./components/LandingPage";
import { AboutUs } from "./components/AboutUs";
import { FooterLinks } from "./components/Footer";
import { ContactUs } from "./components/ContactUs";
import { Payment } from "./components/payment";
import DonationPage from "./components/donation";

export default function Pages() {
  return (
    <div className="flex flex-col">
      <FirstTopNav />

      <div id="home" className="flex flex-col items-center pt-10">
        <LandingPage />
      </div>

      <section id="focus" className="py-12 bg-white">
        <div className="container mx-auto px-4 rounded-2xl">
          <FocusDescription />
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AboutUs />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-accent-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">What Our Clients Say</h2>
          <Testimonials />
        </div>
      </section>

      <div className="bg-gray-100">
        <section id="donate" className="bg-accent-light text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold pt-10 text-black italic ">Lets Make a Difference Together</h2>
            <DonationPage />
          </div>
        </section>
        <section id="contact" className="py-10 bg-accent-light text-white">
          <div className="container mx-auto px-4">
            <ContactUs />
          </div>
        </section>

      </div>
      {/* <section className="py-10 bg-accent-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
          <Payment />
        </div>
      </section> */}

      <FooterLinks />
    </div>
  );
}
