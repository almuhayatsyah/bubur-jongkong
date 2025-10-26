import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bubur Jongkong Original'
    },
    {
      url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bubur Jongkong Premium'
    },
    {
      url: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bubur Jongkong Special'
    },
    {
      url: 'https://images.pexels.com/photos/1635352/pexels-photo-1635352.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bubur Jongkong Deluxe'
    }
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
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {!showVideo ? (
            <div
              className="relative cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <div className="aspect-video">
                <img
                  src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Play className="w-12 h-12 text-[#5B833D] fill-[#5B833D]" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Proses Pembuatan Bubur Jongkong</h3>
                <p className="text-lg opacity-90">Lihat bagaimana kami membuat Bubur Jongkong dengan bahan-bahan segar</p>
              </div>
            </div>
          ) : (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Produk Raoseco"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
