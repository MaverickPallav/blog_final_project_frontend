import {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Link ,useNavigate
} from "react-router-dom"
import './design.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import NavbarAdmin from './navbaradmin';
function Myblogs() {
    const API_url = "http://127.0.0.1:3000/allauthor";
    //const navigate = useNavigate();
    let [movies, setMovies] = useState([]);
    const [search,setSearch]=useState("");
    let inputHandler = (e) => {
    //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setSearch(lowerCase);
    };
    useEffect(() => {
        getMovies()
        }, [])
    const getMovies = async () => {

        let response = await axios.get(API_url)
        setMovies(response.data);
        console.log(response.data)
    }
    // function handleDelete(event , title){
    //      setMovies((prevblog)=>{
    //         return  prevblog.filter((blog)=>{
    //           if(blog.Title !== title){
    //            return blog;
    //         }
    //         return false
    //          })
    //        });

    // } 

    const deleteMovies = async (event,Name,authorid) => {
        console.log(authorid + " " + Name)
        setMovies((prevblog)=>{
            return  prevblog.filter((blog)=>{
              if(blog.Name !== Name){
               return blog;
            }
            return false
             })
           });
        let data ={
            id: authorid
        }
        console.log(data)
        let response = await axios.post("http://127.0.0.1:3000/removeauthor",data)
        console.log(response.data)
    }

    // function handledit(event,title,description){
    //   console.log(title)
    //   console.log(description)
      
    // }     
    const filteredData = movies.filter((el) => {
        //if no input the return the original
        if (search === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.Name.toLowerCase().includes(search)
        }
    })
    return (
        <div className="container-fluid">
          <div className="row">
            <NavbarAdmin/>
          </div>
        <div className="container-fluid">
        <div className="row"><label className="searchfield"> 
          <input value={search} onChange={inputHandler} placeholder="search the author"></input>
        </label></div>
        </div>
            <div className="moviedisplay">
            {
              filteredData.map(movie => {return (<div className="col-4 carddesign"><div className="card shadow code2">
                {/* <div className="inner">
                  <img src={movie.Image} alt=""className="card-img-top"/>
                  </div> */}
                <div className="card-body text-center design">
                  <h5 className="card-title">Name:{movie.Name}</h5>
                  <h5 className="card-title">Email:{movie.Email}</h5>
                  <h5 className="card-title">Password:{movie.Password}</h5>
                  <p className="card-text">
                    Bio:{movie.Bio}
                  </p>
                  {/* <Link to={{pathname:`/editauthor`}}><div className="col-3 btn btn-primary btdesign"><span className="buttonsize">Edit<br></br>Details...</span></div></Link> */}
                  {/* <Link to={{pathname:`/blogs/moredetails/${movie.id}`}}><div className="col-3 btn btn-primary btdesign" ><span className="buttonsize">More Details...</span></div></Link> */}
                  <div className="col-3 btn btn-primary btdesign" onClick={event => deleteMovies(event,movie.Name,movie.id)}><span className="buttonsize">Delete Details...</span></div>
                </div>
            </div></div>)})
            }</div>
            </div>
      )
}

export default Myblogs