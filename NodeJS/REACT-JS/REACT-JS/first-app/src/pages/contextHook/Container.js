import { ProfileCard } from "./ProfileCard"

export const Container=()=>
    {
        return(
            <>
            <div className="alert alert-success text-dark ">
                <p className="display-6">Profiles</p>
            <ProfileCard/>
            </div>
            </>
        )
    }