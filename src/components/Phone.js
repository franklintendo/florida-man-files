import React from "react";

function Phone() {

    const playVideo = () => {
        let phoneDiv = document.querySelector(".florida__case-file--phone").classList;
        let phonePlayBtn = document.querySelector(".florida__case-file--phone-play").classList;
        let phoneCloseBtn = document.querySelector(".florida__case-file--phone-close").classList;

        phoneDiv.add("playing");
        phonePlayBtn.add("d-none");
        phoneCloseBtn.remove("d-none");

    }

    const closeVideo = () => {
        let phoneDiv = document.querySelector(".florida__case-file--phone").classList;
        let phonePlayBtn = document.querySelector(".florida__case-file--phone-play").classList;

        let phoneCloseBtn = document.querySelector(".florida__case-file--phone-close").classList;

        phoneDiv.remove("playing");
        phonePlayBtn.remove("d-none");
        phoneCloseBtn.add("d-none");

    }

    return(
        
        <div className="florida__case-file--phone">
            <p onClick={closeVideo} className="florida__case-file--phone-close d-none">x</p>
            <img onClick={playVideo} className="florida__case-file--phone-play" src={require('../img/play-btn.png')} alt="play button" />
            <img className="florida__case-file--phone-img" src={require('../img/phone.png')} alt="phone" />
        </div>          
            
    )
}

export default Phone;