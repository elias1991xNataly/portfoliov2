// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server'
import { log } from 'console';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;


// from: 'Elias <eliasalfonso1991@gmail.com>',
//       to: ['eliasalfonso1990@hotmail.com'],
//       subject: 'Hello world',
export async function POST(req, res) {
    const { body } = await req.json();
    const { email, subject, message } = body;
    console.log(body);
    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: ["eliasalfonso1991@gmail.com", email],
            subject: subject,
            react: <>
                <h1>{subject}</h1>
                <p>Thank you for contacting us!</p>
                <p>New Message submitted:</p>
                <p>{message}</p>
            </>,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
