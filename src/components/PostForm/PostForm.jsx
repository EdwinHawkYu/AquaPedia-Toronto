import { Component } from "react";

export default class PostForm extends Component{
  state = {
    name: '',
    level: '',
    price: '',
    date: ''
  };

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  handleSubmit = async () =>{
    let optionBody = {
      name: this.state.name,
      level: this.state.level,
      price: this.state.price,
      date: this.state.date
    }
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(optionBody)
    }
    await fetch('/api', options)
      .then(res => res.json())
      .then(data => {
        this.props.getPosts()
        this.setState({})
      })

  }

  render(){
    return(
      <div>
        <div>
          <form>
            <label>Name</label>
            <input
            // type=''
            // name=''
            // onChange={this.handleChange}
            // required
            />
            <label>Level</label>
            <input
            // type=''
            // name=''
            // onChange={this.handleChange}
            // required
            />
            <label>Price</label>
            <input
            // type=''
            // name=''
            // onChange={this.handleChange}
            // required
            />
            <label>Date</label>
            <input
            // type=''
            // name=''
            // onChange={this.handleChange}
            // required
            />
            <button onClick={this.handleSubmit}>Add Posting!</button>
          </form>
        </div>
      </div>
    )
  }
}