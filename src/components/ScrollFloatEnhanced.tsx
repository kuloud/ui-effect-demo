import React, { useEffect, useRef, useMemo, type ReactNode, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatEnhancedProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  splitMode?: "char" | "word" | "line";
}

interface ProcessedSegment {
  type: "text" | "element";
  content: string;
  elementType?: string;
  className?: string;
  isWhitespace?: boolean;
  isNewline?: boolean;
}

const ScrollFloatEnhanced: React.FC<ScrollFloatEnhancedProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  splitMode = "char",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();

  // 提取和解析文本内容
  const extractTextContent = (node: ReactNode): ProcessedSegment[] => {
    if (typeof node === "string") {
      return node.split("").map(char => ({
        type: "text" as const,
        content: char,
        isWhitespace: char === " ",
        isNewline: char === "\n",
      }));
    }

    if (Array.isArray(node)) {
      return node.flatMap((child, index) => 
        extractTextContent(child).map(seg => ({
          ...seg,
          content: seg.type === "text" && seg.isWhitespace ? "\u00A0" : seg.content
        }))
      );
    }

    if (React.isValidElement(node)) {
      const { type, props } = node;
      const elementType = typeof type === "string" ? type : "element";
      
      // 处理 br 标签
      if (elementType === "br") {
        return [{
          type: "text" as const,
          content: "",
          isNewline: true,
        }];
      }
      
      // 处理 span 等元素
      if (props.children) {
        const childSegments = extractTextContent(props.children);
        return childSegments.map(seg => ({
          ...seg,
          elementType,
          className: props.className || "",
        }));
      }
    }

    return [];
  };

  // 按单词分割
  const splitIntoWords = (segments: ProcessedSegment[]): ProcessedSegment[][] => {
    const words: ProcessedSegment[][] = [];
    let currentWord: ProcessedSegment[] = [];
    
    for (const segment of segments) {
      if (segment.isNewline) {
        if (currentWord.length > 0) {
          words.push([...currentWord]);
          currentWord = [];
        }
        words.push([segment]);
      } else if (segment.isWhitespace || segment.content.match(/[\s\t]/)) {
        if (currentWord.length > 0) {
          words.push([...currentWord]);
          currentWord = [];
        }
        words.push([segment]);
      } else {
        currentWord.push(segment);
      }
    }
    
    if (currentWord.length > 0) {
      words.push(currentWord);
    }
    
    return words;
  };

  // 按行分割
  const splitIntoLines = (segments: ProcessedSegment[]): ProcessedSegment[][] => {
    const lines: ProcessedSegment[][] = [];
    let currentLine: ProcessedSegment[] = [];
    
    for (const segment of segments) {
      if (segment.isNewline) {
        if (currentLine.length > 0) {
          lines.push([...currentLine]);
          currentLine = [];
        }
      } else {
        currentLine.push(segment);
      }
    }
    
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
    
    return lines;
  };

  const processedSegments = useMemo(() => {
    const segments = extractTextContent(children);
    
    switch (splitMode) {
      case "word":
        return splitIntoWords(segments);
      case "line":
        return splitIntoLines(segments);
      case "char":
      default:
        return segments.map(seg => [seg]);
    }
  }, [children, splitMode]);

  const renderContent = () => {
    return processedSegments.map((segmentGroup, groupIndex) => {
      if (splitMode === "line") {
        return (
          <div 
            key={`line-${groupIndex}`} 
            className="scroll-float-line"
            data-scroll-unit="line"
          >
            {segmentGroup.map((segment, segmentIndex) => renderSegment(segment, segmentIndex))}
          </div>
        );
      }
      
      return segmentGroup.map((segment, segmentIndex) => 
        renderSegment(segment, `${groupIndex}-${segmentIndex}`)
      );
    });
  };

  const renderSegment = (segment: ProcessedSegment, key: string | number) => {
    if (segment.type === "text" && segment.isNewline) {
      return <br key={key} />;
    }
    
    if (segment.type === "text") {
      return (
        <span
          key={key}
          className={`scroll-float-unit inline-block ${segment.isWhitespace ? 'whitespace-pre' : ''}`}
          data-scroll-unit={splitMode === "char" ? "char" : splitMode === "word" ? "word" : "part"}
        >
          {segment.content}
        </span>
      );
    }
    
    if (segment.elementType === "span") {
      return (
        <span
          key={key}
          className={`scroll-float-unit inline-block ${segment.className || ""}`}
          data-scroll-unit={splitMode === "char" ? "char" : splitMode === "word" ? "word" : "part"}
        >
          {segment.content}
        </span>
      );
    }
    
    return null;
  };

  useEffect(() => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    const initAnimation = () => {
      const container = containerRef.current;
      if (!container) return;

      const scroller =
        scrollContainerRef && scrollContainerRef.current
          ? scrollContainerRef.current
          : window;

      const selector = splitMode === "line" 
        ? ".scroll-float-line" 
        : ".scroll-float-unit";

      const animatedElements = container.querySelectorAll(selector);

      if (animatedElements.length > 0) {
        gsap.fromTo(
          animatedElements,
          {
            willChange: "opacity, transform",
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: "50% 0%",
          },
          {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: stagger,
            scrollTrigger: {
              trigger: container,
              scroller,
              start: scrollStart,
              end: scrollEnd,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    };

    // 延迟初始化以确保DOM完全渲染
    animationIdRef.current = requestAnimationFrame(() => {
      setTimeout(initAnimation, 100);
    });

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    splitMode,
    processedSegments,
  ]);

  return (
    <div
      ref={containerRef}
      className={`my-5 overflow-hidden ${containerClassName}`}
    >
      <div className={`${textClassName}`}>
        {renderContent()}
      </div>
    </div>
  );
};

// 专门的适配组件，针对您的具体格式
export const BentoScrollFloat: React.FC<Omit<ScrollFloatEnhancedProps, 'splitMode'>> = (props) => {
  return (
    <ScrollFloatEnhanced
      splitMode="word" // 针对这种格式，使用单词分割效果更好
      {...props}
    />
  );
};

export default ScrollFloatEnhanced;