import { useState } from 'react';
import { Button, DataTable, MD3Theme, Surface, Text, withTheme } from 'react-native-paper';
import { Animated } from 'react-native';
import View = Animated.View;
import AppBar from '@/components/ui/AppBar';

type User = { id: number; name: string; role: string; age: number };

const USERS: User[] = [
  { id: 1, name: 'An', role: 'Dev', age: 24 },
  { id: 2, name: 'Bình', role: 'Designer', age: 29 },
  { id: 3, name: 'Chi', role: 'PM', age: 31 },
  { id: 4, name: 'Dũng', role: 'QA', age: 27 },
  { id: 5, name: 'Hoa', role: 'Dev', age: 22 },
  { id: 6, name: 'Long', role: 'DevOps', age: 35 },
];

const PAGE_SIZE = 4;

function HomeScreen() {
  const [page, setPage] = useState(0);

  const from = page * PAGE_SIZE;
  const to = Math.min(from + PAGE_SIZE, USERS.length);
  const rows = USERS.slice(from, to);

  return (
    <View>
      <AppBar title="Home" />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Role</DataTable.Title>
          <DataTable.Title numeric>Age</DataTable.Title>
        </DataTable.Header>

        {rows.map(u => (
          <DataTable.Row key={u.id}>
            <DataTable.Cell>{u.name}</DataTable.Cell>
            <DataTable.Cell>{u.role}</DataTable.Cell>
            <DataTable.Cell numeric>{u.age}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(USERS.length / PAGE_SIZE)}
          onPageChange={setPage}
          label={`${from + 1}-${to} of ${USERS.length}`}
          numberOfItemsPerPage={PAGE_SIZE}
        />
      </DataTable>
      <Button container>Click me bro</Button>
    </View>
  );
}

export default HomeScreen;
