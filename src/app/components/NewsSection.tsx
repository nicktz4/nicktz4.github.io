export function NewsSection() {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">Νέα & Ανακοινώσεις</h2>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-md p-12">
            <div className="text-6xl mb-6">📰</div>
            <h3 className="text-2xl text-gray-900 mb-4">Προσεχώς...</h3>
            <p className="text-gray-600">
              Οι ανακοινώσεις και τα νέα του χωριού θα αναρτώνται σύντομα εδώ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
