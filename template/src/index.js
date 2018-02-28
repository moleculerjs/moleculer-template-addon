/*
 * {{projectName}}
 * Copyright (c) {{year}} MoleculerJS (https://github.com/moleculerjs/moleculer-addons)
 * MIT Licensed
 */

"use strict";

/**
 * {{projectDescription}}
 * 
 * @name {{projectName}}
 * @module Service
 */
module.exports = {

	name: "{{serviceName}}",

	/**
	 * Default settings
	 */
	settings: {

	},

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Hello World test action
		 * 
		 * @actions
		 * 
		 * @param {String} name - Name of user
		 * @returns {String}
		 */
		test(ctx) {
			return "Hello " + (ctx.params.name || "Anonymous");
		}
	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {
		return this.Promise.resolve();
	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {
		return this.Promise.resolve();
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {
		return this.Promise.resolve();
	}
};