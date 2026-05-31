import { Trophy, MapPin, Shield } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import tritoniaLogo from '../../imports/team_tritonia_logo.jpg';

export function FootballSection() {
  return (
    <section id="football" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <ImageWithFallback
              src={tritoniaLogo}
              alt="Λογότυπο Α.Ο. Τριτωνίας"
              className="w-32 h-32 object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Α.Ο. Τριτωνίας</h2>
          <p className="text-xl text-green-600 mb-2">Ποδοσφαιρική Ομάδα Αστριτσίου</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-center text-lg mb-8">
              Η Τριτωνία (ή Α.Ο. Τριτωνίας) είναι τοπική ερασιτεχνική ποδοσφαιρική ομάδα με έδρα το Αστρίτσι Ηρακλείου Κρήτης,
              η οποία αγωνίζεται στα πρωταθλήματα της ΕΠΣ Ηρακλείου.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Έδρα</h3>
                    <p className="text-gray-700 mb-2">Δημοτικό Γήπεδο Αστριτσίου</p>
                    <p className="text-sm text-gray-600">Δεύτερο γήπεδο: Μυρτιά</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Επίσημα Στοιχεία</h3>
                    <p className="text-gray-700">Αριθμός Μητρώου ΕΠΟ:</p>
                    <p className="text-2xl text-green-600 mt-1">1503</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl mb-4">Πρωταθλήματα ΕΠΣ Ηρακλείου</h3>
            <p className="text-lg opacity-90">
              Η Τριτωνία εκπροσωπεί με υπερηφάνεια το Αστρίτσι στα τοπικά πρωταθλήματα,
              συνεχίζοντας την αθλητική παράδοση του χωριού μας.
            </p>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-blue-50 rounded-lg px-8 py-4">
              <p className="text-gray-700 text-lg">
                ⚽ Το όνομα "Τριτωνία" προέρχεται από τον ιερό ποταμό <strong>Τρίτωνα</strong> των αρχαίων
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
