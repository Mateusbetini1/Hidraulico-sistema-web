type HeaderReader = {
  get(name: string): string | null;
};

export function getAdminEmail(headers: HeaderReader) {
  const email = headers.get('oai-authenticated-user-email')?.trim().toLowerCase() ?? '';
  const allowedEmails = (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  if (process.env.NODE_ENV !== 'production') {
    return email || 'desenvolvimento@local';
  }

  return email && allowedEmails.includes(email) ? email : null;
}
