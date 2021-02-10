import React from 'react'
import './Detail.css';
import DetailList from './DetailList';
import Accordion from './Accordion';

const DetailInfo = () => {

    return (
        <div>
            <DetailList className="firtSection"
            h1={"Enjoy on your TV."} h3={">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}
            url={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"}
            />
            <DetailList
             className="secondSection"
             h1={"Download your shows to watch offline."} h3={"Save your favourites easily and always have something to watch."}
             url={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"}
            />
           <DetailList className="thirdSection" h1={"Watch everywhere."}
            h3={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
            url={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"}
           />
           <div className="freqQue">
              <Accordion question="What is Netflix" ans="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."/>
              <Accordion question="How much dose Netflix costs?" ans="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts."/>
              <Accordion question="Where can I watch?" ans="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."/>
              <Accordion question="How do I cancel?" ans="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."/>
              <Accordion question="What can I watch On Netflix?" ans="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."/>
           </div>
        </div>
    )
}

export default DetailInfo
