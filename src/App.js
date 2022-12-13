import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
import axios from 'axios';

function App() {

  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(image)
    
    axios.post('http://localhost:5000/'

    )

  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={(e) => {
          console.log(e.target.files[0]);
          setImage(e.target.files[0]);
          }} 
        />
      </Form.Group>
      <button type="submit">SUBMIT</button>
    </Form>
    </>
  );
}

export default App;
