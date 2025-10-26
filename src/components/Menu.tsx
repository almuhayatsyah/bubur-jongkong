export default function Menu() {
  const menuItems = [
    {
      name: 'Bubur Jongkong',
      size: '300ml',
      description: 'Porsi pas untuk menikmati kelezatan bubur jongkong kami',
      price: 'Rp 15.000',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Bubur Jongkong',
      size: '500ml',
      description: 'Porsi lebih puas untuk kenikmatan yang lebih lama',
      price: 'Rp 25.000',
      image: 'https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const orderWhatsApp = (item: string, size: string) => {
    const message = `Halo Raoseco, saya ingin pesan ${item} - ${size}`;
    window.open(`https://wa.me/6282165551234?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F8F6E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Menu Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih ukuran yang sesuai dengan selera Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} ${item.size}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                  <span className="bg-[#5B833D] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {item.size}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-[#5B833D]">{item.price}</span>
                  <button
                    onClick={() => orderWhatsApp(item.name, item.size)}
                    className="bg-[#5B833D] text-white px-6 py-3 rounded-full hover:bg-[#4a6b31] transition-colors font-medium"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
