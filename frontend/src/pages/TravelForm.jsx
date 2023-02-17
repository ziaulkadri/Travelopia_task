import React, { useState } from 'react';
import TravellerService from '../services/traveller.service';
import { emailValidator, nameValidator, validateNonNegativeNumber } from '../helpers/Validation';

function TravelForm() {
  const [formData,setFormData] =useState({
    name:'',
    email:'',
    destination:'',
    numTravelers:'',
    budget:''
})
const [formError,setFormError] =useState({
    nameError:false,
    emailError:false,
    destinationError:false,
    numTravelersError:false,
    budgetError:false,


})


const onChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
    
   
    
}






  const handleSubmit =async (event) => {
    event.preventDefault();

    const emailVallidationError =  emailValidator(formData.email)
    const nameValidatorError = nameValidator(formData.name)

    const destinationError = nameValidator(formData.destination)

    const noOftravellersError = validateNonNegativeNumber(formData.numTravelers)
    const  budgetError = validateNonNegativeNumber(formData.budget)
        
    if(emailVallidationError)
    {   
        setFormError({...formError,emailError:true})
    }
    else if(nameValidatorError)
    {
        setFormError({...formError,nameError:true})
    }
    else if(destinationError)
    {
        setFormError({...formError,destinationError:true})
    }
    else if(!budgetError)
    {
        setFormError({...formError,budgetError:true})
    }
    else if(!noOftravellersError)
    {
        setFormError({...formError,numTravelersError:true})
    }


    else{

        await TravellerService.setTrip(formData).then(
            (response) => {
           console.log(response)
           setFormData({name:'',
    email:'',
    destination:'',
    numTravelers:'',
    budget:''})
    setFormError({nameError:false,
        emailError:false,
        destinationError:false,
        numTravelersError:false,
        budgetError:false})
        
    
            },
            (error) => {
              console.log(error)
            }
          )

    
    

    
    
  }}

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
        <input  className="form-control"  name='name' placeholder='Enter your name' type="text" value={formData.name} onChange={onChange} />
      </label>
      <label>{formError.nameError &&<p style={{color:'red'}}>Please enter your name</p>}</label>
      </div>
      <br />
      <div className="form-group">
      <label>
        Email address:
        <input type="email"  className="form-control" name='email' placeholder='Enter your email' value={formData.email} onChange={onChange} />
      </label>
      <label>{formError.emailError &&<p style={{color:'red'}}>Please enter valid email</p>}</label>
      </div>
      <br />
      <div className="form-group">
      <label>
        Where do you want to go?
        <select value={formData.destination}  name='destination' onChange={onChange} className="form-control">
          <option value="">--Please choose an option--</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </select>
      </label>
      <label>{formError.destinationError &&<p style={{color:'red'}}>Please choose the destination</p>}</label>
      </div>
      <br />
      <div className="form-group">
      <label>
        No. of travellers:
        <input type="numeric"  className="form-control" min="0" name='numTravelers' value={formData.numTravelers} onChange={onChange} />
      </label>
      <label>{formError.numTravelersError &&<p style={{color:'red'}}>Please enter No of travellers</p>}</label>
      </div>
      <br />
      <div className="form-group">
      <label>
        Budget Per Person (in USD):
        <input type="numeric"  className="form-control" min="0" name='budget' value={formData.budget} onChange={onChange} />
      </label>
      <label>{formError.budgetError &&<p style={{color:'red'}}>Please enter budget per person</p>}</label>
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
