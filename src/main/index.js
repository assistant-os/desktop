// import * as webdriverio from 'webdriverio'
//
// const options = {
//   desiredCapabilities: {
//     browserName: 'chrome'
//   }
// }
// const client = webdriverio.remote(options)
//
// client
//     .init()
//     .url('https://netflix.com/fr/')
//     .pause(10000)
//     .end()
//     .then(() => {
//       console.log('ok')
//     }).catch((e) => {
//       console.log('e', e)
//     })


import robot from 'robotjs'


for (let i = 0 ; i < 100 ; i++) {
  robot.keyTap('audio_vol_down')
}

// var mouse = robot.getMousePos();

// console.log(mouse);

// setTimeout(() => {
//   robot.typeString("Hello World");
// }, 5000);



// Speed up the mouse.
robot.setMouseDelay(2);

/*
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

for (var x = 0; x < width; x++)
{
	let y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}
*/
