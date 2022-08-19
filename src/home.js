import {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Link, Navigate , useNavigate
} from "react-router-dom"
import './design.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
function Home(props) {
  const navigate = useNavigate();

    let [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies()
        }, [])
    const getMovies = async () => {
        //const moviesData = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=86479a88&s=batman`)
        let response = await axios.get(`http://127.0.0.1:3000/allblog`)
        if(response.status === 200){
            //window.alert('Your blog is added successfully')
            navigate("/blogs",{replace:true})
        }else{
            
        }
        console.log("Responses---------",response.status)
        setMovies(response.data);
    }
    console.log(movies)    
    const filteredData = movies.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.Title.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className="container-fluid">
            <div className="moviedisplay">
            {
              filteredData.map(movie => {return (<div className="col-4 carddesign"><div className="card shadow code2">
                <div className="inner">
                  <img src={movie.Poster} alt=""className="card-img-top"/>
                  </div>
                <div className="card-body text-center design">
                <h3 className="card-title">Author: {movie.author_name}</h3>
                  <h3 className="card-title">{movie.Title}</h3>
                  <p className="card-text">
                    {movie.Summary}
                  </p>
                  <div className="btn btn-primary"><span className="buttonsize">More Details...</span></div>
                </div>
            </div></div>)})
            }</div>
            </div>
      )
}

export default Home