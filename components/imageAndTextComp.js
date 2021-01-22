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
                    <div className={styles.appIntroSubTitle}> In addition to the virtual session you can access: 
                    <br></br> <br></br> - a downloadable photo gallery 
                    <br></br> - complimentary information on 
                    <br></br>Ecuador & The Galapagos
                    <br></br> - packing lists 
                    <br></br> - awesome Ecuadorian music 
                    <br></br> - some cool extras!
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

    const [openPackingList, setPackingListController] = useState(true)
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
                <div className={styles.packListImgCont}>
                <div className={styles.PackListImage2} onClick={()=>{
                    setMapDialogueCont(true)
                }}>
                    <Image
                        width={720}
                        height={789}
                        alt="Galapagos Islands - 1891 Map - Albatross Fishing Route"
                        src="/photogallery/oldMaps/albatrossexpedition.jpg"
                    /></div>
                    <Dialog open={mapDialog} onClose={()=>setMapDialogueCont(false)}>
                        <div className={styles.galMapDialogue}>
                            <Image
                                width={1200}
                                height={1315}
                                alt="Galapagos Islands - 1891 Map - Albatross Fishing Route"
                                src="/photogallery/oldMaps/albatrossexpedition.jpg"
                            />
                        </div>
                        <div className={styles.mapDialSubtitle}> Galapagos Islands - 1891 Map - 'Albatross' Fishing Vessel Routes</div>
                    <div className={styles.closeImgBTN}
                        onClick={()=>{setMapDialogueCont(false)}}> &#9932; </div>                        
                    </Dialog>

                <div className={styles.PackListImage}>
                    <Image
                        src="/photogallery/packinglist.jpg"
                        width={900}
                        height={600}
                        alt="Instagram Icon link"
                    /></div>
                </div>
            </>
        )
    }

    return(
        <>
            <div className={styles.packingListGenCont}>
                <div className={styles.landingTitle}> 
                    Packing List</div>
                <div className={styles.controllerDiv}>
                    {openPackingList? <>
                        <div className={styles.closeDivBTN}
                            onClick={()=>{
                                setPackingListController(false)
                            }}> 
                        Close Packing List &#9745; </div>
                        </>:<>
                            <div className={styles.closeDivBTN}
                                onClick={()=>{
                                    setPackingListController(true)
                                }}> 
                            Open Packing List &#9744; </div>
                        </>}
                </div>

                {openPackingList&&
                <> 
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
                </>}
            </div>
        </>
    )
};






///////////////////////////
///////////////////////////
function DiscountAndInvite(props){
    const [openIslandHopping, SetIslandHoppingController] = useState(false)
    const islandHoppingTourDisplayer=()=>{
        
        return(
            <>
                <div className={styles.tourDispCont}>
                    <div className={styles.landingTitle}> 
                        Galapagos Island Hopping</div>
                    <div className={styles.controllerDiv}>
                            {openIslandHopping? <>
                                <div className={styles.closeDivBTN}
                                    onClick={()=>{
                                        SetIslandHoppingController(false)
                                    }}> 
                                Close Island Hopping Tour &#9790; </div>
                                </>:<>
                                    <div className={styles.closeDivBTN}
                                        onClick={()=>{
                                            SetIslandHoppingController(true)
                                        }}> 
                                Open Island Hopping Tour &#9788; </div>
                                </>}
                        </div>

                    <div className={styles.datePromoter}>
                        <div className={styles.datePromoterImg}> 
                            <Image
                                width={2048}
                                height={948}
                                alt="Sunset over Islet - Isabela Island"
                                src="/photogallery/wideAndLow/marielitasSunset.jpg"
                            />

                            <div className={styles.imageTextOverlay}>
                                <div className={styles.datePromoTitle}> 
                                    Join us on a 2021 or 2022 <br></br>Galapagos Island Hopping Voyage! 
                                </div>
                                <div className={styles.datePromoDetailList}> 
                                    - small group adventure departures <br></br> 
                                    - wildlife encounters unique to the Galapagos<br></br> 
                                    - round trip flights from Quito to Galapagos<br></br> 
                                    - amazing perks and exclusives!<br></br> 
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }












    return(
        <>
            <div style={{"width": "100%"}}>
                 {islandHoppingTourDisplayer()}
                
                <br></br>Tour video / Discount Cupon
            </div>
        </>
    )
};
export {VtIntro, AppExplainer, PackingList, DiscountAndInvite}