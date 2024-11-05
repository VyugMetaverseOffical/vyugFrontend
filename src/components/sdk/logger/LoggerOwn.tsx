import { useEffect, useRef, useState } from "react";
import { useLogger } from "./context";
import { scrollToBottom } from "../common";
import "../../../css/sdk.css";

export const LoggerOwn = () => {
  const { logs } = useLogger();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isCollapsed && logsEndRef.current) {
      scrollToBottom(logsEndRef.current);
    }
  }, [logs, isCollapsed]);

  return (
    <div className={`logger-own${isCollapsed ? " logger--collapsed" : ""}`}>
      <button
        className="logger-own__toggle"
        onClick={() => setIsCollapsed(prev => !prev)}
      >
        {isCollapsed ? "Expand Logger" : "Collapse Logger"}
      </button>
      {!isCollapsed && (
        <ul className="logger-own__list">
          {logs.map((log, index) => (
            <li key={index}>
              <pre>{log}</pre>
            </li>
          ))}
          <div ref={logsEndRef}></div>
        </ul>
      )}
    </div>
  );
};
