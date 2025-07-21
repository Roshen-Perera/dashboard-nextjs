import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";
import { PieChart, Pie, Label } from "recharts";

// Chart data type
type PieChartCardProps = {
  chartTitle?: string;
  chartInnerTitle?: string;
  chartData: { status: string; visitors: number; fill: string }[];
  chartConfig?: object;
};

const PieChartCard: React.FC<PieChartCardProps> = ({
  chartTitle = "Monthly Patients",
  chartInnerTitle = "All",
  chartData,
  chartConfig = {},
}) => {
  const totalVisitors = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.visitors, 0),
    [chartData]
  );

  return (
    <Card style={{ width: 300, border: "1px solid #e2e8f0" }}>
      <CardHeader
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <CardTitle style={{ fontSize: 16 }}>{chartTitle}</CardTitle>
          <Users size={18} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: "#00996633",
            padding: "2px 8px",
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          <TrendingUp size={16} />
          <span>+ 6 %</span>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <PieChart width={120} height={120}>
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="status"
              innerRadius={45}
              outerRadius={60}
              startAngle={90}
              endAngle={-270}
            >
              <Label
                position="center"
                content={({ viewBox }) => {
                  const { cx, cy } = viewBox;
                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="inherit"
                    >
                      <tspan x={cx} y={cy - 10} fontSize={13} fill="#6b7280">
                        {chartInnerTitle}
                      </tspan>
                      <tspan
                        x={cx}
                        y={cy + 15}
                        fontSize={24}
                        fontWeight={700}
                        fill="#111827"
                      >
                        {totalVisitors}
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
          {/* Legend */}
          <div
            style={{
              marginLeft: 20,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {chartData.map((seg, i) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: 8 }}
                key={i}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    background: seg.fill,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{ fontSize: 15, color: "#6b7280", fontWeight: 500 }}
                >
                  {seg.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
