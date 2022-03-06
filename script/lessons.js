const lessons = [{
	id: 0,
	subject: "Хімія",
	url: "",
},
{
	id: 1,
	subject: "Біологія",
	url: "",
},
{
	id: 2,
	subject: "Алгебра",
	url: "",
},
{
	id: 3,
	subject: "Географія",
	url: "",
},
{
	id: 4,
	subject: "Геометрія",
	url: "",
},
]

const lessonsOutput = (lessonsList) => {
	const themes = document.querySelector(".top-themes__items")
	for (let i = 0; i < lessons.length; i++) {
		const lessonsItem = document.createElement("div")
		lessonsItem.className = "item"
		lessonsItem.innerHTML = lessonsList[i].subject
		themes.append(lessonsItem)
	}
}
lessonsOutput(lessons)