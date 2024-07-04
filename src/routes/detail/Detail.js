import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';
import { FaHeart, FaStar } from 'react-icons/fa';

function Detail() {
  const { id } = useParams();
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
          <div>
            <img src={data.medium_cover_image} alt="" />
          </div>
          <div className={styles.title_area}>
            <strong className={styles.title}>{data.title}</strong>
            <div className={styles.icon_label}>
              <FaHeart size={15} color="#f00" />
              <strong>{data.like_count}</strong>
            </div>
          </div>
          <div className={styles.info_area}>
            <div>
              <strong>rating</strong>
              <div className={[styles.icon_label]}>
                <FaStar size={15} color="#f00" />
                <strong>{data.rating}</strong>
              </div>
            </div>
            <div>
              <strong>year</strong>
              <span>{data.year}</span>
            </div>
            <div>
              <strong>runtime</strong>
              <span>{data.runtime}분</span>
            </div>
            <div>
              <strong>Desc</strong>
              <p>{data.description_full}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
