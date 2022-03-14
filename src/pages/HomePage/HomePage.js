import React from "react";
import Item from "../../components/Item";
import { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getData } from "../../appStore/actionCreators/actionCreator";
import styles from "./HomePage.module.scss"

const HomePage = () => {
  const { items } = useSelector(({ items }) => items, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const [value, setValue] = useState("")

  const filteredProducts = items.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div style={{minHeight: "650px"}}>
      <h1 style={{ color: "white" }}>HOME</h1>
      <div>
        <form>
          <input className={styles.search}
          type="text" 
          placeholder="What would you like to eat?" 
          onChange={(event)=>setValue(event.target.value)}
          />
          {/* <FiSearch /> */}
        </form>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}
      >
        {filteredProducts.map((element) => {
          return (
            <Item
              key={element.id}
              color={element.color}
              name={element.name}
              url={element.url}
              price={element.price}
              id={element.id}
              isFavorite={element.isFavorite}
              //   addToFav={addToFav}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
