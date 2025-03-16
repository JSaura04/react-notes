// Triggers a function when the input field is changed

import React, {useState} from 'react';


function OnChangeCom() {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }
    function handleAge(e) {
        setAge(e.target.value)
    }
    function handlePayment(e) {
        setPayment(e.target.value)
    }
    function handleDelivery(e) {
        setDelivery(e.target.value)
    }


    return(<div>
        <input value={name} onChange={handleChange} type="text" />
        <p>Name: {name}</p>

        <input value={age} onChange={handleAge} type="number" />
        <p>Age: {age}</p>

        <select value={payment} onChange={handlePayment}name="" id="">
            <option value="Mastercard">Mastercard</option>
            <option value="Visa">Visa</option>
            <option value="Cash">Cash</option>
            <option value="Paypal">Paypal</option>
        </select>
        <p>Selected method: {payment}</p>

        <label>
        <input type="radio" value="PickUp"
            checked={delivery == "PickUp" }
            onChange={handleDelivery} />
            Pickup
        </label>
        <label>
        <input type="radio" value="Delivery"
            checked={delivery == "Delivery" }
            onChange={handleDelivery} />
            Delivery
        </label>
        <p>Pickup method : {delivery}</p>
    </div>)
}

export default OnChangeCom;