
function huy(){


    var user = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    
    const userData = {
        
        name: pass,
        //age: 25,
        email: user
    };
    
    fetch('http://localhost:3000/databaes', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
        console.log('Data saved successfully:', data);
        })
        .catch(error => {
        console.error('Error saving data:', error);
        });
        app.post('./data.json', (req, res) => {
            const userData = req.body;
        
            // Lưu dữ liệu người dùng vào cơ sở dữ liệu ở đây
        
            res.json({ message: 'Data saved successfully' });
        });
    //localStorage.setItem('hhhh',"kkkkkkk")
}