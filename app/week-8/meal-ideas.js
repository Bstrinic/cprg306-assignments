"use client";

import { useState, useEffect } from "react";

// Creating an fetch function for API
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

// Function to fetch detailed meal info based on meal ID
const fetchMealDetails = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]); // State for list of meals
  const [selectedMeal, setSelectedMeal] = useState(null); // State for expanded meal details

  // Fetch meals based on ingredient
  useEffect(() => {
    if (ingredient) {
      const loadMealIdeas = async () => {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data || []); // Fallback to empty array if no meals
      };
      loadMealIdeas();
    }
  }, [ingredient]);

  // Function to handle meal click to load details
  const handleMealClick = async (meal) => {
    if (selectedMeal && selectedMeal.idMeal === meal.idMeal) {
      setSelectedMeal(null); // Collapse if already expanded
    } else {
      const details = await fetchMealDetails(meal.idMeal);
      setSelectedMeal(details); // Expand selected meal
    }
  };

  return (
    <div>
      <header>
        <h1>Meal Ideas</h1>
      </header>
      <p>Select an item to see meal ideas</p>
      <ul>
        {meals.map((meals) => (
          <li key={meals.idMeal}>{meals.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
