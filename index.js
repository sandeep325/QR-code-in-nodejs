const app = require('express')();
const QRCode = require('qrcode')
app.get("/", async (req, res) => {
    let data = "https://github.com/sandeep325"
    // let data = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwjmrveWq5n6AhVCiNgFHRyYAKYQMygAegUIARDfAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwjmrveWq5n6AhVCiNgFHRyYAKYQMygAegUIARDfAQ";
// Converting the data into String format
let stringdata = JSON.stringify(data)
const QRCODEINFO =  QRCode.toString(stringdata,{type:"svg"},
                    function (err, QRcode) {
    if(err) return console.log("error occurred");
    // Printing the generated code
    return QRcode;
})
   
// Converting the data into base64
// QRCode.toDataURL(stringdata, function (err, code) {
//     if(err) return console.log("error occurred")
 
//     console.log(code)
// })
// const dataa = QRCODEINFO;
const dataa = `<div style="width:20%; height:20%">${QRCODEINFO} </div>`;
res.send(dataa);
});

port =  7000;
app.listen(port, () => { console.log(`Server is running on:${port}`); });