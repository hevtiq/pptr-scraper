# Automated testing with Jest and Puppeteer

## 1. Setup project

### 1.1 Setup git

[ ] Setup SSH

```bat
    rem create new ssh key
    cd %userprofile%\.ssh && cd ~/.ssh
    ssh-keygen -t rsa -b 4096 -C "[email]"
    enter key name: [username]_[company]
    enter pass phase: ********
    type %userprofile%\.ssh\[username]_[company].pub | clip && cat ~/.ssh [username]_[company].pub | pbcopy

    rem paste into SSH setting in github

    rem check windows credentials

```

[ ] Setup github: [https://github.com/_username_/_repo_.git](https://github.com/_username_/_repo_.git)

[ ] Setup repo in local to async data with github

```bat
    mkdir pptr-scraper && cd pptr-scraper
    git clone _repo_
    git add README.md
    git commit -m "add first commit"
    git branch -M dev
    git push -u origin dev
```

### 1.2 Setup packages

```bat
    rem: create new package.json
    cd pptr-scraper && git init -y

    rem: install packages
    npm install puppeteer prettier
```

### 1.3 Config jest

```bat
    :: in window
    .\node_modules\.bin\jest --init

    :: in linux or mac
    ./node_modules/.bin/jest --init
```

> Would you like to use Jest when running "test" script in "package.json"? ... yes
> √ Would you like to use Typescript for the configuration file? ... no
> √ Choose the test environment that will be used for testing » node
> √ Do you want Jest to add coverage reports? ... no
> √ Which provider should be used to instrument code for coverage? » babel
> √ Automatically clear mock calls and instances between every test? ... no

```js
// jest.config.js
// rem for handling by myself
// testEnvironment: "node",
preset: "jest-puppeteer",
bail: 5,
```

```js
// babel.config.js
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current",
                }
            }
        ]
    ],
};
```

```json
// package.json
"scripts": {
    "test": "jest --forceExit"
  },
```

```js
// config.js
module.exports = {
    url: 'http://books.toscrape.com/catalogue/tipping-the-velvet_999/index.html',
};

```

### 1.3 Create percy account

- In page [percy](https://percy.io/) create new account
- Create new pptr project
- Integrate github
- Setup percy variable to window environment

## 2. Start project
