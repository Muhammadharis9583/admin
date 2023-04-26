import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, name, phone, address, lastPurchase) {
  return { id, name, phone, address, lastPurchase };
}

const rows = [
  createData(0, "Haris", "03335662534", "Tupelo, MS", 3000),
  createData(1, "Haider", "03335662534", "Tupelo, MS", 5000),
  createData(2, "Hammad", "03335662534", "Tupelo, MS", 8000),
  createData(3, "Haris", "03345356634", "Tupelo, MS", 3080),
  createData(4, "Abdullah", "03335662545", "Tupelo, MS", 5600),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">Last Purchase</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell align="right">{`$${row.lastPurchase}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
