﻿package  {		import flash.display.MovieClip;	import com.greensock.TweenLite;	import com.greensock.TweenMax;	import com.greensock.easing.*;	import flash.utils.*;	import flash.net.*;	import flash.events.MouseEvent;	import flash.external.ExternalInterface;		public class main970x250 extends MovieClip {				var self = this;				public function main970x250() {			// constructor code						var mc:MovieClip = new MovieClip();			mc.graphics.beginFill(0);			mc.graphics.drawRect(0,0,970,250);			mc.graphics.endFill();			mc.alpha = 0;						mc.buttonMode = true;						addChild(mc);						mc.addEventListener(MouseEvent.CLICK, function(evt){				var url:String = "http://online-djschool.nl";				var request:URLRequest = new URLRequest(url);				try {					navigateToURL(request, '_blank');					//ExternalInterface.call("window.open", request, '_blank');				} catch (e:Error) {					trace("Error occurred!");				}			});						info.scaleX = 0;			info.scaleY = 0;			//info.y = 230;						record.alpha = 0;			record.scaleX = 1.6;			record.scaleY = 1.6;						hand.alpha = 0;			hand.scaleX = 0.24;			hand.scaleY = 0.24;			hand.x = 200; 			hand.y = 160;						title.alpha = 0;			title.x = 610;			title.y = 325;			title.scaleX = .7;			title.scaleY = .7;						tafel.x = 500;			tafel.y = 400;			tafel.scaleX = 1.2;			tafel.scaleY = 1.2;			tafel.titel.scaleX = 0;			tafel.titel.scaleY = 0;						dj.alpha = 1;			dj.x = 500;			dj.y = 400;			dj.scaleX = 4;			dj.scaleY = 4;						djtitle.alpha = 1;			djtitle.x = 185;			djtitle.y = -40;			djtitle.scaleX = 1.7;			djtitle.scaleY = 1.7;						laptop.x = 500;			laptop.y = -1140;			laptop.scaleX = .5;			laptop.scaleY = .5;						laptoptitle.x = 85;			laptoptitle.y = -40;			laptoptitle.scaleX = 1.7;			laptoptitle.scaleY = 1.7;						geldtitle.x = 85;			geldtitle.y = -80;			geldtitle.scaleX = 1.7;			geldtitle.scaleY = 1.7;						mensenlinks.x = 10;			mensenlinks.y = 300;						mensenrechts.x = 200;			mensenrechts.y = 300;						startRecord();			//startLaptop();			//startGeldTitle();			//reStartTafel();			//startMensen();			//startTafel();		}				function startRecord(){			TweenLite.to(record, 1, {alpha:1,x:125,y:125, onComplete:function(){						startHand();					}				});		}				function stopRecord(){			TweenLite.to(record, 1, {y:425, delay:1, onComplete:function(){											}				});			stopTitle();		}				function startHand(){			TweenLite.to(hand, 2, {alpha:1,y:170, ease: ElasticOut.ease, onComplete:function(){						//hand.stop();						setInterval(handAction,500);						handAction();						startTitle();					}				});		}				function stopHand(){			TweenLite.to(hand, 1, {y:425, delay:1, onComplete:function(){											}				});			stopRecord();		}				function startTitle(){			TweenLite.to(title, 1, {alpha:1, y: 125, onComplete:function(){						stopHand();					}				});		}				function stopTitle(){			TweenLite.to(title, 2, {alpha:1, y: -140, ease: ElasticInOut.ease, onComplete:function(){						reStartTitle();						startTafel();					}				});		}				function reStartTitle(){			title.x = 830;			title.y = 300;			title.scaleX = .4;			title.scaleY = .4;			title.alpha = 0;			TweenLite.to(title, 1, {alpha:1, y: 220});		}				function startTafel(){			TweenLite.to(tafel, 1, {alpha:1, y: 300, onComplete:function(){						//TweenLite.to(tafel.titel, .5, {scaleX:1, scaleY: 1});						startDj();					}				});		}				function stopTafel(){			TweenLite.to(tafel, 1, {alpha:1, y: 400, onComplete:function(){						stopDjTitle();					}				});		}				function reStartTafel(){			TweenLite.to(tafel, 1, {alpha:1, y: 300, onComplete:function(){						reStartDj();					}				});		}				function startDj(){			TweenLite.to(dj, .5, {alpha:1, y: 90, onComplete:function(){						startDjTitle();					}				});		}				function stopDj(){			TweenLite.to(dj, 1, {alpha:1, y: 400, delay: 2, onComplete:function(){						stopTafel();						stopInfo();					}				});		}				function reStartDj(){			TweenLite.to(dj, .5, {alpha:1, y: 90, onComplete:function(){						startGeldTitle();					}				});		}				function startDjTitle(){			TweenLite.to(djtitle, .5, {alpha:1, delay:1, y: 125, onComplete:function(){						stopDj();						startInfo();					}				});		}				function stopDjTitle(){			TweenLite.to(djtitle, 2, {alpha:2, y: -40, ease: ElasticInOut.ease , onComplete:function(){						startLaptop();					}				});		}				function startLaptop(){			TweenLite.to(laptop, .5, {alpha:1, y: 140, onComplete:function(){						if(MovieClip(root).typeClip == 1){							  						 }else{							TweenMax.to(title, 1, {tint:0xF80A4D});  							//TweenMax.to(title, 1, {tint:0x000000});						 }  						startLaptopTitle();					}				});		}				function stopLaptop(){			TweenLite.to(laptop.image, 1, {y: 1020, delay: 3, onComplete:function(){						stopLaptopTitle();					}				});		}				function startLaptopTitle(){			TweenLite.to(laptoptitle, .5, {alpha:1, delay:1, y: 125, onComplete:function(){						stopLaptop();					}				});		}				function stopLaptopTitle(){			TweenLite.to(laptoptitle, 2, {alpha:2, y: -40, ease: ElasticInOut.ease , onComplete:function(){						TweenLite.to(laptop.bg, 1, {alpha: 0});						if(MovieClip(root).typeClip == 1){							  						 }else{							TweenMax.to(title, 1, {tint:0xFFFFFF});  						 }												reStartTafel();					}				});		}				function startGeldTitle(){			TweenLite.to(geldtitle, .5, {alpha:1, delay:1, y: 115, onComplete:function(){						//startMensen();						startInfo();						setTimeout(function(){ 							   dj.koptelefoon.stop();							   dj.lichaam.stop();						}, 5000);					}				});		}				function startMensen(){			TweenLite.to(mensenlinks, .5, {alpha:1, y: 220, onComplete:function(){						//;					}				});							TweenLite.to(mensenrechts, .5, {alpha:1, y: 220, onComplete:function(){					setTimeout(function(){ 							   dj.koptelefoon.stop();							   dj.lichaam.stop();							   mensenlinks.stop();							   mensenrechts.stop();						}, 5000);				}			});		}				function startInfo(){			TweenLite.to(info, .5, {alpha:1, scaleX:1, scaleY:1});		}				function stopInfo(){			TweenLite.to(info, .5, {alpha:0, scaleX:0, scaleY:0});		}				function handAction(){			if(Math.random() * 10 > 5){				self.hand.stop();			}else{				self.hand.play();			}		}	}	}