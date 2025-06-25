import React, { use, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Firebase/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    fetch('/allAppsData.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedApp = data.find((item) => item.id === id);
        if (selectedApp) setApp(selectedApp);
      });
  }, [id]);

  const handleInstall = () => {
    setInstalled(!installed);
    toast.success(installed ? 'App Uninstalled' : 'App Installed');
  };

  const handleReviewSubmit = () => {
    if (!installed) {
      return toast.error('You must install the app before reviewing.');
    }
    if (!reviewText || !rating) {
      return toast.error('Both review and rating are required.');
    }
    const newReview = {
      user: user?.displayName || 'Anonymous',
      comment: reviewText,
      rating: parseFloat(rating),
    };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setRating('');
  };

  if (!app) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="px-4 md:px-20 py-10">
      <Helmet>
        <title>Apps Details</title>
      </Helmet>
      <img src={app.banner} alt={app.name} className="rounded-xl mb-6 w-fit max-h-50 object-cover" />
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold mb-2">{app.name}</h1>
        <p className="text-sm text-gray-500 mb-1">By {app.developer}</p>
        <p className="text-sm mb-2"> <span className='font-semibold'> Category:</span> {app.category} | <span className='font-semibold'> Downloads:</span> {app.downloads.toLocaleString()}</p>
        <p className="mb-4 font-bold text-zinc-500">{app.description}</p>
        <div className="mb-4">
          <strong>Features:</strong>
          <ul className="list-disc list-inside">
            {app.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleInstall}
          className={`mb-6 px-6 py-2 rounded-lg text-white ${installed ? 'bg-red-600' : 'bg-green-600'}`}
        >
          {installed ? 'Uninstall' : 'Install'}
        </button>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Submit a Review</h3>
          <textarea
            className="border p-2 w-full mb-2 rounded"
            placeholder="Your review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <input
            type="number"
            min="1"
            max="5"
            placeholder="Rating (1-5)"
            className="border p-2 w-full mb-2 rounded"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <button
            onClick={handleReviewSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded"
          >
            Submit Review
          </button>
        </div>

        {reviews.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">User Reviews</h3>
            {reviews.map((r, i) => (
              <div key={i} className="border p-3 mb-2 rounded">
                <p className="font-medium">{r.user}</p>
                <p className="text-sm">Rating: {r.rating} ⭐</p>
                <p className="text-gray-700">{r.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDetails;
