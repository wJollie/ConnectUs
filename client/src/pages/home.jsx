import React from "react";
import Button from "../../components/Button";
import styles from "./Home.module.css"; // Import your CSS module
import logo_img from "../../assets/logo.png";
import ninja from "../../assets/ninja.png";
import pirate from "../../assets/pirate.png";
import robot from "../../assets/robot.png";

const Home = () => {
    return (
        <>
            <div className={styles.left}>
                <img src={logo_img} alt="logo" /> {/* Remove .img */}
                {/* Add other elements */}
            </div>
            <div className={styles.right}>
                <img src={ninja} alt="ninja" />
                <img src={pirate} alt="pirate" />
            <div className={styles.button_container}>
                <Button name="Play with Strangers!" type="info"/>
                <Button name="Play with Frans!" type="info"/>
            </div>
        </div>
        </>
    );

};

export default Home;
