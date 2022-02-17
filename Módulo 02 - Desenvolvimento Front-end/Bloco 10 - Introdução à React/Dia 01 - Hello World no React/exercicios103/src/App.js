import { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Content />
        <Footer />
      </body>
    );
  }
}

export default App;
