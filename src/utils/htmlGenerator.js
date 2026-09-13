export function generateSignatureHTML(data = {}) {
  // Trata e normaliza as propriedades do formulário
  const fullName = data.fullName || 'John Smith';
  const jobTitle = data.jobTitle || data.role || 'Marketing Manager';
  const company = data.company || 'Acme Inc.';
  const email = data.email || 'john@acme.com';
  const phone = data.phone || '+1 555 123 4567';
  const website = data.website || 'acme.com';
  const photoUrl = data.photoUrl || data.avatarUrl || 'https://via.placeholder.com/80';
  const logoUrl = data.logoUrl || '';

  const linkedin = data.linkedin || '';
  const instagram = data.instagram || '';
  const twitter = data.twitter || '';
  const facebook = data.facebook || '';

  const formattedWebsite = website.startsWith('http') ? website : `https://${website}`;

  return `
    <div id="signature-container" style="background-color: #ffffff; padding: 10px; font-family: Arial, sans-serif; font-size: 14px; color: #333333;">
      <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
        <tbody>
          <tr>
            <!-- Foto de Perfil -->
            ${photoUrl ? `
              <td valign="top" style="padding-right: 15px; vertical-align: top;">
                <img src="${photoUrl}" alt="${fullName}" width="80" height="80" style="display: block; width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 0;" />
              </td>
            ` : ''}

            <!-- Linha Divisória -->
            <td valign="top" style="width: 1px; background-color: #e0e0e0; padding: 0;"></td>

            <!-- Detalhes -->
            <td valign="top" style="padding-left: 15px; vertical-align: top;">
              <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
                <tbody>
                  <tr>
                    <td style="font-size: 16px; font-weight: bold; color: #111111; padding-bottom: 2px;">
                      ${fullName}
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #666666; padding-bottom: 8px;">
                      ${jobTitle}${company ? ` at ${company}` : ''}
                    </td>
                  </tr>
                  ${email ? `
                    <tr>
                      <td style="font-size: 13px; padding-bottom: 3px;">
                        <strong style="color: #444444;">Email: </strong>
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                  ` : ''}
                  ${phone ? `
                    <tr>
                      <td style="font-size: 13px; padding-bottom: 3px;">
                        <strong style="color: #444444;">Phone: </strong>
                        <span style="color: #333333;">${phone}</span>
                      </td>
                    </tr>
                  ` : ''}
                  ${website ? `
                    <tr>
                      <td style="font-size: 13px; padding-bottom: 6px;">
                        <strong style="color: #444444;">Web: </strong>
                        <a href="${formattedWebsite}" target="_blank" rel="noreferrer" style="color: #2563eb; text-decoration: none;">${website}</a>
                      </td>
                    </tr>
                  ` : ''}
                  
                  <!-- Logo da Empresa (se houver) -->
                  ${logoUrl ? `
                    <tr>
                      <td style="padding-top: 5px; padding-bottom: 5px;">
                        <img src="${logoUrl}" alt="${company}" style="max-height: 40px; width: auto; display: block; border: 0;" />
                      </td>
                    </tr>
                  ` : ''}

                  <!-- Redes Sociais -->
                  <tr>
                    <td style="padding-top: 6px;">
                      <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
                        <tbody>
                          <tr>
                            ${linkedin ? `
                              <td style="padding-right: 8px;">
                                <a href="${linkedin}" target="_blank" rel="noreferrer">
                                  <img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" alt="LinkedIn" width="20" height="20" style="display: block; border: 0;" />
                                </a>
                              </td>
                            ` : ''}
                            ${instagram ? `
                              <td style="padding-right: 8px;">
                                <a href="${instagram}" target="_blank" rel="noreferrer">
                                  <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" width="20" height="20" style="display: block; border: 0;" />
                                </a>
                              </td>
                            ` : ''}
                            ${twitter ? `
                              <td style="padding-right: 8px;">
                                <a href="${twitter}" target="_blank" rel="noreferrer">
                                  <img src="https://cdn-icons-png.flaticon.com/24/5969/5969020.png" alt="X" width="20" height="20" style="display: block; border: 0;" />
                                </a>
                              </td>
                            ` : ''}
                            ${facebook ? `
                              <td style="padding-right: 8px;">
                                <a href="${facebook}" target="_blank" rel="noreferrer">
                                  <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" width="20" height="20" style="display: block; border: 0;" />
                                </a>
                              </td>
                            ` : ''}
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}