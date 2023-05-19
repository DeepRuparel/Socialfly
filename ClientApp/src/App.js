import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';



import './custom.css'
import { YourAvatar } from './components/YourAvatar';
import { Progress } from './components/Progress';
import { Leaderboard } from './components/Leaderboard';
import { Socialfly } from './components/Socialfly';
import { Default } from './components/Default';
import { FetchData } from './components/FetchData';
import DataFetching from './components/DataFetching';
import Mentors from './components/Mentors';
import Teammembers from './components/Teammembers';
import Orgleaders from './components/Orgleaders';
import Documents from './components/Documents';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Register from './components/Register';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
	<>
        <Layout>
            <Route exact path='/' component={Default} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/home' component={Home} />
            <Route path='/your-avatar' component={YourAvatar} />
            <Route path='/progress' component={Progress} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/socialfly' component={Socialfly} />
            <Route path='/data-fetching' component={DataFetching} />
            <Route path='/mentors' component={Mentors} />
            <Route path='/teammembers' component={Teammembers} />
            <Route path='/orgleaders' component={Orgleaders} />
            <Route path='/documents' component={Documents} />
            <Route path='/about-us' component={Aboutus} />
	    <Route path = '/contact' component={Contact} />
	    <Route path ='/login' component = {Login} />
	    <Route path ='/register' component = {Register} />
      		</Layout>
		
	</>
    );
  }
}
