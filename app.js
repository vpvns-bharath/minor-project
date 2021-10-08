const bodyParser=require("body-parser");
const mongojs=require("mongojs");

const express=require("express");
var cString = "mongodb+srv://bharath_2001:bharath123@bharath.naq8g.mongodb.net/Hospital?retryWrites=true&w=majority";
const db = mongojs(cString, ["details"]);
const app=express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set("view engine","ejs");

// --------------------------page details--------------------------------
app.get("/",function(req,res){
  res.sendFile(__dirname+"/home.html")
})

app.post("/medical",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/medical-info",function(req,res){
  res.sendFile(__dirname+"/product-details(1).html")
})

app.post("/medical-info1",function(req,res){
  res.sendFile(__dirname+"/product-details(2).html")
})

app.post("/medical-info2",function(req,res){
  res.sendFile(__dirname+"/product-details(3).html")
})

app.post("/medical-info6",function(req,res){
  res.sendFile(__dirname+"/product-details(7).html")
})

app.post("/medical-info4",function(req,res){
  res.sendFile(__dirname+"/product-details(5).html")
})

app.post("/medical-info3",function(req,res){
  res.sendFile(__dirname+"/product-details(4).html")
})

app.post("/medical-info10",function(req,res){
  res.sendFile(__dirname+"/product-details(11).html")
})

app.post("/medical-info11",function(req,res){
  res.sendFile(__dirname+"/product-details(12).html")
})

app.post("/medical-info5",function(req,res){
  res.sendFile(__dirname+"/product-details(6).html")
})

app.post("/medical-info9",function(req,res){
  res.sendFile(__dirname+"/product-details(10).html")
})

app.post("/medical-info8",function(req,res){
  res.sendFile(__dirname+"/product-details(9).html")
})

app.post("/medical-info7",function(req,res){
  res.sendFile(__dirname+"/product-details(8).html")
})

app.get("/beds",function(req,res){
  res.sendFile(__dirname+"/details.html")
})

app.post("/beds",function(req,res){
  res.sendFile(__dirname+"/details.html")
  // console.log(req.body);
  // db.details.find(req.body,function(err,docs){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log(docs);
  //   }
  // })
})

// ------------------------------page details ends------------------------------
// app.post("/new",function(req,res){
//   res.sendFile(__dirname+"/details.html")
// })

// app.get("/search",function(req,res){
//   res.render("result")
// })

app.post('/search',function(req,res){
//  res.render("result")
   //console.log(req.body);
  // db.details.find(req,function(err,docs){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log(docs);
  //   }
  // })
   // res.alert("hii");
})






app.listen(4000,function(){
  console.log("Server is running");
})
