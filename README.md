# api-payment-process-web

Objective:Create a web-based interface for initiating a two-step payment process via API calls. The first API generates a signature, and the second processes the payment using that signature. The interface should have form fields pre-populated with default values and should execute both API calls in sequence with a single button click.Requirements:Webpage Setup:Title: "API Payment Process"Styling: Blue button with white font. The form input and response to be in separate container. apply thick shadow on container that will looks like its floating from the bavkground and do responsive design.Accessibility: Ensure that the form is accessible, with proper labels and ARIA attributes if necessary.Form Fields:Service ID (Default: "ncpay_stpay")Passwork (Default: "NWbEOmSGFbPqN645cBwA")Amount (Default: "30000")Currency (Default: "PHP")Operation ID (Default: "DEVTESTING2")Payment ID (Default: "DEVTESTING2")Method (Default: "sp-qrph")Callback URL (Default: "https://hook.eu2.make.com/pytgd1w8lbliqebihqil0q55h5ax0t3j")Return URL (Default: "https://codepen.io/Marc-Agbay-the-scripter/live/jORzYaa")Customer Account Number (Default: "1234567890")Customer Name (Default: "Juan Dela Cruz")Customer Email (Default: "juan.dela_cruz@gmail.com")Customer Address (Default: "Manila, PH")Customer Remark (Default: "This is a Testing.")Merchant Name (Default: "icore")API Calls:First API Call: To generate a signature with the endpoint https://tmgames.catague.app/icore/api.php.Second API Call: To process the payment with the endpoint https://icoredev.tech:8835/pay.Both API calls should be POST requests with Content-Type: application/json.Collect and display any response from the APIs in a designated area on the webpage.Execution Flow:When the user clicks the "Start Payment Process" button, the first API call should be executed.Upon success, the second API call should be made immediately with the signature received from the first call.Any responses or errors from both API calls should be displayed to the user in a response container.Testing:Ensure the web application is fully functional and test both successful and error responses from the API.Conduct browser compatibility testing.Security:Although this is a mockup, please follow best practices for security.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/api-payment-process-web.git
cd api-payment-process-web
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
