var songs = [
	{name:"Let It Go", lyrics:"Let it go, let it go, can't hold it back anymore.  Let it go, let it go, turn away and slam the door. I don't care what they're going to say. Let the storm rage on!", feelings:["angry"], antagonists:"person", agressions:["soulCrush", "screwed", "crazy"], audio: "audio/letItGo.mp3", image: "images/elsa.jpeg"},
	{name: "Let It Be", lyrics:"Oh, let it be, let it be, let it be, let it be. There will be an answer, let it be.", feelings: ["angry"], antagonists: "person", agressions: ["soulCrush", "screwed", "crazy"], audio: "audio/letItBe.mp3", image: "images/paulMcCartney.jpeg"},
	{name: "Can't Always Get What You Want", lyrics:"You can't always get what you want (x3). But if you try, sometimes, well you might find you get what you need. OH, YEAAAAAH~", feelings: ["angry"], antagonists: ["transportation"], agressions: ["soulCrush", "screwed"], audio: "audio/cantGetWhatYouWant.mp3", image: "images/mickJagger.jpeg"},
	{name: "Get Up, Stand For Your Rights", lyrics:"Get up, stand up: stand up for your rights! Get up, stand up: don't give up the fight!", feelings: ["angry"], antagonists: ["system"], agressions: ["soulCrush", "screwed", "crazy"], audio: "audio/getUpStandUp.mp3", image: "images/bobMarley.jpeg"},
	{name: "Don't Worry, Be Happy", lyrics:"Don't worry, be happy. In every life we have some trouble, but when you worry, you make it double. Don't worry, be happy!", feelings: ["anxious"], antagonists: ["person"], agressions: ["soulCrush", "crazy"], audio: "audio/dontWorryBeHappy.mp3", image: "images/bobbyMcferrin.jpeg"},
	{name: "Don't Worry About A Thing", lyrics:"Don't worry 'bout a thing. 'Cause every little thing gonna be alright!", feelings: ["anxious"], antagonists: ["transportation", "person"], agressions: ["soulCrush", "screwed"], audio: "audio/dontWorryBoutAThing.mp3", image: "images/bobMarley.jpeg"},
	{name: "That's Just The Way It Is", lyrics:"That's just the way it is. Things will never be the same", feelings: ["anxious"], antagonists: ["system"], agressions: ["soulCrush", "screwed", "crazy"], audio: "audio/tuPac.mp3", image: "images/tupacShakour.jpeg"},
	{name: "That's The Way It Is", lyrics: "Don't give up on your faith. Love comes to those who believe it. And that's the way it is.", feelings: ["depressed"], antagonists: ["person"], agressions: ["soulCrush"], audio: "audio/celineDion.mp3", image: "images/celineDion.jpeg"},
	{name: "Across The Universe", lyrics: "Nothing's gonna change my world", feelings: ["anxious"], antagonists: ["system"], agressions: ["soulCrush"], audio: "audio/acrossTheUniverse.mp3", image: "images/johnLennon.jpeg"},
	{name: "The Middle", lyrics:"Hey, Don't write yourself off yet. It's only in your head you feel left out or looked down on.  Just try your best. Try everything you can.  And don't you worry what they tell themselves when you're away. It just takes some time.", feelings: ["depressed"], antagonists: ["person", "transportation"],agressions: ["soulCrush", "screwed"], audio: "audio/theMiddle.mp3", image: "images/jimmyEat.jpeg"},
	{name: "Fireworks", lyrics:"There's a spark in you, you just gotta ignite the light, and let it shine.  Just own the night, like the fourth of July, 'cause baby you're a firework.  Come on show 'em what you're worth!", feelings: ["depressed"], antagonists: ["person"], agressions: ["soulCrush"], audio: "audio/firework.mp3", image: "images/katyPerry.jpeg"},
	{name: "Don't Stop Believing", lyrics:"Don't stop believin'. Hold on to that feelin'.", feelings: ["depressed"], antagonists: ["system"], agressions: ["soulCrush", "screwed"], audio: "audio/dontStopBelievin.mp3", image: "images/journey.jpeg"},
	{name: "You Can't Hurry Love", lyrics:"You can't hurry love, no, you just have to wait.  You gotta trust, give it time, no matter how long it takes.", feelings: ["depressed", "anxious", "angry"], antagonists: ["transportation"], agressions: ["soulCrush", "screwed", "crazy"], audio: "audio/cantHurryLove.mp3", image: "images/dianaRoss.jpeg"},
	{name: "What Doesn't Kill You", lyrics:"What doesn't kill you makes you stronger, stand a little taller. What doesn't kill you makes a fighter, footsteps even lighter!", feelings: ["depressed"],antagonists: ["system", "transportation"], agressions: ["soulCrush", "screwed", "crazy"], audio:"audio/stronger.mp3", image: "images/kellyClarkson.jpeg"},
	{name: "Lean On Me", lyrics:"Sometimes in our lives we all have pain, we all have sorrow.  But if we are wise, we know that there's always tomorrow.  Lean on me, when you're not strong and I'll be your friend.", feelings: ["depressed"], antagonists: ["person"], agressions: ["soulCrush", "screwed", "crazy"], audio:"audio/leanOnMe.mp3", image: "images/billWithers.jpeg"},
	{name: "Juicy", lyrics: "And if you don't know, now you know (echo: know, know). You know very well who you are. Don't let 'em hold you down, reach for the stars!", feelings: ["depressed", "angry","anxious"], antagonists: ["system"], agressions: ["crazy"], audio: "audio/biggie.mp3", image: "images/biggieSmalls.jpeg"}
]


