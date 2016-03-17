
	//var exec = require('cordova/exec');
	
	var wazelink = 
        
        {
            waze : function( url )	{
		          codova.exec( null, null, "WazeLink", "execute", [url] );
            }
	
        }
	
	module.exports = wazelink;
