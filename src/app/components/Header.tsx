import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-xl text-blue-900">Αστρίτσι</h1>
            <p className="text-sm text-gray-600">Ηράκλειο, Κρήτης</p>
          </div>

          <nav className="hidden lg:flex gap-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Αρχική
            </button>
            <button onClick={() => scrollToSection('history')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Ιστορία
            </button>
            <button onClick={() => scrollToSection('churches')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Εκκλησίες
            </button>
            <button onClick={() => scrollToSection('theater')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Θέατρο
            </button>
            <button onClick={() => scrollToSection('football')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Ποδόσφαιρο
            </button>
            <button onClick={() => scrollToSection('camping')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Camping
            </button>
            <button onClick={() => scrollToSection('businesses')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Επιχειρήσεις
            </button>
            <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Νέα
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Φωτογραφίες
            </button>
          </nav>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Αρχική
              </button>
              <button onClick={() => scrollToSection('history')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Ιστορία
              </button>
              <button onClick={() => scrollToSection('churches')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Εκκλησίες
              </button>
              <button onClick={() => scrollToSection('theater')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Θέατρο
              </button>
              <button onClick={() => scrollToSection('football')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Ποδόσφαιρο
              </button>
              <button onClick={() => scrollToSection('camping')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Camping
              </button>
              <button onClick={() => scrollToSection('businesses')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Επιχειρήσεις
              </button>
              <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Νέα
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">
                Φωτογραφίες
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
