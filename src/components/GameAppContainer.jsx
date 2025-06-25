import React, { useEffect, useState } from 'react';
import GameAppCard from './GameAppCard';

const GameAppContainer = ({ games }) => {
  const [displayGames, setDisplayGames] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayGames(games);
    } else {
      setDisplayGames(games.slice(0, 6));
    }
  }, [games, showAll]);

  return (
    <div className="px-4 md:px-16 mb-10 text-center">
      <h3 className="text-2xl font-extrabold text-[#0F0F0F] mb-2">Top Gaming Apps</h3>
      <p className="text-sm text-gray-500 mb-6">
        Explore trending mobile games across action, puzzle, and casual genres. Dive into immersive worlds and play with millions!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayGames.map((game) => (
          <GameAppCard key={game.id} app={game} />
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 px-5 py-2 bg-amber-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        {showAll ? 'Show Less' : 'Show All Games'}
      </button>
    </div>
  );
};

export default GameAppContainer;
