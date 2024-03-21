import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div>@2024 Bloggers. All rights reserved.</div>
      <div className={styles.socials}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Bloggers facebook"/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Bloggers instagram"/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Bloggers twitter"/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Bloggers youtube"/>
      </div>
    </div>
  );
}

export default Footer;
