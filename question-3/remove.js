const fs = require('fs')
const path = require('path')

const logsDir = path.join(process.cwd(), 'Logs')

if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir)

  for (let i = 0; i < files.length; i++) {
    console.log('delete files...' + files[i])
    fs.unlinkSync(path.join(logsDir, files[i]))
  }

  fs.rmdirSync(logsDir)
}