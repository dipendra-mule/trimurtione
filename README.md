# Trimurtione Field Craft

A modern React application for Trimurtione Data and Engineering Services.

## Email Configuration

To enable the contact form email functionality, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Email Template Variables

The email template should include these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email (your company email)
- `{{reply_to}}` - Reply-to email (sender's email)

