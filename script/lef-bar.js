const item = [
	{
		id: 0,
		name: "Заявки",
		image: "image/header-user.png",
		url: "",
	},
	{
		id: 1,
		name: "Курси",
		image: "image/play-circle.png",
		url: "",
	},
	{
		id: 2,
		name: "Події",
		image: "image/star_favorite.png",
		url: "",
	},
]

const leftBar = (item) => {
	const divLeftBar = document.querySelector(".container__left-bar")

	for (let i = 0; i < item.length; i++) {
		const barBlock = document.createElement("div")
		barBlock.className = "bar-block"




		barBlock.innerHTML = `<img src=${item[i].image} alt=icon-${item[i].name}> ${item[i].name}`

		divLeftBar.append(barBlock)
	}


}

leftBar(item)