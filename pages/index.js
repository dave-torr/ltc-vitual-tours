import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import {Photogallery} from "./../components/photogallery"

export default function Home() {

const [imageDialog, setImageDialog] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Explorer Chick - Galapagos Virtual Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Logo and image intro
        <br></br>
        Welcome div, with short explanation of V.T. app
        <br></br>
        Galapagos Photo Gallery,  & 360 deg visualizer
        <br></br>

  {/* NON NVP - Social Image Sharing */}
        <div onClick={()=>setImageDialog(true)}> 
        OPEN </div>

        <Photogallery 
          open={imageDialog}
          closeImgViewer={setImageDialog}
          />

         
        <br></br>
        video player
        <br></br>
        Galapagos Packing List
        <br></br>
        Galapagos Island Hopping Tour invitation / discount
        <br></br>
        Music Player: Korioto / Pichirilo Radioactivo
        <br></br>
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
