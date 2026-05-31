import { Sprout } from 'lucide-react';

export function CooperativeSection() {
  return (
    <section id="cooperative" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Sprout className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Αγροτικός Συνεταιρισμός Ηρακλείου</h2>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
              Ο Αγροτικός Συνεταιρισμός Ηρακλείου δραστηριοποιείται στην περιοχή του Αστριτσίου,
              υποστηρίζοντας τους τοπικούς αγρότες και την αγροτική παραγωγή της περιοχής.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
