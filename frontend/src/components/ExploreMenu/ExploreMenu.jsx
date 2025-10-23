import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
      <div className="explore-menu" id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>
          Welcome to Sixlicious, where every bite is crafted with love and passion.  
          From classic cakes to modern pastries, we bring you a wide variety of desserts that will delight your taste buds.  
          Whether you crave something sweet, creamy, or crunchy, we’ve got the perfect treat for you.  
          Indulge in our collection of cakes, brownies, cheesecakes, traditional delights, pies, cookies, pastries, and mini desserts — all freshly made just for you!
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
      </div>
      <hr />
    </div>

  )
}

export default ExploreMenu

