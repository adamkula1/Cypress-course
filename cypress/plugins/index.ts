const {resetDatabase} = require('./resetDatabase.js')
const {resetTasks} = require('./resetTasks.js')


/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('task', {
    'resetDb': resetDatabase,
    'resetTasks': resetTasks
  })
}
