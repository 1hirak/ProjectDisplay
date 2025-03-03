// TableList.jsx
"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ChevronRight } from "lucide-react";

const resources = [
  { id: 1, title: "Fetch Data on Mount", path: "/useeffect/p1" },
  { id: 2, title: "Set Interval", path: "/useeffect/p2" },
  { id: 3, title: "Update Document Title on State Change", path: "/useeffect/p3" },
  { id: 4, title: "Window Resize Listener", path: "/useeffect/p4" },
  { id: 5, title: "websocket basics", path: "/useeffect/p5" },
  { id: 6, title: "ChatApp using Websocket** ", path: "/useeffect/p6" },
  { id: 7, title: "websocket basic 2**", path: "/useeffect/p7" },
  { id: 8, title: "Update Document Title on State Change", path: "/useeffect/p3" },
  { id: 9, title: "Window Resize Listener", path: "/useeffect/p4" },
  { id: 10, title: "websocket basics", path: "/useeffect/p5" },
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
