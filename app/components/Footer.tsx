// Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-black text-white pt-8">
        <div className="container mx-auto px-6 md:px-12">
          {/* Top section with a message */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Stay Connected</h3>
              <p className="text-lg">
                Join our newsletter for the latest updates and offers.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                Subscribe Now
              </button>
            </div>
          </div>
  
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <i className="fab fa-facebook-f text-xl"></i> {/* Facebook Icon */}
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <i className="fab fa-twitter text-xl"></i> {/* Twitter Icon */}
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <i className="fab fa-instagram text-xl"></i> {/* Instagram Icon */}
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <i className="fab fa-linkedin-in text-xl"></i> {/* LinkedIn Icon */}
            </a>
          </div>
  
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-between mb-8">
            <div className="w-1/2 md:w-1/4 text-center md:text-left">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div className="w-1/2 md:w-1/4 text-center md:text-left">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Contact</h4>
              <p className="text-white">123 Street Name, City, Country</p>
              <p className="text-white">Email: info@example.com</p>
              <p className="text-white">Phone: +1 234 567 890</p>
            </div>
  
            {/* Newsletter Section */}
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Newsletter</h4>
              <p className="text-white">Get the latest news and updates directly in your inbox.</p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-l-md bg-gray-700 text-white w-2/3 mb-4"
                />
                <button className="bg-blue-600 p-2 rounded-r-md text-white hover:bg-blue-700 transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center">
            <p className="text-sm text-gray-40 pb-4">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  