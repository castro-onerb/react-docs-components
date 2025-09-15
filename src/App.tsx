import "./App.css";
import { Code } from "./shared/components/Code";
import { Icon } from "./shared/components/Icon";

function App() {
  const iconCode = `<Icon name="hospital_line" size={20} />`;

  return (
    <div className="flex flex-col gap-5 items-center">
      <p>Componente de ícone</p>
      <Code.Demo code={iconCode}>
        <Icon name="hospital_line" size={20} />
      </Code.Demo>
    </div>
  );
}

export default App;
