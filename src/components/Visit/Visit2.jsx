import React from "react";
import Title from "../Title/Title";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

import "./visit.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(id, name, calories, fat, carbs) {
  return { id, name, calories, fat, carbs };
}

const rows = [
  createData(
    "1",
    "Komposit Dolgu (Üc Yüzlü) (Kimyasal-Isikli) ×4",
    "31/32/36/37",
    "$3500",
    "$1.5798"
  ),
  createData(
    "2",
    "Komposit1 Dolgu (Üc Yüzlü) (Kimyasal-Isikli) ×4",
    "31/32/36/37",
    "$3500",
    "$1.5798"
  ),
  createData(
    "3",
    "Komposit2 Dolgu (Üc Yüzlü) (Kimyasal-Isikli) ×4",
    "31/32/36/37",
    "$3500",
    "$1.5798"
  ),
];

export default function Visit2() {
  return (
    <section className="visit">
      <Title name="Visit 2" />

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="title_visit"> # Treatment </TableCell>
              <TableCell className="title_visit" align="center">
                Tooth
              </TableCell>
              <TableCell className="title_visit" align="center">
                Unit
              </TableCell>
              <TableCell className="title_visit" align="center">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className="sub_tooltip">
                    {row.name}

                    <Tooltip
                      arrow
                      placement="top-start"
                      slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: "offset",
                              options: {
                                offset: [0, -4],
                              },
                            },
                          ],
                        },
                      }}
                      title="When you approve the treatment plan, your consultant will discuss the finalization details of your visit with you."
                    >
                      <Image
                        src="/images/ic.png"
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    </Tooltip>
                  </div>
                </TableCell>
                <TableCell className="sub_" align="center">
                  {row.calories}
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="total_visit">
        <ul> 
            <li>Sub-Total: <span> $1.5798 </span></li>
            <li>Discount: <span> <b> 10% </b> $150</span></li>
            <li>Total: <span> $1320 </span></li>
        </ul>
      </div>
    </section>
  );
}
