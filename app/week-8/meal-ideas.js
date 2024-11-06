"use client"

import { useEffect, useState } from "react";

//async function is outside of the component.
async function fetchMealIdeas(ingredient) {
    //The response will fetch meals that match the ingredient in the link.
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    //mealData will await a response from response.
    const mealData = await response.json([]);
    //the response will be returned in the form of idMeal, strMeal and strMealThumb.
    return mealData;
}

export default function MealIdeas({ingredient}) {

    
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(ingredient) {
        try {
            const mealData = await fetchMealIdeas();
            setMeals(mealData);
        } catch (error) {
            console.log(`Error found:  + ${error}`);
        }
    }
    //Limit the amount of requests to the API.
    useEffect(() => {
        ( async () => {
            let mealArray =[];
            for(let i = 0; i < meals.length > 0; i++) {
                let thisMeal = await loadMealIdeas(meals[i]);
                mealArray.push(thisMeal);
            }
            setMeals(mealArray);
        })();
    }, [meals]);
    
    const {idMeal: id, strMeal: mealType, strMealThumb: mealImg} = meals;

    return (
        <div>
            <h2 className="text-green-300 text-2xl font-bold my-10">Meal Ideas</h2>
            <div>
                Meal: {[id, mealType, mealImg]}
                {meals.map((mealType) => ({mealType}))}
            </div>
        </div>
    );
};  