import path from 'path'
import AppConfig from '@anujdatar/appconfig'

const electron = require('electron')

class ElectronAppConfig extends AppConfig {
  constructor (options) {
    options = {
      ...options
    }
    const defaultCwd = (electron.app || electron.remote.app).getPath('userData')
    // console.log(defaultCwd)

    if (options.configDir) {
      options.configDir = path.isAbsolute(options.configDir) ? options.configDir : path.join(defaultCwd, options.configDir)
    } else {
      options.configDir = defaultCwd
    }
    super(options)
  }
}

module.exports = ElectronAppConfig
