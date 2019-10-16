import styled from 'styled-components'

const DashboardStyle = styled.div `
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
margin-bottom: 5%;
h1 {
    margin: 3%;
    color: teal;
}
.list {
    border: 1px solid lightgray;
    background: rgba(255, 255, 255, 0.50);
    width: 500px;

}
p {
    font-size: 1rem;
}
`
export default DashboardStyle;