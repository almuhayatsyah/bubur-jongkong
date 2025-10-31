import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/asset/images/1.jpg",
      alt: "Bubur Jongkong Premium",
    },
    {
      image: "/asset/images/2.jpg",
      alt: "Bubur Jongkong Segar",
    },
    {
      image: "/asset/images/outlet.jpg",
      alt: "Bubur Jongkong Lezat",
    },
  ];

  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6283137964440?text=Halo%20Raoseco,%20saya%20ingin%20pesan%20Bubur%20Jongkong",
      "_blank"
    );
  };

  const openGrabFood = () => {
    window.open("https://r.grab.com/g/2-1-6-C7E2SFMCG3WBTA", "_blank");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="pt-20 bg-gradient-to-b from-[#F8F6E8] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Nikmati Sensasi Kelezatan Otentik{" "}
              <span className="text-[#5B833D]">Bubur Jongkong Premium</span>{" "}
              dari Raoseco
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Nikmati sensasi 3 lapisan lumer Bubur Jongkong Raoseco! Perpaduan
              sempurna pandan wangi, santan creamy yang gurih, dan gula aren
              murni. Dilengkapi taburan jagung manis, setiap sendokan lumer di
              mulut. Dibuat fresh setiap hari, tanpa pengawet!
            </p>

            {/* TOMBOL-TOMBOL PEMESANAN */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToMenu}
                  className="bg-[#5B833D] text-white px-8 py-4 rounded-full hover:bg-[#4a6b31] transition-all font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex-1 text-center"
                >
                  Lihat Menu
                </button>
                <button
                  onClick={openWhatsApp}
                  className="bg-white text-[#5B833D] border-2 border-[#5B833D] px-8 py-4 rounded-full hover:bg-[#5B833D] hover:text-white transition-all font-medium text-lg flex-1 text-center"
                >
                  Pesan via WhatsApp
                </button>
              </div>

              {/* TOMBOL GRABFOOD BARU */}
              <button
                onClick={openGrabFood}
                className="w-full bg-gradient-to-r from-[#00B14F] to-[#00A650] text-white px-8 py-4 rounded-full hover:from-[#00A650] hover:to-[#009547] transition-all font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.148 2.971A2.008 2.008 0 0 0 17.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A3.954 3.954 0 0 0 2 9v5c0 1.103.897 2 2 2h2.638l1.812 2.843c.381.597.997.957 1.673.957h4.174c.676 0 1.292-.36 1.673-.957L17.362 16H20c1.103 0 2-.897 2-2V9c0-.548-.145-1.087-.428-1.569l-2.424-4.46zM14.092 16H9.908l-1.4-2.2-.1-.1H4V9h16v5h-4.408l-1.4 2.2-.1.1z" />
                </svg>
                Pesan via GrabFood
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-[#5B833D]" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-[#5B833D]" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20">
              <p className="text-3xl font-bold text-[#5B833D]">100%</p>
              <p className="text-gray-600 font-medium">Bahan Fresh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
