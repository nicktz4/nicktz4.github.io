import { Tent, Calendar, Users, Sparkles, Theater, Music, Palette, Mountain } from 'lucide-react';

export function CampingSection() {
  return (
    <section id="camping" className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mb-6">
            <Tent className="text-white" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Πολιτιστικό Camping Ηρακλείου</h2>
          <p className="text-xl text-green-700 mb-2">Φεστιβάλ Πολιτισμού & Τέχνης</p>
          <p className="text-gray-600">Κάτω Βρύση, Αστρίτσι</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full flex-shrink-0">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Ιστορία</h3>
                  <p className="text-gray-700">Διοργανώνεται από το 2003 έως σήμερα</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                  <Mountain className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Τοποθεσία</h3>
                  <p className="text-gray-700">Κάτω Βρύση, Αστρίτσι</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Το Πολιτιστικό Camping είναι ένα φεστιβάλ που λαμβάνει χώρα στα μέσα του καλοκαιριού και φιλοξενεί,
              ως επί το πλείστον, φοιτητικές θεατρικές ομάδες αλλά και διάφορες άλλες πολιτιστικές δραστηριότητες
              (χορός, μουσική, εικαστικά, αστρονομία κτλ). Τα προηγούμενα χρόνια φιλοξενήθηκαν αρκετές ομάδες
              απ' όλη την Ελλάδα (Αθήνα, Θεσσαλονίκη, Χανιά, Ηράκλειο, Πάτρα, Γιάννενα κ.ά.).
            </p>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="text-green-600" size={24} />
                Φιλοσοφία του Φεστιβάλ
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Κάθε φεστιβάλ χρειάζεται για την διοργάνωσή του τρεις ομάδες ανθρώπων: καλλιτέχνες, θεατές και εργαζόμενους.
                Η διακριτότητα των ομάδων αυτών οδηγεί αναπόφευκτα στην στρέβλωση της έννοιας του πολιτισμού,
                όπως τουλάχιστον τον αντιλαμβανόμαστε εμείς.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Το σπάσιμο των διαχωριστικών γραμμών</strong> μεταξύ των ομάδων αυτών είναι από τις βασικότερες
                φιλοδοξίες μας για αυτό το εγχείρημα. Για αυτό το λόγο κάθε κατασκηνωτής οφείλει να περάσει από όλους τους ρόλους:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Θα παρουσιάσει την καλλιτεχνική του δουλειά</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Θα παρακολουθήσει τις δουλειές των υπολοίπων</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Θα εργαστεί για την καλή λειτουργία του camping</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600">
              <div className="flex items-center gap-3 mb-4">
                <Theater className="text-purple-600" size={32} />
                <h3 className="text-xl text-gray-900">Βραδινές Εκδηλώσεις</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Κάθε βραδιά έχει κανείς την ευκαιρία να παρακολουθήσει και από μια εκδήλωση -
                κατά κανόνα θεατρική παράσταση.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-blue-600" size={32} />
                <h3 className="text-xl text-gray-900">Ημερήσια Εργαστήρια</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Κατά τη διάρκεια της ημέρας λειτουργούν κάποια σταθερά εργαστήρια-σεμινάρια καθώς και άλλα
                που προκύπτουν αυθόρμητα από όσα άτομα επιθυμούν να τα οργανώσουν εκείνες τις μέρες.
                Η παρακολούθηση είναι ανοιχτή σε όλους τους κατασκηνωτές και τους επισκέπτες του camping.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
              <Palette className="text-orange-600" size={32} />
              Εργαστήρια & Σεμινάρια
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Με αυτό τον τρόπο τα προηγούμενα χρόνια λειτούργησαν:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: '🎭', name: 'Θέατρο' },
                { icon: '🎵', name: 'Μουσική' },
                { icon: '💃', name: 'Χορός' },
                { icon: '🥁', name: 'Κρουστά' },
                { icon: '🎨', name: 'Εικαστικά' },
                { icon: '🏺', name: 'Πηλοπλαστική' },
                { icon: '🧗', name: 'Αναρρίχηση' },
                { icon: '📷', name: 'Φωτογραφία' },
                { icon: '🔭', name: 'Αστρονομία' },
                { icon: '🤸', name: 'Capoeira' },
                { icon: '🕯️', name: 'Θέατρο Σκιών' },
                { icon: '✨', name: 'Και άλλα...' }
              ].map((workshop, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2">{workshop.icon}</div>
                  <p className="text-sm text-gray-700">{workshop.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
