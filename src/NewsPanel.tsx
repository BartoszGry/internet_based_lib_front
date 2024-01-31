import { Form, Button } from 'react-bootstrap';
import React,{ useState } from 'react';
import axios from 'axios';


const NewsPanel = () => {
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState();
  


  const handleChange = (e: React.ChangeEvent<any>) =>  {
    console.log(e.target.files);
    setFile((e.target.files[0]));
}


  const handleSubmit= () => {  
   
    if (!file) {
      alert('Wybierz plik do przesłania!');
      return;
    }
 
    const formData = new FormData();
    formData.append('header', header);
    formData.append('text', text);
    formData.append('imageBytes', file);
    axios.post('http://localhost:8080/libsys/api/news/add',formData).then(response => {
      console.log(response.data);
      // Obsłuż odpowiedź z serwera, jeśli to konieczne
    })
    .catch(error => {
      console.error('Błąd podczas przesyłania żądania:', error);
      // Obsłuż błąd, jeśli to konieczne
    });  
  };

  return (
    <div className="mt-4 mx-5">
      <h2>News Panel</h2>
      <Form>
        <Form.Group className="mb-3" controlId="headerInput">
          <Form.Label>Header</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="textInput">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageInput">
          <Form.Label>Image URL</Form.Label>
          <input type="file" onChange={handleChange} />
        </Form.Group>
        
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewsPanel;