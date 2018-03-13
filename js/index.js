/*header start*/
(function(){
	var $buy = $('#header .h_main .h_m_right .h_m_r_buy');
	var $buy_shopcar = $buy.find('a.shopcar');
	var $buy_hide = $buy.find('.hide');
	$buy.hover(function(){
		$buy_shopcar.addClass('hover');
		$buy_hide.stop().slideDown();
	},function(){		
		$buy_hide.stop().slideUp(250,function(){
			$buy_shopcar.removeClass('hover');
		});
	});
})();
/*header end */

/*nav start */
/*nav_main */
(function(){
	var $main = $('#nav .n_content .n_c_main');
	var $aProduct = $main.find('ul li.product');
	var $n_hide = $('#nav .n_hide');
	var $ul = $n_hide.find('.n_h_main ul');
	$aProduct.hover(function(){
		$n_hide.stop().slideDown(300);
		$ul.eq($(this).index()).show().siblings().hide();
	},function(){		
		$n_hide.stop().slideUp();
	});
	$n_hide.hover(function(){
		$(this).stop().slideDown(300);
	},function(){		
		$(this).stop().slideUp();
	});
})();
/*nav_search */
(function(){
	$search = $('#nav .n_content .n_c_search');
	$input = $('#nav .n_content .n_c_search .n_c_s_text input');
	$hide = $('#nav .n_content .n_c_search .n_c_s_text .hide');
	$tips = $('#nav .n_content .n_c_search .n_c_s_text a.tip');
	$input.on('focus blur',function(){
		$search.toggleClass('focus');
		$hide.fadeToggle(300);
		$tips.fadeToggle(100);
	})	
	/*$input.focus(function(){
		$search.addClass('focus');
	}).blur(function(){
		$search.removeClass('focus');
	})*/
})();
/*nav end */

/* banner start */
/*banner_main */
(function(){
	var $main = $('#banner .b_main')
	var $pic = $('#banner .b_main .b_m_pic ul li');
	var $tab = $('#banner .b_main .b_m_tab ul li');
	var $btn = $('#banner .b_main .b_m_btn div');
	var index = 0,timer =null,nowTime = 0;
	var length = $pic.length;
	$tab.eq(0).addClass('on');
	$pic.eq(0).show();
	$tab.click(function(){//下标按钮点击
		if(new Date - nowTime >800){
			nowTime = new Date;
			flash(function(){
				index = $(this).index();
			}.bind(this));
		}		
	});
	//左右按钮点击
	$btn.click(function(){
		if(new Date - nowTime >800){
			nowTime = new Date;
			var i = $(this).index();
			flash(function(){			
				if(i){
					index++;
					index %= length;			
				}else{
					index--;
					if(index < 0){
						index = length-1;
					}
				}		
			});		
		}
		
	});
	function flash(fn){
		$pic.eq(index).stop().fadeOut(800);
		$tab.eq(index).removeClass();
		fn();
		$pic.eq(index).stop().fadeIn(800);
		$tab.eq(index).addClass('on');	
	}
	//自动播放
	$main.hover(function(){clearInterval(timer);},auto);
	function auto(){
		timer = setInterval(function(){
			flash(function(){
				index++;
				index %= length;
			});			
		},3000);	
	}
	auto();
})();
/*banner_sidebar */
(function(){
	$fistLi =  $('#banner .b_sidebar ul .firstLi');
	$sidebar = $fistLi.find('item')
	$info = $('#banner .b_sidebar ul .firstLi .info');
	$info.each(function(){
		var $li = $(this).find('li');
		var length = $li.length;
		var width = $li.width();
		var height = $li.height();
		var row = Math.ceil($li.length / 6);
		$(this).width(row*width);
		$li.each(function(i){
			var x = Math.floor(i / 6),
				y = i % 6;
			$(this).css({
				left: x*width + 'px',
				top: y*height + 'px'
			})		
		})	
	});	
	$fistLi.hover(function(){		
		$(this).find('.info').show();
	},function(){		
		$(this).find('.info').hide();
	});
})();
/* banner end */

