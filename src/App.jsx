import { useState } from "react"
import'bootstrap/dist/css/bootstrap.css'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
//import validator from 'validator';
import validator from "validator";



function App() {
  const [id,setid] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
   // if (name && validator.isEmail(email) && phone)
   if (name && email && phone)
     {
      const newUser = {id, name, email, phone };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
      setPhone('');
    }
    /*
    else{
     setEmail("Enter valid Email");
     
    }
    */
  }

   const deletetable = (id) =>{
    
    setUsers(users.filter((a) => a.id !== id))
   }

 
   function updateTable(id) {

   setUsers(users.map(user =>
   user.id === id? {...user,phone:phone}:user
  
    
    ));
    setPhone("");
    
    }
    
 
  return (
    <>
   <div>
     
     
      <div >
        <h2 className ="row justify-content-center">user information</h2>
        <div  className ="row justify-content-center"style={{"paddingTop":"2%"}}>
          <div className="col-10 ">
           
          <input
          type="text"
          placeholder="Name"
          value={name}
         className=" form-control d-flex justify-content-center"
          onChange={(e) => setName(e.target.value)}
        />
          </div>
       
        </div>
        
       
         <div className ="row justify-content-center"style={{"paddingTop":"2%"}} >
          <div className="col-10">
          <input
          type="text"
          placeholder="Email"
          value={email}
          className=" form-control d-flex justify-content-center"
          onChange={(e) => setEmail(e.target.value)}
        />
          </div>
        
         </div>
        
        <div className ="row justify-content-center"style={{"paddingTop":"2%"}}>
          <div className="col-10">
          <input
          type="number"
          placeholder="Phone"
          value={phone}
          className=" form-control d-flex justify-content-center"
          onChange={(e) => setPhone(e.target.value)}
        />
          </div>
       
        </div>

        <div className="row justify-content-center">
        <div className="col-6 " style={{"paddingTop":"1%"}} >
        <button className=" custom-btn btn-2 " onClick={handleAddUser}>Add User</button>
        </div>
        </div>
        
        
      </div>

      <div className="row justify-content-center">
       <div className="col-sm-6">
        
        
      <table className="table" style={{"paddingTop":"2%"}}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Delete</th>
            <th scope="col">update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <th>
                <span onClick={()=>   deletetable(user.id)}><i  class="far fa-trash-alt delete"></i></span>
              </th>

              <th>
              <span onClick={() => updateTable(user.id)}><i className="fas fa-pencil-alt"></i></span>
                <input type="number"
                value={phone}
                placeholder="update phone"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)} 
             
                
                />
             
               
              </th>


            </tr>
          ))}
        </tbody>
      </table>
       </div>
      </div>




    </div>

    </>
  )
}

export default App