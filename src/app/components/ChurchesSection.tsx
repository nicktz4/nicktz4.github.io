import { Church } from 'lucide-react';

interface ChurchInfo {
  id: number;
  name: string;
  description: string;
  location?: string;
}

const churches: ChurchInfo[] = [
  {
    id: 1,
    name: 'Άγιος Γεώργιος',
    description: 'Πολιούχος του Αστριτσίου, βρίσκεται στο κέντρο του χωριού. Η εκκλησία είναι τριμάρτυρη και είναι αφιερωμένη στον Άγιο Γεώργιο, την Αγία Βαρβάρα και τον Άγιο Χαράλαμπο.',
    location: 'Κέντρο του χωριού'
  },
  {
    id: 2,
    name: 'Άγιος Ιωάννης ο Πρόδρομος',
    description: 'Η πρώτη εκκλησία του χωριού, λαξευμένη μέσα σε βράχο.',
    location: 'Περιοχή Κάτω Βρύσης'
  },
  {
    id: 3,
    name: 'Άγιος Ιωάννης ο Θεολόγος',
    description: 'Θαυματουργός ναός στη θέση Νίρα. Σύμφωνα με μαρτυρίες πολλοί χωριανοί θεραπεύτηκαν από διάφορες ασθένειες πίνοντας αγίασμα.',
    location: 'Θέση Νίρα'
  },
  {
    id: 4,
    name: 'Μεταμόρφωση του Σωτήρος',
    description: 'Βρίσκεται στην ίδια θέση με τον Άγιο Ιωάννη τον Θεολόγο.',
    location: 'Θέση Νίρα'
  },
  {
    id: 5,
    name: 'Παναγία Άξιον Εστί',
    description: 'Βυζαντινή εκκλησία που βρέθηκε θαμμένη και ερειπωμένη πριν από μερικά χρόνια. Έχει πλέον αναστηλωθεί.',
    location: 'Τοποθεσία Περιβολάκια'
  },
  {
    id: 6,
    name: 'Παναγία Ευαγγελίστρια και Γοργοεπήκοος',
    description: 'Βρίσκεται 200 μέτρα από το χωριό.',
    location: 'Θέση Παπαγιαννή'
  }
];

export function ChurchesSection() {
  return (
    <section id="churches" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">Εκκλησίες του Αστριτσίου</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Το χωριό μας διαθέτει πλούσια εκκλησιαστική κληρονομιά με ιστορικούς ναούς
          που χρονολογούνται από τη βυζαντινή εποχή έως σήμερα.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church) => (
            <div key={church.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Church className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-2">{church.name}</h3>
                  {church.location && (
                    <p className="text-sm text-blue-600 mb-3">{church.location}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{church.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
