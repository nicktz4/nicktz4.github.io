import { ImageWithFallback } from './ImageWithFallback';
import astritsiImage from '../../imports/astritsi.jpg';

const galleryImages = [
  {
    id: 1,
    src: astritsiImage,
    title: 'Το χωριό Αστρίτσι',
    description: ''
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">Φωτογραφίες</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">Προσεχώς περισσότερες φωτογραφίες...</p>
        </div>
      </div>
    </section>
  );
}