/* star start */
(function(){
	var $s_t_btn = $('#star .s_title .s_t_btn span');
	var $star_show = $('#star .s_banner');
	var index = 0;
	var timer = null;
	$s_t_btn.click(function(){
		var i = $(this).index();
		if(i !== index){
			clearInterval(timer);
			index = i;
			$star_show.stop().animate({
				marginLeft: -1226*i + 'px'
			},500);
			$(this).removeClass('active').siblings().addClass('active');
			auto();
		}
	});
	auto();
	function auto(){
		timer = setInterval(function(){	
				index = !index;				
				$s_t_btn.eq(index).removeClass('active').siblings().addClass('active');	
				$star_show.stop().animate({
					marginLeft: -1226*index + 'px'
				},500);				
		},3000);
	};
})();

/* star end */

/* content end */
/* match */
(function(){
	var $right_bar = $('#content #c_match .c_m_title .right_bar ul li');
	var $img_show = $('#content #c_match .c_m_img .right ul');
	var $li =$('#content #c_match .c_m_img .right ul li')
		$right_bar.eq(0).addClass('hover');
		$img_show.eq(0).show();	
	$right_bar.mouseenter(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$img_show.eq($(this).index()).show().siblings().hide();		
	});
	$li.hover(function(){
		$(this).find('div.comments').addClass('show');
	},function(){
		$(this).find('div.comments').removeClass('show');
	});
})();
/* neirong */
(function(){
	var $c_n_banner = $('#content #c_neirong .c_n_banner');
	var $li1 = $c_n_banner.find('.ul1 .li1');
	var clickTime = 0;
	var $li1W = $li1.width();
	var $last = $li1.find('.ul2 .last');
	$li1.hover(function(){
		$(this).find('i.btn').stop().fadeIn(200);
	},function(){
		$(this).find('i.btn').stop().fadeOut(200);
	}).each(function(){	
		var $tab = $(this).find('ol.tab li');
		var $btnI = $(this).find('.div_btn i.btn');
		var index = 0;
		$tab.eq(0).addClass('on');
		$tab.click(function(){//下标点击
			index = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$(this).parents('li.li1').find('ul.ul2').stop().animate({marginLeft: -index*$li1W + 'px'});
		});	
		$btnI.click(function(){//左右点击
			
			if(new Date() - clickTime >= 300){
				clickTime = new Date();
				$(this).index()?index++:index--;
					index = Math.min(index,$tab.length-1);	
					index = Math.max(index,0);	console.log(index);			
				$(this).parents('li.li1').find('ol.tab li').eq(index).addClass('on').siblings().removeClass('on');
				$(this).parents('li.li1').find('ul.ul2').stop().animate({marginLeft: -index*$li1W + 'px'});					
		};
	}).each(function(){
		this.onselectstart = function(){return false};
		});	
	});	
	$last.each(function(){
		var $more = $(this).find('p.more a');
		var color =  $(this).parents('.ul1 .li1').css('borderTopColor');
		$more.css({border:'1px solid ' + color});
		$more.hover(function(){
			$(this).css({background:color,color:'white'});
		},function(){
			$(this).css({background:'white',color:color});
		});
	});	
})();
/* video cover end */
(function(){
	var $play = $('#content #c_video .c_v_main ul li a');
	var $cover = $('#c_video .c_v_cover');
	$cover.on('click','.main .main_title span.m_t_colse',function(){
		$(this).parent().parent().animate({
			marginTop:'-600px'
		},300,function(){
			$(this).find('.main').remove();	
			$cover.hide();
		});
	});
	var arr = ['https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=m0340wo1oyf&auto=0','https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=m0376ccduk4&auto=0','http://player.video.qiyi.com/aaee49c0d1f93b790f026a39f20c02a4/0/0/w_19rvdswbt9.swf-albumId=9509455009-tvId=9509455009-isPurchase=0-cnId=30','http://player.video.qiyi.com/aaee49c0d1f93b790f026a39f20c02a4/0/0/w_19rvdswbt9.swf-albumId=9509455009-tvId=9509455009-isPurchase=0-cnId=30'];
	$play.click(function(){
		var index = $(this).parent().index();
		$cover.show();
		$cover.append('<div class="main"><div class="main_title clearfix"><span class="m_t_left">'+ $(this).find('p.name').html() +'</span><span class="m_t_colse"> x </span></div><div class="main_play"><embed src='+	arr[index] +' allowFullScreen="true" quality="high" width="800" height="540" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed></div></div>');
	})

})();
/* content end */