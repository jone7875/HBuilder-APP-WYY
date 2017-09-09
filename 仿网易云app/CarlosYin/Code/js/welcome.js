(function() {

	//获取屏幕宽度 用于顶部文字动画
	var body_width = document.body.clientWidth;

	//获取推荐背景图高度
	var img_bg1_heigth = document.body.querySelector('.img-bg1').clientHeight;

	var img_cover1 = document.body.querySelector('.img-cover1');
	var img_cover1_width = Math.floor(img_bg1_heigth / 4.87);
	var img_cover1_top = Math.floor(img_bg1_heigth / 2.24);
	img_cover1.style.width = img_cover1_width + 'px';
	img_cover1.style.height = img_cover1_width + 'px';
	img_cover1.style.top = img_cover1_top + 'px';

	var img_cover2 = document.body.querySelector('.img-cover2');
	var img_cover2_width = Math.floor(img_bg1_heigth / 10.6);
	var img_cover2_top = Math.floor(img_bg1_heigth / 3.7);
	img_cover2.style.width = img_cover2_width + 'px';
	img_cover2.style.height = img_cover2_width + 'px';
	img_cover2.style.top = img_cover2_top + 'px';

	//当前激活的欢迎页序号
	var ativeIndex = 0;
	var bullets = document.body.querySelectorAll('.swiper-pagination-bullet');
	//是否正在播放动画中
	var isAniEnd = true;
	//动画持续时间
	var AniDec = 0.3;

	//监听手势左移
	document.body.querySelector('.swiper-bg').addEventListener("swipeleft", function() {
		if(!isAniEnd) return;
		//如果是第三页 进入app
		if(ativeIndex == 2) {
			console.log('进入app');
			return;
		}

		isAniEnd = false;

		//从第一页切换到第二页的动画播放
		if(ativeIndex == 0) {
			JT.to('.mytitletext1', AniDec, {
				left: -body_width,
				onEnd: AniEnd
			});
			JT.to('.mytitletext2', AniDec, {
				left: -body_width,
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg1', AniDec, {
				opacity: 1
			}, {
				opacity: 0,
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg2', AniDec, {
				opacity: 0
			}, {
				opacity: 1,
				onEnd: AniEnd
			});

			JT.to('.img-cover1', AniDec, {
				top: 0,
				onEnd: AniEnd
			});

			JT.to('.img-cover2', AniDec, {
				opacity: 1,
				onEnd: AniEnd
			});
			//从第二页切换到第三页的动画播放
		} else if(ativeIndex == 1) {
			JT.to('.mytitletext2', AniDec, {
				left: -(2 * body_width),
				onEnd: AniEnd
			});
			JT.to('.mytitletext3', AniDec, {
				left: -(2 * body_width),
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg2', AniDec, {
				opacity: 1
			}, {
				opacity: 0,
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg3', AniDec, {
				opacity: 0
			}, {
				opacity: 1,
				onEnd: AniEnd
			});

			JT.to('.img-cover1', AniDec, {
				opacity: 0,
				onEnd: AniEnd
			});

			JT.to('.img-cover2', AniDec, {
				top: 3,
				scale: 0.7,
				onEnd: AniEnd
			});

		}
		ativeIndex++;
		bulletChange();
	});

	//监听手势右移
	document.body.querySelector('.swiper-bg').addEventListener("swiperight", function() {
		if(!isAniEnd) return;

		//如果是第一页 不允许右翻
		if(ativeIndex == 0) {
			return;
		}

		isAniEnd = false;

		if(ativeIndex == 1) {
			JT.to('.mytitletext2', AniDec, {
				left: 0,
				onEnd: AniEnd
			});
			JT.to('.mytitletext1', AniDec, {
				left: 0,
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg2', AniDec, {
				opacity: 1
			}, {
				opacity: 0,
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg1', AniDec, {
				opacity: 0
			}, {
				opacity: 1,
				onEnd: AniEnd
			});
			JT.to('.img-cover1', AniDec, {
				top: img_cover1_top,
				onEnd: AniEnd
			});

			JT.to('.img-cover2', AniDec, {
				opacity: 0,
				onEnd: AniEnd
			});
		} else if(ativeIndex == 2) {
			JT.to('.mytitletext3', AniDec, {
				left: 0,
				onEnd: AniEnd
			});
			JT.to('.mytitletext2', AniDec, {
				left: -375,
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg3', AniDec, {
				opacity: 1
			}, {
				opacity: 0,
				onEnd: AniEnd
			});
			JT.fromTo('.img-bg2', AniDec, {
				opacity: 0
			}, {
				opacity: 1,
				onEnd: AniEnd
			});
			JT.to('.img-cover1', AniDec, {
				opacity: 1,
				onEnd: AniEnd
			});

			JT.to('.img-cover2', AniDec, {
				top: img_cover2_top,
				scale: 1,
				onEnd: AniEnd
			});
		}
		ativeIndex--;
		bulletChange();
	});

	function AniEnd() {
		isAniEnd = true;
	}

	function bulletChange() {
		var b_index = 0;
		[].forEach.call(bullets, function(item) {
			item.classList.remove('swiper-pagination-bullet-active');
			if(b_index == ativeIndex) item.classList.add('swiper-pagination-bullet-active');
			b_index++;
		});
	}
})();