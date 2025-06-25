import React from 'react';
import Counter from './Counter';

const StatsSection = () => {
  return (
    <div className="py-10 px-4 md:px-20 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
        Store Statistics
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Here's a quick look at what makes our platform powerful and popular.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Counter icon="📱" number={1200} label="Total Apps" />
        <Counter icon="⬇️" number={98000} label="Total Downloads" />
        <Counter icon="👨‍💻" number={300} label="Developers" />
        <Counter icon="🟢" number={45000} label="Active Users" />
      </div>
    </div>
  );
};

export default StatsSection;
