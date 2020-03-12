/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var fs = require("fs");
//var text = fs.readFileSync("../quotes.txt");
//var quotes = text.split("\n");

//var newQuote = function(){
//  q.innerHTML="I love you!";
//  console.log(quotes[5]);
//}
//var q=document.getElementById("q");
//q.addEventListener('click', newQuote);
var quotes=["When you have a dream, you've got to grab it and never let go.",
"Nothing is impossible. The word itself says 'I'm possible!'",
"There is nothing impossible to they who will try.",
"The bad news is time flies. The good news is you're the pilot.",
"Life has got all those twists and turns. You've got to hold on tight and off you go.",
"Keep your face always toward the sunshine, and shadows will fall behind you.",
"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
"I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"You define your own life. Don't let other people write your script.",
"You are never too old to set another goal or to dream a new dream.",
"At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
"For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
"Spread love everywhere you go.",
"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
"If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.",
"You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
"You can be everything. You can be the infinite amount of things that people are.",
"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
"I want to be in the arena. I want to be brave with my life. And when we make the choice to dare greatly, we sign up to get our asses kicked. We can choose courage or we can choose comfort, but we can't have both. Not at the same time.",
"I'm going to be gone one day, and I have to accept that tomorrow isn't promised. Am I OK with how I'm living today? It's the only thing I can help. If I didn't have another one, what have I done with all my todays? Am I doing a good job?",
"I am experienced enough to do this. I am knowledgeable enough to do this. I am prepared enough to do this. I am mature enough to do this. I am brave enough to do this.",
"Belief creates the actual fact.",
"No matter what people tell you, words and ideas can change the world.",
"I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that.",
"It is during our darkest moments that we must focus to see the light.",
"Not having the best situation, but seeing the best in your situation is the key to happiness.",
"Believe you can and you're halfway there.",
"Weaknesses are just strengths in the wrong environment.",
"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
"Silence is the last thing the world will ever hear from me.",
"In a gentle way, you can shake the world.",
"Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.",
"Everyone has inside of him a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is!",
"All you need is the plan, the road map, and the courage to press on to your destination.",
"I care about decency and humanity and kindness. Kindness today is an act of rebellion.",
"If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
"Try to be a rainbow in someone's cloud.",
"We must let go of the life we have planned, so as to accept the one that is waiting for us.",
"Find out who you are and be that person. That's what your soul was put on this earth to be. Find that truth, live that truth, and everything else will come.",
"Real change, enduring change, happens one step at a time.",
"Wake up determined, go to bed satisfied.",
"Nobody built like you, you design yourself.",
"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
"I tell myself, 'You've been through so much, you've endured so much, time will allow me to heal, and soon this will be just another memory that made me the strong woman, athlete, and mother I am today.",
"Live your beliefs and you can turn the world around.",
"Our lives are stories in which we write, direct and star in the leading role. Some chapters are happy while others bring lessons to learn, but we always have the power to be the heroes of our own adventures.",
"Life is like riding a bicycle. To keep your balance, you must keep moving.",
"Don't try to lessen yourself for the world; let the world catch up to you.",
"There's nothing more powerful than not giving a f—k.",
"Faith is love taking the form of aspiration.",
"When it comes to luck, you make your own.",
"If you don't like the road you're walking, start paving another one!",
"I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.",
"The moral of my story is the sun always comes out after the storm. Being optimistic and surrounding yourself with positive loving people is for me, living life on the sunny side of the street.",
"We generate fears while we sit. We overcome them by action.",
"Dreams don't have to just be dreams. You can make it a reality; if you just keep pushing and keep trying, then eventually you'll reach your goal. And if that takes a few years, then that's great, but if it takes 10 or 20, then that's part of the process.",
"We are not our best intentions. We are what we do.",
"I've noticed when I fear something, if I just end up doing it, I'm grateful in the end.",
"Work hard, know your s—t, show your s—t, and then feel entitled.",
"We've been making our own opportunities, and as you prove your worth and value to people, they can't put you in a box. You hustle it into happening, right?",
"When you've seen beyond yourself, then you may find, peace of mind is waiting there.",
"Out of the mountain of despair, a stone of hope.",
"What you get by achieving your goals is not as important as what you become by achieving your goals.",
"I'm realizing how much I've diminished my own power. I'm not doing that no more.",
"You are never too old to set another goal or to dream a new dream.",
"I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving.",
"How wild it was, to let it be.",
"The simple act of listening to someone and making them feel as if they have truly been heard is a most treasured gift.",
"You have to be where you are to get where you need to go.",
"Don't be afraid. Because you're going to be afraid. But remember when you become afraid, just don't be afraid.",
"We need to take risks. We need to go broke. We need to prove them wrong, simply by not giving up.",
"The only limit to our realization of tomorrow will be our doubts today.",
"It is never too late to be what you might have been.",
"You do not find the happy life. You make it.",
"We all have problems. But it's not what happens to us, [it's] the choices we make after.",
"You don't have to be defined or confined by your environment, by your family circumstances, and certainly not by your race or gender.",
"When we let fear be our master, we cannot be happy and free as a butterfly. But when we choose to trust the journey and embrace love and joy, we are free to fly.",
"Definitions belong to the definers, not the defined.",
"You must find the place inside yourself where nothing is impossible.",
"Whatever you think the world is withholding from you, you are withholding from the world.",
"Perfection is not attainable, but if we chase perfection we can catch excellence.",
"A lot of people are afraid to say what they want. That's why they don't get what they want.",
"We have to let go of who we think we should be and embrace what is.",
"Being vulnerable is a strength, not a weakness.",
"In order for the light to shine so brightly, the darkness must be present.",
"I don't look ahead. I'm right here with you. It's a good way to be.",
"It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
"I will not let anyone scare me out of my full potential.",
"We have to be better. We have to love more, hate less. We've gotta listen more and talk less. We've gotta know that this is everybody's responsibility.",
"Trying to grow up is hurting. You make mistakes. You try to learn from them, and when you don't, it hurts even more.",
"Never bend your head. Always hold it high. Look the world straight in the eye.",
"Let love rule.",
"The power of imagination makes us infinite.",
"The only journey is the one within.",
"If my mind can conceive it, if my heart can believe it, then I can achieve it.",
"Embrace the glorious mess that you are.",
"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."];

