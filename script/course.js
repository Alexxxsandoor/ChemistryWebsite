//TODO сделать в БД поле для нижней информации
const course = [
	{
		id: 7,
		title: "Хімія 7 клас",
		info: "Це старт. Тут ми освоїмо базові навички курсу з хімії.",
		themes: [
			{
				id: 70,
				title: "Вступление химии",
				info: "Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,",
				url: "",
				video: "https://www.youtube.com/embed/7OU_HCiqBgw",
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
				info: "Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,Какая-то краткая информация, Какая-то краткая информация,333333333333333333333333333333 Какая-то краткая информация, Какая-то краткая информация,333333333333333333333333333 3",
				url: "",
				video: "https://www.youtube.com/embed/EpBWOBo7-UU",
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
				info: "22222222222222222222Какая-то краткая информация, Какая-то краткая информация,222222222222222222222222Какая-то краткая информация, Какая-то краткая информация,22222222222222222222222222",
				url: "",
				video: "https://www.youtube.com/embed/GJN7hE5ijnI",
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
	},
	{
		id: 8,
		title: "Хімія 8 клас",
		info: "Це старт. Тут ми освоїмо базові навички курсу з хімії.",
		themes: [
			{
				id: 70,
				title: "Вступление химии",
				info: "Какая-то краткая информация, Какая-то краткая информация Какая- то краткая информация, Какая - то краткая информация",
				url: "",
				video: "",
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
				info: "222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222",
				url: "",
				video: "",
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
				info: "33333333333333333333333333333333333333333 rfrfz-nj byaf",
				url: "",
				video: "",
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
				video: "",
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
				video: "",
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
				video: "",
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
	},
	{
		id: 8,
		title: "Хімія 9 клас",
		info: "Це старт. Тут ми освоїмо базові навички курсу з хімії.",
		themes: [
			{
				id: 70,
				title: "Вступление химии",
				info: "",
				url: "",
				video: "https://www.youtube.com/embed/7OU_HCiqBgw",
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
				video: "https://www.youtube.com/embed/EpBWOBo7-UU",
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
				video: "https://www.youtube.com/embed/GJN7hE5ijnI",
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
				id: 73,
				title: "Вступление химии",
				info: "",
				url: "",
				video: "https://www.youtube.com/embed/u5UVLmFl5G8",
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
				id: 74,
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
				id: 75,
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
	},

]
//TODO сделать в БД поле для нижней информации
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
		circleInCircle.innerHTML = `<h1>20%</h1>`

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

		courseThemes.append(centerInfo)
		centerInfo.append(title)
		centerInfo.append(info)
		centerInfo.append(paragraph)

		//темы
		const divLessonsThemes = document.createElement("div")
		divLessonsThemes.className = "lessons-themes"
		centerInfo.append(divLessonsThemes)

		//блок для списка
		const olList = document.createElement("details")
		divLessonsThemes.append(olList)

		//цикл для проверки количества тем
		for (let j = 0; j < course[i].themes.length; j++) {

			if (j < 1) {
				const titleListItem = document.createElement("summary")
				titleListItem.innerHTML = "Показати список тем"
				olList.append(titleListItem)
			}
			//отдельная тема блок
			const listItem = document.createElement("p")
			olList.append(listItem)

			//название темы и ссылка
			const listItemLink = document.createElement("a")
			listItemLink.setAttribute("onclick", `createWindow(${i},${j})`)
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

//функция для крестика закрыть окно урока
const crossClose = () => {
	const divWindow = document.querySelector(".window-leson")
	if (divWindow) divWindow.remove()

}

//функция что бы создать окно удалив предыдущее окно если оно есть конечно
const createWindow = (idCourse, idTheme) => {
	crossClose()

	const body = document.querySelector("body")

	//создаем блок окна
	const window = document.createElement("div")
	window.className = "window-leson"

	//закидываем просто в тело
	body.append(window)

	//верзний блок с видео, заголовком, инфой под заголовок и крестик
	const videoTitle = document.createElement("div")
	videoTitle.className = "video__title"
	window.append(videoTitle)

	//Если есть видос, создаем видео
	if (course[idCourse].themes[idTheme].video) {
		const iframe = document.createElement("iframe")
		iframe.classList = "video"
		iframe.setAttribute("src", course[idCourse].themes[idTheme].video)
		iframe.setAttribute("title", "YouTube video player")
		iframe.setAttribute("frameborder", 0)
		iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
		iframe.setAttribute("allowfullscreen", '')
		videoTitle.append(iframe)
	}

	//Правая информация блок
	const rightInfo = document.createElement("div")
	rightInfo.className = "right-info"
	videoTitle.append(rightInfo)

	//Заголовок
	const rightInfoTitle = document.createElement("h2")
	rightInfoTitle.innerHTML = `Тема ${idTheme + 1}: ${course[idCourse].themes[idTheme].title}`
	rightInfo.append(rightInfoTitle)

	//информация под заголовком
	const rightInfoInfo = document.createElement("p")
	rightInfoInfo.innerHTML = course[idCourse].themes[idTheme].info
	rightInfo.append(rightInfoInfo)

	//кнопка крестика
	const button = document.createElement("button")
	button.className = "cross"
	button.innerHTML = "<img src=image/cross.png alt=cross>"
	button.setAttribute("onclick", "crossClose()")
	videoTitle.append(button)

	//нижний блок для остальной информации
	//TODO сделать в БД поле для нижней информации
	const bottomInformation = document.createElement("div")
	bottomInformation.className = "bottom-information"
	bottomInformation.innerHTML = `<p>${course[idCourse].themes[idTheme].info}</p>`

	window.append(bottomInformation)
	//TODO сделать конструктор для тестов и вопросов
	window.append()
}