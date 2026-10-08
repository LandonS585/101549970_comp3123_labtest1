const fs = require('fs')
const path = require('path')

const logsDir = path.join(process.cwd(), 'Logs')

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

process.chdir(logsDir)

for (let i = 0; i < 10; i++) {
  const fileName = 'log' + i + '.txt'
  fs.writeFileSync(fileName, 'this is log file ' + i)
  console.log(fileName)
}