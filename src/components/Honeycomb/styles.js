import styled from "styled-components"
import { motion } from 'framer-motion/dist/framer-motion';

export const Li = styled(motion.li)`
    cursor: pointer;
    -webkit-box-flex: 0;
    flex: 0 1 250px;
    max-width: 250px;
    height: 137.5px;
    margin: 65.4px 12.5px 25px;
    position: relative;
    padding: 0.5em;
    text-align: center;
    z-index: 1;
    box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.1);
    :before, :after{
        content: ''
    }
    :before, :after{
        top: -50%;
        left: 0;
        width: 100%;
        height: 200%;
        display: block;
        position: absolute;
        -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        z-index: -1;
    }
    ::before {
        background: #FFF;
        transform: scale(1.055);
    }
    ::after {
        background: #111;
        opacity: 0.7;
        transition: opacity 350ms;
        -webkit-transition: opacity 350ms;
    }
    :hover {
        opacity: 0;
    }
    :hover{
        filter: grayscale(0%);
    }
    :hover::before{
        background: green;
    }
    :hover::after{
        opacity: 0;
    }
    .hidden {
        display: none;
        opacity: 0;
        width: 250px;
        margin: 0 12.5px
    }
    @media (max-width: 550px){
        margin: 81.25px 25px;
    }
    @media (max-width: 550px) and (max-width: 825px ){
        :nth-child(3n){
            margin-right: calc(50% - 125px);
            margin-left: calc(50% - 125px);
        }
        .hidden:nth-child(3n + 5){
            display: block;
        }
    }
    @media (max-widthL: 825px) and (max-width: 1100px ){
        :nth-child(5n + 4){
            margin-left: calc(50% 275px);
        }
        :nth-child(5n + 5){
            margin-left: calc(50% 275px);
        }
        .hidden:nth-child(5n),
        .hidden:nth-child(5n + 3){
            display: block;
        }
    }
    @media  (max-width: 1100px ){
        :nth-child(7n + 5){
            margin-left: calc(50% - 400px);
        }
        :nth-child(7n + 7),
        :nth-child(7n + 5):nth-child(2){
            margin-right: calc(50% - 400px);
        }
        .hidden:nth-child(7n + 7),
        .hidden:nth-child(7n + 9),
        .hidden:nth-child(7n + 11){
            display: block;
        }
    }
`;

export const Img = styled.img`
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
    display: block;
    position: absolute;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
    filter: grayscale(0%);
    object-fit: cover;
    object-position: center;
    filter: grayscale(100%);
`;

export const Content = styled.div`
    height: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    text-transform: uppercase;
    color: #FFF;
    font-weight: 7000;
    font-size: 1.75em;
    /* transition: opacity: 350ms; */
    /* opacity: 0; */
    > small {
        font-weight: 300;
        margin-top: 0.25em;
    }
`;