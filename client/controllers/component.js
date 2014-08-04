// Identify if the component was already requested (to not generate duplicates)
var componentFieldsCalled = false;
// The array of fields of this application in specfic
var fields = Array();

Template.component.helpers({ 
	
	componentFields: function() {
		if (!componentFieldsCalled){
			var apps = Applications.find();			
			
			// Goes through all the apps 
			apps.forEach(function (app) {
				
				// Gets a cursor for all the fields in this app
				var fieldsCursor = ApplicationFields.find({application:app._id});
				 
				// Gets all the fields for this application and adds them to the fields array
				fieldsCursor.forEach(function (fieldCursor) {
					fields.push(fieldCursor); 
				});
			});
			componentFieldsCalled = true;
		}
		return fields;
	}
	
});
