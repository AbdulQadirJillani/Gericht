const Laurels = ({ img, title, desc }) => {
  return (
    <div className='flex gap-3 items-center'>
        <img className="h-14 w-14" src={img} alt="" />
        <div className='flex flex-col'>
            <h5 className="text-yellow-200 font-medium">{title}</h5>
            <span>{desc}</span>
        </div>
    </div>
  )
}

export default Laurels