import placeholder from '../../assets/placeholder.png'

const EmptyCart = () => {
  return (
    <div className='bg-white p-5 rounded-md grid md:grid-cols-2 justify-items-center items-center'>
        <p className='text-lg font-medium'>The Cart is Empty!</p>
        <img src={placeholder} alt="" />
    </div>
  )
}

export default EmptyCart