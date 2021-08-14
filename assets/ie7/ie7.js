/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-add-user': '&#xe900;',
		'icon-arrow-bottom': '&#xe901;',
		'icon-arrow-bottom-left': '&#xe902;',
		'icon-arrow-bottom-right': '&#xe903;',
		'icon-arrow-left': '&#xe904;',
		'icon-arrow-right': '&#xe905;',
		'icon-arrow-top': '&#xe906;',
		'icon-arrow-top-left': '&#xe907;',
		'icon-arrow-top-right': '&#xe908;',
		'icon-attention': '&#xe909;',
		'icon-bookmark': '&#xe90a;',
		'icon-boring': '&#xe90b;',
		'icon-burger-1': '&#xe90c;',
		'icon-burger-2': '&#xe90d;',
		'icon-calendar': '&#xe90e;',
		'icon-cart': '&#xe90f;',
		'icon-check': '&#xe910;',
		'icon-checkbox': '&#xe911;',
		'icon-chevron-bottom': '&#xe912;',
		'icon-chevron-bottom-right': '&#xe913;',
		'icon-chevron-bottom-right-1': '&#xe914;',
		'icon-chevron-left': '&#xe915;',
		'icon-chevron-right': '&#xe916;',
		'icon-chevron-top': '&#xe917;',
		'icon-chevron-top-left': '&#xe918;',
		'icon-chevron-top-right': '&#xe919;',
		'icon-close': '&#xe91a;',
		'icon-cloth-furniture': '&#xe91b;',
		'icon-comment': '&#xe91c;',
		'icon-compare': '&#xe91d;',
		'icon-dashboard': '&#xe91e;',
		'icon-delivery': '&#xe91f;',
		'icon-dot': '&#xe920;',
		'icon-edit': '&#xe921;',
		'icon-eur': '&#xe922;',
		'icon-filler': '&#xe923;',
		'icon-filter-1': '&#xe924;',
		'icon-filter-2': '&#xe925;',
		'icon-foam-rubber': '&#xe926;',
		'icon-furniture': '&#xe927;',
		'icon-gallery': '&#xe928;',
		'icon-gasket': '&#xe929;',
		'icon-glue': '&#xe92a;',
		'icon-graph': '&#xe92b;',
		'icon-heart': '&#xe92c;',
		'icon-help': '&#xe92d;',
		'icon-home': '&#xe92e;',
		'icon-image_alt': '&#xe92f;',
		'icon-laptop': '&#xe930;',
		'icon-link': '&#xe931;',
		'icon-list': '&#xe932;',
		'icon-location': '&#xe933;',
		'icon-log-in': '&#xe934;',
		'icon-log-out': '&#xe935;',
		'icon-mail': '&#xe936;',
		'icon-mic': '&#xe937;',
		'icon-minus': '&#xe938;',
		'icon-moon': '&#xe939;',
		'icon-more': '&#xe93a;',
		'icon-more-2': '&#xe93b;',
		'icon-mouse': '&#xe93c;',
		'icon-next': '&#xe93d;',
		'icon-notification-1': '&#xe93e;',
		'icon-notification-2': '&#xe93f;',
		'icon-packing': '&#xe940;',
		'icon-pause': '&#xe941;',
		'icon-payment-1': '&#xe942;',
		'icon-payment-2': '&#xe943;',
		'icon-phone': '&#xe944;',
		'icon-photo': '&#xe945;',
		'icon-play': '&#xe946;',
		'icon-plus': '&#xe947;',
		'icon-prev': '&#xe948;',
		'icon-radio-button': '&#xe949;',
		'icon-random': '&#xe94a;',
		'icon-reload': '&#xe94b;',
		'icon-rocket': '&#xe94c;',
		'icon-sad': '&#xe94d;',
		'icon-screw': '&#xe94e;',
		'icon-search': '&#xe94f;',
		'icon-sent': '&#xe950;',
		'icon-settings': '&#xe951;',
		'icon-share': '&#xe952;',
		'icon-shuffle': '&#xe953;',
		'icon-smile': '&#xe954;',
		'icon-soft-forniture': '&#xe955;',
		'icon-star': '&#xe956;',
		'icon-stop': '&#xe957;',
		'icon-store-1': '&#xe958;',
		'icon-store-2': '&#xe959;',
		'icon-sun': '&#xe95a;',
		'icon-switcher': '&#xe95b;',
		'icon-tag': '&#xe95c;',
		'icon-tailor-1': '&#xe95d;',
		'icon-tailor-2': '&#xe95e;',
		'icon-tailor-3': '&#xe95f;',
		'icon-team': '&#xe960;',
		'icon-tile': '&#xe961;',
		'icon-time': '&#xe962;',
		'icon-trash': '&#xe963;',
		'icon-uah': '&#xe964;',
		'icon-usd': '&#xe965;',
		'icon-user': '&#xe966;',
		'icon-video': '&#xe967;',
		'icon-wink': '&#xe968;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
