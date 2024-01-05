const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/styles.less'),
            name: 'design-system',
            fileName: (format) => `design-system.${format}.js`
        }
    }
});