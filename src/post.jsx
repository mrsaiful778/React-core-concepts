import './friends.css'
export default function Post({post}){
    console.log(post);
    const {userId, id, title, body} = post;
    return(
        <div className="box">
            <h3><small>User Id:</small> {userId}</h3>
            <h3>ID : {id}</h3>
            <h4>Title : {title}</h4>
            <p>Body : {body}</p>
        </div>
    )
}