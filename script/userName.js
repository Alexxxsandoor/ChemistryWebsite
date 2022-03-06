const user = [
	{
		id: "0",
		firstName: "Александр",
		lastName: "Верстуков",
		dateOfBirth: "08/05/2000",
		phone: "+38(099)238-55-34",
		login: "Alexxxsandoor",
		password: "qwerty12345",
		dateRegistration: "06/03/2022",
		email: "v.verstukov14@gmail.com",
		startCourse: "7",//!course: 7,8,9,10,11,DPA,ZNO
		completedСourses: [],
		completedThemes: [
			{ id: 70 },
			{ id: 71 },
		],
	},
	{
		id: "1",
		firstName: "Иванка",
		lastName: "Павлик",
		dateOfBirth: "18/10/2000",
		phone: "+38(097)529-73-01",
		login: "ivibambi",
		password: "oiuqwehjhk@123123",
		dateRegistration: "01/02/2021",
		email: "ivibambi@gmail.com",
		startCourse: "8",//!course: 7,8,9,10,11,DPA,ZNO
		completedСourses: [
			{ id: 8 }
		],
		completedThemes: [
			{ id: 80 },
		],
	},
]

const userId = 0;

const userOutput = (user, id) => {
	const idLastName = document.querySelector("#lastname");
	idLastName.innerHTML = user[id].lastName;

	const idFirstName = document.querySelector("#firstname");
	idFirstName.innerHTML = user[id].firstName;
}



userOutput(user, userId)