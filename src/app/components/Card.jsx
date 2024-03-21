import Image from "next/image";
const Card = ({icon, title, description, textAlignment, displayMore, borderStyleing}) => {
    return (
        <div className={`text-${textAlignment} bg-white p-3 h-100`}>
            <div className={borderStyleing}>
                <Image src={icon} alt="text" className="my-4 img-fluid"/>
            </div>
        <div>
            <h6 className="fw-bolder">{title}</h6>
            <p className="text-black-50">{description}</p>
            </div>
            {displayMore ? <span className="text-start d-block mt-5">عرض المزيد</span> : ""}
        
    </div>
  )
}

export default Card
