import { ImageWithFallback } from './ImageWithFallback';
import astritsiImage from '../../imports/astritsi.jpg';

export function Hero() {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px]">
      <ImageWithFallback
        src={astritsiImage}
        alt="Αστρίτσι - Το χωριό μας"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mb-4">Καλώς ήρθατε στο Αστρίτσι</h1>
          <p className="text-xl md:text-2xl">Ένα χωριό με αρχαιότητα και παράδοση</p>
          <p className="text-lg md:text-xl mt-2">25 χλμ από το Ηράκλειο</p>
        </div>
      </div>
    </section>
  );
}
