import ArrowTab from "../ArrowTab";
import Backend from "./Backend";
import Deploy from "./Deploy";
import Design from "./Design";
import Frontend from "./Frontend";
import Style from "./Style";
import System from "./System";
import Testing from "./Testing";
import VersionControl from "./VersionControl";

export default function Development() {
  const availableTabs = ['Style', 'Frontend', 'Backend', 'Deploy', 'System', 'VC', 'Design', 'Testing'];
  return (
    <main>
      <ArrowTab
        tabs={availableTabs}
        tabContent={
          [
            <Style />,
            <Frontend />,
            <Backend />,
            <Deploy />,
            <System />,
            <VersionControl />,
            <Design />,
            <Testing />,
          ]
        }
      />
    </main>
  );
}
