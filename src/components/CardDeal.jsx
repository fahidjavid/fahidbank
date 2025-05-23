import styles, { layout } from "../styles";

import Button   from "./Button";
import { card } from "../assets/";

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h1 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç
                    Aliquet ultrices ac, ametau.</p>
                <Button styles={`mt-10`} />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-[100%] h-[100%] relative z-[5]" />
            </div>
        </section>
    )
}
export default CardDeal
