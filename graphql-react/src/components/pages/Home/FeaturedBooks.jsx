export default function FeaturedBooks() {
    const featuredBooks = [
      { title: 'Book One', image: 'https://via.placeholder.com/150' },
      { title: 'Book Two', image: 'https://via.placeholder.com/150' },
      { title: 'Book Three', image: 'https://via.placeholder.com/150' },
    ];
  
    return (
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={index} className="card w-64 bg-base-100 shadow-xl">
                <figure>
                  <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{book.title}</h3>
                  <p>Discover this amazing book!</p>
                  <div className="card-actions justify-end">
                    <a href="/book" className="btn btn-accent">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  