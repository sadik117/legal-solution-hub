import React, { useEffect, useState } from 'react';
import HealthAppCard from './HealthAppCard'; 

const HealthAppContainer = ({ apps }) => {
  const [displayApps, setDisplayApps] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayApps(apps);
    } else {
      setDisplayApps(apps.slice(0, 6));
    }
  }, [apps, showAll]);

  return (
    <div className='px-4 md:px-16 mb-10 text-center'>
      <h3 className='font-extrabold text-[#0F0F0F] text-2xl mb-2'>Top Health Apps</h3>
      <p className='font-medium text-gray-500 text-sm'>
        Explore powerful health and wellness apps that help you live better.
        <br /> Whether it's fitness, mindfulness, or tracking, we’ve got your health covered.
      </p>

      <div className='py-6 md:py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {displayApps.map(app => (
            <HealthAppCard key={app.id} app={app} />
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className='btn h-9 bg-green-600 text-white rounded-xl px-4'
      >
        {showAll ? 'Show Less' : 'Show All Health Apps'}
      </button>
    </div>
  );
};

export default HealthAppContainer;
