# Hackjam: Hackflix with React

Do not forget to read the [readme](../README.md) 

## Memento

- Launch the app `yarn start` or `npm start` and go to http://localhost:3000/
- Run the tests ! `yarn test` or `npm test` or `yarn start -- --watch` or `npm start  -- --watch` then press `a` to run all tests.
- Once your work done **commit** and **push** `git add src && git commit -m "Exercise completed" && git push origin`

## Exercise 5

In this exercise you will write the logic to select a category. 

Do not forget to run the tests.

At the end of this exercise in [your app](http://localhost:3000) you should be able to:
- [ ] Select a category
- [ ] Have a default category


## Hints

### Conditional class

In React you can use the library `classNames` to make a `class` active or not easily.
Here how you can use it:
```tsx
<span className={classNames({
'warning': message.level === 'WARN', 
'error': message.level === 'ERROR', 
})}>Warning message</span>
```
