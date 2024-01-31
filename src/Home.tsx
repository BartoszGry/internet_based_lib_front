
import NavbarCreate from './Navbar';
import NewsSection from './NewsSection';
import SearchBar1 from './SearchBar';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div className="">
      <NavbarCreate />
      <SearchBar1/>  
      <NewsSection/>


    
      <footer className="bg-body-tertiary text-center text-lg-start fixed-bottom">
  <div className="text-center p-3" >
    © 2024 Bartosz Grygierczyk
  </div>  
</footer>
      </div>
    
  );
};

export default Home;

