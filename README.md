# Venue Booking site

## Local Setup

1. clone it

```bash
git clone https://github.com/akshay782/venue_booking_site.git
# go to project directory
cd venue_booking_site
```

2. Install packages

- Backend => In root directory run following command
- Frontend => In client-side folder run same following command

```bash
npm install
```

3. Create `.env` file in the root directory and add following variables

```bash
dburl = 'your mongodb cluster url'
PORT = 'the port in which you want to run your nodejs/backend'
jwt_secret = 'your jwt secret'
```

4. Run it 🚴‍♂️

- Backend => First run following command in root directory, it will start server on port 2000
- Frontend => Second run same command in client side folder on another terminal, it will lauch react app

```bash
npm start
```

## To commit and push changes

Before you start working \
Always -

```bash
git pull
```

After you done making some changes

```bash
git checkout -b <branch_name>
git add .
git commit -m "message"
git push
```

- **Note** \
  Please don't commit on **main** branch
