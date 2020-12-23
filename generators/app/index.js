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
    ]);
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

    this.npmInstall()
  }
};