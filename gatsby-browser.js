import "./src/css/index.css"

// Import font awesome's css and use it, otherwise it injects its styles via JS at runtime
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
