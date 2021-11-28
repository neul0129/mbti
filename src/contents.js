import React, {useState} from "react";
import {useMediaQuery} from "react-responsive";


const Contents = (props) => {
    const mbti = [ "ENFP", "ENFJ", "ENTP", "ENTJ", "ESFP", "ESFJ", "ESTJ", "ESTP", "INFJ",
                   "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP" ];
    const MbtiList = mbti.map((mbti, i) => (<div className="mbtiList" data-index={i} onClick={click}>
    <a className="mbtiListA" href="/" data-index={i} style ={{'backgroundColor':'#343131'}}>{mbti} </a></div>));

    console.log(MbtiList)
    
    const [selectedIndex, setSelectedIndex]=useState(0);
function click(e){
        e.preventDefault();
        document.querySelectorAll(".mbtiList")[selectedIndex].style.backgroundColor = '#343131';
        document.querySelectorAll(".mbtiListA")[selectedIndex].style.backgroundColor = '#343131';
        document.querySelectorAll(".mbtiListA")[selectedIndex].style.color = '#fff';
        setSelectedIndex(e.currentTarget.dataset.index);
        document.querySelectorAll(".mbtiList")[e.currentTarget.dataset.index].style.backgroundColor = '#fff';
        document.querySelectorAll(".mbtiListA")[e.currentTarget.dataset.index].style.backgroundColor = '#fff';
        document.querySelectorAll(".mbtiListA")[e.currentTarget.dataset.index].style.color = 'black';
    }
    // const display = document.querySelectorAll(".side").style.display = "none";
    const isSmallScreen = useMediaQuery({
        query: "(max-width: 767px)",
      });
    return(
        <div className="contents">
            <div className="side">      
            {/* {isSmallScreen ? '' :  {MbtiList}.array} */}
            {isSmallScreen &&  <div style={"display:none"}></div>}
                    {MbtiList} 
            </div>
            <div className="article">
                <h2>{props.title}</h2>
                <h3>{props.sub}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Contents;