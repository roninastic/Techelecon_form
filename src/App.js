import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState } from 'react';
import SubmitForm from './components/SubmitForm';
import ResponseForm from './components/ResponseForm';


function App() {
  const [formData, setFormData] = useState(null);


  return (
    
    <div className="App">
      <Header/>

      {formData === null ? (
        <SubmitForm onSubmit={(data) => setFormData(data)} />
      ) : (
        <ResponseForm formData={formData} />
      )}
      <Footer/>
    </div>
  );
}

export default App;
