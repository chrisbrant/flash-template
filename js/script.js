/* ------------------------------------------------------  /js/script.js  -- //
 *	
 *	Title:      
 *	Author:     
 *	Copyright:  
 *	
 * ------------------------------------------------------------------------- */


jQuery(document).ready(function() {
	
	/* Initialize swfObject */
	var flashvars = {};
	flashvars.config = "/xml/site-config.xml";
	flashvars.locale = "en";
	
	var params = {};
	params.movie = "/swf/main.swf";
	params.play = "true";
	params.loop = "true";
	params.menu = "false";
	params.quality = "high";
	params.scale = "noScale";
	params.salign = "tl";
	params.wmode = "opaque";
	params.bgcolor = "#000000";
	params.base = "/";
	params.swliveconnect = "false";
	params.flashvars = "";
	params.devicefont = "_sans";
	params.allowscriptaccess = "always";
	params.seamlesstabbing = "true";
	params.allowfullscreen = "true";
	params.allownetworking = "all";
	
	var attributes = {};
	attributes.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
	attributes.type = "application/x-shockwave-flash";
	attributes.data = "/swf/Shell.swf";
	attributes.width = "600";
	attributes.height = "400";
	attributes.id = "flashcontent";
	attributes.name = "flashcontent";
	attributes.align = "tl";
	
	swfobject.embedSWF("/swf/shell.swf", "flashcontent", "100%", "100%", "10.0.0", "/swf/install.swf", flashvars, params, attributes, swfObjectCallback);
	
});


function swfObjectCallback(e) {
	
	if(!e.success) {
		jQuery('#noflash').show();
	}
	
}