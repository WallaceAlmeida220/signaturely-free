export function generateSignatureHTML(data = {}) {
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

  const template = data.template || 'classic';
  const formattedWebsite = website.startsWith('http') ? website : `https://${website}`;

  // Renderizador das Redes Sociais
  const renderSocials = () => `
    <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
      <tbody>
        <tr>
          ${linkedin ? `<td style="padding-right: 8px;"><a href="${linkedin}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" width="18" height="18" style="display:block; border:0;" /></a></td>` : ''}
          ${instagram ? `<td style="padding-right: 8px;"><a href="${instagram}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" width="18" height="18" style="display:block; border:0;" /></a></td>` : ''}
          ${twitter ? `<td style="padding-right: 8px;"><a href="${twitter}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/24/5969/5969020.png" width="18" height="18" style="display:block; border:0;" /></a></td>` : ''}
          ${facebook ? `<td style="padding-right: 8px;"><a href="${facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" width="18" height="18" style="display:block; border:0;" /></a></td>` : ''}
        </tr>
      </tbody>
    </table>
  `;

  // TEMPLATE: MODERN
  if (template === 'modern') {
    return `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; padding: 10px;">
        <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
          <tr>
            ${photoUrl ? `<td valign="top" style="padding-right: 15px;"><img src="${photoUrl}" width="70" height="70" style="border-radius: 8px; object-fit: cover; display: block;" /></td>` : ''}
            <td valign="top" style="border-left: 3px solid #2563eb; padding-left: 12px;">
              <div style="font-weight: bold; font-size: 16px; color: #2563eb;">${fullName}</div>
              <div style="font-size: 13px; color: #555; margin-bottom: 6px;">${jobTitle} | <strong>${company}</strong></div>
              ${email ? `<div style="font-size: 12px; color: #444;">📧 <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>` : ''}
              ${phone ? `<div style="font-size: 12px; color: #444;">📞 ${phone}</div>` : ''}
              ${website ? `<div style="font-size: 12px; color: #444;">🌐 <a href="${formattedWebsite}" target="_blank" style="color: #2563eb; text-decoration: none;">${website}</a></div>` : ''}
              ${logoUrl ? `<div style="margin-top: 6px;"><img src="${logoUrl}" style="max-height: 35px; width: auto;" /></div>` : ''}
              <div style="margin-top: 8px;">${renderSocials()}</div>
            </td>
          </tr>
        </table>
      </div>
    `;
  }

  // TEMPLATE: MINIMAL
  if (template === 'minimal') {
    return `
      <div style="font-family: Arial, sans-serif; font-size: 13px; color: #222; padding: 10px;">
        <div style="font-weight: bold; font-size: 15px;">${fullName}</div>
        <div style="color: #666; margin-bottom: 6px;">${jobTitle} ${company ? `— ${company}` : ''}</div>
        <div style="color: #444;">
          ${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : ''}
          ${phone ? ` • ${phone}` : ''}
          ${website ? ` • <a href="${formattedWebsite}" target="_blank" style="color: #2563eb; text-decoration: none;">${website}</a>` : ''}
        </div>
        ${logoUrl ? `<div style="margin-top: 8px;"><img src="${logoUrl}" style="max-height: 30px; width: auto;" /></div>` : ''}
        <div style="margin-top: 6px;">${renderSocials()}</div>
      </div>
    `;
  }

  // TEMPLATE: COMPACT
  if (template === 'compact') {
    return `
      <div style="font-family: Arial, sans-serif; font-size: 13px; color: #333; padding: 10px;">
        <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
          <tr>
            ${photoUrl ? `<td valign="middle" style="padding-right: 10px;"><img src="${photoUrl}" width="50" height="50" style="border-radius: 50%; object-fit: cover; display: block;" /></td>` : ''}
            <td valign="middle">
              <strong style="font-size: 14px; color: #111;">${fullName}</strong> <span style="color: #666;">(${jobTitle})</span>
              <div style="font-size: 12px; color: #555; margin-top: 2px;">
                ${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : ''}
                ${phone ? ` | ${phone}` : ''}
              </div>
              <div style="margin-top: 4px;">${renderSocials()}</div>
            </td>
          </tr>
        </table>
      </div>
    `;
  }

  // TEMPLATE DEFAULT: CLASSIC
  return `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333333; padding: 10px;">
      <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
        <tbody>
          <tr>
            ${photoUrl ? `
              <td valign="top" style="padding-right: 15px; vertical-align: top;">
                <img src="${photoUrl}" alt="${fullName}" width="80" height="80" style="display: block; width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 0;" />
              </td>
            ` : ''}
            <td valign="top" style="width: 1px; background-color: #e0e0e0; padding: 0;"></td>
            <td valign="top" style="padding-left: 15px; vertical-align: top;">
              <table cellPadding="0" cellSpacing="0" border="0" style="border-collapse: collapse;">
                <tbody>
                  <tr><td style="font-size: 16px; font-weight: bold; color: #111111; padding-bottom: 2px;">${fullName}</td></tr>
                  <tr><td style="font-size: 13px; color: #666666; padding-bottom: 8px;">${jobTitle}${company ? ` at ${company}` : ''}</td></tr>
                  ${email ? `<tr><td style="font-size: 13px; padding-bottom: 3px;"><strong style="color: #444;">Email: </strong><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td></tr>` : ''}
                  ${phone ? `<tr><td style="font-size: 13px; padding-bottom: 3px;"><strong style="color: #444;">Phone: </strong><span style="color: #333;">${phone}</span></td></tr>` : ''}
                  ${website ? `<tr><td style="font-size: 13px; padding-bottom: 6px;"><strong style="color: #444;">Web: </strong><a href="${formattedWebsite}" target="_blank" style="color: #2563eb; text-decoration: none;">${website}</a></td></tr>` : ''}
                  ${logoUrl ? `<tr><td style="padding-top: 5px; padding-bottom: 5px;"><img src="${logoUrl}" style="max-height: 40px; width: auto; display: block; border: 0;" /></td></tr>` : ''}
                  <tr><td style="padding-top: 6px;">${renderSocials()}</td></tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}