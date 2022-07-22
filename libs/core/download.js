const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const spinner = ora().start()
module.exports = (url, project) => {
	spinner.text = '代码正在下载......'
	download(
		`direct:${url}`,
		project,
		{clone: true},
		(err) => {
			if (!err) {
				spinner.succeed('代码下载成功！')
				console.log(chalk.green.bold('Done!'), chalk.bold('you run:'))
				console.log(chalk.blue(`cd ${project}`))
				console.log(chalk.blue('npm install'))
				console.log(chalk.blue('npm run dev'))
			} else {
				spinner.fail('代码下载失败！')
			}
		}
	)
}