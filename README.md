# Cat Facts API

1. Read the docs for [cat facts API](https://catfact.ninja/)
2. Create a small frontend app, the app should have:

- a heading that says Cat Breeds
- a form that asks the user for number for breeds they want to view (make sure to not allow huge numbers, negative
numbers etc)
- a section where you will display results
- some p for potential errors

- When the user submit the form, you make a request to the `/breeds` endpoint `https://catfact.ninja/breeds?limit=5`
- you will get some results that contain an array of breeds
- for each breed, create a car element that will have:

- an h3 with the breed name
- a p with breed country

- clear the previous results before displaying new ones
- clear the form
- split the code into modules 
