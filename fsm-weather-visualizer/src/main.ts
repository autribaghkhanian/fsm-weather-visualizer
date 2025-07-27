import './style.css'
import {transitions, initialState, type State, type Event} from './fsm';

let currentState: State = initialState;

const stateEl = document.getElementById('current-state')!;
const buttonsEl = document.getElementById('event-buttons')!;

function render() {
    stateEl.innerText = `Current state: ${currentState.toUpperCase()}`;
    buttonsEl.innerHTML = '';

    const possibleEvents = transitions
        .filter(t => t.from === currentState)
        .map(t => t.on);

    possibleEvents.forEach(event => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.innerText = event.replace('_', ' ');
        btn.onclick = () => handleEvent(event);
        buttonsEl.appendChild(btn);
    });
}

function handleEvent(event: Event) {
    const next = transitions.find(t => t.from === currentState && t.on === event);
    if (next) {
        currentState = next.to;
        render();
    }
}

render();
