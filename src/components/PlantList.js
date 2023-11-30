import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plant }) {

  const renderPlants = plant.map((plants) => {
      return (
        <PlantCard key={plants.id} name={plants.name} image={plants.image} price={plants.price}/>
      )
  }) 

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
