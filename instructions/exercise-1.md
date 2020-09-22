# Hackjam: Hackflix with React

Do not forget to read the [readme](../README.md) 

## Memento

- Install dependencies `yarn install` or `npm install`
- Launch the app `yarn start` or `npm start` and go to http://localhost:3000/
- Run the tests ! `yarn test` or `npm test` or `yarn start -- --watch` or `npm start  -- --watch` then press `a` to run all tests.
- Once your work done **commit** and **push** `git add src && git commit -m "Exercise completed" && git push origin`

## Exercise 1

In this exercise your main goals are to fix the app and show the movies. 

Do not forget to run the tests.

At the end of this exercise in [your app](http://localhost:3000) you should be able to:
- [ ] See the app without errors
- [ ] See the movie list


Open the file [App.tsx](../src/App.tsx) and start hacking !

## Hints

If you don't know how to move forward, here some tips that might help you.

### Fix the app
The [App.tsx](../src/App.tsx) file is JSX file, to be more precise it is a TSX file. JSX is a syntax extension to JavaScript (so TSX for TypeScript). It looks like HTML, but it's not. Check out the documentation to understand more https://reactjs.org/docs/introducing-jsx.html

Since JSX is not HTML but quite similar some keyword you are used to may change. Check this
https://reactjs.org/docs/dom-elements.html.

### Show the movie list

The app has a prop with the movies, you can maybe dig this way. 

In React, thanks to JSX/TSX it's really easy to render collections, here the documentation https://reactjs.org/docs/lists-and-keys.html 
