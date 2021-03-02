
type propType = {
    label: string,
    value: number,
    icon: any
}


const Highlight: React.FC<propType> = ({label,value,icon}):React.ReactElement =>{
    return (
        <div>
            <div className="rounded-full flex justify-center items-center  w-32 h-32 md:w-44 md:h-44 border-gray-700 border">
                <div className=" flex flex-col items-center  ">
                    <div className="">{icon}</div>
                    <div className="mt-3">{value}</div>
                    <div className="mt-3">{label}</div>
                </div>
            </div>
        </div>
    )
}

export default Highlight