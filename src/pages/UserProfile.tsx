import { Tabs, Box, Card, Text, Input, Button, Flex,
} from "@chakra-ui/react"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useState } from "react";
import { TokenIcon } from '@web3icons/react';

const Profile = () => {
  return (
  <Tabs.Root size="lg" defaultValue="members" variant="plain">
      <Tabs.List bg="bg.muted" rounded="l3" p="1">
        <Tabs.Trigger value="members">
          Profile

        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          Wallet
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          Security
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="members"><PersonalInfo/></Tabs.Content>
      <Tabs.Content value="projects"><WalletConfig/></Tabs.Content>
      <Tabs.Content value="tasks">
        <Security/>
      </Tabs.Content>
    </Tabs.Root>
  )
}

const PersonalInfo = () => {
  return (
    <Card.Root>
      <Card.Header>Personal Information</Card.Header>
      <Card.Body>
        <Text>Full Name</Text>
        <Input/>
        <Text>Email</Text>
        <Input/>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
      <Button variant="outline">Save Changes</Button>
      </Card.Footer>
    </Card.Root>
  )
}


const WalletConfig = () => {
  const chains = createListCollection({
    items: [
      { label: "Polygon", value: "polygon", symbol: "matic" },
      { label: "Ethereum", value: "ethereum", symbol: "eth"},
      { label: "Solana", value: "solana", symbol: "sol"},
      { label: "Avalanche (C-Chain)", value: "avalanche", symbol: "avax" },
    ],
  });

  const tokens = createListCollection({
  items: [
    { label: "MATIC (native)", value: "matic", chain: "polygon", symbol: "matic" },
    { label: "USDC", value: "usdc_polygon", chain: "polygon", symbol: "usdc" },
    { label: "DAI", value: "dai_polygon", chain: "polygon", symbol: "dai" },
    { label: "ETH (native)", value: "eth", chain: "ethereum", symbol: "eth" },
    { label: "USDC", value: "usdc_ethereum", chain: "ethereum", symbol: "usdc" },
    { label: "DAI", value: "dai_ethereum", chain: "ethereum", symbol: "dai" },
    { label: "SOL (native)", value: "sol", chain: "solana", symbol: "sol" },
    { label: "USDC", value: "usdc_solana", chain: "solana", symbol: "usdc" },
    { label: "AVAX (native)", value: "avax", chain: "avalanche", symbol: "avax" },
    { label: "USDC", value: "usdc_avalanche", chain: "avalanche", symbol: "usdc" },
  ],
});
  const [selectedChain, setSelectedChain] = useState(null);
  
  const handleChainChange = (selected) => {
  const chainId = selected?.value?.[0]; 
  setSelectedChain(chainId);
};

  const filteredTokens = tokens.items.filter(token => token.chain === selectedChain);

  return (
    <Card.Root>
      <Card.Header>Wallet Configuration</Card.Header>
      <Card.Body>
        <Text>Wallet Address</Text>
        <Input />

        {/* Chain Dropdown */}
        <Select.Root
          collection={chains}
          size="sm"
          width="320px"
          onValueChange={handleChainChange}
        >
          <Select.HiddenSelect />
          <Select.Label>Preferred blockchain</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select chain" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {chains.items.map((chain) => (
                  <Select.Item item={chain} key={chain.value}>
                      <Flex align="center" gap="2">
                        <TokenIcon symbol={chain.symbol} variant="background" size="20" />
                        {chain.label}
                      </Flex>

                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        {/* Token Dropdown - filtered by selectedChain */}
        <Select.Root
          collection={createListCollection({items: filteredTokens}) }
          size="sm"
          width="320px"
        >
          <Select.HiddenSelect />
          <Select.Label>Preferred token</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select token" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {filteredTokens.map((token) => (
                  <Select.Item item={token} key={token.value}>
                      <Flex align="center" gap="2">
                        <TokenIcon symbol={token.symbol} variant="branded" size="21" />
                        {token.label}
                      </Flex>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">Save Changes</Button>
      </Card.Footer>
    </Card.Root>
  );
};


const Security = () => {
  return (
    <Card.Root>
      <Card.Header>Personal Information</Card.Header>
      <Card.Body>
        <Text>Current Password</Text>
        <Input/>
        <Text>New Password</Text>
        <Input/>
        
        <Text>Confirm Password</Text>
        <Input/>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
      <Button variant="outline">Change Password</Button>
      </Card.Footer>
    </Card.Root>
  )
}




export default Profile;
