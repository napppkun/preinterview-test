# Installation and Configuration
Install necessary dependencies
```
npm init -y
npm install --save-dev typescript ts-node @types/node vitest @vitest/coverage-v8
npx tsc --init
```
Create `src` folder to store TypeScript code
In `package.json` under `"scripts"` modify to this
```
"scripts": {
    "build": "tsc",
    "start": "ts-node ./dist/index.js",
    "test": "vitest",
    "coverage": "vitest run --coverage",
    "watch": "vitest --watch"
}
```
and add
```
"type": "module"
```
In `tsconfig.json` uncomment file layout
```
"rootDir": "./src",
"outDir": "./dist"
```
and add this 
```
"compilerOptions": {
    // existing config
},
"include": ["src/**/*"],
"exclude": ["dist", "tests"]
```
# Run
Compile code
```
npm run build
```
Execute code
```
npm run start
```
# Test

Run test
```
npm test
```
