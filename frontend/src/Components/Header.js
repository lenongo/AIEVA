import { Box, Button } from '@chakra-ui/react';
// Import everything
import { ethers } from 'ethers';
import { useState } from 'react';

// Import just a few select items
import { BrowserProvider, parseUnits } from 'ethers';

// Import from a specific export
import { HDNodeWallet } from 'ethers/wallet';
import EllipsisButton from './EllipsisButton';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const walletConnect = async () => {
    let signer = null;
    console.log('Wallet Connect');

    let provider;
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed so are
      // only have read-only access
      console.log('MetaMask not installed; using read-only defaults');
      provider = ethers.getDefaultProvider();
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window.ethereum);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      signer = await provider.getSigner();
      setIsConnected(true);
      console.log('MetaMask installed; using provider', signer.getAddress());
      try {
        const data = await signer.getAddress(); // 非同期関数の呼び出し
        setWalletAddress(data);
        console.log(data); // データを表示または利用する
      } catch (error) {
        console.log(error); // エラーハンドリング
      }
    }
  };

  return (
    <Box
      bg="cyan.500"
      color="white"
      width="100%"
      height="7vh"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* ヘッダーのコンテンツを追加 */}
      <EllipsisButton
        walletConnect={walletConnect}
        text={isConnected ? walletAddress : 'Wallet Connect'}
      />
    </Box>
  );
};

export default Header;
