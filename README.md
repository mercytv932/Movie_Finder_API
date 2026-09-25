# Movie Finder API

This project is a simple Express API that searches for movies and retrieves movie details by calling the OMDb API. It exposes endpoints for finding movies by title and fetching movie details by ID.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Move into the project folder:

   ```bash
   cd movie-finder-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

This project requires one environment variable for the OMDb API key.

Create a `.env` file in the project root and add the following:

```env
OMDB_API_KEY=your_omdb_api_key_here
```

### Required variable

- `OMDB_API_KEY`: Your OMDb API key used to authenticate requests to the OMDb API.

> Do not commit the `.env` file to GitHub. It should stay local on your machine.

## Running the Application

This project does not currently define a `dev` script in `package.json`, so use:

```bash
node server.js
```

The server listens on port `3000`, so the application is available at:

```text
http://localhost:3000
```

## Testing / Usage

There is no automated test suite configured in the current project. The app can be tested manually by sending HTTP requests to the API endpoints.

### API endpoints

- `GET /api/search?title=<movie title>`
  - Searches OMDb for movies matching the provided title.
- `GET /api/movies/:id`
  - Retrieves details for a specific movie using its OMDb ID.

### Example requests

Using curl:

```bash
curl "http://localhost:3000/api/search?title=Inception"
curl "http://localhost:3000/api/movies/tt1375666"
```

### Using Postman

1. Open Postman.
2. Create a new request.
3. Choose the `GET` method.
4. Enter a URL such as:
   - `http://localhost:3000/api/search?title=Inception`
   - `http://localhost:3000/api/movies/tt1375666`
5. Click `Send`.
6. Review the JSON response returned by the API.

## Important Notes

- A valid OMDb API key is required before the app can work.
- This project does not use a database.
- The app uses Express and Axios to call the OMDb API.
- Make sure the `.env` file exists in the project root and contains a valid `OMDB_API_KEY` before starting the server.
- The current `package.json` file does not include a working `npm run dev` script, so `node server.js` is the correct command for this project.
