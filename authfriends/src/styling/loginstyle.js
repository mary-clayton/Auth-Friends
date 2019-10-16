import styled from 'styled-components'

const LoginStyle = styled.div `
margin: 5%;
h1 {
    margin-bottom: 5%;
    color: teal;
}
form {
    display: flex;
flex-flow: column wrap;
align-items: center;
}
input {
width: 300px;
height: 30px;
margin: 1%;
font-size: 1rem;
}
label {
    font-size: 1.1rem;
}
button {
    width: 150px;
    height: 40px;
    font-size: 1rem;
    background: teal;
    color: white;
    cursor: pointer;
    border-radius: 14px;
}
`
export default LoginStyle;