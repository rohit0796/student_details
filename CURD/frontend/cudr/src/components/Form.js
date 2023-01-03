import React, { useState } from 'react';
import '../components/form.css'
import cross from './media/remove.png'
function Form(props) {
    const [user, setUser] = useState(
        { name: '', redgno: '', email: '', dob: '', mob: '', gender: '', branch: '', hobbies: '', password: '', cpassword: '' }
    )
    let name, value;
    const inputValue = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value });
    }
    const postData = async (e) => {
        e.preventDefault();
        console.log(user);
        const { name, redgno, email, dob, mob, gender, branch, hobbies, password, cpassword } = user;
       if(name=='')
       {
            alert("please fill the name");
       }
       else if(redgno=='')
       {
        alert("please fill the regd no.")
       }
       else if(email=='')
       {
        alert("please fill the email feild")
       }
       else if(dob=='')
       {
        alert("please fill the date of birth field")
       }
       else if(mob=='')
       {
        alert("please fill the mobile no. feild")
       }
        else if (cpassword !== password)
            alert("your password and confirm password inputs must be same")
        else {
            const res = await fetch('/submit', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, redgno, email, dob, mob, gender, branch, hobbies, password
                })

            })
            const data = await res.json()
            if (data.status === 422 || !data) { window.alert("invalid registration") }
            else {
                window.alert("Registration Successfull")
            }
            props.closeModal(false)
        }
    }

    return (
        <>
            <div className="container">
                <div className="cont">


                    <button onClick={() => {
                        props.closeModal(false)
                    }} className="but"><img src={cross} alt="X" /></button>
                    <div className="body">
                        <h1>Registration form</h1>
                    </div>
                    <form method="POST">

                        <table className="tb" align="center" cellSpacing="10px">
                            <tr>
                                <td>Name:</td>
                                <td> <input type="text" placeholder="enter your name" id="name" name="name" value={user.name} onChange={inputValue} required/> </td>
                            </tr>
                            <tr>
                                <td>Regd no.</td>
                                <td> <input type="number" placeholder="enter your regd no" id="redg" name="redgno" value={user.redgno} onChange={inputValue} required/> </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td> <input type="text" placeholder="enter your Email" id="mail" name="email" value={user.email} onChange={inputValue} required/> </td>
                            </tr>
                            <tr>
                                <td>Date of birth:</td>
                                <td> <input type="date" id="date" value={user.dob} name="dob" onChange={inputValue} required/> </td>
                            </tr>
                            <tr>
                                <td>Mobile no:</td>
                                <td> <input type="text" placeholder="enter your mob no." id="mob" pattern="[7-8]{1}[0-9]{9}" name="mob" value={user.mob} onChange={inputValue} /> </td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>
                                    <input type="radio" name="gender" value="male" onChange={inputValue} />
                                    <span>Male</span>
                                    <input type="radio" name="gender" value="female" onChange={inputValue} />
                                    <span>Female</span>
                                    <input type="radio" name="gender" value="others" onChange={inputValue} />
                                    <span>others</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Branch:</td>
                                <td> <select id="branch" name="branch" onChange={inputValue}>
                                    <option value="IT" onChange={inputValue}>Information Technology</option>
                                    <option value="Mech" onChange={inputValue}>Mechanical</option>
                                    <option value="CSE" onChange={inputValue}>Computer Science</option>
                                    <option value="civil" onChange={inputValue}>Civil engeneering</option>
                                    <option value="chem" onChange={inputValue}>Chemical</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td>Hobbies:</td>
                                <td>
                                    <input type="checkbox" value="singing" onChange={inputValue} />
                                    <span>Singing</span><br />
                                    <input type="checkbox" value="dancing" onChange={inputValue} />
                                    <span>Dancing</span><br />
                                    <input type="checkbox" value="acting" onChange={inputValue} />
                                    <span>Acting</span><br />
                                    <input type="checkbox" value="cricket" onChange={inputValue} />
                                    <span>cricket</span><br />
                                    <input type="checkbox" value="others" onChange={inputValue} />
                                    <span>others</span> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td> <input type="password" placeholder="enter your password" value={user.password} onChange={inputValue} name="password" /> <br />
                                    <input type="password" placeholder="Confirm your password" value={user.cpassword} onChange={inputValue} name='cpassword' /> </td>

                            </tr>
                            <tr>
                                <td> <button type="submit" className='submit' onClick={postData}>submit</button> </td>
                                <td> <div className="res"><button type="reset" className='reset'>Reset</button></div> </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Form;
