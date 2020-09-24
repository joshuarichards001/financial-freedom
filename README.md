# Financial Freedom

[Check out the project live here!](https://financial-freedom.netlify.app/)
![Final Pic](demo-images/dashboard-pic.png)
A full stack budgeting application that manages users and their transactions.

## Technologies

- **React** (for the frontend framework)
- **Typescript** (for the Javascript syntax)
- **CSS** (for the styling)
- **Python** (for the server side language)
- **Django** (for the server side framework)
- **SQLite** (for the database)

## Current Functionality

- Adding a transaction
- Deleting a transaction
- Showing your balance
- Pie Charts that show
  - Income vs Expenses
  - Expense Category Comparison
- A budget of what you want to spend on each category
- Hot swap sections to customise the user interface
- User support with login, logout and register functionality
- Storing users tokens locally to remove the need to login every time
- Can sign in using your Google Account

I will continue to expand the functionality in the future.

## Set-up on your Machine

_(To get it running entirely locally you will need to change the baseUrl in frontend/src/Constants.ts to 127.0.0.1:8000 otherwise the frontend will connect to the remote API)_

1. Clone the project to your machine `[git clone https://github.com/joshuarichards001/budgeting-web-app.git]`
2. Navigate into the directory `[cd budgeting-web-app]`
3. Navigate into the backend directory `[cd backend]`
4. Install virtualenv if you haven't already `[pip install virtualenv]`
5. Create the virtual environment `[virtualenv env]`
6. Activate the virtual environment `[source env/bin/activate]`
7. Install the dependencies `[pip install -r requirements.txt]`
8. Navigate into the frontend directory `[cd ../frontend]`
9. Install the dependencies `[npm install]`

Then to run this application you will need to perform the following in two separate terminals:

1. In the first terminal go into backend `[cd backend]` and run `[python3 manage.py runserver]`
2. In the second terminal go into frontend `[cd frontend]` and run `[npm start]`

## Application in Action

Here is the login page that a new user is greeted with.
![Login](demo-images/login-pic.png)

Here is the dashboard that is the core page of the application
![Full Tour](demo-images/dashboard-pic.png)

A showcase of the "Hot swap sections" functionality
![Hide](demo-images/hiddencard-pic.png)
