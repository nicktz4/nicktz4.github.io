import { ShoppingCart, Palmtree, UtensilsCrossed, Coffee, Fuel, MapPin, Clock, ExternalLink } from 'lucide-react';

interface Business {
  id: number;
  name: string;
  type: string;
  icon: any;
  description: string;
  location?: string;
  hours?: string;
  features?: string[];
  links?: { url: string; label: string }[];
  color: string;
}

const businesses: Business[] = [
  {
    id: 1,
    name: 'Περβολαράκη',
    type: 'Σούπερ Μάρκετ',
    icon: ShoppingCart,
    description: 'Το τοπικό σούπερ μάρκετ του χωριού με μεγάλη ποικιλία προϊόντων για τις καθημερινές σας ανάγκες.',
    location: 'Αστρίτσι',
    color: 'blue'
  },
  {
    id: 2,
    name: 'Cretan Animal Park',
    type: 'Ζωολογικό Πάρκο',
    icon: Palmtree,
    description: 'Όμορφο, οικογενειακό θεματικό πάρκο ζώων. Ιδανικό για όλη την οικογένεια, όπου μπορείτε να δείτε από κοντά και να ταΐσετε διάφορα ζωάκια.',
    location: 'Κοντά στο Αστρίτσι (1 ώρα βόρεια από τη Βιάννο)',
    hours: 'Καθημερινά 09:00 - 18:00 (καλοκαίρι έως 19:00)',
    features: [
      'Καμήλες, λάμα, ελάφια',
      'Στρουθοκάμηλοι, ρακούν, καγκουρό',
      'Κοάτι, παπαγάλοι και πολλά ακόμα',
      'Μικρό καφέ για καφέ και αναψυκτικά',
      'Πεντακάθαρος χώρος στη φύση'
    ],
    links: [
      { url: 'https://www.tripadvisor.com.gr/Attraction_Review-g15512197-d34310348-Reviews-Cretan_Animal_Park-Astritsi_Crete.html', label: 'TripAdvisor' },
      { url: 'https://web.facebook.com/p/Cretan-animal-park-61576316181316/', label: 'Facebook' },
      { url: 'https://www.instagram.com/cretan_animalpark', label: 'Instagram' }
    ],
    color: 'green'
  },
  {
    id: 3,
    name: 'Εστιατόριο Κάτω Βρύσης',
    type: 'Εστιατόριο',
    icon: UtensilsCrossed,
    description: 'Παραδοσιακό εστιατόριο στη γραφική περιοχή της Κάτω Βρύσης με υπέροχη θέα και αυθεντική κρητική κουζίνα.',
    location: 'Κάτω Βρύση',
    links: [
      { url: 'https://www.instagram.com/katovrisi/', label: 'Instagram' }
    ],
    color: 'orange'
  },
  {
    id: 4,
    name: 'Το στέκι του Λαμπούζου',
    type: 'Παραδοσιακό Καφενείο',
    icon: Coffee,
    description: 'Παραδοσιακό καφενείο του χωριού, σημείο συνάντησης των κατοίκων με αυθεντική ατμόσφαιρα.',
    location: 'Αστρίτσι',
    links: [
      { url: 'https://www.google.com/maps/place/To+steki+tou+Lampouzou/@35.1888814,25.2237018,18z/data=!4m15!1m8!3m7!1s0x149af45327d4f0dd:0x581f806691e54e72!2sAstritsi+703+00!3b1!8m2!3d35.1902308!4d25.225325!16s%2Fg%2F120x5qyp!3m5!1s0x149af5bc0be9f0b5:0x2a79d6c134029474!8m2!3d35.1905826!4d25.2257644!16s%2Fg%2F11fwxh3fc1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D', label: 'Google Maps' }
    ],
    color: 'amber'
  },
  {
    id: 5,
    name: 'AEGEAN - ΒΟΥΡΑΚΗΣ ΕΜΜΑΝΟΥΗΛ',
    type: 'Βενζινάδικο',
    icon: Fuel,
    description: 'Πρατήριο καυσίμων AEGEAN για την εξυπηρέτηση των κατοίκων και επισκεπτών της περιοχής.',
    location: 'Αστρίτσι',
    color: 'red'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    badge: 'bg-blue-600',
    hover: 'hover:border-blue-400',
    border: 'border-blue-200'
  },
  green: {
    bg: 'bg-green-100',
    icon: 'text-green-600',
    badge: 'bg-green-600',
    hover: 'hover:border-green-400',
    border: 'border-green-200'
  },
  orange: {
    bg: 'bg-orange-100',
    icon: 'text-orange-600',
    badge: 'bg-orange-600',
    hover: 'hover:border-orange-400',
    border: 'border-orange-200'
  },
  amber: {
    bg: 'bg-amber-100',
    icon: 'text-amber-600',
    badge: 'bg-amber-600',
    hover: 'hover:border-amber-400',
    border: 'border-amber-200'
  },
  red: {
    bg: 'bg-red-100',
    icon: 'text-red-600',
    badge: 'bg-red-600',
    hover: 'hover:border-red-400',
    border: 'border-red-200'
  }
};

