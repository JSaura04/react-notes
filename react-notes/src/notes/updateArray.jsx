import React,{ useState } from 'react';

function updateArray() {

    const [foods,setFood] = useState(['Pizza', 'Burger', 'Pasta', 'Sandwich']);

    function addNewFood() {
        const newFood = document.getElementById('newFood').value;
        newFood.value = '';
        setFood(f => ([...f, newFood]));
    }  
    function removeFood() {
        setFood(f => {
            f.pop();
            return [...f];});
    }
    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={removeFood}>
                        {food}
                        </li>
                ))}
                <input type="text" id="newFood" placeholder='Enter a food name'/>
                <button onClick={addNewFood}>Add Food</button>
            </ul>
        </div>
    );
 
}
export default updateArray;