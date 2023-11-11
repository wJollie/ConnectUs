import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADDTHOUGHT } from '../utils/mutations';
import Navbar from './Nav.jsx';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [thoughtAuthor, setThoughtAuthor] = useState('');
  const [department, setDepartment] = useState('Tech');
  const [addThought, { error }] = useMutation(ADDTHOUGHT);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your logic to save the thought to your database here
    console.log(`Thought Text: ${thoughtText}`);
    console.log(`Thought Author: ${thoughtAuthor}`);
    try {
        const { data } = await addThought({
          variables: { thoughtText, thoughtAuthor, department },
        });
        console.log(data.addThought);
        setThoughtText('');
        setThoughtAuthor('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Thought:
        <input
          type="text"
          value={thoughtText}
          onChange={(e) => setThoughtText(e.target.value)}
          required
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={thoughtAuthor}
          onChange={(e) => setThoughtAuthor(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default ThoughtForm;