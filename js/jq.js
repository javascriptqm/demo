
$(function () {
	/* 检测浏览器高度 */
	$(window).scroll(function(){
		console.log($(this).scrollTop())
		if($(this).scrollTop() >220){
			$(".layout").css({
				"opacity":"0",
				"top":"-195px"
			})
		}else if($(this).scrollTop() > 0){
			$(".layout").css({
				"opacity":"1",
				"top":"0"
				})
		}
		if($(this).scrollTop() >522){
			$(".fixed-img").css({
				"opacity":"1",
			})
		}else if($(this).scrollTop() <522){
			$(".fixed-img").css({
				"opacity":"0",
				})
		}
		if($(this).scrollTop() >1017){
			$(".right-logo").css({
				"opacity":"1",
			})
		}else if($(this).scrollTop() <1017){
			$(".right-logo").css({
				"opacity":"0",
				})
		}
	})
	/*  */
	$(".chec").toggle(function(){
		$(".submitBtn").css({
			"background":"#22282d",
		})
	},function(){
		$(".submitBtn").css({
			"background":"#eaeaea",
		})
	})
	$(".wish-text").click(function(){
		$("el-dialog__wrapper").css("opacity","1")
	})
	/* 店铺点击效果 */
	$(".choose").toggle(function(){
		$(this).children("img").attr("src","shopbk/img/down.gif").next().children().children(".el-scrollbar").show()
	},function(){
		$(this).children("img").attr("src","shopbk/img/upp.gif").next().children().children(".el-scrollbar").hide()
	})
	/* 店铺点击效果 */
	$(".el-scrollbar").toggle(function(){
		$(".el-scrollbarr").show()
	},function(){
		$(".el-scrollbarr").hide()
	})
	/* 店铺点击效果 */
	$(".el-scrollbarr").toggle(function(){
		$(".el-scrollbarrr").show()
	},function(){
		$(".el-scrollbarrr").hide()
	})
	/* 公用的 */
	$("#header").load("header/header.html")
	$("#return").load("returntop/returntop.html")
	$("#foot").load("foot/foot.html")
	$("#bottom").load("bottom/bottom.html")
})
