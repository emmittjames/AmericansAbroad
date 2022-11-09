const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '14499cf8bcmsh49dd9f051925dbfp1311fcjsna203bcd62a2d',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=2020', options)
	.then(response => response.json().then(data =>{
        let players = data["response"]
        //console.log(players)
        console.log(data)
        console.log(players[0]["player"]["nationality"])
    }))
	.then(response => console.log(response))
	.catch(err => console.error(err));