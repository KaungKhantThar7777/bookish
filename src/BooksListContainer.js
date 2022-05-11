import BooksList from "./BooksList";
import { useRemoteService } from "./hooks";

function BooksListContainer() {
  const { data, loading, error } = useRemoteService([]);
  return <BooksList books={data} loading={loading} error={error} />;
}

export default BooksListContainer;
