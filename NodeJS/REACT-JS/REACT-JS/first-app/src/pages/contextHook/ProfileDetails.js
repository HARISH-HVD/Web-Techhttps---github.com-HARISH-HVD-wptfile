import { userContext } from "./Profile"
import { useContext, useState } from "react"
import { ProfileModal } from "./ProfileModal"

export const ProfileDetails = () => {
    const {user,setUser} = useContext(userContext)
    const [index,setIndex]=useState(0)

    return (
        <>
            {user.map((u, i) => {
                return (<>
                    <ul key={i} className="list-group bg-info">
                        <li className="list-group-item">
                            <div className="card-header text-primary">{u.name}</div>
                        </li>
                        <div className="card-body ">
                            <li className="list-group-item">{u.age}</li>
                            <li className="list-group-item">{u.mobile}</li>
                            <li className="list-group-item">{u.email}</li>
                            <li className="list-group-item" >kya mangta Hai? {u.city}</li>
                        </div>
                        <li className="list-group-item">
                                <button className="btn btn-info" data-bs-toggle="modal" onClick={()=>setIndex(i)} data-bs-target="#myModal">Update</button>
                        </li>

                    </ul>
                    <hr/>

                </>)
            })}

            <ProfileModal user={user} setUser={setUser} index={index}/>

        </>
    )
}
