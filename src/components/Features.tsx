import { Leaf, Award, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: '100% Bahan Fresh',
      description: 'Menggunakan bahan-bahan segar pilihan setiap hari untuk kualitas terbaik'
    },
    {
      icon: Award,
      title: 'Rasa Premium Otentik',
      description: 'Resep tradisional yang telah dipercaya dengan cita rasa khas Aceh'
    },
    {
      icon: Shield,
      title: 'Kualitas Terjaga & Higienis',
      description: 'Diproses dengan standar kebersihan tinggi untuk kepuasan Anda'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Selalu Istimewa Untuk Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami adalah menghadirkan bubur jongkong berkualitas premium dengan cita rasa autentik
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-[#F8F6E8] hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5B833D] rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
