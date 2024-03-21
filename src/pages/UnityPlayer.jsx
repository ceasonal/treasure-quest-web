import React from 'react';

function GameHTMLPage() {
  const iframeStyle = {
    display: 'block',
    margin: 'auto',
    border: 'none',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <iframe src="../../game.html" title="Game" width="1000" height="600" style={iframeStyle}></iframe>
    </div>
  );
}

export default GameHTMLPage;
