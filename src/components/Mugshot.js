import React from "react";

function Mugshot({image}) {

    return(
        
        <div className="florida__case-file--photo">
            <img className="florida__case-file--photo-container d-none d-md-block" src={require('../img/photo-container.png')} alt="Polaroid" />

            <img className="florida__case-file--photo-container d-block d-md-none" src={require('../img/photo-container-no-clip.png')} alt="Polaroid" />

            <img name={image.link} src={require(`../img/mugshot/${image.link}.png`)} alt={image.name} className={`florida__case-file--photo-mugshot`} />

        </div>
                    
            
    )
}

export default Mugshot;