import store from './State';

export function handleValues(expect, value, render) {
console.log(expect);
    switch(expect) {
        case 'startStopwatch':
            handleStartStopwatch(value, render);
            break;
        case 'resetStopwatch':
            resetStopwatch(render);
            break;
        case 'startTimer':
            handleStartTimer(value, render);
            break;
        case 'resetTimer':
            resetTimer(render);
            break
        default:
            return;
    }
}

function handleStartStopwatch(value, render) {
    let [h, m, s] = value.split(':').map((item) => parseInt(item));

    [s, m] = s === 59 ? [s = 0, ++m] : [++s, m];
    [h, m] = m === 60 ? [m = 0, ++h] : [h, m];

    const name = handleStartStopwatch.name;

    store.record = [name, h, m, s];
    render();
}

const resetStopwatch = (render) =>  {
    store.record = ['resetStopwatch'];
    render()
};

function handleStartTimer(value, render) {
    let [h, m, s] = value.split(':').map((item) => parseInt(item));

    [h, m] = h > 0 && m === 0 && s === 0 ? [--h, m = 59] : [h, m];  //
    [m, s] = m > 0 && s === 0 ? [--m, s = 60]  : [m, s];           // nice
    s = s > 0 ? --s : s;                                          //

    const name = handleStartTimer.name;

    store.record = [name, h, m, s];
    render();
}

const resetTimer = (render) => {
    store.record = ['resetTimer'];
    render()
};