import styles, { layout } from "../styles"
import { features }       from "../constants"
import Button             from "./Button"
import React              from "react";

const FeatureCard = ({icon, title, content, index}) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] feature-card ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}>
            <div className={`w-[64px] h-[64px] rounded-full bg-dimblue ${styles.flexCenter}`}>
                <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
            </div>
            <div className={`flex-1 flex flex-col ml-3`}>
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
                <p className="font-poppins font-normal text-dimwhite text-[16px] leading-[24px]">{content}</p>
            </div>
        </div>
    )
}

const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You do the business, <br className="sm:block hidden" /> we’ll handle the money. </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. </p>
                <Button styles={`mt-10`} />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map( ( feature, index ) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ) )}
            </div>
        </section>
    )
}
export default Business
