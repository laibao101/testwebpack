import layer from './components/layer/layer.js';
import './css/common.css';

const App = function () {
	const dom = document.getElementById('app');
	const Layer = new layer();
	dom.innerHTML = Layer.tpl;
}

new App();
