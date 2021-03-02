import React from "react"

type propType = {
    photo:string,
    name:string,
    location:string,
    flag: string,
    comment:string
} 

const ReviewCard: React.FC<propType> = ({photo,name,location,flag,comment}):React.ReactElement =>{
    return(
        <div className="border-2 bg-bg-primary border-yellow-400 rounded-xl p-4 py-8 ">
            <div className="flex">
                <div>
                    <img src={photo} alt={name +" img"} />
                </div>
                <div className="ml-4">
                    <div className="mb-1"><h3>{name}</h3></div>
                    <div className="flex">
                        <div><img src={flag} alt="flag-img"/></div>
                        <div className="text-yellow-400 text-sm ml-4 tracking-wide">{location}</div>
                    </div>

                </div>
            </div>

            <div className="wrapping mt-6 tracking-wider font-light">
                <p >{comment}</p>
            </div>
        </div>
    )
}

export default ReviewCard