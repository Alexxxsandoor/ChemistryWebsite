const course = [
	{
		id: 7,
		title: "Хімія 7 клас",
		info: "Це старт. Тут ми освоїмо базові навички курсу з хімії.",
		themes: [
			{
				id: 70,
				title: "Вступление химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 0,
						type: "test",
						question: "Химия изучает ...",
						terms: "выберите 1 правильный ответ",
						answer: [
							{
								id: 1,
								answer: "...химию",
							},
							{
								id: 0,
								answer: "...биологию",
							},
							{
								id: 0,
								answer: "...физику",
							},
							{
								id: 0,
								answer: "...алгебру",
							}
						]
					}
				]
			},
			{
				id: 71,
				title: "2 занятие химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 1,
						type: "equations",
						question: "XO2+YH2->Z2O",
						terms: "Введите правильные числа",
						answer: [
							x = 1,
							y = 2,
							z = 3,
						]
					}
				]
			},
			{
				id: 72,
				title: "3 занятие химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 2,
						type: "task",
						question: "В 300грамм воды расстворили 15грамм соли, определите массовую доли растворённого вещества.",
						given: [
							{
								type: "weight",
								what: "H2O",
								howMany: 300,
							},
							{
								type: "weight",
								what: "соли",
								howMany: 15,
							},
						],
						search: [
							{
								type: "percent",
								what: "соли",
							}
						],
						terms: "Решите задачку",
						answer: 4.76,
					},
				]
			}
		]
	}, {
		id: 8,
		title: "Хімія 8 клас",
		info: "Це старт. Тут ми освоїмо базові навички курсу з хімії.",
		themes: [
			{
				id: 70,
				title: "Вступление химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 0,
						type: "test",
						question: "Химия изучает ...",
						terms: "выберите 1 правильный ответ",
						answer: [
							{
								id: 1,
								answer: "...химию",
							},
							{
								id: 0,
								answer: "...биологию",
							},
							{
								id: 0,
								answer: "...физику",
							},
							{
								id: 0,
								answer: "...алгебру",
							}
						]
					}
				]
			},
			{
				id: 71,
				title: "2 занятие химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 1,
						type: "equations",
						question: "XO2+YH2->Z2O",
						terms: "Введите правильные числа",
						answer: [
							x = 1,
							y = 2,
							z = 3,
						]
					}
				]
			},
			{
				id: 72,
				title: "3 занятие химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 2,
						type: "task",
						question: "В 300грамм воды расстворили 15грамм соли, определите массовую доли растворённого вещества.",
						given: [
							{
								type: "weight",
								what: "H2O",
								howMany: 300,
							},
							{
								type: "weight",
								what: "соли",
								howMany: 15,
							},
						],
						search: [
							{
								type: "percent",
								what: "соли",
							}
						],
						terms: "Решите задачку",
						answer: 4.76,
					},
				]
			}, {
				id: 70,
				title: "Вступление химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 0,
						type: "test",
						question: "Химия изучает ...",
						terms: "выберите 1 правильный ответ",
						answer: [
							{
								id: 1,
								answer: "...химию",
							},
							{
								id: 0,
								answer: "...биологию",
							},
							{
								id: 0,
								answer: "...физику",
							},
							{
								id: 0,
								answer: "...алгебру",
							}
						]
					}
				]
			},
			{
				id: 71,
				title: "2 занятие химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 1,
						type: "equations",
						question: "XO2+YH2->Z2O",
						terms: "Введите правильные числа",
						answer: [
							x = 1,
							y = 2,
							z = 3,
						]
					}
				]
			},
			{
				id: 72,
				title: "3 занятие химии",
				info: "",
				url: "",
				video: "url",
				answers: [
					{
						id: 2,
						type: "task",
						question: "В 300грамм воды расстворили 15грамм соли, определите массовую доли растворённого вещества.",
						given: [
							{
								type: "weight",
								what: "H2O",
								howMany: 300,
							},
							{
								type: "weight",
								what: "соли",
								howMany: 15,
							},
						],
						search: [
							{
								type: "percent",
								what: "соли",
							}
						],
						terms: "Решите задачку",
						answer: 4.76,
					},
				]
			}
		]
	}
]

const courseOutput = (course) => {

	const divContainer = document.querySelector(".container__right-container")

	for (let i = 0; i < course.length; i++) {
		//	блок для темы курса
		const courseThemes = document.createElement("div")
		courseThemes.className = "right-container__bottom-themes"

		// круг прогресса
		const circle = document.createElement("div")
		circle.className = "circle-progress"

		const circleInCircle = document.createElement("div")
		circleInCircle.className = "circle-progress-center"
		circleInCircle.innerHTML = `<h1>50%</h1>`

		divContainer.append(courseThemes)
		courseThemes.append(circle)
		circle.append(circleInCircle)

		//центральная инфа
		const centerInfo = document.createElement("div")
		centerInfo.className = "center-info"

		//заглавие
		const title = document.createElement("h2")
		title.innerHTML = course[i].title

		//краткая информация про курс
		const info = document.createElement("p")
		info.innerHTML = course[i].info

		//вывод список тем 
		const paragraph = document.createElement("p")
		const imageBlackArrow = "<img id=arrow_down src=image/black_arrow_down.png alt=arrow_down>"
		paragraph.innerHTML = "Показати список тем " + imageBlackArrow

		courseThemes.append(centerInfo)
		centerInfo.append(title)
		centerInfo.append(info)
		centerInfo.append(paragraph)

		//темы
		const divLessonsThemes = document.createElement("div")
		divLessonsThemes.className = "lessons-themes"
		centerInfo.append(divLessonsThemes)

		//блок для списка
		const olList = document.createElement("ol")
		divLessonsThemes.append(olList)

		//цикл для проверки количества тем
		for (let j = 0; j < course[i].themes.length; j++) {

			//отдельная тема блок
			const listItem = document.createElement("li")
			olList.append(listItem)

			//название темы и ссылка
			const listItemLink = document.createElement("a")
			listItemLink.setAttribute("href", course[i].themes[j].url)
			listItemLink.innerHTML = `Тема ${j + 1}:`
			listItem.append(listItemLink)

			//процент пройденный студентом
			const listItemPercent = document.createElement("h4")
			listItemPercent.innerHTML = `0%`
			listItem.append(listItemPercent)

		}

		//кнопка продолжить
		const divButton = document.createElement("div")
		divButton.className = "right-button"
		const button = document.createElement("button")
		button.innerHTML = "<h3>Продовжити</h3>"
		divButton.append(button)
		courseThemes.append(divButton)
	}

}

courseOutput(course);