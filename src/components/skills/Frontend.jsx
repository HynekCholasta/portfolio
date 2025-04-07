import React from "react";
// import { HiCheckBadge } from "react-icons/hi2";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <FaHtml5 />
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <FaCss3Alt />
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <SiTailwindcss />
                        <div>
                            <h3 className="skills__name">TailwindCSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                    <IoLogoJavascript />

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <BiLogoTypescript />

                        <div>
                            <h3 className="skills__name">Typescript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <FaReact />

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;