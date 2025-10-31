import { Clock, MapPin } from "lucide-react";

export default function Location() {
  const locations = [
    {
      name: "Alamat Produksi",
      address:
        "Komplek villa lamjabat, Lamjabat, Meuraxa (perumahan depan kantor keuchik lamjabat)(Nomor8)",
      schedule: "Setiap Hari",
    },
    {
      name: "Car Free Day (CFD) Banda Aceh",
      address: "Jalan Teukeu Umar,Banda Aceh)",
      schedule: "Minggu, 07.00 - 11.00 WIB",
    },
  ];

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6283137964440?text=Halo%20Raoseco,%20saya%20ingin%20pesan%20Bubur%20Jongkong",
      "_blank"
    );
  };

  const openGrabFood = () => {
    window.open("https://r.grab.com/g/2-1-6-C7E2SFMCG3WBTA", "_blank");
  };

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Temukan Kami di Sini!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Raoseco hadir di lokasi strategis untuk kemudahan Anda
          </p>
        </div>

        {/* LOKASI DENGAN SPACE ANTARA CARD */}
        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-[#F8F6E8] rounded-2xl p-8 hover:shadow-lg transition-shadow h-full"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {location.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#5B833D] rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-1">Lokasi</p>
                        <p className="text-gray-600 leading-relaxed">
                          {location.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#5B833D] rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
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
          </div>
        </div>

        {/* SECTION PEMESANAN ONLINE */}
        <div className="bg-gradient-to-r from-[#5B833D] to-[#4a6b31] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mager Keluar? Pesan Dari Rumah Saja!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Nikmati kelezatan Bubur Jongkong Raoseco tanpa harus keluar rumah
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-white text-[#5B833D] px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 min-w-[250px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411" />
              </svg>
              Pesan via WhatsApp
            </button>

            <button
              onClick={openGrabFood}
              className="bg-gradient-to-r from-[#00B14F] to-[#00A650] text-white px-8 py-4 rounded-full hover:from-[#00A650] hover:to-[#009547] transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 min-w-[250px]"
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
      </div>
    </section>
  );
}
