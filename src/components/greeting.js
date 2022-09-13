import React from "react";
import { useSelector} from "react-redux";

const Greeting = () => {
    const greetings = useSelector((state) => state.greetingReducer);
    console.log(greetings);

    return(
        <div>
            {greetings.map((greet) => (
                <div key={greet.id}>
                    <h1>{greet.text}</h1>
                </div>
            ))}
        </div>

    );
}
export default Greeting;