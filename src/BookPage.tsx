import NavbarCreate from './Navbar';
import SearchBar1 from './SearchBar';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import{useParams} from "react-router-dom"
import axios from 'axios';

const BookPage = () => {

const param= useParams();
const baseUrl = 'http://localhost:8080/';
const URL = baseUrl + param;

axios.get(URL).then(response => {
    console.log(response.data);

  })



  return (
    <div>
      <NavbarCreate />
      <SearchBar1/>  
     



    
      <Footer/>
      </div>
    
  );
};

export default BookPage;

