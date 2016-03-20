
	//var exec = require('cordova/exec');
	
	var wazelink = 
        
        {
            waze : function( url )	{
		          cordova.exec( null, null, "WazeLink", "execute", [url] );
            }
	
        }
	
	module.exports = wazelink;
