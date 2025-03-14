(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver((r) => {
        for (const i of r)
            if (i.type === 'childList')
                for (const o of i.addedNodes)
                    o.tagName === 'LINK' && o.rel === 'modulepreload' && n(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(r) {
        const i = {};
        return (
            r.integrity && (i.integrity = r.integrity),
            r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === 'use-credentials'
                ? (i.credentials = 'include')
                : r.crossOrigin === 'anonymous'
                  ? (i.credentials = 'omit')
                  : (i.credentials = 'same-origin'),
            i
        );
    }
    function n(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = s(r);
        fetch(r.href, i);
    }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ps(e) {
    const t = Object.create(null);
    for (const s of e.split(',')) t[s] = 1;
    return (s) => s in t;
}
const $ = {},
    Qe = [],
    ve = () => {},
    Lr = () => !1,
    Xt = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Ms = (e) => e.startsWith('onUpdate:'),
    Q = Object.assign,
    Rs = (e, t) => {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1);
    },
    $r = Object.prototype.hasOwnProperty,
    H = (e, t) => $r.call(e, t),
    O = Array.isArray,
    ke = (e) => Tt(e) === '[object Map]',
    Zt = (e) => Tt(e) === '[object Set]',
    en = (e) => Tt(e) === '[object Date]',
    P = (e) => typeof e == 'function',
    Y = (e) => typeof e == 'string',
    we = (e) => typeof e == 'symbol',
    K = (e) => e !== null && typeof e == 'object',
    Rn = (e) => (K(e) || P(e)) && P(e.then) && P(e.catch),
    Fn = Object.prototype.toString,
    Tt = (e) => Fn.call(e),
    Vr = (e) => Tt(e).slice(8, -1),
    Dn = (e) => Tt(e) === '[object Object]',
    Fs = (e) =>
        Y(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    at = Ps(
        ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
    ),
    Qt = (e) => {
        const t = Object.create(null);
        return (s) => t[s] || (t[s] = e(s));
    },
    Br = /-(\w)/g,
    He = Qt((e) => e.replace(Br, (t, s) => (s ? s.toUpperCase() : ''))),
    Ur = /\B([A-Z])/g,
    Ye = Qt((e) => e.replace(Ur, '-$1').toLowerCase()),
    Nn = Qt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    cs = Qt((e) => (e ? `on${Nn(e)}` : '')),
    De = (e, t) => !Object.is(e, t),
    Nt = (e, ...t) => {
        for (let s = 0; s < e.length; s++) e[s](...t);
    },
    Hn = (e, t, s, n = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: n,
            value: s,
        });
    },
    Bt = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    };
let tn;
const kt = () =>
    tn ||
    (tn =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : typeof global < 'u'
                  ? global
                  : {});
function Ds(e) {
    if (O(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const n = e[s],
                r = Y(n) ? Gr(n) : Ds(n);
            if (r) for (const i in r) t[i] = r[i];
        }
        return t;
    } else if (Y(e) || K(e)) return e;
}
const Kr = /;(?![^(]*\))/g,
    Wr = /:([^]+)/,
    qr = /\/\*[^]*?\*\//g;
function Gr(e) {
    const t = {};
    return (
        e
            .replace(qr, '')
            .split(Kr)
            .forEach((s) => {
                if (s) {
                    const n = s.split(Wr);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
            }),
        t
    );
}
function Ns(e) {
    let t = '';
    if (Y(e)) t = e;
    else if (O(e))
        for (let s = 0; s < e.length; s++) {
            const n = Ns(e[s]);
            n && (t += n + ' ');
        }
    else if (K(e)) for (const s in e) e[s] && (t += s + ' ');
    return t.trim();
}
const Jr =
        'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    Yr = Ps(Jr);
function jn(e) {
    return !!e || e === '';
}
function zr(e, t) {
    if (e.length !== t.length) return !1;
    let s = !0;
    for (let n = 0; s && n < e.length; n++) s = es(e[n], t[n]);
    return s;
}
function es(e, t) {
    if (e === t) return !0;
    let s = en(e),
        n = en(t);
    if (s || n) return s && n ? e.getTime() === t.getTime() : !1;
    if (((s = we(e)), (n = we(t)), s || n)) return e === t;
    if (((s = O(e)), (n = O(t)), s || n)) return s && n ? zr(e, t) : !1;
    if (((s = K(e)), (n = K(t)), s || n)) {
        if (!s || !n) return !1;
        const r = Object.keys(e).length,
            i = Object.keys(t).length;
        if (r !== i) return !1;
        for (const o in e) {
            const l = e.hasOwnProperty(o),
                u = t.hasOwnProperty(o);
            if ((l && !u) || (!l && u) || !es(e[o], t[o])) return !1;
        }
    }
    return String(e) === String(t);
}
function Xr(e, t) {
    return e.findIndex((s) => es(s, t));
}
const Ln = (e) => !!(e && e.__v_isRef === !0),
    Ht = (e) =>
        Y(e)
            ? e
            : e == null
              ? ''
              : O(e) || (K(e) && (e.toString === Fn || !P(e.toString)))
                ? Ln(e)
                    ? Ht(e.value)
                    : JSON.stringify(e, $n, 2)
                : String(e),
    $n = (e, t) =>
        Ln(t)
            ? $n(e, t.value)
            : ke(t)
              ? {
                    [`Map(${t.size})`]: [...t.entries()].reduce(
                        (s, [n, r], i) => ((s[fs(n, i) + ' =>'] = r), s),
                        {},
                    ),
                }
              : Zt(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((s) => fs(s)) }
                : we(t)
                  ? fs(t)
                  : K(t) && !O(t) && !Dn(t)
                    ? String(t)
                    : t,
    fs = (e, t = '') => {
        var s;
        return we(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
    };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ce;
class Zr {
    constructor(t = !1) {
        (this.detached = t),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this._isPaused = !1),
            (this.parent = ce),
            !t &&
                ce &&
                (this.index = (ce.scopes || (ce.scopes = [])).push(this) - 1);
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, s;
            if (this.scopes)
                for (t = 0, s = this.scopes.length; t < s; t++)
                    this.scopes[t].pause();
            for (t = 0, s = this.effects.length; t < s; t++)
                this.effects[t].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, s;
            if (this.scopes)
                for (t = 0, s = this.scopes.length; t < s; t++)
                    this.scopes[t].resume();
            for (t = 0, s = this.effects.length; t < s; t++)
                this.effects[t].resume();
        }
    }
    run(t) {
        if (this._active) {
            const s = ce;
            try {
                return (ce = this), t();
            } finally {
                ce = s;
            }
        }
    }
    on() {
        ce = this;
    }
    off() {
        ce = this.parent;
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let s, n;
            for (s = 0, n = this.effects.length; s < n; s++)
                this.effects[s].stop();
            for (
                this.effects.length = 0, s = 0, n = this.cleanups.length;
                s < n;
                s++
            )
                this.cleanups[s]();
            if (((this.cleanups.length = 0), this.scopes)) {
                for (s = 0, n = this.scopes.length; s < n; s++)
                    this.scopes[s].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r &&
                    r !== this &&
                    ((this.parent.scopes[this.index] = r),
                    (r.index = this.index));
            }
            this.parent = void 0;
        }
    }
}
function Qr() {
    return ce;
}
let U;
const us = new WeakSet();
class Vn {
    constructor(t) {
        (this.fn = t),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 5),
            (this.next = void 0),
            (this.cleanup = void 0),
            (this.scheduler = void 0),
            ce && ce.active && ce.effects.push(this);
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        this.flags & 64 &&
            ((this.flags &= -65),
            us.has(this) && (us.delete(this), this.trigger()));
    }
    notify() {
        (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Un(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        (this.flags |= 2), sn(this), Kn(this);
        const t = U,
            s = ae;
        (U = this), (ae = !0);
        try {
            return this.fn();
        } finally {
            Wn(this), (U = t), (ae = s), (this.flags &= -3);
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Ls(t);
            (this.deps = this.depsTail = void 0),
                sn(this),
                this.onStop && this.onStop(),
                (this.flags &= -2);
        }
    }
    trigger() {
        this.flags & 64
            ? us.add(this)
            : this.scheduler
              ? this.scheduler()
              : this.runIfDirty();
    }
    runIfDirty() {
        xs(this) && this.run();
    }
    get dirty() {
        return xs(this);
    }
}
let Bn = 0,
    dt,
    pt;
function Un(e, t = !1) {
    if (((e.flags |= 8), t)) {
        (e.next = pt), (pt = e);
        return;
    }
    (e.next = dt), (dt = e);
}
function Hs() {
    Bn++;
}
function js() {
    if (--Bn > 0) return;
    if (pt) {
        let t = pt;
        for (pt = void 0; t; ) {
            const s = t.next;
            (t.next = void 0), (t.flags &= -9), (t = s);
        }
    }
    let e;
    for (; dt; ) {
        let t = dt;
        for (dt = void 0; t; ) {
            const s = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (n) {
                    e || (e = n);
                }
            t = s;
        }
    }
    if (e) throw e;
}
function Kn(e) {
    for (let t = e.deps; t; t = t.nextDep)
        (t.version = -1),
            (t.prevActiveLink = t.dep.activeLink),
            (t.dep.activeLink = t);
}
function Wn(e) {
    let t,
        s = e.depsTail,
        n = s;
    for (; n; ) {
        const r = n.prevDep;
        n.version === -1 ? (n === s && (s = r), Ls(n), kr(n)) : (t = n),
            (n.dep.activeLink = n.prevActiveLink),
            (n.prevActiveLink = void 0),
            (n = r);
    }
    (e.deps = t), (e.depsTail = s);
}
function xs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (
            t.dep.version !== t.version ||
            (t.dep.computed &&
                (qn(t.dep.computed) || t.dep.version !== t.version))
        )
            return !0;
    return !!e._dirty;
}
function qn(e) {
    if (
        (e.flags & 4 && !(e.flags & 16)) ||
        ((e.flags &= -17), e.globalVersion === _t)
    )
        return;
    e.globalVersion = _t;
    const t = e.dep;
    if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !xs(e))) {
        e.flags &= -3;
        return;
    }
    const s = U,
        n = ae;
    (U = e), (ae = !0);
    try {
        Kn(e);
        const r = e.fn(e._value);
        (t.version === 0 || De(r, e._value)) && ((e._value = r), t.version++);
    } catch (r) {
        throw (t.version++, r);
    } finally {
        (U = s), (ae = n), Wn(e), (e.flags &= -3);
    }
}
function Ls(e, t = !1) {
    const { dep: s, prevSub: n, nextSub: r } = e;
    if (
        (n && ((n.nextSub = r), (e.prevSub = void 0)),
        r && ((r.prevSub = n), (e.nextSub = void 0)),
        s.subs === e && ((s.subs = n), !n && s.computed))
    ) {
        s.computed.flags &= -5;
        for (let i = s.computed.deps; i; i = i.nextDep) Ls(i, !0);
    }
    !t && !--s.sc && s.map && s.map.delete(s.key);
}
function kr(e) {
    const { prevDep: t, nextDep: s } = e;
    t && ((t.nextDep = s), (e.prevDep = void 0)),
        s && ((s.prevDep = t), (e.nextDep = void 0));
}
let ae = !0;
const Gn = [];
function je() {
    Gn.push(ae), (ae = !1);
}
function Le() {
    const e = Gn.pop();
    ae = e === void 0 ? !0 : e;
}
function sn(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        const s = U;
        U = void 0;
        try {
            t();
        } finally {
            U = s;
        }
    }
}
let _t = 0;
class ei {
    constructor(t, s) {
        (this.sub = t),
            (this.dep = s),
            (this.version = s.version),
            (this.nextDep =
                this.prevDep =
                this.nextSub =
                this.prevSub =
                this.prevActiveLink =
                    void 0);
    }
}
class $s {
    constructor(t) {
        (this.computed = t),
            (this.version = 0),
            (this.activeLink = void 0),
            (this.subs = void 0),
            (this.map = void 0),
            (this.key = void 0),
            (this.sc = 0);
    }
    track(t) {
        if (!U || !ae || U === this.computed) return;
        let s = this.activeLink;
        if (s === void 0 || s.sub !== U)
            (s = this.activeLink = new ei(U, this)),
                U.deps
                    ? ((s.prevDep = U.depsTail),
                      (U.depsTail.nextDep = s),
                      (U.depsTail = s))
                    : (U.deps = U.depsTail = s),
                Jn(s);
        else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
            const n = s.nextDep;
            (n.prevDep = s.prevDep),
                s.prevDep && (s.prevDep.nextDep = n),
                (s.prevDep = U.depsTail),
                (s.nextDep = void 0),
                (U.depsTail.nextDep = s),
                (U.depsTail = s),
                U.deps === s && (U.deps = n);
        }
        return s;
    }
    trigger(t) {
        this.version++, _t++, this.notify(t);
    }
    notify(t) {
        Hs();
        try {
            for (let s = this.subs; s; s = s.prevSub)
                s.sub.notify() && s.sub.dep.notify();
        } finally {
            js();
        }
    }
}
function Jn(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let n = t.deps; n; n = n.nextDep) Jn(n);
        }
        const s = e.dep.subs;
        s !== e && ((e.prevSub = s), s && (s.nextSub = e)), (e.dep.subs = e);
    }
}
const ys = new WeakMap(),
    Ge = Symbol(''),
    vs = Symbol(''),
    xt = Symbol('');
