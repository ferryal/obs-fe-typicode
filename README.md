# USER-LIST-OBS-FERRYAL

[DEMO](https://obs-fe-ferryal.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features
- CRUD user list
- User List
- Detail User
- Drag n drop user list
- Filter by name


## Requirement

Before you proceed, please make sure your machine has met the following requirements:

| Dependency |   Version   |
| ---------- | :---------: |
| Node       | >= v18      |
| NPM        |  >= 8.11.0  |

## Quick Start

i) Installation

```bash
# install project dependencies
npm install
```

ii) Running app

Copy `.env.example` to `.env.local` and change value based on your settings.

For **development**:

```bash
npm run dev
```

For **production**:

```bash
# build and serve our server
npm run build && npm start
```

## Project Structure

Below is overview of project folder structure in this starter:

<p>

```
|-- public                # contains all assets (font, image)
|-- src
    |-- components        # contains small reuseable small component
    |-- app               # Each page is associated with a route based on its file name
    |-- store             # contains redux store
    |-- lib               # contains utils & types
```

</p>

```
DONT REPEAT YOURSELF - **HAPPY CODING**
```