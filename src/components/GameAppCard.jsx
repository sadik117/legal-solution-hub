import React from 'react';
import { Link } from 'react-router';

const GameAppCard = ({ app }) => {
  const { name, thumbnail, rating, downloads } = app;

  return (
    <Link to={`/appDetails/${app.id}`}>
    <div className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center text-center hover:shadow-2xl transition-all">
      <img src={thumbnail} alt={name} className="w-40 h-30 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold text-gray-800 mb-1">{name}</h2>
      <p className='text-sm text-gray-600'>By: {app.developer}</p>
      <p className="text-sm text-gray-600">Rating: {rating} ⭐</p>
      <p className="text-sm text-gray-600">Downloads: {downloads.toLocaleString()}</p>
    </div>
    </Link>
  );
};

export default GameAppCard;