function X(e, t, s) {
    if (ae && U) {
        let n = ys.get(e);
        n || ys.set(e, (n = new Map()));
        let r = n.get(s);
        r || (n.set(s, (r = new $s())), (r.map = n), (r.key = s)), r.track();
    }
}
function Oe(e, t, s, n, r, i) {
    const o = ys.get(e);
    if (!o) {
        _t++;
        return;
    }
    const l = (u) => {
        u && u.trigger();
    };
    if ((Hs(), t === 'clear')) o.forEach(l);
    else {
        const u = O(e),
            p = u && Fs(s);
        if (u && s === 'length') {
            const a = Number(n);
            o.forEach((h, S) => {
                (S === 'length' || S === xt || (!we(S) && S >= a)) && l(h);
            });
        } else
            switch (
                ((s !== void 0 || o.has(void 0)) && l(o.get(s)),
                p && l(o.get(xt)),
                t)
            ) {
                case 'add':
                    u
                        ? p && l(o.get('length'))
                        : (l(o.get(Ge)), ke(e) && l(o.get(vs)));
                    break;
                case 'delete':
                    u || (l(o.get(Ge)), ke(e) && l(o.get(vs)));
                    break;
                case 'set':
                    ke(e) && l(o.get(Ge));
                    break;
            }
    }
    js();
}
function ze(e) {
    const t = N(e);
    return t === e ? t : (X(t, 'iterate', xt), de(e) ? t : t.map(te));
}
function Vs(e) {
    return X((e = N(e)), 'iterate', xt), e;
}
const ti = {
    __proto__: null,
    [Symbol.iterator]() {
        return as(this, Symbol.iterator, te);
    },
    concat(...e) {
        return ze(this).concat(...e.map((t) => (O(t) ? ze(t) : t)));
    },
    entries() {
        return as(this, 'entries', (e) => ((e[1] = te(e[1])), e));
    },
    every(e, t) {
        return Te(this, 'every', e, t, void 0, arguments);
    },
    filter(e, t) {
        return Te(this, 'filter', e, t, (s) => s.map(te), arguments);
    },
    find(e, t) {
        return Te(this, 'find', e, t, te, arguments);
    },
    findIndex(e, t) {
        return Te(this, 'findIndex', e, t, void 0, arguments);
    },
    findLast(e, t) {
        return Te(this, 'findLast', e, t, te, arguments);
    },
    findLastIndex(e, t) {
        return Te(this, 'findLastIndex', e, t, void 0, arguments);
    },
    forEach(e, t) {
        return Te(this, 'forEach', e, t, void 0, arguments);
    },
    includes(...e) {
        return ds(this, 'includes', e);
    },
    indexOf(...e) {
        return ds(this, 'indexOf', e);
    },
    join(e) {
        return ze(this).join(e);
    },
    lastIndexOf(...e) {
        return ds(this, 'lastIndexOf', e);
    },
    map(e, t) {
        return Te(this, 'map', e, t, void 0, arguments);
    },
    pop() {
        return ct(this, 'pop');
    },
    push(...e) {
        return ct(this, 'push', e);
    },
    reduce(e, ...t) {
        return nn(this, 'reduce', e, t);
    },
    reduceRight(e, ...t) {
        return nn(this, 'reduceRight', e, t);
    },
    shift() {
        return ct(this, 'shift');
    },
    some(e, t) {
        return Te(this, 'some', e, t, void 0, arguments);
    },
    splice(...e) {
        return ct(this, 'splice', e);
    },
    toReversed() {
        return ze(this).toReversed();
    },
    toSorted(e) {
        return ze(this).toSorted(e);
    },
    toSpliced(...e) {
        return ze(this).toSpliced(...e);
    },
    unshift(...e) {
        return ct(this, 'unshift', e);
    },
    values() {
        return as(this, 'values', te);
    },
};
function as(e, t, s) {
    const n = Vs(e),
        r = n[t]();
    return (
        n !== e &&
            !de(e) &&
            ((r._next = r.next),
            (r.next = () => {
                const i = r._next();
                return i.value && (i.value = s(i.value)), i;
            })),
        r
    );
}
const si = Array.prototype;
function Te(e, t, s, n, r, i) {
    const o = Vs(e),
        l = o !== e && !de(e),
        u = o[t];
    if (u !== si[t]) {
        const h = u.apply(e, i);
        return l ? te(h) : h;
    }
    let p = s;
    o !== e &&
        (l
            ? (p = function (h, S) {
                  return s.call(this, te(h), S, e);
              })
            : s.length > 2 &&
              (p = function (h, S) {
                  return s.call(this, h, S, e);
              }));
    const a = u.call(o, p, n);
    return l && r ? r(a) : a;
}
function nn(e, t, s, n) {
    const r = Vs(e);
    let i = s;
    return (
        r !== e &&
            (de(e)
                ? s.length > 3 &&
                  (i = function (o, l, u) {
                      return s.call(this, o, l, u, e);
                  })
                : (i = function (o, l, u) {
                      return s.call(this, o, te(l), u, e);
                  })),
        r[t](i, ...n)
    );
}
function ds(e, t, s) {
    const n = N(e);
    X(n, 'iterate', xt);
    const r = n[t](...s);
    return (r === -1 || r === !1) && Ws(s[0])
        ? ((s[0] = N(s[0])), n[t](...s))
        : r;
}
function ct(e, t, s = []) {
    je(), Hs();
    const n = N(e)[t].apply(e, s);
    return js(), Le(), n;
}
const ni = Ps('__proto__,__v_isRef,__isVue'),
    Yn = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== 'arguments' && e !== 'caller')
            .map((e) => Symbol[e])
            .filter(we),
    );
function ri(e) {
    we(e) || (e = String(e));
    const t = N(this);
    return X(t, 'has', e), t.hasOwnProperty(e);
}
class zn {
    constructor(t = !1, s = !1) {
        (this._isReadonly = t), (this._isShallow = s);
    }
    get(t, s, n) {
        if (s === '__v_skip') return t.__v_skip;
        const r = this._isReadonly,
            i = this._isShallow;
        if (s === '__v_isReactive') return !r;
        if (s === '__v_isReadonly') return r;
        if (s === '__v_isShallow') return i;
        if (s === '__v_raw')
            return n === (r ? (i ? hi : kn) : i ? Qn : Zn).get(t) ||
                Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
                ? t
                : void 0;
        const o = O(t);
        if (!r) {
            let u;
            if (o && (u = ti[s])) return u;
            if (s === 'hasOwnProperty') return ri;
        }
        const l = Reflect.get(t, s, Z(t) ? t : n);
        return (we(s) ? Yn.has(s) : ni(s)) || (r || X(t, 'get', s), i)
            ? l
            : Z(l)
              ? o && Fs(s)
                  ? l
                  : l.value
              : K(l)
                ? r
                    ? er(l)
                    : Us(l)
                : l;
    }
}
class Xn extends zn {
    constructor(t = !1) {
        super(!1, t);
    }
    set(t, s, n, r) {
        let i = t[s];
        if (!this._isShallow) {
            const u = Je(i);
            if (
                (!de(n) && !Je(n) && ((i = N(i)), (n = N(n))),
                !O(t) && Z(i) && !Z(n))
            )
                return u ? !1 : ((i.value = n), !0);
        }
        const o = O(t) && Fs(s) ? Number(s) < t.length : H(t, s),
            l = Reflect.set(t, s, n, Z(t) ? t : r);
        return (
            t === N(r) &&
                (o ? De(n, i) && Oe(t, 'set', s, n) : Oe(t, 'add', s, n)),
            l
        );
    }
    deleteProperty(t, s) {
        const n = H(t, s);
        t[s];
        const r = Reflect.deleteProperty(t, s);
        return r && n && Oe(t, 'delete', s, void 0), r;
    }
    has(t, s) {
        const n = Reflect.has(t, s);
        return (!we(s) || !Yn.has(s)) && X(t, 'has', s), n;
    }
    ownKeys(t) {
        return X(t, 'iterate', O(t) ? 'length' : Ge), Reflect.ownKeys(t);
    }
}
class ii extends zn {
    constructor(t = !1) {
        super(!0, t);
    }
    set(t, s) {
        return !0;
    }
    deleteProperty(t, s) {
        return !0;
    }
}
const oi = new Xn(),
    li = new ii(),
    ci = new Xn(!0);
const ws = (e) => e,
    Rt = (e) => Reflect.getPrototypeOf(e);
