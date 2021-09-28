import React from 'react';

const ErrorPage = () => {
  let errorImg = 
    <img 
      datasrc="https://scdn.italki.com/ng/static/image/not_found_pic_svg.svg" 
      alt="" 
      className="m-auto w-4/5 md:w-full lg:w-full lazyloaded" 
      src="https://scdn.italki.com/ng/static/image/not_found_pic_svg.svg">
    </img>;
  return (
    <div className="error-page">
      {errorImg}
      <div className="error-description">
        <h1>404</h1>
        <p>Oops! The page you requested could not be found.</p>
        <h2>Check out the links below instead:</h2>
      </div>
    </div>
  );
};

export default ErrorPage;