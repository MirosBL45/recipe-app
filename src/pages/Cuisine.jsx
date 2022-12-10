import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, Card2 } from '../components/styles/styles';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  async function getCuisine(name) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type); //ovo type je tamo u Pages
    // console.log(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((recipe) => {
        return (
          <Card2 key={recipe.id}>
            <Link to={'/recepie/' + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card2>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
