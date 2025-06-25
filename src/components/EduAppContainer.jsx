import React, { useEffect, useState } from 'react';
import EduAppCard from './EduAppCard'; 

const EduAppContainer = ({ apps }) => {
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
    <div className='px-16 mb-10 md:px-22 justify-center text-center'>
      <h3 className='font-extrabold text-[#0F0F0F] text-2xl mb-2'>Top Educational Apps</h3>
      <p className='font-medium text-gray-500 text-sm'>
        Discover apps that make learning fun, interactive, and effective. These top-rated education tools help users of all ages learn new skills and gain knowledge across various subjects.
      </p>
      
      <div className='py-6 md:py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            displayApps.map(app => (
              <EduAppCard key={app.id} app={app} />
            ))
          }
        </div>
      </div>

      <button 
        onClick={() => setShowAll(!showAll)} 
        className="btn h-9 bg-blue-600 text-white rounded-xl"
      >
        {showAll ? 'Show Less' : 'Show All Apps'}
      </button>
    </div>
  );
};

export default EduAppContainer;
