const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

// get the questions div element
const questionsDiv = document.getElementById('questions');

// fetch the contents of the questions file
fetch('questions.txt')
	.then(response => response.text())
	.then(data => {
		// split the text into an array of questions
		const questions = data.split('\n\n');

		// create a list of questions
		const ul = document.createElement('ul');
		questions.forEach(question => {
			const li = document.createElement('li');
			li.textContent = question;
			ul.appendChild(li);
		});

		// add the list of questions to the questions div
		questionsDiv.appendChild(ul);
	});


    