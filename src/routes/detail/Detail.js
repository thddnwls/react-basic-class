import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';
import { GoArrowLeft } from 'react-icons/go';

function Detail() {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const res = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      setData(res.data.movie);
      setLoading(false)
    })();
  }, []);

  return (
    <div className={styles.content_wrap}>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <button onClick={history.goBack} className={styles.content_prev}>
            <GoArrowLeft />
          </button>

          <h1>{data.title}</h1>
          <p>{data.description_intro}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
