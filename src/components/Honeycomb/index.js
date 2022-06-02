import { Li, Content, Button } from './styles';
import { useState } from 'react';

const Honeycomb = ({ children }) => {

    const [state, setState] = useState({
      flip: false,
      remove: false,
      mark: false
    })

    const close = () => {
      setState(prev => {
        return {...prev, flip: false}
      })
    }

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
                  <Button onClick={close}>
                  {state.flip ? 
                  <>
                    <i className="ms ms-1 ms-cost ms-shadow ms-6x"></i>
                    <Content><i className="ms ms-u"></i></Content>
                  </>
                  : <Content><i className="ms ms-u"></i></Content>
                  }
                  </Button>
            </Li>
        
};
export default Honeycomb;