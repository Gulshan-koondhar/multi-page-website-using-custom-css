import React from "react";
import styles from "@/app/page.module.css";
import Skills from "./Skills";

const About = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h2 className={styles.name}>About</h2>
            <p className={styles.para1}>
              I’m Gulshan Mustafa, a passionate front-end web developer
              enthusiastic about creating user-friendly and visually appealing
              web experiences. I’ve embarked on a journey to transform my love
              for coding into impactful digital solutions. During my academic
              journey and beyond, I’ve honed my skills in HTML, CSS, and
              JavaScript, with a keen interest in frameworks like React.js. My
              projects, such as a responsive calculator, a dynamic weather app,
              and an intuitive to-do list application, reflect my commitment to
              learning and applying the latest web technologies. I thrive on
              challenges that push me to innovate and solve problems creatively.
              Each project I undertake not only strengthens my technical
              abilities but also reinforces my dedication to delivering clean,
              efficient code that enhances user experience. Currently, I’m eager
              to contribute my skills and learn from experienced professionals
              in the field. I’m excited about opportunities to collaborate on
              meaningful projects where I can contribute my enthusiasm for
              front-end development and continue to grow as a developer.
            </p>
            <div>
              <h2 className={styles.name}>Skills</h2>
              <div className={styles.skill}>
                <Skills src="/html.png" />
                <Skills src="/css.png" />
                <Skills src="/js.png" />
                <Skills src="/Typescript.png" />
                <Skills src="/tailwind.png" />
                <Skills src="/React.png" />
                <Skills src="/nextjs.png" />
              </div>
            </div>
          </div>
          <div className={styles.imgdiv}>
            <img
              src="/about.png"
              alt="Profile Picture"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
