const express = require('express');

const app = express();

const PORT = 4000;
app.listen(PORT, function(){
    console.log('listening on port ${PORT}');
});


