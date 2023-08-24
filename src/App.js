import React from 'react';
import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Footer from './component/Footer';
import Guarantee from './component/Guarantee';
import Header from './component/Header';
import History from './component/History';
import People from './component/People';
import Products from './component/Products';

function App({ signOut, user }) {
  return (
    <div className="App">
      <div className="container">
        <Heading level={1}>Hello {user.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
        <h2>Amplify Todos</h2>
      </div>
      <Header />
      <History />
      <Products />
      <Guarantee />
      <People />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
