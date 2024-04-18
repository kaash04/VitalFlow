import React, { useState } from 'react';


function Add() {
 
    const [formData, setFormData] = useState({
        uname: '',
        age: '',
        bloodGroup:'',
        contactNumber:''
      });

      let name,value;
  const handleChange = async (e) => {
    name=e.target.name;
    value=e.target.value;
    setFormData({
      ...formData,
      [name]:value
    });
    
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {uname,age,bloodGroup,contactNumber}=formData;
console.log(formData);

    try {
      
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({uname,
          age,
          bloodGroup,
          contactNumber})

      });
      const data=await response.json();

      if(data.status!==422)
     {
       window.alert("User registered successfully");
       
      }
      else{
        // navigate('/api');
        window.alert("Something went wrong");
      }

      if(!response.ok) {
        throw new Error('Network response was not ok');
      }

     
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };      

    return (
        <div className='add'>

            <div className="form-container">
                <h2>Become a Blood Donor</h2>
                <form onSubmit={handleChange}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name='uname'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            name='age'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Blood Group:</label>
                        <input
                            type="text"
                            name='bloodGroup'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Number:</label>
                        <input
                            type="tel"
                            name='contactNumber'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='btn' type="submit" onClick={handleSubmit}>SUBMIT</button>
                </form>
            </div>

        </div>
    )
}

export default Add
