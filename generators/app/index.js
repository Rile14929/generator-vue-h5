var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async initPackage() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "version",
        message: "Your project version",
        default: "1.0.0"
      },
      {
        type: "input",
        name: "description",
        message: "Your project description",
        default: ""
      },
      {
        type: "input",
        name: "author",
        message: "Your project author",
        default: ""
      },
    ]);
    const pkgJson = {
      "name": answers.name,
      "version": answers.version,
      "description": answers.description,
      "author": answers.author,
      "private": true,
      "scripts": {
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "build:dev": "vue-cli-service build --mode development",
        "build:report": "vue-cli-service build --report",
        "build:staging": "vue-cli-service build --mode staging",
        "push:dev": "scp -r dist/* ",
        "push:prod": "scp -r dist/* ",
        "release:dev": "npm run build:dev && npm run push:dev",
        "start": "vue-cli-service serve",
        "test:unit": "vue-cli-service test:unit"
      },
      "dependencies": {
        "axios": "^0.18.0",
        "callapp-lib": "^2.1.5",
        "cross-env": "^5.2.0",
        "dayjs": "^1.9.4",
        "vant": "^2.10.10",
        "vconsole": "^3.3.0",
        "vue": "^2.6.8",
        "vue-meta": "^1.5.8",
        "vue-router": "^3.0.2",
        "vuex": "^3.1.0"
      },
      "devDependencies": {
        "@babel/plugin-proposal-optional-chaining": "^7.11.0",
        "@vue/cli-plugin-babel": "^4.1.1",
        "@vue/cli-plugin-eslint": "^3.5.0",
        "@vue/cli-plugin-unit-jest": "^3.5.0",
        "@vue/cli-service": "^3.5.0",
        "@vue/eslint-config-prettier": "^4.0.1",
        "@vue/test-utils": "1.0.0-beta.29",
        "babel-core": "7.0.0-bridge.0",
        "babel-eslint": "^10.0.1",
        "babel-jest": "^24.3.1",
        "babel-plugin-equire": "^1.1.1",
        "babel-plugin-import": "^1.13.0",
        "compression-webpack-plugin": "^4.0.0",
        "eslint": "^5.15.1",
        "eslint-plugin-html": "^6.0.0",
        "eslint-plugin-vue": "^5.2.2",
        "less": "^3.9.0",
        "less-loader": "^4.1.0",
        "postcss-px-to-viewport": "^1.1.1",
        "style-resources-loader": "^1.3.2",
        "vue-cli-plugin-style-resources-loader": "^0.1.4",
        "vue-template-compiler": "^2.6.12",
        "webpack-bundle-analyzer": "^3.1.0",
        "lint-staged": "^9.4.2",
      },
      "gitHooks": {
        "pre-commit": "lint-staged"
      },
      "lint-staged": {
        "*.{js,vue}": [
          "eslint --fix",
          "git add"
        ]
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.npmInstall()
  }

  writing() {
    this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationPath(),
    )

    this.fs.copyTpl(
      this.templatePath('.browserslistrc'),
      this.destinationPath('.browserslistrc'),
    )

    this.fs.copyTpl(
      this.templatePath('.env'),
      this.destinationPath('.env'),
    )

    this.fs.copyTpl(
      this.templatePath('.env.development'),
      this.destinationPath('.env.development'),
    )

    this.fs.copyTpl(
      this.templatePath('.env.staging'),
      this.destinationPath('.env.staging'),
    )

    this.fs.copyTpl(
      this.templatePath('.env.production'),
      this.destinationPath('.env.production'),
    )

    this.fs.copyTpl(
      this.templatePath('.eslintrc.js'),
      this.destinationPath('.eslintrc.js'),
    )

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
    )

    this.fs.copyTpl(
      this.templatePath('.prettierignore'),
      this.destinationPath('.prettierignore'),
    )
  }
};