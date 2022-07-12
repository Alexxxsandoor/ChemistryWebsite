const user = [
	{
		id: "0",
		firstName: "Олександр",
		lastName: "Верстуков",
		dateOfBirth: "08/05/2000",
		phone: "+380992385534",
		login: "1",
		password: "1",
		dateRegistration: "06/03/2022",
		email: "asdasd@asd.com",
		startCourse: 7,

	},
	{
		id: "1",
		firstName: "Иванка",
		lastName: "Павлик",
		dateOfBirth: "18/10/2000",
		phone: "+380975297301",
		login: "ivibambi",
		password: "oiuqwehjhk@123123",
		dateRegistration: "01/02/2021",
		email: "ivibambi@gmail.com",
		startCourse: 8,
	},
]


const userOutput = (user, id) => {
	const idLastName = document.querySelector("#lastname");
	idLastName.innerHTML = user[id].lastName;

	const idFirstName = document.querySelector("#firstname");
	idFirstName.innerHTML = user[id].firstName;

	const userLogin = document.querySelector(".login");
	userLogin.append(user[id].login)

	const userPhone = document.querySelector(".phone");
	userPhone.append(user[id].phone)

	const userEmail = document.querySelector(".email");
	userEmail.append(user[id].email)

	const userCourse = document.querySelector(".course");

	if (typeof user[id].startCourse == "number") userCourse.append(user[id].startCourse + " класс")
	else userCourse.append(user[id].startCourse)

}
var userI = 0;
function userinfo() {

	const user = document.querySelector(".user-info")

	if (userI == 0) {
		user.style.display = "flex"
		userI++
	} else {
		user.style.display = "none"
		userI--
	}
}

function closeLoginDiv() {

	const loginDiv = document.querySelector(".login-div")

	if (loginDiv) loginDiv.remove()

}


function comeIn(user) {

	const login = document.querySelector(".inputLogin").value

	const password = document.querySelector(".inputPassword").value


	for (let i = 0; i < user.length; i++) {
		if (user[i].login == login && user[i].password == password) {
			courseOutput(course)
			closeLoginDiv()
			userOutput(user, i)
		}
	}


}

function login() {

	const containerDiv = document.querySelector(".container")

	const loginDiv = document.querySelector(".login-div")
	if (loginDiv) loginDiv.remove()
	else {
		const headerUser = document.createElement("div")
		headerUser.className = "login-div"

		headerUser.innerHTML = "<h2>Увійти до системи</h2>"



		const inputLogin = document.createElement("input")
		inputLogin.setAttribute("placeholder", "Логін")
		inputLogin.setAttribute("type", "login")
		inputLogin.className = "inputLogin"

		const inputPassword = document.createElement("input")
		inputPassword.setAttribute("placeholder", "Пароль")
		inputPassword.setAttribute("type", "password")
		inputPassword.className = "inputPassword"

		headerUser.append(inputLogin)
		headerUser.append(inputPassword)

		const buttonDiv = document.createElement("div")
		buttonDiv.className = "button-log-reg"

		const buttonLogin = document.createElement("button")
		buttonLogin.innerHTML = "Увійти"
		buttonLogin.setAttribute("onclick", "comeIn(user)")

		buttonDiv.append(buttonLogin)


		headerUser.append(buttonDiv)



		containerDiv.append(headerUser)
	}


}

login()



