import {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Link ,useNavigate
} from "react-router-dom"
import './design.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
function Myblogs() {
    const API_url = "http://127.0.0.1:3000/showuserblog";
    let userid = window.localStorage.getItem('user_id')
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
        let data ={
            authors_id : userid
        }
        let response = await axios.post(API_url,data)
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

    const deleteMovies = async (event,title,Blogid) => {
        console.log(Blogid + " " + title)
        setMovies((prevblog)=>{
            return  prevblog.filter((blog)=>{
              if(blog.Title !== title){
               return blog;
            }
            return false
             })
           });
        let data ={
            id: Blogid
        }
        console.log(data)
        let response = await axios.post("http://127.0.0.1:3000/deleteblog",data)
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
            return el.Title.toLowerCase().includes(search)
        }
    })
    return (
        <div className="container-fluid">
          <div className="row">
            <Navbar/>
          </div>
        <div className="container-fluid">
        <div className="row"><label className="searchfield"> 
          <input value={search} onChange={inputHandler} placeholder="search the blog"></input>
        </label></div>
        </div>
            <div className="moviedisplay">
            {
              filteredData.map(movie => {return (<div className="col-4 carddesign"><div className="card shadow code2">
                <div className="inner">
                  <img src={movie.Image} alt=""className="card-img-top"/>
                  </div>
                <div className="card-body text-center design">
                  <h3 className="card-title">{movie.Title}</h3>
                  <p className="card-text">
                    {movie.Summary}
                  </p>
                  <Link to={{pathname:`/blogs/myblogs/edit/${movie.id}`}}><div className="col-3 btn btn-primary btdesign"><span className="buttonsize">Edit<br></br>Details...</span></div></Link>
                  <Link to={{pathname:`/blogs/moredetails/${movie.id}`}}><div className="col-3 btn btn-primary btdesign" ><span className="buttonsize">More Details...</span></div></Link>
                  <div className="col-3 btn btn-primary btdesign" onClick={event => deleteMovies(event,movie.Title,movie.id)}><span className="buttonsize">Delete Details...</span></div>
                </div>
            </div></div>)})
            }</div>
            </div>
      )
}

export default Myblogs