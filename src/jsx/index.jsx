import { render } from 'react-dom';
import HelloWorld from './helloworld/HelloWorld';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.querySelector('body').appendChild(root);

render(<HelloWorld />, root);