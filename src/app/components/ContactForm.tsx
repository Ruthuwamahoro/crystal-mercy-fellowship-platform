// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, User, MessageCircle } from "lucide-react";

// export function ContactForm() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   return (
//     // <div className="max-w-2xl">
//         // <h4 className="text-black">Send your message</h4>
//         <Card className="w-full max-w-xl mx-auto border-none rounded-xl bg-gray-50 p-12">
//         <CardHeader className="text-center mb-6">
//         <CardDescription className="text-gray-800 text-lg lg:text-xl font-semibold leading-relaxed tracking-wide">
//             We&rsquo;d love to hear from you! Fill out the form below.
//         </CardDescription>
//         </CardHeader>

//         <form>
//             <CardContent className="grid gap-8">
//             {/* Name Field */}
//             <div className="grid gap-2">
//                 <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 font-medium">
//                 <User className="text-blue-500" size={18} /> Your Name
//                 </Label>
//                 <Input
//                 id="name"
//                 type="text"
//                 aria-label="Your Name"
//                 placeholder="John Doe"
//                 value={formState.name}
//                 onChange={handleChange}
//                 className="px-4 py-3 rounded-md border-gray-300 text-gray-700 shadow-inner bg-gray-100 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
//                 />
//             </div>

//             {/* Email Field */}
//             <div className="grid gap-2">
//                 <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-medium">
//                 <Mail className="text-blue-500" size={18} /> Your Email
//                 </Label>
//                 <Input
//                 id="email"
//                 type="email"
//                 aria-label="Your Email"
//                 placeholder="you@example.com"
//                 value={formState.email}
//                 onChange={handleChange}
//                 className="px-4 py-3 rounded-md border-gray-300 shadow-inner bg-gray-100 text-gray-700 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
//                 />
//             </div>

//             {/* Message Field */}
//             <div className="grid gap-2">
//                 <Label htmlFor="message" className="flex items-center gap-2 text-gray-700 font-medium">
//                 <MessageCircle className="text-blue-500" size={18} /> Your Message
//                 </Label>
//                 <Textarea
//                 id="message"
//                 aria-label="Your Message"
//                 placeholder="How can we help?"
//                 value={formState.message}
//                 onChange={handleChange}
//                 rows={6}
//                 className="px-4 py-3 rounded-md border-gray-300 shadow-inner bg-gray-100 text-gray-700 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
//                 />
//             </div>
//             </CardContent>

//             <CardFooter className="pt-8">
//             <Button
//                 type="submit"
//                 className="w-full bg-pink-500 text-white py-3 px-5 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl"
//             >
//                 Send Message
//             </Button>
//             </CardFooter>
//         </form>
//         </Card>
//     // </div>
//   );
// }
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    const { name, email, message } = formState;

    // Create email body
    const emailBody = `
      Name: ${name}\n
      Email: ${email}\n
      Message: ${message}
    `;

    // Sending email logic (using an email sending service)
    try {
      const response = await fetch("https://api.your-email-service.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "uwamarith@gmail.com", // Receiver's email
          subject: `New message from ${name}`, // Subject
          text: emailBody, // Email body
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormState({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto border-none rounded-xl bg-gray-50 p-12">
      <CardHeader className="text-center mb-6">
        <CardDescription className="text-gray-800 text-lg lg:text-xl font-semibold leading-relaxed tracking-wide">
          We’d love to hear from you! Fill out the form below.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-8">
          {/* Name Field */}
          <div className="grid gap-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 font-medium">
              <User className="text-blue-500" size={18} /> Your Name
            </Label>
            <Input
              id="name"
              type="text"
              aria-label="Your Name"
              placeholder="John Doe"
              value={formState.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-md border-gray-300 text-gray-700 shadow-inner bg-gray-100 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
            />
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-medium">
              <Mail className="text-blue-500" size={18} /> Your Email
            </Label>
            <Input
              id="email"
              type="email"
              aria-label="Your Email"
              placeholder="you@example.com"
              value={formState.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-md border-gray-300 shadow-inner bg-gray-100 text-gray-700 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
            />
          </div>

          {/* Message Field */}
          <div className="grid gap-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-gray-700 font-medium">
              <MessageCircle className="text-blue-500" size={18} /> Your Message
            </Label>
            <Textarea
              id="message"
              aria-label="Your Message"
              placeholder="How can we help?"
              value={formState.message}
              onChange={handleChange}
              rows={6}
              className="px-4 py-3 rounded-md border-gray-300 shadow-inner bg-gray-100 text-gray-700 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
            />
          </div>
        </CardContent>

        <CardFooter className="pt-8">
          <Button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 px-5 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl"
          >
            Send Message
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
