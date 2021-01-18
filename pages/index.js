import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import {Photogallery} from "./../components/photogallery"
import {VideoPlayer} from "./../components/videoPlayer"
import {VrDisplayer} from "./../components/vrVisualizer"

import {VtIntro, AppExplainer, PackingList, DiscountAndInvite} from "./../components/imageAndTextComp"

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
export default function Home() {

const [imageDialog, setImageDialog] = useState(false)
const [koriotoController, setKoriotoController] = useState(true)
const [pichiController, setPichiController] = useState(true)


const VirtualtourExtras=()=>{

//put players on a modal??? clients will not be able to lsiten to music while seeing using the rest of the app. 

  return(
    <>
      <div className={styles.extrasGenCont}>
        <div className={styles.landingTitle}> Vitual Tour Extras! </div>
        <div className={styles.landingSubTitle}> We are happy to share these exclusive Ecuadorian artits' features, which are almost guaranteed to make you dance.  </div>
        <div className={styles.extraControllers}>
          <div className={styles.anAddOnController}>
            {koriotoController?
                <>
                    <div className={styles.ControllerTab}
                    onClick={()=>{setKoriotoController(false)}}> 
                        Close Korioto Video Player &#9932;
                    </div>
                </>:<>
                    <div className={styles.InactiveControllerTab}
                    onClick={()=>{setKoriotoController(true)}}>
                      Spinning logo <br></br>Short Korioto intro <br></br> 
                        Open &#9732;
                    </div>
                </>}
          </div>
          <div className={styles.anAddOnController}>
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
          </div>
        </div>
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

{/* NON NVP - Social Image Sharing */}
  {/* <VrDisplayer

  /> */}

  <Photogallery 
    open={imageDialog}
    closeImgViewer={setImageDialog}
    />

{/* PackingList */}
  <PackingList 
  
  />


{/* DiscountAndInvite */}
  <DiscountAndInvite 
  
  />    

        <br></br>
        video player
        <br></br>

        Music Player: Korioto / Pichirilo Radioactivo

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