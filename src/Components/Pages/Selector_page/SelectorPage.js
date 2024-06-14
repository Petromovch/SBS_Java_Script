import style from "./SelectorPage.module.css"
import human_image from "../../../images/human.svg"
import computer_image from "../../../images/computer.svg"
let SelectorPage = () => {
    return(
        <div className={style.selector_page}>
            <div className={style.card}>
                <div className={style.card_image_container}>
                    <img src={human_image} alt="Person" className={style.card_image}></img>
                </div>
                <div className={style.card_title}>
                    1 VS 1
                </div>
            </div>
            <div className={style.card}>
                <div className={style.card_image_container}>
                    <img src={computer_image} alt="Computer" className={style.card_image}></img>
                </div>
                <div className={style.card_title}>
                   With Computer
                </div>
            </div>
        </div>
    )

}
export default SelectorPage