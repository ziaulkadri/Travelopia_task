import React, { useState } from 'react';

function TravelForm() {
  const [formData,setFormData] =useState({
    name:'',
    email:'',
    destination:'',
    numTravelers:'',
    budget:''
})


const onChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({name:'',
    email:'',
    destination:'',
    numTravelers:'',
    budget:''})
  };

  return (
    <>
    <section className="heading">
    <h1>Welcome Traveller</h1>
    <p>Choose your Destination</p>
</section>
    <section className="form">
    <form onSubmit={handleSubmit} >
    <div className="form-group">
      <label>
        Name:
        <input  className="form-control" required name='name'placeholder='Enter your name' type="text" value={formData.name} onChange={onChange} />
      </label>
      </div>
      <br />
      <div className="form-group">
      <label>
        Email address:
        <input type="email" required className="form-control" name='email' placeholder='Enter your email' value={formData.email} onChange={onChange} />
      </label>
      </div>
      <br />
      <div className="form-group">
      <label>
        Where do you want to go?
        <select value={formData.destination} required name='destination' onChange={onChange} className="form-control">
          <option value="">--Please choose an option--</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </select>
      </label>
      </div>
      <br />
      <div className="form-group">
      <label>
        No. of travellers:
        <input type="numeric" required className="form-control" name='numTravelers' value={formData.numTravelers} onChange={onChange} />
      </label>
      </div>
      <br />
      <div className="form-group">
      <label>
        Budget Per Person (in USD):
        <input type="numeric" required className="form-control" name='budget' value={formData.budget} onChange={onChange} />
      </label>
      </div>
      <br />
      <div className="form-group">
            <button type="submit"  className="btn btn-block">Submit</button>
        </div>
      
    </form>
    </section>
    </>
  );
}

export default TravelForm;
