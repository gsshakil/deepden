Template.registerHelper('formateDate', (date)=>{
	return moment(date).format('MMMM YYYY');
});