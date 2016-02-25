import I18NUtil from "../util/I18NUtil";

/**
 * Load component I18N file
 */
try {
	module.exports = require("./reactjs-tag.i18n." + I18NUtil.getSystemI18N());
} catch(exception) {
	module.exports = require("./reactjs-tag.i18n." + config.DEFAULT_SYSTEM_I18N);
}
