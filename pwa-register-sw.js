                                 var swsource = "https://runtogether.sal-man.dk/pwa-sw.js";                                          
                                                                  
			         if("serviceWorker" in navigator) {
                                     window.addEventListener('load', function() {			         		
			                navigator.serviceWorker.register(swsource, {scope: 'https://runtogether.sal-man.dk/'}).then(function(reg){                                                                                        
			                    console.log('Congratulations!!Service Worker Registered ServiceWorker scope: ', reg.scope);
                                                                                                                    
			                }).catch(function(err) {
			                    console.log('ServiceWorker registration failed: ', err);
			                });	
                                                                                                                                                                                                                                                                              
			                var deferredPrompt;                                                                                                                                                                                                                                                                                                                        
                                                window.addEventListener('beforeinstallprompt', (e) => {
							  
							  deferredPrompt = e;
                                                          
                                                            if(deferredPrompt != null || deferredPrompt != undefined){

                                                                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                                if(a2hsviashortcode !== null){
                                                                    for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                      a2hsviashortcode[i].style.display="block"; 
                                                                  }
                                                                }
                                                                
                                                                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                                                                if(a2hsviashortcode !== null && checkbarClosedOrNot()){
                                                                    for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                      a2hsviashortcode[i].style.display="flex"; 
                                                                  }
                                                                }

                                                             }
                                                                                                                    
							});			    
              function checkbarClosedOrNot(){
                var closedTime = PWAforwpreadCookie("pwaforwp_prompt_close")
                  if(closedTime){
                    var today = new Date();
                    var closedTime = new Date(closedTime);
                    var diffMs = (today-closedTime);
                    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
                    if(diffMins<4){
                      return false;
                    }
                  }
                  return true;
              }
              function PWAforwpreadCookie(name) {
                  var nameEQ = name + "=";
                  var ca = document.cookie.split(";");
                  for(var i=0;i < ca.length;i++) {
                      var c = ca[i];
                      while (c.charAt(0)==" ") c = c.substring(1,c.length);
                      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                  }
                  return null;
              }
              // Safari 3.0+ "[object HTMLElementConstructor]" 
              var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
              if( isSafari ){
                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                  if(a2hsviashortcode !== null){
                      for (var i = 0; i < a2hsviashortcode.length; i++) {
                        a2hsviashortcode[i].style.display="block"; 
                    }
                  }
                  
                  var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                  if(a2hsviashortcode !== null){
                      for (var i = 0; i < a2hsviashortcode.length; i++) {
                        a2hsviashortcode[i].style.display="flex"; 
                    }
                  }
              }
                                                                                                                                                   
                                                                                                              
                                                     
                                                                                                                                                               
                                                     var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                        if(a2hsviashortcode !== null){
                                                            for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                              a2hsviashortcode[i].addEventListener("click", addToHome); 
                                                          }
                                                        }
                                         
                                                     window.addEventListener('appinstalled', (evt) => {
							  
                                                          var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                                 if(a2hsviashortcode !== null){
                                                                     for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                       a2hsviashortcode[i].style.display="none"; 
                                                                   }
                                                                 }
                                                                 
                                                                 var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                                                                    if(a2hsviashortcode !== null){
                                                                        for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                          a2hsviashortcode[i].style.display="none"; 
                                                                      }
                                                                    }
                                                                                                                    
                                                     });  
                                                                                                          
                                                     function addToHome(){
                                                         if(!deferredPrompt){return ;}
                                                         deferredPrompt.prompt();							  
                                                         deferredPrompt.userChoice
                                                           .then((choiceResult) => {
                                                             if (choiceResult.outcome === "accepted") {
                                                                 
                                                               document.getElementById("pwaforwp-add-to-home-click").style.display = "none"; 
                                                       
                                                                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                                 if(a2hsviashortcode !== null){
                                                                     for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                       a2hsviashortcode[i].style.display="none"; 
                                                                   }
                                                                 }
                                                                 
                                                                 var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                                                                    if(a2hsviashortcode !== null){
                                                                        for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                          a2hsviashortcode[i].style.display="none"; 
                                                                      }
                                                                    }
                                                                                                                                          
                                                               console.log("User accepted the prompt");

                                                             } else {
                                                               console.log("User dismissed the prompt");
                                                             }
                                                             deferredPrompt = null;
                                                         });
                                                         
                                                        }                                                                                                                                                               
                                                     });
			                             }  
                                                     
                                                     