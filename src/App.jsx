// import React, { useState } from 'react';
import React from 'react';
import './App.scss';
import { Switch, Link, Route } from 'react-router-dom';
import { getTopTracks } from './api/tracks';
import { TopTracks } from './components/TopTracks/TopTracks';

export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const x = getTopTracks();

  return (
    <div>
      <TopTracks />
      <div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </nav>

        <Switch>
          <Route path="/users">
            <div>Users page</div>
          </Route>
          <Route path="/">
            <div>Home page</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
