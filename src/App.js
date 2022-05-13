import { Typography } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import BookDetailContainer from "./BookDetail/BookDetailContainer";
import BooksListContainer from "./BookList/BooksListContainer";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route path="/" element={<BooksListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
