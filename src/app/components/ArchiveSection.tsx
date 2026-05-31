import { FileText, Download, Calendar } from 'lucide-react';

interface ArchiveItem {
  id: number;
  title: string;
  date: string;
  category: string;
  size: string;
}

const archiveItems: ArchiveItem[] = [
  {
    id: 1,
    title: 'Ιστορικό Αρχείο Αστρίτσι 1900-1950',
    date: 'Ιανουάριος 2025',
    category: 'Ιστορία',
    size: '2.4 MB'
  },
  {
    id: 2,
    title: 'Πρακτικά Κοινοτικού Συμβουλίου 2025',
    date: 'Μάρτιος 2026',
    category: 'Επίσημα Έγγραφα',
    size: '1.8 MB'
  },
  {
    id: 3,
    title: 'Οδηγός Παραδοσιακών Εκδηλώσεων',
    date: 'Δεκέμβριος 2025',
    category: 'Πολιτισμός',
    size: '3.2 MB'
  },
  {
    id: 4,
    title: 'Χάρτης Χωριού και Περιοχής',
    date: 'Νοέμβριος 2025',
    category: 'Γεωγραφία',
    size: '4.1 MB'
  },
  {
    id: 5,
    title: 'Συλλογή Φωτογραφιών 20ός Αιώνας',
    date: 'Οκτώβριος 2025',
    category: 'Ιστορία',
    size: '15.7 MB'
  },
  {
    id: 6,
    title: 'Γενεαλογικό Δέντρο Οικογενειών',
    date: 'Σεπτέμβριος 2025',
    category: 'Γενεαλογία',
    size: '1.2 MB'
  }
];

export function ArchiveSection() {
  return (
    <section id="archive" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">Αρχείο Εγγράφων</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-800">
              Το ψηφιακό αρχείο του χωριού περιλαμβάνει ιστορικά έγγραφα, φωτογραφίες,
              και σημαντικά αρχεία που διατηρούν τη μνήμη και την ιστορία του Αστρίτσι.
            </p>
          </div>

          <div className="space-y-4">
            {archiveItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <FileText size={24} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg mb-2 text-gray-900">{item.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{item.category}</span>
                        <span className="text-gray-500">{item.size}</span>
                      </div>
                    </div>
                  </div>

                  <button className="flex-shrink-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Download size={18} />
                    <span className="hidden sm:inline">Λήψη</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
