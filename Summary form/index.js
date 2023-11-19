document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const modal = document.querySelector(".modal");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const gender = document.querySelector('input[name="Gender"]:checked')
            ? document.querySelector('input[name="Gender"]:checked').value
            : "";
        const dateOfBirth = document.getElementById("bdate").value;
        const country = document.getElementById("country").value;
        const mailId = document.getElementById("mail").value;
        const profession = document.getElementById("profession").value;
        const phoneNumber = document.getElementById("number").value;

        const tableRow = `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${gender}</td>
            <td>${dateOfBirth}</td>
            <td>${country}</td>
            <td>${mailId}</td>
            <td>${profession}</td>
            <td>${phoneNumber}</td>
        </tr>`;

        document.getElementById("tbody").innerHTML += tableRow;

        // for Remove form fields when click submit button 
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.querySelector('input[name="Gender"]:checked').checked = false;
        document.getElementById("bdate").value = "";
        document.getElementById("country").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("profession").value = "";
        document.getElementById("number").value = "";

        modal.style.display = "block";
    });

    // For close the modal when clicking outside the modal
    document.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // For remove form fields when clicking the reset button
    document.getElementById("reset").addEventListener("click", function () {
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.querySelector('input[name="Gender"]:checked').checked = false;
        document.getElementById("bdate").value = "";
        document.getElementById("country").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("profession").value = "";
        document.getElementById("number").value = "";
    
        // Hide the modal
        modal.style.display = "none";
    });
    
});




