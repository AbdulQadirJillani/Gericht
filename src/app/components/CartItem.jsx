import 'primeicons/primeicons.css';
import Quantity from './Quantity';
import { useEffect, useState } from 'react';

const CartItem = ({ name, dsc, price, quantity, img, data, setData }) => {
    const [qt, setQt] = useState(quantity)
    useEffect(()=>{
        let newData = []
        for (const i of data) {
            if (i.dsc === dsc) {
                newData.push(
                    {
                        ...i,
                        quantity: qt
                    }
                )
            } else {
                newData.push(i)
            }
        }
        setData(newData)
        sessionStorage.setItem('item', JSON.stringify(newData))
        window.dispatchEvent(new Event('storage'))
    }, [qt])

    function remove() {
        let newData = []
        for (const i of data) {
            if (i.dsc === dsc) {
                continue
            } else {
                newData.push(i)
            }
        }
        setData(newData)
        sessionStorage.setItem('item', JSON.stringify(newData))
        window.dispatchEvent(new Event('storage'))
    }

    return (
        <div className="relative px-3 py-5 bg-white shadow-inner flex items-center gap-5 rounded-md">
            <div className="h-[15svh] lg:h-[20svh] aspect-square">
                <img src={img} alt='' className="h-full rounded-md"/>
            </div>
            <div className="h-[80%] w-full flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-2">
                    <span className="text-md md:text-lg font-bold">{name}</span>
                    <span className="hidden lg:block text-gray-500">{dsc}</span>
                </div>

                <div className="flex gap-2 justify-between">
                    <span>${Math.floor(price)*qt}</span>
                    <Quantity quantity={qt} setQuantity={setQt}/>
                </div>
            </div>
            <i className='pi pi-trash absolute right-3 top-3 text-red-600 cursor-pointer' onClick={remove}></i>
        </div>
      )
}

export default CartItem