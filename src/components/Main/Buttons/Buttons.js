import React from 'react';
import './Buttons.css';

function Buttons() { 
    var i;
    const buttons = ['Welcome', 'Self-Compassion', 'Self-Forgiveness', 'Self-Love', 'Meditations', 'Exercises', 'Congratulations']; 
    return (
        <div class = "back">
            {/* {
                buttons.map(button => (
                    <div><button class = "buttons button1" type="button">{button}</button></div>           
                ))
            } */ }
            <div><button class = "buttons button1" type="button">{buttons[0]}</button></div>
            <div><button class = "buttons button2" type="button">{buttons[1]}</button></div>
            <div><button class = "buttons button2" type="button">{buttons[2]}</button></div>
            <div><button class = "buttons button2" type="button">{buttons[3]}</button></div>
            <div><button class = "buttons button3" type="button">{buttons[4]}</button></div>
            <div><button class = "buttons button3" type="button">{buttons[5]}</button></div>
            <div><button class = "buttons button1" type="button">{buttons[6]}</button></div>
            
        </div> 
    );
}

export default Buttons;