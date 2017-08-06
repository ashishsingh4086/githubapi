import React, {Component} from 'react';

class User extends Component {
    

    render(){
        return(
            <div>
              <div className="panel panel-default">
                    <div className="panel-heading">     
                        <h3 className="panel-title">{this.props.value.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3">  
                                <img className="thumbnail" src={this.props.value.avatar_url} width="80px" alt={this.props.value.name}/>
                            
                                <a target="_blank" className="btn btn-primary btn-block" href="{this.props.value.html_url}">View Profile</a>
                            </div>
                            
                                 <div className="col-md-9">
                                    <span className="label label-default">Public Repos: {this.props.value.public_repos}</span>
                                    <span className="label label-primary">Public Gists: {this.props.value.public_gists}</span>
                                    <span className="label label-success">Followers: {this.props.value.followers}</span>
                                    <span className="label label-info">Following: {this.props.value.following}</span>
                                    <br/><br/>
                                    <ul className="list-group">
                                    <li className="list-group-item">Company: {this.props.value.company}</li>
                                    <li className="list-group-item">Website/blog: {this.props.value.blog}</li>
                                    <li className="list-group-item">Location: {this.props.value.location}</li>
                                    <li className="list-group-item">Member Since: {this.props.value.created_at}</li>
                                    </ul>
                                 </div>
                                 </div>
                             </div>
                     </div>
               </div>
                   

        );
    }
}

export default User;