const {resetDatabase} = require('./resetDatabase.js')
const {resetTasks} = require('./resetTasks.js')
const dev = require('../../cypress.dev.json')
const prod = require('../../cypress.prod.json')



/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('task', {
    'resetDb': resetDatabase,
    'resetTasks': resetTasks
  })

  //automaticke otvorenie console pri spustení testu
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if(browser.name === 'chrome') {
      launchOptions.args.push('--auto-open-devtools-for-tabs')

      return launchOptions
    }
  })
//nastavenie url na cypress.dev.json
  return config.env.configFile = prod
}
