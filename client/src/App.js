import React from 'react';
import PlayButton from './components/01_PlayButton';
import UserInfo from './components/02_UserInfo';
import Rules from './components/03_Rules';

import './App.scss';
class  App extends React.Component {
  state={
    page: 1
  }

  nextPage = () => {
    const { page } = this.state
    this.setState({
      page: page + 1
    })
  }

  previousPage = () => {
    const { page } = this.state
    this.setState({
      page: page - 1
    })
  }
  render() {
    const {page} = this.state;
    switch (page) {
      case 1:
        return <PlayButton nextPage={this.nextPage}/>
      case 2:
        return <UserInfo nextPage={this.nextPage} previousPage={this.previousPage}/>
      case 3: 
        return <Rules nextPage={this.nextPage} previousPage={this.previousPage}/>
      default:
        break;
    }
    return (
     <div className="App">
       <PlayButton />
     </div>
   );
  }
}

export default App;
