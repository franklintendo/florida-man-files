import React from "react";

function Phone() {

    const playVideo = () => {
        let phoneDiv = document.querySelector(".florida__case-file--phone").classList;
        let phonePlayBtn = document.querySelector(".florida__case-file--phone-play").classList;

        phoneDiv.add("playing");
        phoneDiv.add("in-progress");
        phonePlayBtn.add("d-none");
    }

    return(
        
        <div className="florida__case-file--phone">
            <img onClick={playVideo} className="florida__case-file--phone-play" src={require('../img/play-btn.png')} alt="play button" />
            <img className="florida__case-file--phone-img" src={require('../img/phone.png')} alt="phone" />
        </div>          
            
    )
}

export default Phone;