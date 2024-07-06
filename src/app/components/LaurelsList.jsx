import Laurels from '@/app/components/Laurels'
import laurel1 from '@/assets/award01.avif'
import laurel2 from '@/assets/award02.avif'
import laurel3 from '@/assets/award03.avif'
import laurel5 from '@/assets/award05.avif'

const LaurelsList = () => {
  const laurelsList = [
    {img: laurel1, title: 'Bib Gourmond', desc: 'Affordable gourmet excellence'},
    {img: laurel2, title: 'Rising Star', desc: 'Innovative culinary talent'},
    {img: laurel3, title: 'AA Hospitality', desc: 'Exceptional service standard'},
    {img: laurel5, title: 'Outstanding Chef', desc: 'Masterful culinary prowess'}
  ]

  return (
    <div className='flex flex-col gap-5'>
      {laurelsList.map((l, i)=>
      <Laurels key={i} img={l.img} title={l.title} desc={l.desc}/>)}
    </div>
  )
}

export default LaurelsList