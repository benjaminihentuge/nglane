import React, { useState } from 'react';

const Footer = () => {
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);
  const [isConnectOpen, setConnectOpen] = useState(false);

  return (
    <footer className="bg-gray-100 text-gray-700 p-4 md:p-8">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <a href="#" className="hover:underline text-sm">
            Need help? Chat with us
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          {/* Account Section */}
          <div>
            {/* Toggle button for small screens */}
            <button 
              className="w-full flex justify-between items-center font-bold mb-2 md:hidden" 
              onClick={() => setAccountOpen(!isAccountOpen)}
            >
              Account
              <span>{isAccountOpen ? '-' : '+'}</span>
            </button>
            {/* Heading for large screens */}
            <h4 className="font-bold mb-2 hidden md:block">Account</h4>
            <ul className={`md:block ${isAccountOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="hover:underline">Log In</a></li>
              <li><a href="#" className="hover:underline">Sign Up</a></li>
              <li><a href="#" className="hover:underline">Redeem a Gift Card</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            {/* Toggle button for small screens */}
            <button 
              className="w-full flex justify-between items-center font-bold mb-2 md:hidden" 
              onClick={() => setCompanyOpen(!isCompanyOpen)}
            >
              Company
              <span>{isCompanyOpen ? '-' : '+'}</span>
            </button>
            {/* Heading for large screens */}
            <h4 className="font-bold mb-2 hidden md:block">Company</h4>
            <ul className={`md:block ${isCompanyOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Environmental Initiatives</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">International</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            {/* Toggle button for small screens */}
            <button 
              className="w-full flex justify-between items-center font-bold mb-2 md:hidden" 
              onClick={() => setHelpOpen(!isHelpOpen)}
            >
              Get Help
              <span>{isHelpOpen ? '-' : '+'}</span>
            </button>
            {/* Heading for large screens */}
            <h4 className="font-bold mb-2 hidden md:block">Get Help</h4>
            <ul className={`md:block ${isHelpOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
              <li><a href="#" className="hover:underline">Shipping Info</a></li>
              <li><a href="#" className="hover:underline">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            {/* Toggle button for small screens */}
            <button 
              className="w-full flex justify-between items-center font-bold mb-2 md:hidden" 
              onClick={() => setConnectOpen(!isConnectOpen)}
            >
              Connect
              <span>{isConnectOpen ? '-' : '+'}</span>
            </button>
            {/* Heading for large screens */}
            <h4 className="font-bold mb-2 hidden md:block">Connect</h4>
            <ul className={`md:block ${isConnectOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Our Stores</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold mb-2">Newsletter</h4>
            <form>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="p-2 border rounded-l-md w-3/4"
              />
              <button className="bg-black text-white p-2 rounded-r-md">
                &rarr;
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8 text-sm">
          <div className="mb-4">
            <span role="img" aria-label="Nigeria flag">🇳🇬</span> Nigeria
          </div>

          <ul className="flex justify-center space-x-4 mb-4">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/donotshare" className="hover:underline">Do Not Sell or Share My Personal Information</a></li>
          </ul>

          <p>&copy; 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
