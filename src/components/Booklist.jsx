/*
const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li>{book.name}</li>;
      })}
    </ul>
  );
};
*/
const BookList = ({ books }) => {
  return (
	<ul>
	  {books.map((book) => {
		return <li key={book.id}>{book.name}</li>;
	  })}
	</ul>
  );
};

export default BookList