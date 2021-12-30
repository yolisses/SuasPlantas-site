import axios from 'axios';
import { api } from '../api/api';

export interface Progress {
  loaded: number;
  total: number;
}

interface SendingByFile{
  file:File
  onUpdate?:() => void
  key?:never
}

interface SendingBySentFile{
  file?:never
  onUpdate?:never
  key:string
}

type SendingContructorParams = SendingByFile|SendingBySentFile

export class Sending {
  key?:string

  file: File|null

  onUpdate?:()=>void

  progress?: Progress;

  uploadLink?: string;

  sent: boolean = false;

  sendPromise?:Promise<void>

  private abortController?: AbortController;

  constructor(params: SendingContructorParams) {
    if (params.file) {
      this.file = params.file;
      this.onUpdate = params.onUpdate;

      this.send();
    } else {
      this.sent = true;
      this.file = null;
      this.key = params.key;
      this.progress = { loaded: 100, total: 100 };
      this.sendPromise = new Promise((resolve) => { resolve(); });
    }
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
