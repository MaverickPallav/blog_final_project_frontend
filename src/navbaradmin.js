import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';
import { Link } from "react-router-dom";
function NavbarAdmin(){
    // const [search,searchfind]=useState("")
    // const searchfindch=(event)=>{
    //     searchfind(event.target.value)
    // }
    // const showblog=(event)=>{
    //     //showblogs()
    //     searchfind('')
    // }

    // let username = window.localStorage.getItem('user_name')
    // let userid = window.localStorage.getItem('user_id')
//     return (
//         <div className="container">
//     <div className="row">
//     <nav className="navbar navbar-fixed-top navbar-expand-lg navcol " id="navbar">
//         <div className="brand"><a className="navbar-brand brand" href="#">{username}</a></div>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
      
//         <div className="collapse navbar-collapse navbarflex" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto uldesign">
//             <li className="nav-item lidesign">
//               <Link to={{pathname:`/`}}><div className="nav-link">Home</div></Link>
//             </li>
//             <li className="nav-item lidesign">
//             <Link to={{pathname:`/blogs`}}><div className="nav-link">Profile</div></Link>
//               </li>
//               <li className="nav-item lidesign" >
//               <Link to={{pathname:`/blogs/add`}}><div className="nav-link">Add blogs</div></Link>
//               </li>
//               <li>
//                 <label className="searchfield"> 
//               <input value={search} onChange={searchfindch} placeholder="search the blog"></input>
//               <button onClick={showblog}>Search</button></label>
//                 </li>  
//           </ul></div></nav></div>
// </div>

//   );

function Signout(){
  window.localStorage.clear();
}
return (
  <div className="container">
<div className="row">
<nav className="navbar navbar-fixed-top navbar-expand-lg navcol " id="navbar">
  <div className="brand">Admin</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse navbarflex" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto uldesign">
      {/* <li className="nav-item lidesign">
        <Link to={{pathname:`/blogs`}}><div className="nav-link">Home</div></Link>
      </li>
      <li className="nav-item lidesign">
      <Link to={{pathname:`/blogs/myblogs`}}><div className="nav-link">Profile</div></Link>
        </li>
        <li className="nav-item lidesign" >
        <Link to={{pathname:`/blogs/add`}}><div className="nav-link">Add blogs</div></Link>
        </li> */}
        <li>
        <Link to={{pathname:`/`}}><div className="nav-link" onClick={(event)=> Signout(event.target.value)}>Sign Out</div></Link>
          </li>  
    </ul></div></nav></div>
</div>

);
}
export default NavbarAdmin