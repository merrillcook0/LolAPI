
var summonerName="";
var server="";
var summonerId="";
/* var champList=""; */
var unrankedWins="";
var rankedPercentWins="";
var mostPlayedChamp="";
var ranked= {kills:"",deaths:"",assists:""};
var normal= {};
/* var champId=[]; */




$(document).ready(function(){
	

	/* $("form").on('submit',function(event){
	event.preventDefault();
	console.log($(this).serialize() );
	
	
	}); */
	
	//------------------GET VALUES FROM FORM
	$("form").submit(function(event){
		event.preventDefault();
		console.log($(this).serialize() );
		//input is grabbed--
		var formData=$(this).serialize();
		//position is found from & sign in string
		var end=formData.indexOf("&");
		//input is parsed
		summonerName=formData.slice(11, end);
		summonerName=summonerName.toLowerCase();
		server=formData.slice(end+8,formData.length);
		$(document).find('#results').toggle();
		
		
		
		
		//---------------USE VALUES TO GET SUMMONERID--------------
		//--------------FROM SUMMONER-V1.4 SECTION OF DOCUMENTATION
			$.getJSON('https://'+server+'.api.pvp.net/api/lol/'+	server+'/v1.4/summoner/by-name/'+summonerName+'?api_key=d1801946-967a-4d46-8533-3b68297d572a', 		function(data, status){
					//would want to keep the above key hidden in real app 
						console.log(data);
						summonerId=data[summonerName].id;
						console.log(summonerId);
						 summonerId=summonerId.toString();
						 ordinaryStatsGetter();
						 rankedStatsGetter();
						 ranked.kills=5;
					});
					
					
					
		//--------------RETRIEVE  NAMES OF CHAMPIONS -------------
		//--------------FROM LOL-STATIC-DATA-V1.2 SECTION OF DOCUMENTATION	
		
			$.getJSON('https://'+server+'.api.pvp.net/api/lol/static-data/'+server+'/v1.2/champion?champData=blurb&api_key=d1801946-967a-4d46-8533-3b68297d572a', function(data, status){
			console.log(data);
			
			champList=data;
			
			});
			
			
		//--------GET SUMMONER STATS FROM ORDINARY GAMES---------------
		//--------FROM STATS-V1.3 SECTION OF DOCUMENTATION------------
			var ordinaryStatsGetter=function(){$.getJSON('https://'+server+'.api.pvp.net/api/lol/'+server+'/v1.3/stats/by-summoner/'+summonerId+'/summary?season=SEASON4&api_key=d1801946-967a-4d46-8533-3b68297d572a', function(data, status){
			console.log(data);
			
			normal.wins=data.playerStatSummaries[9].wins;
			ranked.wins=data.playerStatSummaries[5].wins;
			ranked.losses=data.playerStatSummaries[5].losses;
			
			
			});
			}
		//--------GET SUMMONER STATS FROM RANKED GAMES---------------
		//--------FROM STATS-V1.3 SECTION OF DOCUMENTATION------------	
			var rankedStatsGetter=function(){$.getJSON('https://'+server+'.api.pvp.net/api/lol/'+server+'/v1.3/stats/by-summoner/'+summonerId+'/ranked?season=SEASON4&api_key=d1801946-967a-4d46-8533-3b68297d572a',function(data,status){
			console.log(data);
			//NEED TO GET PARTICULAR CHAMPION DATA FROM HERE
			
			});
			}
			
			
			
			
			
			
			
			
		
		
		});
		
		
	
	
		
		
		
		
		
		
		
		
		
		
		

});


//USE TO LOOP THROUGH STATIC CHAMPION DATA AND APPLY TO SUMMONER STAT PROFILE
			var matchChampions=function(){
			
				/* for(var x in champList){
					 champId=champList.x+champList.x.id;
					}
				
				
				} */
			
			}
			
			

//post the data gotten to the DOM
var postContent=function(){


}
	