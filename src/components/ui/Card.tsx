import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.92),rgba(10,10,10,0.92))] shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur-sm',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-2', className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn('font-display text-xl font-semibold tracking-tight text-white', className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm leading-6 text-white/60', className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

export function MetricCard({
  eyebrow,
  value,
  meta,
  icon,
  className,
}: {
  eyebrow: string;
  value: string;
  meta: ReactNode;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn('p-5 sm:p-6', className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
            {eyebrow}
          </p>
          <p className="font-display text-3xl font-semibold tracking-tight text-white">
            {value}
          </p>
          <div className="text-sm text-white/60">{meta}</div>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </Card>
  );
}
