function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // If any field is empty, display alert
    if (name === "" || email === "" || address === "") {
        alert("Semua data harus diisi.");
        return false;  // Prevent form submission
    }

    return true;  // Allow form submission if all fields are filled
}
