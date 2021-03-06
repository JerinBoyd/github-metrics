import React, { Component } from 'react';
import './UserSideBar.css';

class UserItem extends Component {
    render(){
        const {user, selectedUser, onSelect } = this.props;
        const classes = selectedUser === user ? 
                            'UserSideBar--list-item active' : 
                            'UserSideBar--list-item';
        return (<li className={classes}>
                    <button onClick={() => onSelect(user)}>
                        {user}
                    </button>
                </li>);
    }
}
class UserList extends Component {
    render(){
        const { users, selectedUser, onSelect,  } = this.props;
        const Users = users.map((user, index) => <UserItem 
                                                        key={index}
                                                        user={user}
                                                        onSelect={onSelect}
                                                        selectedUser={selectedUser}
                                                        />)
        return (
            <ul className='UserSideBar--list'>
                {Users}
            </ul>
        );
    }
}
class UserSideBar extends Component {
    render(){
        const { users, selectedUser, onSelect } = this.props;
        
        return (
            <div className="UserSideBar--container">
                <h1 className='UserSideBar--header'>GitHub Users</h1>
                <UserList 
                    users={users}
                    selectedUser={selectedUser}
                    onSelect={onSelect}/>
                <div className="UserSideBar--user-form">
                    <form onSubmit={(e) => this.props.addUser(e, this.props.username)}>
                        <input type="text" 
                            value={this.props.username} 
                            placeholder='GitHub Username'
                            onChange={e => this.props.updateUser(e)}/> 
                    </form> 
                </div>
            </div>
        );
    }
}

export default UserSideBar;