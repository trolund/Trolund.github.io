import { StaticImageData } from 'next/image';
import Card from '../Card/Card';
import styles from "../../pages/css/about.module.css";
import Image from 'next/image'
import { CSSProperties } from 'react';

interface CertificationItemProp {
  href?: URL | string;
  title: string;
  subtitel: string;
  image?: string;
  imgCss?: CSSProperties;
  className?: string;
}


// ``
export default function CertificationItem({href, title, subtitel, imgCss, image, className}: CertificationItemProp) {
  return (
    <Card className={`w-2/5 p-5 flex flex-col ${styles.ds} ` + className} style={{minHeight: "15rem", backgroundImage: `url('${""}')`}} href={href}>
    <div style={{ mixBlendMode: "darken", position: "absolute", display: "block", width: "50px", height:"70px", ...imgCss}} ><Image alt="" src={image} layout='fill'/></div>
    <div style={{ marginTop: "auto" }}>
        <h3 style={{color: "var(--content-text)"}}>{subtitel}</h3>
        <h2 style={{color: "var(--content-text)"}}>{title}</h2>
    </div>
    </Card>
  )
}
