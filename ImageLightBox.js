import React, { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
const arrayOfImage =[
    "image/hh.jpg",
    "image/iu.jpg",
    "image/nbb.jpg",
    "image/tr.jpg",
    "image/bbb.jpg",
    "image/gg.jpg",
]

function ImageLightBox(){
    const [indexOFImage, setIndexImage] =useState(0);
    const [showModel, setShowModel] = useState(false);

    return(
        <div className="ImageLightBox">
            <h1 style={{color : "green"}}>
                Image Lightbox Example
            </h1>
            {
                arrayOfImage.map((img,index) => (
                    <img 
                        key={img}
                        style={{height: "250px", width: "250px", margin: "20px"}}
                        src={img}
                        alt={img}
                        onClick = {() => setIndexImage(index)}
                    />
                ))}
            <div>
                <button type="button" onClick={() => setShowModel(true)}> Show images</button>
            </div>
        </div>
    );
}
export default ImageLightBox;