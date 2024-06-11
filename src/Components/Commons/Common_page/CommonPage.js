import MainLayout from "../MainLayout";
import Navbar from "../Navbar/Navbar";
import style from "./CommonPage.module.css"
let CommonPage =()=>{
    return(
        <div className={style.common_page}>
            <Navbar />
            <MainLayout />
        </div>
    )
}
export default CommonPage;