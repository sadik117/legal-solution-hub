import { Helmet } from "react-helmet-async";

export const AboutUs = () => {
    return (  
      <div className="px-4 mt-3 md:mt-5 py-16 mx-auto w-11/12 md:px-24 lg:px-8 lg:py-20 border-blue-400 border-2 rounded-2xl shadow-2xl">
         <Helmet>
            <title>About Us</title>
        </Helmet>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Fearless
            </h6>
            <div className="mb-2 text-gray-700">
              We will remember and recover, update everyday.
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Honest
            </h6>
            <div className="mb-2 text-gray-700">
              We have nothing to lose but something to gain.
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Beautiful
            </h6>
            <div className="mb-2 text-gray-700">
              White is not always light and black is not always dark.
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Fantastic
            </h6>
            <div className="mb-2 text-gray-700">
              The meaning of life is to give life meaning.
            </div>
          </div>
        </div>
      </div>
    );
  };