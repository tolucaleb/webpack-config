import React from 'react';

const style = {
  inlineStyle: {
    color: '#3b5998',
  },
};

const { inlineStyle } = style;
const App = () => (
  <div className="row">
    <div className="marginalized-2x">
      <div className="main">
        <p style={inlineStyle}>
          Webpack Config with React and hot  Reloading <i className="fa fa-handshake-o" />
        </p>
      </div>
    </div>
  </div>
    );

export default App;
