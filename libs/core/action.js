const inquirer = require('inquirer')
const download = require('./download')
const config = require('../../config')
const myAction = async (project, args) => {
	const answer = await inquirer.prompt([
		{
			type: 'list',
			name: 'framework',
			choices: config.framework,
			message: '选择创建的框架 '
		}
	])
	download(config.frameworkUrl[answer.framework], project)
}
module.exports = myAction