import React from 'react'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          fname: '',
          lname: '',
          fruit: '',  
        };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    updateState (event, key) {
        this.setState({[key]: event.target.value})
    }
  
    handleSubmit(event) {
        alert(this.state.fname + ' ' + this.state.lname + ' loves ' + this.state.fruit);
        event.preventDefault();
        
        console.log(this.state.fname + ' ' + this.state.lname + ' loves ' + this.state.fruit);
        
        let response = []
        // need to populate array
        for (this.handleSubmit) {
            response = response+i
        }

        let displayLoop = () => {
            console.log(this.state.fname + ' ' + this.state.lname + ' displays ' + this.state.fruit)
            for (i = 0, i < response.length; i++) {
                this.state.fname + this.state.lname + ' loves ' + this.state.fruit + "<br></br>"
            }
        };
        displayLoop()
    }
  
    render() {
      return (
        <span>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name: 
            <input 
                type="text" 
                value={this.state.fname} 
                onChange={event => this.updateState(event, 'fname')} /><br></br>
            Last Name: 
            <input 
                type="text" 
                value={this.state.lname} 
                onChange={event => this.updateState(event, 'lname')} /><br></br>
          </label>
          Favorite Fruit: 
            <select value={this.state.fruit}
                onChange={event => this.updateState(event, 'fruit')}>
                <option value="mango">Mango</option>
                <option value="strawberry">Strawberry</option>
                <option value="banana">Banana</option>
                <option value="plum">Plum</option>
                <option value="apricot">Apricot</option>
                <option value="grapes">Grapes</option>
                <option value="kiwi">Kiwi</option>

            </select><br></br>
          <input type="submit" value="Submit" />
        </form>
        <div>
            <h1>Hiiii</h1>
        </div>
        </span>
      );
    }
  }
export default Form