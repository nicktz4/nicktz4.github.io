import { Users, Calendar, Heart, Sparkles } from 'lucide-react';

export function CulturalAssociationSection() {
  return (
    <section id="cultural-association" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <Users className="text-white" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Πολιτιστικός Σύλλογος Αστριτσίου</h2>
          <p className="text-xl text-blue-600 mb-2">Διοργανώνοντας εκδηλώσεις και προάγοντας τον πολιτισμό</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-center text-lg mb-8">
              Ο Πολιτιστικός Σύλλογος Αστριτσίου αποτελεί τον πυρήνα της πολιτιστικής ζωής του χωριού μας.
              Με αφοσίωση και μεράκι, διοργανώνει εκδηλώσεις που φέρνουν τους κατοίκους κοντά και διατηρούν
              ζωντανές τις παραδόσεις μας.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Εκδηλώσεις</h3>
                <p className="text-gray-700 text-sm">
                  Διοργάνωση πολιτιστικών και κοινωνικών εκδηλώσεων καθ' όλη τη διάρκεια του έτους
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Παράδοση</h3>
                <p className="text-gray-700 text-sm">
                  Διατήρηση και προβολή των τοπικών παραδόσεων και της πολιτιστικής κληρονομιάς
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-600 rounded-full mb-4">
                  <Sparkles className="text-white" size={32} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Κοινότητα</h3>
                <p className="text-gray-700 text-sm">
                  Ενίσχυση των κοινωνικών δεσμών και της συνοχής της τοπικής κοινότητας
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl text-gray-900 mb-3">Δραστηριότητες</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Πολιτιστικές εκδηλώσεις και γιορτές</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Εκπαιδευτικά προγράμματα</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
              <h3 className="text-xl text-gray-900 mb-3">Στόχοι</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Προώθηση του τοπικού πολιτισμού</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Ανάδειξη της ιστορίας του χωριού</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Ενδυνάμωση της κοινότητας</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Προσέλκυση επισκεπτών</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
