import React from 'react';
import styles from './App.module.scss';
import FiveStars from './sharedComponents/FiveStars.jsx';
import UpvoteLink from './sharedComponents/upvoteLink/UpvoteLink.jsx';

function App() {

  return (
    <div>
      <h1 data-testid="app-hw" className={styles.ugly}>Pirates of the query-bbean</h1>
    </div>
  );
}

export default App;
