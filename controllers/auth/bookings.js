const Booking = require("../../models/Bookings");
const nodemailer = require("nodemailer");

const booking = async (req, res, next) => {
  try {
    const bookingvalues = req.body;
    console.log("Booking values:", bookingvalues);

    const {
      email,
      carModel,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
      pricePerDay,
    } = bookingvalues;

    const booking = new Booking({
      email,
      carModel,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
      pricePerDay,
    });

    console.log("Booking data:", booking);
    await booking.save();

    // Setup NodeMailer transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "yashankkalsi947@gmail.com", // replace with your email
        pass: "wafwepvjaxstoont", // replace with your App Password (NOT your Gmail password)
      },
    });

    const mailOptions = {
      from: '"Car Rental Service" <yashankkalsi030@gmail.com>',
      to: email,
      subject: "Car Booking Confirmation",
      html: `
        <h2>Booking Confirmed!</h2>
        <p>Thank you for booking with us. Here are your booking details:</p>
        <ul>
          <li><strong>Car:</strong> ${carModel}</li>
          <li><strong>Pick-Up:</strong> ${pickupLocation} at ${pickupDate}</li>
          <li><strong>Drop-Off:</strong> ${dropoffLocation} at ${returnDate}</li>
          <li><strong>Daily Price:</strong> ₹${pricePerDay}</li>
        </ul>
        <p>We look forward to serving you!</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", email);

    res.status(201).json({ message: "Booking created and email sent successfully!" });

  } catch (error) {
    console.error("Booking or email error:", error);
    res.status(500).json({ message: "Failed to create booking or send email." });
    next(error);
  }
};

module.exports = booking;
