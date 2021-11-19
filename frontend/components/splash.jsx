import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  const splashPic = <picture><source srcSet="https://scdn.italki.com/ng/static/image/milkway/homepage/topImg/hero_web.webp" type="image/webp" media="(min-width: 768px)" /><source srcSet="https://scdn.italki.com/ng/static/image/milkway/homepage/topImg/hero_mobile.webp" type="image/webp" media="(max-width: 767px)" /><source srcSet="https://scdn.italki.com/ng/static/image/milkway/homepage/topImg/hero_web.jpg" type="image/jpeg" media="(min-width: 768px)" /><source srcSet="https://scdn.italki.com/ng/static/image/milkway/homepage/topImg/hero_mobile.jpg" type="image/jpeg" media="(max-width: 767px)" /><img src="https://scdn.italki.com/ng/static/image/milkway/homepage/topImg/hero_web.jpg" width="750" height="640" alt="italki hero image" /></picture>;
  return (
    <div className="splash-body">
      <div className="splash-header">
        <p>
          Become fluent in any language
        </p>
        {splashPic}
      </div>
    </div>
  )
}

export default Splash;