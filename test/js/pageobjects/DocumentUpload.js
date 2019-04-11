import Base from './BasePage.js'

class DocumentUpload extends Base{

    get title() { return this.$('.onfido-sdk-ui-Title-titleSpan')}
    get crossDeviceIcon() { return this.$('.onfido-sdk-ui-crossDevice-SwitchDevice-icon')}
    get crossDeviceHeader() { return this.$('.onfido-sdk-ui-crossDevice-SwitchDevice-header')}
    get crossDeviceSubMessage() { return this.$('.onfido-sdk-ui-crossDevice-SwitchDevice-submessage')}
    get crossDeviceArrow() { return this.$('.onfido-sdk-ui-crossDevice-SwitchDevice-chevron')}
    get uploaderIcon() { return this.$('.onfido-sdk-ui-Theme-icon onfido-sdk-ui-Uploader-icon onfido-sdk-ui-Uploader-identityIcon')}
    get uploaderInctructionsMessage() { return this.$('.onfido-sdk-ui-Uploader-instructionsCopy')}
    get uploaderBtn() { return this.$('.onfido-sdk-ui-Uploader-buttons')}

    get upload() { return (async ()=>{
      const input = await this.$('.onfido-sdk-ui-CustomFileInput-input')
      await this.driver.executeScript(function(el) {
        el.setAttribute('style','display: block')
      },input)
      return input
    })()}

    copy = (lang="en") =>
      require(`../../../src/locales/${lang}.json`)
}

export default DocumentUpload;