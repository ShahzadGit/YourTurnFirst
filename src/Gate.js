import React from 'react';

const Gate = ({ isOpen }) => (
    <div>
      {" "}
      <h1>{isOpen ? "Open" : "Close"}</h1>{" "}
    </div>
  );

  export default Gate;