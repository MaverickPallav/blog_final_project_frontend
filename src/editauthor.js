//Not working currently
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from './navbar';
import axios from 'axios';
function Edit(){
     const navigate = useNavigate();
     let params=useParams()
    //  const API_url_thisblog = `http://127.0.0.1:3000/showthisblog`;
    const API_url = "http://127.0.0.1:3000/showuserblog";
    let userid = window.localStorage.getItem('user_id')
     const API_url_editblog = `http://127.0.0.1:3000/editauthor`;
    let [movies, setMovies] = useState([]);
    let editmovie={};
    useEffect(() => {
        getMovies()
        }, [])

    const getMovies = async () => {
        // let data = {
        //     id: params
        // }
        // let response = await axios.post(API_url_thisblog,data)
        // console.log("Responses---------",response.data)
        // if(response.status === 200){
        //     //window.alert('Your blog is added successfully')
        //     setMovies(response.data);
        // }else{
            
        // } 
        let data ={
            authors_id : userid
        }
        let response = await axios.post(API_url,data)
        setMovies(response.data);
        console.log(response.data)
    }
    
    console.log(movies.length)
    
    for(let i=0;i<movies.length;i++){
        if (movies[i].id == params.id){
            editmovie=movies[i]
            console.log(editmovie)
        }
    }

    const [title,changetitle]=useState('')
    const [summarydata,changesummarydata]=useState('')
    const [images, setImages]=useState([]);
    const [imageURLs, setImageURLs]=useState([]);
    const [description,changedescription]=useState('')
    const [url,seturl]=useState('');
    const titlechange=(event)=>{
        changetitle(event.target.value)
    }
    const summarychange=(event)=>{
        changesummarydata(event.target.value)
    }

    useEffect(()=>
    {
        if (images.length<1) return;
        const newImageUrls=[];
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    },[images]);
    function onImageChange(e){
        setImages([...e.target.files]);
    }

    const formHandler = async (event) =>{
        event.preventDefault();
        console.log("form submitted")

        let data ={ 
            "id" : params.id,
            "Title": title,
            "Summary": summarydata,
            "Description": description,
            "Image": url
        }
        changetitle(""); changesummarydata(""); changedescription(""); seturl("");

        let response = await axios.post(API_url_editblog,data)
        if(response.status === 200){
            window.alert('Your blog is edited successfully')
            navigate("/blogs",{replace:true})
        }else{
            
        }
        console.log("Responses---------",response.status)
    }
    return(<div className="container-fluid">
            <div className="row bg">
                <Navbar />
                <div className="col-10">
                    <h1 className="text-center">Edit Blog</h1>
                    
                <form onSubmit={formHandler} >
                    <div className="container-fluid">
                    <div className="row">
                        <span>Title of the Blog</span>
                      </div>
                      <div className="row">
                        <textarea value={title} onChange={titlechange}  maxLength={1000} placeholder={editmovie.Title}></textarea></div>
                        <div className="row">
                        <span>The description of the blog</span>
                      </div>
                      <div className="row">
                        <textarea value={description} onChange={(event)=>{changedescription(event.target.value)}} placeholder={editmovie.Description} maxLength={1000}></textarea></div>
                    <div className="row">
                        <span>Body of the blog</span>
                      </div>
                      <div className="row">
                        <textarea value={summarydata} onChange={summarychange}rows="15" placeholder={editmovie.Summary}></textarea>
                        </div>
                        <div className="row">
                        <textarea value={url} onChange={(event)=>seturl(event.target.value)} placeholder={editmovie.Image} maxLength={1000}></textarea>
                        </div>
                        <div className="row">    
                        <button type="submit" className="submitbutton">Submit</button></div>
                        <div class="row">
                        <span>Upload Image: </span>
                        <div>
                         <input type="file" multiple accept="image/*" onChange={onImageChange}/>
                        {imageURLs.map(imageSrc=><img className="uploadimage" src={imageSrc} alt=""/>)}
                    </div>
                        </div>
                        </div>
                  </form>
                </div>
            </div>
        </div>)
}
export default Edit;