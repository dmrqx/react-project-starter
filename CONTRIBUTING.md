# Contributing

### Linting and formatting

This project makes use of [standardJS](https://github.com/standard/standard) and [stylelint](https://github.com/stylelint/stylelint) for static analysis.

Automation for this tasks is yet to be implemented. \
In the meantime, it is advisable to run each command before opening pull requests, in the following order:

```sh
npm run format

# normalize indentation, line breaks, etc.
```

```sh
npm run lint:js

# fixes issues found within .js files
```

```sh
npm run lint:css

# fixes issues found within .css files
```

> The lint:\* scripts may output issues which require manual fix

&nbsp;

### Tests

Run tests by executing:

```sh
npm test
```

> Other available commands:
>
> `npm run test:watch` \
> `npm run test:coverage`
