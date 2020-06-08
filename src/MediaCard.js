import React from 'react';

function MediaCard(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <img src={props.imageUrl} alt="Panther" width={150}px />
      </div>
    );
  }

export default MediaCard;
