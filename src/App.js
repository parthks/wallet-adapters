// import { createTheme, ThemeProvider } from '@material-ui/core';
// import { deepPurple } from '@material-ui/core/colors';
// import { SnackbarProvider } from 'notistack';
// import React, { FC } from 'react';
// import './App.css';
// import Wallet from './Wallet';

// const theme = createTheme({
//     palette: {
//         type: 'dark',
//         primary: {
//             main: deepPurple[700],
//         },
//     },
//     overrides: {
//         MuiButtonBase: {
//             root: {
//                 justifyContent: 'flex-start',
//             },
//         },
//         MuiButton: {
//             root: {
//                 textTransform: undefined,
//                 padding: '12px 16px',
//             },
//             startIcon: {
//                 marginRight: 8,
//             },
//             endIcon: {
//                 marginLeft: 8,
//             },
//         },
//     },
// });

// const App: FC = () => {
//     return (
//         <ThemeProvider theme={theme}>
//             <SnackbarProvider>
//                 <Wallet />
//             </SnackbarProvider>
//         </ThemeProvider>
//     );
// };
import SolanaStuff from './Solana.js'
import React, { FC, useMemo } from 'react';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import {
    getLedgerWallet,
    getMathWallet,
    getPhantomWallet,
    getSolflareWallet,
    getSolletWallet,
    getSolongWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import {
    WalletDialogProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-material-ui';


import { clusterApiUrl } from '@solana/web3.js';



export const Wallet = () => {
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
    // Only the wallets you want to instantiate here will be compiled into your application
    const wallets = useMemo(() => [
        getPhantomWallet(),
        getSolflareWallet(),
        getTorusWallet({
            options: { clientId: 'BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ'}
        }),
        getLedgerWallet(),
        getSolongWallet(),
        getMathWallet(),
        getSolletWallet(),
    ], []);

    return (
        <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
        <WalletProvider wallets={wallets}>
            <WalletDialogProvider>
                <WalletMultiButton/>
                <WalletDisconnectButton/>
                <SolanaStuff />
            </WalletDialogProvider>
        </WalletProvider>
        </ConnectionProvider>
    );
};

export default Wallet;
