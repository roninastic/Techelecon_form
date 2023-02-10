import React from 'react';

const ResponseForm = (props) => {
  return (
    <div>
      <h1>Response Form</h1>
      <p>Email: {props.formData.email}</p>
      <p>Contact: {props.formData.contact}</p>
      <p>Name: {props.formData.name}</p>
    </div>
  );
};

export default ResponseForm;
