function askQuestions(){

	var firstName = prompt('What is your first name');
	firstName = firstName.toLowerCase();
	var lastName = prompt('What is your last name');
	lastName = lastName.toLowerCase();

	var fullName= firstName + ' ' + lastName;
	console.log('User is called ' + fullName);
	//toLowerCase();

	if (firstName == 'general' ){
		if (lastName != 'assembly'){
		console.log('Hello,' + fullName + '!');
		}
	}

	// if (firstName == 'general' && lastName != 'assembly' ){console.log('Hello,' + fullName + '!'); }

	var age = prompt ('How old are you?');
	age = parseInt(age);

	if (age >= 18 ){
		console.log('User is an adult');
	}else if (age >= 13) {
		console.log('User is a teenager');
	}else{
		console.log('User is an child');
	}

	var faveColor = prompt ('What is your favourite colour?');
	faveColor= faveColor.toLowerCase();

	if (faveColor == 'red'  ||
		faveColor == 'blue' ||
		faveColor == 'green' ||
		faveColor == 'yellow') {
		$('h1').css('color',faveColor);
	} 

	// alert($); this was only an example

}
//when the page loads
$(function () {

		$('img').on('click',askQuestions)

		// when the user clicks an h3
		$('h3').on('click', function() {

			//hide the next element
			//$(this).next().hide(); //"this" referes to the element the user is clicking then goes
								  // to next element and hides it
								  // for this to work make one of the h3 an h4 for so it can actually dissappear
	

			//toggle the next element
				//$(this).next().toggle();
				//$(this).next().slideToggle(); //another version of toggle
				//$(this).next().slideToggle(900); //number is to tell how fast you want it to toggle
			$(this)
				.toggleClass('open')
				.next().slideToggle(500);
		});

		
});