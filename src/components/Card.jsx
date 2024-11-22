import '/src/components.css/Card.css';

const Card = () => {
  // Example array of services or "books"
  const books = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
    { id: 4, title: "Book 4" },
    { id: 5, title: "Book 5" },
    { id: 6, title: "Book 6" },
  ];

  return (
    <div className="card-wrapper">
      <h1>Our Services</h1>
      <div className="container">
        <div className="box-inner">
          {books.map((book) => (
            <div key={book.id} className={`book book-${book.id} book-blur`}>
              {/* Optionally display book title or other data */}
              <span className="book-title">{book.title}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Card;
