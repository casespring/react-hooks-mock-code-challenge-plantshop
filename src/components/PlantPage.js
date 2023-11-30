import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plant, setPlant] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
          .then((res) => res.json())
          .then((plants) => setPlant(plants))
  }, []);

  
  function getFormInfo(plantInfo) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
         "content-type": "Application/json"
      },
      body: JSON.stringify(plantInfo)
    })
    return (
      plantInfo
    )
  }

  function getNewPrice(newPrice) {
    fetch(`http://locahost:6001/plants/${newPrice}`, {
      method: "PATCH",
      headers: {
        "content-type": "Application/json"
      },
      body: JSON.stringify({
        price: newPrice.price
      })
    })
  }

    function filterSearch(searchTerm) {
      setCurrentSearch(searchTerm)
    }

    const newSearch = plant.filter((plants) => {
      return plants.name.toLowerCase().includes(currentSearch.toLowerCase())
    })
    


  return (

    <main>
      <NewPlantForm onFormInfo={getFormInfo} />
      <Search currentSearch={currentSearch} onSearchTerm={filterSearch} />
      <PlantList plant={newSearch} />
    </main>
  );
}

export default PlantPage;
