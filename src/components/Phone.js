import React from "react";

function Phone({video: {video}}) {

    const playVideo = () => {
        let phoneDiv = document.querySelector(".florida__case-file--phone").classList;
        let phonePlayBtn = document.querySelector(".florida__case-file--phone-play-btn").classList;
        let phoneCloseBtn = document.querySelector(".florida__case-file--phone-close-btn").classList;
        let overlayBackground = document.querySelector(".close-background").classList;
        let video = document.querySelector("#incident-video");

        phoneDiv.add("playing");
        phoneDiv.remove("closing");
        phonePlayBtn.add("d-none");
        phoneCloseBtn.remove("d-none");
        overlayBackground.remove("d-none");
        setTimeout(() => { video.classList.remove("d-none"); video.play(); }, 500);

    }

    const closeVideo = () => {
        let phoneDiv = document.querySelector(".florida__case-file--phone").classList;
        let phonePlayBtn = document.querySelector(".florida__case-file--phone-play-btn").classList;
        let phoneCloseBtn = document.querySelector(".florida__case-file--phone-close-btn").classList;
        let overlayBackground = document.querySelector(".close-background").classList;
        let video = document.querySelector("#incident-video");

        phoneDiv.remove("playing");
        video.classList.add("d-none");
        phoneDiv.add("closing");
        phoneCloseBtn.add("d-none");
        overlayBackground.add("d-none");
        setTimeout(() => { phonePlayBtn.remove("d-none"); }, 500);

    }

    return(
        
        <div className="florida__case-file--phone">
            <p onClick={closeVideo} className="florida__case-file--phone-close-btn d-none">x</p>
            <img onClick={playVideo} className="florida__case-file--phone-play-btn" src={require('../img/play-btn.png')} alt="play button" />
            <video key={video} id="incident-video" className="florida__case-file--phone-video d-none" controls="controls">
                <source src={require(`../video/${video}.avi`)} type="video/avi"></source>
                <source src={require(`../video/${video}.webm`)} type="video/webm"></source>
                <source src={require(`../video/${video}.ogv`)} type="video/ogg"></source>
                Your browser does not support HTML video.
            </video>
            <img className="florida__case-file--phone-img" src={require('../img/phone.png')} alt="phone" />
            <div className="close-background w-100 h-100 d-none" onClick={closeVideo}>
            
          </div>
        </div>          
            
    )
}

export default Phone;