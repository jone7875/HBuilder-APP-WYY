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
		var swiperV = new Swiper('.swiper-container-v', {
			pagination: '.swiper-pagination-v',
			paginationClickable: true,
			direction: 'vertical',
			spaceBetween: 50
		});

	}

	//	document.getElementById("go").addEventListener('tap', function() {
	//		var indexPage = plus.webview.getLaunchWebview();
	//		mui.fire(indexPage, 'welcomeClose');
	//	});

})();