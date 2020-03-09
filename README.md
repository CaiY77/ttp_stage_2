# Cai TTP application

This is a stock application that allows users to buy stocks and maintain their portfolio. The front-end uses React.js with jsx and the back end runs on Express.js and PostgreSQL. Using the IEX Cloud API, this application can get the most up to date stock information.

## Dependencies and External Libraries

* Axios
* Moment
* React-Router-Dom
* Semantic-UI-React
* Nodemon
* morgan
* Body-Parser
* Cors
* sequelize

## Sneak Peak

```JSX
renderTransactions = () => {
  const { stocks } = this.props

  const myTrans = stocks.map(stock=>{
    const total = stock.qty * stock.price;
    const dateString = stock.createdAt;
    const momentDate = moment(dateString)

    return <Card raised key={stock.id} className="card-style" >
      <Card.Content>
        <Card.Header className="card-style-2">{stock.company}</Card.Header>
        <Card.Meta className="card-style">{momentDate.format("LLLL")}</Card.Meta>
        <Card.Description className="card-style">
          You purchsed {stock.qty} shares of {stock.symbol} at ${stock.price} a share.
        </Card.Description>
      </Card.Content>
      <Card.Content className="card-style">
        Total: $ {total.toFixed(2)}
      </Card.Content>

    </Card>
  });

  return myTrans;
}

```

### Login Screen

<img width="1435" alt="Screen Shot 2020-03-09 at 7 37 48 AM" src="https://user-images.githubusercontent.com/33525692/76209979-8c6d6b00-61d9-11ea-9941-7a7b6db24eb4.png">


### Register Screen

<img width="1435" alt="Screen Shot 2020-03-09 at 7 37 43 AM" src="https://user-images.githubusercontent.com/33525692/76209961-86778a00-61d9-11ea-93e3-71ea8af8d42d.png">

### Default Page

<img width="1435" alt="Screen Shot 2020-03-09 at 7 38 21 AM" src="https://user-images.githubusercontent.com/33525692/76209928-72338d00-61d9-11ea-86e2-88c976b17105.png">

### Portfolio

<img width="1435" alt="Screen Shot 2020-03-09 at 7 38 57 AM" src="https://user-images.githubusercontent.com/33525692/76210018-9c854a80-61d9-11ea-8f09-2acd80ef40bb.png">

### Transactions

<img width="1435" alt="Screen Shot 2020-03-09 at 7 39 03 AM" src="https://user-images.githubusercontent.com/33525692/76210005-95f6d300-61d9-11ea-89ea-1fc4c31fa864.png">

#### Requirements

1. As a user, I want to create a new account with my name, email, and password so that I can buy and
trade stocks.
* Default the user’s cash account balance to $5000.00 USD.
* A user can only register once with any given email.
2. As a user, I want to authenticate via email and password so that I can access my account.
3. As a user, I want to buy shares of stock at its current price by specifying its ticker symbol and the
number of shares so that I can invest.
* A user can only buy whole number quantities of shares.
* A user can only buy shares if they have enough cash in their account for a given purchase.
* A user can only buy shares if the ticker symbol is valid.
4. As a user, I want to view a list of all transactions I’ve made to date (trades) so that I can perform an
audit.
5. As a user, I want to view my portfolio (a list of all the stocks I own along with their current values) so
that I can review performance.
* Current values should be based on the latest price and quantity owned for a given stock.
* Each stock owned should only appear once.
6. As a user, I’d like to see the font color of stock symbols and current prices in my portfolio change
dynamically to indicate performance.
* Display red when the current price is less than the day’s open price.
* Display grey when the current price is equal to the day’s open price.
* Display green when the current price is greater than the day’s open price.
