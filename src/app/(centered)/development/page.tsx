import ArrowTab from "@components/pageNav/ArrowTab";

import Backend from "./Backend";
import Database from "./Database";
import Deploy from "./Deploy";
import Design from "./Design";
import Frontend from "./Frontend";
import Style from "./Style";
import System from "./System";
import Testing from "./Testing";
import VersionControl from "./VersionControl";

export default function Development() {
  return (
    <div className="flex h-full w-full flex-row justify-center">
      <ArrowTab
        tabs={[
          "Style",
          "Frontend",
          "Backend",
          "Deploy",
          "System",
          "Database",
          "VC",
          "Testing",
          "Design",
        ]}
        tabContent={[
          <Style key={1} />,
          <Frontend key={2} />,
          <Backend key={3} />,
          <Deploy key={4} />,
          <System key={5} />,
          <Database key={6} />,
          <VersionControl key={7} />,
          <Testing key={8} />,
          <Design key={9} />,
        ]}
      />
    </div>
  );
}
