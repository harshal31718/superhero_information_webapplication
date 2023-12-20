import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { data } from './dataBase.js';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            data: data,
            searchField: ''
        }
    }
     
    onSearch = (event) => {
        this.setState({searchField: event.target.value})
    }
     
    render(){ 
        const filteredData = this.state.data.filter( data => {
                return data.username.toLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        }) 
        return (
            <div className='tc'> 
                <h1 className='f1'>SUPERHERO IDENTITY</h1>
                <SearchBox searchChange={this.onSearch}/>
                <Scroll>
                    <CardList data={filteredData} />
                </Scroll>  
            </div>
        );
    }
}

// const App =() =>{
//     return (
//         <div className='tc'> 
//             <h1>RoboFriends</h1>
//             <SearchBox/>
//             <CardList robots={robots} />
//         </div>
//     );
// }

export default App;