"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useMemo, useState, useCallback, useEffect, useRef } from "react";

interface SplitFlapTextProps {
  text: string;
  className?: string;
  speed?: number;
}

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.".split("");

function SplitFlapTextInner({
  text,
  className = "",
  speed = 50,
}: SplitFlapTextProps) {
  const chars = useMemo(() => text.split(""), [text]);
  const [animationKey, setAnimationKey] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitialized(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`inline-flex gap-[0.08em] items-center cursor-arrow ${className}`}
      aria-label={text}
      style={{ perspective: "1000px" }}
    >
      {chars.map((char, index) => (
        <SplitFlapChar
          key={index}
          char={char.toUpperCase()}
          index={index}
          animationKey={animationKey}
          skipEntrance={hasInitialized}
          speed={speed}
        />
      ))}
    </div>
  );
}

export function SplitFlapText(props: SplitFlapTextProps) {
  return <SplitFlapTextInner {...props} />;
}

interface SplitFlapCharProps {
  char: string;
  index: number;
  animationKey: number;
  skipEntrance: boolean;
  speed: number;
}

function SplitFlapChar({
  char,
  index,
  animationKey,
  skipEntrance,
  speed,
}: SplitFlapCharProps) {
  const displayChar = CHARSET.includes(char) ? char : " ";
  const isSpace = char === " ";
  const [currentChar, setCurrentChar] = useState(
    skipEntrance ? displayChar : " ",
  );
  const [isSettled, setIsSettled] = useState(skipEntrance);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tileDelay = 0.15 * index;

  const bgColor = "transparent";
  const textColor = isSettled ? "#ffffff" : "#f97316";

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (isSpace) {
      setCurrentChar(" ");
      setIsSettled(true);
      return;
    }

    setIsSettled(false);
    setCurrentChar(CHARSET[Math.floor(Math.random() * CHARSET.length)]);

    const baseFlips = 8;
    const startDelay = skipEntrance ? tileDelay * 400 : tileDelay * 800;
    let flipIndex = 0;
    let hasStartedSettling = false;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        const settleThreshold = baseFlips + index * 3;

        if (flipIndex >= settleThreshold && !hasStartedSettling) {
          hasStartedSettling = true;
          if (intervalRef.current) clearInterval(intervalRef.current);
          setCurrentChar(displayChar);
          setIsSettled(true);
          return;
        }
        setCurrentChar(CHARSET[Math.floor(Math.random() * CHARSET.length)]);
        flipIndex++;
      }, speed);
    }, startDelay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    displayChar,
    isSpace,
    tileDelay,
    animationKey,
    skipEntrance,
    index,
    speed,
  ]);

  if (isSpace) {
    return (
      <div
        style={{
          width: "0.3em",
          fontSize: "clamp(4rem, 15vw, 14rem)",
        }}
      />
    );
  }

  return (
    <motion.div
      initial={skipEntrance ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: tileDelay, duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden flex items-center justify-center font-[var(--font-bebas)]"
      style={{
        fontSize: "clamp(4rem, 15vw, 14rem)",
        width: "0.65em",
        height: "1.05em",
        backgroundColor: bgColor,
        transition: "background-color 0.15s ease",
        color: textColor,
      }}
    >
      {currentChar}
    </motion.div>
  );
}
