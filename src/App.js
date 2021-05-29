import './App.css';
import React from 'react';
import  ListItems from './listItem.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this); //to avoid TypeError: Cannot read property 'setState' of undefined    handleInput
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==''){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  removeItem(key){
    const fileredItems = this.state.items.filter(item=>item.key!==key);
    this.setState({
      items:fileredItems
    })
  }

  setUpdate(text, key){
    const allItems = this.state.items;
    allItems.map(item =>{
      if(item.key===key){
        item.text=text;
      }
  })
    this.setState({
      items:allItems
    })
  }
   
  render(){
    return (
      <div className="App">
      <header>
        <form id="todo-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter your activity" value={this.state.currentItem.text} onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items={this.state.items} removeItem={this.removeItem} setUpdate={this.setUpdate}></ListItems>
    </div>
    );
  }
}

export default App;
