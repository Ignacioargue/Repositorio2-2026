let express = require ('express');
const path = require ('path');
let app = express();
app.listen (3000, () => console.log('servidor corriendo')
)
app.get('/', (req,res) => {
 const HTML =  res.sendFile(path.resolve(__dirname, './views/index.html'))
   ;

});