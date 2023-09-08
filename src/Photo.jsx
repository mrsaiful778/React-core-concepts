import './friends.css'
export default function Photo({Picture}){
    const {albumId, id, title, thumbnailUrl} = Picture;

    return(
        <div className="box">
            <h4>albumId: {albumId}</h4>
            <h4>Id : {id}</h4>
            <h4>Title : {title}</h4>
            <img src={thumbnailUrl} alt="" />
        </div>
    )
}