import { useState } from "react";

const useToolCount = () => {
  const [toolsCount, setToolsCount] = useState<number>(0);

  function persistToolsCount(toolsNumber: number) {
    const toolsCountInfo = localStorage.getItem("toolsCount");
    if (!toolsCountInfo) {
      JSON.stringify(localStorage.setItem("toolsCount", String(toolsNumber)));
      setToolsCount(Number(localStorage.getItem("toolsCount")));
      return;
    } else if (Number(toolsCountInfo) !== toolsNumber) {
      JSON.stringify(localStorage.setItem("toolsCount", String(toolsNumber)));
      setToolsCount(Number(localStorage.getItem("toolsCount")));
      return;
    }
    setToolsCount(Number(toolsCountInfo));
  }

  function getToolsCount() {
    return localStorage.getItem("toolsCount");
  }

  return { toolsCount, setToolsCount, persistToolsCount, getToolsCount };
};

export { useToolCount };
