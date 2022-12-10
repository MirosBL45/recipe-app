import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailWrapper, Button, Info } from '../components/styles/styles';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  async function fetchDetails() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="firstDetailWrapper">
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <div className="buttons">
          <Button
            className={activeTab === 'instructions' && 'active'}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === 'ingredients' && 'active'}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </Button>
        </div>
        {activeTab === 'instructions' && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingridient) => (
              <li key={ingridient.id}>{ingridient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

export default Recipe;
