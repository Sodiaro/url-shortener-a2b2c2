# URL Shortener - a2b2c2

## Features

### 1. One-Shot Link (A2)
- Each short URL works **exactly once**.
- After the first click, it becomes invalid and returns a 404.

### 2. Malware Filter (B2)
- Blocks URLs containing keywords like `virus`, `malware`, `scam`.
- Returns a 400 error if blocked.

### 3. Report Endpoint (C2)
- `GET /:code/report` shows a JSON summary:
  - Original URL
  - Click count
  - Used status
  - UTC timestamp

## Technical Requirements
- In-memory caching
- Buffered save
- UTC timestamps
- Standard HTTP status codes

## Running Locally
```bash
npm install
node server.js
```

### API Documentation
Interactive API documentation is available at:
`https://url-shortener-a2b2c2.onrender.com/api-docs`