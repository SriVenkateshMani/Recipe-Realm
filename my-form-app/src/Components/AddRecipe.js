// AddRecipeForm.js
import React, { useState } from 'react';
import '../Styles/AddRecipe.css'
import axios from 'axios';

const AddRecipeForm = ({ onSubmit }) => {
  const [title, settitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [message, setMessage] = useState('');
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = async () => {
    if(!title || !image || !description || !ingredients){
      setMessage("Please enter all fields")
      return
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title',title);
    formData.append('description',description);
    formData.append('ingredients',ingredients);
    formData.append('steps',steps);
    formData.append('author_name',sessionStorage.getItem('user_name'));
    formData.append('author_email',sessionStorage.getItem('user_email'));
    try {
      console.log(formData)
      const response = await axios.post(`${serverURL}/api/user/addrecipe`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response)
    } catch (error) {
      console.error(error);
    }

    onSubmit({ formData });
  };

  return (
    <div className = 'form-container'>
    <form >
      <h2>Add Your Own Recipe</h2>
      <label>Title:</label>
      <textarea value={title} onChange={(e) => settitle(e.target.value)} required></textarea>
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <label>Image URL:</label>
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required/>
      <label>Ingredients:</label>
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
      <label>Steps:</label>
      <textarea value={steps} onChange={(e) => setSteps(e.target.value)} required></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </form>
    {message && <p style={{ whiteSpace: 'pre-wrap', marginBottom: '0', color:'red', fontWeight: 'bold' }} >{message}</p>}
    </div>
  );
};

export default AddRecipeForm;
