import store from './State';

export function handleValues(expect, value, render) {

    switch (expect) {
        case 'startStopwatch':
            handleStartStopwatch(value);
            break;
        case 'resetStopwatch':
            resetStopwatch();
            break;
        case 'startTimer':
            handleStartTimer(value);
            break;
        case 'resetTimer':
            resetTimer();
            break;
        case 'handleInputChange':
            handleSetTimer(value);
            break;
        default:
            return;
    }
    render();
}

function handleStartStopwatch(value) {
    let [h, m, s] = value.split(':').map((item) => parseInt(item));

    [s, m] = s === 59 ? [s = 0, ++m] : [++s, m];
    [h, m] = m === 60 ? [m = 0, ++h] : [h, m];

    store.record = ['Stopwatch', h, m, s];
}

const resetStopwatch = () => {
    let [h, m, s] = [0, 0, 0];
    store.record = ['Stopwatch', h, m, s];
};

function handleStartTimer(value) {
    let [h, m, s] = value.split(':').map((item) => parseInt(item));

    [h, m] = h > 0 && m === 0 && s === 0 ? [--h, m = 59] : [h, m]; //
    [m, s] = m > 0 && s === 0 ? [--m, s = 60] : [m, s];           // nice
    s = s > 0 ? --s : s;                                         //

    store.record = ['Timer', h, m, s];
}

const resetTimer = () => {
    let [h, m, s] = [0, 0, 0];
    store.record = ['Timer', h, m, s];
};

const handleSetTimer = (value) => {
    let enterData = parseInt(value.enter);
    switch (value.id) {
        case '1':
            if(enterData > 24) {
                return
            } else {
                store.record = ['h', enterData]
            }
            break;
        case '2':
            if(enterData > 59) {
                return
            } else {
                store.record = ['m', enterData]
            }
            break;
        case '3':
            if(enterData > 59) {
                return
            } else {
                store.record = ['s', enterData]
            }
            break;
        default :
            return
    }
};