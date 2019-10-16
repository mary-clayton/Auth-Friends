import React, {Component} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

//Components
import Friend from './Friend'


class Friends extends Component {
state = {
   friends: []
}

componentDidMount() {
    this.getData();
}

getData = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        this.setState( {
            friends: res.data
        })
    })
    .catch(err => console.log(err.response))
}
    render()  {
        return(
            <div>
                {this.state.friends.map(friend => (
                    <Friend 
                    key= {friend.id}
                    friend= {friend}
                    />
                ))}    
            </div>
        )
    }
    
}
export default Friends;