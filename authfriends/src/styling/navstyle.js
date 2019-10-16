import styled from 'styled-components'

const NavStyle = styled.div `
nav {
    margin: 0 0 3% 0;
    padding: 2%;
    background: lightblue;
    
}

nav a {
    text-decoration: none;
    margin: 5%;
    color: black;
    :hover {
        color: white;
        font-weight: bold;
    }
}
`
export default NavStyle;