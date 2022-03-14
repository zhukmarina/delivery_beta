import React from "react";
import FavItem from "../../components/FavItem";
import { getFromLS } from "../../utils/localStorage"

const FavouritePage = () => {
    
    const cards = getFromLS("cards").filter(item => item.isFavorite);

    return (
        <>
            <h1 style={{color:"white"}}>FAVOURITE</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                
                {cards.length > 0 && cards.map(item => {
                    return <FavItem key={item.id} {...item} />
                    
                })}
                 {!cards.length && <h1 style={{color:"white"}}>Please, add to favorite !</h1>}
            </div>
        </>
    )
}

export default FavouritePage;