import React from "react";
// import { HiCheckBadge } from "react-icons/hi2";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaNpm } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaAws } from "react-icons/fa";


const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <FaPython />

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                <FaDocker />

                    <div>
                        <h3 className="skills__name">Docker</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                <DiMysql />

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                <FaNpm />

                    <div>
                        <h3 className="skills__name">npm</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                <TbBrandCpp />

                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                <FaAws />

                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Backend;