"use client"

import { useEffect, useState } from "react";

//async function is outside of the component.
async function fetchMealIdeas(ingredient) {
    try {
        //The response will fetch meals that match the ingredient in the link.
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        //data will await a response from response.
        const data = await response.json();
        //the response will be returned in the form of idMeal, strMeal and strMealThumb.
        console.log(data);
        console.dir("TEST");
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default function MealIdeas({ingredient}) {

    
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas();
            setMeals(data);
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
    
    const {idMeal, strMeal, strMealThumb} = meals;

    return (
        <div>
            <h2 className="text-green-300 text-2xl font-bold my-10">Meal Ideas</h2>
            <ul>
                Meal: {[idMeal, strMeal, strMealThumb]}
                {meals.map((mealType) => ({mealType}))}
            </ul>
        </div>
    );
};  