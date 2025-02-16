import {useState} from "react";
import Cake from "../components/Cake";
import CakeForm from "../components/CakeForm"

//Created props
const CakeContainer = () => {
    const [cakes, setCakes] = useState([{
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        "cakeName": "Chocolate Cake",
        "ingredients": ["chocolate", "eggs", "flour", "butter", "sugar"],
        "rating": 5
      },
      {
        "cakeName": "Vanilla Cake",
        "ingredients": ["flour", "sugar", "butter", "eggs", "vanilla extract"],
        "rating": 4
      },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }]);

    const addRecipe = (newRecipe) => {
        setCakes([... cakes, newRecipe]);
    }

        const cakeComponents = cakes.map((cake, index) => {
          return <Cake cake={cake} key={index} />;
        });


        return(
            <>
            <h2>Cakes</h2>
            <section id="cake-container">
            {cakeComponents}
            </section>
            <CakeForm addRecipe={addRecipe}/>
            </>
        )

}
export default CakeContainer;