import style from "./RankPage.module.css"
let User = (props) => {
    return (
        <div>
            <div>
                {props.place}
            </div>
            <div>
                {props.username}
            </div>
            <div>
                {props.rank}
            </div>
        </div>
    )
}
let RankPage = (props) => {
    let users = []
    for (let i = 0;i<props.users.length;i++){
        users.push(<User place={i+1} username={props.users[i].username} rank={props.users[i].rank} key={i} />)
    }
    return (
        <div className={style.users}>
            {users}
        </div>
    )
}
export default RankPage;