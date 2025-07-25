"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
      <Card className="bg-[#f5fffa] flex w-[210px] h-[225px]">
        <CardHeader className="flex -mt-2 items-center gap-2 ">
          <CardTitle className="text-sm font-medium">{chartTitle}</CardTitle>
          <HugeiconsIcon icon={Calendar03Icon} size={16} />{" "}
        </CardHeader>
        <ChartContainer
          config={chartConfig}
          className="-mt-10 aspect-square max-h-[250px]"
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
              innerRadius={40}
              startAngle={270}
              outerRadius={50}
              endAngle={-90}
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
                          y={(viewBox.cy || 0) - 12} // Move up
                          className="fill-muted-foreground"
                        >
                          {chartInnerTitle}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 12} // Move down
                          className="fill-foreground text-2xl"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={({ payload }) => (
                <div className="flex flex-col items-start ml-2 mb-3 ">
                  {payload?.map((entry, index) => (
                    <div
                      key={`item-${index}`}
                      className="flex items-center gap-2 text-xs"
                    >
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-sm text-muted-foreground">
                        {entry.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            />
          </PieChart>
        </ChartContainer>
      </Card>
    </>
  );
};


export default PieChartCard;
