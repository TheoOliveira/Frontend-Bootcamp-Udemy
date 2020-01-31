const dbmovies = [
	{
		title: "in bruges",
		seen: true,
		stars: 5
	},
	{
		title: "frozen",
		seen: false,
		stars: 4.5
	},
	{
		title: "mad max",
		seen: true,
		stars: 5
	}
];

function watch(){for (var i = 0; i <= dbmovies.length -1; i++) {
	if(dbmovies[i].seen == true){
		console.log(`You watched ${dbmovies[i].title} - ${dbmovies[i].stars}`);

	}else{
		console.log(`You didnt watch ${dbmovies[i].title} - ${dbmovies[i].stars}`);

	}
}
};

watch(); 