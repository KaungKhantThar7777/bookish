const BookDetail = ({ book }) => {
  return (
    <div className="detail">
      <h2>{book.name}</h2>
      <p className="book-description">{book.description || book.name}</p>
    </div>
  );
};

export default BookDetail;
