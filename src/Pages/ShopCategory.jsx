import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  console.log('All products:', all_product);
  console.log('Category prop:', props.category);

  const filteredProducts = all_product.filter(item => item.category === props.category);

  console.log(`Filtered products for category "${props.category}":`, filteredProducts);

  const [visiblecount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 12);
    console.log('Updated visible count:', visiblecount + 12);
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{Math.min(visiblecount, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(0, visiblecount).map((item, i) => {
          console.log('Rendering item:', item);
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      {visiblecount < filteredProducts.length && (
        <div className="shopcategory-loadmore" onClick={loadMore}>
          Explore More
        </div>
      )}
    </div>
  );
}
export default ShopCategory;
