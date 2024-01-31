import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar1 = () => {
  return (
    <div className="container mt-5 "  >
    <InputGroup className="mb-3 ">
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        className="rounded"
      />
      <Button variant="outline-primary" data-mdb-ripple-init>
        Search
      </Button>
    </InputGroup>
    </div>
  );
};

export default SearchBar1;