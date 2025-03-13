// TableList.jsx
"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ChevronRight } from "lucide-react";

const resources = [
  { id: 1, title: "Basic UseRef", path: "/useref/p1" },
  { id: 2, title: "Timeout Function", path: "/useref/p2" },
  { id: 3, title: "AutoFocus", path: "/useref/p3" },
  { id: 4, title: "Render Count", path: "/useref/p4" },
  { id: 5, title: "Dynamic Height Textarea", path: "/useref/p5" },
  { id: 6, title: "_ ", path: "/useref/p6" },
  { id: 7, title: "_", path: "/useref/p7" },
  { id: 8, title: "_", path: "/useref/p8" },
  { id: 9, title: "_", path: "/useref/p9" },
  { id: 10, title: "_", path: "/useref/p10" },
];

export default function TableList() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[600px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            UseRef Practices
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
