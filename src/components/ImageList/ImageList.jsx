import React from 'react';
import ImageListItem from '../ImageListItem/ImageListItem';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './ImageList.css'

const ImageList = ({ imgList }) => {
  const isBottom = useScrollPosition();
  
  return imgList.map((img) => {
    return (
      <div key={img.id} className='card_item'>
        <ImageListItem image={img} key={img.id}/>
      </div>
    );
  });
};

export default ImageList;
