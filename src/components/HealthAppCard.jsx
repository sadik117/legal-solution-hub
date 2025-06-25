import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const HealthAppCard = ({ app }) => {
  return (
    <Link to={`/appDetails/${app.id}`}>
    <div className='border text-left rounded-xl shadow-sm hover:shadow-lg transition-all p-4 bg-white'>
      <img
        src={app.thumbnail}
        alt={app.name}
        className='w-20 h-20 object-cover rounded-md mb-4'
      />
      <h4 className='font-bold text-lg mb-1'>{app.name}</h4>
      <p className='text-sm text-gray-600 mb-2'>By: {app.developer}</p>
      <div className='flex justify-between text-sm text-gray-500'>
        <span className='flex items-center gap-1'>
          <Star className='w-4 h-4 text-yellow-500' /> {app.rating}
        </span>
        <span>{(app.downloads / 1000000).toFixed(1)}M+ Downloads</span>
      </div>
    </div>
     </Link>
  );
};

export default HealthAppCard;
