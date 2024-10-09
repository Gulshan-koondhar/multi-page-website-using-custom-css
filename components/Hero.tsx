import React from "react";
import styles from "@/app/page.module.css";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
const Hero = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h2>
              Hi, I&apos;m <span className={styles.name}> Gulshan Mustafa</span>
            </h2>
            <p className={styles.para}>
              A passionate front-end web developer enthusiastic about creating
              user-friendly and visually appealing web experiences.
            </p>

            <div>
              <ul className={styles.icon}>
                <li>
                  <a href="">
                    <Facebook className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Linkedin className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Github className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Instagram className={styles.icon} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.btn}>
              <button className={styles.button}>
                <a href="/My Resume.pdf">Download CV</a>
              </button>
              <button className={styles.button}>
                <a href="/about">About Me</a>
              </button>
            </div>
          </div>
          <div className={styles.imgdiv}>
            <img src="/hero.png" alt="Profile Picture" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
