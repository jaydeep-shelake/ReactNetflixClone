import React ,{useState,useEffect}from 'react';
import './Banner.css';
import TMDB from '../../apis/TMDB';
import request from '../../apis/Request';
import {FaRegPlayCircle,FaPlus,FaStar,FaRegStar} from 'react-icons/fa';
import BannerSkeleton from '../skeleton/skeletonElements/BannerSkeleton';

export const getStarts=(moveiName)=>{
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

const Banner = () => {
  
     const [movie,setMovie]=useState(null);

     useEffect(()=>{
       const fetchData=async()=>{
            const {data}=await TMDB.get(request.fetchNetflixOriginlas);
            setMovie(data.results[Math.floor(Math.random()*data.results.length-1)]);
            //gentrate a random number
            return data;
       }
       fetchData();
     },[]);

   
    const truncket=(string,n)=>{
      return string?.length>n ? string.substr(0,n-1)+'...': string;
    }
    return (
        <header className="Banner" style={{
            background:`rgba(0,0,0,0.5)url(https://image.tmdb.org/t/p/original/${movie&&movie.backdrop_path})`,          
        }}>
          { movie!==null?
          <div className="bannerContents">
              <h1 className="bannerTitle">{movie?.name || movie?.original_name || movie?.title}</h1>
              <div className="bannerBtns">
                  <button className="bannerBtn"><FaRegPlayCircle style={{marginRight:'10px',fontSize:"18px",fontWeight:'600'}}/> Play</button>
                  <button className="bannerBtn"><FaPlus style={{marginRight:'10px',fontSize:"18px",fontWeight:'600'}}/>My List</button>
              </div>
              <h1 className="bannerDescription">{truncket(`${movie?.overview} `,150)}</h1>
              <h3 className="realse">Relase: {movie?.first_air_date || movie?.release_date}</h3>
              <span className="rating">{getStarts(movie?.vote_average)} {movie?.vote_average/2}</span>
          </div>:<BannerSkeleton/>}
          <div className="Banner--fadeBottom"/>
        </header>
    )
}

export default Banner;
