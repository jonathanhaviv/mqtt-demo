const { exec } = require('child_process');

// Execute the shell script as a child process
exec('bash src/mosquitto-start.sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});