function fi(e, t, s) {
    return function (...n) {
        const r = this.__v_raw,
            i = N(r),
            o = ke(i),
            l = e === 'entries' || (e === Symbol.iterator && o),
            u = e === 'keys' && o,
            p = r[e](...n),
            a = s ? ws : t ? Ss : te;
        return (
            !t && X(i, 'iterate', u ? vs : Ge),
            {
                next() {
                    const { value: h, done: S } = p.next();
                    return S
                        ? { value: h, done: S }
                        : { value: l ? [a(h[0]), a(h[1])] : a(h), done: S };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function Ft(e) {
    return function (...t) {
        return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
    };
}
function ui(e, t) {
    const s = {
        get(r) {
            const i = this.__v_raw,
                o = N(i),
                l = N(r);
            e || (De(r, l) && X(o, 'get', r), X(o, 'get', l));
            const { has: u } = Rt(o),
                p = t ? ws : e ? Ss : te;
            if (u.call(o, r)) return p(i.get(r));
            if (u.call(o, l)) return p(i.get(l));
            i !== o && i.get(r);
        },
        get size() {
            const r = this.__v_raw;
            return !e && X(N(r), 'iterate', Ge), Reflect.get(r, 'size', r);
        },
        has(r) {
            const i = this.__v_raw,
                o = N(i),
                l = N(r);
            return (
                e || (De(r, l) && X(o, 'has', r), X(o, 'has', l)),
                r === l ? i.has(r) : i.has(r) || i.has(l)
            );
        },
        forEach(r, i) {
            const o = this,
                l = o.__v_raw,
                u = N(l),
                p = t ? ws : e ? Ss : te;
            return (
                !e && X(u, 'iterate', Ge),
                l.forEach((a, h) => r.call(i, p(a), p(h), o))
            );
        },
    };
    return (
        Q(
            s,
            e
                ? {
                      add: Ft('add'),
                      set: Ft('set'),
                      delete: Ft('delete'),
                      clear: Ft('clear'),
                  }
                : {
                      add(r) {
                          !t && !de(r) && !Je(r) && (r = N(r));
                          const i = N(this);
                          return (
                              Rt(i).has.call(i, r) ||
                                  (i.add(r), Oe(i, 'add', r, r)),
                              this
                          );
                      },
                      set(r, i) {
                          !t && !de(i) && !Je(i) && (i = N(i));
                          const o = N(this),
                              { has: l, get: u } = Rt(o);
                          let p = l.call(o, r);
                          p || ((r = N(r)), (p = l.call(o, r)));
                          const a = u.call(o, r);
                          return (
                              o.set(r, i),
                              p
                                  ? De(i, a) && Oe(o, 'set', r, i)
                                  : Oe(o, 'add', r, i),
                              this
                          );
                      },
                      delete(r) {
                          const i = N(this),
                              { has: o, get: l } = Rt(i);
                          let u = o.call(i, r);
                          u || ((r = N(r)), (u = o.call(i, r))),
                              l && l.call(i, r);
                          const p = i.delete(r);
                          return u && Oe(i, 'delete', r, void 0), p;
                      },
                      clear() {
                          const r = N(this),
                              i = r.size !== 0,
                              o = r.clear();
                          return i && Oe(r, 'clear', void 0, void 0), o;
                      },
                  },
        ),
        ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
            s[r] = fi(r, e, t);
        }),
        s
    );
}
function Bs(e, t) {
    const s = ui(e, t);
    return (n, r, i) =>
        r === '__v_isReactive'
            ? !e
            : r === '__v_isReadonly'
              ? e
              : r === '__v_raw'
                ? n
                : Reflect.get(H(s, r) && r in n ? s : n, r, i);
}
const ai = { get: Bs(!1, !1) },
    di = { get: Bs(!1, !0) },
    pi = { get: Bs(!0, !1) };
const Zn = new WeakMap(),
    Qn = new WeakMap(),
    kn = new WeakMap(),
    hi = new WeakMap();
function gi(e) {
    switch (e) {
        case 'Object':
        case 'Array':
            return 1;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2;
        default:
            return 0;
    }
}
function mi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(Vr(e));
}
function Us(e) {
    return Je(e) ? e : Ks(e, !1, oi, ai, Zn);
}
function bi(e) {
    return Ks(e, !1, ci, di, Qn);
}
function er(e) {
    return Ks(e, !0, li, pi, kn);
}
function Ks(e, t, s, n, r) {
    if (!K(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const i = r.get(e);
    if (i) return i;
    const o = mi(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? n : s);
    return r.set(e, l), l;
}
function ht(e) {
    return Je(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
    return !!(e && e.__v_isReadonly);
}
function de(e) {
    return !!(e && e.__v_isShallow);
}
function Ws(e) {
    return e ? !!e.__v_raw : !1;
}
function N(e) {
    const t = e && e.__v_raw;
    return t ? N(t) : e;
}
function _i(e) {
    return (
        !H(e, '__v_skip') && Object.isExtensible(e) && Hn(e, '__v_skip', !0), e
    );
}
const te = (e) => (K(e) ? Us(e) : e),
    Ss = (e) => (K(e) ? er(e) : e);
function Z(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function ps(e) {
    return xi(e, !1);
}
function xi(e, t) {
    return Z(e) ? e : new yi(e, t);
}
class yi {
    constructor(t, s) {
        (this.dep = new $s()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = s ? t : N(t)),
            (this._value = s ? t : te(t)),
            (this.__v_isShallow = s);
    }
    get value() {
        return this.dep.track(), this._value;
    }
    set value(t) {
        const s = this._rawValue,
            n = this.__v_isShallow || de(t) || Je(t);
        (t = n ? t : N(t)),
            De(t, s) &&
                ((this._rawValue = t),
                (this._value = n ? t : te(t)),
                this.dep.trigger());
    }
}
function vi(e) {
    return Z(e) ? e.value : e;
}
const wi = {
    get: (e, t, s) => (t === '__v_raw' ? e : vi(Reflect.get(e, t, s))),
    set: (e, t, s, n) => {
        const r = e[t];
        return Z(r) && !Z(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n);
    },
};
function tr(e) {
    return ht(e) ? e : new Proxy(e, wi);
}
class Si {
    constructor(t, s, n) {
        (this.fn = t),
            (this.setter = s),
            (this._value = void 0),
            (this.dep = new $s(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = _t - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !s),
            (this.isSSR = n);
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && U !== this))
            return Un(this, !0), !0;
    }
    get value() {
        const t = this.dep.track();
        return qn(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
        this.setter && this.setter(t);
    }
}
function Ti(e, t, s = !1) {
    let n, r;
    return P(e) ? (n = e) : ((n = e.get), (r = e.set)), new Si(n, r, s);
}
const Dt = {},
    Ut = new WeakMap();
let We;
function Ei(e, t = !1, s = We) {
    if (s) {
        let n = Ut.get(s);
        n || Ut.set(s, (n = [])), n.push(e);
    }
}
function Ci(e, t, s = $) {
    const {
            immediate: n,
            deep: r,
            once: i,
            scheduler: o,
            augmentJob: l,
            call: u,
        } = s,
        p = (I) => (r ? I : de(I) || r === !1 || r === 0 ? Ie(I, 1) : Ie(I));
    let a,
        h,
        S,
        T,
        F = !1,
        R = !1;
    if (
        (Z(e)
            ? ((h = () => e.value), (F = de(e)))
            : ht(e)
              ? ((h = () => p(e)), (F = !0))
              : O(e)
                ? ((R = !0),
                  (F = e.some((I) => ht(I) || de(I))),
                  (h = () =>
                      e.map((I) => {
                          if (Z(I)) return I.value;
                          if (ht(I)) return p(I);
                          if (P(I)) return u ? u(I, 2) : I();
                      })))
                : P(e)
                  ? t
                      ? (h = u ? () => u(e, 2) : e)
                      : (h = () => {
                            if (S) {
                                je();
                                try {
                                    S();
                                } finally {
                                    Le();
                                }
                            }
                            const I = We;
                            We = a;
                            try {
                                return u ? u(e, 3, [T]) : e(T);
                            } finally {
                                We = I;
                            }
                        })
                  : (h = ve),
        t && r)
    ) {
        const I = h,
            J = r === !0 ? 1 / 0 : r;
        h = () => Ie(I(), J);
    }
    const z = Qr(),
        L = () => {
            a.stop(), z && z.active && Rs(z.effects, a);
        };
    if (i && t) {
        const I = t;
        t = (...J) => {
            I(...J), L();
        };
    }
    let q = R ? new Array(e.length).fill(Dt) : Dt;
    const G = (I) => {
        if (!(!(a.flags & 1) || (!a.dirty && !I)))
            if (t) {
                const J = a.run();
                if (
                    r ||
                    F ||
                    (R ? J.some((Pe, pe) => De(Pe, q[pe])) : De(J, q))
                ) {
                    S && S();
                    const Pe = We;
                    We = a;
                    try {
                        const pe = [
                            J,
                            q === Dt ? void 0 : R && q[0] === Dt ? [] : q,
                            T,
                        ];
                        u ? u(t, 3, pe) : t(...pe), (q = J);
                    } finally {
                        We = Pe;
                    }
                }
            } else a.run();
    };
    return (
        l && l(G),
        (a = new Vn(h)),
        (a.scheduler = o ? () => o(G, !1) : G),
        (T = (I) => Ei(I, !1, a)),
        (S = a.onStop =
            () => {
                const I = Ut.get(a);
                if (I) {
                    if (u) u(I, 4);
                    else for (const J of I) J();
                    Ut.delete(a);
                }
            }),
        t ? (n ? G(!0) : (q = a.run())) : o ? o(G.bind(null, !0), !0) : a.run(),
        (L.pause = a.pause.bind(a)),
        (L.resume = a.resume.bind(a)),
        (L.stop = L),
        L
    );
}
function Ie(e, t = 1 / 0, s) {
    if (t <= 0 || !K(e) || e.__v_skip || ((s = s || new Set()), s.has(e)))
        return e;
    if ((s.add(e), t--, Z(e))) Ie(e.value, t, s);
    else if (O(e)) for (let n = 0; n < e.length; n++) Ie(e[n], t, s);
    else if (Zt(e) || ke(e))
        e.forEach((n) => {
            Ie(n, t, s);
        });
    else if (Dn(e)) {
        for (const n in e) Ie(e[n], t, s);
        for (const n of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, n) && Ie(e[n], t, s);
    }
    return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Et(e, t, s, n) {
    try {
        return n ? e(...n) : e();
    } catch (r) {
        ts(r, t, s);
    }
}
function Se(e, t, s, n) {
    if (P(e)) {
        const r = Et(e, t, s, n);
        return (
            r &&
                Rn(r) &&
                r.catch((i) => {
                    ts(i, t, s);
                }),
            r
        );
    }
    if (O(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++) r.push(Se(e[i], t, s, n));
        return r;
    }
}
function ts(e, t, s, n = !0) {
    const r = t ? t.vnode : null,
        { errorHandler: i, throwUnhandledErrorInProduction: o } =
            (t && t.appContext.config) || $;
    if (t) {
        let l = t.parent;
        const u = t.proxy,
            p = `https://vuejs.org/error-reference/#runtime-${s}`;
        for (; l; ) {
            const a = l.ec;
            if (a) {
                for (let h = 0; h < a.length; h++)
                    if (a[h](e, u, p) === !1) return;
            }
            l = l.parent;
        }
        if (i) {
            je(), Et(i, null, 10, [e, u, p]), Le();
            return;
        }
    }
    Oi(e, s, r, n, o);
}
function Oi(e, t, s, n = !0, r = !1) {
    if (r) throw e;
    console.error(e);
}
const se = [];
let xe = -1;
const et = [];
let Re = null,
    Xe = 0;
const sr = Promise.resolve();
let Kt = null;
function nr(e) {
    const t = Kt || sr;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ii(e) {
    let t = xe + 1,
        s = se.length;
    for (; t < s; ) {
        const n = (t + s) >>> 1,
            r = se[n],
            i = yt(r);
        i < e || (i === e && r.flags & 2) ? (t = n + 1) : (s = n);
    }
    return t;
}
function qs(e) {
    if (!(e.flags & 1)) {
        const t = yt(e),
            s = se[se.length - 1];
        !s || (!(e.flags & 2) && t >= yt(s))
            ? se.push(e)
            : se.splice(Ii(t), 0, e),
            (e.flags |= 1),
            rr();
    }
}
function rr() {
    Kt || (Kt = sr.then(or));
}
function Ai(e) {
    O(e)
        ? et.push(...e)
        : Re && e.id === -1
          ? Re.splice(Xe + 1, 0, e)
          : e.flags & 1 || (et.push(e), (e.flags |= 1)),
        rr();
}
function rn(e, t, s = xe + 1) {
    for (; s < se.length; s++) {
        const n = se[s];
        if (n && n.flags & 2) {
            if (e && n.id !== e.uid) continue;
            se.splice(s, 1),
                s--,
                n.flags & 4 && (n.flags &= -2),
                n(),
                n.flags & 4 || (n.flags &= -2);
        }
    }
}
function ir(e) {
    if (et.length) {
        const t = [...new Set(et)].sort((s, n) => yt(s) - yt(n));
        if (((et.length = 0), Re)) {
            Re.push(...t);
            return;
        }
        for (Re = t, Xe = 0; Xe < Re.length; Xe++) {
            const s = Re[Xe];
            s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2);
        }
        (Re = null), (Xe = 0);
    }
}
const yt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function or(e) {
    try {
        for (xe = 0; xe < se.length; xe++) {
            const t = se[xe];
            t &&
                !(t.flags & 8) &&
                (t.flags & 4 && (t.flags &= -2),
                Et(t, t.i, t.i ? 15 : 14),
                t.flags & 4 || (t.flags &= -2));
        }
    } finally {
        for (; xe < se.length; xe++) {
            const t = se[xe];
            t && (t.flags &= -2);
        }
        (xe = -1),
            (se.length = 0),
            ir(),
            (Kt = null),
            (se.length || et.length) && or();
    }
}
let ue = null,
    lr = null;
function Wt(e) {
    const t = ue;
    return (ue = e), (lr = (e && e.type.__scopeId) || null), t;
}
function Pi(e, t = ue, s) {
    if (!t || e._n) return e;
    const n = (...r) => {
        n._d && gn(-1);
        const i = Wt(t);
        let o;
        try {
            o = e(...r);
        } finally {
            Wt(i), n._d && gn(1);
        }
        return o;
    };
    return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function on(e, t) {
    if (ue === null) return e;
    const s = is(ue),
        n = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, o, l, u = $] = t[r];
        i &&
            (P(i) && (i = { mounted: i, updated: i }),
            i.deep && Ie(o),
            n.push({
                dir: i,
                instance: s,
                value: o,
                oldValue: void 0,
                arg: l,
                modifiers: u,
            }));
    }
    return e;
}
function Ue(e, t, s, n) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const l = r[o];
        i && (l.oldValue = i[o].value);
        let u = l.dir[n];
        u && (je(), Se(u, s, 8, [e.el, l, e, t]), Le());
    }
}
const Mi = Symbol('_vte'),
    Ri = (e) => e.__isTeleport;
function Gs(e, t) {
    e.shapeFlag & 6 && e.component
        ? ((e.transition = t), Gs(e.component.subTree, t))
        : e.shapeFlag & 128
          ? ((e.ssContent.transition = t.clone(e.ssContent)),
            (e.ssFallback.transition = t.clone(e.ssFallback)))
          : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function Fi(e, t) {
    return P(e) ? Q({ name: e.name }, t, { setup: e }) : e;
}
function cr(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function qt(e, t, s, n, r = !1) {
    if (O(e)) {
        e.forEach((F, R) => qt(F, t && (O(t) ? t[R] : t), s, n, r));
        return;
    }
    if (gt(n) && !r) {
        n.shapeFlag & 512 &&
            n.type.__asyncResolved &&
            n.component.subTree.component &&
            qt(e, t, s, n.component.subTree);
        return;
    }
    const i = n.shapeFlag & 4 ? is(n.component) : n.el,
        o = r ? null : i,
        { i: l, r: u } = e,
        p = t && t.r,
        a = l.refs === $ ? (l.refs = {}) : l.refs,
        h = l.setupState,
        S = N(h),
        T = h === $ ? () => !1 : (F) => H(S, F);
    if (
        (p != null &&
            p !== u &&
            (Y(p)
                ? ((a[p] = null), T(p) && (h[p] = null))
                : Z(p) && (p.value = null)),
        P(u))
    )
        Et(u, l, 12, [o, a]);
    else {
        const F = Y(u),
            R = Z(u);
        if (F || R) {
            const z = () => {
                if (e.f) {
                    const L = F ? (T(u) ? h[u] : a[u]) : u.value;
                    r
                        ? O(L) && Rs(L, i)
                        : O(L)
                          ? L.includes(i) || L.push(i)
                          : F
                            ? ((a[u] = [i]), T(u) && (h[u] = a[u]))
                            : ((u.value = [i]), e.k && (a[e.k] = u.value));
                } else
                    F
                        ? ((a[u] = o), T(u) && (h[u] = o))
                        : R && ((u.value = o), e.k && (a[e.k] = o));
            };
            o ? ((z.id = -1), le(z, s)) : z();
        }
    }
}
kt().requestIdleCallback;
kt().cancelIdleCallback;
const gt = (e) => !!e.type.__asyncLoader,
    fr = (e) => e.type.__isKeepAlive;
function Di(e, t) {
    ur(e, 'a', t);
}
function Ni(e, t) {
    ur(e, 'da', t);
}
function ur(e, t, s = ne) {
    const n =
        e.__wdc ||
        (e.__wdc = () => {
            let r = s;
            for (; r; ) {
                if (r.isDeactivated) return;
                r = r.parent;
            }
            return e();
        });
    if ((ss(t, n, s), s)) {
        let r = s.parent;
        for (; r && r.parent; )
            fr(r.parent.vnode) && Hi(n, t, s, r), (r = r.parent);
    }
}
function Hi(e, t, s, n) {
    const r = ss(t, e, n, !0);
    ar(() => {
        Rs(n[t], r);
    }, s);
}
function ss(e, t, s = ne, n = !1) {
    if (s) {
        const r = s[e] || (s[e] = []),
            i =
                t.__weh ||
                (t.__weh = (...o) => {
                    je();
                    const l = Ct(s),
                        u = Se(t, s, e, o);
                    return l(), Le(), u;
                });
        return n ? r.unshift(i) : r.push(i), i;
    }
}
const Ae =
        (e) =>
        (t, s = ne) => {
            (!St || e === 'sp') && ss(e, (...n) => t(...n), s);
        },
    ji = Ae('bm'),
    Li = Ae('m'),
    $i = Ae('bu'),
    Vi = Ae('u'),
    Bi = Ae('bum'),
    ar = Ae('um'),
    Ui = Ae('sp'),
    Ki = Ae('rtg'),
    Wi = Ae('rtc');
function qi(e, t = ne) {
    ss('ec', e, t);
}
const Gi = Symbol.for('v-ndc'),
    Ts = (e) => (e ? (Rr(e) ? is(e) : Ts(e.parent)) : null),
    mt = Q(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Ts(e.parent),
        $root: (e) => Ts(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => pr(e),
        $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
                qs(e.update);
            }),
        $nextTick: (e) => e.n || (e.n = nr.bind(e.proxy)),
        $watch: (e) => go.bind(e),
    }),
    hs = (e, t) => e !== $ && !e.__isScriptSetup && H(e, t),
    Ji = {
        get({ _: e }, t) {
            if (t === '__v_skip') return !0;
            const {
                ctx: s,
                setupState: n,
                data: r,
                props: i,
                accessCache: o,
                type: l,
                appContext: u,
            } = e;
            let p;
            if (t[0] !== '$') {
                const T = o[t];
                if (T !== void 0)
                    switch (T) {
                        case 1:
                            return n[t];
                        case 2:
                            return r[t];
                        case 4:
                            return s[t];
                        case 3:
                            return i[t];
                    }
                else {
                    if (hs(n, t)) return (o[t] = 1), n[t];
                    if (r !== $ && H(r, t)) return (o[t] = 2), r[t];
                    if ((p = e.propsOptions[0]) && H(p, t))
                        return (o[t] = 3), i[t];
                    if (s !== $ && H(s, t)) return (o[t] = 4), s[t];
                    Es && (o[t] = 0);
                }
            }
            const a = mt[t];
            let h, S;
            if (a) return t === '$attrs' && X(e.attrs, 'get', ''), a(e);
            if ((h = l.__cssModules) && (h = h[t])) return h;
            if (s !== $ && H(s, t)) return (o[t] = 4), s[t];
            if (((S = u.config.globalProperties), H(S, t))) return S[t];
        },
        set({ _: e }, t, s) {
            const { data: n, setupState: r, ctx: i } = e;
            return hs(r, t)
                ? ((r[t] = s), !0)
                : n !== $ && H(n, t)
                  ? ((n[t] = s), !0)
                  : H(e.props, t) || (t[0] === '$' && t.slice(1) in e)
                    ? !1
                    : ((i[t] = s), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: s,
                    ctx: n,
                    appContext: r,
                    propsOptions: i,
                },
            },
            o,
        ) {
            let l;
            return (
                !!s[o] ||
                (e !== $ && H(e, o)) ||
                hs(t, o) ||
                ((l = i[0]) && H(l, o)) ||
                H(n, o) ||
                H(mt, o) ||
                H(r.config.globalProperties, o)
            );
        },
        defineProperty(e, t, s) {
            return (
                s.get != null
                    ? (e._.accessCache[t] = 0)
                    : H(s, 'value') && this.set(e, t, s.value, null),
                Reflect.defineProperty(e, t, s)
            );
        },
    };
function ln(e) {
    return O(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let Es = !0;
function Yi(e) {
    const t = pr(e),
        s = e.proxy,
        n = e.ctx;
    (Es = !1), t.beforeCreate && cn(t.beforeCreate, e, 'bc');
    const {
        data: r,
        computed: i,
        methods: o,
        watch: l,
        provide: u,
        inject: p,
        created: a,
        beforeMount: h,
        mounted: S,
        beforeUpdate: T,
        updated: F,
        activated: R,
        deactivated: z,
        beforeDestroy: L,
        beforeUnmount: q,
        destroyed: G,
        unmounted: I,
        render: J,
        renderTracked: Pe,
        renderTriggered: pe,
        errorCaptured: Me,
        serverPrefetch: Ot,
        expose: $e,
        inheritAttrs: rt,
        components: It,
        directives: At,
        filters: os,
    } = t;
    if ((p && zi(p, n, null), o))
        for (const W in o) {
            const V = o[W];
            P(V) && (n[W] = V.bind(s));
        }
    if (r) {
        const W = r.call(s, s);
        K(W) && (e.data = Us(W));
    }
    if (((Es = !0), i))
        for (const W in i) {
            const V = i[W],
                Ve = P(V) ? V.bind(s, s) : P(V.get) ? V.get.bind(s, s) : ve,
                Pt = !P(V) && P(V.set) ? V.set.bind(s) : ve,
                Be = Dr({ get: Ve, set: Pt });
            Object.defineProperty(n, W, {
                enumerable: !0,
                configurable: !0,
                get: () => Be.value,
                set: (he) => (Be.value = he),
            });
        }
    if (l) for (const W in l) dr(l[W], n, s, W);
    if (u) {
        const W = P(u) ? u.call(s) : u;
        Reflect.ownKeys(W).forEach((V) => {
            to(V, W[V]);
        });
    }
    a && cn(a, e, 'c');
    function k(W, V) {
        O(V) ? V.forEach((Ve) => W(Ve.bind(s))) : V && W(V.bind(s));
    }
    if (
        (k(ji, h),
        k(Li, S),
        k($i, T),
        k(Vi, F),
        k(Di, R),
        k(Ni, z),
        k(qi, Me),
        k(Wi, Pe),
        k(Ki, pe),
        k(Bi, q),
        k(ar, I),
        k(Ui, Ot),
        O($e))
    )
        if ($e.length) {
            const W = e.exposed || (e.exposed = {});
            $e.forEach((V) => {
                Object.defineProperty(W, V, {
                    get: () => s[V],
                    set: (Ve) => (s[V] = Ve),
                });
            });
        } else e.exposed || (e.exposed = {});
    J && e.render === ve && (e.render = J),
        rt != null && (e.inheritAttrs = rt),
        It && (e.components = It),
        At && (e.directives = At),
        Ot && cr(e);
}
function zi(e, t, s = ve) {
    O(e) && (e = Cs(e));
    for (const n in e) {
        const r = e[n];
        let i;
        K(r)
            ? 'default' in r
                ? (i = jt(r.from || n, r.default, !0))
                : (i = jt(r.from || n))
            : (i = jt(r)),
            Z(i)
                ? Object.defineProperty(t, n, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => i.value,
                      set: (o) => (i.value = o),
                  })
                : (t[n] = i);
    }
}
function cn(e, t, s) {
    Se(O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function dr(e, t, s, n) {
    let r = n.includes('.') ? Or(s, n) : () => s[n];
    if (Y(e)) {
        const i = t[e];
        P(i) && ms(r, i);
    } else if (P(e)) ms(r, e.bind(s));
    else if (K(e))
        if (O(e)) e.forEach((i) => dr(i, t, s, n));
        else {
            const i = P(e.handler) ? e.handler.bind(s) : t[e.handler];
            P(i) && ms(r, i, e);
        }
}
function pr(e) {
    const t = e.type,
        { mixins: s, extends: n } = t,
        {
            mixins: r,
            optionsCache: i,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        l = i.get(t);
    let u;
    return (
        l
            ? (u = l)
            : !r.length && !s && !n
              ? (u = t)
              : ((u = {}),
                r.length && r.forEach((p) => Gt(u, p, o, !0)),
                Gt(u, t, o)),
        K(t) && i.set(t, u),
        u
    );
}
function Gt(e, t, s, n = !1) {
    const { mixins: r, extends: i } = t;
    i && Gt(e, i, s, !0), r && r.forEach((o) => Gt(e, o, s, !0));
    for (const o in t)
        if (!(n && o === 'expose')) {
            const l = Xi[o] || (s && s[o]);
            e[o] = l ? l(e[o], t[o]) : t[o];
        }
    return e;
}
const Xi = {
    data: fn,
    props: un,
    emits: un,
    methods: ut,
    computed: ut,
    beforeCreate: ee,
    created: ee,
    beforeMount: ee,
    mounted: ee,
    beforeUpdate: ee,
    updated: ee,
    beforeDestroy: ee,
    beforeUnmount: ee,
    destroyed: ee,
    unmounted: ee,
    activated: ee,
    deactivated: ee,
    errorCaptured: ee,
    serverPrefetch: ee,
    components: ut,
    directives: ut,
    watch: Qi,
    provide: fn,
    inject: Zi,
};
function fn(e, t) {
    return t
        ? e
            ? function () {
                  return Q(
                      P(e) ? e.call(this, this) : e,
                      P(t) ? t.call(this, this) : t,
                  );
              }
            : t
        : e;
}
function Zi(e, t) {
    return ut(Cs(e), Cs(t));
}
function Cs(e) {
    if (O(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
        return t;
    }
    return e;
}
function ee(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function ut(e, t) {
    return e ? Q(Object.create(null), e, t) : t;
}
function un(e, t) {
    return e
        ? O(e) && O(t)
            ? [...new Set([...e, ...t])]
            : Q(Object.create(null), ln(e), ln(t ?? {}))
        : t;
}
function Qi(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = Q(Object.create(null), e);
    for (const n in t) s[n] = ee(e[n], t[n]);
    return s;
}
function hr() {
    return {
        app: null,
        config: {
            isNativeTag: Lr,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let ki = 0;
function eo(e, t) {
    return function (n, r = null) {
        P(n) || (n = Q({}, n)), r != null && !K(r) && (r = null);
        const i = hr(),
            o = new WeakSet(),
            l = [];
        let u = !1;
        const p = (i.app = {
            _uid: ki++,
            _component: n,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: $o,
            get config() {
                return i.config;
            },
            set config(a) {},
            use(a, ...h) {
                return (
                    o.has(a) ||
                        (a && P(a.install)
                            ? (o.add(a), a.install(p, ...h))
                            : P(a) && (o.add(a), a(p, ...h))),
                    p
                );
            },
            mixin(a) {
                return i.mixins.includes(a) || i.mixins.push(a), p;
            },
            component(a, h) {
                return h ? ((i.components[a] = h), p) : i.components[a];
            },
            directive(a, h) {
                return h ? ((i.directives[a] = h), p) : i.directives[a];
            },
            mount(a, h, S) {
                if (!u) {
                    const T = p._ceVNode || Ne(n, r);
                    return (
                        (T.appContext = i),
                        S === !0 ? (S = 'svg') : S === !1 && (S = void 0),
                        e(T, a, S),
                        (u = !0),
                        (p._container = a),
                        (a.__vue_app__ = p),
                        is(T.component)
                    );
                }
            },
            onUnmount(a) {
                l.push(a);
            },
            unmount() {
                u &&
                    (Se(l, p._instance, 16),
                    e(null, p._container),
                    delete p._container.__vue_app__);
            },
            provide(a, h) {
                return (i.provides[a] = h), p;
            },
            runWithContext(a) {
                const h = tt;
                tt = p;
                try {
                    return a();
                } finally {
                    tt = h;
                }
            },
        });
        return p;
    };
}
let tt = null;
function to(e, t) {
    if (ne) {
        let s = ne.provides;
        const n = ne.parent && ne.parent.provides;
        n === s && (s = ne.provides = Object.create(n)), (s[e] = t);
    }
}
function jt(e, t, s = !1) {
    const n = ne || ue;
    if (n || tt) {
        const r = tt
            ? tt._context.provides
            : n
              ? n.parent == null
                  ? n.vnode.appContext && n.vnode.appContext.provides
                  : n.parent.provides
              : void 0;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return s && P(t) ? t.call(n && n.proxy) : t;
    }
}
const gr = {},
    mr = () => Object.create(gr),
    br = (e) => Object.getPrototypeOf(e) === gr;
function so(e, t, s, n = !1) {
    const r = {},
        i = mr();
    (e.propsDefaults = Object.create(null)), _r(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    s
        ? (e.props = n ? r : bi(r))
        : e.type.props
          ? (e.props = r)
          : (e.props = i),
        (e.attrs = i);
}
function no(e, t, s, n) {
    const {
            props: r,
            attrs: i,
            vnode: { patchFlag: o },
        } = e,
        l = N(r),
        [u] = e.propsOptions;
    let p = !1;
    if ((n || o > 0) && !(o & 16)) {
        if (o & 8) {
            const a = e.vnode.dynamicProps;
            for (let h = 0; h < a.length; h++) {
                let S = a[h];
                if (ns(e.emitsOptions, S)) continue;
                const T = t[S];
                if (u)
                    if (H(i, S)) T !== i[S] && ((i[S] = T), (p = !0));
                    else {
                        const F = He(S);
                        r[F] = Os(u, l, F, T, e, !1);
                    }
                else T !== i[S] && ((i[S] = T), (p = !0));
            }
        }
    } else {
        _r(e, t, r, i) && (p = !0);
        let a;
        for (const h in l)
            (!t || (!H(t, h) && ((a = Ye(h)) === h || !H(t, a)))) &&
                (u
                    ? s &&
                      (s[h] !== void 0 || s[a] !== void 0) &&
                      (r[h] = Os(u, l, h, void 0, e, !0))
                    : delete r[h]);
        if (i !== l)
            for (const h in i) (!t || !H(t, h)) && (delete i[h], (p = !0));
    }
    p && Oe(e.attrs, 'set', '');
}
function _r(e, t, s, n) {
    const [r, i] = e.propsOptions;
    let o = !1,
        l;
    if (t)
        for (let u in t) {
            if (at(u)) continue;
            const p = t[u];
            let a;
            r && H(r, (a = He(u)))
                ? !i || !i.includes(a)
                    ? (s[a] = p)
                    : ((l || (l = {}))[a] = p)
                : ns(e.emitsOptions, u) ||
                  ((!(u in n) || p !== n[u]) && ((n[u] = p), (o = !0)));
        }
    if (i) {
        const u = N(s),
            p = l || $;
        for (let a = 0; a < i.length; a++) {
            const h = i[a];
            s[h] = Os(r, u, h, p[h], e, !H(p, h));
        }
    }
    return o;
}
function Os(e, t, s, n, r, i) {
    const o = e[s];
    if (o != null) {
        const l = H(o, 'default');
        if (l && n === void 0) {
            const u = o.default;
            if (o.type !== Function && !o.skipFactory && P(u)) {
                const { propsDefaults: p } = r;
                if (s in p) n = p[s];
                else {
                    const a = Ct(r);
                    (n = p[s] = u.call(null, t)), a();
                }
            } else n = u;
            r.ce && r.ce._setProp(s, n);
        }
        o[0] &&
            (i && !l
                ? (n = !1)
                : o[1] && (n === '' || n === Ye(s)) && (n = !0));
    }
    return n;
}
const ro = new WeakMap();
function xr(e, t, s = !1) {
    const n = s ? ro : t.propsCache,
        r = n.get(e);
    if (r) return r;
    const i = e.props,
        o = {},
        l = [];
    let u = !1;
    if (!P(e)) {
        const a = (h) => {
            u = !0;
            const [S, T] = xr(h, t, !0);
            Q(o, S), T && l.push(...T);
        };
        !s && t.mixins.length && t.mixins.forEach(a),
            e.extends && a(e.extends),
            e.mixins && e.mixins.forEach(a);
    }
    if (!i && !u) return K(e) && n.set(e, Qe), Qe;
    if (O(i))
        for (let a = 0; a < i.length; a++) {
            const h = He(i[a]);
            an(h) && (o[h] = $);
        }
    else if (i)
        for (const a in i) {
            const h = He(a);
            if (an(h)) {
                const S = i[a],
                    T = (o[h] = O(S) || P(S) ? { type: S } : Q({}, S)),
                    F = T.type;
                let R = !1,
                    z = !0;
                if (O(F))
                    for (let L = 0; L < F.length; ++L) {
                        const q = F[L],
                            G = P(q) && q.name;
                        if (G === 'Boolean') {
                            R = !0;
                            break;
                        } else G === 'String' && (z = !1);
                    }
                else R = P(F) && F.name === 'Boolean';
                (T[0] = R), (T[1] = z), (R || H(T, 'default')) && l.push(h);
            }
        }
    const p = [o, l];
    return K(e) && n.set(e, p), p;
}
function an(e) {
    return e[0] !== '$' && !at(e);
}
const yr = (e) => e[0] === '_' || e === '$stable',
    Js = (e) => (O(e) ? e.map(ye) : [ye(e)]),
    io = (e, t, s) => {
        if (t._n) return t;
        const n = Pi((...r) => Js(t(...r)), s);
        return (n._c = !1), n;
    },
    vr = (e, t, s) => {
        const n = e._ctx;
        for (const r in e) {
            if (yr(r)) continue;
            const i = e[r];
            if (P(i)) t[r] = io(r, i, n);
            else if (i != null) {
                const o = Js(i);
                t[r] = () => o;
            }
        }
    },
    wr = (e, t) => {
        const s = Js(t);
        e.slots.default = () => s;
    },
    Sr = (e, t, s) => {
        for (const n in t) (s || n !== '_') && (e[n] = t[n]);
    },
    oo = (e, t, s) => {
        const n = (e.slots = mr());
        if (e.vnode.shapeFlag & 32) {
            const r = t._;
            r ? (Sr(n, t, s), s && Hn(n, '_', r, !0)) : vr(t, n);
        } else t && wr(e, t);
    },
    lo = (e, t, s) => {
        const { vnode: n, slots: r } = e;
        let i = !0,
            o = $;
        if (n.shapeFlag & 32) {
            const l = t._;
            l
                ? s && l === 1
                    ? (i = !1)
                    : Sr(r, t, s)
                : ((i = !t.$stable), vr(t, r)),
                (o = t);
        } else t && (wr(e, t), (o = { default: 1 }));
        if (i) for (const l in r) !yr(l) && o[l] == null && delete r[l];
    },
    le = wo;
function co(e) {
    return fo(e);
}
function fo(e, t) {
    const s = kt();
    s.__VUE__ = !0;
    const {
            insert: n,
            remove: r,
            patchProp: i,
            createElement: o,
            createText: l,
            createComment: u,
            setText: p,
            setElementText: a,
            parentNode: h,
            nextSibling: S,
            setScopeId: T = ve,
            insertStaticContent: F,
        } = e,
        R = (
            c,
            f,
            d,
            b = null,
            g = null,
            m = null,
            v = void 0,
            y = null,
            x = !!f.dynamicChildren,
        ) => {
            if (c === f) return;
            c && !ft(c, f) && ((b = Mt(c)), he(c, g, m, !0), (c = null)),
                f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null));
            const { type: _, ref: C, shapeFlag: w } = f;
            switch (_) {
                case rs:
                    z(c, f, d, b);
                    break;
                case vt:
                    L(c, f, d, b);
                    break;
                case Lt:
                    c == null && q(f, d, b, v);
                    break;
                case Ce:
                    It(c, f, d, b, g, m, v, y, x);
                    break;
                default:
                    w & 1
                        ? J(c, f, d, b, g, m, v, y, x)
                        : w & 6
                          ? At(c, f, d, b, g, m, v, y, x)
                          : (w & 64 || w & 128) &&
                            _.process(c, f, d, b, g, m, v, y, x, ot);
            }
            C != null && g && qt(C, c && c.ref, m, f || c, !f);
        },
        z = (c, f, d, b) => {
            if (c == null) n((f.el = l(f.children)), d, b);
            else {
                const g = (f.el = c.el);
                f.children !== c.children && p(g, f.children);
            }
        },
        L = (c, f, d, b) => {
            c == null ? n((f.el = u(f.children || '')), d, b) : (f.el = c.el);
        },
        q = (c, f, d, b) => {
            [c.el, c.anchor] = F(c.children, f, d, b, c.el, c.anchor);
        },
        G = ({ el: c, anchor: f }, d, b) => {
            let g;
            for (; c && c !== f; ) (g = S(c)), n(c, d, b), (c = g);
            n(f, d, b);
        },
        I = ({ el: c, anchor: f }) => {
            let d;
            for (; c && c !== f; ) (d = S(c)), r(c), (c = d);
            r(f);
        },
        J = (c, f, d, b, g, m, v, y, x) => {
            f.type === 'svg'
                ? (v = 'svg')
                : f.type === 'math' && (v = 'mathml'),
                c == null
                    ? Pe(f, d, b, g, m, v, y, x)
                    : Ot(c, f, g, m, v, y, x);
        },
        Pe = (c, f, d, b, g, m, v, y) => {
            let x, _;
            const { props: C, shapeFlag: w, transition: E, dirs: A } = c;
            if (
                ((x = c.el = o(c.type, m, C && C.is, C)),
                w & 8
                    ? a(x, c.children)
                    : w & 16 && Me(c.children, x, null, b, g, gs(c, m), v, y),
                A && Ue(c, null, b, 'created'),
                pe(x, c, c.scopeId, v, b),
                C)
            ) {
                for (const B in C)
                    B !== 'value' && !at(B) && i(x, B, null, C[B], m, b);
                'value' in C && i(x, 'value', null, C.value, m),
                    (_ = C.onVnodeBeforeMount) && _e(_, b, c);
            }
            A && Ue(c, null, b, 'beforeMount');
            const M = uo(g, E);
            M && E.beforeEnter(x),
                n(x, f, d),
                ((_ = C && C.onVnodeMounted) || M || A) &&
                    le(() => {
                        _ && _e(_, b, c),
                            M && E.enter(x),
                            A && Ue(c, null, b, 'mounted');
                    }, g);
        },
        pe = (c, f, d, b, g) => {
            if ((d && T(c, d), b))
                for (let m = 0; m < b.length; m++) T(c, b[m]);
            if (g) {
                let m = g.subTree;
                if (
                    f === m ||
                    (Ar(m.type) && (m.ssContent === f || m.ssFallback === f))
                ) {
                    const v = g.vnode;
                    pe(c, v, v.scopeId, v.slotScopeIds, g.parent);
                }
            }
        },
        Me = (c, f, d, b, g, m, v, y, x = 0) => {
            for (let _ = x; _ < c.length; _++) {
                const C = (c[_] = y ? Fe(c[_]) : ye(c[_]));
                R(null, C, f, d, b, g, m, v, y);
            }
        },
        Ot = (c, f, d, b, g, m, v) => {
            const y = (f.el = c.el);
            let { patchFlag: x, dynamicChildren: _, dirs: C } = f;
            x |= c.patchFlag & 16;
            const w = c.props || $,
                E = f.props || $;
            let A;
            if (
                (d && Ke(d, !1),
                (A = E.onVnodeBeforeUpdate) && _e(A, d, f, c),
                C && Ue(f, c, d, 'beforeUpdate'),
                d && Ke(d, !0),
                ((w.innerHTML && E.innerHTML == null) ||
                    (w.textContent && E.textContent == null)) &&
                    a(y, ''),
                _
                    ? $e(c.dynamicChildren, _, y, d, b, gs(f, g), m)
                    : v || V(c, f, y, null, d, b, gs(f, g), m, !1),
                x > 0)
            ) {
                if (x & 16) rt(y, w, E, d, g);
                else if (
                    (x & 2 &&
                        w.class !== E.class &&
                        i(y, 'class', null, E.class, g),
                    x & 4 && i(y, 'style', w.style, E.style, g),
                    x & 8)
                ) {
                    const M = f.dynamicProps;
                    for (let B = 0; B < M.length; B++) {
                        const j = M[B],
                            ie = w[j],
                            re = E[j];
                        (re !== ie || j === 'value') && i(y, j, ie, re, g, d);
                    }
                }
                x & 1 && c.children !== f.children && a(y, f.children);
            } else !v && _ == null && rt(y, w, E, d, g);
            ((A = E.onVnodeUpdated) || C) &&
                le(() => {
                    A && _e(A, d, f, c), C && Ue(f, c, d, 'updated');
                }, b);
        },
        $e = (c, f, d, b, g, m, v) => {
            for (let y = 0; y < f.length; y++) {
                const x = c[y],
                    _ = f[y],
                    C =
                        x.el && (x.type === Ce || !ft(x, _) || x.shapeFlag & 70)
                            ? h(x.el)
                            : d;
                R(x, _, C, null, b, g, m, v, !0);
            }
        },
        rt = (c, f, d, b, g) => {
            if (f !== d) {
                if (f !== $)
                    for (const m in f)
                        !at(m) && !(m in d) && i(c, m, f[m], null, g, b);
                for (const m in d) {
                    if (at(m)) continue;
                    const v = d[m],
                        y = f[m];
                    v !== y && m !== 'value' && i(c, m, y, v, g, b);
                }
                'value' in d && i(c, 'value', f.value, d.value, g);
            }
        },
        It = (c, f, d, b, g, m, v, y, x) => {
            const _ = (f.el = c ? c.el : l('')),
                C = (f.anchor = c ? c.anchor : l(''));
            let { patchFlag: w, dynamicChildren: E, slotScopeIds: A } = f;
            A && (y = y ? y.concat(A) : A),
                c == null
                    ? (n(_, d, b),
                      n(C, d, b),
                      Me(f.children || [], d, C, g, m, v, y, x))
                    : w > 0 && w & 64 && E && c.dynamicChildren
                      ? ($e(c.dynamicChildren, E, d, g, m, v, y),
                        (f.key != null || (g && f === g.subTree)) &&
                            Tr(c, f, !0))
                      : V(c, f, d, C, g, m, v, y, x);
        },
        At = (c, f, d, b, g, m, v, y, x) => {
            (f.slotScopeIds = y),
                c == null
                    ? f.shapeFlag & 512
                        ? g.ctx.activate(f, d, b, v, x)
                        : os(f, d, b, g, m, v, x)
                    : zs(c, f, x);
        },
        os = (c, f, d, b, g, m, v) => {
            const y = (c.component = Fo(c, b, g));
            if ((fr(c) && (y.ctx.renderer = ot), Do(y, !1, v), y.asyncDep)) {
                if ((g && g.registerDep(y, k, v), !c.el)) {
                    const x = (y.subTree = Ne(vt));
                    L(null, x, f, d);
                }
            } else k(y, c, f, d, g, m, v);
        },
        zs = (c, f, d) => {
            const b = (f.component = c.component);
            if (yo(c, f, d))
                if (b.asyncDep && !b.asyncResolved) {
                    W(b, f, d);
                    return;
                } else (b.next = f), b.update();
            else (f.el = c.el), (b.vnode = f);
        },
        k = (c, f, d, b, g, m, v) => {
            const y = () => {
                if (c.isMounted) {
                    let { next: w, bu: E, u: A, parent: M, vnode: B } = c;
                    {
                        const me = Er(c);
                        if (me) {
                            w && ((w.el = B.el), W(c, w, v)),
                                me.asyncDep.then(() => {
                                    c.isUnmounted || y();
                                });
                            return;
                        }
                    }
                    let j = w,
                        ie;
                    Ke(c, !1),
                        w ? ((w.el = B.el), W(c, w, v)) : (w = B),
                        E && Nt(E),
                        (ie = w.props && w.props.onVnodeBeforeUpdate) &&
                            _e(ie, M, w, B),
                        Ke(c, !0);
                    const re = pn(c),
                        ge = c.subTree;
                    (c.subTree = re),
                        R(ge, re, h(ge.el), Mt(ge), c, g, m),
                        (w.el = re.el),
                        j === null && vo(c, re.el),
                        A && le(A, g),
                        (ie = w.props && w.props.onVnodeUpdated) &&
                            le(() => _e(ie, M, w, B), g);
                } else {
                    let w;
                    const { el: E, props: A } = f,
                        { bm: M, m: B, parent: j, root: ie, type: re } = c,
                        ge = gt(f);
                    Ke(c, !1),
                        M && Nt(M),
                        !ge && (w = A && A.onVnodeBeforeMount) && _e(w, j, f),
                        Ke(c, !0);
                    {
                        ie.ce && ie.ce._injectChildStyle(re);
                        const me = (c.subTree = pn(c));
                        R(null, me, d, b, c, g, m), (f.el = me.el);
                    }
                    if ((B && le(B, g), !ge && (w = A && A.onVnodeMounted))) {
                        const me = f;
                        le(() => _e(w, j, me), g);
                    }
                    (f.shapeFlag & 256 ||
                        (j && gt(j.vnode) && j.vnode.shapeFlag & 256)) &&
                        c.a &&
                        le(c.a, g),
                        (c.isMounted = !0),
                        (f = d = b = null);
                }
            };
            c.scope.on();
            const x = (c.effect = new Vn(y));
            c.scope.off();
            const _ = (c.update = x.run.bind(x)),
                C = (c.job = x.runIfDirty.bind(x));
            (C.i = c),
                (C.id = c.uid),
                (x.scheduler = () => qs(C)),
                Ke(c, !0),
                _();
        },
        W = (c, f, d) => {
            f.component = c;
            const b = c.vnode.props;
            (c.vnode = f),
                (c.next = null),
                no(c, f.props, b, d),
                lo(c, f.children, d),
                je(),
                rn(c),
                Le();
        },
        V = (c, f, d, b, g, m, v, y, x = !1) => {
            const _ = c && c.children,
                C = c ? c.shapeFlag : 0,
                w = f.children,
                { patchFlag: E, shapeFlag: A } = f;
            if (E > 0) {
                if (E & 128) {
                    Pt(_, w, d, b, g, m, v, y, x);
                    return;
                } else if (E & 256) {
                    Ve(_, w, d, b, g, m, v, y, x);
                    return;
                }
            }
            A & 8
                ? (C & 16 && it(_, g, m), w !== _ && a(d, w))
                : C & 16
                  ? A & 16
                      ? Pt(_, w, d, b, g, m, v, y, x)
                      : it(_, g, m, !0)
                  : (C & 8 && a(d, ''), A & 16 && Me(w, d, b, g, m, v, y, x));
        },
        Ve = (c, f, d, b, g, m, v, y, x) => {
            (c = c || Qe), (f = f || Qe);
            const _ = c.length,
                C = f.length,
                w = Math.min(_, C);
            let E;
            for (E = 0; E < w; E++) {
                const A = (f[E] = x ? Fe(f[E]) : ye(f[E]));
                R(c[E], A, d, null, g, m, v, y, x);
            }
            _ > C ? it(c, g, m, !0, !1, w) : Me(f, d, b, g, m, v, y, x, w);
        },
        Pt = (c, f, d, b, g, m, v, y, x) => {
            let _ = 0;
            const C = f.length;
            let w = c.length - 1,
                E = C - 1;
            for (; _ <= w && _ <= E; ) {
                const A = c[_],
                    M = (f[_] = x ? Fe(f[_]) : ye(f[_]));
                if (ft(A, M)) R(A, M, d, null, g, m, v, y, x);
                else break;
                _++;
            }
            for (; _ <= w && _ <= E; ) {
                const A = c[w],
                    M = (f[E] = x ? Fe(f[E]) : ye(f[E]));
                if (ft(A, M)) R(A, M, d, null, g, m, v, y, x);
                else break;
                w--, E--;
            }
            if (_ > w) {
                if (_ <= E) {
                    const A = E + 1,
                        M = A < C ? f[A].el : b;
                    for (; _ <= E; )
                        R(
                            null,
                            (f[_] = x ? Fe(f[_]) : ye(f[_])),
                            d,
                            M,
                            g,
                            m,
                            v,
                            y,
                            x,
                        ),
                            _++;
                }
            } else if (_ > E) for (; _ <= w; ) he(c[_], g, m, !0), _++;
            else {
                const A = _,
                    M = _,
                    B = new Map();
                for (_ = M; _ <= E; _++) {
                    const oe = (f[_] = x ? Fe(f[_]) : ye(f[_]));
                    oe.key != null && B.set(oe.key, _);
                }
                let j,
                    ie = 0;
                const re = E - M + 1;
                let ge = !1,
                    me = 0;
                const lt = new Array(re);
                for (_ = 0; _ < re; _++) lt[_] = 0;
                for (_ = A; _ <= w; _++) {
                    const oe = c[_];
                    if (ie >= re) {
                        he(oe, g, m, !0);
                        continue;
                    }
                    let be;
                    if (oe.key != null) be = B.get(oe.key);
                    else
                        for (j = M; j <= E; j++)
                            if (lt[j - M] === 0 && ft(oe, f[j])) {
                                be = j;
                                break;
                            }
                    be === void 0
                        ? he(oe, g, m, !0)
                        : ((lt[be - M] = _ + 1),
                          be >= me ? (me = be) : (ge = !0),
                          R(oe, f[be], d, null, g, m, v, y, x),
                          ie++);
                }
                const Qs = ge ? ao(lt) : Qe;
                for (j = Qs.length - 1, _ = re - 1; _ >= 0; _--) {
                    const oe = M + _,
                        be = f[oe],
                        ks = oe + 1 < C ? f[oe + 1].el : b;
                    lt[_] === 0
                        ? R(null, be, d, ks, g, m, v, y, x)
                        : ge && (j < 0 || _ !== Qs[j] ? Be(be, d, ks, 2) : j--);
                }
            }
        },
        Be = (c, f, d, b, g = null) => {
            const {
                el: m,
                type: v,
                transition: y,
                children: x,
                shapeFlag: _,
            } = c;
            if (_ & 6) {
                Be(c.component.subTree, f, d, b);
                return;
            }
            if (_ & 128) {
                c.suspense.move(f, d, b);
                return;
            }
            if (_ & 64) {
                v.move(c, f, d, ot);
                return;
            }
            if (v === Ce) {
                n(m, f, d);
                for (let w = 0; w < x.length; w++) Be(x[w], f, d, b);
                n(c.anchor, f, d);
                return;
            }
            if (v === Lt) {
                G(c, f, d);
                return;
            }
            if (b !== 2 && _ & 1 && y)
                if (b === 0)
                    y.beforeEnter(m), n(m, f, d), le(() => y.enter(m), g);
                else {
                    const { leave: w, delayLeave: E, afterLeave: A } = y,
                        M = () => n(m, f, d),
                        B = () => {
                            w(m, () => {
                                M(), A && A();
                            });
                        };
                    E ? E(m, M, B) : B();
                }
            else n(m, f, d);
        },
        he = (c, f, d, b = !1, g = !1) => {
            const {
                type: m,
                props: v,
                ref: y,
                children: x,
                dynamicChildren: _,
                shapeFlag: C,
                patchFlag: w,
                dirs: E,
                cacheIndex: A,
            } = c;
            if (
                (w === -2 && (g = !1),
                y != null && qt(y, null, d, c, !0),
                A != null && (f.renderCache[A] = void 0),
                C & 256)
            ) {
                f.ctx.deactivate(c);
                return;
            }
            const M = C & 1 && E,
                B = !gt(c);
            let j;
            if ((B && (j = v && v.onVnodeBeforeUnmount) && _e(j, f, c), C & 6))
                jr(c.component, d, b);
            else {
                if (C & 128) {
                    c.suspense.unmount(d, b);
                    return;
                }
                M && Ue(c, null, f, 'beforeUnmount'),
                    C & 64
                        ? c.type.remove(c, f, d, ot, b)
                        : _ && !_.hasOnce && (m !== Ce || (w > 0 && w & 64))
                          ? it(_, f, d, !1, !0)
                          : ((m === Ce && w & 384) || (!g && C & 16)) &&
                            it(x, f, d),
                    b && Xs(c);
            }
            ((B && (j = v && v.onVnodeUnmounted)) || M) &&
                le(() => {
                    j && _e(j, f, c), M && Ue(c, null, f, 'unmounted');
                }, d);
        },
        Xs = (c) => {
            const { type: f, el: d, anchor: b, transition: g } = c;
            if (f === Ce) {
                Hr(d, b);
                return;
            }
            if (f === Lt) {
                I(c);
                return;
            }
            const m = () => {
                r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
            };
            if (c.shapeFlag & 1 && g && !g.persisted) {
                const { leave: v, delayLeave: y } = g,
                    x = () => v(d, m);
                y ? y(c.el, m, x) : x();
            } else m();
        },
        Hr = (c, f) => {
            let d;
            for (; c !== f; ) (d = S(c)), r(c), (c = d);
            r(f);
        },
        jr = (c, f, d) => {
            const {
                bum: b,
                scope: g,
                job: m,
                subTree: v,
                um: y,
                m: x,
                a: _,
            } = c;
            dn(x),
                dn(_),
                b && Nt(b),
                g.stop(),
                m && ((m.flags |= 8), he(v, c, f, d)),
                y && le(y, f),
                le(() => {
                    c.isUnmounted = !0;
                }, f),
                f &&
                    f.pendingBranch &&
                    !f.isUnmounted &&
                    c.asyncDep &&
                    !c.asyncResolved &&
                    c.suspenseId === f.pendingId &&
                    (f.deps--, f.deps === 0 && f.resolve());
        },
        it = (c, f, d, b = !1, g = !1, m = 0) => {
            for (let v = m; v < c.length; v++) he(c[v], f, d, b, g);
        },
        Mt = (c) => {
            if (c.shapeFlag & 6) return Mt(c.component.subTree);
            if (c.shapeFlag & 128) return c.suspense.next();
            const f = S(c.anchor || c.el),
                d = f && f[Mi];
            return d ? S(d) : f;
        };
    let ls = !1;
    const Zs = (c, f, d) => {
            c == null
                ? f._vnode && he(f._vnode, null, null, !0)
                : R(f._vnode || null, c, f, null, null, null, d),
                (f._vnode = c),
                ls || ((ls = !0), rn(), ir(), (ls = !1));
        },
        ot = {
            p: R,
            um: he,
            m: Be,
            r: Xs,
            mt: os,
            mc: Me,
            pc: V,
            pbc: $e,
            n: Mt,
            o: e,
        };
    return { render: Zs, hydrate: void 0, createApp: eo(Zs) };
}
function gs({ type: e, props: t }, s) {
    return (s === 'svg' && e === 'foreignObject') ||
        (s === 'mathml' &&
            e === 'annotation-xml' &&
            t &&
            t.encoding &&
            t.encoding.includes('html'))
        ? void 0
        : s;
}
function Ke({ effect: e, job: t }, s) {
    s ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function uo(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Tr(e, t, s = !1) {
    const n = e.children,
        r = t.children;
    if (O(n) && O(r))
        for (let i = 0; i < n.length; i++) {
            const o = n[i];
            let l = r[i];
            l.shapeFlag & 1 &&
                !l.dynamicChildren &&
                ((l.patchFlag <= 0 || l.patchFlag === 32) &&
                    ((l = r[i] = Fe(r[i])), (l.el = o.el)),
                !s && l.patchFlag !== -2 && Tr(o, l)),
                l.type === rs && (l.el = o.el);
        }
}
function ao(e) {
    const t = e.slice(),
        s = [0];
    let n, r, i, o, l;
    const u = e.length;
    for (n = 0; n < u; n++) {
        const p = e[n];
        if (p !== 0) {
            if (((r = s[s.length - 1]), e[r] < p)) {
                (t[n] = r), s.push(n);
                continue;
            }
            for (i = 0, o = s.length - 1; i < o; )
                (l = (i + o) >> 1), e[s[l]] < p ? (i = l + 1) : (o = l);
            p < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), (s[i] = n));
        }
    }
    for (i = s.length, o = s[i - 1]; i-- > 0; ) (s[i] = o), (o = t[o]);
    return s;
}
function Er(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Er(t);
}
function dn(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const po = Symbol.for('v-scx'),
    ho = () => jt(po);
function ms(e, t, s) {
    return Cr(e, t, s);
}
function Cr(e, t, s = $) {
    const { immediate: n, deep: r, flush: i, once: o } = s,
        l = Q({}, s),
        u = (t && n) || (!t && i !== 'post');
    let p;
    if (St) {
        if (i === 'sync') {
            const T = ho();
            p = T.__watcherHandles || (T.__watcherHandles = []);
        } else if (!u) {
            const T = () => {};
            return (T.stop = ve), (T.resume = ve), (T.pause = ve), T;
        }
    }
    const a = ne;
    l.call = (T, F, R) => Se(T, a, F, R);
    let h = !1;
    i === 'post'
        ? (l.scheduler = (T) => {
              le(T, a && a.suspense);
          })
        : i !== 'sync' &&
          ((h = !0),
          (l.scheduler = (T, F) => {
              F ? T() : qs(T);
          })),
        (l.augmentJob = (T) => {
            t && (T.flags |= 4),
                h && ((T.flags |= 2), a && ((T.id = a.uid), (T.i = a)));
        });
    const S = Ci(e, t, l);
    return St && (p ? p.push(S) : u && S()), S;
}
function go(e, t, s) {
    const n = this.proxy,
        r = Y(e) ? (e.includes('.') ? Or(n, e) : () => n[e]) : e.bind(n, n);
    let i;
    P(t) ? (i = t) : ((i = t.handler), (s = t));
    const o = Ct(this),
        l = Cr(r, i.bind(n), s);
    return o(), l;
}
function Or(e, t) {
    const s = t.split('.');
    return () => {
        let n = e;
        for (let r = 0; r < s.length && n; r++) n = n[s[r]];
        return n;
    };
}
const mo = (e, t) =>
    t === 'modelValue' || t === 'model-value'
        ? e.modelModifiers
        : e[`${t}Modifiers`] ||
          e[`${He(t)}Modifiers`] ||
          e[`${Ye(t)}Modifiers`];
function bo(e, t, ...s) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || $;
    let r = s;
    const i = t.startsWith('update:'),
        o = i && mo(n, t.slice(7));
    o &&
        (o.trim && (r = s.map((a) => (Y(a) ? a.trim() : a))),
        o.number && (r = s.map(Bt)));
    let l,
        u = n[(l = cs(t))] || n[(l = cs(He(t)))];
    !u && i && (u = n[(l = cs(Ye(t)))]), u && Se(u, e, 6, r);
    const p = n[l + 'Once'];
    if (p) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        (e.emitted[l] = !0), Se(p, e, 6, r);
    }
}
function Ir(e, t, s = !1) {
    const n = t.emitsCache,
        r = n.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {},
        l = !1;
    if (!P(e)) {
        const u = (p) => {
            const a = Ir(p, t, !0);
            a && ((l = !0), Q(o, a));
        };
        !s && t.mixins.length && t.mixins.forEach(u),
            e.extends && u(e.extends),
            e.mixins && e.mixins.forEach(u);
    }
    return !i && !l
        ? (K(e) && n.set(e, null), null)
        : (O(i) ? i.forEach((u) => (o[u] = null)) : Q(o, i),
          K(e) && n.set(e, o),
          o);
}
function ns(e, t) {
    return !e || !Xt(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, '')),
          H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ye(t)) || H(e, t));
}
function pn(e) {
    const {
            type: t,
            vnode: s,
            proxy: n,
            withProxy: r,
            propsOptions: [i],
            slots: o,
            attrs: l,
            emit: u,
            render: p,
            renderCache: a,
            props: h,
            data: S,
            setupState: T,
            ctx: F,
            inheritAttrs: R,
        } = e,
        z = Wt(e);
    let L, q;
    try {
        if (s.shapeFlag & 4) {
            const I = r || n,
                J = I;
            (L = ye(p.call(J, I, a, h, T, S, F))), (q = l);
        } else {
            const I = t;
            (L = ye(
                I.length > 1
                    ? I(h, { attrs: l, slots: o, emit: u })
                    : I(h, null),
            )),
                (q = t.props ? l : _o(l));
        }
    } catch (I) {
        (bt.length = 0), ts(I, e, 1), (L = Ne(vt));
    }
    let G = L;
    if (q && R !== !1) {
        const I = Object.keys(q),
            { shapeFlag: J } = G;
        I.length &&
            J & 7 &&
            (i && I.some(Ms) && (q = xo(q, i)), (G = nt(G, q, !1, !0)));
    }
    return (
        s.dirs &&
            ((G = nt(G, null, !1, !0)),
            (G.dirs = G.dirs ? G.dirs.concat(s.dirs) : s.dirs)),
        s.transition && Gs(G, s.transition),
        (L = G),
        Wt(z),
        L
    );
}
const _o = (e) => {
        let t;
        for (const s in e)
            (s === 'class' || s === 'style' || Xt(s)) &&
                ((t || (t = {}))[s] = e[s]);
        return t;
    },
    xo = (e, t) => {
        const s = {};
        for (const n in e) (!Ms(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
        return s;
    };
function yo(e, t, s) {
    const { props: n, children: r, component: i } = e,
        { props: o, children: l, patchFlag: u } = t,
        p = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (s && u >= 0) {
        if (u & 1024) return !0;
        if (u & 16) return n ? hn(n, o, p) : !!o;
        if (u & 8) {
            const a = t.dynamicProps;
            for (let h = 0; h < a.length; h++) {
                const S = a[h];
                if (o[S] !== n[S] && !ns(p, S)) return !0;
            }
        }
    } else
        return (r || l) && (!l || !l.$stable)
            ? !0
            : n === o
              ? !1
              : n
                ? o
                    ? hn(n, o, p)
                    : !0
                : !!o;
    return !1;
}
function hn(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (t[i] !== e[i] && !ns(s, i)) return !0;
    }
    return !1;
}
function vo({ vnode: e, parent: t }, s) {
    for (; t; ) {
        const n = t.subTree;
        if (
            (n.suspense && n.suspense.activeBranch === e && (n.el = e.el),
            n === e)
        )
            ((e = t.vnode).el = s), (t = t.parent);
        else break;
    }
}
const Ar = (e) => e.__isSuspense;
function wo(e, t) {
    t && t.pendingBranch
        ? O(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : Ai(e);
}
const Ce = Symbol.for('v-fgt'),
    rs = Symbol.for('v-txt'),
    vt = Symbol.for('v-cmt'),
    Lt = Symbol.for('v-stc'),
    bt = [];
let fe = null;
function So(e = !1) {
    bt.push((fe = e ? null : []));
}
function To() {
    bt.pop(), (fe = bt[bt.length - 1] || null);
}
let wt = 1;
function gn(e, t = !1) {
    (wt += e), e < 0 && fe && t && (fe.hasOnce = !0);
}
function Eo(e) {
    return (
        (e.dynamicChildren = wt > 0 ? fe || Qe : null),
        To(),
        wt > 0 && fe && fe.push(e),
        e
    );
}
function Co(e, t, s, n, r, i) {
    return Eo(D(e, t, s, n, r, i, !0));
}
function Pr(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function ft(e, t) {
    return e.type === t.type && e.key === t.key;
}
const Mr = ({ key: e }) => e ?? null,
    $t = ({ ref: e, ref_key: t, ref_for: s }) => (
        typeof e == 'number' && (e = '' + e),
        e != null
            ? Y(e) || Z(e) || P(e)
                ? { i: ue, r: e, k: t, f: !!s }
                : e
            : null
    );
function D(
    e,
    t = null,
    s = null,
    n = 0,
    r = null,
    i = e === Ce ? 0 : 1,
    o = !1,
    l = !1,
) {
    const u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Mr(t),
        ref: t && $t(t),
        scopeId: lr,
        slotScopeIds: null,
        children: s,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: ue,
    };
    return (
        l
            ? (Ys(u, s), i & 128 && e.normalize(u))
            : s && (u.shapeFlag |= Y(s) ? 8 : 16),
        wt > 0 &&
            !o &&
            fe &&
            (u.patchFlag > 0 || i & 6) &&
            u.patchFlag !== 32 &&
            fe.push(u),
        u
    );
}
const Ne = Oo;
function Oo(e, t = null, s = null, n = 0, r = null, i = !1) {
    if (((!e || e === Gi) && (e = vt), Pr(e))) {
        const l = nt(e, t, !0);
        return (
            s && Ys(l, s),
            wt > 0 &&
                !i &&
                fe &&
                (l.shapeFlag & 6 ? (fe[fe.indexOf(e)] = l) : fe.push(l)),
            (l.patchFlag = -2),
            l
        );
    }
    if ((Lo(e) && (e = e.__vccOpts), t)) {
        t = Io(t);
        let { class: l, style: u } = t;
        l && !Y(l) && (t.class = Ns(l)),
            K(u) && (Ws(u) && !O(u) && (u = Q({}, u)), (t.style = Ds(u)));
    }
    const o = Y(e) ? 1 : Ar(e) ? 128 : Ri(e) ? 64 : K(e) ? 4 : P(e) ? 2 : 0;
    return D(e, t, s, n, r, o, i, !0);
}
function Io(e) {
    return e ? (Ws(e) || br(e) ? Q({}, e) : e) : null;
}
function nt(e, t, s = !1, n = !1) {
    const { props: r, ref: i, patchFlag: o, children: l, transition: u } = e,
        p = t ? Po(r || {}, t) : r,
        a = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: p,
            key: p && Mr(p),
            ref:
                t && t.ref
                    ? s && i
                        ? O(i)
                            ? i.concat($t(t))
                            : [i, $t(t)]
                        : $t(t)
                    : i,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Ce ? (o === -1 ? 16 : o | 16) : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: u,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && nt(e.ssContent),
            ssFallback: e.ssFallback && nt(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    return u && n && Gs(a, u.clone(a)), a;
}
function Ze(e = ' ', t = 0) {
    return Ne(rs, null, e, t);
}
function Ao(e, t) {
    const s = Ne(Lt, null, e);
    return (s.staticCount = t), s;
}
function ye(e) {
    return e == null || typeof e == 'boolean'
        ? Ne(vt)
        : O(e)
          ? Ne(Ce, null, e.slice())
          : Pr(e)
            ? Fe(e)
            : Ne(rs, null, String(e));
}
function Fe(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nt(e);
}
function Ys(e, t) {
    let s = 0;
    const { shapeFlag: n } = e;
    if (t == null) t = null;
    else if (O(t)) s = 16;
    else if (typeof t == 'object')
        if (n & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), Ys(e, r()), r._c && (r._d = !0));
            return;
        } else {
            s = 32;
            const r = t._;
            !r && !br(t)
                ? (t._ctx = ue)
                : r === 3 &&
                  ue &&
                  (ue.slots._ === 1
                      ? (t._ = 1)
                      : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        P(t)
            ? ((t = { default: t, _ctx: ue }), (s = 32))
            : ((t = String(t)), n & 64 ? ((s = 16), (t = [Ze(t)])) : (s = 8));
    (e.children = t), (e.shapeFlag |= s);
}
function Po(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        for (const r in n)
            if (r === 'class')
                t.class !== n.class && (t.class = Ns([t.class, n.class]));
            else if (r === 'style') t.style = Ds([t.style, n.style]);
            else if (Xt(r)) {
                const i = t[r],
                    o = n[r];
                o &&
                    i !== o &&
                    !(O(i) && i.includes(o)) &&
                    (t[r] = i ? [].concat(i, o) : o);
            } else r !== '' && (t[r] = n[r]);
    }
    return t;
}
function _e(e, t, s, n = null) {
    Se(e, t, 7, [s, n]);
}
const Mo = hr();
let Ro = 0;
function Fo(e, t, s) {
    const n = e.type,
        r = (t ? t.appContext : e.appContext) || Mo,
        i = {
            uid: Ro++,
            vnode: e,
            type: n,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Zr(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            ids: t ? t.ids : ['', 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: xr(n, r),
            emitsOptions: Ir(n, r),
            emit: null,
            emitted: null,
            propsDefaults: $,
            inheritAttrs: n.inheritAttrs,
            ctx: $,
            data: $,
            props: $,
            attrs: $,
            slots: $,
            refs: $,
            setupState: $,
            setupContext: null,
            suspense: s,
            suspenseId: s ? s.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (
        (i.ctx = { _: i }),
        (i.root = t ? t.root : i),
        (i.emit = bo.bind(null, i)),
        e.ce && e.ce(i),
        i
    );
}
let ne = null,
    Jt,
    Is;
{
    const e = kt(),
        t = (s, n) => {
            let r;
            return (
                (r = e[s]) || (r = e[s] = []),
                r.push(n),
                (i) => {
                    r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
                }
            );
        };
    (Jt = t('__VUE_INSTANCE_SETTERS__', (s) => (ne = s))),
        (Is = t('__VUE_SSR_SETTERS__', (s) => (St = s)));
}
const Ct = (e) => {
        const t = ne;
        return (
            Jt(e),
            e.scope.on(),
            () => {
                e.scope.off(), Jt(t);
            }
        );
    },
    mn = () => {
        ne && ne.scope.off(), Jt(null);
    };
function Rr(e) {
    return e.vnode.shapeFlag & 4;
}
let St = !1;
function Do(e, t = !1, s = !1) {
    t && Is(t);
    const { props: n, children: r } = e.vnode,
        i = Rr(e);
    so(e, n, i, t), oo(e, r, s);
    const o = i ? No(e, t) : void 0;
    return t && Is(!1), o;
}
function No(e, t) {
    const s = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Ji));
    const { setup: n } = s;
    if (n) {
        je();
        const r = (e.setupContext = n.length > 1 ? jo(e) : null),
            i = Ct(e),
            o = Et(n, e, 0, [e.props, r]),
            l = Rn(o);
        if ((Le(), i(), (l || e.sp) && !gt(e) && cr(e), l)) {
            if ((o.then(mn, mn), t))
                return o
                    .then((u) => {
                        bn(e, u);
                    })
                    .catch((u) => {
                        ts(u, e, 0);
                    });
            e.asyncDep = o;
        } else bn(e, o);
    } else Fr(e);
}
function bn(e, t, s) {
    P(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : K(t) && (e.setupState = tr(t)),
        Fr(e);
}
function Fr(e, t, s) {
    const n = e.type;
    e.render || (e.render = n.render || ve);
    {
        const r = Ct(e);
        je();
        try {
            Yi(e);
        } finally {
            Le(), r();
        }
    }
}
const Ho = {
    get(e, t) {
        return X(e, 'get', ''), e[t];
    },
};
function jo(e) {
    const t = (s) => {
        e.exposed = s || {};
    };
    return {
        attrs: new Proxy(e.attrs, Ho),
        slots: e.slots,
        emit: e.emit,
        expose: t,
    };
}
function is(e) {
    return e.exposed
        ? e.exposeProxy ||
              (e.exposeProxy = new Proxy(tr(_i(e.exposed)), {
                  get(t, s) {
                      if (s in t) return t[s];
                      if (s in mt) return mt[s](e);
                  },
                  has(t, s) {
                      return s in t || s in mt;
                  },
              }))
        : e.proxy;
}
function Lo(e) {
    return P(e) && '__vccOpts' in e;
}
const Dr = (e, t) => Ti(e, t, St),
    $o = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let As;
const _n = typeof window < 'u' && window.trustedTypes;
if (_n)
    try {
        As = _n.createPolicy('vue', { createHTML: (e) => e });
    } catch {}
const Nr = As ? (e) => As.createHTML(e) : (e) => e,
    Vo = 'http://www.w3.org/2000/svg',
    Bo = 'http://www.w3.org/1998/Math/MathML',
    Ee = typeof document < 'u' ? document : null,
    xn = Ee && Ee.createElement('template'),
    Uo = {
        insert: (e, t, s) => {
            t.insertBefore(e, s || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, s, n) => {
            const r =
                t === 'svg'
                    ? Ee.createElementNS(Vo, e)
                    : t === 'mathml'
                      ? Ee.createElementNS(Bo, e)
                      : s
                        ? Ee.createElement(e, { is: s })
                        : Ee.createElement(e);
            return (
                e === 'select' &&
                    n &&
                    n.multiple != null &&
                    r.setAttribute('multiple', n.multiple),
                r
            );
        },
        createText: (e) => Ee.createTextNode(e),
        createComment: (e) => Ee.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => Ee.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, '');
        },
        insertStaticContent(e, t, s, n, r, i) {
            const o = s ? s.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (
                    ;
                    t.insertBefore(r.cloneNode(!0), s),
                        !(r === i || !(r = r.nextSibling));

                );
            else {
                xn.innerHTML = Nr(
                    n === 'svg'
                        ? `<svg>${e}</svg>`
                        : n === 'mathml'
                          ? `<math>${e}</math>`
                          : e,
                );
                const l = xn.content;
                if (n === 'svg' || n === 'mathml') {
                    const u = l.firstChild;
                    for (; u.firstChild; ) l.appendChild(u.firstChild);
                    l.removeChild(u);
                }
                t.insertBefore(l, s);
            }
            return [
                o ? o.nextSibling : t.firstChild,
                s ? s.previousSibling : t.lastChild,
            ];
        },
    },
    Ko = Symbol('_vtc');
function Wo(e, t, s) {
    const n = e[Ko];
    n && (t = (t ? [t, ...n] : [...n]).join(' ')),
        t == null
            ? e.removeAttribute('class')
            : s
              ? e.setAttribute('class', t)
              : (e.className = t);
}
const yn = Symbol('_vod'),
    qo = Symbol('_vsh'),
    Go = Symbol(''),
    Jo = /(^|;)\s*display\s*:/;
function Yo(e, t, s) {
    const n = e.style,
        r = Y(s);
    let i = !1;
    if (s && !r) {
        if (t)
            if (Y(t))
                for (const o of t.split(';')) {
                    const l = o.slice(0, o.indexOf(':')).trim();
                    s[l] == null && Vt(n, l, '');
                }
            else for (const o in t) s[o] == null && Vt(n, o, '');
        for (const o in s) o === 'display' && (i = !0), Vt(n, o, s[o]);
    } else if (r) {
        if (t !== s) {
            const o = n[Go];
            o && (s += ';' + o), (n.cssText = s), (i = Jo.test(s));
        }
    } else t && e.removeAttribute('style');
    yn in e && ((e[yn] = i ? n.display : ''), e[qo] && (n.display = 'none'));
}
const vn = /\s*!important$/;
function Vt(e, t, s) {
    if (O(s)) s.forEach((n) => Vt(e, t, n));
    else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s);
    else {
        const n = zo(e, t);
        vn.test(s)
            ? e.setProperty(Ye(n), s.replace(vn, ''), 'important')
            : (e[n] = s);
    }
}
const wn = ['Webkit', 'Moz', 'ms'],
    bs = {};
function zo(e, t) {
    const s = bs[t];
    if (s) return s;
    let n = He(t);
    if (n !== 'filter' && n in e) return (bs[t] = n);
    n = Nn(n);
    for (let r = 0; r < wn.length; r++) {
        const i = wn[r] + n;
        if (i in e) return (bs[t] = i);
    }
    return t;
}
const Sn = 'http://www.w3.org/1999/xlink';
function Tn(e, t, s, n, r, i = Yr(t)) {
    n && t.startsWith('xlink:')
        ? s == null
            ? e.removeAttributeNS(Sn, t.slice(6, t.length))
            : e.setAttributeNS(Sn, t, s)
        : s == null || (i && !jn(s))
          ? e.removeAttribute(t)
          : e.setAttribute(t, i ? '' : we(s) ? String(s) : s);
}
function En(e, t, s, n, r) {
    if (t === 'innerHTML' || t === 'textContent') {
        s != null && (e[t] = t === 'innerHTML' ? Nr(s) : s);
        return;
    }
    const i = e.tagName;
    if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
        const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
            u = s == null ? (e.type === 'checkbox' ? 'on' : '') : String(s);
        (l !== u || !('_value' in e)) && (e.value = u),
            s == null && e.removeAttribute(t),
            (e._value = s);
        return;
    }
    let o = !1;
    if (s === '' || s == null) {
        const l = typeof e[t];
        l === 'boolean'
            ? (s = jn(s))
            : s == null && l === 'string'
              ? ((s = ''), (o = !0))
              : l === 'number' && ((s = 0), (o = !0));
    }
    try {
        e[t] = s;
    } catch {}
    o && e.removeAttribute(r || t);
}
function qe(e, t, s, n) {
    e.addEventListener(t, s, n);
}
function Xo(e, t, s, n) {
    e.removeEventListener(t, s, n);
}
const Cn = Symbol('_vei');
function Zo(e, t, s, n, r = null) {
    const i = e[Cn] || (e[Cn] = {}),
        o = i[t];
    if (n && o) o.value = n;
    else {
        const [l, u] = Qo(t);
        if (n) {
            const p = (i[t] = tl(n, r));
            qe(e, l, p, u);
        } else o && (Xo(e, l, o, u), (i[t] = void 0));
    }
}
const On = /(?:Once|Passive|Capture)$/;
function Qo(e) {
    let t;
    if (On.test(e)) {
        t = {};
        let n;
        for (; (n = e.match(On)); )
            (e = e.slice(0, e.length - n[0].length)),
                (t[n[0].toLowerCase()] = !0);
    }
    return [e[2] === ':' ? e.slice(3) : Ye(e.slice(2)), t];
}
let _s = 0;
const ko = Promise.resolve(),
    el = () => _s || (ko.then(() => (_s = 0)), (_s = Date.now()));
function tl(e, t) {
    const s = (n) => {
        if (!n._vts) n._vts = Date.now();
        else if (n._vts <= s.attached) return;
        Se(sl(n, s.value), t, 5, [n]);
    };
    return (s.value = e), (s.attached = el()), s;
}
function sl(e, t) {
    if (O(t)) {
        const s = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                s.call(e), (e._stopped = !0);
            }),
            t.map((n) => (r) => !r._stopped && n && n(r))
        );
    } else return t;
}
const In = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) > 96 &&
        e.charCodeAt(2) < 123,
    nl = (e, t, s, n, r, i) => {
        const o = r === 'svg';
        t === 'class'
            ? Wo(e, n, o)
            : t === 'style'
              ? Yo(e, s, n)
              : Xt(t)
                ? Ms(t) || Zo(e, t, s, n, i)
                : (
                        t[0] === '.'
                            ? ((t = t.slice(1)), !0)
                            : t[0] === '^'
                              ? ((t = t.slice(1)), !1)
                              : rl(e, t, n, o)
                    )
                  ? (En(e, t, n),
                    !e.tagName.includes('-') &&
                        (t === 'value' ||
                            t === 'checked' ||
                            t === 'selected') &&
                        Tn(e, t, n, o, i, t !== 'value'))
                  : e._isVueCE && (/[A-Z]/.test(t) || !Y(n))
                    ? En(e, He(t), n, i, t)
                    : (t === 'true-value'
                          ? (e._trueValue = n)
                          : t === 'false-value' && (e._falseValue = n),
                      Tn(e, t, n, o));
    };
function rl(e, t, s, n) {
    if (n)
        return !!(
            t === 'innerHTML' ||
            t === 'textContent' ||
            (t in e && In(t) && P(s))
        );
    if (
        t === 'spellcheck' ||
        t === 'draggable' ||
        t === 'translate' ||
        t === 'form' ||
        (t === 'list' && e.tagName === 'INPUT') ||
        (t === 'type' && e.tagName === 'TEXTAREA')
    )
        return !1;
    if (t === 'width' || t === 'height') {
        const r = e.tagName;
        if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
            return !1;
    }
    return In(t) && Y(s) ? !1 : t in e;
}
const Yt = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1;
    return O(t) ? (s) => Nt(t, s) : t;
};
function il(e) {
    e.target.composing = !0;
}
function An(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const st = Symbol('_assign'),
    ol = {
        created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
            e[st] = Yt(r);
            const i = n || (r.props && r.props.type === 'number');
            qe(e, t ? 'change' : 'input', (o) => {
                if (o.target.composing) return;
                let l = e.value;
                s && (l = l.trim()), i && (l = Bt(l)), e[st](l);
            }),
                s &&
                    qe(e, 'change', () => {
                        e.value = e.value.trim();
                    }),
                t ||
                    (qe(e, 'compositionstart', il),
                    qe(e, 'compositionend', An),
                    qe(e, 'change', An));
        },
        mounted(e, { value: t }) {
            e.value = t ?? '';
        },
        beforeUpdate(
            e,
            {
                value: t,
                oldValue: s,
                modifiers: { lazy: n, trim: r, number: i },
            },
            o,
        ) {
            if (((e[st] = Yt(o)), e.composing)) return;
            const l =
                    (i || e.type === 'number') && !/^0\d/.test(e.value)
                        ? Bt(e.value)
                        : e.value,
                u = t ?? '';
            l !== u &&
                ((document.activeElement === e &&
                    e.type !== 'range' &&
                    ((n && t === s) || (r && e.value.trim() === u))) ||
                    (e.value = u));
        },
    },
    ll = {
        deep: !0,
        created(e, { value: t, modifiers: { number: s } }, n) {
            const r = Zt(t);
            qe(e, 'change', () => {
                const i = Array.prototype.filter
                    .call(e.options, (o) => o.selected)
                    .map((o) => (s ? Bt(zt(o)) : zt(o)));
                e[st](e.multiple ? (r ? new Set(i) : i) : i[0]),
                    (e._assigning = !0),
                    nr(() => {
                        e._assigning = !1;
                    });
            }),
                (e[st] = Yt(n));
        },
        mounted(e, { value: t }) {
            Pn(e, t);
        },
        beforeUpdate(e, t, s) {
            e[st] = Yt(s);
        },
        updated(e, { value: t }) {
            e._assigning || Pn(e, t);
        },
    };
function Pn(e, t) {
    const s = e.multiple,
        n = O(t);
    if (!(s && !n && !Zt(t))) {
        for (let r = 0, i = e.options.length; r < i; r++) {
            const o = e.options[r],
                l = zt(o);
            if (s)
                if (n) {
                    const u = typeof l;
                    u === 'string' || u === 'number'
                        ? (o.selected = t.some((p) => String(p) === String(l)))
                        : (o.selected = Xr(t, l) > -1);
                } else o.selected = t.has(l);
            else if (es(zt(o), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return;
            }
        }
        !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
}
function zt(e) {
    return '_value' in e ? e._value : e.value;
}
const cl = Q({ patchProp: nl }, Uo);
let Mn;
function fl() {
    return Mn || (Mn = co(cl));
}
const ul = (...e) => {
    const t = fl().createApp(...e),
        { mount: s } = t;
    return (
        (t.mount = (n) => {
            const r = dl(n);
            if (!r) return;
            const i = t._component;
            !P(i) && !i.render && !i.template && (i.template = r.innerHTML),
                r.nodeType === 1 && (r.textContent = '');
            const o = s(r, !1, al(r));
            return (
                r instanceof Element &&
                    (r.removeAttribute('v-cloak'),
                    r.setAttribute('data-v-app', '')),
                o
            );
        }),
        t
    );
};
function al(e) {
    if (e instanceof SVGElement) return 'svg';
    if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
        return 'mathml';
}
function dl(e) {
    return Y(e) ? document.querySelector(e) : e;
}
const pl = Fi({
        name: 'App',
        setup() {
            const e = ps('COPY'),
                t = ps('Bistro Van Dimi'),
                s = ps('red'),
                n = Dr(
                    () => `<script>
    document.addEventListener("DOMContentLoaded", function () {
        (function (document, script, scriptId) {
            const firstScript = document.getElementsByTagName(script)[0];
            if (document.getElementById(scriptId)) return;

            const scriptElement = document.createElement(script);
            scriptElement.src = "https://itsdimitrie.github.io/table.one-widget-test/embed.js";
            // scriptElement.src = "http://localhost:5173/table.one-widget-test/embed.js";

            firstScript.parentNode?.insertBefore(scriptElement, firstScript);
        })(document, "script", "reservationWidgetScript");
    });
<\/script>
<div class="widget-data" restoId="${t.value}" color="${s.value}"></div>`,
                );
            return {
                copyButtonText: e,
                restoId: t,
                color: s,
                copyCode: () => {
                    navigator.clipboard.writeText(n.value),
                        (e.value = 'COPIED!'),
                        setTimeout(() => {
                            e.value = 'COPY';
                        }, 2e3);
                },
            };
        },
    }),
    hl = (e, t) => {
        const s = e.__vccOpts || e;
        for (const [n, r] of t) s[n] = r;
        return s;
    },
    gl = { class: 'min-h-screen flex flex-col' },
    ml = { class: 'flex-grow bg-gray-900 text-white py-12 px-6' },
    bl = { class: 'max-w-3xl mx-auto' },
    _l = { class: 'mb-8 grid grid-cols-1 md:grid-cols-2 gap-6' },
    xl = { class: 'bg-gray-800 rounded-md overflow-hidden relative' },
    yl = { class: 'p-4 overflow-x-auto text-sm text-gray-300' },
    vl = { class: 'text-green-400' },
    wl = { class: 'text-green-400' };
function Sl(e, t, s, n, r, i) {
    return (
        So(),
        Co('div', gl, [
            t[13] ||
                (t[13] = D(
                    'header',
                    { class: 'bg-blue-600 text-white py-16 px-6 text-center' },
                    [
                        D(
                            'h1',
                            { class: 'text-5xl font-bold mb-2' },
                            'Table.One Widget',
                        ),
                        D(
                            'p',
                            { class: 'text-xl' },
                            'This widget is in test production.',
                        ),
                    ],
                    -1,
                )),
            D('main', ml, [
                D('div', bl, [
                    t[9] ||
                        (t[9] = D(
                            'h2',
                            { class: 'text-4xl font-bold mb-8' },
                            'Embed code',
                            -1,
                        )),
                    t[10] ||
                        (t[10] = D(
                            'p',
                            { class: 'mb-6 text-gray-300' },
                            [
                                Ze('Paste this code inside the '),
                                D(
                                    'span',
                                    { class: 'text-white font-mono' },
                                    '<body>',
                                ),
                                Ze(' tag of your website.'),
                            ],
                            -1,
                        )),
                    D('div', _l, [
                        D('div', null, [
                            t[3] ||
                                (t[3] = D(
                                    'label',
                                    {
                                        class: 'block text-gray-300 mb-2',
                                        for: 'restoIdInput',
                                    },
                                    'Restaurant ID:',
                                    -1,
                                )),
                            on(
                                D(
                                    'input',
                                    {
                                        id: 'restoIdInput',
                                        'onUpdate:modelValue':
                                            t[0] ||
                                            (t[0] = (o) => (e.restoId = o)),
                                        class: 'w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white',
                                        placeholder: 'Enter restaurant ID',
                                    },
                                    null,
                                    512,
                                ),
                                [[ol, e.restoId]],
                            ),
                        ]),
                        D('div', null, [
                            t[5] ||
                                (t[5] = D(
                                    'label',
                                    {
                                        class: 'block text-gray-300 mb-2',
                                        for: 'colorSelect',
                                    },
                                    'Color:',
                                    -1,
                                )),
                            on(
                                D(
                                    'select',
                                    {
                                        id: 'colorSelect',
                                        'onUpdate:modelValue':
                                            t[1] ||
                                            (t[1] = (o) => (e.color = o)),
                                        class: 'w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white',
                                    },
                                    t[4] ||
                                        (t[4] = [
                                            D(
                                                'option',
                                                { value: 'blue' },
                                                'Blue',
                                                -1,
                                            ),
                                            D(
                                                'option',
                                                { value: 'green' },
                                                'Green',
                                                -1,
                                            ),
                                            D(
                                                'option',
                                                { value: 'red' },
                                                'Red',
                                                -1,
                                            ),
                                            D(
                                                'option',
                                                { value: 'orange' },
                                                'Orange',
                                                -1,
                                            ),
                                        ]),
                                    512,
                                ),
                                [[ll, e.color]],
                            ),
                        ]),
                    ]),
                    t[11] ||
                        (t[11] = D(
                            'p',
                            { class: 'text-gray-300 mb-6' },
                            [
                                Ze(' You can edit the '),
                                D(
                                    'span',
                                    { class: 'text-white font-mono' },
                                    '<restoId>',
                                ),
                                Ze(
                                    ' and change the color to either blue, green, red or orange in ',
                                ),
                                D(
                                    'span',
                                    { class: 'text-white font-mono' },
                                    '<color>',
                                ),
                            ],
                            -1,
                        )),
                    t[12] ||
                        (t[12] = D(
                            'p',
                            { class: 'text-gray-300' },
                            'Note that this only changes on your own application where you import the code, not on this page.',
                            -1,
                        )),
                    D('div', xl, [
                        D('pre', yl, [
                            t[6] ||
                                (t[6] = Ao(
                                    `<span class="text-gray-500">1.</span> <span class="text-blue-400">&lt;script&gt;</span>
<span class="text-gray-500">2.</span>     document.addEventListener<span class="text-white">(</span><span class="text-green-400">&quot;DOMContentLoaded&quot;</span><span class="text-white">, </span><span class="text-yellow-400">function</span><span class="text-white"> () {</span>
<span class="text-gray-500">3.</span>         <span class="text-white">(</span><span class="text-yellow-400">function</span><span class="text-white"> (document, script, scriptId) {</span>
<span class="text-gray-500">4.</span>             <span class="text-purple-400">const</span> firstScript = document.getElementsByTagName<span class="text-white">(script)[</span><span class="text-red-400">0</span><span class="text-white">];</span>
<span class="text-gray-500">5.</span>             <span class="text-purple-400">if</span><span class="text-white"> (document.getElementById(scriptId)) </span><span class="text-purple-400">return</span><span class="text-white">;</span>
<span class="text-gray-500">6.</span> 
<span class="text-gray-500">7.</span>             <span class="text-purple-400">const</span> scriptElement = document.createElement<span class="text-white">(script);</span>
<span class="text-gray-500">8.</span>             scriptElement.src = <span class="text-green-400">&quot;https://itsdimitrie.github.io/table.one-widget-test/embed.js&quot;</span><span class="text-white">;</span>
<span class="text-gray-500">9.</span>             <span class="text-gray-500">// scriptElement.src = &quot;http://localhost:5173/table.one-widget-test/embed.js&quot;;</span>
<span class="text-gray-500">10.</span> 
<span class="text-gray-500">11.</span>            firstScript.parentNode?.insertBefore<span class="text-white">(scriptElement, firstScript);</span>
<span class="text-gray-500">12.</span>        <span class="text-white">})(document, </span><span class="text-green-400">&quot;script&quot;</span><span class="text-white">, </span><span class="text-green-400">&quot;reservationWidgetScript&quot;</span><span class="text-white">);</span>
<span class="text-gray-500">13.</span>    <span class="text-white">});</span>
<span class="text-gray-500">14.</span> <span class="text-blue-400">&lt;/script&gt;</span>
<span class="text-gray-500">15.</span> <span class="text-blue-400">&lt;div</span> class=<span class="text-green-400">&quot;widget-data&quot;</span> restoId=`,
                                    79,
                                )),
                            D('span', vl, '"' + Ht(e.restoId) + '"', 1),
                            t[7] || (t[7] = Ze(' color=')),
                            D('span', wl, '"' + Ht(e.color) + '"', 1),
                            t[8] ||
                                (t[8] = D(
                                    'span',
                                    { class: 'text-blue-400' },
                                    '></div>',
                                    -1,
                                )),
                        ]),
                    ]),
                    D(
                        'button',
                        {
                            onClick:
                                t[2] ||
                                (t[2] = (...o) =>
                                    e.copyCode && e.copyCode(...o)),
                            class: 'flex ml-auto mr-auto mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-xl font-medium rounded',
                        },
                        Ht(e.copyButtonText),
                        1,
                    ),
                ]),
            ]),
        ])
    );
}
const Tl = hl(pl, [['render', Sl]]);
ul(Tl).mount('#app');
