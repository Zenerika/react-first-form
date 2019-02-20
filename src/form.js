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
    }

    display500(handleSubmit) {
        return (
            <div>
                Hello
            </div>
        )
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
            </select><br></br>
          <input type="submit" value="Submit" />
        </form>
        <div>
            {/* todo */}
        </div>
        </span>
      );
    }
  }
export default Form