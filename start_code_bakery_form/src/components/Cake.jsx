const Cake = ({cake}) => {


    return (
        <article className="cake">
        <h2>{cake.cakeName}</h2>
        <h3>Ingredients: </h3>
        <ul>
            {cake.ingredients.map((ingredient, index) => {
                return <li key = {index}>{ingredient}</li>
            })}
        </ul>
        <h4>Rating: {cake.rating}</h4>
        </article>
    
    )}
    
    export default Cake;