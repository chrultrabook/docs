# EmulatorJS Website

This is the official website for the EmulatorJS project.
Here you will find information on any prerequisites needed, installation & setup processes and advanced configuration options.

Note: This website is built upon vuepress.

Made with ❤️ by [@ethanaobrien](https://github.com/ethanaobrien) & [@allancoding](https://github.com/allancoding)

## Contributing

In order to contribute, you will need the following:

* Node.js 10+
* Yarn (not technically required)
* Vuepress (part of nodejs)
* A code editor like Visual Studio Code (or notepad++)

### Development

Run the following commands one after the other. (run with `npm` instead of `yarn` if you're too lazy to install yarn)

Install Dependencies

```sh
yarn install
```

Lastly, run the following to spin up and webhost the project

```sh
yarn dev_new
```

It can now be reached at http://localhost:8080/.

NOTE: Whenever you make any changes to the vuepress `config.js` file, close the running node program and re-reun `yarn dev_new`
