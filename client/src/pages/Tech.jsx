// TechPage.js or TechComponent.js
import React from 'react';
import ThoughtForm from '../components/ThoughtForm.jsx';

const TechPage = () => {
  return (
    <div>
      <ThoughtForm department="Tech" />
      {/* Other content specific to the Tech page */}
    </div>
  );
};

export default TechPage;
