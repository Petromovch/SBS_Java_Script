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
                <div className={style.sign_in_container}>
                    <button className={style.sign_in_button}>SIGN IN</button>
                </div>
                <div className={style.sigh_up_container}>
                    <button className={style.sign_up_button}>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;