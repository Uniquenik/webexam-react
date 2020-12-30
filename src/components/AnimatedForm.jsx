import {useTransition, animated, useSpring, config} from 'react-spring';
import { openFormCreator } from './redux/form-reducer';
import Modal from './Modal.jsx';


export default class AnimatedForm extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  };

  const {opacity, transform, transition, position, zIndex, background, height, width} = useSpring ({
    from:{
      transform: 'scale(0)',
      opacity: '0',
    },
    to:{
      transition:  '300ms',
      transform: props.state.formReducer.open ? 'scale(1)' : 'scale(0)',
      opacity: props.state.formReducer.open ? '1' : '0',
      position: 'fixed',
      zIndex: '1000',
      height: '100vh',
       width: '100vw',
    },
    config: config.stiff,
  });

  function openForm() {
    props.store.dispatch(openFormCreator());
  }

  render() {
  return (
    <div>
      <div style={{backgroundColor: 'rgba(0,0,0,0.4)', position: 'fixed', zIndex: '500', width: '100%', height: '100%'}} />
      <animated.div style={{
        transition,
        transform,
        opacity,
        position,
        zIndex,
        width,
        height,
        width,
      }}>
        <Modal state={props.state} dispatch={props.store.dispatch.bind(props.store)} store={props.store} />
      </animated.div>
    </div>
  )
}
}
