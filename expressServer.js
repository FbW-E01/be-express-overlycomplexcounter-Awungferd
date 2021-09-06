import express from 'express'


const app = express()

let initNum = 0 
app.get('/', (req,resp)=>{		
	resp.send(initNum.toString())
});

app.post('/inc', (req,resp)=>{
	initNum = initNum +1	
	resp.send(initNum.toString())
});


app.post('/dec', (req,resp)=>{
	initNum = initNum -1	
	resp.send(initNum.toString())
});

app.post('/die', (req,resp)=>{
		
	resp.send("You have shutdown the server!")
	expressServer.close() 
});



const port = 3008

const expressServer = app.listen(port, ()=>{
	console.log("The app is listening on http://localhost:" + port)
})