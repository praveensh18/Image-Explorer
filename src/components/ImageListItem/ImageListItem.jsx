import React from 'react';
import './ImageListItem.css';
import { saveAs } from 'file-saver';

const ImageListItem = ({ image }) => {
  async function downloadImage() {
    const imageRes = await fetch(image.download_url)
    const imageBlob = await imageRes.blob()
    saveAs(imageBlob, image.author+'_'+image.id)
  }

  return (
    <div className='card'>
      <a href={image.url}>
        <img src={image.download_url} className='img' />
      </a>
      <div className='card_banner'>
        <img src={image.download_url} className='card_thumb' />
        <div className='card_text'>
          <h3 className='card_title'>{image.author}</h3>
          <div className='card_subtitle'>
            Original Size: {image.height}x{image.width}
          </div>
          <button onClick={downloadImage}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default ImageListItem;
