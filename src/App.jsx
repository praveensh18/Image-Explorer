import { useEffect, useState } from 'react';
import ImageList from './components/ImageList/ImageList';
import { useScrollPosition } from './hooks/useScrollPosition';
import s from './App.module.css';
import axios from 'axios';

export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImagesByPages = async (pageNumber) => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImagesByPages(pageToFetch);
  }, [pageToFetch]);

  function increasePage() {
    setPageToFetch(pageToFetch + 1);
  }

  useEffect(() => {
    if (isBottom) {
      increasePage();
    }
  }, [isBottom]);

  return (
    <div className={s.rootContainer}>
      <h1>Enjoy Images</h1>
      <h2 className={s.subtitle}>Download your favourite images for free</h2>
      <ImageList imgList={imageList}/>
      {isLoading && <div className='spinner-border' role='status'></div>}
    </div>
  );
}
