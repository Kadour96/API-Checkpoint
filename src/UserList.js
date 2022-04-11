import React from 'react';

import axios from 'axios';
import UserCard from './UserCard';


export default class UserList extends React.Component {
 state = {
  posts: []
 }

 componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
 .then(res => {
    const posts = res.data;
    this.setState({ posts });
   })
 }

 render() {
  return (
                 <>
                  <div className="container">
                  <div className="row">
                  <div className="col-md-12">
                 <div className="card"></div>
                 <div className="card-body">
                <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Name</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Zip Code</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Bs</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Phone</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Company</th>
                    </tr>
                  </thead>
                  </table> 
                  </div>
                  </div>
                  </div>
                  </div>
    <div>
        {this.state.posts.map(post=><UserCard key={post.id} post={post}/>)}

    </div>   
    </>
  )
  
 }
}