links = ["https://wallpaperaccess.com/full/1089656.png",
        "https://pbs.twimg.com/profile_images/723624968056004608/euvJA0E5_400x400.jpg",
        "https://66.media.tumblr.com/7929ab1a7b881077a5a2d2666971b5dd/tumblr_oyniv8lEr11t3fwweo1_400.jpg",
        "https://66.media.tumblr.com/776126d3e82c3f7753170b8cca850f1d/5eaa412e40434c87-8f/s250x400/ba182deb0c473c4f67959b77dce1ed77ffade871.jpg",
        "https://i.pinimg.com/originals/98/7f/4c/987f4ce0883a250d3ca2b19e976c694d.jpg",
        "https://36.media.tumblr.com/07ca4c534807c7a33b7a0a14f1d03049/tumblr_nj442kS24i1rksuw7o3_1280.jpg",
        "https://66.media.tumblr.com/5f5564af393396afc0990dcf306df4ab/tumblr_p97lzwroO61xr46bko4_250.jpg",
        "https://cdn130.picsart.com/280547459020201.jpg?r1024x1024",
        "https://66.media.tumblr.com/47b1b708f814af5f81b2cef66587d4f1/tumblr_oj0l4h4pnN1vmqiyho1_250.jpg",
        "https://data.whicdn.com/images/320784246/original.jpg?t=1539452551",
        "https://www.kindpng.com/picc/m/412-4122691_blue-pastel-tumblr-heart-hearts-aesthetic-aesthetics-instagram.png",
        "https://wallpaperaccess.com/full/1220966.jpg"];

fonts = ["courier new", "Source Sans Pro", "Jazz LET", "Trattatello", "Marker Felt", "Blippo", "Luminari"];

var num = -1;
var fnum = -1;

var randBackground = function() {
  num = (num + 1) % 12;
  var url = links[num];
  document.body.style.backgroundImage = "url(\'"+url+"\')";
};


var newQuote = function(){
  q.innerHTML="\""+quotes[Math.floor(Math.random() * 100)]+"\"";
}
var q=document.getElementById("q");
var qbtn=document.getElementById("newQ");
var background = document.getElementById("background");
background.addEventListener("click", randBackground);
qbtn.addEventListener('click', newQuote);
