import React, { useState } from 'react';

function UpdateNotes() {
    const [car, setCar] = useState({name: "Toyota",
                                   brand: "Corolla",
                                   year: 2020});

    function handleYearChange(e) {
        setCar(c => ({...c, year: e.target.value}));
    }
    function handleNameChange(e) {
        setCar(c => ({...c, name: e.target.value}));
    }
    function handleBrandChange(e) {
        setCar(c => ({...c, brand: e.target.value}));
    }
    return (
        <div>
            <p>Your favorite car is {car.name} {car.brand} {car.year}</p>

            <input type="text" value={car.name} onChange={handleNameChange}/>
            <input type="text" value={car.brand} onChange={handleBrandChange}/>
            <input type="number" value={car.year} onChange={handleYearChange}/>
        </div>
    );
}

export default UpdateNotes;