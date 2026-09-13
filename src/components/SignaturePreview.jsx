import React from 'react';

export const SignaturePreview = ({ data, formData }) => {
  // Garante compatibilidade tanto se passar data quanto formData
  const inputData = data || formData || {};

  // Valores padrão para evitar campos vazios no preview
  const {
    fullName = "Wallace Almeida",
    role = "CEO",
    company = "GeralAlmeida Company",
    email = "sralmeida@almeida.company.com.br",
    phone = "+55 (19) 99601-1102",
    website = "almeidacompany.com",
    avatarUrl = "https://via.placeholder.com/100",
    linkedin = "#",
    instagram = "#"
  } = inputData;

  return (
    <div id="signature-preview" style={{ background: '#ffffff', padding: '10px' }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        border="0"
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          color: '#333333',
          lineHeight: '1.4',
          borderCollapse: 'collapse'
        }}
      >
        <tbody>
          <tr>
            {/* Coluna da Foto (Garante que a imagem NÃO achate no celular) */}
            {avatarUrl && (
              <td
                valign="top"
                style={{
                  width: '80px',
                  paddingRight: '15px',
                  verticalAlign: 'top'
                }}
              >
                <img
                  src={avatarUrl}
                  alt={fullName}
                  width="80"
                  height="80"
                  style={{
                    display: 'block',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '0',
                    outline: 'none',
                    textDecoration: 'none'
                  }}
                />
              </td>
            )}

            {/* Linha Divisória */}
            <td
              valign="top"
              style={{
                width: '1px',
                backgroundColor: '#e0e0e0',
                padding: '0'
              }}
            />

            {/* Coluna de Informações */}
            <td
              valign="top"
              style={{
                paddingLeft: '15px',
                verticalAlign: 'top'
              }}
            >
              <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse' }}>
                <tbody>
                  {/* Nome */}
                  <tr>
                    <td
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#111111',
                        paddingBottom: '2px'
                      }}
                    >
                      {fullName}
                    </td>
                  </tr>

                  {/* Cargo e Empresa */}
                  <tr>
                    <td
                      style={{
                        fontSize: '13px',
                        color: '#666666',
                        paddingBottom: '8px'
                      }}
                    >
                      {role} {company && `at ${company}`}
                    </td>
                  </tr>

                  {/* Contatos */}
                  {email && (
                    <tr>
                      <td style={{ fontSize: '13px', paddingBottom: '3px' }}>
                        <strong style={{ color: '#444444' }}>Email: </strong>
                        <a href={`mailto:${email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          {email}
                        </a>
                      </td>
                    </tr>
                  )}

                  {phone && (
                    <tr>
                      <td style={{ fontSize: '13px', paddingBottom: '3px' }}>
                        <strong style={{ color: '#444444' }}>Phone: </strong>
                        <span style={{ color: '#333333' }}>{phone}</span>
                      </td>
                    </tr>
                  )}

                  {website && (
                    <tr>
                      <td style={{ fontSize: '13px', paddingBottom: '6px' }}>
                        <strong style={{ color: '#444444' }}>Web: </strong>
                        <a
                          href={website.startsWith('http') ? website : `https://${website}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#2563eb', textDecoration: 'none' }}
                        >
                          {website}
                        </a>
                      </td>
                    </tr>
                  )}

                  {/* Ícones de Redes Sociais */}
                  <tr>
                    <td style={{ paddingTop: '6px' }}>
                      <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            {linkedin && (
                              <td style={{ paddingRight: '8px' }}>
                                <a href={linkedin} target="_blank" rel="noreferrer">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/24/174/174857.png"
                                    alt="LinkedIn"
                                    width="20"
                                    height="20"
                                    style={{ display: 'block', width: '20px', height: '20px', border: '0' }}
                                  />
                                </a>
                              </td>
                            )}

                            {instagram && (
                              <td style={{ paddingRight: '8px' }}>
                                <a href={instagram} target="_blank" rel="noreferrer">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png"
                                    alt="Instagram"
                                    width="20"
                                    height="20"
                                    style={{ display: 'block', width: '20px', height: '20px', border: '0' }}
                                  />
                                </a>
                              </td>
                            )}
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
  );
};

// Export padrão adicionado para resolver o erro de build da Vercel
export default SignaturePreview;