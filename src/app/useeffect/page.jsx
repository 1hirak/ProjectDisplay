// TableList.jsx
"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ChevronRight } from "lucide-react";

const resources = [
  { id: 1, title: "Fetch Data on Mount", path: "/useeffect/p1" },
  { id: 2, title: "Projects", path: "/projects" },
  { id: 3, title: "Team Members", path: "/team" },
  { id: 4, title: "Settings", path: "/settings" },
  { id: 5, title: "Profile", path: "/profile" },
];

export default function TableList() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[600px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            Useeffect Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="group hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="px-4">
                        <Link
                          href={resource.path}
                          className="flex items-center justify-between w-full py-2 text-gray-900 text-base hover:text-gray-900"
                        >
                          <span>{resource.title}</span>
                          <ChevronRight
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                            strokeWidth={1.5}
                          />
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
