import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../assets/logo192.png"; // ✅ fixed path

const Footer = () => {
  return (
    <footer className="bg-[#3B3636] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-600">
          {/* Brand Section */}
          <div className="col-span-1">
            <img src={Logo} alt="Interio Logo" className="h-14 mb-6" />
            <h4 className="text-sm font-medium mb-3">Follow us on</h4>
            <div className="flex gap-4">
              <FaFacebookF className="cursor-pointer hover:text-white" />
              <FaInstagram className="cursor-pointer hover:text-white" />
              <FaPinterestP className="cursor-pointer hover:text-white" />
              <FaYoutube className="cursor-pointer hover:text-white" />
              <FaLinkedinIn className="cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Design philosophy</li>
              <li>Design process</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>Interio in media</li>
              <li>Media Assets</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Modular kitchens</li>
              <li>Blogs</li>
              <li>After purchase services</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>FAQ's</li>
              <li>Delivery & shipment</li>
              <li>Warranty information</li>
              <li>Return & replacement</li>
              <li>Terms & conditions</li>
              <li>Shipping</li>
              <li>Payment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact us</li>
              <li>Request a call back</li>
              <li>Store locator</li>
              <li>Become a dealer</li>
              <li>Services</li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-10 border-b border-gray-600">
          <h4 className="text-xl font-semibold mb-4 text-white">
            Categories you love
          </h4>
          <p className="text-sm leading-7">
            Living room: Sofa & loungers | Tables | Chairs | Cabinets | …<br />
            Bedroom: Beds | Wardrobes | Mattresses | …<br />
            Dining room: Dining tables | Chairs | …<br />
            Kitchen | Office | Decor | More…
          </p>
        </div>

        {/* Store Locations */}
        <div className="py-10 border-b border-gray-600">
          <h4 className="text-xl font-semibold mb-4 text-white">
            Visit your nearest stores in your city
          </h4>
          <p className="text-sm leading-7">
            Ahmedabad | Bengaluru | Mumbai | Chennai | Delhi | Pune | … and more
            🚩
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400 pt-6">
          <p>© Interio by Godrej, A Godrej Enterprises Group 2025</p>
          <div className="flex gap-6">
            <p className="cursor-pointer hover:text-white">Privacy policy</p>
            <p className="cursor-pointer hover:text-white">Cookie policy</p>
            <p className="cursor-pointer hover:text-white">Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
