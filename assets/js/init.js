$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 2000);

});

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			'global':	{ range: '*', href: 'assets/css/style.css', containers: 1400, grid: { gutters: 40 }, viewport: { scalable: false } },
			'wide':		{ range: '961-1880', href: 'assets/css/style-wide.css', containers: 1200, grid: { gutters: 40 } },
			'normal':	{ range: '961-1620', href: 'assets/css/style-normal.css', containers: 960, grid: { gutters: 40 } },
			'narrow':	{ range: '961-1320', href: 'assets/css/style-narrow.css', containers: '100%', grid: { gutters: 20 } },
			'narrower':	{ range: '-960', href: 'assets/css/style-narrower.css', containers: '100%', grid: { gutters: 15 } },
			'mobile':	{ range: '-640', href: 'assets/css/style-mobile.css', grid: { collapse: true } }
		}
	}, {
		layers: {
			layers: {
				sidePanel: {
					hidden: true,
					breakpoints: 'narrower',
					position: 'top-left',
					side: 'left',
					animation: 'pushX',
					width: 240,
					height: '100%',
					clickToClose: true,
					html: '<div data-action="moveElement" data-args="header"></div>',
					orientation: 'vertical'
				},
				sidePanelToggle: {
					breakpoints: 'narrower',
					position: 'top-left',
					side: 'top',
					height: '4em',
					width: '5em',
					html: '<div data-action="toggleLayer" data-args="sidePanel" class="toggle"></div>'
				}
			}
		}
	});
	
	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];
	
		if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
	
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
	
		var that = this;
		var delta = 200 - Math.random() * 100;
	
		if (this.isDeleting) { delta /= 2; }
	
		if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
		}
	
		setTimeout(function() {
		that.tick();
		}, delta);
	};

	window.onload = function () {
		//var backgroundVideo = document.getElementById("video_background");
		//document.querySelector('video').play();
		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
			  new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	}

	$(function() {

		var	$window = $(window),
			$body = $('body');
			
		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');
			
			$window.on('load', function() {
				$body.removeClass('is-loading');
			});
			
		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Forms (IE<10).
			var $form = $('form');
			if ($form.length > 0) {

				$form.find('.form-button-submit')
					.on('click', function() {
						$(this).parents('form').submit();
						return false;
					});

				if (skel.vars.IEVersion < 10) {
					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();
				}

			}

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');
			
			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');
						
						if (href[0] != '#')
							return;
						
						e.preventDefault();
						
						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');
					
						// Set this link to active
							t.addClass('active');
					
					});

			// Initialize scrollzer.
				var ids = [];
				
				$nav_a.each(function() {
					
					var href = $(this).attr('href');
					
					if (href[0] != '#')
						return;
				
					ids.push(href.substring(1));
				
				});
				
				$.scrollzer(ids, { pad: 200, lastHack: true });

	});

})(jQuery);


