import style from "./Navbar.module.css"
let Navbar =()=>{
    return(
        <div className={style.navbar}>
            <div className={style.logo}>
                <div className={style.logo_text}>
                    Markchess
                </div>
                <div className={style.logo_image}>

                </div>
            </div>
            <div className={style.buttons}>
                <div className={style.sign_container  + " " + style.sign_in_button}>
                    <button className={style.sign_button + " " + style.sign_in_button}>SIGN IN</button>
                </div>
                <div className={style.sign_container  + " " + style.sign_up_button}>
                    <button className={style.sign_button + " " + style.sign_up_button}>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;