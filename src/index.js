import path from 'path'
import AppConfig from '@anujdatar/appconfig'

const electron = require('electron')

class ElectronAppConfig extends AppConfig {
  constructor (options) {
    options = {
      ...options
    }
    const defaultCwd = (electron.app || electron.remote.app).getPath('userData')
    console.log('estore defaultCwd', defaultCwd)

    if (options.configDir) {
      // if configDir is passed make sure it is an absolute path
      options.configDir = path.isAbsolute(options.configDir) ? options.configDir : path.join(defaultCwd, options.configDir)
      console.log('estore configDir', options.configDir)
    } else {
      options.configDir = defaultCwd
    }
    super(options)
  }
}

module.exports = ElectronAppConfig
