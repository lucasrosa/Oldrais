Applications = new Meteor.Collection('applications');
ApplicationFields = new Meteor.Collection('applicationFields');
ApplicationInstance = new Meteor.Collection('applicationInstance');


// Fixture data 
if (Applications.find().count() === 0 && Meteor.isClient) {
	var productsApplicationId = Applications.insert({
		name: "Products",
	});
	
	var productsApplication = Applications.findOne(productsApplicationId);
	
	ApplicationFields.insert({
		application: productsApplication._id,
		name: "Name",
		type: "text"	
	});
	
	
	ApplicationFields.insert({
		application: productsApplication._id,
		name: "Price",
		type: "float"	
	});
	
	ApplicationFields.insert({
		application: productsApplication._id,
		name: "Weight",
		type: "float"	
	});
	
	ApplicationFields.insert({
		application: productsApplication._id,
		name: "Height",
		type: "float"	
	});
}