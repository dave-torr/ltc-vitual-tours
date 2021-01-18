import { useState, useEffect } from "react";
import styles from "./../styles/vidPlayer.module.css"
import Image from "next/image"

function VideoPlayer(props){

const yacumaPlayerCont=()=>{

    return(
        <>
            <div className={styles.koriotoText}>
                <div className={styles.koriotoLogo}>
                <Image 
                    src="/logos/logoCppr.png"
                    width={1000}
                    height={1128}
                    alt="Korioto Band Logo"
                />
                </div>
                Explore fresh new tunes influnced by the Amazon Jungle in this 6 part video-album by Ecuadorian band Korioto.
                <div className={styles.koriotoQuote}>
                    <i>"Through this body of work we aim to grant the jungle a voice of resistance, against the crushing cement avalanche of the modern world"</i>
                    <br></br>
                    - Nico and Checho Espinoza
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://www.instagram.com/korioto_ec/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image 
                            src="/logos/instagram.png"
                            width={40}
                            height={40}
                            alt="Instagram Icon link"
                        />
                    </a>
                    <a href="https://www.youtube.com/channel/UCSjCQgRxBLhlC63eUMyg2kQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image 
                            src="/logos/youtube.png"
                            width={40}
                            height={40}
                            alt="Youtube Icon Link"
                        />
                    </a>
                </div>
            </div>
            <div className={styles.YacumaPlayer}>
            Yacuma &#9932; Korioto
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLFSQuJvkl7dSNx-pmsf8g8qpI_U9yJcWV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    )
}

    return(
        <>
        {props.content==="vitualTourIntro"&&
            <div className={styles.koriotoGenCont}>
                {yacumaPlayerCont()}
            </div>}
        {props.content==="korioto"&&
            <div className={styles.koriotoGenCont}>
                {yacumaPlayerCont()}
            </div>}
        </>
    )
} export {VideoPlayer}