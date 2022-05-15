import BooksList from "./BooksList";
import { useRemoteService } from "../hooks";
import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";

function BooksListContainer() {
  const { data, loading, error, setUrl } = useRemoteService(
    "http://localhost:8080/books",
    []
  );
  const [term, setTerm] = useState("");
  console.log(term);
  useEffect(() => {
    // performFetch
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term]);
  const onSearch = (evt) => setTerm(evt.target.value);
  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BooksList books={data} loading={loading} error={error} />
    </>
  );
}

export default BooksListContainer;
