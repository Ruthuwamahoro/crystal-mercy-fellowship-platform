import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, DollarSign, BookOpen, GraduationCap, Church, Check, Heart } from 'lucide-react';
import { DialogDemo } from './prof';

const DonationPage = () => {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const menuRef = useRef<HTMLSpanElement>(null);

  const predefinedAmounts = [25, 50, 100, 250];

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowThankYou(true);
  };

  const isValidAmount = () => {
    const numAmount = Number(amount);
    console.log("this is amount", amount)
    return numAmount > 0;
  };
  const getAmountInCents = () => Number(amount) * 1;

  return (
    <div className="min-h-screen text-gray-800 flex items-center justify-center p-4 bg-gray-100" data-aos="fade-up">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="lg:w-3/5 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/564x/d3/6d/40/d36d402277c4a3e80405d8983e06467b.jpg)`,
              filter: 'brightness(50%)'
            }}
          ></div>
          <div className="relative z-10 p-10 h-full flex flex-col justify-center bg-gray-900">
            <h1 className="text-5xl font-bold mb-6 text-white">Empowering Children Through Christ</h1>
            <p className="text-xl mb-8 text-gray-200">Your donation brings hope, education, and faith to those in need.</p>
            <div className="space-y-6">
              {[
                { icon: GraduationCap, text: "Provide school fees for underprivileged children" },
                { icon: BookOpen, text: "Supply essential school materials and resources" },
                { icon: Church, text: "Support Christian education and spiritual growth" }
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white/20 p-4 rounded-lg transition-all duration-300 hover:bg-white/30 hover:translate-x-2">
                  <item.icon className="h-8 w-8 mr-4 text-pink-300" />
                  <span className="text-lg text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 p-8 bg-white relative overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Donate in Faith</h2>
            <p className="mt-2 text-gray-600 italic">
              &quot;Whoever is kind to the poor lends to the LORD, and he will reward them for what they have done.&quot; - Proverbs 19:17
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleDonate}>
            <div>
              <label htmlFor="amount" className="block text-lg font-medium text-gray-700 mb-2">
                Blessing Amount
              </label>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {predefinedAmounts.map((presetAmount) => (
                  <button
                    key={presetAmount}
                    type="button"
                    className={`py-2 px-4 rounded-md text-lg font-medium transition-all duration-200 ${
                      selectedAmount === presetAmount
                        ? 'bg-gray-900 text-white scale-105'
                        : 'bg-gray-200 text-gray-800 hover:bg-purple-100 hover:scale-105'
                    }`}
                    onClick={() => {
                      setSelectedAmount(presetAmount);
                      setAmount(presetAmount.toString());
                    }}
                  >
                    ${presetAmount}
                  </button>
                ))}
              </div>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  required
                  className="block w-full pl-10 pr-12 py-3 rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
            </div>
            <DialogDemo amount={isValidAmount() ? getAmountInCents() : 1000}>
              <span className="hidden" ref={menuRef}>
                Click
              </span>
            </DialogDemo>
            <span onClick={() => isValidAmount() && menuRef.current?.click()}>
              <button
                type="submit"
                disabled={!isValidAmount() || isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${
                  isValidAmount()
                    ? 'bg-pink-500 hover:bg-gray-500'
                    : 'bg-pink-500 cursor-not-allowed'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ${
                  isSubmitting ? 'opacity-75' : ''
                }`}
              >
                <Heart className="h-6 w-6 mr-2" />
                Give Now
              </button>
            </span>
          </form>
          <div className="mt-6 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              <span>Your donation is 100% secure and encrypted</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              <span>Tax-deductible receipt will be emailed to you</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
