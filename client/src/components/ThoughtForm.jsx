import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADDTHOUGHT } from '../utils/mutations';
import { THOUGHTSBYDEPT } from '../utils/queries';
import { DELETETHOUGHT } from '../utils/mutations'; 

const ThoughtForm = ({ department }) => {
  const [thoughtText, setThoughtText] = useState('');
  const [thoughtAuthor, setThoughtAuthor] = useState('');
  const { loading, data, refetch } = useQuery(THOUGHTSBYDEPT, {
    variables: { department: department || "" },
  });
  const thoughtdata = data?.thoughtsbydepartment || [];
  // console.log(thoughtdata);
  const [addThought, { error }] = useMutation(ADDTHOUGHT);

  // New state to store thoughts
  const [thoughts, setThoughts] = useState([]);

  // Use useEffect to fetch thoughts when the component mounts
  useEffect(() => {
    if (!loading) {
      setThoughts(thoughtdata);
    }
  }, [loading, thoughtdata]);

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

  const [deleteThought, { error: deleteThoughtError }] = useMutation(DELETETHOUGHT);

  const handleDeleteThought = async (thoughtId) => {
    try {
      await deleteThought({
        variables: { thoughtId },
      });
      setThoughts(thoughts.filter((thought) => thought._id !== thoughtId));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="blogWrapper">
      {/* Display thoughts in a chat box */}
      <div className="chatBox">
        <h2>{department} Chat Box</h2>
        {thoughts.map((thought) => (
          <div key={thought._id} className="chatMessages">
            <p>{thought.thoughtAuthor} Says:</p>
            <p>{thought.thoughtText}</p>
            <button className='linkButton' onClick={() => handleDeleteThought(thought._id)}>Delete</button>
          </div>
        ))}
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Message:
          <input
            type="text"
            value={thoughtText}
            onChange={(e) => setThoughtText(e.target.value)}
            required
          />
        </label>
        <input className="linkButton" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ThoughtForm;
