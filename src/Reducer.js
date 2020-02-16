import store from './State';

export default function handleValues(expect, value) {
    switch(expect) {
        case 'start':
            currentButtonStart(value);
            break;
    }
}

function currentButtonStart(value) {
    let [h, m, s] = value.split(':');

    if(parseInt(s) === 59) {
        s = 0;
        m = parseInt(m) + 1
    } else s = parseInt(s) + 1;

    if(parseInt(m) === 60) {
        m = 0;
        h = parseInt(h) + 1
    }

    h = parseInt(h);
    m = parseInt(m);


    store.record = [h, m, s];
}