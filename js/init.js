var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone"
	    },
	    {
	    	   string: navigator.userAgent,
	    	   subString: "iPod",
	    	   identity: "iPod"
	    },
	    {
	    	   string: navigator.userAgent,
	    	   subString: "iPad",
	    	   identity: "iPad"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
var classes   = "js"   ;
var addclass  = "class";
var html      = document.getElementsByTagName("html")[0];
var htmlclass = html.className;
if((BrowserDetect.OS == "iPhone") ||
   (BrowserDetect.OS == "iPad")   ||
   (BrowserDetect.OS == "iPod"))        classes += " ios";

if(BrowserDetect.OS == "Mac")           classes += " mac";
if(BrowserDetect.OS == "Linux")         classes += " lin";
if(BrowserDetect.OS == "Windows")       classes += " win";

if(BrowserDetect.browser == "Chrome")   classes += " ch" ;
if(BrowserDetect.browser == "Firefox")  classes += " fx" ;
if(BrowserDetect.browser == "Opera" )   classes += " op" ;
if(BrowserDetect.browser == "Safari")   classes += " sa" ;
if(BrowserDetect.browser == "Explorer")
{
    document.createElement("abbr");
    if (!(document.querySelector)) addclass = "className";
}
if(BrowserDetect.OS == "iPhone" || BrowserDetect.OS == "iPod" || BrowserDetect.OS == "iPad")
{
	switch(window.orientation){  
		case 0:
			classes += " portrait";
			break;
		case 180:  
			classes += " portrait";  
			break;
		case -90:  
			classes += " paysage";  
			break;  
		case 90:  
			classes += " paysage";  
			break;  
	}
}
if(BrowserDetect.OS == "iPad")
{
	classes += " ipad";
}
if(BrowserDetect.OS == "iPod" || BrowserDetect.OS == "iPhone")
{
	classes += " iphone";
}
if(htmlclass)
{
	htmlclass = htmlclass.replace(/\bno-js\b/,'');
    htmlclass = htmlclass + " ";
}
/*
if(swfobject.getFlashPlayerVersion().major > 0)
{
    classes += " flash";
}
*/
html.setAttribute(addclass, htmlclass + classes);