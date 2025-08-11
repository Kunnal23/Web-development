import express from "express"

const app = express();
const port = 3000;

app.get("/",(req,res) =>{

    const today = new Date();
    let day = today.getDay();

    let typeOfDay = "a weekday";
    let adv = "its time to work hard"
    if (day === 0 || day === 6){
        typeOfDay = "the weekend";
		adv = "its time to fuck hard";
    }

    res.render("index.ejs", {
        dateType : typeOfDay,
        advice : adv ,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
