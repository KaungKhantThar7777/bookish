import { TextField } from "@material-ui/core";
import clone from "lodash.clone";
import isEmpty from "lodash.isempty";

const SearchBox = ({ term, onSearch }) => {
  const protect = (event) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      onSearch(event);
    }
  };
  return (
    <TextField
      label="Search"
      value={term}
      onChange={protect}
      data-test="search"
      margin="normal"
      variant="outlined"
    />
  );
};

export default SearchBox;
