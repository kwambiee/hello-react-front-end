import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetingReducer);


  return (
    <div>
        <div key={greetings[0].id}>
          <h1>{greetings[0].text}</h1>
        </div>
    </div>

  );
};
export default Greeting;
