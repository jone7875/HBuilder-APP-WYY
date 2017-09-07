(function() {
	JT.fromTo(".welcome", 1, {opacity:1,scale:1}, {opacity:0,scale:0.5,onEnd:fun_end});
	JT.fromTo(".div-main", 1, {opacity:0,scale:1.5}, {opacity:1,scale:1});


	function fun_end(){
		let div_wel = document.querySelector('.welcome');
		document.body.removeChild(div_wel);
	}
	//	JT.to("#rect", 1, {
	////		left: 100,
	////		top: 100,
	//		opacity:0.5,
	//		scale:3
	//	});

	//第一部分：操作div的二维相关属性:
	//位置操作：CSS的(left top margin) 和 GSAP里的(x y) 和 js里的(offsetLeft offsetHeight)
	//left和top是相对网页或元素的父类的位置来计算的坐标，而x,y则是相对元素起始位置来计算的坐标，即元素的起始位置的x,y的值为(0,0)
	//	TweenLite.to("#rect", 1, {
	//		left: 500,
	//		top: 200,
	//		ease: Back.easeOut
	//	});
	//TweenLite.to("#rect",1,{x:300,y:50,ease:Back.easeOut});

	//注意GSAP里margin-left padding-left等属性的写法要写成marginLeft paddingLeft，即不要“-”，接在“-”后的单词的首字母要大写
	//padding不算是位置的操作，但为了方便，还是和margin写在一起吧
	//TweenLite.to("#rect",1,{marginLeft:100,paddingTop:10,ease:Back.easeOut});

	//大小操作scaleX scaleY scale width height
	//注意:虽然scale（缩放比例）和width height都可以让元素放大，但是，scale会元素内的内容也一起放大，而width height只是把容器放大啦，里面的内容不大小不变
	//TweenLite.to("#rect",1,{scaleX:2,scale:1.5,ease:Back.easeOut});
	//TweenLite.to("#rect",1,{scale:2,ease:Back.easeOut});
	//TweenLite.to("#rect",1,{width:200,height:200,ease:Back.easeOut});

	//变换(transform)操作:
	//其实刚才说的rotation scale x y都属于变换的操作，这里说另外的两个变换（rotation(旋转) skew（倾斜）） 
	//TweenLite.to("#rect",1,{rotation:45,ease:Back.easeOut});
	//TweenLite.to("#rect",1,{skewX:30,ease:Back.easeOut});
	//TweenLite.to("#rect",1,{skewY:-30,ease:Back.easeOut});

	//第二部分，其他非二维属性操作
	//如果你以为GSAP只能用来移动、放大缩小一些东西来做一些小动画，那你就大错特错啦！
	//来看一下下面的相关属性的操作

	//边框的操作，因为前面我们用css定义的方块（rect）是没有边框的，所以我们先来设置一下它的边框，方法如下
	//TweenLite.set("#rect",{border:"solid 1px #000"});//其他的属性也可以使用TweenLite.set来设置
	//TweenLite.to("#rect",1,{borderWidth:10,ease:Back.easeOut});

	//TweenLite.to("#rect",2,{backgroundColor:"#FF00FF",ease:Back.easeOut});//背景色
	//TweenLite.to("#rect",2,{color:"#FFF",ease:Back.easeOut});//字体颜色
	//TweenLite.to("#rect",1,{fontSize:24,ease:Back.easeOut});//字体大小
	//行高也是可以设置的,这个一定要使用单位，不然会发生错误
	//TweenLite.to("#rect",1,{lineHeight:"50px",ease:Back.easeOut});
	//TweenLite.to("#rect",1,{opacity:0.5,ease:Back.easeOut});//透明度(兼容所有主流浏览器，包括IE6);
	//既然说到opacity，就是一下另一个调整元素透明度的属性autoAlpha(GSAP里的，CSS里没有)。当元素的透明度为0时，它会自动把元素的display属性值设置为0，即把元素隐藏
	//TweenLite.to("#rect",1,{autoAlpha:0,ease:Back.easeOut});

	//第二部分就说到这里，说得不怎 么全面，也不可能说得全面，我也是小白一个，只是把学习笔记记录下来了罢了，没说到的，就请同学们自己动手尝试一下啦！如果，你在使用一个属性，学得不需 要缓动或渐变时，TweenLite依然是很有用的，你只需要使用TweenLite.set方法，就可以快速设置一个元素的多个属性，例如：
	//TweenLite.set("#rect",{width:"400px",height:"400px",position:"static",margin:"0 auto"});

	//第三部分，三维属性操作（rotationX rotationY rotationZ z等等,不懂这几个属性的意思的同学请百度）
	//并不是所有的浏览器都支持CSS3的3D属性，可以到以下网址(http://caniuse.com/transforms3d)查看都有哪些浏览器支持3D属性

	//也就是说使用之前你应该：
	//设置元素的父元素的perspactive的值，
	//TweenLite.set("body",{perspactive:500});
	//或设置元素自身的transformPerspactive的值
	//TweenLite.set("#rect",{transformPerspacity:500});
	//再或者，就直接设置CSS的默认transformPerspactive的值
	//CSSPlugin.defaultTransformPerspactve=500;

	//好吧，我们来试一下↓
	//TweenLite.to("#rect",1,{rotationX:30,ease:Back.easeOut});
	//TweenLite.to("#rect",1,{rotationY:100,ease:Back.easeOut});
	//TweenLite.to("#rect",1,{rotationZ:45,ease:Back.easeOut});
})();