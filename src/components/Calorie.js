import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CalorieDetails from './CalorieDetails';
import HttpClient from 'axios';

const Home = function () {
    const [query, setQuery] = useState('')
    const [searched, setSearched] = useState(false)
    const [calories, setCalories] = useState([])

    const queryChanged = function (event) {
        setQuery(event.target.value)
    }

    const fetchCalories = function () {
        if (query.length === 0) {
            alert('Food name is required')
        } else {
            HttpClient({
                "method":"GET",
                "url":"https://food-calorie-data-search.p.rapidapi.com/api/search",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"food-calorie-data-search.p.rapidapi.com",
                "x-rapidapi-key":"a202b264bemsh80130e09d28d8f1p120872jsn5a586177c38f"
                },"params":{
                "keyword":query
                }
                }).then((result) => {
                setSearched(true)
                setCalories(result.data.length >0 ? result.data : [])
            })
        }
    }
    HttpClient({
        "method":"GET",
        "url":"https://food-calorie-data-search.p.rapidapi.com/api/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"food-calorie-data-search.p.rapidapi.com",
        "x-rapidapi-key":"a202b264bemsh80130e09d28d8f1p120872jsn5a586177c38f"
        },"params":{
        "keyword":"chocolate"
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
    
    return <div>
        <Navbar query={query} searchAction={fetchCalories.bind(this)} searchChanged={queryChanged.bind(this)} />
        <div className="container mt-4 text-center">
            {!searched && calories.length === 0 && <h2>You can search for calories!</h2>}
            {searched && calories.length === 0 && <h2>No food is found!</h2>}
            {searched && calories.length !== 0 && 
                <div className="row">
                       <CalorieDetails calories = {calories} ></CalorieDetails>
                   
                </div>}

        </div>
    </div>
}

export default Home;