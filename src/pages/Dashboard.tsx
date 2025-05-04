import { Table, Card, Flex } from "@chakra-ui/react"
const Dashboard = () => {
  return (
    <Flex>
    <Summary/>
    <TransactionTable/>
    </Flex>
  )
}

const Summary = () => {

  const revenue = 1923;
  const numTransactions = 34;
  return (
    <Flex>
    <Card.Root>
      <Card.Header>Total Revenue</Card.Header>
      <Card.Body>{revenue}</Card.Body>
    </Card.Root>
    <Card.Root>
      <Card.Header>Total Transactions</Card.Header>
      <Card.Body>{numTransactions}</Card.Body>
    </Card.Root>
    </Flex>
  )
}


const TransactionTable = () => {
  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader>User</Table.ColumnHeader>

          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader>Chain</Table.ColumnHeader>
          
          <Table.ColumnHeader>Wallet Address</Table.ColumnHeader>
          <Table.ColumnHeader>Date & Time</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell textAlign="end">{item.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
]


export default Dashboard;
