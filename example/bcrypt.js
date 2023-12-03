const bcrypt = require('bcrypt');

bcrypt.hash('abc123', 10, (err, hash) => { 
    
        console.log(hash);
    
});

bcrypt.compare('abc123', '$2b$10$hpmxuOk7qpqt7cnSeQTpqOqYuWpSXmBNJ9xSAQpSk3jqWQjSq2iRy', (err, isMatch) => {

    console.log(isMatch)
})