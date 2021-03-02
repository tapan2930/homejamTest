import {FC, ReactElement} from 'react'
import Navbar from '../Navbar'
import {AiOutlineStar} from "react-icons/ai"
import Highlight from '../Highlight'


const data = {
    highlights : [
        {
            label: "label",
            value: 0,
            icon: <AiOutlineStar />
        },
        {
            label: "label",
            value: 5,
            icon: <AiOutlineStar />
        },
        {
            label: "label",
            value: 8,
            icon: <AiOutlineStar />
        },
        {
            label: "label",
            value: 2,
            icon: <AiOutlineStar />
        }
    ]
}


const HeroSection: FC = ():ReactElement => {
    return(
       <div className="bg-hero text-gray-50 ">
           {/* Navigation bar */}
           <Navbar />

           {/* Hero Body */}
           <div className="container grid grid-rows-2 h-screen">
                <div className="grid grid-cols-2 content-end">
                    <div className="col-span-2 sm:col-span-1 mb-8">
                        <h1 className="text-6xl font-extrabold"> Cari Cari</h1>
                        <h2 className="mt-3">
                            Live from there sofa to yours. Get closer to your favorite artists, and never miss out.
                        </h2>
                    </div>
                    
                </div>
                <div className=" grid content-end">
              
                    <div className="flex mb-3 justify-between  overflow-x-auto">
                    {
                            data.highlights.map((highlight,idx) => {
                                return (
                                   <div className="mr-3 last:mr-0 flex-none"> <Highlight {...highlight} /> </div>
                                )
                            })
                    }
                    </div>
                   
                    
                </div>
           </div>

       </div>
    )
}

export default HeroSection