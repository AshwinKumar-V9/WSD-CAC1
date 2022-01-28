
var check_count = 0
var radio_count = 0
var user_name = document.getElementById("user_name")
var user_email = document.getElementById("user_email")
var user_pswd = document.getElementById("user_pswd")


//event listener to lock numbers for name
user_name.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})


//event listener to validate user email
user_email.addEventListener('keyup', ()=>{
    const email_pattern = /^([a-z0-9_\.]+)@(([a-z0-9]+)\.)christuniversity(\.)in$/
    var validate_span = document.getElementById("user_email_validate")
    if(email_pattern.test(user_email.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Email'
    }
    else
    {
        validate_span.style.color = 'red'
        if (user_email.value.trim() == '')
        {
            validate_span.innerHTML = 'Email Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Email'
        }
    }
})

//event listener to validate user password
user_pswd.addEventListener('keyup', ()=>{
    var validate_span = document.getElementById("user_pswd_validate")
    if (user_pswd.value.trim() == '')
    {
        validate_span.style.color = 'red'
        validate_span.innerHTML = 'Password Required'
    }
    else
    {
        if(/^(.){8,20}$/.test(user_pswd.value.trim()))
        {
            validate_span.style.color = 'red'
            validate_span.innerHTML = 'Strength: Weak'
            if((user_pswd.value.trim().match(/[A-Z]/)) && (user_pswd.value.trim().match(/[a-z]/)))
            {
                validate_span.style.color = 'yellow'
                validate_span.innerHTML = 'Strength: Medium'
            }
            if((user_pswd.value.trim().match(/[0-9]/)) && (user_pswd.value.trim().match(/[\W]/)))
            {
                validate_span.style.color = 'green'
                validate_span.innerHTML = 'Strength: Strong'
            }
        }
        else
        {
            validate_span.style.color = 'red'
            validate_span.innerHTML = 'Invalid Password'
        }
    }
})


//event listener to validate entire form
document.getElementById("content_wrapper").addEventListener('keyup', ()=>{
    email = document.getElementById("user_email_validate").style.color
    pswd = document.getElementById("user_pswd_validate").style.color

    if((email == 'green') && (pswd == 'green') && (user_name.value.trim() != "") && (user_address.value.trim() != "") && (user_comments.value.trim() != "") && (check_count > 0) && (radio_count > 0))
    {
        document.getElementById("submit").classList.remove("disabled")
    }
    else
    {
        document.getElementById("submit").classList.add("disabled")
    }
})

//event listener to count checkbox and radio button
document.getElementById("content_wrapper").addEventListener('change', ()=>{
    check_count = 0
    radio_count = 0
    var i
    check_list = document.getElementsByName("check")
    var len = check_list.length
    for(i = 0; i < len; i++)
    {
        if(check_list[i].checked)
        {
            check_count += 1
        }
    }
    radio_list = document.getElementsByName("radio")
    var len = radio_list.length
    for(i = 0; i < len; i++)
    {
        if(radio_list[i].checked)
        {
            radio_count += 1
        }
    }
    console.log(check_count + " " + radio_count)
})

//confirm submission
function submitForm()
{
    alert("Submitted Successfully")
}

//clear form
function clearForm()
{
    var email = document.getElementById("user_email_validate")
    email.style.color = 'red'
    email.innerHTML = ""
    var pswd = document.getElementById("user_pswd_validate")
    pswd.style.color = 'red'
    pswd.innerHTML = ""
    check_count = 0
    radio_count = 0
    console.log(check_count + " " + radio_count)
}
