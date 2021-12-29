import { Alert, Snackbar } from '@mui/material';
import { observer } from 'mobx-react';
import { snackStore } from './snackStore';

function ImplSnackView() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {snackStore.snack
        ? (
          <Snackbar
            open
            autoHideDuration={snackStore.snack.text.length * 300}
            onClose={() => snackStore.close()}
          >
            <Alert severity={snackStore?.snack?.severity} className="w-full" variant="filled">
              {snackStore?.snack?.text}
            </Alert>
          </Snackbar>
        ) : undefined}
    </>
  );
}

export const SnackView = observer(ImplSnackView);
