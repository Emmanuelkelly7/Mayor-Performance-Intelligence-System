"use client";

import { DataTable, DataTableRow, DataTableCell } from "@/components/ui/DataTable";
import { candidateHistory } from "@/data/electionData";

export function CandidateSummaryTable() {
  return (
    <DataTable headers={["Election", "Tom Mrakas Votes", "Vote Share", "Main Result", "Strategic Meaning"]}>
      {candidateHistory.map((row, i) => (
        <DataTableRow key={i} highlighted={row.election === "2022"}>
          <DataTableCell className="font-bold">{row.election}</DataTableCell>
          <DataTableCell>{row.votes.toLocaleString()}</DataTableCell>
          <DataTableCell className="font-bold text-accent-primary">{row.share}</DataTableCell>
          <DataTableCell>{row.result}</DataTableCell>
          <DataTableCell className="italic">{row.meaning}</DataTableCell>
        </DataTableRow>
      ))}
    </DataTable>
  );
}
