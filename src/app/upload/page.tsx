'use client';

import { useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import {
  CheckCircle2,
  CloudUpload,
  FileSpreadsheet,
  FileText,
  Image as ImageIcon,
  RefreshCw,
  ShieldCheck,
  UploadCloud,
  XCircle,
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import EmptyState from '@/components/ui/EmptyState';
import PageHeader from '@/components/ui/PageHeader';

type UploadItem = {
  name: string;
  size: string;
  status: 'Pending' | 'Uploading' | 'Processed';
};

const supportedDataTypes = [
  { icon: FileText, name: 'Policy documents' },
  { icon: FileSpreadsheet, name: 'Budget spreadsheets' },
  { icon: ImageIcon, name: 'Screenshots and scans' },
  { icon: UploadCloud, name: 'Social exports' },
];

export default function UploadPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  function mapFiles(nextFiles: File[]) {
    return nextFiles.map((file) => ({
      name: file.name,
      size: `${(file.size / 1024).toFixed(1)} KB`,
      status: 'Pending' as const,
    }));
  }

  function appendFiles(nextFiles: File[]) {
    setFiles((current) => [...current, ...mapFiles(nextFiles)]);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    appendFiles(Array.from(event.dataTransfer.files));
  }

  function handleBrowse(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    appendFiles(Array.from(event.target.files));
    event.target.value = '';
  }

  function startUpload() {
    setIsUploading(true);
    setFiles((current) => current.map((file) => ({ ...file, status: 'Uploading' })));

    setTimeout(() => {
      setFiles((current) => current.map((file) => ({ ...file, status: 'Processed' })));
      setIsUploading(false);
    }, 2000);
  }

  function removeFile(name: string) {
    setFiles((current) => current.filter((file) => file.name !== name));
  }

  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="Data intake"
        title="Upload and normalize incoming civic data"
        description="Bring in documents, screenshots, spreadsheets, and social exports for downstream AI analysis and executive reporting."
        actions={
          <>
            <Badge variant="gold">Mock parser connected</Badge>
            <Button variant="secondary" leadingIcon={<ShieldCheck className="h-4 w-4 text-primary" />}>
              Review data policy
            </Button>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_360px]">
        <Card className="p-4 sm:p-6">
          <div
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`flex min-h-[360px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed px-6 py-10 text-center transition duration-200 ${
              isDragging
                ? 'border-primary bg-primary/8'
                : 'border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]'
            }`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary">
              <CloudUpload className="h-7 w-7" />
            </div>
            <div className="mt-6 space-y-3">
              <h2 className="font-display text-2xl font-semibold text-white">
                Drop files for Mayor Tom Mrakas&apos;s briefing pipeline
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-6 text-white/58">
                Upload PDFs, CSVs, spreadsheets, screenshots, and scans. Files are staged for parsing,
                OCR, and structured enrichment before entering the analytics layer.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button onClick={() => inputRef.current?.click()}>Browse files</Button>
              <Button variant="secondary" onClick={startUpload} disabled={!files.length || isUploading}>
                {isUploading ? 'Processing queue...' : 'Process queue'}
              </Button>
            </div>
            <input
              ref={inputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleBrowse}
            />
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-6">
            <CardHeader className="mb-6">
              <CardTitle>Processing overview</CardTitle>
              <CardDescription>
                Current ingestion layer status and implementation readiness.
              </CardDescription>
            </CardHeader>
            <div className="space-y-4">
              <div className="rounded-2xl border border-primary/16 bg-primary/10 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/75">
                  OCR integration note
                </p>
                <p className="mt-2 text-sm leading-6 text-white/64">
                  Production rollout should attach to AWS Textract or Google Document AI for reliable
                  scan extraction and indexing.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  ['Parser status', 'Connected to mock parser'],
                  ['Queue health', isUploading ? 'Processing' : 'Idle'],
                  ['Security policy', 'Executive ingestion enabled'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm">
                    <span className="text-white/56">{label}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <CardHeader className="mb-6">
              <CardTitle>Supported formats</CardTitle>
              <CardDescription>Common data sources used in the current workflow.</CardDescription>
            </CardHeader>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {supportedDataTypes.map(({ icon: Icon, name }) => (
                <div key={name} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 p-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/16 bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-white/76">{name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {files.length ? (
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <CardTitle>Upload queue</CardTitle>
              <CardDescription className="mt-2">
                Review pending and processed files before they enter the insight pipeline.
              </CardDescription>
            </div>
            <Button variant="secondary" onClick={startUpload} disabled={isUploading}>
              {isUploading ? 'Running OCR and parsing...' : 'Process all files'}
            </Button>
          </div>
          <div className="divide-y divide-white/8">
            {files.map((file) => {
              const statusVariant =
                file.status === 'Processed'
                  ? 'success'
                  : file.status === 'Uploading'
                    ? 'warning'
                    : 'neutral';

              return (
                <div
                  key={file.name}
                  className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/4 text-primary">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{file.name}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/38">
                        {file.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={statusVariant}>{file.status}</Badge>
                    {file.status === 'Processed' ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    ) : file.status === 'Uploading' ? (
                      <RefreshCw className="h-4 w-4 animate-spin text-amber-300" />
                    ) : (
                      <button
                        type="button"
                        className="text-white/40 transition hover:text-[#ffb4ab]"
                        onClick={() => removeFile(file.name)}
                        aria-label={`Remove ${file.name}`}
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      ) : (
        <EmptyState
          icon={<CloudUpload className="h-6 w-6" />}
          title="No files staged yet"
          description="Start by adding exports, scans, or spreadsheets. The intake queue will show status updates here."
          action={<Button onClick={() => inputRef.current?.click()}>Select files</Button>}
        />
      )}
    </DashboardLayout>
  );
}
