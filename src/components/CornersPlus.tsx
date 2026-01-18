import { cn } from "@/lib/utils";
import React, { type ReactNode, type CSSProperties } from "react";

interface CornersPlusProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: string;
  size?: number;
  thickness?: number;
  gap?: number;
  showCorners?: boolean | "top" | "bottom" | "left" | "right" | "all";
  animated?: boolean;
  rounded?: boolean;
  variant?: "plus" | "cross";
}

const CornersPlus: React.FC<CornersPlusProps> = ({
  children,
  className = "",
  style = {},
  color = "currentColor",
  size = 5,
  thickness = 1,
  gap = 4,
  showCorners = "all",
  animated = false,
  rounded = false,
  variant = "plus",
}) => {
  const cornerStyle: CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    zIndex: 10,
  };

  const renderPlus = (position: "tl" | "tr" | "bl" | "br") => {
    const positionStyle: CSSProperties = {};

    const halfSize = -(size / 2);

    switch (position) {
      case "tl":
        positionStyle.top = `${halfSize}px`;
        positionStyle.left = `${halfSize}px`;
        break;
      case "tr":
        positionStyle.top = `${halfSize}px`;
        positionStyle.right = `${halfSize}px`;
        break;
      case "bl":
        positionStyle.bottom = `${halfSize}px`;
        positionStyle.left = `${halfSize}px`;
        break;
      case "br":
        positionStyle.bottom = `${halfSize}px`;
        positionStyle.right = `${halfSize}px`;
        break;
    }

    // 默认的+形状
    return (
      <div
        className={`corner-plus corner-${position} ${animated ? "animate-pulse" : ""}`}
        style={{
          ...cornerStyle,
          ...positionStyle,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* 水平线 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: `${thickness}px`,
            backgroundColor: color,
            transform: "translateY(-50%)",
            borderRadius: rounded ? `${thickness / 2}px` : "0",
          }}
        />
        {/* 垂直线 */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            width: `${thickness}px`,
            height: "100%",
            backgroundColor: color,
            transform: "translateX(-50%)",
            borderRadius: rounded ? `${thickness / 2}px` : "0",
          }}
        />
      </div>
    );
  };

  const renderCross = (position: "tl" | "tr" | "bl" | "br") => {
    const positionStyle: CSSProperties = {};

    switch (position) {
      case "tl":
        positionStyle.top = `${gap}px`;
        positionStyle.left = `${gap}px`;
        break;
      case "tr":
        positionStyle.top = `${gap}px`;
        positionStyle.right = `${gap}px`;
        break;
      case "bl":
        positionStyle.bottom = `${gap}px`;
        positionStyle.left = `${gap}px`;
        break;
      case "br":
        positionStyle.bottom = `${gap}px`;
        positionStyle.right = `${gap}px`;
        break;
    }

    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ ...cornerStyle, ...positionStyle }}
        className={animated ? "animate-pulse" : ""}
      >
        {/* 圆形背景（可选） */}
        {variant === "cross" && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - thickness}
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            opacity="0.2"
          />
        )}

        {/* 十字线 */}
        <line
          x1={size / 2}
          y1={thickness}
          x2={size / 2}
          y2={size - thickness}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap={rounded ? "round" : "square"}
        />
        <line
          x1={thickness}
          y1={size / 2}
          x2={size - thickness}
          y2={size / 2}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap={rounded ? "round" : "square"}
        />
      </svg>
    );
  };

  const shouldShowCorner = (position: "tl" | "tr" | "bl" | "br") => {
    if (typeof showCorners === "boolean") return showCorners;
    if (showCorners === "all") return true;
    if (showCorners === "top" && (position === "tl" || position === "tr"))
      return true;
    if (showCorners === "bottom" && (position === "bl" || position === "br"))
      return true;
    if (showCorners === "left" && (position === "tl" || position === "bl"))
      return true;
    if (showCorners === "right" && (position === "tr" || position === "br"))
      return true;
    return false;
  };

  return (
    <div
      className={cn("relative dashed-border-4-4", className)}
      style={{ ...style }}
    >
      {variant === "cross" ? (
        <>
          {shouldShowCorner("tl") && renderCross("tl")}
          {shouldShowCorner("tr") && renderCross("tr")}
          {shouldShowCorner("bl") && renderCross("bl")}
          {shouldShowCorner("br") && renderCross("br")}
        </>
      ) : (
        <>
          {shouldShowCorner("tl") && renderPlus("tl")}
          {shouldShowCorner("tr") && renderPlus("tr")}
          {shouldShowCorner("bl") && renderPlus("bl")}
          {shouldShowCorner("br") && renderPlus("br")}
        </>
      )}
      {children}
    </div>
  );
};

export default CornersPlus;
