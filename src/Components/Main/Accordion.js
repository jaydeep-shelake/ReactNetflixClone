import React ,{useState,useRef}from 'react'
import {FaPlus} from 'react-icons/fa';
const Accordion = ({question,ans}) => {
    

    const [active,setActive]=useState("");
    const [rotate,setRotate]=useState("0deg");
    const toogleAccordion=()=>{
        setActive(active===""?"active":"");
        setRotate(active==="active"?"0deg":"45deg")
    }
    return (
        <>
         <div className="question" onClick={toogleAccordion}>{question} <FaPlus style={{transform:`rotate(${rotate})`}}/></div>
         <div className={`ans ${active}`}>{ans}</div>   
        </>
    )
}

export default Accordion;
