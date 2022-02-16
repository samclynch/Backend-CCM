import React from "react";

function ScheduleService() {
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   telephone: "",
  //   subject: "",
  //   servicejob:"",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const onSubmit = (e) => {
  //   console.log("onSubmit triggered");
  //   e.preventDefault();
  //   uploadJob(formData);
  //   e.target.reset();
  // };


  // Add onSubmit for form 
  //Add onChange for inputs
  return (
    <div>
     
      <form style={{ display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 255, 0.5)"}}>
     
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  style={{ display: "flex", justifyContent: "center"}}
                  
                />
              </div>
              <div>
                <label>Last Name </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  style={{ display: "flex", justifyContent: "center"}}
                  
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  style={{ display: "flex", justifyContent: "center"}}
                  
                />
              </div>

              <div>
                <label>Telephone </label>
                <input
                  type="text"
                  name="telephone"
                  placeholder="Telephone"
                  style={{ display: "flex", justifyContent: "center"}}
                  
                />
              </div>
              <div>
                <label>Subject </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  style={{ display: "flex", justifyContent: "center"}}
                  
                />
              </div>
              <div>
                <label>Service Jobs: </label>
                <input type="checkbox" name="installation" placeholder="installation" value="installation" /> Installation
                <input type="checkbox" name="replacement" placeholder="replacement" value="replacement" /> Replacement
                <input type="checkbox" name="ac-repair" placeholder="ac-repair" value="ac-repair" /> AC Repair
                <input type="checkbox" name="ac-service" placeholder="ac-service" value="ac-service" /> AC Service
                <input type="checkbox" name="heater-repair" placeholder="heater-repair" value="heater-repair" /> Heater Repair
                <input type="checkbox" name="heater-service" placeholder="heater-service" value="heater-service" /> Heater Service
                <input type="checkbox" name="air-duct-cleaning" placeholder="air-duct-cleaning" value="air-duct-cleaning" /> Air Duct Cleaning
                <input type="checkbox" name="other" placeholder="other" value="other"/> Other
              </div>
              <div>
                <label style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Message </label>
                <input
                  type="text" 
                  name="message"
                  placeholder="Message"
                  style= {{width:"300px", height: "300px"}}
                 
                />
                
              </div>
              
              <button className="button" type="submit" style={{display: "flex", justifyContent: "center", height: "50px", width: "300px", marginTop: "5px", alignItems: "center", backgroundColor: "orange"}}>
              Send Message
            </button>
          </form>

            
    </div>
  );
}

export default ScheduleService;