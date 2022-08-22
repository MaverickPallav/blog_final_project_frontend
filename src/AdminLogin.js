import React , {useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    //const API_url = "http://127.0.0.1:3000/allauthor";
    const navigate = useNavigate();

    const[mail , setMail] = useState()
    const[password , setPassword] = useState()

    const formHandler = async (event) =>{
      event.preventDefault();
      console.log("form submitted")
      setMail(""); setPassword("");
      if(mail === "Admin" && password === "Admin123"){
        window.alert('logged in successfully')
        navigate("/Creatordashboard",{replace:true})
      }
      else{
        window.alert('Wrong admin credentials')
      }
      
    //   console.log(data);
    //   setMail(""); setPassword(""); 
    //   let response = await axios.post(API_url,data)
    //   console.log("Responses---------",response.data)

    //   if(response.status === 200){
    //       navigate("/blogs",{replace:true})
    //       window.alert('logged in successfully')
    //       window.localStorage.setItem('user_id',response.data.id)
    //       window.localStorage.setItem('user_name',response.data.Name)

    //   }else{
    //       navigate("",{replace:true})
    //       window.alert('wrong credentials')
    //   }
  }

  return (
    <div className='bg'>
    <div className="container h-100 loginform">
    <div className="row h-100 justify-content-center align-items-center">
    <Form onSubmit={formHandler} className='col-6'>
        <h1 className='logintag'> Login </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='emaillabel'>Email address</Form.Label>
        <Form.Control placeholder="Enter email" value={mail} onChange={event => {
           setMail(event.target.value);
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='passwordlabel'>Password</Form.Label>
        <Form.Control placeholder="Password" value={password} onChange={event => {
            setPassword(event.target.value);
        }}/>
      </Form.Group>
      <Button variant="primary" type="submit" className="submitbutton">
       Log in
      </Button>
      <div className='newusertag'><Link to={{pathname:'/'}}> Back to Login</Link> </div>
    </Form>
   
    </div>
    </div>
    </div>
  );
}

export default Login;





