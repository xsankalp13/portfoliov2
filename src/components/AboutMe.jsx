import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A Web Developer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>from India</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                As a MERN stack developer and DevOps engineer, I bring a versatile set of technical skills to the table. With expertise in both front-end and back-end development, I am proficient in creating dynamic web applications that deliver an exceptional user experience.

Furthermore, my current pursuit of an engineering degree with a specialization in AI at Ajeenkya DY Patil School of Engineering has provided me with in-depth knowledge and expertise in cutting-edge technologies. This enables me to leverage AI techniques and algorithms to develop intelligent applications that can learn, adapt and improve.

                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                   
As a DevOps engineer, I have a thorough understanding of DevOps principles and practices, allowing me to ensure the efficient and reliable deployment of software. I can manage servers, optimize workflows, and oversee code deployment to ensure seamless and continuous delivery of applications.

Besides my technical skills, I have excellent communication and collaboration skills. I can work efficiently with project managers, other developers, and stakeholders, ensuring that everyone is on the same page and working towards a common goal.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                Ultimately, I am passionate about developing high-quality software that can make a positive impact on people's lives. Whether I am developing a new feature for a popular web application or streamlining an existing process to improve its efficiency, I am continually seeking ways to innovate and improve.

If you are seeking a talented MERN stack developer and DevOps engineer, I would love to connect and explore how my skills and expertise can contribute to your organization.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
