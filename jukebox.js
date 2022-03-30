
let juke = document.querySelector('#juke');


const music = {
    pop: [
        {
            artist: "Ariana Grande",
            song: "Positions",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/4b/46/1e/4b461ecb-6e26-cc80-0a11-e61a008e7363/mzaf_18287149748935113510.plus.aac.p.m4a"
        },
        {
            artist: "Kid Laroi",
            song: "Stay",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c2/73/76/c27376ee-77bf-4408-fa67-49d66cf578df/mzaf_14194545279247312737.plus.aac.p.m4a"
        },
        {
            artist: "Justin Bieber",
            song: "Ghost",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f1/c6/4d/f1c64de7-f813-6d3a-abf3-d980882070ab/mzaf_12341366234979933796.plus.aac.p.m4a"
        },
        {
            artist: "Maroon 5",
            song: "Daylight",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/14/04/c8/1404c885-be96-ff63-46d4-489e9f9846bb/mzaf_8446252306743678587.plus.aac.p.m4a"
        },
        {
            artist: "Adele",
            song: "EnchaWater Under the Bridge",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/aa/d6/f8/aad6f877-8900-84aa-628f-692607665495/mzaf_16143436458520831241.plus.aac.p.m4a"
        },
        {
            artist: "Olivia Rodrigo",
            song: "Favorite Crime",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1a/b7/45/1ab7459d-cb7a-57b6-28a9-861e0916efb1/mzaf_7708913053635343801.plus.aac.p.m4a"
        },
        {
            artist: "Taylor Swift",
            song: "I Did Something Bad",
            url: " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ea/40/d4/ea40d452-1b60-5ac8-b04d-fa818f361b12/mzaf_15171648957195629825.plus.aac.p.m4a"
        },
        {
            artist: "Arctic Monkeys",
            song: "Do I Wanna Know?",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/db/17/c8/db17c8b1-b82a-396f-b642-b851795d964c/mzaf_7008457994754977918.plus.aac.p.m4a"
        },
        {
            artist: "Dua Lipa",
            song: "Levitating",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/c4/de/a4/c4dea463-eb97-fb07-50d3-6a2ee330627d/mzaf_17295419310919907918.plus.aac.p.m4a"
        },
        {
            artist: "Doja Cat",
            song: "Kiss Me More",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/1f/08/ae/1f08ae82-c226-2895-ff8f-07ce401a9be6/mzaf_1312196870707838526.plus.aac.p.m4a"
        },
        {
            artist: "Lizzo",
            song: "Good As Hell",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b3/2a/66/b32a6623-2e31-9d64-1db8-1233dae36105/mzaf_3281102179733296457.plus.aac.p.m4a"
        },
        {
            artist: "Post Malone",
            song: "Circles",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/5a/44/7d/5a447de0-495f-f546-ed92-37727744dad4/mzaf_7023149222437161687.plus.aac.p.m4a"
        },
        {
            artist: "Billie Eilish",
            song: "Happier Than Ever",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d6/6f/58/d66f58c4-50ad-4978-971c-b19c022a440b/mzaf_3392528453380582564.plus.aac.p.m4a"
        },
        {
            artist: "Normani",
            song: "Motivation",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/45/bf/ec/45bfec29-48b8-a6c8-6b40-205c50324fcd/mzaf_16727115048569432772.plus.aac.p.m4a"
        },
        {
            artist: "Frank Ocean",
            song: "Lost",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/04/d7/ab/04d7abc5-358b-eac3-da65-8ab33042aaaa/mzaf_3819037996539775303.plus.aac.p.m4a"
        },
        {
            artist: "Paloma Faith",
            song: "Only Love Can Hurt Like This",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/46/1a/0e/461a0ee9-e017-e44a-d27b-219e12eb7b31/mzaf_7254219147230659225.plus.aac.p.m4a"
        },
        {
            artist: "HRVY",
            song: "Personal",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/79/a8/4e/79a84e0a-2010-a808-6e37-47de8c1d9e8a/mzaf_13467990634414067380.plus.aac.p.m4a"
        },
        {
            artist: "Bruno Mars",
            song: "Leave The Door Open",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/41/e6/29/41e629b3-44fc-7f0d-e292-060c4e98187c/mzaf_13613096699867304011.plus.aac.p.m4a"
        },
        {
            artist: "Chloe",
            song: "Have Mercy",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/ce/07/47ce07d5-8611-54fc-418b-13151f6f48f7/mzaf_2017293278362012141.plus.aac.p.m4a"
        },
        {
            artist: "Zendaya & Zac Efron",
            song: "Rewrite The Stars",
            url: " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ea/40/d4/ea40d452-1b60-5ac8-b04d-fa818f361b12/mzaf_15171648957195629825.plus.aac.p.m4a"
        }
    ]
}

//prevent same number being picked again

var temp = [];


function player() {
    let pick = Math.floor(Math.random() * music.pop.length);
    console.log(pick);


    let tune = music.pop[pick].url;

    //juke.innerHTML = "<audio controls autoplay src=" + tune + " type='audio/m4a'></audio>";
    juke.innerHTML = "";
    juke.innerHTML = "<audio id='musicPlayer' src=" + tune + " type='audio/m4a'></audio>";
    juke.innerHTML += "<button onclick=" + "document.getElementById('musicPlayer').play()" + ">Play</button>";
    juke.innerHTML += "<button onclick=" + "document.getElementById('musicPlayer').pause()" + ">Pause</button>";
    music.pop.splice(pick, 1);
    console.log(music.pop.length);


}

function play() {
    audio.play();
}



function pause() {
    audio.pause();
}




