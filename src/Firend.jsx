export default function Friend ({friend}){
    const {name, email, id, phone, username, website} =friend
    return(
        <div className="box">
                <h4>Name: {name} </h4>
                <p>Email: {email}</p>
                <p>id: {id}</p>
                <p>Phone: {phone}</p>
                <p>Users Name: {username}</p>
                <p>Website: {website}</p>
        </div>
    )
}