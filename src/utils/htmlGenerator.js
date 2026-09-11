// Clean HTML table generator for max email client compatibility (Gmail, Outlook, Apple Mail)
export const generateSignatureHTML = (data) => {
  const {
    fullName,
    jobTitle,
    company,
    email,
    phone,
    website,
    photoUrl,
    logoUrl,
    socials,
    template,
    primaryColor,
    textColor,
    linkColor,
    fontFamily
  } = data;

  const fontStack = `${fontFamily}, Arial, sans-serif`;
  const formattedWebUrl = website ? (website.startsWith('http') ? website : `https://${website}`) : '';
  const cleanWebDisplay = website ? website.replace(/^https?:\/\//, '') : '';

  // Filter active social links
  const activeSocials = Object.entries(socials)
    .filter(([_, item]) => item.enabled && item.url.trim() !== '')
    .map(([platform, item]) => ({
      platform,
      url: item.url.startsWith('http') ? item.url : `https://${item.url}`
    }));

  const socialIconsMap = {
    linkedin: 'https://cdn-icons-png.flaticon.com/24/3536/3536505.png',
    twitter: 'https://cdn-icons-png.flaticon.com/24/5968/5968830.png',
    instagram: 'https://cdn-icons-png.flaticon.com/24/2111/2111463.png',
    facebook: 'https://cdn-icons-png.flaticon.com/24/733/733547.png',
    youtube: 'https://cdn-icons-png.flaticon.com/24/1384/1384060.png'
  };

  const socialRowHTML = activeSocials.length > 0 ? `
    <tr>
      <td style="padding-top: 10px;">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            ${activeSocials.map(s => `
              <td style="padding-right: 8px;">
                <a href="${s.url}" target="_blank" style="text-decoration: none;">
                  <img src="${socialIconsMap[s.platform]}" alt="${s.platform}" width="18" height="18" style="display: block; border: 0;" />
                </a>
              </td>
            `).join('')}
          </tr>
        </table>
      </td>
    </tr>
  ` : '';

  // Render Template Variations using pure <table> structures
  if (template === 'minimal') {
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: ${fontStack}; font-size: 14px; color: ${textColor}; line-height: 1.4;">
  <tr>
    <td style="padding-bottom: 4px;">
      <span style="font-weight: bold; font-size: 16px; color: ${primaryColor};">${fullName || 'John Smith'}</span>
      ${jobTitle ? `<span style="color: ${textColor};"> | ${jobTitle}</span>` : ''}
    </td>
  </tr>
  ${company ? `<tr><td style="color: ${textColor}; font-weight: 500; padding-bottom: 6px;">${company}</td></tr>` : ''}
  <tr>
    <td style="font-size: 13px; color: ${textColor};">
      ${email ? `<a href="mailto:${email}" style="color: ${linkColor}; text-decoration: none;">${email}</a>` : ''}
      ${email && phone ? ' &bull; ' : ''}
      ${phone ? `<span>${phone}</span>` : ''}
      ${(email || phone) && website ? ' &bull; ' : ''}
      ${website ? `<a href="${formattedWebUrl}" target="_blank" style="color: ${linkColor}; text-decoration: none;">${cleanWebDisplay}</a>` : ''}
    </td>
  </tr>
  ${socialRowHTML}
</table>`.trim();
  }

  if (template === 'compact') {
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: ${fontStack}; font-size: 13px; color: ${textColor}; line-height: 1.3;">
  <tr>
    ${photoUrl ? `
      <td valign="top" style="padding-right: 12px;">
        <img src="${photoUrl}" alt="${fullName}" width="50" height="50" style="display: block; border-radius: 50%; object-fit: cover; width: 50px; height: 50px;" />
      </td>
    ` : ''}
    <td valign="top">
      <div style="font-weight: bold; font-size: 15px; color: ${primaryColor};">${fullName || 'John Smith'}</div>
      <div style="color: ${textColor}; font-size: 12px; margin-bottom: 4px;">${jobTitle || 'Marketing Manager'}${company ? ` at ${company}` : ''}</div>
      <div style="font-size: 12px;">
        ${email ? `<a href="mailto:${email}" style="color: ${linkColor}; text-decoration: none;">${email}</a> ` : ''}
        ${phone ? `<span style="color: ${textColor};">&bull; ${phone}</span> ` : ''}
        ${website ? `<a href="${formattedWebUrl}" target="_blank" style="color: ${linkColor}; text-decoration: none;">&bull; ${cleanWebDisplay}</a>` : ''}
      </div>
      ${socialRowHTML}
    </td>
  </tr>
</table>`.trim();
  }

  if (template === 'elegant') {
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: ${fontStack}; font-size: 14px; color: ${textColor}; line-height: 1.5;">
  <tr>
    <td style="border-bottom: 2px solid ${primaryColor}; padding-bottom: 8px; margin-bottom: 8px;">
      <span style="font-size: 18px; font-weight: bold; color: ${primaryColor}; letter-spacing: 0.5px;">${fullName || 'John Smith'}</span><br/>
      <span style="font-size: 13px; text-transform: uppercase; color: ${textColor}; opacity: 0.8;">${jobTitle || 'Marketing Manager'} ${company ? `&#8212; ${company}` : ''}</span>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 8px; font-size: 13px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation">
        ${email ? `<tr><td style="padding-right: 8px; font-weight: bold; color: ${primaryColor};">E:</td><td><a href="mailto:${email}" style="color: ${linkColor}; text-decoration: none;">${email}</a></td></tr>` : ''}
        ${phone ? `<tr><td style="padding-right: 8px; font-weight: bold; color: ${primaryColor};">P:</td><td style="color: ${textColor};">${phone}</td></tr>` : ''}
        ${website ? `<tr><td style="padding-right: 8px; font-weight: bold; color: ${primaryColor};">W:</td><td><a href="${formattedWebUrl}" target="_blank" style="color: ${linkColor}; text-decoration: none;">${cleanWebDisplay}</a></td></tr>` : ''}
      </table>
    </td>
  </tr>
  ${logoUrl ? `
  <tr>
    <td style="padding-top: 10px;">
      <img src="${logoUrl}" alt="${company}" height="32" style="display: block; height: 32px; width: auto;" />
    </td>
  </tr>
  ` : ''}
  ${socialRowHTML}
</table>`.trim();
  }

  if (template === 'corporate') {
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: ${fontStack}; font-size: 14px; color: ${textColor}; line-height: 1.4; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px; background-color: #ffffff;">
  <tr>
    ${photoUrl ? `
      <td valign="top" style="padding-right: 14px;">
        <img src="${photoUrl}" alt="${fullName}" width="65" height="65" style="display: block; border-radius: 4px; object-fit: cover; width: 65px; height: 65px;" />
      </td>
    ` : ''}
    <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="font-size: 16px; font-weight: bold; color: ${primaryColor};">${fullName || 'John Smith'}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: ${textColor}; font-weight: 500;">${jobTitle || 'Marketing Manager'}</td>
        </tr>
        ${company ? `<tr><td style="font-size: 13px; color: ${primaryColor}; font-weight: bold; padding-bottom: 6px;">${company}</td></tr>` : '<tr><td style="padding-bottom: 6px;"></td></tr>'}
        <tr>
          <td style="font-size: 12px; color: ${textColor};">
            ${email ? `<div>Email: <a href="mailto:${email}" style="color: ${linkColor}; text-decoration: none;">${email}</a></div>` : ''}
            ${phone ? `<div>Phone: ${phone}</div>` : ''}
            ${website ? `<div>Web: <a href="${formattedWebUrl}" target="_blank" style="color: ${linkColor}; text-decoration: none;">${cleanWebDisplay}</a></div>` : ''}
          </td>
        </tr>
      </table>
    </td>
  </tr>
  ${socialRowHTML}
</table>`.trim();
  }

  if (template === 'modern') {
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: ${fontStack}; font-size: 14px; color: ${textColor}; line-height: 1.4;">
  <tr>
    ${photoUrl ? `
      <td valign="top" style="padding-right: 16px;">
        <img src="${photoUrl}" alt="${fullName}" width="70" height="70" style="display: block; border-radius: 50%; object-fit: cover; width: 70px; height: 70px;" />
      </td>
    ` : ''}
    <td valign="top" style="border-left: 3px solid ${primaryColor}; padding-left: 14px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="font-size: 17px; font-weight: bold; color: ${textColor};">${fullName || 'John Smith'}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: ${primaryColor}; font-weight: 600; padding-bottom: 8px;">${jobTitle || 'Marketing Manager'}${company ? ` | ${company}` : ''}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: ${textColor};">
            ${email ? `<div style="margin-bottom: 2px;"><a href="mailto:${email}" style="color: ${linkColor}; text-decoration: none;">${email}</a></div>` : ''}
            ${phone ? `<div style="margin-bottom: 2px;">${phone}</div>` : ''}
            ${website ? `<div style="margin-bottom: 2px;"><a href="${formattedWebUrl}" target="_blank" style="color: ${linkColor}; text-decoration: none;">${cleanWebDisplay}</a></div>` : ''}
          </td>
        </tr>
        ${logoUrl ? `
        <tr>
          <td style="padding-top: 8px;">
            <img src="${logoUrl}" alt="${company}" height="28" style="display: block; height: 28px; width: auto;" />
          </td>
        </tr>
        ` : ''}
        ${socialRowHTML}
      </table>
    </td>
  </tr>
</table>`.trim();
  }

  // Default: Classic
  return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: ${fontStack}; font-size: 14px; color: ${textColor}; line-height: 1.4;">
  <tr>
    ${photoUrl ? `
      <td valign="top" style="padding-right: 16px;">
        <img src="${photoUrl}" alt="${fullName}" width="80" height="80" style="display: block; border-radius: 8px; object-fit: cover; width: 80px; height: 80px;" />
      </td>
    ` : ''}
    <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="font-size: 18px; font-weight: bold; color: ${primaryColor};">${fullName || 'John Smith'}</td>
        </tr>
        <tr>
          <td style="font-size: 14px; color: ${textColor}; font-weight: 500;">${jobTitle || 'Marketing Manager'}</td>
        </tr>
        ${company ? `<tr><td style="font-size: 13px; color: #64748b; padding-bottom: 6px;">${company}</td></tr>` : '<tr><td style="padding-bottom: 6px;"></td></tr>'}
        <tr>
          <td style="font-size: 13px; color: ${textColor};">
            ${email ? `<div>Email: <a href="mailto:${email}" style="color: ${linkColor}; text-decoration: none;">${email}</a></div>` : ''}
            ${phone ? `<div>Phone: ${phone}</div>` : ''}
            ${website ? `<div>Web: <a href="${formattedWebUrl}" target="_blank" style="color: ${linkColor}; text-decoration: none;">${cleanWebDisplay}</a></div>` : ''}
          </td>
        </tr>
        ${logoUrl ? `
        <tr>
          <td style="padding-top: 10px;">
            <img src="${logoUrl}" alt="${company}" height="30" style="display: block; height: 30px; width: auto;" />
          </td>
        </tr>
        ` : ''}
        ${socialRowHTML}
      </table>
    </td>
  </tr>
</table>`.trim();
};