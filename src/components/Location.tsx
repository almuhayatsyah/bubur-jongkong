import { Clock, MapPin } from "lucide-react";

export default function Location() {
  const locations = [
    {
      name: "Car Free Day (CFD) Banda Aceh",
      address: "Jalan Teuku Umar, Banda Aceh",
      schedule: "Minggu, 07.00 - 11.00 WIB",
    },
    {
      name: "Area Blang Padang",
      address: "Lapangan Blang Padang, Banda Aceh",
      schedule: "Setiap Hari, 16.00 - 18.30 WIB",
    },
  ];

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Temukan Kami di Sini!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Raoseco hadir di dua lokasi strategis untuk kemudahan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-[#F8F6E8] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {location.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#5B833D] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Lokasi</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#5B833D] rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">
                      Jam Operasional
                    </p>
                    <p className="text-gray-600">{location.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#5B833D] to-[#4a6b31] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mager Keluar? Pesan Dari Rumah Saja!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Nikmati kelezatan Bubur Jongkong Raoseco tanpa harus keluar rumah
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/6283137964440?text=Halo%20Raoseco,%20saya%20ingin%20pesan%20Bubur%20Jongkong",
                "_blank"
              )
            }
            className="bg-white text-[#5B833D] px-10 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Pesan Sekarang via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
