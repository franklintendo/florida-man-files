import React from "react";

function Phone() {

    const playVideo = () => {
        let phoneDiv = document.querySelector(".florida__case-file--phone").classList;
        let phonePlayBtn = document.querySelector(".florida__case-file--phone-play-btn").classList;
        let phoneCloseBtn = document.querySelector(".florida__case-file--phone-close-btn").classList;

        phoneDiv.add("playing");
        phoneDiv.remove("closing");
        phonePlayBtn.add("d-none");
        phoneCloseBtn.remove("d-none");

    }

    const closeVideo = () => {
        let phoneDiv = document.querySelector(".florida__case-file--phone").classList;
        let phonePlayBtn = document.querySelector(".florida__case-file--phone-play-btn").classList;
        let phoneCloseBtn = document.querySelector(".florida__case-file--phone-close-btn").classList;

        phoneDiv.remove("playing");
        phoneDiv.add("closing");
        phoneCloseBtn.add("d-none");
        setTimeout(() => { phonePlayBtn.remove("d-none"); }, 500);

    }

    return(
        
        <div className="florida__case-file--phone">
            <p onClick={closeVideo} className="florida__case-file--phone-close-btn d-none">x</p>
            <img onClick={playVideo} className="florida__case-file--phone-play-btn" src={require('../img/play-btn.png')} alt="play button" />
            <img className="florida__case-file--phone-img" src={require('../img/phone.png')} alt="phone" />
        </div>          
            
    )
}

export default Phone;