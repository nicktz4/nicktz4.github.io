import { Grape, Droplet, Apple, Wheat } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Ελαιόλαδο',
    icon: Droplet,
    description: 'Η κύρια απασχόληση των κατοίκων. Παραγωγή εξαιρετικού ποιότητας ελαιολάδου από τους πλούσιους ελαιώνες της περιοχής.'
  },
  {
    id: 2,
    name: 'Σταφύλια',
    icon: Grape,
    description: 'Καλλιέργεια εκλεκτών ποικιλιών σταφυλιών που ευδοκιμούν στο κλίμα της Πεδιάδας.'
  },
  {
    id: 3,
    name: 'Εσπεριδοειδή',
    icon: Apple,
    description: 'Καλλιέργεια εσπεριδοειδών που επωφελούνται από τις φυσικές πηγές και την εύφορη γη της περιοχής.'
  },
  {
    id: 4,
    name: 'Δημητριακά & Κηπευτικά',
    icon: Wheat,
    description: 'Παραδοσιακές καλλιέργειες δημητριακών και κηπευτικών για τοπική κατανάλωση και εμπόριο.'
  }
];

export function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">Παραγωγή & Οικονομία</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Το Αστρίτσι είναι γνωστό για την αγροτική του παραγωγή, με κύρια ασχολία την ελαιουργία
          και την καλλιέργεια διαφόρων προϊόντων που ευδοκιμούν στην εύφορη γη της Πεδιάδας.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3 text-center">{product.name}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{product.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl mb-4 text-gray-900 text-center">Η Σημασία του Νερού</h3>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p className="leading-relaxed">
              Η παρουσία του νερού ήταν πάντοτε καταλυτική στην περιοχή. Υπήρχαν τρεις σημαντικές πηγές
              που από την αρχαιότητα ήταν ιερές και σχημάτιζαν τον ιερό ποταμό <strong>Τρίτωνα</strong> των αρχαίων.
            </p>
            <p className="leading-relaxed">
              Οι πηγές αυτές γίνονταν σύμμαχοι των ανθρώπων για τις καλλιέργειές τους,
              συνεισφέροντας στην αγροτική ευημερία του χωριού από την αρχαιότητα μέχρι σήμερα.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
