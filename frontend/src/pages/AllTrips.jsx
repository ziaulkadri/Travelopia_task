import React, { useEffect, useState } from 'react'
import TravellerService from '../services/traveller.service';
import './AllTrips.css'
export default function AllTrips() {

    const [formData, setFormData] = useState([]);


    const fetchData=async()=>{
       await TravellerService.getTrip().then(
            (response) => {
                setFormData(response)
           console.log(response)
            },
            (error) => {
              console.log(error)
            }
          )
    }

    useEffect( () => {
        
         fetchData()
    }, [])
    return (
        <>
        <section className="heading">
        <h1>All Trips</h1>
        
    </section>
        <div className="card-grid">
      {formData.map((data,k) => (
        <div key={k} className="card">
         
          <h5>{data.name}</h5>
                            <h5>{data.email}</h5>
                                <h5>{data.destination}</h5>
                                 <h5>{data.no_of_travelers}</h5>
                               <h5>{data.budget_per_person}</h5>
        </div>
      ))}
    </div>
    </>
        
    )
}

