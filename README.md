# Park-King

The Final Project of COMP 20133 Applications Development and Emerging Technologies written in the NextJS-Springboot Web Stack.

## How to use

*Note: Make sure you have [Node.js](https://nodejs.org/en/) installed. To check, run `node -v` in your terminal*

*Note: Make sure you have [java](https://www.java.com/en/download/help/download_options.html) installed. To check, run `java -v` in your terminal*

1. First clone this git repository to your local device
```
git clone https://github.com/Pilner/Park-King.git
cd Park-King
```
2. Download all the dependencies and packages needed in this repository
```
cd frontend && npm install
```
3. Go to [Mapbox](https://www.mapbox.com/) and copy your Access Token API Key to the environment variables in `frontend/`
```
touch /frontend/.env.local
```
And then insert your Access Token in `.env.local` using this format:
```
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=<YOUR_API_KEY>
```
4. Run the backend process using Java Springboot
```
cd ../backend && mvn spring-boot:run
```
5. Open another terminal and run the frontend using NextJS
```
cd frontend && npm run dev
```
6. View the website on browser at
```
localhost:3000
```

## Routes

* `/` is the Home Page
* `/find` is the Find-A-Spot Page
* `/result` is the result Page
* `/contact` is the Contact Page

## Collaborators
- Raymond Miguel Cerna
- Carl Andrei E. Enrico
- Fabian Railey A. Victuelles


## Licenses
MIT License

Copyright (c) 2024 Cerna, Enrico, Victuelles

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
