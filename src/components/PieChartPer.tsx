"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp, Users } from "lucide-react";

import React from "react";
import { PieChart, Pie, Label } from "recharts";

type PieChartCardProps = {
  chartTitle?: string;
  chartInnerTitle?: string;
  chartData: { status: string; visitors: number; fill: string }[];
  chartConfig: ChartConfig;
};

const PieChartCard: React.FC<PieChartCardProps> = ({
  chartTitle,
  chartInnerTitle,
  chartData,
  chartConfig,
}) => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);
  return (
    <>
      <Card className="flex w-[350px] h-[230px]">
        <CardHeader className="flex -mt-2  justify-between items-center">
          <div className="flex gap-4">
            <CardTitle className="text-sm font-medium">{chartTitle}</CardTitle>
            <Users className="h-4 w-4" />
          </div>

          <div
            className="flex gap-2 text-sm font-medium rounded-lg pr-1 pl-1"
            style={{ backgroundColor: "#00996633" }}
          >
            <TrendingUp className="h-4 w-4" />
            <div>+ 6 %</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2">
            <ChartContainer
              config={chartConfig}
              className="-mt-2 aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="status"
                  outerRadius={75}
                  innerRadius={55}
                  startAngle={0}
                  endAngle={-360}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 12}
                              className="fill-muted-foreground"
                            >
                              {chartInnerTitle}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 12}
                              className="fill-foreground text-3xl font-semibold"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="flex flex-col items-start ml-7 mb-3 gap-2">
                {chartData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PieChartCard;
