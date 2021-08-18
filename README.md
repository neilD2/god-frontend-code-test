# Volvo Cars (Global Online Digital) 
## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop
![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile
![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this: 

```json
[
    {
      "id": "xc90-recharge",
      "modelName": "XC90 Recharge", 
      "bodyType": "suv",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/xc90_recharge.jpg"
    }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements
- The project is bootstraped using create-react-app.
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:
- If you use our design system component library, [VCC-UI](https://vcc-ui.netlify.app)
- If you add a filter bar on the top to filter cars by `bodyType`


# Candidate / my results and feedback

Really enjoyed doing this exercise, good tech stack with a good challange.

Achieved creating the carousel, with the slides / card dynamically generated from the mock car data.
Used the VCC-UI as much as possilbe.

Carousel works on desktop and mobile.

![ezgif com-gif-maker (23)](https://user-images.githubusercontent.com/3845604/129958880-22022ebe-49e3-4721-821c-79aae112af20.gif)


TODO:
- Seperate getting the api/cars.json and passing that to the Slide / Cards component, this was tricky as the Carousel component wanted an array, and I had the cards in a fragment.
- Add tests
- Dots for mobile
- Commments where needed
