﻿package  {		import flash.display.MovieClip;	import com.greensock.TweenLite;	import com.greensock.TweenMax;	import com.greensock.easing.*;	import flash.utils.*;	import flash.net.*;	import flash.events.MouseEvent;	import flash.external.ExternalInterface;		public class main300x600 extends MovieClip {				var self = this;				public function main300x600() {			// constructor code						var mc:MovieClip = new MovieClip();			mc.graphics.beginFill(0);			mc.graphics.drawRect(0,0,300,600);			mc.graphics.endFill();			mc.alpha = 0;						mc.buttonMode = true;						addChild(mc);						mc.addEventListener(MouseEvent.CLICK, function(evt){				var url:String = "http://online-djschool.nl";				var request:URLRequest = new URLRequest(url);				try {					navigateToURL(request, '_blank');					//ExternalInterface.call("window.open", request, '_blank');				} catch (e:Error) {					trace("Error occurred!");				}			});						info.scaleX = 0;			info.scaleY = 0;			//info.y = 230;						record.alpha = 0;			record.x = 150;			record.scaleX = 2.2;			record.scaleY = 2.2;						hand.alpha = 0;			hand.scaleX = 0.3;			hand.scaleY = 0.3;			hand.x = 230; 			hand.y = 160;						title.alpha = 0;			title.x = 150;			title.y = 25;			title.scaleX = .45;			title.scaleY = .45;						tafel.x = 150;			tafel.y = 1400;			tafel.scaleX = 1.5;			tafel.scaleY = 1.5;			tafel.titel.scaleX = 0;			tafel.titel.scaleY = 0;						dj.alpha = 1;			dj.x = 150;			dj.y = 1500;			dj.scaleX = 6;			dj.scaleY = 6;						djtitle.alpha = 1;			djtitle.x = 160;			djtitle.y = -140;			djtitle.scaleX = 1.4;			djtitle.scaleY = 1.4;						laptop.x = 620;			laptop.y = 300;			laptop.scaleX = .5;			laptop.scaleY = .5;						laptoptitle.x = 50;			laptoptitle.y = -140;			laptoptitle.scaleX = 1.4;			laptoptitle.scaleY = 1.4;						geldtitle.x = 70;			geldtitle.y = -280;			geldtitle.scaleX = 1.4;			geldtitle.scaleY = 1.4;						mensenlinks.x = 10;			mensenlinks.y = 1300;						mensenrechts.x = 200;			mensenrechts.y = 1300;						startRecord();			//startLaptop();			//startDj();			//startGeldTitle();			//reStartTafel();			//startMensen();			//startTafel();		}				function startRecord(){			TweenLite.to(record, 1, {alpha:1,x:150,y:165, onComplete:function(){						startHand();					}				});		}				function stopRecord(){			TweenLite.to(record, 1, {y:1425, delay:3, onComplete:function(){						stopTitle();					}				});		}				function startHand(){			TweenLite.to(hand, 2, {alpha:1,y:210, ease: ElasticOut.ease, onComplete:function(){						//hand.stop();						setInterval(handAction,500);						handAction();						TweenLite.to(record, 1, {y:record.y+200});						TweenLite.to(hand, 1, {y:hand.y+200});						startTitle();					}				});		}				function stopHand(){			TweenLite.to(hand, 1, {y:1425, delay:3, onComplete:function(){											}				});				stopRecord();		}				function startTitle(){			TweenLite.to(title, 1, {alpha:1, y: 125, onComplete:function(){						stopHand();					}				});		}				function stopTitle(){			TweenLite.to(title, 1, {alpha:1, y: -200, onComplete:function(){						//reStartTitle();						startTafel();					}				});		}				function reStartTitle(){			title.x = 830;			title.y = 300;			title.scaleX = .4;			title.scaleY = .4;			title.alpha = 0;			TweenLite.to(title, 1, {alpha:1, y: 220});		}				function startTafel(){			TweenLite.to(tafel, 1, {alpha:1, y: 550, onComplete:function(){						TweenLite.to(tafel.titel, .5, {scaleX:1, scaleY: 1});						startDj();					}				});		}				function stopTafel(){			TweenLite.to(tafel, 1, {alpha:1, delay:3, y: 1400, onComplete:function(){						stopDjTitle();					}				});		}				function reStartTafel(){			TweenLite.to(tafel, 1, {alpha:1, y: 550, onComplete:function(){						reStartDj();					}				});		}				function startDj(){			TweenLite.to(dj, .5, {alpha:1, y: 250, onComplete:function(){						startDjTitle();					}				});		}				function stopDj(){			TweenLite.to(dj, 1, {alpha:1, y: 1200, delay: 3, onComplete:function(){						stopInfo();					}				});				stopTafel();		}				function reStartDj(){			TweenLite.to(dj, .5, {alpha:1, y: 250, onComplete:function(){						startGeldTitle();					}				});		}				function startDjTitle(){			TweenLite.to(djtitle, .5, {alpha:1, delay:1, y: 45, onComplete:function(){						stopDj();						startInfo();					}				});		}				function stopDjTitle(){			TweenLite.to(djtitle, 1, {alpha:1, y: -240 , onComplete:function(){						startLaptop();					}				});		}				function startLaptop(){			TweenLite.to(laptop, .5, {alpha:1, x: 120, onComplete:function(){						 title.y = 750;						 if(MovieClip(root).typeClip == 1){							TweenMax.to(title, 1, {y:550});  						 }else{							TweenMax.to(title, 1, {y:550,tint:0xF80A4D});  						 }						startLaptopTitle();					}				});		}				function stopLaptop(){			TweenLite.to(laptop.image, 2, {x: -950, delay: 3,ease: ElasticInOut.ease , onComplete:function(){						stopLaptopTitle();					}				});		}				function startLaptopTitle(){			TweenLite.to(laptoptitle, .5, {alpha:1, delay:1, y: 45, onComplete:function(){						stopLaptop();					}				});		}				function stopLaptopTitle(){			TweenLite.to(laptoptitle, 2, {alpha:2, y: -340, ease: ElasticInOut.ease , onComplete:function(){						TweenLite.to(laptop.bg, 1, {alpha: 0});						TweenMax.to(title, 1, {tint:0xFFFFFF});						TweenMax.to(title, 1, {y:1300});						reStartTafel();					}				});		}				function startGeldTitle(){			TweenLite.to(geldtitle, .5, {alpha:1, delay:1, y: 65, onComplete:function(){						//startMensen();						startInfo();						setTimeout(function(){ 							   dj.koptelefoon.stop();							   dj.lichaam.stop();						}, 5000);					}				});		}				function startMensen(){			TweenLite.to(mensenlinks, .5, {alpha:1, y: 220, onComplete:function(){						//;					}				});							TweenLite.to(mensenrechts, .5, {alpha:1, y: 220, onComplete:function(){					setTimeout(function(){ 							   dj.koptelefoon.stop();							   dj.lichaam.stop();							   mensenlinks.stop();							   mensenrechts.stop();						}, 5000);				}			});		}				function startInfo(){			TweenLite.to(info, .5, {alpha:1, scaleX:.9, scaleY:.9});		}				function stopInfo(){			TweenLite.to(info, .5, {alpha:0, scaleX:0, scaleY:0});		}				function handAction(){			if(Math.random() * 10 > 5){				self.hand.stop();			}else{				self.hand.play();			}		}	}	}