// import { execa } from 'execa'
let index = 0, intervalObj = null
async function run() {
  const { execa } = await import('execa')
  await execa('npm', ['run', 'start'], { stdio: 'inherit' })
  index = index + 1
  intervalObj = setInterval(async () => {
    if (index > 1000) {
      index = 0

      clearInterval(intervalObj)
      intervalObj = null
    } else {
      await execa('npm', ['run', 'start'], { stdio: 'inherit' })
      index = index + 1
    }

  }, 60000);

}

run()