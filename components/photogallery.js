import { Dialog } from '@material-ui/core';
import { useState, useEffect } from "react";
import Image from "next/image"

import photogallery from "./../data/photogallery.json"

import styles from "./../styles/components.module.css"
/////////////////////////////////////////////
/////////////////////////////////////////////
function Photogallery(props){
    
    console.log(photogallery)


const [picIndex, setPicIndex] = useState(0)

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

    return(
        <>
            {imageDisplayer()}
        </>
    )
} export {Photogallery}