function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validateDeposit(field, label, deposit){
        let number = [1-9]
        if (!number) {
            alert('Error: enter valid amount to deposit' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }
    validateDeposit()

    function handleCreate(){
        console.log(deposit);
        ctx.users.push({deposit,balance:100});
        setShow(false);
    }
    function clearForm(){
        setDeposit('')
        setShow(true);
    }

    return (
        <Card
            bgcolor="primary"
            header="Deposit Money"
            status={status}
            body={show ? (
                <>
                    Deposit<br/>
                    <input type="input"
                           className="form-control"
                           id="deposit"
                           placeholder="Enter amount"
                           value={deposit}
                           onChange={e => setDeposit(e.currentTarget.value)} />
                    <button onClick={handleCreate}>Deposit</button>
                    <br/>
                </>
            ):(
                <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add more money</button>
                </>
            )}
        />
    )
}