$(function() {

	$('input:radio[name="feelings"]').on("click", function(){
	         $('html, body').animate({
	                scrollTop: $("#antagonists").offset().top},
	                'slow');
	        $("body, header, form, .flexContainer").css("background-color", "#B2C9AB");
	    });

	$('input:radio[name="antagonists"]').on("click", function(){
	        $('html, body').animate({
	               scrollTop: $("#agressions").offset().top},
	               'slow');
	        $('body, header, form, .flexContainer').css('background-color', '#FFD885');
	    });

	$('form').on('submit', function(e) {
		e.preventDefault();

		//computer needs to register what the user clicked in feelings, antagonists, and agressions 
		var userFeelings = $('input[name=feelings]:checked').val();
		var userAntagonists = $('input[name=antagonists]:checked').val();
		var userAgressions = $('input[name=agressions]:checked').val();

		// Provides the different song options based off of user's choices
		var userChoice = songs.filter(function(song){
			return song.feelings.indexOf(userFeelings) >= 0 && song.antagonists.indexOf(userAntagonists) >= 0 && song.agressions.indexOf(userAgressions) >= 0;
		});

		// Based off of song options provided by the user's choice, if there are multiple songs, need to choose one to output to user
		if (userChoice.length >= 1) {
			finalChoice = userChoice[Math.floor(Math.random()*userChoice.length)];
			console.log(finalChoice)
		} 
		//look for the results div and fill it with the lyric value of the finalChoice.
		// console.log(finalChoice.lyrics);
		$('section.results').css("display", "block");
		$('section.results').html(`<div class="resultsContent"><div class="imageContainer"><img src="${finalChoice.image}"></div><h2>${finalChoice.lyrics}</h2><audio loop id="song"><source src="${finalChoice.audio}"></audio><div class="buttonContainer"><button>Get more therapy</button></div><footer>
			<p>Made with love by <a href="http://www.esmecodes.com">Esme Allen-Creighton</a> and <a href="http://www.natalieKwok.com">Natalie Kwok</a> &copy 2017</p>
		</footer></div>`);
		// $('section.results').html(`<div class="resultsContent"><div class="imageContainer"><img src="${finalChoice.image}"></div><h2>${finalChoice.lyrics}</h2> <audio autoplay><source src="${finalChoice.audio}"></audio></div>`);
		// $('section.results').append(`<div class="buttonContainer"><button>Get more therapy!</button></div>`);
		// $(".buttonContainer").css("display", "block");
		$("body, header").css("background-color", "#C1666B");

		function playAudio() {
			console.log("hi");
			document.getElementById("song").play();
		};
		playAudio();
		
	});//end of form


	// Button on results section that refreshes/clears the form and gets the site to start at the top again
	$('.results').on("click", ".resultsContent button", function(){
         location.reload();
         $('body').scrollTop(0);
    });

	// Allows refresh/reload to start the page at the top again (default was causing it to reload at the bottom of the quiz for some reason...)
	$(window).on("load", function() {
		console.log("yo")
		$('html, body').animate({
	                scrollTop: $('.first')},
	                'slow');
	});


	// $( window ).on('reload',function() {
	// 	console.log("beer");
	//   // location.reload();
	//   $('body').scrollTop(0);
	// });

}); 
		// if (userFeelings === "depressed") {

		// } 

 // Transform their selections into an array
 // Use the result array to filter the song choices
//we need to decide what feelings lead to what songs and put that in the data. 27 different possibilities.
//listen for the "path" the user takes through e ach category.
//categorize songs about transportation, songs about heartache, songs about anger, 
//whatever the user picks, deliver the lists of those songs, filtered
//say they pick curled fetal biggest group {song 1 (subset(subsubset))song 2 song 3}
//record the path  eg, curled-theman-soulCrush deliver the song set. If more than 1, deliver a random one of them.
