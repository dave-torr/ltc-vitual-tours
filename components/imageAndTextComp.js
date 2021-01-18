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
                <div className={styles.logoAndIntro}>
                    <div className={styles.tourName}> The <br></br> Galapagos <br></br>Islands </div>
                    
                    <div className={styles.tourSubName}> {" "} - a virtual experience by </div>

                    <img src="/logos/fontface-blk.PNG" alt="Explorer Chick Logo" className={styles.Fontlogo} />

                    <img src="/logos/pinkandblack.PNG" alt="Explorer Chick Logo" className={styles.PinkLogo} />
                </div>
            </div>
        </>
    )
};

function AppExplainer(props){
    return(
        <>
            <div className={styles.appIntroContainer}>
                <div className={styles.appTourTextCont} > 
                    <div className={styles.appIntroTitle}> Your galapagos islands <br></br> virtual tour mini-app 
                    </div>
                    <div className={styles.appIntroSubTitle}> Access complimentary information, a downloadable photo gallery, packing lists and much more!
                    </div>
                    <div className={styles.appIntroText}> In addition to the virtual session, you can access this site anytime you want, learn more about the Galapagos Islands, listen to some amazing music, gather information about upcoming trips, or watch some of the exclusive content we have created for you!
                    </div>
                </div>
                <div className={styles.appTourImage}>
                    <img src="/miscPics/mobileExample.png" className={styles.deviceIMG}  />
                </div>
            </div>
        </>
    )
};
function PackingList(props){

    return(
        <>
            <div>
                Packing Lists
            </div>
        </>
    )
};
function DiscountAndInvite(props){

    return(
        <>
            <div>
                Digital Brochure Download / Tour video / Discount Cupon
            </div>
        </>
    )
};
export {VtIntro, AppExplainer, PackingList, DiscountAndInvite}