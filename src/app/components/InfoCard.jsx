import Image from "next/image";

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="d-flex align-items-start">
      <Image src={icon} alt="text" width={50} height={80} className="ms-4 h-50"/>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default InfoCard
