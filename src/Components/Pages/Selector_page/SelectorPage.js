import style from "./SelectorPage.module.css"
import human_image from "../../../images/human.svg"
import computer_image from "../../../images/computer.svg"
let Card = (props) => {
    return(
        <div className={style.card}>
            <div className={style.card_image_container}>
                <img src={props.image} alt={props.alt} className={style.card_image}></img>
            </div>
            <div className={style.card_title}>
                {props.title}
            </div>
        </div>
    )
}
let SelectorPage = () => {
    return(
        <div className={style.selector_page}>
            <Card image={human_image} alt="Person" title="1 VS 1" />
            <Card image={computer_image} alt="Computer" title="With Computer" />
        </div>
    )

}
export default SelectorPage