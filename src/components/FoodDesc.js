import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Food from './Food';
import HttpClient from 'axios';

const FoodDesc = function () {
    const [query, setQuery] = useState('')
    const [searched, setSearched] = useState(false)
    const [foods, setfoods] = useState([])

    const queryChanged = function (event) {
        setQuery(event.target.value)
    }

    const fetchFoods = function () {
        if (query.length === 0) {
            alert('Food name is required')
        } else {
            HttpClient({
    "method":"GET",
    "url":"https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"edamam-food-and-grocery-database.p.rapidapi.com",
    "x-rapidapi-key":"a202b264bemsh80130e09d28d8f1p120872jsn5a586177c38f"
    },"params":{
    "ingr":query
    }
    })
    .then((result) => {
        setSearched(true)
        setfoods(result.data.hints.length >0 ? result.data.hints : [])
    })
}
}
    HttpClient({
        "method":"GET",
        "url":"https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key":"a202b264bemsh80130e09d28d8f1p120872jsn5a586177c38f"
        },"params":{
        "ingr":"apple"
        }
        })
        .then((response)=>{
          console.log(response.data.hints)
        })
        .catch((error)=>{
          console.log(error)
        })

    return <div>
        <Navbar query={query} searchAction={fetchFoods.bind(this)} searchChanged={queryChanged.bind(this)} />
        <div className="container mt-4 text-center">
            {!searched && foods.length === 0 && <h2>You can search for Food Details!</h2>}
            {searched && foods.length === 0 && <h2>No food is found!</h2>}
            <div className="row">
                {foods.map((food, index) => <Food key={index} label={food.food.label} brand={food.food.brand} 
                category={food.food.category} categoryLabel = {food.food.categoryLabel} foodContentsLabel = {food.food.foodContentsLabel} 
                image = {food.food.image}  ENERC_KCAL = {food.food.nutrients.ENERC_KCAL} 
                CHOCDF = {food.food.nutrients.CHOCDF}  PROCNT = {food.food.nutrients.PROCNT} 
                FIBTG = {food.food.nutrients.FIBTG}          
                />)}
            </div>
        </div>
    </div>
}

export default FoodDesc;