import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import {Photogallery, Parallaxer} from "./../components/photogallery"
import {VideoPlayer} from "./../components/videoPlayer"
import {VrDisplayer} from "./../components/vrVisualizer"

import {VtIntro, AppExplainer, PackingList, DiscountAndInvite} from "./../components/imageAndTextComp"

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
export default function Home() {

const [imageDialog, setImageDialog] = useState(false)
const [koriotoController, setKoriotoController] = useState(true)
const [pichiController, setPichiController] = useState(true)


const appIndex=()=>{
  return(
    <>
      <div className={styles.indexCont}>
        <div className={styles.landingTitle} > Index </div>
        <div className={styles.scrollersCont}>
          <div className={styles.aScroller} onClick={()=>{
            let PhotoScroller = document.getElementById("picGalleryAnchor");
            PhotoScroller.scrollIntoView({behavior: "smooth"});
            }}> 
            &#9886; Photo Gallery </div>
          <div className={styles.aScroller} onClick={()=>{
            let PackingListScroller = document.getElementById("packingListAnchor");
            PackingListScroller.scrollIntoView({behavior: "smooth"});
            }}> 
            &#9745; Galapagos Packing List </div>
          <div className={styles.aScroller} onClick={()=>{
            let tourDatesScroller = document.getElementById("tourdatesAnddiscountAnchor");
            tourDatesScroller.scrollIntoView({behavior: "smooth"});
            }}> 
            &#9965; Galapagos Island Hopping Tour </div>
          <div className={styles.aScroller} onClick={()=>{
            let ExtrasScroller = document.getElementById("VtExtrasAnchor");
            ExtrasScroller.scrollIntoView({behavior: "smooth"});
            }}> 
            &#9835; Additionals </div>
        </div>
      </div>
    </>
  )
}
const VirtualtourExtras=()=>{

//put players on a modal??? clients will not be able to lsiten to music while seeing using the rest of the app. 

  return(
    <>
      <div className={styles.extrasGenCont} id="VtExtrasAnchor" >
        <div className={styles.landingTitle} > Vitual Tour Extras! </div>
        <div className={styles.landingSubTitle}> We are happy to share these exclusive Ecuadorian artits' features, which are almost guaranteed to make you dance.  </div>
          <div className={styles.anAddOnController}>
            {koriotoController?
                <>
                    <div className={styles.ControllerTab}
                    onClick={()=>{setKoriotoController(false)}}> 
                        Close Korioto Video Player &#9932;
                    </div>
                </>:<>
                    <div className={styles.ControllerTab}
                    onClick={()=>{setKoriotoController(true)}}> 
                        Open Korioto Player &#9732;
                    </div>
                </>}
          </div>
          {/* <div className={styles.anAddOnController}>
            {pichiController?
                <>
                    <div className={styles.ControllerTab}
                    onClick={()=>{setPichiController(false)}}> 
                        Close Pichirilo Music Player &#9932;
                    </div>
                </>:<>
                    <div className={styles.InactiveControllerTab}
                    onClick={()=>{setPichiController(true)}}>
                      Beetle Logo <br></br>Short Pichirilo intro <br></br> 
                        Open &#9732;
                    </div>
                </>}
          </div> */}
      </div>
    </>
  )
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
return (
  <div className={styles.container}>
  <Head>
    <title>Explorer Chick - Galapagos Virtual Tour</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <main className={styles.main}>

{/* INTRO */}
  <VtIntro 
  />

  
{/* AppExplainer */}
  <AppExplainer 
  />

{/*  Parallax */}
  <Parallaxer
  />

{/* Index and Scroller */}
  {appIndex()}



<div id="picGalleryAnchor"> </div>
  <Photogallery 
    open={imageDialog}
    closeImgViewer={setImageDialog}
    />

{/* PackingList */}
<div id="packingListAnchor"> </div>
  <PackingList 
    />


{/* DiscountAndInvite */}
<div id="tourdatesAnddiscountAnchor"> </div>
  <DiscountAndInvite 
    />  

{/* 360 image displayer */}
   {/* <VrDisplayer

  />       */}

{/* Extras */}
  {VirtualtourExtras()}
    {koriotoController&&<>
      <VideoPlayer
        content={"korioto"}
      /></>}


  </main>
      <footer className={styles.footer}>
        <a
          href="https://explorerchick.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          An {" "}
          <img src="/logos/fontface-blk.PNG" alt="Explorer Chick Logo" className={styles.logo} /> {" "} virtual experience
        </a>
      </footer>
    </div>
  )
}