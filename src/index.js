import SortingView from './sorting/sorting-view';
import './styles/global.css';


let main = document.querySelector('main');

main.replaceWith(new SortingView().getView());