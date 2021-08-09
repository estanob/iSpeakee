import React, { useEffect } from 'react';

const LanguageIndex = props => {
  console.log("Language index props:");
  console.log(props);

  useEffect(() => {
    return props.fetchLanguages();
  }, [])
  
  return (
    <div className="language-index">
      <h1>Hello</h1>
      {/* <ul className="languages-ul">
      </ul> */}
    </div>
  )
}

// class LanguageIndex extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     <div className="language-index">
//       <ul className="languages-ul">
//       </ul>
//     </div>
//   }
// };

export default LanguageIndex;