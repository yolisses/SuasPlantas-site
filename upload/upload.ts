import { api } from '../api/api';

export interface Progress {
  loaded: number;
  total: number;
}

export class Sending {
  sent: boolean = false;

  progress?: Progress;

  uploadLink?: string;

  private abortController?: AbortController;

  constructor(public file: File, public onUpdate?: () => void) {}

  async send() {
    await this.getUploadLink();
    await this.uploadImage();
    this.sent = true;
    console.log('foi');
    this.callback();
  }

  callback() {
    if (this.onUpdate) this.onUpdate();
  }

  async getUploadLink() {
    const res = await api.get('upload');
    this.uploadLink = res.data;
    this.callback();
  }

  onUploadProgress = (progress: Progress) => {
    this.progress = progress;
    this.callback();
  };

  async uploadImage() {
    this.abortController = new AbortController();
    await api.put(this.uploadLink!, this.file, {
      onUploadProgress: this.onUploadProgress,
      signal: this.abortController.signal,
    });
  }

  cancel() {
    if (this.abortController) this.abortController.abort();
  }

  get getLinkPreview() {
    return this.uploadLink?.slice(this.uploadLink.length - 10);
  }

  get progressPercentage() {
    if (!this.progress) return null;
    return (
      `${((100 * this.progress.loaded) / this.progress.total)
        .toFixed(2)
        .replace('.00', '')
        .replace('.', ',')}%`
    );
  }
}
