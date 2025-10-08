import { sendEmail, EmailData } from '../emailService';

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  init: jest.fn(),
  send: jest.fn()
}));

import emailjs from '@emailjs/browser';

describe('EmailService', () => {
  const mockEmailData: EmailData = {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Test message'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send email successfully', async () => {
    // Mock successful email send
    (emailjs.send as jest.Mock).mockResolvedValue({ status: 200 });

    const result = await sendEmail(mockEmailData);

    expect(result).toBe(true);
    expect(emailjs.init).toHaveBeenCalled();
    expect(emailjs.send).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.objectContaining({
        from_name: mockEmailData.name,
        from_email: mockEmailData.email,
        message: mockEmailData.message,
        to_email: 'trimurtionedataandengineeringservices@gmail.com',
        reply_to: mockEmailData.email
      })
    );
  });

  it('should handle email send failure', async () => {
    // Mock email send failure
    (emailjs.send as jest.Mock).mockRejectedValue(new Error('Send failed'));

    const result = await sendEmail(mockEmailData);

    expect(result).toBe(false);
  });
});

