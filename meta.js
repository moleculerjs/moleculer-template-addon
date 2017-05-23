"use strict";

const exec = require("child_process").execSync;

module.exports = function(values) {
	return {
		questions: [
			{
				type: "input",
				name: "projectDescription",
				message: "Project description:"
			},
			{
				type: "input",
				name: "serviceName",
				message: "Service name:",
				default() {
					return values.projectName.replace("moleculer-", "");
				}
			}
		],

		completeMessage: `
To get started:

	cd {{projectName}}
	
	npm run dev

		`
	};
};
