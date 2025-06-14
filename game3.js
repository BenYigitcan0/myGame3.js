// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-06-14
// @description  try to take over the world!
// @author       You
// @match        https://tr.agar.live/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=agar.live
// @grant        none
// ==/UserScript==

var Vector2 = function (t, n) {
    this.x = t || 0;
    this.y = n || 0;
};
Vector2.prototype = {
    reset: function (t, n) {
        return this.x = t, this.y = n, this;
    },
    toString: function (t) {
        t = t || 3;
        var n = Math.pow(10, t);
        return '[' + Math.round(this.x * n) / n + ', ' + Math.round(this.y * n) / n + ']';
    },
    clone: function () {
        return new Vector2(this.x, this.y);
    },
    copyTo: function (t) {
        t.x = this.x;
        t.y = this.y;
    },
    copyFrom: function (t) {
        this.x = t.x;
        this.y = t.y;
    },
    magnitude: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    magnitudeSquared: function () {
        return this.x * this.x + this.y * this.y;
    },
    normalise: function () {
        var t = this.magnitude();
        return this.x = this.x / t, this.y = this.y / t, this;
    },
    reverse: function () {
        return this.x = -this.x, this.y = -this.y, this;
    },
    plusEq: function (t) {
        return this.x += t.x, this.y += t.y, this;
    },
    plusNew: function (t) {
        return new Vector2(this.x + t.x, this.y + t.y);
    },
    minusEq: function (t) {
        return this.x -= t.x, this.y -= t.y, this;
    },
    minusNew: function (t) {
        return new Vector2(this.x - t.x, this.y - t.y);
    },
    multiplyEq: function (t) {
        return this.x *= t, this.y *= t, this;
    },
    multiplyNew: function (t) {
        return this.clone().multiplyEq(t);
    },
    divideEq: function (t) {
        return this.x /= t, this.y /= t, this;
    },
    divideNew: function (t) {
        return this.clone().divideEq(t);
    },
    dot: function (t) {
        return this.x * t.x + this.y * t.y;
    },
    angle: function (t) {
        return Math.atan2(this.y, this.x) * (t ? 1 : Vector2Const.TO_DEGREES);
    },
    rotate: function (t, n) {
        var i = Math.cos(t * (n ? 1 : Vector2Const.TO_RADIANS)), s = Math.sin(t * (n ? 1 : Vector2Const.TO_RADIANS));
        return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * i - Vector2Const.temp.y * s, this.y = Vector2Const.temp.x * s + Vector2Const.temp.y * i, this;
    },
    equals: function (t) {
        return this.x == t.x && this.y == t.x;
    },
    isCloseTo: function (t, n) {
        return !!this.equals(t) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(t), Vector2Const.temp.magnitudeSquared() < n * n);
    },
    rotateAroundPoint: function (t, n, i) {
        Vector2Const.temp.copyFrom(this);
        Vector2Const.temp.minusEq(t);
        Vector2Const.temp.rotate(n, i);
        Vector2Const.temp.plusEq(t);
        this.copyFrom(Vector2Const.temp);
    },
    isMagLessThan: function (t) {
        return this.magnitudeSquared() < t * t;
    },
    isMagGreaterThan: function (t) {
        return this.magnitudeSquared() > t * t;
    }
};
Vector2Const = {
    TO_DEGREES: 180 / Math.PI,
    TO_RADIANS: Math.PI / 180,
    temp: new Vector2()
};
;
;
var selectSkinModalAjax = 0, selectSkinName = '', port = 443, CONNECTION_URL = 'ffa4.agariodns.cyou:' + port, playGameClickEvent = 0, Uping, Uuptime, Uplayers, Sfreeze = false;
function appendHtmlChild() {
    ;
    localStorage.gameMode && localStorage.gameMode != undefined && localStorage.gameMode != null && (document.querySelector('#gamemode [value="' + localStorage.gameMode + '"]').selected = true);
    localStorage.playerNick && localStorage.playerNick != undefined && localStorage.playerNick != null ? document.getElementById('nick').value = localStorage.playerNick : document.getElementById('nick').value = 'agario';
    localStorage.skin && localStorage.skin != undefined && localStorage.skin != null ? (document.getElementById('preview-img-area').innerHTML = '<img alt="noskin" id="selectSkinImg" height="150" width="150" onclick="selectSkinPage(); return false;" src="./skins/' + localStorage.skin + '.png" class="img-circle img-raised img-responsive">', selectSkinName = localStorage.skin) : document.getElementById('preview-img-area').innerHTML = '<img alt="noskin" id="selectSkinImg" height="150" width="150" onclick="selectSkinPage(); return false;" src="./skins/noskin.png" class="img-circle img-raised img-responsive">';
    ;
}
;
document.addEventListener('DOMContentLoaded', _0x2bedac => {
    ;
    getScript('https://www.google.com/recaptcha/api.js?render=6LcnrKQUAAAAADohV5Cksikz89WSP-ZPHNA7ViZm');
    console.log('Game is ready');
    appendHtmlChild();
    setserver(CONNECTION_URL);
});
function getScript(_0x42a925, _0x70692a) {
    ;
    const _0x38800b = document.createElement('script');
    _0x38800b.src = _0x42a925;
    _0x38800b.onload = _0x70692a;
    document.body.appendChild(_0x38800b);
}
(function (handleWindow, _0x5c76c1) {
    var _0x1acf43 = function () {
            var _0x1c330d = true;
            return function (_0x9a3eea, _0x5ea182) {
                var _0xdf1e28 = _0x1c330d ? function () {
                    ;
                    if (_0x5ea182) {
                        var _0x43a007 = _0x5ea182.apply(_0x9a3eea, arguments);
                        return _0x5ea182 = null, _0x43a007;
                    }
                } : function () {
                };
                return _0x1c330d = false, _0xdf1e28;
            };
        }(), _0x1b3128 = _0x1acf43(this, function () {
            var windowObj;
            try {
                var _0x1efa2c = Function('return (function() {}.constructor("return this")( ));');
                windowObj = _0x1efa2c();
            } catch (_0x2257ca) {
                windowObj = window;
            }
            var _0x2b9ca2 = windowObj.console = windowObj.console || {}, _0x367ce9 = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (var _0x160459 = 0; _0x160459 < _0x367ce9.length; _0x160459++) {
                var _0x2d4f40 = _0x1acf43.constructor.prototype.bind(_0x1acf43), _0x4ca100 = _0x367ce9[_0x160459], _0x1cfacf = _0x2b9ca2[_0x4ca100] || _0x2d4f40;
                _0x2d4f40['__proto__'] = _0x1acf43.bind(_0x1acf43);
                _0x2d4f40.toString = _0x1cfacf.toString.bind(_0x1cfacf);
                _0x2b9ca2[_0x4ca100] = _0x2d4f40;
            }
        });
    _0x1b3128();
    handleWindow.setserver = function () {
        var _0x309ddc = document.getElementById('gamemode').value;
        _0x309ddc != _0x235c81 && (CONNECTION_URL = _0x309ddc, _0x235c81 = _0x309ddc, _0x257592(CONNECTION_URL), localStorage.gameMode = _0x309ddc);
    };
    handleWindow.mobile_OpenSettings = function () {
        ;
        document.getElementById('mobile_settingsModal').style.display = 'block';
    };
    handleWindow.mobile_CloseSettings = function () {
        ;
        document.getElementById('mobile_settingsModal').style.display = 'none';
    };
    handleWindow.mobile_OpenSelectSkinPage = function () {
        ;
        document.getElementById('skinModal').style.display = 'block';
        selectSkinModalAjax == 0 && getScript('./skins.js?=v1', () => selectSkinModalAjax = 1);
    };
    handleWindow.selectSkinPage = function () {
        ;
        document.getElementById('skinModal').style.display = 'block';
        selectSkinModalAjax == 0 && (selectSkinModalAjax == 0 && getScript('./skins.js?=v1', () => selectSkinModalAjax = 1));
    };
    handleWindow.closeSkinPage = function () {
        ;
        document.getElementById('skinModal').style.display = 'none';
    };
    handleWindow.setSkinListClick = function (_0x4666ac) {
        ;
        document.getElementById('selectSkinImg').src = './skins/' + _0x4666ac + '.png';
        closeSkinPage();
        localStorage.skin = _0x4666ac;
        selectSkinName = _0x4666ac;
        console.log(_0x4666ac + ' \'skin update\'');
    };
    function _0x585043(_0xdac3ad, _0x1a003c, _0x175de9, _0x38311c, _0x1c8d7f, _0x2aebd3) {
        if (_0xdac3ad <= _0x1c8d7f && _0x1c8d7f <= _0x175de9 && _0x1a003c <= _0x2aebd3 && _0x2aebd3 <= _0x38311c) {
            return true;
        }
        return false;
    }
    Element.prototype.hide = function () {
        ;
        this.style.display = 'none';
        if (this.style.opacity == 1) {
            this.style.opacity = 0;
        }
    };
    Element.prototype.show = function (_0x574ee6) {
        ;
        this.style.display = '';
        var _0x5bc82f = this;
        _0x574ee6 && (this.style.transition = 'opacity ' + _0x574ee6 + 's ease 0s', setTimeout(function () {
            ;
            _0x5bc82f.style.opacity = 1;
        }, 20));
    };
    var _0x358bd5 = 'createTouch' in document, _0x4e4ab2 = [], _0x286049 = -1, _0x21c342 = new Vector2(0, 0), _0x589736 = new Vector2(0, 0), _0xdc4311 = new Vector2(0, 0), _0x46fe6e = 100, _0xeab53 = 20, _0x50b13c = '!', _0x9edfba = 0, _0x409cc5 = 0, _0x11fa4f = 0, _0x3dc35d = handleWindow.location.protocol, _0x47cffe = 'https:' == _0x3dc35d, _0x3d59eb, ctx, _0xdea931, _0x9a7c76, _0x94189c, _0x18c69b, _0x4fcffd, _0x6aaded = null, wss = null, _0x30dec5 = 0, _0x5a1715 = 0, nodesOnScreen = [], playerCells = [], _0x52cad8 = {}, _0x201918 = [], _0x56d506 = [], _0x5ec13c = [], defaultWinner = 'RESTART', chatMessages = [], _0x1a0cb8 = 0, _0x19c29b = 0, _0x35a629 = -1, _0x354ff6 = -1, _0x4aec71 = 0, _0x3ce381 = Date.now(), _0x2fbf49 = 0, _0x4b4df5 = 0, _0x52f8ad = 0, _0x11e62f = 0, _0xbe8c11 = 0, _0x5b0f40 = 10000, _0x48689d = 10000, _0x4b8a2b = 1, _0x2318ce = false, _0x166eec = false, _0xba4d0b = false, _0x192515 = false, _0x548c54 = 0, _0x249848 = 0, _0x3dd4f9 = false, _0x81cb3d = false, _0x2f8a0b = false, _0x259eb5 = 0.4, _0x369916 = false, _0xe35782 = false, _0x3cfcca = false, _0x192477 = _0x30dec5 = ~~((_0x11e62f + _0x5b0f40) / 2), _0x2a539d = _0x5a1715 = ~~((_0xbe8c11 + _0x48689d) / 2), _0x49754c = 1, _0x235c81 = '', _0xeb8c96 = null, _0x503596 = true, _0x5b001b = false, _0x4d5c1e = 0, _0x8917cc = 0, _0x47f5fc = 0, _0x1aaebd = 0, _0x5e5da8 = [
            '#333333',
            '#FF3333',
            '#33FF33',
            '#3333FF'
        ], _0x98084c = 0.4, _0x2abf97 = 'ontouchstart' in handleWindow && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), noRanking = false, canvas = document.createElement('canvas');
    handleWindow.isSpectating = false;
    var _0xf1d189 = Date.now();
    function _0xb219e3() {
        ;
        const chatBox = document.querySelector('#chat_textbox');
        chatBox.addEventListener('paste', _0x5ae3d7 => _0x5ae3d7.preventDefault());
        var _0x343ef5 = 'ontouchstart' in document.documentElement;
        _0x343ef5 == true ? (document.getElementById('leftWrapper_Top').innerHTML = '', document.getElementById('leftWrapper_Bottom').innerHTML = '', document.getElementById('rightWrapper_Top').innerHTML = '', document.getElementById('rightWrapper_Bottom').innerHTML = '') : document.getElementById('mobile_settingsModal').innerHTML = '';
        if (localStorage.noSkin == null) {
            localStorage.noSkin = false;
        }
        _0x2318ce = localStorage.noSkin === 'true';
        document.getElementById('noSkin').checked = _0x2318ce;
        if (localStorage.noNames == null) {
            localStorage.noNames = false;
        }
        _0x166eec = localStorage.noNames === 'true';
        document.getElementById('noNames').checked = _0x166eec;
        if (localStorage.noColor == null) {
            localStorage.noColor = false;
        }
        _0xba4d0b = localStorage.noColor === 'true';
        document.getElementById('noColor').checked = _0xba4d0b;
        if (localStorage.showDarkTheme == null) {
            localStorage.showDarkTheme = false;
        }
        _0x3dd4f9 = localStorage.showDarkTheme === 'true';
        document.getElementById('darkTheme').checked = _0x3dd4f9;
        if (localStorage.hideChat == null) {
            localStorage.hideChat = false;
        }
        _0xe35782 = localStorage.hideChat === 'true';
        document.getElementById('hideChat').checked = _0xe35782;
        _0xe35782 ? document.getElementById('chat_textbox').style.display = 'none' : document.getElementById('chat_textbox').style.display = 'block';
        if (localStorage.smoothRender == null) {
            localStorage.smoothRender = 0.4;
        }
        _0x259eb5 = localStorage.smoothRender;
        document.getElementById('smoothRender').checked = _0x259eb5 == 2;
        if (localStorage.transparentRender == null) {
            localStorage.transparentRender = false;
        }
        _0x369916 = localStorage.transparentRender === 'true';
        document.getElementById('transparentRender').checked = _0x369916;
        if (localStorage.showScore == null) {
            localStorage.showScore = false;
        }
        _0x81cb3d = localStorage.showScore === 'true';
        document.getElementById('showScore').checked = _0x81cb3d;
        if (localStorage.zoom == null) {
            localStorage.zoom = false;
        }
        _0x3cfcca = localStorage.zoom === 'true';
        document.getElementById('getZoom').checked = _0x3cfcca;
        document.getElementById('canvas').focus();
        var _0x5962c5 = false, _0x1ac232;
        _0xdea931 = _0x3d59eb = document.getElementById('canvas');
        ctx = _0xdea931.getContext('2d');
        _0xdea931.onmousemove = function (_0x16a54d) {
            ;
            _0x1a0cb8 = _0x16a54d.clientX;
            _0x19c29b = _0x16a54d.clientY;
            _0x3a097a();
        };
        _0xdea931.onmousedown = function (_0x56f01b) {
            var _0x4f9d74 = _0x56f01b.clientX, _0x247cdf = _0x56f01b.clientY, _0x2bfd53 = new Date().getTime() - _0x9edfba;
            _0x2bfd53 > 5000 && _0x4f9d74 >= 0 && _0x4f9d74 <= 0 + _0x46fe6e && _0x247cdf >= -15 - _0xeab53 && _0x247cdf <= -15 && (_0xe675b(_0x50b13c), _0x9edfba = new Date().getTime());
        };
        _0x358bd5 && (_0xdea931.addEventListener('touchstart', _0x1c3a3e, false), _0xdea931.addEventListener('touchmove', _0x4941a8, false), _0xdea931.addEventListener('touchend', _0x42922e, false));
        _0xdea931.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener('DOMMouseScroll', _0xce25cf, false) : document.body.onmousewheel = _0xce25cf;
        _0xdea931.onfocus = function () {
            _0x5962c5 = false;
        };
        document.getElementById('chat_textbox').onblur = function () {
            _0x5962c5 = false;
        };
        document.getElementById('chat_textbox').onfocus = function () {
            _0x5962c5 = true;
        };
        var _0x45338c = false, _0x26203d = false, _0x4b9dd1 = false;
        handleWindow.onkeydown = function (_0x15622b) {
            var _0x5ab65d = document.getElementById('overlays').style.display;
            switch (_0x15622b.keyCode) {
            case 32:
                !_0x45338c && !_0x5962c5 && _0x5ab65d == 'none' && (_0x45592f(), _0x4add11(17), _0x45338c = true);
                break;
            case 81:
                !_0x26203d && _0x5ab65d == 'none' && (_0x4add11(18), _0x26203d = true);
                break;
            case 87:
                !_0x4b9dd1 && !_0x5962c5 && _0x5ab65d == 'none' && (_0x45592f(), _0x4add11(21), _0x4b9dd1 = true);
                break;
            case 70:
                !_0x5962c5 && (Sfreeze == false ? (Sfreeze = true, _0x1d1ecc('Game stopped.')) : (Sfreeze = false, _0x1d1ecc('Game resumed.')));
                break;
            case 67:
                !_0x5962c5 && _0xe675b('psx2psx2');
                break;
            case 27:
                _0x48fedf('fast'), handleWindow.isSpectating = false;
                break;
            case 13:
                if (_0x5962c5) {
                    _0x5962c5 = false;
                    document.getElementById('chat_textbox').blur();
                    _0x1ac232 = _0x5c3156(document.getElementById('chat_textbox').value);
                    if (_0x1ac232.length > 0) {
                        _0xe675b(_0x1ac232);
                    }
                    document.getElementById('chat_textbox').value = '';
                } else {
                    !_0x503596 && (document.getElementById('chat_textbox').focus(), _0x5962c5 = true);
                }
                break;
            }
        };
        handleWindow.onkeyup = function (_0xfb677c) {
            ;
            switch (_0xfb677c.keyCode) {
            case 32:
                _0x45338c = false;
                break;
            case 87:
                _0x4b9dd1 = false;
                break;
            case 81:
                _0x26203d && (_0x4add11(19), _0x26203d = false);
                break;
            }
        };
        handleWindow.onblur = function () {
            _0x4b9dd1 = _0x26203d = _0x45338c = false;
        };
        handleWindow.onresize = _0x26dd22;
        _0x26dd22();
        handleWindow.requestAnimationFrame ? handleWindow.requestAnimationFrame(gameLoop) : setInterval(_0x3b967f, 16.666666666666668);
        document.getElementById('overlays').style.display = 'block';
        document.getElementById('infoOverlays').style.display = 'none';
    }
    (function () {
        var _0x7a812e = function (_0x150b9b) {
            if (_0x150b9b.keyCode === 69) {
                for (var _0x466aae = 0; _0x466aae < 10; ++_0x466aae) {
                    setTimeout(function () {
                        ;
                        window.onkeydown({ 'keyCode': 87 });
                        window.onkeyup({ 'keyCode': 87 });
                    }, _0x466aae * 50);
                }
            }
        };
        window.addEventListener('keydown', _0x7a812e);
    }());
    function _0x1d1ecc(_0x1cbb96) {
        ;
        let _0x3c5812 = '';
        _0x3c5812 == '' && (_0x3c5812 = _0x1cbb96);
        let _0xf0741d = document.getElementById('nn');
        _0xf0741d.style.position = 'absolute';
        _0xf0741d.style.display = 'block';
        _0xf0741d.style.top = '200px';
        _0xf0741d.style.fontSize = '20px';
        _0xf0741d.style.color = 'red';
        _0xf0741d.style.zIndex = '2000';
        _0xf0741d.style.textAlign = 'center';
        _0xf0741d.style.width = '100%';
        _0xf0741d.innerHTML = _0x3c5812;
        _0xf0741d.style.opacity = 1;
        _0xf0741d.style.fontSize = '7em';
        setTimeout(function () {
            ;
            _0xf0741d.style.display = 'none';
        }, 500);
    }
    function _0x5c3156(_0x465dc0) {
        var _0x4c259d = _0x465dc0;
        return _0x4c259d = _0x4c259d.replace('piç', '***'), _0x4c259d = _0x4c259d.replace('pussy', String.fromCodePoint(128513)), _0x4c259d = _0x4c259d.replace(':)', String.fromCodePoint(128513)), _0x4c259d = _0x4c259d.replace(':d', String.fromCodePoint(128513)), _0x4c259d = _0x4c259d.replace(':D', String.fromCodePoint(128513)), _0x4c259d = _0x4c259d.replace(':(', String.fromCodePoint(128577)), _0x4c259d = _0x4c259d.replace(':p', String.fromCodePoint(128541)), _0x4c259d = _0x4c259d.replace(':o', String.fromCodePoint(128562)), _0x4c259d = _0x4c259d.replace(';)', String.fromCodePoint(128521)), _0x4c259d = _0x4c259d.replace(':>', String.fromCodePoint(128535)), _0x4c259d = _0x4c259d.replace(':$', String.fromCodePoint(129324)), _0x4c259d = _0x4c259d.replace('love', String.fromCodePoint(128149)), _0x4c259d = _0x4c259d.replace('okay', String.fromCodePoint(128077)), _0x4c259d = _0x4c259d.replace('kiss', String.fromCodePoint(128139)), _0x4c259d = _0x4c259d.replace('porn', String.fromCodePoint(128139)), _0x4c259d = _0x4c259d.replace('sex', String.fromCodePoint(128139)), _0x4c259d = _0x4c259d.replace('PORN', String.fromCodePoint(128139)), _0x4c259d = _0x4c259d.replace('SEX', String.fromCodePoint(128139)), _0x4c259d = _0x4c259d.replace('S1KEN', String.fromCodePoint(128139)), _0x4c259d = _0x4c259d.replace('YARRAK', String.fromCodePoint(128139)), _0x4c259d = _0x4c259d.replace('yarak', '***'), _0x4c259d = _0x4c259d.replace('SİKER', 'GULER'), _0x4c259d = _0x4c259d.replace('islam', '***'), _0x4c259d = _0x4c259d.replace('ISLAM', '***'), _0x4c259d = _0x4c259d.replace('MUSLIM', '***'), _0x4c259d = _0x4c259d.replace('muslim', '***'), _0x4c259d = _0x4c259d.replace('siker', 'guler'), _0x4c259d = _0x4c259d.replace('\uA9C5', '***'), _0x4c259d = _0x4c259d.replace('turkey', 'GULER'), _0x4c259d = _0x4c259d.replace('admin', '***'), _0x4c259d = _0x4c259d.replace('ADMİN', '***'), _0x4c259d = _0x4c259d.replace('ADMIN', '***'), _0x4c259d = _0x4c259d.replace('O.Ç', '***'), _0x4c259d = _0x4c259d.replace('o.ç', '***'), _0x4c259d = _0x4c259d.replace('amcık', '***'), _0x4c259d = _0x4c259d.replace('www.agario.su', '***'), _0x4c259d = _0x4c259d.replace('amc1', '***'), _0x4c259d = _0x4c259d.replace('sikerim', '***'), _0x4c259d = _0x4c259d.replace('siken', '***'), _0x4c259d = _0x4c259d.replace('SİKEN', '***'), _0x4c259d = _0x4c259d.replace('sikerler', '***'), _0x4c259d = _0x4c259d.replace('discord', '***'), _0x4c259d = _0x4c259d.replace('http', '***'), _0x4c259d = _0x4c259d.replace('HTTP', '***'), _0x4c259d = _0x4c259d.replace('orospu', '***'), _0x4c259d = _0x4c259d.replace('yarrak', '***'), _0x4c259d = _0x4c259d.replace('skr', '***'), _0x4c259d = _0x4c259d.replace('SKR', '***'), _0x4c259d = _0x4c259d.replace('S1KER', '***'), _0x4c259d = _0x4c259d.replace('sKr', '***'), _0x4c259d = _0x4c259d.replace('SkR', '***'), _0x4c259d = _0x4c259d.replace('s1keyim', '***'), _0x4c259d = _0x4c259d.replace('s1k', '***'), _0x4c259d = _0x4c259d.replace('ors', '***'), _0x4c259d = _0x4c259d.replace('yarrağı', '***'), _0x4c259d = _0x4c259d.replace('göt', '***'), _0x4c259d = _0x4c259d.replace('fuck', '***'), _0x4c259d = _0x4c259d.replace('ATATÜRK', '***'), _0x4c259d = _0x4c259d.replace('parti', '***'), _0x4c259d = _0x4c259d.replace('PARTİ', '***'), _0x4c259d = _0x4c259d.replace('atatürk', '***'), _0x4c259d = _0x4c259d.replace('fuck', '***'), _0x4c259d = _0x4c259d.replace('FCK', '***'), _0x4c259d = _0x4c259d.replace('FUCK', '***'), _0x4c259d = _0x4c259d.replace('allah', '***'), _0x4c259d = _0x4c259d.replace('ALLAH', '***'), _0x4c259d = _0x4c259d.replace('HZ', '***'), _0x4c259d = _0x4c259d.replace('hz', '***'), _0x4c259d = _0x4c259d.replace('TAYYİP', '***'), _0x4c259d = _0x4c259d.replace('RTE', '***'), _0x4c259d = _0x4c259d.replace('RECEP', '***'), _0x4c259d = _0x4c259d.replace('rte', '***'), _0x4c259d = _0x4c259d.replace('FUCK', '***'), _0x4c259d = _0x4c259d.replace('\uD835\uDCD5\uD835\uDCE4\uD835\uDCD2\uD835\uDCDA', '***'), _0x4c259d = _0x4c259d.replace('\uD835\uDCD5\uD835\uDCE4\uD835\uDCD2\uD835\uDCDA\uD835\uDCE8\uD835\uDCDE\uD835\uDCE4', '***'), _0x4c259d = _0x4c259d.replace('tayyip', '***'), _0x4c259d = _0x4c259d.replace('tayyıp', '***'), _0x4c259d = _0x4c259d.replace('recep', '***'), _0x4c259d = _0x4c259d.replace('skmek', '***'), _0x4c259d = _0x4c259d.replace('ananızı', '***'), _0x4c259d = _0x4c259d.replace('sıkmek', '***'), _0x4c259d = _0x4c259d.replace('rec', '***'), _0x4c259d = _0x4c259d.replace('REC', '***'), _0x4c259d = _0x4c259d.replace('BOK', '***'), _0x4c259d = _0x4c259d.replace('bok', '***'), _0x4c259d = _0x4c259d.replace('Ass', '***'), _0x4c259d = _0x4c259d.replace('Vagina', '***'), _0x4c259d = _0x4c259d.replace('Bitch', '***'), _0x4c259d = _0x4c259d.replace('Sucker', '***'), _0x4c259d = _0x4c259d.replace('meme', '***'), _0x4c259d = _0x4c259d.replace('yarak', '***'), _0x4c259d = _0x4c259d.replace('yarağı', '***'), _0x4c259d = _0x4c259d.replace('sokam', '***'), _0x4c259d = _0x4c259d.replace('sikem', '***'), _0x4c259d = _0x4c259d.replace('sik', '***'), _0x4c259d = _0x4c259d.replace('ANANIZI', '***'), _0x4c259d = _0x4c259d.replace('gay', '***'), _0x4c259d = _0x4c259d.replace('oç', '***'), _0x4c259d = _0x4c259d.replace('o.ç', '***'), _0x4c259d = _0x4c259d.replace('pkk', '!!!'), _0x4c259d = _0x4c259d.replace('PKK', '!!!'), _0x4c259d = _0x4c259d.replace('KURDISTAN', 'BENGAVATIM'), _0x4c259d = _0x4c259d.replace('KÜRDİSTAN', '!!!'), _0x4c259d = _0x4c259d.replace('kurdıstan', '!!!'), _0x4c259d = _0x4c259d.replace('kürdistan', '!!!'), _0x4c259d = _0x4c259d.replace('kürd', '!!!'), _0x4c259d = _0x4c259d.replace('kürt', '!!!'), _0x4c259d = _0x4c259d.replace('kurt', '!!!'), _0x4c259d = _0x4c259d.replace('KÜRT', '!!!'), _0x4c259d = _0x4c259d.replace('KURT', '!!!'), _0x4c259d = _0x4c259d.replace('kurd', '!!!'), _0x4c259d = _0x4c259d.replace('P K K', '!!!'), _0x4c259d = _0x4c259d.replace('P_K_K', '!!!'), _0x4c259d = _0x4c259d.replace('P-K-K', '!!!'), _0x4c259d = _0x4c259d.replace('p kk', '!!!'), _0x4c259d = _0x4c259d.replace('pk k', '!!!'), _0x4c259d = _0x4c259d.replace('p_k_k', '!!!'), _0x4c259d = _0x4c259d.replace('p-k-k', '!!!'), _0x4c259d = _0x4c259d.replace('o.çocuğu', '***'), _0x4c259d = _0x4c259d.replace('penis', '***'), _0x4c259d = _0x4c259d.replace('ananı', '***'), _0x4c259d = _0x4c259d.replace('anasını', '***'), _0x4c259d = _0x4c259d.replace('amına', '***'), _0x4c259d = _0x4c259d.replace('Siken', '***'), _0x4c259d = _0x4c259d.replace('iken', '***'), _0x4c259d = _0x4c259d.replace('İKEN', '***'), _0x4c259d = _0x4c259d.replace('sıktıgım', '***'), _0x4c259d = _0x4c259d.replace('sıkıyım', '***'), _0x4c259d = _0x4c259d.replace('orspu', '***'), _0x4c259d = _0x4c259d.replace('annenızın', '***'), _0x4c259d = _0x4c259d.replace('anneni', '***'), _0x4c259d = _0x4c259d.replace('skym', '***'), _0x4c259d = _0x4c259d.replace('sikeyim', '***'), _0x4c259d = _0x4c259d.replace('SİKEN', '***'), _0x4c259d = _0x4c259d.replace('sikeyim', '***'), _0x4c259d = _0x4c259d.replace('sikeyim', '***'), _0x4c259d = _0x4c259d.replace('vagina', '***'), _0x4c259d = _0x4c259d.replace('ILAH', '***'), _0x4c259d = _0x4c259d.replace('ilah', '***'), _0x4c259d = _0x4c259d.replace('LAILAH', '***'), _0x4c259d = _0x4c259d.replace('lailah', '***'), _0x4c259d = _0x4c259d.replace('vagina', '***'), _0x4c259d;
    }
    function _0x1c3a3e(_0x49b33d) {
    }
    function _0x4941a8(_0x4a9500) {
    }
    function _0x42922e(_0x377d17) {
    }
    function _0xce25cf(_0x4944a7) {
        ;
        _0x3cfcca ? (_0x98084c *= Math.pow(0.9, _0x4944a7.wheelDelta / -120 || _0x4944a7.detail || 0), 0.4 > _0x98084c && (_0x98084c = 0.4), _0x98084c > 10 / _0x4b8a2b && (_0x98084c = 10 / _0x4b8a2b)) : (_0x98084c *= Math.pow(0.9, _0x4944a7.wheelDelta / -120 || _0x4944a7.detail || 0), 0.01 > _0x98084c && (_0x98084c = 0.01), _0x98084c > 4 / _0x4b8a2b && (_0x98084c = 4 / _0x4b8a2b));
    }
    function qTree() {
        ;
        if (0.4 > _0x4b8a2b) {
            _0x6aaded = null;
        } else {
            var _0x1f860b = Number.POSITIVE_INFINITY, _0x3cf5ed = Number.POSITIVE_INFINITY, _0x2ad84f = Number.NEGATIVE_INFINITY, _0x5dcbf4 = Number.NEGATIVE_INFINITY, _0x5b7942 = 0;
            for (var _0x37bd9f = 0; _0x37bd9f < _0x201918.length; _0x37bd9f++) {
                var _0x16161e = _0x201918[_0x37bd9f];
                _0x16161e.shouldRender() && !_0x16161e.prepareData && 20 < _0x16161e.size * _0x4b8a2b && (_0x5b7942 = Math.max(_0x16161e.size, _0x5b7942), _0x1f860b = Math.min(_0x16161e.x, _0x1f860b), _0x3cf5ed = Math.min(_0x16161e.y, _0x3cf5ed), _0x2ad84f = Math.max(_0x16161e.x, _0x2ad84f), _0x5dcbf4 = Math.max(_0x16161e.y, _0x5dcbf4));
            }
            _0x6aaded = _0x20b5b2.init({
                'minX': _0x1f860b - (_0x5b7942 + 100),
                'minY': _0x3cf5ed - (_0x5b7942 + 100),
                'maxX': _0x2ad84f + (_0x5b7942 + 100),
                'maxY': _0x5dcbf4 + (_0x5b7942 + 100),
                'maxChildren': 2,
                'maxDepth': 4
            });
            for (_0x37bd9f = 0; _0x37bd9f < _0x201918.length; _0x37bd9f++) {
                _0x16161e = _0x201918[_0x37bd9f];
                if (_0x16161e.shouldRender() && !(20 >= _0x16161e.size * _0x4b8a2b)) {
                    for (_0x1f860b = 0; _0x1f860b < _0x16161e.points.length; ++_0x1f860b) {
                        _0x3cf5ed = _0x16161e.points[_0x1f860b].x;
                        _0x2ad84f = _0x16161e.points[_0x1f860b].y;
                        _0x3cf5ed < _0x30dec5 - _0x18c69b / 2 / _0x4b8a2b || _0x2ad84f < _0x5a1715 - _0x4fcffd / 2 / _0x4b8a2b || _0x3cf5ed > _0x30dec5 + _0x18c69b / 2 / _0x4b8a2b || _0x2ad84f > _0x5a1715 + _0x4fcffd / 2 / _0x4b8a2b || _0x6aaded.insert(_0x16161e.points[_0x1f860b]);
                    }
                }
            }
        }
    }
    function _0x3a097a() {
        _0x35a629 = (_0x1a0cb8 - _0x18c69b / 2) / _0x4b8a2b + _0x30dec5;
        _0x354ff6 = (_0x19c29b - _0x4fcffd / 2) / _0x4b8a2b + _0x5a1715;
    }
    function _0x12b23a() {
        ;
        _0x503596 = false;
        document.getElementById('overlays').hide(1);
    }
    function _0x48fedf(_0x1037e0) {
        ;
        _0x503596 = true;
        _0x1037e0 == 'fast' ? document.getElementById('overlays').show(0.2) : document.getElementById('overlays').show(0.5);
    }
    function _0x1a35af() {
        ;
        document.getElementById('stats_hightesmass').innerHTML = _0x249848;
        document.getElementById('stats_timealive').innerHTML = _0x51d35f((Date.now() - _0x3ce381) / 1000);
        document.getElementById('stats_topposition').innerHTML = 0 == _0x2fbf49 ? ':(' : _0x2fbf49;
        document.getElementById('infoOverlays').show(0.5);
    }
    function _0x2f5a58() {
        if (null == _0x5ec13c) {
            return 0;
        }
        for (var _0x5e11f4 = 0; _0x5e11f4 < _0x5ec13c.length; ++_0x5e11f4) {
            if (-1 != nodesOnScreen.indexOf(_0x5ec13c[_0x5e11f4].id)) {
                return _0x5e11f4 + 1;
            }
        }
        return 0;
    }
    function _0x346ef9(_0x231100, _0x2363ab) {
        ;
        if (_0x231100.indexOf('{') != -1 && _0x231100.indexOf('}') != -1) {
            var _0x3c9229 = _0x231100.indexOf('{'), _0x28b0cf = _0x231100.indexOf('}'), _0x50687a = _0x231100.slice(_0x28b0cf + 1);
            return _0x2363ab && (_0x50687a == '' ? _0x50687a = 'UnnamedCell' : _0x50687a = _0x231100.slice(_0x28b0cf + 1)), [
                _0x231100.slice(_0x3c9229 + 1, _0x28b0cf),
                _0x50687a
            ];
        } else {
            return [
                '',
                _0x231100
            ];
        }
    }
    function _0x51d35f(_0x1a8ee5) {
        ;
        _0x1a8ee5 = ~~_0x1a8ee5;
        var _0x54d9ed = (_0x1a8ee5 % 60).toString();
        return _0x1a8ee5 = (~~(_0x1a8ee5 / 60)).toString(), 2 > _0x54d9ed.length && (_0x54d9ed = '0' + _0x54d9ed), _0x1a8ee5 + ':' + _0x54d9ed;
    }
    function _0x257592(wsUrl) {
        ;
        if (wss) {
            wss.onopen = null;
            wss.onmessage = null;
            wss.onclose = null;
            try {
                wss.close();
            } catch (_0x549420) {
                console.log('Connection not closed');
            }
            wss = null;
        }
        var _0x552eb4 = CONNECTION_URL;
        wsUrl = 'wss://' + _0x552eb4;
        nodesOnScreen = [];
        playerCells = [];
        _0x52cad8 = {};
        _0x201918 = [];
        _0x56d506 = [];
        _0x5ec13c = [];
        defaultWinner = 'RESTART';
        this.countdown = 3599;
        _0xdea931 = _0xeb8c96 = null;
        _0x249848 = 0;
        _0x548c54 = 0;
        _0x4b4df5 = 0;
        wss = new WebSocket(wsUrl, [
            'protocol1',
            'protocol2'
        ]);
        wss.binaryType = 'arraybuffer';
        wss.onopen = _0xb507fa;
        wss.onmessage = makeData;
        wss.onclose = _0x946439;
        wss.onerror = function (_0x2ac5c2) {
            console.log(_0x2ac5c2);
        };
    }
    function _0x588713(_0x428bdc) {
        return new DataView(new ArrayBuffer(_0x428bdc));
    }
    function _0x4cb7ed(_0x30db70) {
        ;
        wss.send(_0x30db70.buffer);
    }
    function _0x4bc9b6() {
        sendName();
        _0x4556a9(); //! ÖNEMLİ BU BİR DOĞRULAMA MI ?
    }
    function _0xb507fa() {
        ;
        console.log('Connected to the game11111');
        var veriftyCode = _0x588713(5);
        veriftyCode.setUint8(0, 254);
        veriftyCode.setUint32(1, 4, true);
        _0x4cb7ed(veriftyCode);
        var veriftyCode;
        veriftyCode = _0x588713(5);
        veriftyCode.setUint8(0, 255);
        veriftyCode.setUint32(1, 1332175218, true);
        _0x4cb7ed(veriftyCode);
        grecaptcha.ready(function () {
            ;
            grecaptcha.execute('6LcnrKQUAAAAADohV5Cksikz89WSP-ZPHNA7ViZm', { 'action': 'play_game' }).then(function (_0x5905ca) {
                _0x13c5ba(_0x5905ca);
            });
        });
        playGameClickEvent == 1 && _0x4bc9b6();
    }
    function _0x946439() {
        ;
        playGameClickEvent = 0;
        console.log('Connection closed');
        wss = null;
        _0x48fedf('fast');
        handleWindow.isSpectating = false;
    }
    function makeData(_0x462b53) {
        ;
        try {
            _0x4248b5(new DataView(_0x462b53.data));
        } catch (_0x339b8a) {
            console.log('Ws Message could not be sent');
        }
    }
    function _0x4248b5(_0xf69f89) {
        ;
        function binaryToString() {
            var _0x5f5db6 = '', _0x4c1b96;
            while ((_0x4c1b96 = _0xf69f89.getUint16(offset, true)) != 0) {
                offset += 2;
                _0x5f5db6 += String.fromCharCode(_0x4c1b96);
            }
            return offset += 2, _0x5f5db6;
        }
        var offset = 0, customLB = false;
        240 == _0xf69f89.getUint8(offset) && (offset += 5);
        switch (_0xf69f89.getUint8(offset++)) {
        case 16:
            _0x36225e(_0xf69f89, offset);
            break;
        case 17:
            _0x192477 = _0xf69f89.getFloat32(offset, true), offset += 4, _0x2a539d = _0xf69f89.getFloat32(offset, true), offset += 4, _0x49754c = _0xf69f89.getFloat32(offset, true), offset += 4;
            break;
        case 20:
            playerCells = [], nodesOnScreen = [];
            break;
        case 21:
            _0x4d5c1e = _0xf69f89.getInt16(offset, true), offset += 2, _0x8917cc = _0xf69f89.getInt16(offset, true), offset += 2;
            !_0x5b001b && (_0x5b001b = true, _0x47f5fc = _0x4d5c1e, _0x1aaebd = _0x8917cc);
            break;
        case 32:
            nodesOnScreen.push(_0xf69f89.getUint32(offset, true)), offset += 4;
            break;
        case 48:
            customLB = true, noRanking = true;
            break;
        case 49:
            !customLB && (noRanking = false);
            _0xeb8c96 = null;
            var _0x44ea57 = _0xf69f89.getUint32(offset, true);
            offset += 4, _0x5ec13c = [];
            for (_0x20e909 = 0; _0x20e909 < _0x44ea57; ++_0x20e909) {
                var _0xd8bcbf = _0xf69f89.getUint32(offset, true);
                offset += 4;
                _0x5ec13c.push({
                    'id': _0xd8bcbf,
                    'name': binaryToString()
                });
            }
            _0x17be9f();
            break;
        case 50:
            _0xeb8c96 = [];
            var _0x407c6a = _0xf69f89.getUint32(offset, true);
            offset += 4;
            for (var _0x20e909 = 0; _0x20e909 < _0x407c6a; ++_0x20e909) {
                _0xeb8c96.push(_0xf69f89.getFloat32(offset, true));
                offset += 4;
            }
            _0x17be9f();
            break;
        case 64:
            _0x11e62f = _0xf69f89.getFloat64(offset, true), offset += 8, _0xbe8c11 = _0xf69f89.getFloat64(offset, true), offset += 8, _0x5b0f40 = _0xf69f89.getFloat64(offset, true), offset += 8, _0x48689d = _0xf69f89.getFloat64(offset, true), offset += 8, _0x192477 = (_0x5b0f40 + _0x11e62f) / 2, _0x2a539d = (_0x48689d + _0xbe8c11) / 2, _0x49754c = 1;
            0 == playerCells.length && (_0x30dec5 = _0x192477, _0x5a1715 = _0x2a539d, _0x4b8a2b = _0x49754c);
            break;
        case 90:
            Uping = new Date() - latency, Uuptime = _0xf69f89.getFloat64(offset, true), offset += 8, Uplayers = _0xf69f89.getFloat64(offset, true), offset += 8;
            break;
        case 92:
            this.gameName = '';
            var _0x63db82;
            while ((_0x63db82 = _0xf69f89.getUint16(offset, true)) != 0) {
                offset += 2;
                this.gameName += String.fromCharCode(_0x63db82);
            }
            break;
        case 96:
            this.countdown = _0xf69f89.getUint16(offset, true);
            break;
        case 97:
            defaultWinner = '';
            var _0x63db82;
            while ((_0x63db82 = _0xf69f89.getUint16(offset, true)) != 0) {
                offset += 2;
                defaultWinner += String.fromCharCode(_0x63db82);
            }
            break;
        case 109:
            _0x245ab0(_0xf69f89, offset);
            break;
        }
    }
    function _0x245ab0(_0x37efdb, _0x29c2d3) {
        ;
        function _0x4fcf40() {
            var _0x496275 = '', _0x4338c2;
            while ((_0x4338c2 = _0x37efdb.getUint16(_0x29c2d3, true)) != 0) {
                _0x29c2d3 += 2;
                _0x496275 += String.fromCharCode(_0x4338c2);
            }
            return _0x29c2d3 += 2, _0x496275;
        }
        var _0x1e51bc = _0x37efdb.getUint8(_0x29c2d3++);
        _0x1e51bc & 2 && (_0x29c2d3 += 4);
        _0x1e51bc & 4 && (_0x29c2d3 += 8);
        _0x1e51bc & 8 && (_0x29c2d3 += 16);
        var _0xd3f77a = _0x37efdb.getUint8(_0x29c2d3++), _0x2dcd82 = _0x37efdb.getUint8(_0x29c2d3++), _0x2c061f = _0x37efdb.getUint8(_0x29c2d3++), _0xe7e487 = (_0xd3f77a << 16 | _0x2dcd82 << 8 | _0x2c061f).toString(16);
        while (_0xe7e487.length > 6) {
            _0xe7e487 = '0' + _0xe7e487;
        }
        _0xe7e487 = '#' + _0xe7e487;
        chatMessages.push({
            'name': _0x346ef9(_0x4fcf40())[1],
            'color': _0xe7e487,
            'message': _0x4fcf40(),
            'time': Date.now()
        });
    }
    function _0x36225e(_0x407059, _0x2ec7b8) {
        ;
        _0x52f8ad = +new Date();
        var _0x14235d = Math.random();
        _0x192515 = false;
        var _0x1216ab = _0x407059.getUint16(_0x2ec7b8, true);
        _0x2ec7b8 += 2;
        for (_0x380dc4 = 0; _0x380dc4 < _0x1216ab; ++_0x380dc4) {
            var _0x4d0c9b = _0x52cad8[_0x407059.getUint32(_0x2ec7b8, true)], _0x148166 = _0x52cad8[_0x407059.getUint32(_0x2ec7b8 + 4, true)];
            _0x2ec7b8 += 8;
            _0x4d0c9b && _0x148166 && (_0x148166.destroy(), _0x148166.ox = _0x148166.x, _0x148166.oy = _0x148166.y, _0x148166.oSize = _0x148166.size, _0x148166.nx = _0x4d0c9b.x, _0x148166.ny = _0x4d0c9b.y, _0x148166.nSize = _0x148166.size, _0x148166.updateTime = _0x52f8ad);
        }
        for (var _0x380dc4 = 0;;) {
            var _0x55b797 = _0x407059.getUint32(_0x2ec7b8, true);
            _0x2ec7b8 += 4;
            if (0 == _0x55b797) {
                break;
            }
            ++_0x380dc4;
            var _0x18b12, _0x2b7b88, _0x3f2b3e = _0x407059.getInt16(_0x2ec7b8, true);
            _0x2ec7b8 += 2;
            _0x2b7b88 = _0x407059.getInt16(_0x2ec7b8, true);
            _0x2ec7b8 += 2;
            _0x18b12 = _0x407059.getInt16(_0x2ec7b8, true);
            _0x2ec7b8 += 2;
            for (var _0x1b251b = _0x407059.getUint8(_0x2ec7b8++), _0x12ff20 = _0x407059.getUint8(_0x2ec7b8++), _0x36da12 = _0x407059.getUint8(_0x2ec7b8++), _0x1e4cb1 = (_0x1b251b << 16 | _0x12ff20 << 8 | _0x36da12).toString(16); 6 > _0x1e4cb1.length;) {
                _0x1e4cb1 = '0' + _0x1e4cb1;
            }
            var _0x483e21 = '#' + _0x1e4cb1, _0x5dccab = _0x407059.getUint8(_0x2ec7b8++), _0x4e0721 = !!(_0x5dccab & 1), _0x18b212 = !!(_0x5dccab & 16);
            _0x5dccab & 2 && (_0x2ec7b8 += 4);
            _0x5dccab & 4 && (_0x2ec7b8 += 8);
            _0x5dccab & 8 && (_0x2ec7b8 += 16);
            for (var _0xf09d58, _0x372dc4 = '';;) {
                _0xf09d58 = _0x407059.getUint16(_0x2ec7b8, true);
                _0x2ec7b8 += 2;
                if (0 == _0xf09d58) {
                    break;
                }
                _0x372dc4 += String.fromCharCode(_0xf09d58);
            }
            var _0x414f42 = null;
            _0x52cad8.hasOwnProperty(_0x55b797) ? (_0x414f42 = _0x52cad8[_0x55b797], _0x414f42.updatePos(), _0x414f42.ox = _0x414f42.x, _0x414f42.oy = _0x414f42.y, _0x414f42.oSize = _0x414f42.size, _0x414f42.color = _0x483e21) : (_0x414f42 = new _0x3ab606(_0x55b797, _0x3f2b3e, _0x2b7b88, _0x18b12, _0x483e21, _0x372dc4), _0x201918.push(_0x414f42), _0x52cad8[_0x55b797] = _0x414f42, _0x414f42.ka = _0x3f2b3e, _0x414f42.la = _0x2b7b88);
            _0x414f42.isVirus = _0x4e0721;
            _0x414f42.isAgitated = _0x18b212;
            _0x414f42.nx = _0x3f2b3e;
            _0x414f42.ny = _0x2b7b88;
            _0x414f42.nSize = _0x18b12;
            _0x414f42.updateCode = _0x14235d;
            _0x414f42.updateTime = _0x52f8ad;
            _0x414f42.flag = _0x5dccab;
            _0x372dc4 && _0x414f42.setName(_0x372dc4);
            -1 != nodesOnScreen.indexOf(_0x55b797) && -1 == playerCells.indexOf(_0x414f42) && (document.getElementById('overlays').style.display = 'none', playerCells.push(_0x414f42), 1 == playerCells.length && (_0x30dec5 = _0x414f42.x, _0x5a1715 = _0x414f42.y));
        }
        _0x1216ab = _0x407059.getUint32(_0x2ec7b8, true);
        _0x2ec7b8 += 4;
        for (_0x380dc4 = 0; _0x380dc4 < _0x1216ab; _0x380dc4++) {
            var _0x3db3ad = _0x407059.getUint32(_0x2ec7b8, true);
            _0x2ec7b8 += 4;
            _0x414f42 = _0x52cad8[_0x3db3ad];
            null != _0x414f42 && _0x414f42.destroy();
        }
        _0x192515 && 0 == playerCells.length && _0x1a35af('slow');
        playerCells.length == 0 && false == true && (_0x409cc5 = 0, _0x11fa4f = 0);
    }
    function _0x45592f() {
        var _0x3582a1;
        if (_0xbc45e1() && Sfreeze != true) {
            _0x3582a1 = _0x1a0cb8 - _0x18c69b / 2;
            var _0x39f9ba = _0x19c29b - _0x4fcffd / 2;
            64 <= _0x3582a1 * _0x3582a1 + _0x39f9ba * _0x39f9ba && !(0.01 > Math.abs(_0x1d68be - _0x35a629) && 0.01 > Math.abs(_0x4bac0e - _0x354ff6)) && (_0x1d68be = _0x35a629, _0x4bac0e = _0x354ff6, _0x3582a1 = _0x588713(21), _0x3582a1.setUint8(0, 16), _0x3582a1.setFloat64(1, _0x35a629, true), _0x3582a1.setFloat64(9, _0x354ff6, true), _0x3582a1.setUint32(17, 0, true), _0x4cb7ed(_0x3582a1));
        }
    }
    function _0x4556a9() {
        if (_0xbc45e1()) {
            var _0x12f4bc = _0x588713(1);
            _0x12f4bc.setUint8(0, 27);
            _0x4cb7ed(_0x12f4bc);
        }
    }
    function sendName() {
        var _0x55d06d = document.getElementById('nick').value;
        localStorage.playerNick = _0x55d06d;
        _0x55d06d = _0x5c3156(_0x55d06d);
        selectSkinName != '' && (_0x55d06d = '{' + selectSkinName + '}' + _0x55d06d);
        if (_0xbc45e1()) {
            var _0x118425 = _0x588713(1 + 2 * _0x55d06d.length);
            _0x118425.setUint8(0, 107);
            for (var _0x513ac2 = 0; _0x513ac2 < _0x55d06d.length; ++_0x513ac2) {
                _0x118425.setUint16(1 + 2 * _0x513ac2, _0x55d06d.charCodeAt(_0x513ac2), true);
            }
            _0x4cb7ed(_0x118425);
        }
    }
    function _0x13c5ba(_0x39784a) {
        debugger;
        var _0x29933a = _0x588713(1 + 2 * _0x39784a.length);
        _0x29933a.setUint8(0, 50);
        for (var _0x3154bd = 0; _0x3154bd < _0x39784a.length; ++_0x3154bd) {
            _0x29933a.setUint16(1 + 2 * _0x3154bd, _0x39784a.charCodeAt(_0x3154bd), true);
        }
        _0x4cb7ed(_0x29933a);
    }
    function _0xe675b(_0x203d8a) {
        ;
        if (_0xbc45e1() && _0x203d8a.length < 200 && _0x203d8a.length > 0) {
            var _0xec7cd7 = _0x588713(2 + 2 * _0x203d8a.length), _0x3d2f87 = 0;
            _0xec7cd7.setUint8(_0x3d2f87++, 109);
            _0xec7cd7.setUint8(_0x3d2f87++, 0);
            for (var _0x431fdc = 0; _0x431fdc < _0x203d8a.length; ++_0x431fdc) {
                _0xec7cd7.setUint16(_0x3d2f87, _0x203d8a.charCodeAt(_0x431fdc), true);
                _0x3d2f87 += 2;
            }
            _0x4cb7ed(_0xec7cd7);
        }
    }
    function _0xbc45e1() {
        ;
        return null != wss && wss.readyState == wss.OPEN;
    }
    function _0x4add11(_0x203801) {
        ;
        if (_0xbc45e1()) {
            var _0x6e6176 = _0x588713(1);
            _0x6e6176.setUint8(0, _0x203801);
            _0x4cb7ed(_0x6e6176);
        }
    }
    function gameLoop() {
        ;
        _0x3b967f();
        handleWindow.requestAnimationFrame(gameLoop);
    }
    function _0x26dd22() {
        ;
        window.scrollTo(0, 0);
        _0x18c69b = handleWindow.innerWidth;
        _0x4fcffd = handleWindow.innerHeight;
        _0x3d59eb.width = _0x18c69b;
        _0x3d59eb.height = _0x4fcffd;
        var _0x40ca6e = document.getElementById('helloDialog');
        _0x40ca6e.style.transform = 'none';
        var _0xf362 = _0x40ca6e.clientHeight;
        _0xf362 > _0x4fcffd / 1.1 ? _0x40ca6e.style.transform = 'translate(-50%, -50%) scale(' + _0x4fcffd / _0xf362 / 1.1 + ')' : _0x40ca6e.style.transform = 'translate(-50%, -50%)';
        _0x3b967f();
    }
    function _0x13e467() {
        var _0x528b08;
        return _0x528b08 = Math.max(_0x4fcffd / 768, _0x18c69b / 1024), _0x528b08 * _0x98084c;
    }
    function _0x4e6d6e() {
        ;
        if (0 != playerCells.length) {
            for (var _0x4bdd04 = 0, _0x4b1766 = 0; _0x4b1766 < playerCells.length; _0x4b1766++) {
                _0x4bdd04 += playerCells[_0x4b1766].size;
            }
            _0x4bdd04 = Math.pow(Math.min(64 / _0x4bdd04, 1), 0.4) * _0x13e467();
            _0x4b8a2b = (9 * _0x4b8a2b + _0x4bdd04) / 10;
        }
    }
    function _0x3b967f() {
        var _0x5b5bc5, _0x20acb7 = Date.now();
        ++_0x4aec71;
        var _0x3f90b1 = Date.now() - _0xf1d189;
        _0x3f90b1 > 50 && (_0xf1d189 = Date.now(), _0x45592f());
        _0x52f8ad = _0x20acb7;
        if (0 < playerCells.length) {
            _0x4e6d6e();
            var _0x4be423 = _0x5b5bc5 = 0;
            for (var i = 0; i < playerCells.length; i++) {
                playerCells[i].updatePos();
                _0x5b5bc5 += playerCells[i].x / playerCells.length;
                _0x4be423 += playerCells[i].y / playerCells.length;
            }
            _0x192477 = _0x5b5bc5;
            _0x2a539d = _0x4be423;
            _0x49754c = _0x4b8a2b;
            _0x30dec5 = (_0x30dec5 + _0x5b5bc5) / 2;
            _0x5a1715 = (_0x5a1715 + _0x4be423) / 2;
        } else {
            _0x30dec5 = (29 * _0x30dec5 + _0x192477) / 30;
            _0x5a1715 = (29 * _0x5a1715 + _0x2a539d) / 30;
            _0x4b8a2b = (9 * _0x4b8a2b + _0x49754c * _0x13e467()) / 10;
        }
        qTree();
        _0x3a097a();
        ctx.fillStyle = _0x3dd4f9 ? '#111111' : '#F2FBFF';
        ctx.fillRect(0, 0, _0x18c69b, _0x4fcffd);
        _0x201918.sort(function (_0x22dd32, _0x5b8a2b) {
            ;
            return _0x22dd32.size == _0x5b8a2b.size ? _0x22dd32.id - _0x5b8a2b.id : _0x22dd32.size - _0x5b8a2b.size;
        });
        ctx.save();
        ctx.translate(_0x18c69b / 2, _0x4fcffd / 2);
        ctx.scale(_0x4b8a2b, _0x4b8a2b);
        ctx.translate(-_0x30dec5, -_0x5a1715);
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 50;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(_0x11e62f, _0xbe8c11);
        ctx.lineTo(_0x5b0f40, _0xbe8c11);
        ctx.lineTo(_0x5b0f40, _0x48689d);
        ctx.lineTo(_0x11e62f, _0x48689d);
        ctx.closePath();
        ctx.stroke();
        _0x369916 == true ? ctx.globalAlpha = 0.6 : ctx.globalAlpha = 1;
        for (i = 0; i < _0x201918.length; i++) {
            _0x201918[i].drawOneCell(ctx);
        }
        if (_0x5b001b) {
            _0x47f5fc = (3 * _0x47f5fc + _0x4d5c1e) / 4;
            _0x1aaebd = (3 * _0x1aaebd + _0x8917cc) / 4;
            ctx.save();
            ctx.strokeStyle = '#FFAAAA';
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            for (i = 0; i < playerCells.length; i++) {
                ctx.moveTo(playerCells[i].x, playerCells[i].y);
                ctx.lineTo(_0x47f5fc, _0x1aaebd);
            }
            ctx.stroke();
            ctx.restore();
        }
        ctx.restore();
        _0x9a7c76 && _0x9a7c76.width && ctx.drawImage(_0x9a7c76, _0x18c69b - _0x9a7c76.width - 10, 10);
        if (!_0xe35782) {
            if (_0x94189c != null && _0x94189c.width > 0) {
                ctx.drawImage(_0x94189c, 0, _0x4fcffd - _0x94189c.height - 50);
            }
        }
        _0x548c54 = _0x5c9293();
        _0x249848 = Math.max(_0x249848, _0x548c54);
        ctx.globalAlpha = 0.8;
        _0x3dd4f9 == true ? ctx.fillStyle = '#FFFFFF' : ctx.fillStyle = '#000000';
        ctx.font = '24px Ubuntu';
        ctx.fillText('Score: ' + _0x548c54, 10, 34);
        ctx.fillText('Max: ' + _0x249848, 10, 60);
        if (this.countdown < 3600) {
            var _0x37c49c = '', _0x4cab61 = Math.floor(this.countdown / 60);
            _0x4cab61 < 10 && (_0x37c49c += '0');
            _0x37c49c += _0x4cab61 + ':';
            var _0x117258 = this.countdown % 60;
            _0x117258 < 10 && (_0x37c49c += '0');
            _0x37c49c += _0x117258;
            ctx.globalAlpha = 0.4;
            _0x3dd4f9 == false ? ctx.fillStyle = '#000000' : ctx.fillStyle = '#DDDDDD';
            ctx.globalAlpha = 1;
            _0x3dd4f9 == true ? ctx.fillStyle = '#5959eb' : ctx.fillStyle = '#0000FF';
            ctx.font = '15px Ubuntu';
            ctx.fillText('Latency ' + Uping + ' ms;', 10, 90);
            ctx.fillText('Uptime ' + Uuptime + ' sec;', 10, 110);
            ctx.fillText('Restart ' + _0x37c49c, 10, 130);
            ctx.fillText('Players ' + Uplayers + ';', 10, 150);
        }
        if (_0xbc45e1()) {
            ctx.globalAlpha = 1;
            ctx.font = '16px Ubuntu';
            var _0x31a020 = Math.round(_0x30dec5 / 1000) + ' , ' + Math.round(_0x5a1715 / 1000) + ' ' + 'share';
            _0x46fe6e = ctx.measureText(_0x31a020).width;
            _0xeab53 = 16;
            _0x50b13c = '*** ' + Math.round(_0x30dec5 / 1000) + ' , ' + Math.round(_0x5a1715 / 1000) + ' ***';
            _0x3dd4f9 == true ? ctx.fillStyle = '#FFFFFF' : ctx.fillStyle = '#000000';
            ctx.fillText(_0x31a020, 0, -15);
        }
        if (_0xe35782 == false) {
            var _0x2334f3 = 0;
            for (var _0xca1f20 = chatMessages.length - 1; _0xca1f20 >= 0; _0xca1f20--) {
                _0x2334f3++;
                if (_0x2334f3 > 15) {
                    break;
                }
                var _0x3c9f40 = chatMessages[_0xca1f20].name.trim();
                _0x3c9f40 == '' && (_0x3c9f40 = 'Agar.io');
                var _0x55f6f1 = chatMessages[_0xca1f20].message.trim(), _0x3d6d1f = ' : ' + _0x55f6f1, _0xd6d31e = _0x3d6d1f.toLowerCase(), _0x5b895a = _0xd6d31e.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ@)(!,?:^0-9 ]/g, '');
                ctx.font = '18px Arial';
                chatMessages[_0xca1f20].name_x = 15;
                chatMessages[_0xca1f20].name_y = _0x4fcffd - 30 - 20 * _0x2334f3;
                chatMessages[_0xca1f20].name_w = ctx.measureText(_0x3c9f40).width;
                chatMessages[_0xca1f20].name_h = 18;
                chatMessages[_0xca1f20].msg_x = 15 + chatMessages[_0xca1f20].name_w;
                chatMessages[_0xca1f20].msg_y = chatMessages[_0xca1f20].name_y;
                chatMessages[_0xca1f20].msg_w = ctx.measureText(_0x3d6d1f).width;
                chatMessages[_0xca1f20].msg_h = chatMessages[_0xca1f20].name_h;
                ctx.fillStyle = chatMessages[_0xca1f20].color;
                ctx.fillText(_0x3c9f40, chatMessages[_0xca1f20].name_x, chatMessages[_0xca1f20].name_y);
                _0x3dd4f9 == true ? ctx.fillStyle = '#999999' : ctx.fillStyle = '#999999';
                ctx.fillText(_0x5b895a, chatMessages[_0xca1f20].msg_x, chatMessages[_0xca1f20].msg_y);
            }
        }
        var _0x3c6a1c = Date.now() - _0x20acb7;
        _0x3c6a1c > 16.666666666666668 ? _0x4c65d4 -= 0.01 : _0x3c6a1c < 15.384615384615385 && (_0x4c65d4 += 0.01);
        0.4 > _0x4c65d4 && (_0x4c65d4 = 0.4);
        1 < _0x4c65d4 && (_0x4c65d4 = 1);
        _0x5d13f8();
    }
    function _0x5d13f8() {
        ;
        if (playerCells.length == 0) {
            return;
        }
        ctx.save();
        function _0x3a5e7e(_0x190df2, _0x49995b) {
            return !_0x49995b ? _0x190df2 : _0x3a5e7e(_0x49995b, _0x190df2 % _0x49995b);
        }
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,0,0,.25)';
        ;
        ctx.lineWidth = 1.5;
        var _0x3d6876 = _0x18c69b - 200 - 10, _0xa0839f = _0x4fcffd - 200 - 5;
        ctx.rect(_0x3d6876, _0xa0839f, 200, 200);
        ctx.lineWidth = 1.25;
        var _0xb912e = _0x30dec5 / (_0x5b0f40 - _0x11e62f), _0x27203f = _0x5a1715 / (_0x48689d - _0xbe8c11), _0x2adfb2 = _0xb912e * 200 + _0x3d6876 + 100 - 100, _0xa7bf9f = _0x27203f * 200 + _0xa0839f + 100 - 100, _0x381946 = bh = 200, _0x17d620 = -1, _0x2e48e4 = -1;
        for (var _0x44674d = 0; _0x44674d <= _0x381946; _0x44674d += 40) {
            if (_0x44674d != _0x381946) {
                var _0x3aad66 = 0.5 + _0x44674d + _0x3d6876, _0x1fc105 = _0xa0839f;
                _0x585043(_0x3aad66, _0x1fc105, _0x3aad66 + 40, _0x1fc105 + bh, _0x2adfb2, _0xa7bf9f) && (_0x17d620 = _0x3aad66);
                if (_0x44674d == 0) {
                    continue;
                }
                ctx.moveTo(0.5 + _0x44674d + _0x3d6876, _0xa0839f);
                ctx.lineTo(0.5 + _0x44674d + _0x3d6876, bh + _0xa0839f);
            }
            _0x3dd4f9 == true ? ctx.fillStyle = '#FFFFFF' : ctx.fillStyle = '#000000';
            ctx.font = '700 18px ubuntu';
            ctx.textAlign = 'center';
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.35;
            for (var _0x44b6b4 = 0; _0x44b6b4 < 5; _0x44b6b4++) {
                ctx.fillText(String.fromCharCode(_0x44b6b4 + 65) + _0x44674d / 40, 0.5 + _0x44674d + _0x3d6876 - 20, _0xa0839f + 25.5 + _0x44b6b4 * 40);
            }
        }
        for (var _0x2f1755 = 0; _0x2f1755 <= bh; _0x2f1755 += 40) {
            if (_0x2f1755 != bh) {
                var _0x3aad66 = _0x3d6876, _0x1fc105 = 0.5 + _0x2f1755 + _0xa0839f;
                _0x585043(_0x3aad66, _0x1fc105, _0x3aad66 + _0x381946, _0x1fc105 + 40, _0x2adfb2, _0xa7bf9f) && (_0x2e48e4 = _0x1fc105);
                if (_0x2f1755 == 0) {
                    continue;
                }
                ctx.moveTo(_0x3d6876, 0.5 + _0x2f1755 + _0xa0839f);
                ctx.lineTo(_0x381946 + _0x3d6876, 0.5 + _0x2f1755 + _0xa0839f);
            }
        }
        playerCells.length > 0 && _0x17d620 > -1 && _0x2e48e4 > -1 && (ctx.fillStyle = '#ccff00', ctx.globalAlpha = 0.3, ctx.fillRect(_0x17d620, _0x2e48e4, 40, 40));
        ctx.globalAlpha = 1;
        ctx.strokeStyle = 'rgba(255,255,255,.2)';
        ctx.stroke();
        ctx.closePath();
        for (var _0x44b6b4 = 0; _0x44b6b4 < playerCells.length; _0x44b6b4++) {
            var _0xd50021 = playerCells[_0x44b6b4], _0x27c220 = _0xd50021.ox / (_0x5b0f40 - _0x11e62f), _0x47609d = _0xd50021.oy / (_0x48689d - _0xbe8c11), _0x44674d = _0x27c220 * 200 + _0x3d6876 + 100 - 100, _0x2f1755 = _0x47609d * 200 + _0xa0839f + 100 - 100, _0x29a169 = Math.max(2, _0xd50021.size / 100);
            ctx.fillStyle = _0xd50021.color;
            if (_0x44b6b4 == 0) {
                ctx.font = 'bold ' + (14 + _0x29a169) + 'px Ubuntu';
                var _0x3890b6 = ctx.measureText(_0xd50021.name);
                ctx.strokestyle = 'black';
            }
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.globalAlpha = 1;
            ctx.arc(_0x44674d, _0x2f1755, _0x29a169, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
        ctx.restore();
    }
    function _0x9d89af() {
        ;
        ctx.fillStyle = _0x3dd4f9 ? '#111111' : '#F2FBFF';
        ctx.fillRect(0, 0, _0x18c69b, _0x4fcffd);
        ctx.save();
        ctx.strokeStyle = _0x3dd4f9 ? '#AAAAAA' : '#000000';
        ctx.globalAlpha = 0.2;
        ctx.scale(_0x4b8a2b, _0x4b8a2b);
        var _0x200cf6 = _0x18c69b / _0x4b8a2b, _0x2292e1 = _0x4fcffd / _0x4b8a2b;
        for (var _0x3c7fc2 = -0.5 + (-_0x30dec5 + _0x200cf6 / 2) % 50; _0x3c7fc2 < _0x200cf6; _0x3c7fc2 += 50) {
            ctx.beginPath();
            ctx.moveTo(_0x3c7fc2, 0);
            ctx.lineTo(_0x3c7fc2, _0x2292e1);
            ctx.stroke();
        }
        for (_0x3c7fc2 = -0.5 + (-_0x5a1715 + _0x2292e1 / 2) % 50; _0x3c7fc2 < _0x2292e1; _0x3c7fc2 += 50) {
            ctx.beginPath();
            ctx.moveTo(0, _0x3c7fc2);
            ctx.lineTo(_0x200cf6, _0x3c7fc2);
            ctx.stroke();
        }
        ctx.restore();
    }
    function _0x5c9293() {
        ;
        for (var _0x2db772 = 0, _0x2b0a76 = 0; _0x2b0a76 < playerCells.length; _0x2b0a76++) {
            _0x2db772 += playerCells[_0x2b0a76].getScore();
        }
        return _0x2db772;
    }
    function _0x17be9f() {
        ;
        _0x9a7c76 = null;
        var _0x12791a = 200;
        null != _0xeb8c96 && (_0x12791a = 200);
        if (null != _0xeb8c96 || 0 != _0x5ec13c.length) {
            _0x9a7c76 = document.createElement('canvas');
        }
        var _0x561a9a = _0x9a7c76.getContext('2d'), _0x303085 = 110;
        _0x303085 = null == _0xeb8c96 ? _0x303085 + 24 * _0x5ec13c.length : _0x303085 + 180;
        var _0x509ef3 = Math.min(0.22 * _0x4fcffd, Math.min(200, 0.3 * _0x18c69b)) / 200;
        _0x9a7c76.width = _0x12791a * _0x509ef3;
        _0x9a7c76.height = _0x303085 * _0x509ef3;
        _0x561a9a.scale(_0x509ef3, _0x509ef3);
        _0x561a9a.globalAlpha = 0.4;
        _0x561a9a.fillStyle = '#000000';
        _0x561a9a.fillRect(0, 0, 200, _0x303085);
        _0x561a9a.globalAlpha = 1;
        _0x561a9a.fillStyle = '#FFFFFF';
        var _0x1070ae, _0x44498e = [
                '#FF0000',
                '#0002fe',
                '#33E660',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF'
            ];
        if (null == _0xeb8c96) {
            _0x561a9a.fillStyle = 'blue';
            _0x561a9a.font = '16px Ubuntu';
            var _0xc04867 = new Image();
            _0xc04867.onload = function () {
                ;
                _0x561a9a.drawImage(_0xc04867, 60, 0);
            };
            _0xc04867.src = '/imgs/lbfirst.png';
            _0x561a9a.fillText(defaultWinner, 90 - _0x561a9a.measureText(this.lastWinner).width / 2, 80);
            for (_0x1070ae = 0; _0x1070ae < _0x5ec13c.length; ++_0x1070ae) {
                c = _0x5ec13c[_0x1070ae].name.split('*')[0] || 'Unnamed Cell';
                c = _0x346ef9(c)[1];
                c == '' && (c = 'Unnamed Cell');
                -1 != nodesOnScreen.indexOf(_0x5ec13c[_0x1070ae].id) ? (playerCells[0].name && (c = _0x346ef9(playerCells[0].name)[1]), c == '' && (c = 'Unnamed Cell'), _0x561a9a.fillStyle = '#FFAAAA', !noRanking && (c = _0x1070ae + 1 + '. ' + c)) : (_0x561a9a.fillStyle = _0x44498e[_0x1070ae], !noRanking && (c = _0x1070ae + 1 + '. ' + c));
                _0x561a9a.fillText(c, 10, 110 + 25 * _0x1070ae);
            }
        } else {
            for (_0x1070ae = c = 0; _0x1070ae < _0xeb8c96.length; ++_0x1070ae) {
                var _0x1223e9 = c + _0xeb8c96[_0x1070ae] * Math.PI * 2;
                _0x561a9a.fillStyle = "blue";
                _0x561a9a.beginPath();
                _0x561a9a.moveTo(100, 140);
                _0x561a9a.arc(100, 140, 80, c, _0x1223e9, false);
                _0x561a9a.fill();
                c = _0x1223e9;
            }
        }
    }
    function _0x3ab606(_0x12bc4f, _0x5631da, _0x2b387b, _0x51e2f1, _0x2d2504, _0x59cd91) {
        ;
        this.id = _0x12bc4f;
        this.ox = this.x = _0x5631da;
        this.oy = this.y = _0x2b387b;
        this.oSize = this.size = _0x51e2f1;
        this.color = "yellow";
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(_0x59cd91);
    }
    function _0x896cc0(_0x4f7a66, _0x8bcd49, _0x511831, _0x430ad1) {
        ;
        _0x4f7a66 && (this['_size'] = _0x4f7a66);
        _0x8bcd49 && (this['_color'] = _0x8bcd49);
        this['_stroke'] = !!_0x511831;
        _0x430ad1 && (this['_strokeColor'] = _0x430ad1);
    }
    handleWindow.playGame = function () {
        ;
        _0x548c54 = 0;
        _0x249848 = 0;
        if (document.getElementById('nick').value.trim() == '') {
            alert('Enter a nick');
            return;
        }
        _0x12b23a();
        wss == null || wss.readyState == 2 || wss.readyState == 3 ? (playGameClickEvent = 1, _0x257592()) : _0x4bc9b6();
        _0x3ce381 = Date.now();
        _0x2fbf49 = 0;
    };
    handleWindow.spectate = function () {
        ;
        handleWindow.isSpectating = true;
        _0x12b23a();
        wss == null || wss.readyState == 2 || wss.readyState == 3 ? _0x257592() : _0x4add11(1);
    };
    handleWindow.setHideSkins = function (_0x2d1a52) {
        ;
        _0x2d1a52 = document.getElementById('noSkin').checked;
        _0x2318ce = _0x2d1a52;
        localStorage.noSkin = _0x2d1a52;
    };
    handleWindow.setHideNames = function (_0x497677) {
        ;
        _0x497677 = document.getElementById('noNames').checked;
        _0x166eec = _0x497677;
        localStorage.noNames = _0x497677;
    };
    handleWindow.setDarkTheme = function (_0x1d31ca) {
        ;
        _0x1d31ca = document.getElementById('darkTheme').checked;
        _0x3dd4f9 = _0x1d31ca;
        localStorage.showDarkTheme = _0x1d31ca;
    };
    handleWindow.setNoColor = function (_0x2a39a6) {
        ;
        _0x2a39a6 = document.getElementById('noColor').checked;
        _0xba4d0b = _0x2a39a6;
        localStorage.noColor = _0x2a39a6;
    };
    handleWindow.setSmooth = function (_0x43444d) {
        ;
        _0x43444d = document.getElementById('smoothRender').checked;
        _0x259eb5 = _0x43444d ? 2 : 0.4;
        localStorage.smoothRender = _0x43444d ? 2 : 0.4;
    };
    handleWindow.setTransparent = function (_0x373350) {
        ;
        _0x373350 = document.getElementById('transparentRender').checked;
        _0x369916 = _0x373350;
        localStorage.transparentRender = _0x373350;
    };
    handleWindow.setShowScore = function (_0x536491) {
        ;
        _0x536491 = document.getElementById('showScore').checked;
        _0x81cb3d = _0x536491;
        localStorage.showScore = _0x536491;
    };
    handleWindow.setSimpleGreen = function (_0x4c4f1e) {
        ;
        _0x4c4f1e = document.getElementById('simpleGreen').checked;
        _0x2f8a0b = _0x4c4f1e;
        localStorage.simpleGreen = _0x4c4f1e;
    };
    handleWindow.setHideChat = function (_0x27b5c5) {
        ;
        _0x27b5c5 = document.getElementById('hideChat').checked;
        _0xe35782 = _0x27b5c5;
        localStorage.hideChat = _0x27b5c5;
        _0x27b5c5 ? document.getElementById('chat_textbox').style.display = 'none' : document.getElementById('chat_textbox').style.display = 'block';
    };
    handleWindow.setZoom = function (_0x4d1c54) {
        ;
        _0x4d1c54 = document.getElementById('getZoom').checked;
        _0x3cfcca = _0x4d1c54;
        localStorage.zoom = _0x4d1c54;
    };
    handleWindow.clearChat = function (_0x44433c) {
        chatMessages = [];
    };
    handleWindow.shareLocation = function (_0x2fac4b) {
        ;
        _0xe675b('psx2psx2');
    };
    setInterval(function () {
        var _0x5183af = _0x2f5a58();
        0 != _0x5183af && (++_0x4b4df5, 0 == _0x2fbf49 && (_0x2fbf49 = _0x5183af), _0x2fbf49 = Math.min(_0x2fbf49, _0x5183af));
    }, 1000);
    setInterval(function () {
        ;
        _0xbc45e1() && (msg = _0x588713(5), msg.setUint8(0, 90), msg.setUint32(1, 123456789, true), latency = new Date(), _0x4cb7ed(msg));
    }, 1000);
    var _0x1d68be = -1, _0x4bac0e = -1, _0x4c65d4 = 1, _0x4b004f = {}, _0xf63740 = {}, _0x4f4d30 = ['_canvas\'blob'];
    _0x3ab606.prototype = {
        'id': 0,
        'points': null,
        'pointsAcc': null,
        'name': null,
        'skinName': null,
        'hasSkinName': false,
        'nameCache': null,
        'sizeCache': null,
        'x': 0,
        'y': 0,
        'size': 0,
        'ox': 0,
        'oy': 0,
        'oSize': 0,
        'nx': 0,
        'ny': 0,
        'nSize': 0,
        'flag': 0,
        'updateTime': 0,
        'updateCode': 0,
        'drawTime': 0,
        'destroyed': false,
        'isVirus': false,
        'isAgitated': false,
        'wasSimpleDrawing': true,
        'destroy': function () {
            var _0x3598de;
            for (_0x3598de = 0; _0x3598de < _0x201918.length; _0x3598de++) {
                if (_0x201918[_0x3598de] == this) {
                    _0x201918.splice(_0x3598de, 1);
                    break;
                }
            }
            delete _0x52cad8[this.id];
            _0x3598de = playerCells.indexOf(this);
            -1 != _0x3598de && (_0x192515 = true, playerCells.splice(_0x3598de, 1));
            _0x3598de = nodesOnScreen.indexOf(this.id);
            -1 != _0x3598de && nodesOnScreen.splice(_0x3598de, 1);
            this.destroyed = true;
            _0x56d506.push(this);
        },
        'getNameSize': function () {
            ;
            return Math.max(~~(0.3 * this.size), 24);
        },
        'setName': function (_0x23fd2b) {
            ;
            (this.name = _0x23fd2b) && (null == this.nameCache ? (this.nameCache = new _0x896cc0(this.getNameSize(), '#FFFFFF', true, '#000000'), this.nameCache.setValue(this.name)) : (this.nameCache.setSize(this.getNameSize()), this.nameCache.setValue(this.name)));
        },
        'setSkinName': function (_0x28cadb) {
            this.skinName = _0x28cadb;
        },
        'createPoints': function () {
            ;
            for (var _0x3c77a8 = this.getNumPoints(); this.points.length > _0x3c77a8;) {
                var _0x1e5b8c = ~~(Math.random() * this.points.length);
                this.points.splice(_0x1e5b8c, 1);
                this.pointsAcc.splice(_0x1e5b8c, 1);
            }
            0 == this.points.length && 0 < _0x3c77a8 && (this.points.push({
                'ref': this,
                'size': this.size,
                'x': this.x,
                'y': this.y
            }), this.pointsAcc.push(Math.random() - 0.5));
            while (this.points.length < _0x3c77a8) {
                var _0x93e7ca = ~~(Math.random() * this.points.length), _0x779921 = this.points[_0x93e7ca];
                this.points.splice(_0x93e7ca, 0, {
                    'ref': this,
                    'size': _0x779921.size,
                    'x': _0x779921.x,
                    'y': _0x779921.y
                });
                this.pointsAcc.splice(_0x93e7ca, 0, this.pointsAcc[_0x93e7ca]);
            }
        },
        'getNumPoints': function () {
            ;
            if (0 == this.id) {
                return 16;
            }
            var _0x2eea3e = 10;
            if (20 > this.size) {
                _0x2eea3e = 0;
            }
            if (this.isVirus) {
                _0x2eea3e = 30;
            }
            var _0x5c4724 = this.size;
            if (!this.isVirus) {
                _0x5c4724 *= _0x4b8a2b;
            }
            _0x5c4724 *= _0x4c65d4;
            if (this.flag & 32) {
                _0x5c4724 *= 0.25;
            }
            return ~~Math.max(_0x5c4724, _0x2eea3e);
        },
        'movePoints': function () {
            ;
            this.createPoints();
            for (var _0x5bf1b9 = this.points, _0xd52d46 = this.pointsAcc, _0x4e0767 = _0x5bf1b9.length, _0x4250dc = 0; _0x4250dc < _0x4e0767; ++_0x4250dc) {
                var _0x50e032 = _0xd52d46[(_0x4250dc - 1 + _0x4e0767) % _0x4e0767], _0x58e2c5 = _0xd52d46[(_0x4250dc + 1) % _0x4e0767];
                _0xd52d46[_0x4250dc] += (Math.random() - 0.5) * (this.isAgitated ? 3 : 1);
                _0xd52d46[_0x4250dc] *= 0.7;
                10 < _0xd52d46[_0x4250dc] && (_0xd52d46[_0x4250dc] = 10);
                -10 > _0xd52d46[_0x4250dc] && (_0xd52d46[_0x4250dc] = -10);
                _0xd52d46[_0x4250dc] = (_0x50e032 + _0x58e2c5 + 8 * _0xd52d46[_0x4250dc]) / 10;
            }
            for (var _0x43eb17 = this, _0x526264 = this.isVirus ? 0 : (this.id / 1000 + _0x52f8ad / 10000) % (2 * Math.PI), _0x10937e = 0; _0x10937e < _0x4e0767; ++_0x10937e) {
                var _0x28511d = _0x5bf1b9[_0x10937e].size, _0x136a27 = _0x5bf1b9[(_0x10937e - 1 + _0x4e0767) % _0x4e0767].size, _0x536f75 = _0x5bf1b9[(_0x10937e + 1) % _0x4e0767].size;
                if (15 < this.size && null != _0x6aaded && 20 < this.size * _0x4b8a2b && 0 != this.id) {
                    var _0x1c355e = false, _0xc1ef3e = _0x5bf1b9[_0x10937e].x, _0x63c795 = _0x5bf1b9[_0x10937e].y;
                    _0x6aaded.retrieve2(_0xc1ef3e - 5, _0x63c795 - 5, 10, 10, function (_0x54a77e) {
                        ;
                        _0x54a77e.ref != _0x43eb17 && 25 > (_0xc1ef3e - _0x54a77e.x) * (_0xc1ef3e - _0x54a77e.x) + (_0x63c795 - _0x54a77e.y) * (_0x63c795 - _0x54a77e.y) && (_0x1c355e = true);
                    });
                    (!_0x1c355e && _0x5bf1b9[_0x10937e].x < _0x11e62f || _0x5bf1b9[_0x10937e].y < _0xbe8c11 || _0x5bf1b9[_0x10937e].x > _0x5b0f40 || _0x5bf1b9[_0x10937e].y > _0x48689d) && (_0x1c355e = true);
                    _0x1c355e && (0 < _0xd52d46[_0x10937e] && (_0xd52d46[_0x10937e] = 0), _0xd52d46[_0x10937e] -= 1);
                }
                _0x28511d += _0xd52d46[_0x10937e];
                0 > _0x28511d && (_0x28511d = 0);
                _0x28511d = this.isAgitated ? (19 * _0x28511d + this.size) / 20 : (12 * _0x28511d + this.size) / 13;
                _0x5bf1b9[_0x10937e].size = (_0x136a27 + _0x536f75 + 8 * _0x28511d) / 10;
                _0x136a27 = 2 * Math.PI / _0x4e0767;
                _0x536f75 = this.points[_0x10937e].size;
                this.isVirus && 0 == _0x10937e % 2 && (_0x536f75 += 5);
                _0x5bf1b9[_0x10937e].x = this.x + Math.cos(_0x136a27 * _0x10937e + _0x526264) * _0x536f75;
                _0x5bf1b9[_0x10937e].y = this.y + Math.sin(_0x136a27 * _0x10937e + _0x526264) * _0x536f75;
            }
        },
        'updatePos': function () {
            ;
            if (0 == this.id) {
                return 1;
            }
            var _0x1fd09c;
            _0x1fd09c = (_0x52f8ad - this.updateTime) / 120;
            _0x1fd09c = 0 > _0x1fd09c ? 0 : 1 < _0x1fd09c ? 1 : _0x1fd09c;
            var _0x3c2726 = 0 > _0x1fd09c ? 0 : 1 < _0x1fd09c ? 1 : _0x1fd09c;
            this.getNameSize();
            if (this.destroyed && 1 <= _0x3c2726) {
                var _0x21ac9a = _0x56d506.indexOf(this);
                -1 != _0x21ac9a && _0x56d506.splice(_0x21ac9a, 1);
            }
            return this.x = _0x1fd09c * (this.nx - this.ox) + this.ox, this.y = _0x1fd09c * (this.ny - this.oy) + this.oy, this.size = _0x3c2726 * (this.nSize - this.oSize) + this.oSize, _0x3c2726;
        },
        'shouldRender': function () {
            ;
            return 0 == this.id ? true : !(this.x + this.size + 40 < _0x30dec5 - _0x18c69b / 2 / _0x4b8a2b || this.y + this.size + 40 < _0x5a1715 - _0x4fcffd / 2 / _0x4b8a2b || this.x - this.size - 40 > _0x30dec5 + _0x18c69b / 2 / _0x4b8a2b || this.y - this.size - 40 > _0x5a1715 + _0x4fcffd / 2 / _0x4b8a2b);
        },
        'getScore': function () {
            var _0x294be3 = ~~(this.nSize * this.nSize / 100);
            return _0x294be3;
        },
        'drawOneCell': function (_0x2b7fc0) {
            ;
            if (this.shouldRender()) {
                var _0x18170e = 0 != this.id && !this.isVirus && !this.isAgitated && _0x259eb5 > _0x4b8a2b;
                if (5 > this.getNumPoints()) {
                    _0x18170e = true;
                }
                if (this.wasSimpleDrawing && !_0x18170e) {
                    for (var _0x11d003 = 0; _0x11d003 < this.points.length; _0x11d003++) {
                        this.points[_0x11d003].size = this.size;
                    }
                }
                this.wasSimpleDrawing = _0x18170e;
                _0x2b7fc0.save();
                this.drawTime = _0x52f8ad;
                _0x11d003 = this.updatePos();
                this.destroyed && (_0x2b7fc0.globalAlpha *= 1 - _0x11d003);
                _0x2b7fc0.lineWidth = 10;
                _0x2b7fc0.lineCap = 'round';
                _0x2b7fc0.lineJoin = this.isVirus ? 'miter' : 'round';
                _0xba4d0b ? (_0x2b7fc0.fillStyle = '#FFFFFF', _0x2b7fc0.strokeStyle = '#AAAAAA') : (_0x2b7fc0.fillStyle = this.color, _0x2b7fc0.strokeStyle = this.color);
                if (_0x18170e || _0x2f8a0b == true) {
                    _0x2b7fc0.beginPath();
                    _0x2b7fc0.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
                } else {
                    this.movePoints();
                    _0x2b7fc0.beginPath();
                    var _0x497672 = this.getNumPoints();
                    _0x2b7fc0.moveTo(this.points[0].x, this.points[0].y);
                    for (_0x11d003 = 1; _0x11d003 <= _0x497672; ++_0x11d003) {
                        var _0x2b445d = _0x11d003 % _0x497672;
                        _0x2b7fc0.lineTo(this.points[_0x2b445d].x, this.points[_0x2b445d].y);
                    }
                }
                _0x2b7fc0.closePath();
                _0x11d003 = null;
                !this.isAgitated && !_0x2318ce && ':teams' != _0x235c81 && (this.skinName = this.name.toLowerCase(), li = _0x346ef9(this.skinName), !this.isAgitated && this.skinName != '' ? (!_0x4b004f.hasOwnProperty(this.skinName) && (_0x4b004f[this.skinName] = new Image(), _0x4b004f[this.skinName].src = './skins/' + li[0] + '.png', _0x4b004f[this.skinName].onload = function () {
                    ;
                    _0xf63740[this.src] = true;
                }), 0 != _0x4b004f[this.skinName].width && _0x4b004f[this.skinName].complete ? _0x11d003 = _0x4b004f[this.skinName] : _0x11d003 = null) : _0x11d003 = null);
                _0x11d003 = (_0x2b445d = _0x11d003) ? -1 != _0x4f4d30.indexOf(this.skinName) : false;
                _0x18170e || _0x2b7fc0.stroke();
                _0x2b7fc0.fill();
                !(null == _0x2b445d || _0x11d003) && (_0xf63740.hasOwnProperty(_0x2b445d.src) && (_0x2b7fc0.save(), _0x2b7fc0.clip(), _0x2b7fc0.drawImage(_0x2b445d, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size), _0x2b7fc0.restore()));
                (_0xba4d0b || 15 < this.size) && !_0x18170e && (_0x2b7fc0.strokeStyle = '#000000', _0x2b7fc0.globalAlpha *= 0.1, _0x2b7fc0.stroke());
                _0x2b7fc0.globalAlpha = 1;
                null != _0x2b445d && _0x11d003 && (_0xf63740.hasOwnProperty(_0x2b445d.src) && _0x2b7fc0.drawImage(_0x2b445d, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size));
                _0x11d003 = -1 != playerCells.indexOf(this);
                ;
                if (0 != this.id) {
                    var _0x18170e = ~~this.y;
                    (!_0x166eec || _0x11d003) && this.name && (_0x2b7fc0.globalAlpha = 1, _0x2b7fc0.font = Math.max(~~(0.3 * this.size), 24) + 'px Ubuntu', _0x2b7fc0.fillStyle = '#FFF', _0x2b7fc0.textAlign = 'center', _0x2b7fc0.fillText(_0x346ef9(this.name)[1], this.x, this.y));
                    ;
                    if (_0x81cb3d == true && !this.isAgitated && ~~(this.size * this.size / 100) >= 20 && this.isVirus == false) {
                        _0x2b7fc0.globalAlpha = 1;
                        _0x2b7fc0.font = this.getNameSize() + 'px Ubuntu';
                        var _0x38ddb7 = this.getScore() + '';
                        _0x2b7fc0.fillStyle = '#FFF';
                        _0x2b7fc0.textAlign = 'center';
                        _0x2b7fc0.textBaseline = 'middle';
                        _0x2b7fc0.fillText(_0x38ddb7, this.x, this.y + this.getNameSize() + 13);
                    }
                    ;
                }
                _0x2b7fc0.restore();
            }
        }
    };
    _0x896cc0.prototype = {
        '_value': '',
        '_color': '#000000',
        '_stroke': false,
        '_strokeColor': '#000000',
        '_size': 16,
        '_canvas': null,
        '_ctx': null,
        '_dirty': false,
        '_scale': 1,
        'setSize': function (_0x103114) {
            ;
            this['_size'] != _0x103114 && (this['_size'] = _0x103114, this['_dirty'] = true);
        },
        'setScale': function (_0x49fdd3) {
            ;
            this['_scale'] != _0x49fdd3 && (this['_scale'] = _0x49fdd3, this['_dirty'] = true);
        },
        'setStrokeColor': function (_0x340fe5) {
            ;
            this['_strokeColor'] != _0x340fe5 && (this['_strokeColor'] = _0x340fe5, this['_dirty'] = true);
        },
        'setValue': function (_0x52affc) {
            ;
            _0x52affc != this['_value'] && (this['_value'] = _0x52affc, this['_dirty'] = true);
        },
        'render': function () {
            ;
            null == this['_canvas'] && (this['_canvas'] = document.createElement('canvas'), this['_ctx'] = this['_canvas'].getContext('2d'));
            if (this['_dirty']) {
                this['_dirty'] = false;
                var _0xe4a9d5 = this['_canvas'], _0x372de0 = this['_ctx'], _0xebf189 = this['_value'], _0x78dd38 = this['_scale'], _0x4e8ec6 = this['_size'], _0x4c1b86 = _0x4e8ec6 + 'px Ubuntu';
                _0x372de0.font = _0x4c1b86;
                var _0x3eaa76 = ~~(0.2 * _0x4e8ec6);
                _0xe4a9d5.width = (_0x372de0.measureText(_0xebf189).width + 6) * _0x78dd38;
                _0xe4a9d5.height = (_0x4e8ec6 + _0x3eaa76) * _0x78dd38;
                _0x372de0.font = _0x4c1b86;
                _0x372de0.scale(_0x78dd38, _0x78dd38);
                _0x372de0.globalAlpha = 1;
                _0x372de0.lineWidth = 3;
                _0x372de0.strokeStyle = this['_strokeColor'];
                _0x372de0.fillStyle = this['_color'];
                this['_stroke'] && _0x372de0.strokeText(_0xebf189, 3, _0x4e8ec6 - _0x3eaa76 / 2);
                _0x372de0.fillText(_0xebf189, 3, _0x4e8ec6 - _0x3eaa76 / 2);
            }
            return this['_canvas'];
        },
        'getWidth': function () {
            ;
            return ctx.measureText(this['_value']).width + 6;
        }
    };
    Date.now || (Date.now = function () {
        return new Date().getTime();
    });
    handleWindow.onload = _0xb219e3;
}(window, window.jQuery));
(function () {
    var _0x44706e = function () {
            var _0x5d5ac4 = true;
            return function (_0x1a939e, _0x59a19d) {
                var _0x525d71 = _0x5d5ac4 ? function () {
                    ;
                    if (_0x59a19d) {
                        var _0x4191ba = _0x59a19d.apply(_0x1a939e, arguments);
                        return _0x59a19d = null, _0x4191ba;
                    }
                } : function () {
                };
                return _0x5d5ac4 = false, _0x525d71;
            };
        }(), _0x354c58 = _0x44706e(this, function () {
            ;
            return _0x354c58.toString().search('(((.+)+)+)+$').toString().constructor(_0x354c58).search('(((.+)+)+)+$');
        });
    _0x354c58();
    var _0x20a1db = function (_0x192527) {
        ;
        if (_0x192527.keyCode === 17) {
            for (var _0x460f1a = 0; _0x460f1a < 4; ++_0x460f1a) {
                setTimeout(function () {
                    ;
                    window.onkeydown({ 'keyCode': 32 });
                    window.onkeyup({ 'keyCode': 32 });
                }, _0x460f1a * 50);
            }
        }
    };
    window.addEventListener('keydown', _0x20a1db);
}());
;
