import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6283137964440?text=Halo%20Raoseco,%20saya%20ingin%20pesan%20Bubur%20Jongkong",
      "_blank"
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img
              src="/Logo thanksyou_page-0001.jpg"
              alt="Raoseco Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-[#5B833D]">Raoseco</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("beranda")}
              className="text-gray-700 hover:text-[#5B833D] transition-colors font-medium"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 hover:text-[#5B833D] transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("lokasi")}
              className="text-gray-700 hover:text-[#5B833D] transition-colors font-medium"
            >
              Lokasi Kami
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-[#5B833D] text-white px-6 py-2.5 rounded-full hover:bg-[#4a6b31] transition-colors font-medium"
            >
              Pesan via WhatsApp
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("beranda")}
              className="block w-full text-left text-gray-700 hover:text-[#5B833D] transition-colors font-medium py-2"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left text-gray-700 hover:text-[#5B833D] transition-colors font-medium py-2"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("lokasi")}
              className="block w-full text-left text-gray-700 hover:text-[#5B833D] transition-colors font-medium py-2"
            >
              Lokasi Kami
            </button>
            <button
              onClick={openWhatsApp}
              className="w-full bg-[#5B833D] text-white px-6 py-2.5 rounded-full hover:bg-[#4a6b31] transition-colors font-medium"
            >
              Pesan via WhatsApp
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
