import { useState, useEffect } from "react";
import { FETCH_MENU } from "../constant";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantmenu, setRestaurantMenu] = useState(null);
  const [offers, setOffers] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(FETCH_MENU + id);
      const json = await data.json();
      console.log(json.data);
      setRestaurant(json?.data?.cards[0]?.card?.card.info);
      console.log(
        "Menus",
        Object.values(
          json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
            .itemCards
        )
      );
      setRestaurantMenu(
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      );
      setOffers(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  return { restaurant, restaurantmenu,offers };
};

export default useRestaurant;
