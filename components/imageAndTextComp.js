import { useEffect, useState } from 'react'
import styles from '../styles/misc.module.css'
import Image from "next/image"


function VtIntro(props){

    return(
        <>
            <div className={styles.IntroGenCont}>
                <div className={styles.LandingImg}> 
                    <Image
                        width={1000}
                        height={750}
                        alt="A Galapagos Journey"
                        src="/photogallery/vitualTour-06.jpg"
                    />
                </div>
                Logo and image intro
            </div>
        </>
    )
};

function AppExplainer(props){

    return(
        <>
            <div className={styles.tourGenCont}>
            Welcome div, with short explanation of V.T. app
            </div>
        </>
    )
};
function PackingList(props){

    return(
        <>
            <div>
                Logo and image intro
            </div>
        </>
    )
};
function DiscountAndInvite(props){

    return(
        <>
            <div>
                Logo and image intro
            </div>
        </>
    )
};
export {VtIntro, AppExplainer, PackingList, DiscountAndInvite}