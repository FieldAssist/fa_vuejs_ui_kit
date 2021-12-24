const {description} = require('../../package')
const fs = require("fs");
const path = require("path");

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'FA Vue UI Kit',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: "https://github.com/FieldAssist/fa_vuejs_ui_kit",
        repoLabel: "Contribute!",
        docsDir: 'docs/src',
        editLinks: true,
        docsBranch: "main",
        searchPlaceholder: 'Search...',
        editLinkText: "Help us improve this page!",
        lastUpdated: false,
        nav: [
            {
                text: 'Components',
                link: '/components/buttons/index.html',
            },
        ],
        sidebar: {
            '/components/': [
                {
                    title: 'Buttons',
                    collapsable: false,
                    children: getSideBar('components/buttons')
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        [
            'vuepress-plugin-typescript',
            {
                tsLoaderOptions: {
                    // All options of ts-loader
                },
            },
        ],
        // ['../src/.vuepress/plugins/register-all', {
        //     componentsDir: `${__dirname}/../../../src/lib-components/`
        // }],
        [require('./plugins/register-all'),{
            componentsDir: `${__dirname}/../../../src/lib-components/`
        }],
        'demo-code',
        "@kawarimidoll/tailwind",


    ]
}



function getSideBar(folder) {
    console.log(`${__dirname}/../../../src/lib-components`)
    const extension = [".md"];

    const files = fs
        .readdirSync(path.join(`${__dirname}/../${folder}`))
        .filter(
            (item) =>
                item.toLowerCase() !== "readme.md" &&
                fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
                extension.includes(path.extname(item))
        ).map(value => `/${folder}/${value}`);

    return [...files];
}