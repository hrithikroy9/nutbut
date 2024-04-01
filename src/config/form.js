import React, { useState } from 'react';

const Form = () => {
    const [user, setUser] = useState({
        Name: '', Discord: '', Email: '', Instagram: '', Number: '', message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        debugger
            setUser({ ...user, [name]: value });
            console.log(user);

    };

    const getdata = async (e) => {
        const { Name, Discord, Email, Instagram, Number, message } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, Discord, Email, Instagram, Number, message
            })
        }
        if (user.Name.length === 0 || user.Name === null || user.Name === undefined){
            alert("Hey stupid, fill the name madita!")
            return 
        }
        if(user.Email.length === 0){
            alert("Hey stupid, fill the email madita!")
            return
        }

        const res = await fetch('https://yeet2f-default-rtdb.firebaseio.com/UserData.json', options)

        if (res) {
            alert("SENT xoxo")
        }
        else {
            alert("Error BRUH!")
        }
    }

    return (

        <div className='form'>
            <div className='container'>
                <form method='POST'>
                    <p>《★~ Name ~★ 》- <input type='text' name='Name' placeholder='Your Name' value={user.Name} autoComplete='off' required onChange={handleInputChange} /></p>
                    <p>Discord•🎧- <input type='text' name='Discord' placeholder='@Discord' value={user.Discord} autoComplete='off' required onChange={handleInputChange} /></p>
                    <p>Email-<input type='email' name='Email' placeholder='Your Email' value={user.Email} autoComplete='off' required onChange={handleInputChange} /></p>
                    <p>Instagram•🅾-<input type='text' name='Instagram' placeholder='@Instagram' value={user.Instagram} autoComplete='off' required onChange={handleInputChange} /></p>
                    <p>Number•🍆-<input type='number' name='Number' placeholder='Contact' value={user.Number} maxLength={13} autoComplete='off' required onChange={handleInputChange} /></p>
                    <textarea name='message' placeholder='REASON WHY YOU WANT TO JOIN THUNDERCOCK' value={user.message} autoComplete='off' required onChange={handleInputChange}></textarea>
                    <button onClick={getdata} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;