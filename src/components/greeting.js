import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetingReducer);

  return (
    <div>
      <div>
        <h1>{greetings[0]}</h1>
      </div>
    </div>

  );
};
export default Greeting;
