import Container from "../components/Container"
import ItemCard from "../components/ItemCard"
import bbq from "../../assets/bbq.avif"
import burgers from "../../assets/burgers.avif"
import sandwiches from "../../assets/sandwiches.avif"
import sausages from "../../assets/sausages.avif"
import friedChicken from "../../assets/fried-chicken.avif"
import pizza from "../../assets/pizza.avif"
import breads from "../../assets/breads.avif"
import drinks from "../../assets/drinks.avif"
import desserts from "../../assets/desserts.avif"
import chocolates from "../../assets/chocolates.avif"
import iceCream from "../../assets/ice-creams.avif"

const MenuList = () => {
  const menuList = [
    {
      category: 'bbq',
      path: '/menu/bbqs',
      img: bbq
    },
    {
      category: 'burgers',
      path: '/menu/burgers',
      img: burgers
    },
    {
      category: 'sandwiches',
      path: '/menu/sandwiches',
      img: sandwiches
    },
    {
      category: 'sausages',
      path: '/menu/sausages',
      img: sausages
    },
    {
      category: 'fried chicken',
      path: '/menu/fried-chicken',
      img: friedChicken
    },
    {
      category: 'pizza',
      path: '/menu/pizza',
      img: pizza
    },
    {
      category: 'breads',
      path: '/menu/breads',
      img: breads
    },
    {
      category: 'drinks',
      path: '/menu/drinks',
      img: drinks
    },
    {
      category: 'desserts',
      path: '/menu/desserts',
      img: desserts
    },
    {
      category: 'chocolates',
      path: '/menu/chocolates',
      img: chocolates
    },
    {
      category: 'ice creams',
      path: '/menu/ice-cream',
      img: iceCream
    }
  ]

  return (
    <Container className="bg-[url('@/assets/bg.png')] flex justify-center items-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
        {menuList.map((item) => (
          <ItemCard key={item.category} category={item.category} path={item.path} img={item.img}/>
        ))}
      </div>
    </Container>
  )
}

export default MenuList