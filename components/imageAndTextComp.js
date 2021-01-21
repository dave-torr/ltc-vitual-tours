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

import PackingListData from "./data/packingList.json"

function PackingList(props){

    return(
        <>
            <div className={styles.packingListGenCont}>
                <div className={styles.landingTitle}> 
                    Packing List</div>
                <div className={styles.packingListRowsORCols}>
                    <div className={styles.packListColOne}>
                        <div className={styles.PackListImage}>
                            <Image
                                src="/photogallery/packinglist.jpg"
                                width={900}
                                height={600}
                                alt="Instagram Icon link"
                            />
                            </div>
                    </div>

                    <div className={styles.packListColTwo}>
                        <div className={styles.PackListIntro}> 
                            Get geared up and excited for an adventure in the Galapagos Islands!
                            </div>
                        <form className={styles.PackListSections}>



                            <div className={styles.aPackLsitSec}>
                                <div className={styles.aPackLsitSecTitle}></div>
                                <div className={styles.aPackLsitSecItem}></div>
                            </div>

                        </form>
                    </div>
                </div>
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