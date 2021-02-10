import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import request from '../../apis/Request';
import Rows from './Rows';
import Footer from '../Main/Footer';
const HomeScreen = () => {
    return (
        <div className="homeScreen">
            {/* Navbar */}
               <Nav/>
            {/* Banner */}
               <Banner/>
            {/* rows */}
              <Rows title={'NETFLIX ORIGINALS'} 
              fetchURL={request.fetchNetflixOriginlas}
              isLargeRow
              />
              <Rows title={'ACTION MOVIES'} 
              fetchURL={request.fetchActionMovies}
              />
              <Rows title={'COMEDY MOVIES'} 
              fetchURL={request.fetchComedyMovies}
              />
              <Rows title={'HORROR MOVIES'} 
              fetchURL={request.fetchHorrorMovies}
              />
              <Rows title={'ROMANTIC MOVIES'} 
              fetchURL={request.fetchRomanceMovies}
              />
              <Rows title={'DOCUMENTRIES'} 
              fetchURL={request.fetchDocumentries}
              />
              <Footer/>
        </div>
    )
}

export default HomeScreen
