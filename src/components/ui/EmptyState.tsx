import type { ReactNode } from 'react';
import { Card } from './Card';

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
        <p className="mx-auto max-w-md text-sm leading-6 text-white/58">{description}</p>
      </div>
      {action}
    </Card>
  );
}
