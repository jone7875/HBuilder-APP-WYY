(function() {

	window.onload = function() {
		var swiperH = new Swiper('.swiper-container-h', {
			pagination: '.swiper-pagination-h',
			effect: 'fade',
			fade: {
				crossFade: false,
			},
			paginationClickable: true,
			spaceBetween: 50
		});

	}

	document.querySelector(".btn-login").addEventListener('tap', function() {
//		var indexPage = plus.webview.getLaunchWebview();
//		mui.fire(indexPage, 'welcomeClose');
		clicked('login.html',false,false);

	});

	document.querySelector(".btn-welcome").addEventListener('tap', function() {
		var indexPage = plus.webview.getLaunchWebview();
		mui.fire(indexPage, 'welcomeClose');
	});

})();