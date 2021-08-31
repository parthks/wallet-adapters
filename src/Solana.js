import { Button } from "@material-ui/core";
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";


import { useWallet, useConnection } from '@solana/wallet-adapter-react';




  export default function Stuff() {
      const {connection} = useConnection()
    const { publicKey, wallet } = useWallet();

    const doo = () => {
        console.log("HI")
        console.log(connection)
        console.log(publicKey)
        console.log(wallet)
    
    }

    return <div>

          <Button onClick={() => doo()}>Do stuff</Button>
      </div>
  }