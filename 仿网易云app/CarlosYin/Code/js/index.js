(function(w) {
	var wv_welcome; //欢迎页webview对象
	
	
	PageOnload();
	
	

	function PageOnload() {
		//如果本地缓存表示用户第一次使用 打开欢迎页
		if(true) {
			openWelcome();
		} else {
			//如果未注册 打开登录页
			if(true) {

			} else {
				initIndex();
			}
		}
	}
	
	
	//打开欢迎页
	function openWelcome() {
		wv_welcome = plus.webview.create('CarlosYin/Code/welcome.html');
		var wv_this = plus.webview.currentWebview();
		wv_this.append(wv_welcome);
		wv_welcome.addEventListener('loaded', function() { //页面加载完成后才显示
			wv_welcome.show();
		}, false);
	}

	//首页动画效果
	function initIndex() {
		setTimeout(function() {
			JT.fromTo(".welcome", 0.5, {
				opacity: 1,
				scale: 1,
				delay: 1
			}, {
				opacity: 0,
				scale: 0.5,
				onEnd: fun_end
			});
			JT.fromTo(".div-main", 0.5, {
				opacity: 0,
				scale: 1.5,
				delay: 1
			}, {
				opacity: 1,
				scale: 1
			});
		}, 1000);

		function fun_end() {
			var div_wel = document.querySelector('.welcome');
			div_wel.remove();
			console.log('fun_end_suc');
		}
	}

	//关闭欢迎页的回调
	window.addEventListener('welcomeClose', function(event) {
		wv_welcome.close('slide-out-left');
		initIndex();
	}, false);

})(window);