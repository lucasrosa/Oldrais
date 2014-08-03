Applications = new Meteor.Collection('applications');
ApplicationFields = new Meteor.Collection('applicationFields');

// Fixture data 
if (Applications.find().count() === 0) {
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
}