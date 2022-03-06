const course = [
	{
		id: 7,
		title: "Хімія 7 клас",
		info: "Це старт. Тут ми освоїмо базові навички курсу з хімії.",
		themes: [
			{
				id: 70,
				info: "",
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
				info: "",
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
				info: "",
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