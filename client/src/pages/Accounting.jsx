// TechPage.js or TechComponent.js
import React from 'react';
import ThoughtForm from './ThoughtForm';

const Accounting = () => {
  return (
    <div>
      <ThoughtForm department="Accounting" />
      {/* Other content specific to the Tech page */}
    </div>
  );
};

export default Accounting;
