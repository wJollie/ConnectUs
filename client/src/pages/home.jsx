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
        </>
    );
};

export default Home;
