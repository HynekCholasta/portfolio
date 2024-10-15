import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <HiOutlineBriefcase className="qualification__icon" />
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__box">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">ICT subject</h3>
                            <span className="qualification__subtitle">European School of Luxembourg II</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2019-2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Self-taught</h3>
                            <span className="qualification__subtitle">YouTube + Courses</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2022-2023
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">IBM full-stack software developer certificate</h3>
                            <span className="qualification__subtitle">Coursera</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__box">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Junior Developer</h3>
                            <span className="qualification__subtitle">Freelance - Remote</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Javascript Developer</h3>
                            <span className="qualification__subtitle">Cosup Gaming</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon"/>
                                2024-Present
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Apple Inc</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2016-2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Senior Developer</h3>
                            <span className="qualification__subtitle">Freelance - Remote</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2019-Present
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;