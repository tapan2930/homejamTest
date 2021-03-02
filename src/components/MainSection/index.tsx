import React from "react"
import ArtistCard from "../ArtistCard"

import a1  from "../../assets/images/a1.png";
import a2  from "../../assets/images/a2.png";
import a3  from "../../assets/images/a3.png";
import a4  from "../../assets/images/a4.png";
import r1  from "../../assets/images/r1.png";
import usFlag from "../../assets/images/us.png"
import itFlag from "../../assets/images/it.png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ReviewCard from "../ReviewCard";



const ArtistData = [
    {
        img: a1,
        name: "Tapan Patel",
        tag: "Folk",
        link: "https://pateltapan.com/"
    },
    {
        img: a2,
        name: "Tapan Patel",
        tag: "Folk",
        link: "https://pateltapan.com/"
    },
    {
        img: a3,
        name: "Tapan Patel",
        tag: "Folk",
        link: "https://pateltapan.com/"
    },
    {
        img: a4,
        name: "Tapan Patel",
        tag: "Folk",
        link: "https://pateltapan.com/"
    }
]

const ReviewData = [
    {
        photo:r1,
        name:"Hellen Jummy",
        location:"Palo Alto, CA",
        flag: usFlag,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "
    },
    {
        photo:r1,
        name:"Hellen Jummy",
        location:"Palo Alto, CA",
        flag: itFlag,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "
    },
    {
        photo:r1,
        name:"Hellen Jummy",
        location:"Palo Alto, CA",
        flag: usFlag,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "
    }
   
]


const MainSection: React.FC = ():React.ReactElement =>{
    return(
        <div className="bg-bg-primary h-full  py-12 text-gray-50 ">
            <div className="container">
                {/* Upcomming Show Section */}
                <div>
                <div className="flex justify-between items-center">
                        <h1 className="text-xl font-medium  section-Title">Upcoming Shows</h1>
                        <span className="text-yellow-500">View All</span>
                    </div>
                    <div className="my-16">
                    <div className="flex  justify-between overflow-auto  ">
                        {
                            ArtistData.map((artist,idx)=>{
                                return (
                                    <div id={`${idx}`} className=" card-gradient-shadow mr-8 last:mr-3 flex-none"><ArtistCard {...artist} /> </div>
                                    )
                                })
                        }
                    </div>
                    </div>
                
                </div>
                    {/* ---------------------- End of upcoming Section ---------------------------- */}

                    {/* Reviews Sections */}

                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-medium  section-Title">Reviews</h1>
                            <span className="text-gray-200 items-center hidden sm:flex"><span className="mr-6 tracking-widest ">1/12</span> <span  className="mr-6 text-xl"><BsArrowLeft /></span> <span className="text-xl"><BsArrowRight /></span>  </span>
                        </div>

                        <div className="flex my-16 overflow-x-auto justify-between py-3">
                            {
                                ReviewData.map((review,idx)=>{
                                    return (
                                        <div id={`${idx}`} className="flex-1 card-review-gradient-shadow mr-6"> <ReviewCard {...review} /> </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}

export default MainSection