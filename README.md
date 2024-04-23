## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# ADR 1: Use of Create-react-app

## Context
As the application is for a code test, agility in creating the application scaffolding is sought.

## Decision
I have decided to use this tool offered by React to speed up the initial process.

## Consequences
- **Benefits**: Speeds up development time, easy initial setup.
- **Risks**: Could bring problems if the application needed to grow significantly, configuration could become difficult.

# ADR 2: Use of Material UI component library

## Context
As the application is for a code test and agility is sought, this library offers all kinds of basic components that facilitate the development process.

## Decision
I have decided to use this library for all the basic components of the app.

## Consequences
- **Benefits**: Accelerates development time, many components out of the box.
- **Disadvantages**: Growth in package size due to the use of the library.
- **Risks**: Adding libraries always carries the risk that they stop being updated and could cause issues with new versions of others.

# ADR 3: Routing, file-based routing or standard

## Context
When deciding what type of routing architecture to use, these two options typically come up: standard routing with routes and a router, and file-based routing as used by Next.js.

## Decision
I have chosen to use the standard to avoid complicating the initial code of the application with all the logic that needs to be added to make file-routing work. If the application were larger, I would have opted for file-based due to the ease and intuitiveness it provides in generating new routes.

## Consequences
- **Benefits**: Standard router, any developer knows how to configure it and add more routes, it doesn’t have a complex initial setup.
- **Risks**: If the app grows significantly, it could become cumbersome to manage so many routes in the router.

# ADR 4: AgGrid, Dynamic table

## Context
I need to add a table that displays data and updates it quickly.

## Decision
I have used AgGrid because it is a very flexible library with many solved problems and it is also well-known.

## Consequences
- **Benefits**: Covers many use cases.
- **Disadvantages**: It is complex to configure in its more complex use cases.
- **Risks**: The price of the enterprise could rise even more and make it inaccessible for the company.