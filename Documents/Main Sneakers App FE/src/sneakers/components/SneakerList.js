import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import SneakerItem from './SneakerItem';
import Button from '../../shared/components/FormElements/Button';
import './SneakerList.css';

const SneakerList = props => {
  if (props.items.length === 0) {
    return (
      <div className="sneaker-list center">
        <Card>
          <h2>No sneakers found. Maybe create one?</h2>
          <Button to="/sneakers/new">Share Sneaker</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="sneaker-list">
      {props.items.map(sneaker => (
        <SneakerItem
          key={sneaker.id}
          id={sneaker.id}
          image={sneaker.image}
          title={sneaker.title}
          description={sneaker.description}
          address={sneaker.address}
          creatorId={sneaker.creator}
          coordinates={sneaker.location}
          onDelete={props.onDeleteSneaker}
        />
      ))}
    </ul>
  );
};

export default SneakerList;
