import { Dialog } from '@material-ui/core';
import { useState, useEffect } from "react";
import Image from "next/image"

import photogallery from "./../data/photogallery.json"

import styles from "./../styles/imageGallery.module.css"
/////////////////////////////////////////////
/////////////////////////////////////////////
function Photogallery(props){
    const [picIndex, setPicIndex] = useState(0)

//PHOTOGALLERY COLLAPSER
//PHOTOGALLERY COLLAPSER
const [openGallery, setOpenGallery] = useState(true)
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
                        Close &#9932;
                    </div>
                </>:<>
                    <div className={styles.imageControllerTab}
                    onClick={()=>{setOpenGallery(true)}}> 
                        Open &#9732;
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
    let anImage = photogallery.map((elem, i)=>
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
} export {Photogallery}