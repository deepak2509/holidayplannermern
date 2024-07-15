import React, { useState, useEffect } from "react";
import axios from 
function Ap() {
  const [formData, setFormData] = useState({
    location: '',
    Checkin: '',
    Checkout: '',
    adult: '',
    children:'',
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  //Get Method
  const apiGet = () => {
    axios.apiGet("https://airbnb13.p.rapidapi.com/search-location?location=${}&checkin=2023-05-16&checkout=2023-05-31&adults=3&children=0&infants=0&page=1&rapidapi-key=92a00c3b6amsh38e10844cd53df7p122abfjsnf7a2b3933485")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setFormData(json);
      });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="location" className="form-label">Location</label>
          <input className="form-control" name="location" onChange={onChangeHandler} value={formData.location} />
        </div>
        <div className="form-group">
          <label htmlFor="Checkin" className="form-label">CheckIn</label>
          <input type="date" className="form-control" name="Checkin" onChange={onChangeHandler} value={formData.Checkin} />
        </div>
        <div className="form-group">
          <label htmlFor="Checkout" className="form-label">Checkout</label>
          <input type="date" className="form-control" name="Checkout" onChange={onChangeHandler} value={formData.Checkout} />
        </div>
        <div className="form-group">
          <label htmlFor="adult" className="form-label">adult</label>
          <input type="number" className="form-control" name="adult" onChange={onChangeHandler} value={formData.adult} />
        </div>
        <div className="form-group">
          <label htmlFor="children" className="form-label">Children</label>
          <input type="number" className="form-control" name="children" onChange={onChangeHandler} value={formData.children} />
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Ap