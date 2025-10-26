export default function Gallery() {
  const images = [
    {
      url: "/asset/images/1.jpg",
      title: "Bubur Jongkong Original",
    },
    {
      url: "/asset/images/2.jpg",
      title: "Bubur Jongkong Premium",
    },
    {
      url: "/asset/images/4.jpg",
      title: "Bubur Jongkong Special",
    },
    {
      url: "/asset/images/outlet.jpg",
      title: "Outlet Raoseco",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Galeri <span className="text-[#5B833D]">Produk Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat kelezatan dan kesegaran Bubur Jongkong Raoseco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
