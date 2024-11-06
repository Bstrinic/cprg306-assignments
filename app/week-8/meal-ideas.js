"use client"

import { useState, useEffect } from "react"

// Creating an fetch function for API 
const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas([ ingredient ]) {

    // Defining state variable for meals
    const [meals, setMeals] = useState([]);

    // Defining load function 
    const loadMealItems = async () => {
        // Storing fetchMealIdeas in data variable
        const data = await fetchMealIdeas(ingredient);
        // Setting the state
        setMeals(data);
    }
}