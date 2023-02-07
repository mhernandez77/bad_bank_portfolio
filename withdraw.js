function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const [balance, setBalance] = React.useState('0');
  const ctx = React.useContext(UserContext);
  let userBalance = ctx.users[ctx.users.length - 1].balance;
  let userName = ctx.users[ctx.users.length - 1].name;


    function validate(number) {
    if (isNaN(number) || number < 0) {
        // alert('Error: enter valid amount to withdraw');
        setStatus(
            "Your withdrawal could not be completed. Please enter a valid, positive number."
        );
        return false;
    }
    return true;
}
  // validate()

    function overdraw(number){
        if (Number(number) > userBalance){
            setStatus(
                "Your withdrawal could not be completed.Withdrawal amount cannot be greater than your current balance."
            );
            clearForm();
            return false;
        }
        return true
    }

  function handleWithdraw(amount){
        if(!validate(amount) || !overdraw(amount)) return;
        setBalance(userBalance - amount);
        setStatus("");
      ctx.users[ctx.users.length - 1].balance -= Number(amount);
        setShow(false);
    // console.log(withdraw);
  }
  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
      <Card
          bgcolor="primary"
          header="Withdraw Money"
          status={status}
          body={show ? (
              <>
                  <h1> {userName}, you can withdraw here</h1>
                  <h2> Your Balance: $ {userBalance}</h2>
               <br />
               <br />
               Amount
               <br />
                <input type="input"
                       className="form-control"
                       id="withdraw"
                       placeholder="Enter amount"
                       value={withdraw}
                       onChange={e => setWithdraw(e.currentTarget.value)} />
                <button
                    type="submit"
                    className="btn btn-outline-dark"
                    disabled={withdraw === ""}
                    onClick={() => handleWithdraw(withdraw)}>Withdraw</button>
                <br/>
              </>
          ):(
              <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Take more money</button>
              </>
          )}
      />
  )
}
