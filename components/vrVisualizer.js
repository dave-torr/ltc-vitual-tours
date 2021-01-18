import { useEffect, useState } from 'react'
import styles from '../styles/vrVis.module.css'


function VrDisplayer(props){

    const [windowAvail, setWindowAvail]= useState(false)
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            require('aframe')
            setWindowAvail(true)
        }
    },[])
    
    return(
        <>
            <div className={styles.vrGenCont}>
            VR Viewer! defining window
            {windowAvail&&
            <>
                <div className={styles.VrImage}>
                    <a-scene embedded>
                        <a-sky src="/photogallery/3sixty/R0010217.JPG" ></a-sky>
                    </a-scene>
                </div>
            </>}
            </div>
        </>
    )
} export {VrDisplayer}
