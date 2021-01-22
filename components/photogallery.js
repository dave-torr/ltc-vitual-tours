import { useState, useEffect } from "react";
import Image from "next/image"

import { Dialog } from '@material-ui/core';

import photogallery from "./../data/photogallery.json"

import styles from "./../styles/imageGallery.module.css"

/////////////////////////////////////////////
/////////////////////////////////////////////
function Photogallery(props){
    const [picIndex, setPicIndex] = useState(0)

//PHOTOGALLERY COLLAPSER
//PHOTOGALLERY COLLAPSER
const [openGallery, setOpenGallery] = useState(true)
const [galleryExpander, setgalleryExpander] =useState(false)
const TitleAndCollapser=()=>{
    return(
        <>  
            <div style={{width:"100vw"}}>
            <div className={styles.landingTitle}> 
                Image Gallery
            </div>
            <div className={styles.imageTabCont}>
                {openGallery?
                <>
                    <div className={styles.imageControllerTab}
                    onClick={()=>{setOpenGallery(false)}}> 
                        Close Gallery &#9932;
                    </div>
                </>:<>
                    <div className={styles.imageControllerTab}
                    onClick={()=>{setOpenGallery(true)}}> 
                        Open Gallery &#9732;
                    </div>
                </>}
            </div>
            </div>
        </>
    )
}

//IMAGE GRID    
//IMAGE GRID    
const imageThumbnailGrid=()=>{
    let galThumbnailNumber;

    if(!galleryExpander){
        galThumbnailNumber=photogallery.slice(0,4);
    } else {
        galThumbnailNumber=photogallery
    }

    let anImage = galThumbnailNumber.map((elem, i)=>
        <div key={`image${i}`} 
            className={styles.anImageThumbnail}
            onClick={()=>{
                setPicIndex(i)
                props.closeImgViewer(true)
            }}> 
        <Image
            width={200}
            height={150}
            alt={elem.description}
            src={elem.pathname}
            />
        <div className={styles.thumbnailSub}>
            {elem.description}
        </div>    
        </div>
    )
    return(
        <>
            <div className={styles.imageGrid}>
                {anImage}
                {galleryExpander?
                <>
                    <div className={styles.galleryExpanderCont} onClick={()=>setgalleryExpander(false)}> 
                        &#9969; <br></br>
                        Show less pictures!
                    </div>
                </>:<>
                    <div className={styles.galleryExpanderCont} onClick={()=>setgalleryExpander(true)}> 
                        &#9969; <br></br>
                        Show all 15 pictures in gallery!
                    </div>
                </>}
            </div>
        </>
    )
}

//IMAGE MODAL
//IMAGE MODAL
const imageDisplayer=()=>{
    return(
        <>
        <Dialog open={props.open} onClose={()=>props.closeImgViewer(false)}> 
            <div className={styles.photoGalDialog}>
                <Image
                    width={photogallery[picIndex].dimentionWidth}
                    height={photogallery[picIndex].dimentionHeight}
                    alt={photogallery[picIndex].description}
                    src={photogallery[picIndex].pathname}
                    />
                </div>
                {imageData()}
                {imageControllers()}
                <div className={styles.closeImgBTN}
                onClick={()=>{props.closeImgViewer(false)}}> &#9932; </div>
        </Dialog>
        </>
    )
}
const imageData=()=>{
    return(
        <>
        <div className={styles.imageLocationTxt}>
            {photogallery[picIndex].location}
        </div>
        <div className={styles.imageDescriptionTxt}>
            {photogallery[picIndex].description}
        </div>
        </>
    )
}
const imageControllers=()=>{
    return(
        <div className={styles.imgControllers}>
            {picIndex===0? 
                <>
                    <div className={styles.disabledController} > &#8592; </div>
                </>:<>
                    <div className={styles.controllerArrows} 
                    onClick={()=>setPicIndex(picIndex-1)} > 
                        &#8592; </div>
                </>}
            {picIndex===photogallery.length-1? 
                <>
                    <div className={styles.disabledController} > &#8594; </div>
                </>:<>
                    <div className={styles.controllerArrows}
                    onClick={()=>setPicIndex(picIndex+1)}> 
                        &#8594; </div>
                </>}
        </div>    
    )
}


/////////////////////////////////////
/////////////////////////////////////
    return(
        <div className={styles.galleryGenCont}>
            {TitleAndCollapser()}
            {openGallery&&
            <>
                {imageThumbnailGrid()}
            </>}
            {imageDisplayer()}
        </div>
    )
};


let prlxImg1 = "./photogallery/wideAndLow/layingSeaLion.jpg"
function Parallaxer(props){
    
    return(
        <>  
            <div className={styles.parallaxShadowEffect}> </div>
            <div className={styles.homeParallax} style={{
                backgroundImage:`url(${prlxImg1})`,
                width: "100%",
                transform: `translate(0px, 0px)`,
                minHeight: "310px",
                backgroundSize: "100% auto",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center"
                }}></div>
        </>
    )
} export {Photogallery, Parallaxer}