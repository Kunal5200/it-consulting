"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/cursor.module.css";

const TRAIL_COUNT = 10;

const CustomCursor = () => {
  const mainCursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const coords = { x: 0, y: 0 };
    const positions = Array(TRAIL_COUNT).fill({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;

      // Main cursor
      if (mainCursorRef.current) {
        mainCursorRef.current.style.left = `${e.clientX}px`;
        mainCursorRef.current.style.top = `${e.clientY}px`;
      }

      // Optional follower
      if (followerRef.current) {
        followerRef.current.style.left = `${e.clientX}px`;
        followerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = () => {
      mainCursorRef.current?.classList.add(styles.active);
    };

    const handleUnhover = () => {
      mainCursorRef.current?.classList.remove(styles.active);
    };

    const animate = () => {
      let { x, y } = coords;

      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;

        let pos = positions[i];
        pos = {
          x: pos.x + (x - pos.x) * 0.25,
          y: pos.y + (y - pos.y) * 0.25,
        };
        positions[i] = pos;

        dot.style.left = `${pos.x}px`;
        dot.style.top = `${pos.y}px`;

        x = pos.x;
        y = pos.y;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    // Hover state for buttons and links
    const hoverTargets = document.querySelectorAll("a, button");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={mainCursorRef}
        className={`${styles.cursor_wrapp} ${styles.cursor}`}
      ></div>
      <div ref={followerRef} className={styles.cursor_follower}></div>

      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
          className={styles.cursor_trail}
        />
      ))}
    </>
  );
};

export default CustomCursor;
