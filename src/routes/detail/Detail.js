import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Detail() {
  const { id } = useParams();

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const res = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    })();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
