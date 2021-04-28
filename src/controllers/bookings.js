const Booking = require('../moduls/booking');

exports.getAll = (req, res) => {
    Booking.getAll((error, result) => {
        if(error) {
            res.status(400).json({error: "Error "});
        } else {
            res.status(200).json({message: "connexion réussi", data: result});
        }
    });
}

exports.addOne = (req, res) => {
    const {check_in} = req.body;
    Booking.checkByDate(check_in, (error, result) => {
        if (error) {
            res.status(400).json({error: "error check_in"});
        } else {
            
            const checkin = Date.parse(result[0].check_in);
            const checkout = Date.parse(result[0].check_out);
            const check = Date.parse(check_in);

            console.log(checkin);
            console.log(checkout);
            console.log(check);
            if(check >= checkin && check <= checkout) {
                console.log("indisponible") //checkin, checkout);
            } else {
                console.log("ok");
            }
            
            res.status(200).json({message: "good", data: result[0].check_in});

            
            

        }
    });

    // res.json({goog: "nice", check_in: checkIn})
    // Booking.addOne(body, (error, result) => {
    //     if (error) {
    //         res.status(400).json({error: "Error"});
    //     } else {
    //         res.status(200).json({message: "la source a bien été enregistrée !"})
    //     }
    // })
}