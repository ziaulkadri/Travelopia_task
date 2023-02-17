import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AllTrips from './AllTrips';
import TravelForm from './TravelForm';

function TravellerTrips() {
    const [addTrip,setAddTrip]=useState(true)


  return (
    <>
    <div style={{display:'flex' ,justifyContent: "center"}}>
      <div style={{display:'flex' ,justifyContent: "center"}} >
      <Button variant="primary" style={{marginRight: 10,marginTop:0}}onClick={()=>setAddTrip(!addTrip)}>{addTrip ?'All Trips':'Add Trip'}</Button></div>
      
    </div>
    {addTrip ? <TravelForm/> :<AllTrips/>}
    </>
    
    
  );
}

export default TravellerTrips;
