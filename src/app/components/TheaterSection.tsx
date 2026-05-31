import { Drama, Calendar } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import theaImage from '../../imports/thea_1.jpg';

export function TheaterSection() {
  return (
    <section id="theater" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
            <Drama className="text-purple-600" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Θ.Ε.Α</h2>
          <p className="text-xl text-purple-600 mb-2">Θεατρικό Εργαστήρι Αστριτσίου</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <ImageWithFallback
              src={theaImage}
              alt="Θεατρικό Εργαστήρι Αστριτσίου"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 mb-8">
            <div className="flex justify-center">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Ίδρυση</h3>
                  <p className="text-gray-700">15 Ιανουαρίου 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              Το Θεατρικό Εργαστήρι Αστριτσίου (Θ.Ε.Α) αποτελεί έναν νέο πολιτιστικό θεσμό στο χωριό μας,
              που φέρνει την τέχνη του θεάτρου κοντά στους κατοίκους και προωθεί την πολιτιστική ζωή της κοινότητας.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
              <div className="text-3xl mb-2">🎭</div>
              <h4 className="text-lg text-gray-900 mb-2">Παραστάσεις</h4>
              <p className="text-gray-600 text-sm">Θεατρικές παραγωγές και εκδηλώσεις</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="text-lg text-gray-900 mb-2">Εκπαίδευση</h4>
              <p className="text-gray-600 text-sm">Μαθήματα υποκριτικής και θεατρικών τεχνών</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
              <div className="text-3xl mb-2">🎪</div>
              <h4 className="text-lg text-gray-900 mb-2">Κοινότητα</h4>
              <p className="text-gray-600 text-sm">Συμμετοχή όλων των ηλικιών</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
