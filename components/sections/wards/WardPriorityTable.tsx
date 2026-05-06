"use client";

import { DataTable, DataTableRow, DataTableCell } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { wardData } from "@/data/electionData";

export function WardPriorityTable() {
  return (
    <DataTable headers={["Ward", "Eligible Voters", "Votes Cast", "Turnout", "Priority", "Reason"]}>
      {wardData.map((row, i) => (
        <DataTableRow key={i}>
          <DataTableCell className="font-bold">{row.ward}</DataTableCell>
          <DataTableCell>{row.eligible.toLocaleString()}</DataTableCell>
          <DataTableCell>{row.cast.toLocaleString()}</DataTableCell>
          <DataTableCell className="font-bold">{row.turnout}%</DataTableCell>
          <DataTableCell>
            <Badge label={row.priority} variant={row.priority as any} />
          </DataTableCell>
          <DataTableCell className="max-w-xs text-xs">{row.reason}</DataTableCell>
        </DataTableRow>
      ))}
    </DataTable>
  );
}
