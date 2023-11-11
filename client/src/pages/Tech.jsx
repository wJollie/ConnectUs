import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADDTHOUGHT } from '../utils/mutations';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [thoughtAuthor, setThoughtAuthor] = useState('');
  const [department, setDepartment] = useState('Tech');
  const [addThought, { error }] = useMutation(ADDTHOUGHT);

  // New state to store thoughts
  const [thoughts, setThoughts] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: { thoughtText, thoughtAuthor, department },
      });

      // Update the list of thoughts with the new thought
      setThoughts((prevThoughts) => [...prevThoughts, data.addThought]);

      // Clear the form fields
      setThoughtText('');
      setThoughtAuthor('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="blogWrapper">
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
        {/* <label>
          Author:
          <input
            type="text"
            value={thoughtAuthor}
            onChange={(e) => setThoughtAuthor(e.target.value)}
            required
          />
        </label> */}
        <input className="linkButton" type="submit" value="Submit" />
      </form>

      {/* Display thoughts in a chat box */}
      <div className="chatBox">
        <h2>Chat Box</h2>
        {thoughts.map((thought) => (
          <div key={thought._id} className="chatMessage">
            <p>{thought.thoughtText}</p>
            <p>Author: {thought.thoughtAuthor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtForm;
