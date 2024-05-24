'use client';
import React, { useContext } from "react";
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
import { LangContext } from "@/Context/LangContext";

function createData(id, name, details, teethCount, price, total) {
  return { id, name, details, teethCount, price, total };
}

export default function Visit({ dataVisits , index }) {
  const langCtx = useContext(LangContext);
  const { id, treatments } = dataVisits;

  console.log(dataVisits);
  console.log("id", id);
  console.log("treatments", treatments);
  const rows = treatments.map((e, index) =>
    createData(
      index,
      e.treatment_name,
      e.details,
      e.teeth_count,
      e.unit[0].price,
      e.total
    )
  );

  return (
    <section className="visit">
      <Title name={`Visit ${index}`} />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="title_visit" align="left"># Treatment</TableCell>
              <TableCell className="title_visit" align="center">Tooth</TableCell>
              <TableCell className="title_visit" align="center">Unit</TableCell>
              <TableCell className="title_visit" align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <div className="sub_tooltip">
                    {row.name}
                    <Tooltip
                      placement="top-start"
                      arrow
                      title={row.details}
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
                <TableCell className="sub_" align="center">{row.teethCount}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
