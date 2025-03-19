let records = [];

        function addRecord() {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let phone = document.getElementById('phone').value;
            let password = document.getElementById('password').value;
            
            if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || password.trim() === '') return;
            
            records.push({ name, email, phone });
            
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('password').value = '';
            
            renderTable();
        }

        function editRecord(index) {
            let newName = prompt("Edit name:", records[index].name);
            let newEmail = prompt("Edit email:", records[index].email);
            let newPhone = prompt("Edit phone:", records[index].phone);
            
            if (newName && newEmail && newPhone) {
                records[index] = { name: newName, email: newEmail, phone: newPhone };
                renderTable();
            }
        }

        function deleteRecord(index) {
            records.splice(index, 1);
            renderTable();
        }

        function renderTable() {
            let tableBody = document.getElementById('recordsTable');
            tableBody.innerHTML = '';
            records.forEach((record, index) => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${record.name}</td>
                        <td>${record.email}</td>
                        <td>${record.phone}</td>
                        <td>
                            <button onclick="editRecord(${index})" class="btn btn-sm btn-warning">Edit</button>
                            <button onclick="deleteRecord(${index})" class="btn btn-sm btn-error">Delete</button>
                        </td>
                    </tr>`;
            });
        }