import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import './InputForm.css'


const InputForms = (
    {updateWho, updateWhat, updateWhen, 
        updateWhere, publicateStory, updateAuthor, eraseSentence}
        ) => {
    const { register, handleSubmit, errors, reset } = useForm();
    const [values, setValues] = useState({
        who: "",
        what: "",
        when: "",
        where: "",
        author: "Stranger"
    })

    const updatesHandler = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        switch (name) {
            case "who":
                updateWho(value)
            break
            case "what":
                updateWhat(value)
            break
            case "when":
                updateWhen(value)
            break
            case "where":
                updateWhere(value)
            break
            case "author":
                let authorship = value ? value : "Stranger"
                updateAuthor(authorship)
            break
            default:
                return
        }
    }
    const submitForm = () => {
        publicateStory()
        eraseSentence()
        setValues({
            who: "",
            what: "",
            when: "",
            where: "",
            author: "Stranger"
        })
        reset()
    }

    return (
        <form autoComplete="off" onSubmit = {handleSubmit(submitForm)}>
            <div className="form-group">
                <input type="text" className="form-control" name = "who" placeholder = "who ?" 
                    ref = {register({
                        required: "Who is a main character?", 
                        pattern: {value: /[a-z]{1,10}/, message: "No only digits are welcome here"}
                    })} onChange = {updatesHandler}/>
                {errors.who && <p className = "errorMsg">{errors.who.message}</p>}
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name = "what" placeholder = "what ?" 
                    ref = {register({
                        required: "What is a story without main action?",
                        minLength: {value: 2, message: "Whoa! And you call it an action?"},
                        pattern: {value: /[a-z]{1,10}/, message: "No only digits are welcome here"}
                    })} onChange = {updatesHandler}/>
                {errors.what && <p className = "errorMsg">{errors.what.message}</p>}    
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name = "when" placeholder = "when ?" 
                    ref = {register({
                        required: "Please tell us when? Or any other condition?",
                        minLength: {value: 2, message: `Hm. It doesn't look like "when"...`},
                        pattern: {value: /[a-z]{1,10}/, message: "No only digits are welcome here"}
                    })} onChange = {updatesHandler} />
                {errors.when && <p className = "errorMsg">{errors.when.message}</p>}  
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name = "where" placeholder = "where ?" 
                    ref = {register({
                        required: "Everyone will want to know where it happened for sure!",
                        minLength: {value: 3, message: "I don't know such place..."},
                        pattern: {value: /[a-z]{1,10}/, message: "No only digits are welcome here"}
                    })} onChange = {updatesHandler}/>
                {errors.where && <p className = "errorMsg">{errors.where.message}</p>}  
            </div>
            <h6>It will looks like: 
                <div className = "example">
                    <span className = "colored">"</span>
                        {values.who || values.what || values.when || values.where
                            ? `${values.who} ${values.what} ${values.when} ${values.where}`
                            : "Ex.:Jack built a house today in the forest"
                        }  
                    <span className = "colored">"</span>
                    <p className = "errorMsg">
                        {errors.who || errors.what || errors.when || errors.where 
                            ? `PS: You can do it better!` 
                            : null
                        }
                    </p>
                </div>
            </h6>
            <div className="form-group">
                <input type="text" className="form-control" name = "author" placeholder = "your name for authorship?" onChange = {updatesHandler} />
            </div>
            <button type="submit" className="btn btn-info">done</button>
            
        </form>
    )
}

export default InputForms