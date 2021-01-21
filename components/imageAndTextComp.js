import { useEffect, useState } from 'react'
import Image from "next/image"
import styles from '../styles/misc.module.css'

import PackingListData from "./../data/packingList.json"

import { Dialog } from '@material-ui/core';


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
///////////////////////////
///////////////////////////
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
///////////////////////////
///////////////////////////
function PackingList(props){
    const [mapDialog, setMapDialogueCont] = useState(false)


// Checkboxes
    function createMarkup(data) {
    return {__html: `${data}`};
    }
    function IconHTMLer(data) {
    return <div dangerouslySetInnerHTML={createMarkup(data)} />;
    }
    const packingListSection=(data)=>{
        let aPackListSection = data.map((elems, i)=>
            <>
            <div className={styles.aPackLsitSec} key={`packListSection${i}`}>
                <div className={styles.aPackLsitSecTitle}> 
                    {elems.packingListTitle}</div>
                {elems.optional?
                    <><div className={styles.aPackListOptional}> * Optional </div></>:
                    <><br></br> </>}
                <div>
                    {packingListCheckbox(elems.PLItems)}
                </div>
                <div className={styles.PLIcon}> 
                    {IconHTMLer(elems.icon)}
                </div>
            </div>
            </>
        )

        return(
            <>
                {aPackListSection}
            </>
        )
    }
    const packingListCheckbox=(data)=>{
        let packListCheckboxes= data.map((elems, i)=>
            <>
                <div style={{"display": "flex"}} key={`packListItem${i}`} className={styles.aCheckbox} >
                    <input type="checkbox" id={`elem${elems}`} name={`elem${elems}`} value={`elem${elems}`} />
                    <label htmlFor={`elem${elems}`} className={styles.aCheckboxLabel} > {elems}</label>
                </div>
            </>
            )

        return(
            <>
                {packListCheckboxes}
            </>
        )
    }

// Images
    const imageColumn=()=>{

        return(
            <>
                <div className={styles.PackListImage2} onClick={()=>{
                    setMapDialogueCont(true)
                }}>
                    <Image
                        src="/photogallery/oldmaps/albatrossexpedition.jpg"
                        width={720}
                        height={789}
                        alt="Instagram Icon link"
                    /></div>
                    <Dialog open={mapDialog} onClose={()=>setMapDialogueCont(false)}>
                        <div className={styles.galMapDialogue}>
                            <Image
                                width={1200}
                                height={1315}
                                alt="Galapgos Islands - 1891 Map - Albatross Fishing Route"
                                src="/photogallery/oldmaps/albatrossexpedition.jpg"
                            />
                        </div>
                        <div className={styles.mapDialSubtitle}> Galapgos Islands - 1891 Map - Albatross Fishing Route</div>
                    </Dialog>

                <div className={styles.PackListImage}>
                    <Image
                        src="/photogallery/packinglist.jpg"
                        width={900}
                        height={600}
                        alt="Instagram Icon link"
                    /></div>
            </>
        )
    }

    return(
        <>
            <div className={styles.packingListGenCont}>
                <div className={styles.landingTitle}> 
                    Packing List</div>
                <div className={styles.packingListRowsORCols}>
                    <div className={styles.packListColOne}>
                    <div className={styles.PackListIntro}> 
                        Get geared up and excited for an <br></br>adventure in the Galapagos Islands!
                        </div>
                        {imageColumn()}
                    </div>
                    <div className={styles.packListColTwo}>
                        <form className={styles.PackListSections}>
                            {packingListSection(PackingListData)}
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