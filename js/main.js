$('li').mousedown(function(){
	    var a=$(this).html();
		//拼接路径
		var  src = "./music/"+$(this).attr("value")+'.MP3';
		console.log(src);
		//创建媒体对象
		var audio = new Audio(src);
		//调用play方法
		audio.play();
		// 改变当前按键的颜色	
		$(this).css('background','rgba(223,223,223,1)');
	})

	//鼠标抬起事件
	$('li').mouseup(function(){
		//回复键盘的颜色
		var a=$(this).html();
		var src,col;
	    (a=='') ? col = "linear-gradient(to top,rgba(121,130,137,1),rgba(19,26,42,1))" : col = "rgba(255,255,255,1)";
		$(this).css('background',col);
	})
 
	//mouseover  mouseout
	$('li').mouseout(function(){
		var a=$(this).html();
		var col;
		(a=='') ? col = "linear-gradient(to top,rgba(121,130,137,1),rgba(19,26,42,1))" : col = "rgba(255,255,255,1)";
		$(this).css('background',col);
	})
 
	//键盘按下事件
	$(window).keypress(function(e){
		//获取当前的按键
		var k = e.key.toLowerCase();
		//针对按键进行不同的操作
		switch(k){
			case "q":
				$('li:contains(C5)').mousedown();
				break;
			case "w":
				$('li:contains(D5)').mousedown();
				break;
			case "e":
				$('li:contains(E5)').mousedown();
				break;
			case "r":
				$('li:contains(F5)').mousedown();
				break;
			case "t":
				$('li:contains(G5)').mousedown();
				break;
			case "y":
				$('li:contains(A5)').mousedown();
				break;
			case "u":
				$('li:contains(B5)').mousedown();
				break;
			case "i":
				$('li:contains(C6)').mousedown();
				break;
			case "o":
				$('li:contains(D6)').mousedown();
				break;
			case "p":
				$('li:contains(E6)').mousedown();
				break;
			case "j":
				$('li:contains(F6)').mousedown();
				break;
			case "k":
				$('li:contains(G6)').mousedown();
				break;
			case "l":
				$('li:contains(A6)').mousedown();
				break;
			case ";":
				$('li:contains(B6)').mousedown();
				break;
			case "a":
				$('li[value=SC5]').mousedown();
				break;
			case "s":
				$('li:contains(SD5)').mousedown();
				break;
			case "d":
				$('li:contains(SF5)').mousedown();
				break;
			case "f":
				$('li:contains(SG5)').mousedown();
				break;
			case "g":
				$('li:contains(SA5)').mousedown();
				break;
			case "h":
				$('li:contains(SC6)').mousedown();
				break;
			case "c":
				$('li:contains(SD6)').mousedown();
				break;
			case "v":
				$('li:contains(SF6)').mousedown();
				break;
			case "b":
				$('li:contains(SG6)').mousedown();
				break;
			case "n":
				$('li:contains(SA6)').mousedown();
				break;
			default:
				return false;
		}
		return false;
	})
    $(window).keyup(function(){
		$('li').not(function(){
			var a=$(this).html();
			var src,col;
			(a=='') ? col = "linear-gradient(to top,rgba(121,130,137,1),rgba(19,26,42,1))" : col = "rgba(255,255,255,1)";
			$(this).css('background',col);
		})
	})