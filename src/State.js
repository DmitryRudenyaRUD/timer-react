const store = {
    _h__stopwatch: 0,
    _m__stopwatch: 0,
    _s__stopwatch: 0,

    _h__timer: 0,
    _m__timer: 0,
    _s__timer: 0,

    get stopwatch() {
        let h = this._h__stopwatch;
        let m = this._m__stopwatch < 10 ? '0' + this._m__stopwatch : this._m__stopwatch;
        let s = this._s__stopwatch < 10 ? '0' + this._s__stopwatch : this._s__stopwatch;

        return `${h}:${m}:${s}`
    },

    get timer() {
        let h = this._h__timer;
        let m = this._m__timer < 10 ? '0' + this._m__timer : this._m__timer;
        let s = this._s__timer < 10 ? '0' + this._s__timer : this._s__timer;

        return `${h}:${m}:${s}`
    },

    get forSetTimer() {
        let h = this._h__timer;
        let m = this._m__timer < 10 ? '0' + this._m__timer : this._m__timer;
        let s = this._s__timer < 10 ? '0' + this._s__timer : this._s__timer;

        return [h, m, s]
    },

    set record(props) {

        if(props[0] === 'Stopwatch') {
            this._h__stopwatch = props[1];
            this._m__stopwatch = props[2];
            this._s__stopwatch = props[3];
        } else if(props[0] === 'Timer') {
            this._h__timer = props[1];
            this._m__timer = props[2];
            this._s__timer = props[3];
        } else {
           switch (props[0]) {
               case 'h':
                   this._h__timer = props[1];
                   break;
               case 'm':
                   this._m__timer = props[1];
                   break;
               case 's':
                   this._s__timer = props[1];
                   break;
               default:
                   return;
           }
        }
    }
};

export default store



