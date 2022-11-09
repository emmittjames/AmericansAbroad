const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '14499cf8bcmsh49dd9f051925dbfp1311fcjsna203bcd62a2d',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/players?team=49&season=2021&page=3', options)
	.then(response => response.json().then(data =>{
        let players = data["response"]
        console.log(data["response"][0]["player"])
        for(let i=0;i<players.length;i++){
            console.log(players[i]["player"])
        }
    }))
	.then(response => console.log(response))
	.catch(err => console.error(err));