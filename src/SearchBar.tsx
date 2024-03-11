import { InputGroup, FormControl, Button, Dropdown, Row, Col, Container } from 'react-bootstrap';
import './index.css'
import { useState } from 'react';
import axios from 'axios';
import NavbarCreate from './Navbar';
import Footer from './Footer';
import NewsSection from './NewsSection';
import SearchPanel from './SerchPanel';


const SearchBar1 = () => {

  
    const [selectedOption, setSelectedOption] = useState("title");
    const [searchInput, setSearchInput] = useState("");
    const [showNewsSection, setShowNewsSection] = useState(true);
    const [responseData, setResponseData] = useState([]);

    const handleSelect = (eventKey: string | null) => {
      if (eventKey) {
        setSelectedOption(eventKey);
      }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    };

    const handleSearch = () => {
      //const apiUrl ='http://localhost:8080/lib-internal/search?'+ selectedOption+'='+ searchInput;
      const narodowaUrl= 'http://localhost:8080/lib-national/list-search?'+ selectedOption+'='+ searchInput;
      // axios.get(apiUrl).then(response => {
        
      //   console.log(response);
      
      // })
      // .catch(error => {
        
      //   console.log(error);
      // });  
      axios.get(narodowaUrl).then(response => {

        
        setResponseData(response.data);
        setShowNewsSection(false);
      })
      .catch(error => {
        
        console.log(error);
      }); 
      

    };

    
  
 

  return (
    <div>
      <NavbarCreate />                                            
    <div className="container mt-5 px-5"  >
    <InputGroup className="mb-3 ">
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        className="rounded"
        value={searchInput} 
        onChange={handleInputChange}
      />


<div className="dropdown-container sm">
   <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="title">title</Dropdown.Item>
        <Dropdown.Item eventKey="publicationYear"> publication year</Dropdown.Item>
        <Dropdown.Item eventKey="author">author</Dropdown.Item>
        <Dropdown.Item eventKey="publisher">publisher</Dropdown.Item>
        <Dropdown.Item eventKey="kind">kind</Dropdown.Item>
        <Dropdown.Item eventKey="Instytucje">Instytucje</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      <Button variant="outline-primary" data-mdb-ripple-init onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>
    </div>
     {/* Warunek renderowania komponentu w zależności od stanu */}
     {showNewsSection ? <NewsSection /> : <SearchPanel searchData={responseData}/>}
    <Footer/>                                                   
                                                                   {/* //foooooter */}
    </div>
  );
};

export default SearchBar1;