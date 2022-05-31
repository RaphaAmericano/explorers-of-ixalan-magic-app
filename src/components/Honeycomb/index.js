import { Li, Content, Img } from './styles';

const Honeycomb = ({ children }) => {
    return <Li
                initial="divInitial"
                animate="divAnimate"
                exit="divExit"
                variants={{
                  divInitial: {
                    opacity: 0
                  },
                  divAnimate: {
                    opacity: 1
                  },
                  divExit: {
                    backgroundColor: "tomato",
                    filter: `invert()`,
                    opacity: 0
                  }
                }}
                >
                <i className="ms ms-1 ms-cost ms-shadow ms-6x"></i>
                <Content><i className="ms ms-u"></i></Content>
            </Li>
        
};
export default Honeycomb;