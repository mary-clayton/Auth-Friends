import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FormStyle from '../styling/formstyle';


 const FriendForm = (props) => {
    const [newFriend, setNewFriend] = useState ( {
        name: '',
        age: '',
        email: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('api/friends', newFriend)
        .then(res => {
            console.log("res", res);
            props.history.push('/dashboard')
        })
    }

    const handleChanges = e => {
        const friendName = e.target.name;
        setNewFriend({...newFriend, [friendName]: e.target.value})
    }

    return (
        <FormStyle>
            <h1>Add New Friend</h1>
            <form>
            <input type="text" name="name" placeholder="name.." onChange={handleChanges} required/>
            <input type="number" name="age" placeholder="age.." onChange={handleChanges} required/>
            <input type= "email" name="email" placeholder="email.." onChange={handleChanges} required/>
            <button onClick={handleSubmit}> Add friend </button>
            </form>
        </FormStyle>
    )
}
export default FriendForm;