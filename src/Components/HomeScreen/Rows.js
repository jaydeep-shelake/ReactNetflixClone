import React ,{useState,useEffect}from 'react'
import './Row.css';
import TMDB from '../../apis/TMDB'; 
import {AIP_KEY} from '../../apis/Request';
import Modal from '../Modal';
import {FaStar,FaRegStar} from 'react-icons/fa';
import {BiTrendingUp,BiCameraMovie} from 'react-icons/bi';
import RowSkeleton from '../skeleton/skeletonElements/RowSkeleton';

const iconStyles ={
    fontSize:"42px",
    fontWeight:"600",
    marginLeft:"15px",
    marginRight:"30px"
}

const Rows = ({title,fetchURL,isLargeRow=false}) => {

    const [movies,setMovies]=useState([]);
    const [trialer,setTrailer]=useState([]);
    const [modal,setModal]=useState(false);
    const baseURL =`https://image.tmdb.org/t/p/original`;
 
    
 
    useEffect(()=>{
        const fetchMovies=async()=>{
            const {data}=await TMDB.get(fetchURL);
            setMovies(data.results)
            return data
        }
        fetchMovies();
    },[fetchURL]);

     const showTrailer=async(movie)=>{
        const {data} = await TMDB.get(`/movie/${movie.id}/videos?api_key=${AIP_KEY}&language=en-US`);
         setTrailer(data.results);
         setModal(true);
         console.log(data);
     }
     

     document.body.addEventListener('click',(e)=>{
         if(e.target.classList.contains('trailer')){
             setModal(false);
         }
         return;
     })


    const renderMovies = movies.map((movie,index)=>{
       const getStarts=(moveiName)=>{
            if(moveiName/2>=4){
                return (<><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></>);
            }
            if(moveiName/2===3 || moveiName/2<=3.9){
                return (<><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></>);
            }
            if(moveiName/2===2 || moveiName/2<=2.9){
                return (<><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></>);
            }
            
        }
    if ((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path)){
        return(
            <div className={`card ${isLargeRow?'LargeCard':'smallCard'}`}>
            <img onClick={()=>showTrailer(movie)} src={`${baseURL}/${isLargeRow?movie.poster_path:
          movie.backdrop_path}`} alt={movie.name}key={index} className={`rowPoster ${isLargeRow?'rowPosterLarge':'smallPoster'}`}
            />
           <span className={`movieNames`}>{movie?.name || movie?.title}</span>
           <div className="movieDetail">
           <span className={`rating `}>{getStarts(movie?.vote_average)} {movie?.vote_average/2}</span>
           <span className={`date `}>{ movie.first_air_date|| movie.release_date&&`Realse: ${movie?.first_air_date || movie?.release_date}`}</span>
           </div>
          </div>
        )  
    }
    })
    return (
        <>
        <div className='row'>
            <h2>{title==="NETFLIX ORIGINALS"&&<><BiTrendingUp style={iconStyles}/><span className="title">NETFLIX ORIGINALS</span></>
            ||<><BiCameraMovie style={iconStyles}/> <span className="title">{title}</span></>
            }</h2>
            <div className="rowPosters">
                  { movies.length>0 ? renderMovies 
                  : [1,2,3,4,5,6,7,8,9,10].map(n=><RowSkeleton key={n}/>)
                  }
            </div>
            
        </div>
        {
          modal&&trialer.length!==0&&<Modal trialer={trialer}/>
        }
        </>
    )
}
export default Rows
