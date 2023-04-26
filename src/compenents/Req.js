import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../screens/dashboard/Title";
import { Button } from "@mui/material";
import QRCode from "qrcode";

// Generate Order Data
// function createData(id, name, phone, address, lastPurchase) {
//   return { id, name, phone, address, lastPurchase };
// }

// const rows = [
//   createData(0, "Haris", "03335662534", "Tupelo, MS", 3000),
//   createData(1, "Haider", "03335662534", "Tupelo, MS", 5000),
//   createData(2, "Hammad", "03335662534", "Tupelo, MS", 8000),
//   createData(3, "Haris", "03345356634", "Tupelo, MS", 3080),
//   createData(4, "Abdullah", "03335662545", "Tupelo, MS", 5600),
// ];

function preventDefault(event) {
  event.preventDefault();
}

export default function Req() {
  const [qrCodeImage, setQRCodeImage] = React.useState("");
  const data = [
    {
      username: "User 1",
      glossary: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
      ],
      total: 3000,
      paid: true,
    },
    {
      username: "User 2",
      glossary: ["Item 4", "Item 5"],
      total: 4500,
      paid: false,
    },
    { username: "User 3", glossary: ["Item 6"], total: 5000, paid: true },
  ];
  const [expandedRows, setExpandedRows] = React.useState([]);

  const handleToggleExpansion = (username) => {
    if (expandedRows.includes(username)) {
      setExpandedRows(expandedRows.filter((row) => row !== username));
    } else {
      setExpandedRows([...expandedRows, username]);
    }
  };

  const isExpanded = (username) => expandedRows.includes(username);
  const handleSendQRCode = async (username, glossary) => {
    const message = `${username} approved by admin\n\nItems:\n${glossary.join(
      "\n"
    )}`;
    const qrCodeImage = await QRCode.toDataURL(message);
    console.log(qrCodeImage);
    

    setQRCodeImage(
      URL.createObjectURL(await (await fetch(qrCodeImage)).blob())
    );
    alert(`Sending QR code to ${username}`);
  };
  const getPaymentStatusColor = (paid) => (paid ? "green" : "red");
  return (
    // <React.Fragment>
    //   <Title>Requests</Title>
    //   <Table size="small">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Name</TableCell>
    //         <TableCell>Phone No</TableCell>
    //         <TableCell>Address</TableCell>
    //         <TableCell align="right">Last Purchase</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow key={row.id}>
    //           <TableCell>{row.name}</TableCell>
    //           <TableCell>{row.phone}</TableCell>
    //           <TableCell>{row.address}</TableCell>
    //           <TableCell align="right">{`$${row.lastPurchase}`}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
    //     See more orders
    //   </Link>
    // </React.Fragment>
    <div>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Glossary</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Total Price</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Bill Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.username}>
              <TableRow>
                <TableCell>{row.username}</TableCell>
                <TableCell>
                  <ul sx={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {row.glossary.slice(0, 5).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    {row.glossary.length > 5 && !isExpanded(row.username) && (
                      <li>
                        <Button
                          variant="text"
                          onClick={() => handleToggleExpansion(row.username)}
                        >
                          See more
                        </Button>
                      </li>
                    )}
                    {isExpanded(row.username) &&
                      row.glossary
                        .slice(5)
                        .map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                  <span
                    style={{
                      color: getPaymentStatusColor(row.paid),
                      fontWeight: "bold",
                    }}
                  >
                    {row.paid ? "Paid" : "Not Paid"}
                  </span>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      "&:hover": { backgroundColor: "darkgreen" },
                    }}
                    onClick={() => handleSendQRCode(row.username, row.glossary)}
                  >
                    Send QR Code
                  </Button>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      {qrCodeImage && (
        <div>
          <h2>QR Code:</h2>
          <img src={qrCodeImage} alt="QR Code" />
        </div>
      )}
    </div>
  );
}
