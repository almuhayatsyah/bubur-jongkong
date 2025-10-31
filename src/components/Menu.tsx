import { X } from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const menuItems = [
    {
      name: "Bubur Jongkong",
      size: "300ml",
      description:
        "Cocok untuk camilan penuh kenikmatan. Rasa autentik dalam porsi praktis yang pas untuk sekali santap",
      price: "Rp 10.000",
      image: "/asset/images/1.jpg",
    },
    {
      name: "Bubur Jongkong",
      size: "500ml",
      description:
        "Porsi sempurna untuk berbagi kebahagiaan. Nikmati kelezatan yang lebih lengkap dan memuaskan",
      price: "Rp 15.000",
      image: "/asset/images/2.jpg",
    },
    {
      name: "Bubur Jongkong",
      size: "1000ml",
      description:
        "Spesial untuk momen berkumpul bersama. Cita rasa legendaris dalam kemasan besar untuk kebersamaan",
      price: "Rp 25.000",
      image: "/asset/images/5.jpg",
    },
  ];

  const orderWhatsApp = (item: string, size: string) => {
    const message = `Halo Raoseco, saya ingin pesan ${item} - ${size}`;
    window.open(
      `https://wa.me/6283137964440?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="menu"
      className="py-12 md:py-20 bg-gradient-to-b from-white to-[#F8F6E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Menu Andalan Kami
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Setiap ukuran menghadirkan pengalaman rasa yang berbeda, sesuaikan
            dengan momen spesial Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={`${item.name} ${item.size}`}
                  onClick={() => setSelectedImage(item.image)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="bg-[#5B833D] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.size}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xl font-bold text-[#5B833D]">
                    {item.price}
                  </span>
                  <button
                    onClick={() => orderWhatsApp(item.name, item.size)}
                    className="bg-[#5B833D] text-white px-5 py-2 rounded-full hover:bg-[#4a6b31] transition-colors font-medium text-sm"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
