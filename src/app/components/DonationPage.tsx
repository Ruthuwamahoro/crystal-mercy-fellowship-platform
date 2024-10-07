import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa';

const DonationPage = () => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setMessage(`Thank you for your generous donation of $${amount}!`);
        setAmount('');
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-white text-black">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate__animated animate__fadeInDown">
                Donate to Change Lives
            </h1>
            <p className="text-lg sm:text-xl mb-10 animate__animated animate__fadeIn">
                Your contribution helps us make a difference in the lives of those in need.
            </p>

            {submitted ? (
                <div className="bg-gray-200 p-10 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 animate__animated animate__zoomIn">
                    <h2 className="text-3xl font-semibold mb-4">{message}</h2>
                    <Button variant="outline" className="bg-pink-500 text-white px-6 py-3 rounded-full">
                        Go Back
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleDonationSubmit} className="bg-gray-200 p-10 rounded-lg shadow-lg w-full max-w-md transform transition-transform hover:scale-105 animate__animated animate__fadeIn">
                    <label className="block mb-4">
                        <span className="text-sm font-bold">Donation Amount:</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            placeholder="Enter amount"
                            className="mt-1 block w-full rounded-md bg-gray-300 text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-sm font-bold">Message (optional):</span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write a message..."
                            className="mt-1 block w-full rounded-md bg-gray-300 text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </label>

                    <Button
                        type="submit"
                        variant="outline"
                        className="bg-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md"
                    >
                        Donate Now <FaArrowRight className="ml-2" />
                    </Button>
                </form>
            )}
        </div>
    );
};

export default DonationPage;
