import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: [],

    }

  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then( (res) => {
      this.setState({
        students: res.data,
      })
    })
  }

  render() {
    var students = this.state.students.map((element, id) => {
      return (
        <Link key={ id } to='/student/:id'>
          <h3>{ element.first_name } { element.last_name }</h3>
        </Link>
      )
    })
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        { students }
      </div>
    )
  }
}