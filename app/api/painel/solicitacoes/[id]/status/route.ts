import { NextResponse } from 'next/server';
import { getAdminEmail } from '../../../../../lib/admin-auth';
import { supabaseDashboardRpc } from '../../../../../lib/supabase-dashboard';

const validStatuses = new Set([
  'novo',
  'em_atendimento',
  'orcamento',
  'negociacao',
  'concluido',
  'cancelado',
]);

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const adminEmail = getAdminEmail(request.headers);
  if (!adminEmail) {
    return NextResponse.json({ message: 'Acesso não autorizado.' }, { status: 401 });
  }

  const { id } = await params;
  const payload = (await request.json().catch(() => null)) as
    | { status?: unknown; observacao?: unknown }
    | null;
  const status = typeof payload?.status === 'string' ? payload.status : '';
  const observacao =
    typeof payload?.observacao === 'string' ? payload.observacao.trim().slice(0, 500) : '';

  if (!validStatuses.has(status)) {
    return NextResponse.json({ message: 'Status inválido.' }, { status: 400 });
  }

  try {
    await supabaseDashboardRpc<boolean>('atualizar_status_painel', {
      p_solicitacao_id: id,
      p_status: status,
      p_observacao: observacao || `Status alterado por ${adminEmail}`,
    });
    return NextResponse.json({ message: 'Status atualizado.' });
  } catch {
    return NextResponse.json(
      { message: 'Não foi possível atualizar o status.' },
      { status: 502 },
    );
  }
}
