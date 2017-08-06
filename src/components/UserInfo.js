import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong> URL:  </strong>
                        <a href={this.props.value.url} target="_blank"> {this.props.value.url}</a>
                    </div>
                </div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <strong > Blog: </strong>{this.props.value.blog}
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <strong  > Email: </strong>{this.props.value.email}
                    </div>
                </div>
            </div>
        )
    }
}
export default UserInfo;