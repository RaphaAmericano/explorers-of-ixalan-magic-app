import styled from "styled-components"

const Header = styled.header`
    font-family: Beleren Bold;
`

export default function(props){
    const manaIcons = [`w`, 'u','b','r','g']
    return <Header>
                <h1>Explorers of Ixalan</h1>
                {manaIcons.map(icon => <i class={`ms ms-${icon} ms-cost ms-shadow ms-6x`}></i>)}
            </Header>
}