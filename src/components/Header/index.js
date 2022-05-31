import styled from "styled-components"

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Beleren Bold;
`
const Content = styled.div`
    display: flex;
`
const Header = (props) => {
    const manaIcons = [`w`, 'u','b','r','g']
    return <Container>
                <h1>Explorers of Ixalan</h1>
                <Content>
                    {manaIcons.map(icon => <i key={icon} className={`ms ms-${icon} ms-cost ms-shadow ms-6x`}></i>)}
                </Content>
            </Container>
}
export default Header;