var SoundController = function () {
    function t() {
        var e, i, n;
        try {
            if (relax.caniuse.localstorage() && "true" === window.localStorage.getItem("disable-sound") && (t.disableSound = !0), relax.browser.isMobile() && (t.disableSound = !0), t.disableSound && $("#footer .mute-btn").remove(), t.disableSound) return;
            for ($.support.pageVisibility && ($(document).on("show.visibility", relax.dom.bind(this, this.onDocumentShow)), $(document).on("hide.visibility", relax.dom.bind(this, this.onDocumentHide))), this._mainLoop = new buzz.sound("/static/sound/Drone Loop (Main)", {formats: ["ogg", "mp3"]}), this._mainLoop.bind("canplaythrough", function (t) {
                return function () {
                    return t._caseLoop = new buzz.sound("../musics/Drone Loop (Case)", {
                        formats: ["ogg", "mp3"],
                        autoplay: !1
                    }), t._textLoop = new buzz.sound("../musics/Drone Loop (About)", {formats: ["ogg", "mp3"], autoplay: !1})
                }
            }(this)), this._mainLoop.play().fadeIn(3e3).loop(), window.application.pages.on("updated", this.onPageUpdated, this), this._sounds = [], this._sounds.hover = [], this._sounds.hover_index = -1, e = i = 1; 8 >= i; e = i += 1) this._sounds.hover.push(new buzz.sound("../musics/Bit " + e, {formats: ["ogg", "mp3"]}));
            for (this._sounds.click = [], this._sounds.click_index = -1, e = n = 1; 6 >= n; e = n += 1) this._sounds.click.push(new buzz.sound("../musics/Click " + e, {formats: ["ogg", "mp3"]}));
            relax.caniuse.localstorage() && "true" === window.localStorage.getItem("muted") && (this.toggleMute(), $("#footer .mute-btn").addClass("selected"))
        } catch (r) {
        }
    }

    return t.prototype._mainLoop = null, t.prototype._caseLoop = null, t.prototype._textLoop = null, t.prototype._magicCatLoop = null, t.prototype._sounds = null, t.prototype._mute = !1, t.disableSound = !1, t.prototype.toggleMute = function () {
        this._mute = !this._mute, relax.caniuse.localstorage() && window.localStorage.setItem("muted", this._mute ? "true" : "false");
        try {
            this._mute ? "undefined" != typeof buzz && null !== buzz && buzz.all().mute() : "undefined" != typeof buzz && null !== buzz && buzz.all().unmute()
        } catch (t) {
        }
        return {
            "catch": function (t) {
            }
        }
    }, t.prototype.onPageUpdated = function (e) {
        var i, n, r, o, a, s;
        if (!t.disableSound && !this._mute && -1 === e.get("type").toLowerCase().indexOf("filter")) {
            try {
                null != (i = this._magicCatLoop) && i.stop(), e.isTextType() ? (null != (n = this._caseLoop) && n.stop(), this._textLoop && (this._textLoop.setPercent(0).play().fadeIn(3e3).loop(), this._mainLoop.fadeOut(3e3, function () {
                    return this.stop()
                }))) : "case" === e.get("type") ? (null != (r = this._textLoop) && r.stop(), "work/magic-cat" === e.get("url") ? (this._magicCatLoop || (this._magicCatLoop = new buzz.sound("../musics/magic_cat", {formats: ["ogg", "mp3"]})), this._magicCatLoop.setPercent(0).play().fadeIn(1e3).loop(), this._mainLoop.stop(), null != (o = this._caseLoop) && o.fadeOut(3e3)) : this._caseLoop && (this._caseLoop.setPercent(0).play().fadeIn(3e3).loop(), this._mainLoop.fadeOut(3e3, function () {
                    return this.stop()
                }))) : (null != (a = this._caseLoop) && a.fadeOut(3e3, function () {
                    return this.stop()
                }), null != (s = this._textLoop) && s.fadeOut(3e3, function () {
                    return this.stop()
                }), this._mainLoop.play().fadeIn(3e3))
            } catch (l) {
            }
            return {
                "catch": function (t) {
                }
            }
        }
    }, t.prototype.play = function (e, i) {
        var n;
        if (null == e && (e = null), null == i && (i = -1), !t.disableSound && !this._mute) {
            try {
                if (e && this._sounds[e]) {
                    if (-1 !== i) n = i; else for (n = this._sounds[e + "_index"]; this._sounds[e + "_index"] === n;) n = Math.floor(Math.random() * this._sounds[e].length);
                    this._sounds[e + "_index"] = n, this._sounds[e][this._sounds[e + "_index"]].setPercent(0).play()
                }
            } catch (r) {
            }
            return {
                "catch": function (t) {
                }
            }
        }
    }, t.prototype.onDocumentShow = function () {
        return this._mute ? void 0 : "undefined" != typeof buzz && null !== buzz ? buzz.all().unmute() : void 0
    }, t.prototype.onDocumentHide = function () {
        return "undefined" != typeof buzz && null !== buzz ? buzz.all().mute() : void 0
    }, t
}();