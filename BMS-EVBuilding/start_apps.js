const { exec } = require('child_process');

const apps = [
	"\"ng serve home\"", 
	"\"ng serve room1\"", 
	"\"ng serve room2\"", 
	"\"ng serve room3\"", 
	"\"ng serve room4\"", 
	"\"ng serve room5\"", 
	"\"ng serve room6\"", 
	"\"ng serve room7\"", 
	"\"ng serve room8\"", 
	"\"ng serve room9\"", 
	"\"ng serve room10\"", 
	"\"ng serve room11\"", 
	"\"ng serve room12\"", 
	"\"ng serve room13\"", 
	"\"ng serve room14\"", 
	"\"ng serve room15\"", 
	"\"ng serve room16\"", 
	"\"ng serve room17\"", 
	"\"ng serve room18\"", 
	"\"ng serve room19\"", 
	"\"ng serve room20\"", 
	"\"ng serve room21\"", 
	"\"ng serve room22\"", 
	"\"ng serve room23\"", 
	"\"ng serve room24\"", 
	"\"ng serve room25\"", 
	"\"ng serve room26\"", 
	"\"ng serve room27\"", 
	"\"ng serve room28\"", 
	"\"ng serve room29\"", 
	"\"ng serve room30\"", 
	"\"ng serve room31\"", 
	"\"ng serve room32\"", 
	"\"ng serve room33\"", 
	"\"ng serve room34\"", 
	"\"ng serve room35\"", 
	"\"ng serve room36\"", 
	"\"ng serve room37\"", 
	"\"ng serve room38\"", 
	"\"ng serve room39\"", 
	"\"ng serve room40\"", 
	"\"ng serve room41\"", 
	"\"ng serve room42\"", 
	"\"ng serve room43\"", 
	"\"ng serve room44\"", 
	"\"ng serve room45\"", 
	"\"ng serve room46\"", 
	"\"ng serve room47\"", 
	"\"ng serve room48\"", 
	"\"ng serve room49\"", 
	"\"ng serve room50\""];

if (apps.length) {
  exec(`concurrently ${apps.join(' ')}`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error starting the apps comand: ${err}`)
        return;
    }
    console.log(stdout);
    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }
  });
} else {
  console.error('There are not any apps yet');
}