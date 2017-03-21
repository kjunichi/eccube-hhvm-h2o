// dccheck.js docker container check
const exec = require('child_process').exec;

const PS_COMMAND = `docker-compose ps`;
const RESTART_COMMAND = `docker-compose restart `

function check() {
exec(`${PS_COMMAND}`, (err, stdout, stderr) => {
    if (err) {
        console.log(`err = ${err}`);
    }
    const lines = stdout.split(/\n/);
    for (let i = 2; i < lines.length; i++) {
        if (lines[i].length > 1) {
            const appName = lines[i].slice(0, 30).split("_")[1];
            const status = lines[i].slice(63, 63 + 8);
            //console.log(appName, status);
            if (status.startsWith("Up",0)) {

            } else {
                console.log(appName, status);
                
                exec(`${RESTART_COMMAND} ${appName}`, (e, stdout, stderr) => {
                    if (err) {
                        console.log(`err = ${err}`);
                    }
                    console.log(stdout);
                    console.log(`restart ${appName}`);
                });
            }
        }
    }
});
setTimeout(check, 60000);
}

check();
//eccubehhvmh2o_app_1           hhvm --mode server -vServe ...   
//Up      0
//eccubehhvmh2o_app_1           h