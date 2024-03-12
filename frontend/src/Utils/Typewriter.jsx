import React from 'react';

//importing typewriter-effect
import TypeWriter from "typewriter-effect";

function Typewriter() {
    return (
        <div className="App">
            <TypeWriter
                options={{
                    delay: 50, // Decrease delay to increase typing speed
                    deleteSpeed: 50, // Decrease deleteSpeed to increase deleting speed
                    loop: true, // Set loop to true for continuous looping
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString(`Basic to " A. I."`)
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcome to ' B 2 A ' . . . .")
                        .start();
                }}
            />
        </div>
    );
}

export default Typewriter;