import Router from 'next/router';
import { useEffect } from 'react';

import { api } from '../api/api';
import { Spinner } from '../common/Spinner';

export function InvitePage({ query }:any) {
  const { fbId } = query;
  async function registerVisualization() {
    await api.post('visualizations', { fbId });
  }

  useEffect(() => {
    registerVisualization();
    Router.push('/');
  }, []);

  return (
    <div className="h-screen-no-header center">
      <Spinner />
    </div>
  );
}
