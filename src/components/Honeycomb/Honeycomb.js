import styled from "styled-components"
import HoneycombCell from "./HoneycombCell";

const Ul = styled.ul`
    display:-webkit-box;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    transform: translateY(80px);
`;

export default function(props){
    return <Ul>
        {Array(50).fill(<HoneycombCell />)}
    </Ul>
}