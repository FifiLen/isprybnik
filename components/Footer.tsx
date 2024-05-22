import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Sekcja Nawigacja */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">Nawigacja</h2>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-400">Strona główna</a></li>
              <li><a href="#oferta" className="hover:text-gray-400">Oferta</a></li>
              <li><a href="#rekrutacja" className="hover:text-gray-400">Rekrutacja</a></li>
              <li><a href="#faq" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="#kontakt" className="hover:text-gray-400">Kontakt</a></li>
            </ul>
          </div>

          {/* Sekcja Kontakt */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <address className="not-italic">
              Instytut Studiów Podyplomowych<br />
              ul. Przykładowa 123, 00-001 Rybnik<br />
              Telefon: <a href="tel:+48123456789" className="hover:text-gray-400">+48 123 456 789</a><br />
              Email: <a href="mailto:kontakt@isp-rybnik.pl" className="hover:text-gray-400">kontakt@isp-rybnik.pl</a>
            </address>
          </div>

          {/* Sekcja Media Społecznościowe */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">Media Społecznościowe</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Sekcja Informacje o Prawach Autorskich */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Informacje</h2>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Instytut Studiów Podyplomowych. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Instytut Studiów Podyplomowych. Wszelkie prawa zastrzeżone.</p>
          <ul className="flex space-x-4 mt-4 sm:mt-0">
            <li><a href="#polityka-prywatnosci" className="hover:text-gray-400 text-sm">Polityka prywatności</a></li>
            <li><a href="#regulamin" className="hover:text-gray-400 text-sm">Regulamin</a></li>
            <li><a href="#kontakt" className="hover:text-gray-400 text-sm">Kontakt</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;