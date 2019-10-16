import React, {Component} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import DashboardStyle from '../styling/dashboardstyle'

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
            <DashboardStyle>
                <h1>Friends List</h1>
                {this.state.friends.map(friend => (
                    <div>
                    <Friend 
                    key= {friend.id}
                    friend= {friend}
                    />
                    </div>
                ))}    
            </DashboardStyle>
        )
    }
    
}
export default Friends;