import { Badge } from "./components/badge";
import { Icon } from "./components/icon";
import { Text } from "./components/text";

export function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-md-bold" className="text-pink-base">
          ToDo List
        </Text>
        <Text variant="body-md">Titolino</Text>
      </div>

      <div className="flex gap-1">
        <Icon name="check" className="fill-green-base" />
        <Icon name="pencil" />
        <Icon name="plus" />
        <Icon name="spinner" animate={true} />
        <Icon name="trash" className="fill-gray-300" />
        <Icon name="x" className="fill-pink-dark" />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
    </div>
  );
}
