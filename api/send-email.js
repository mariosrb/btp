import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        if (!apiKey || !apiKey.startsWith('re_')) {
            console.error('RESEND_API_KEY absente ou invalide', apiKey ? `prefix=${apiKey.slice(0, 3)}***` : 'vide');
            return res.status(500).json({ error: 'Configuration email invalide (clé manquante ou incorrecte).' });
        }

        const { type, data } = req.body;

        console.log('[contact] payload recu', { type, data });

        // Format the email content based on the form type
        let subject = 'Nouveau message du site';
        let html = '';

        if (type === 'skip_hire') {
            subject = `Nouvelle demande de benne - ${data.size}`;
            html = `
        <h1>Nouvelle demande de location de benne</h1>
        <p><strong>Taille :</strong> ${data.size}</p>
        <p><strong>Durée :</strong> ${data.duration}</p>
        <p><strong>Date souhaitée :</strong> ${data.date}</p>
        <p><strong>Adresse :</strong> ${data.address}</p>
        <hr />
        <h2>Coordonnées</h2>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Téléphone :</strong> ${data.phone}</p>
      `;
        } else {
            // Default contact form
            subject = `Nouveau message de ${data.name}`;
            html = `
        <h1>Nouveau message de contact</h1>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone}</p>
        <p><strong>Message :</strong></p>
        <p>${data.message}</p>
      `;
        }

        const { data: emailData, error } = await resend.emails.send({
            from: 'Site Web <onboarding@resend.dev>', // Update this with your verified domain later
            to: ['dicate.pro@gmail.com'], // The user's email from the footer
            subject: subject,
            html: html,
        });

        console.log('[contact] send result', { emailData, error });

        if (error) {
            return res.status(400).json({ error });
        }

        return res.status(200).json({ data: emailData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
