import React, {useState} from "react"
import {BsBookmarks,BsArrowRight, BsFillBookmarksFill} from "react-icons/bs"


type propType = {
    img:string,
    tag:string,
    link:string,
    name:string
}

const ArtistCard: React.FC<propType>  =({img,tag,link,name}): React.ReactElement =>{
    const [isBookMarked,setIsBookMark] = useState(false)
    return (
        <div className="bg-bg-card rounded-xl">
            <div>
                <img src={img} alt={name+" image"} />
            </div>
            <div className="p-3 ">
                <div>
                    <span className="bg-yellow-400 text-xs px-1 font-medium rounded-md text-black">{tag}</span>
                </div>
                <div className="my-3 capitalize text-lg">
                    <h2>{name}</h2>
                </div>
                <div className="flex justify-between items-center">
                    <div className=""><a className="text-blue-700 flex items-center " href={link}>More Info <span className="items-center ml-3 text-xl"><BsArrowRight /></span></a></div>
                    <div className="border-l border-gray-700 pl-4 py-2 text-2xl fill-current "><span className="fill-current text-pink-500 cursor-pointer" onClick={()=> setIsBookMark(!isBookMarked)}> { isBookMarked ? <BsFillBookmarksFill /> : <BsBookmarks /> }</span></div>
                </div>
            </div>
           
        </div>
    )
}

export default ArtistCard