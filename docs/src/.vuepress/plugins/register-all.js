const { fs, path, globby } = require('@vuepress/shared-utils')

function fileToComponentName (file) {
    return file
        .replace(/\/|\\/g, '-')
        .replace(/\.vue$/, '')
}

async function resolveComponents (componentDir) {
    if (!fs.existsSync(componentDir)) {
        return
    }
    return (await globby(['**/*.vue'], { cwd: componentDir }))
}

// Since this plugin can ben used by multiple times, we need to
// give each generated files a uid or the previous file would be
// overwritten.
let moduleId = 0

module.exports = (options, context) => ({
    multiple: true,

    async enhanceAppFiles () {
        const { componentsDir = [], components = [] } = options
        const baseDirs = Array.isArray(componentsDir) ? componentsDir : [componentsDir]

        function importCode (name, absolutePath) {
            return `Vue.component(${JSON.stringify(name)}, () => import(${JSON.stringify(absolutePath)}))`
        }

        function genImport (baseDir, file) {
            const split = file.split('/')
            const fileName = Array.isArray(split) ? split[split.length - 1] : file
            const componentName = fileToComponentName(fileName)
            const absolutePath = path.resolve(baseDir, file)
            const code = importCode(componentName, absolutePath)
            return code
        }

        let code = ''

        // 1. Register components in specified directories
        for (const baseDir of baseDirs) {
            const files = await resolveComponents(baseDir) || []
            code += files.map(file => genImport(baseDir, file)).join('\n') + '\n'
        }

        // 2. Register named components.
        code += components.map(({ name, path: absolutePath }) => importCode(name, absolutePath))

        code = `import Vue from 'vue'\n` + code + '\n'

        return [
            {
                name: `global-components-${++moduleId}.js`,
                content: code
            }
        ]
    }
})