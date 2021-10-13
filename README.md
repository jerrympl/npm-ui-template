## Setup

1. Clone the repo:

```
git clone https://github.com/jerrympl/npm-ui-template.git
```

2. Install dependencies:

```
npm install or yarn
```

3. Make a changes
4. Once you make a changes, you need to bump version in package.json and run:

```
yarn build
```
in order to generate built version of components

5. Add all generated files into git and commit changes
6. Push changes
7. Create a release on github and add corresponding git tag to your npm package version
8. That's it!

## Using on project end

1. Add dependency with proper version number in package.json by pointing your repo url

```
...
"ui": "git+ssh://git@github.com/jerrympl/npm-ui-template.git#1.0.0"
...
```
2. Run npm install or yarn
3. Use your package

```
import { Button } from 'ui';

//

<Button variant="secondary" onClick={() => alert("Test")}>Some button</Button>
```