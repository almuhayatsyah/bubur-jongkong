import { Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F8F6E8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/Logo thanksyou_page-0001.jpg" alt="Raoseco Logo" className="h-16 w-auto mb-4" />
            <p className="text-gray-600">
              Kelezatan Bubur Jongkong Khas Aceh dengan Bahan Segar & Premium
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Menu</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('beranda')} className="block text-gray-600 hover:text-[#5B833D] transition-colors">
                Beranda
              </button>
              <button onClick={() => scrollToSection('menu')} className="block text-gray-600 hover:text-[#5B833D] transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection('lokasi')} className="block text-gray-600 hover:text-[#5B833D] transition-colors">
                Lokasi Kami
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/raoseco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5B833D] rounded-full flex items-center justify-center hover:bg-[#4a6b31] transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://tiktok.com/@raoseco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5B833D] rounded-full flex items-center justify-center hover:bg-[#4a6b31] transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Raoseco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