export function BusinessesSection() {
  return (
    <section id="businesses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">Επιχειρήσεις & Αξιοθέατα</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Ανακαλύψτε τις τοπικές επιχειρήσεις και τα αξιοθέατα που εξυπηρετούν την κοινότητα του Αστριτσίου και της ευρύτερης περιοχής.
        </p>

        <div className="space-y-6">
          {businesses.map((business) => {
            const IconComponent = business.icon;
            const colors = colorClasses[business.color as keyof typeof colorClasses];

            return (
              <div
                key={business.id}
                className={`bg-white border-2 ${colors.border} rounded-lg p-6 ${colors.hover} transition-all duration-200 shadow-sm hover:shadow-md`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center`}>
                      <IconComponent className={colors.icon} size={32} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-1">{business.name}</h3>
                        <span className={`inline-block ${colors.badge} text-white text-sm px-3 py-1 rounded-full`}>
                          {business.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">{business.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {business.location && (
                        <div className="flex items-start gap-2">
                          <MapPin className="text-gray-500 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-600">{business.location}</span>
                        </div>
                      )}

                      {business.hours && (
                        <div className="flex items-start gap-2">
                          <Clock className="text-gray-500 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-600">{business.hours}</span>
                        </div>
                      )}
                    </div>

                    {business.links && business.links.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm text-gray-700 mb-3">Σύνδεσμοι:</h4>
                        <div className="flex flex-wrap gap-3">
                          {business.links.map((link, index) => {
                            let icon = '🔗';
                            let bgColor = 'bg-gray-100 hover:bg-gray-200';
                            let textColor = 'text-gray-700';

                            if (link.label === 'Facebook') {
                              icon = '👥';
                              bgColor = 'bg-blue-100 hover:bg-blue-200';
                              textColor = 'text-blue-700';
                            } else if (link.label === 'Instagram') {
                              icon = '📷';
                              bgColor = 'bg-pink-100 hover:bg-pink-200';
                              textColor = 'text-pink-700';
                            } else if (link.label === 'TripAdvisor') {
                              icon = '✈️';
                              bgColor = 'bg-green-100 hover:bg-green-200';
                              textColor = 'text-green-700';
                            } else if (link.label === 'Google Maps') {
                              icon = '📍';
                              bgColor = 'bg-red-100 hover:bg-red-200';
                              textColor = 'text-red-700';
                            }

                            return (
                              <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 ${bgColor} ${textColor} rounded-lg transition-all shadow-sm hover:shadow-md`}
                              >
                                <span className="text-xl">{icon}</span>
                                <span className="font-medium">{link.label}</span>
                                <ExternalLink size={14} className="opacity-60" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {business.features && (
                      <div className="mt-4">
                        <h4 className="text-gray-900 mb-2">Χαρακτηριστικά:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {business.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <span className={colors.icon}>✓</span>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
