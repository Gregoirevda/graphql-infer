import React, {Component} from 'react';
import {gredux} from './gredux/gredux';

class Person extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {person, result} = this.props;
    return <div>
      <h3>I'm {person.name}</h3>

      <h4>I'm {person.age} years old.</h4>
    </div>
  }
}
export default gredux({ query: 'person'})(Person);



/**
 In the apollo-server directory, you can see that our defined graphql schema looks like
 type Query {
    person: Person
 }

 type Person {
   name: String
   age: Number
 }

 Here we're telling gredux to query person on Query type.
 */