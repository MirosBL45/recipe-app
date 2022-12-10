import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card2 } from '../components/styles/styles';
import { Link } from 'react-router-dom';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  async function getSearched(name) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  }

  useEffect(() => {
    getSearched(params.search); //ovo search je tamo u Pages
  }, [params.search]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchedRecipes.map((item) => {
        return (
          <Card2 key={item.id}>
            <Link to={'/recepie/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card2>
        );
      })}
    </Grid>
  );
}

export default Searched;
