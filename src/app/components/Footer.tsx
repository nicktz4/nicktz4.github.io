import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl text-white mb-4">Αστρίτσι</h3>
            <p className="text-gray-400 mb-4">
              Χωριό και έδρα ομώνυμης κοινότητας του Δήμου Αρχανών-Αστερουσίων, Ηράκλειο, Κρήτης. Με πλούσια ιστορία από την αρχαιότητα.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-white mb-4">Επικοινωνία</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Αστρίτσι, Δήμος Αρχανών-Αστερουσίων</p>
                  <p>Ηράκλειο, Κρήτης</p>
                  <p className="text-sm text-gray-400 mt-1">25 χλμ από το Ηράκλειο</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <a href="mailto:batzan@yahoo.in" className="hover:text-white transition-colors">
                  batzan@yahoo.in
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white mb-4">Το Χωριό</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Εκκλησίες & Ναοί</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Αρχαιολογικοί Χώροι</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Πολιτιστικός Σύλλογος</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>Θεατρικό Εργαστήρι</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Αστρίτσι, Ηράκλειο. Με την επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
}
