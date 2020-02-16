const store = {
    _h: 0,
    _m: 0,
    _s: 0,

    get stopwatch() {
        let h = this._h;
        let m = this._m < 10 ? '0' + this._m : this._m;
        let s = this._s < 10 ? '0' + this._s : this._s;

        return `${h}:${m}:${s}`
    },

    set record(props) {
        this._h = props[0];
        this._m = props[1];
        this._s = props[2];
    }
};

export default store



