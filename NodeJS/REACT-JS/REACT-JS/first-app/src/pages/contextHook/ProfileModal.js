import { useState } from "react"

export const ProfileModal=({setUser,user,index})=>{
    const [selecteduser,setSelectedUser]=useState(user[index])
    const updateUser = (() => {
        user[index]={...selecteduser,name:selecteduser.name}
        setUser({...user})
    }
    )
    return(<>
    <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">

   
        <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>


        <div className="modal-body">
            <input value={selecteduser.name} onChange={(event)=>setSelectedUser({...selecteduser,name:event.target.value})}/>
        </div>


        <div className="modal-footer">
        <button type="button" className="btn btn-info" data-bs-dismiss="modal"  onClick={()=>updateUser()}>Update</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
         </div>

    </div>
  </div>
</div>
    
    
    </>)
}