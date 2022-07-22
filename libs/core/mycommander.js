const myAction = require('./action')
const myCommander = program => {
	program
		.command('create <project> [other...]')
		.alias('ctr')
		.description('创建项目')
		.action(myAction)
}
module.exports = myCommander