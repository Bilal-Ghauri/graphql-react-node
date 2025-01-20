import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="text-4xl font-bold">
              <a href="/" className="hover:text-indigo-200">
                Library Hub
              </a>
            </div>
            <p className="text-sm text-gray-200">
              Your go-to platform for borrowing books online. Explore a wide variety of books at your fingertips!
            </p>
          </div>
          
          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-indigo-200">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-200">Contact</a>
              </li>
              <li>
                <a href="/services" className="hover:text-indigo-200">Our Services</a>
              </li>
              <li>
                <a href="/faq" className="hover:text-indigo-200">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="hover:text-indigo-200">Help Center</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-indigo-200">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-indigo-200">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-200">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-200">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-200">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-200">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-200 text-center">
          <p>&copy; 2025 Library Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
