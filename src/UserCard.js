import React from 'react'
import './Card.css';
function UserCard({post}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {/* <div className="card-body">
                <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Name</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Occupation</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Bs</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Phone</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Company</th>
                    </tr>
                  </thead> */}
                  <table className="table no-wrap user-table mb-0">
                  <tbody>
                    <tr>
                      <td className="pl-4">{post.id}</td>
                      <td>
                        <h5 className="font-medium mb-0">{post.name} {post.username}</h5>
                        <span className="text-muted">{post.address.street}, {post.address.city}</span>
                      </td>
                      <td>
                        <span className="text-muted">{post.address.zipcode}</span><br />
                        <span className="text-muted">{post.address.suite}</span>
                      </td>
                      <td>
                        <span className="text-muted">{post.email}</span><br />
                        <span className="text-muted">999 - 444 - 555</span>
                      </td>
                      <td>
                        <span className="text-muted">{post.company.bs}</span><br />
                        <span className="text-muted">10: 55 AM</span>
                      </td>
                      <td>
                      <span className="text-muted">{post.phone}</span><br />
                        <span className="text-muted">10: 55 AM</span>
                      </td>
                      <td>
                      <span className="text-muted">{post.company.name}</span><br />
                        <span className="text-muted">10: 55 AM</span>
                      </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  





   
  )
}

export default UserCard