import axios from 'axios';
import { api } from '../api/api';

export interface Progress {
  loaded: number;
  total: number;
}

export class Sending {
  sent: boolean = false;

  progress?: Progress;

  uploadLink?: string;

  file: File

  onUpdate?:()=>void

  private abortController?: AbortController;

  sendPromise?:Promise<void>

  key?:string

  constructor(file:File, onUpdate?: () => void) {
    this.file = file;
    this.onUpdate = onUpdate;
    this.send();
  }

  async send() {
    this.sendPromise = this.doSend();
  }

  async doSend() {
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
    const { uploadLink, key } = res.data;
    this.uploadLink = uploadLink;
    this.key = key;
    this.callback();
  }

  onUploadProgress = (progress: Progress) => {
    this.progress = progress;
    this.callback();
  };

  async uploadImage() {
    this.abortController = new AbortController();
    await axios.put(this.uploadLink!, this.file, {
      onUploadProgress: this.onUploadProgress,
      signal: this.abortController.signal,
    });
  }

  cancel() {
    if (this.abortController) this.abortController.abort();
  }

  get getLinkPreview() {
    return this.uploadLink?.slice(-100, -70);
  }

  get progressPercentage() {
    if (!this.progress) return null;
    return (
      `${((100 * this.progress.loaded) / this.progress.total)
        .toFixed(2)
        .replace('.00', '')}%`
    );
  }
}
